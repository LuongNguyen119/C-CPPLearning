const fs = require("fs"),
  vm = require("vm"),
  assert = require("assert");
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(__dirname + "/cpp_lessons.js", "utf8"), ctx);
vm.runInContext(fs.readFileSync(__dirname + "/cpp_exercises.js", "utf8"), ctx);
const L = ctx.window.cppLessons,
  E = ctx.window.cppExercises;
assert.equal(L.length, 150, "Need 150 C++ lessons");
assert.equal(new Set(L.map((x) => x.id)).size, L.length, "Duplicate lesson ids");
assert.equal(
  new Set(L.map((x) => x.slug)).size,
  L.length,
  "Duplicate lesson slugs",
);
for (const l of L) {
  for (const k of [
    "id",
    "slug",
    "title",
    "chapter",
    "concept",
    "syntax",
    "examples",
    "objectives",
    "commonMistakes",
    "keyTakeaways",
    "quiz",
    "sections",
    "tables",
    "source",
  ])
    assert(l[k] !== undefined && l[k] !== null, `${l.id} missing ${k}`);
  assert(l.concept.content.length > 40, `${l.id} concept too short`);
  assert(l.examples.length, `${l.id} has no examples`);
  assert(l.syntax[0] && l.syntax[0].code, `${l.id} missing syntax code`);
  for (const ex of l.examples)
    assert(ex.code && ex.code.length > 5, `${l.id} example empty`);
  for (const q of l.quiz) assert(q.answer >= 0 && q.answer < q.options.length);
  assert(l.quiz.length >= 1, `${l.id} needs a quiz`);
  for (const p of l.prerequisites)
    assert(
      L.some((x) => x.id === p),
      `${l.id} bad prerequisite ${p}`,
    );
  assert(/^https:\/\/www\.w3schools\.com\/cpp\//.test(l.source), `${l.id} bad source`);
}
const topics = {};
for (const e of E) {
  assert(e.testCases.length, `${e.id} has no tests`);
  for (const t of e.testCases)
    assert(typeof t.expected === "string", `${e.id} test without expected`);
  assert(
    ["easy", "medium", "hard"].includes(e.difficulty),
    `${e.id} bad difficulty`,
  );
  assert(e.solution && e.solution.length > 20, `${e.id} empty solution`);
  topics[e.topic] = (topics[e.topic] || 0) + 1;
}
const lessonChapters = new Set(L.map((x) => x.chapter));
assert(
  Object.keys(topics).every((t) => lessonChapters.has(t)),
  "Exercise topic missing from curriculum chapters",
);
assert(
  [...lessonChapters].every((c) => topics[c] >= 5),
  "Each curriculum chapter needs >= 5 exercises",
);
assert(Object.keys(topics).length >= 16, "Need one topic group per chapter");
assert(
  new Set(E.map((x) => x.title)).size === E.length,
  "Duplicate exercise titles",
);
assert(
  !JSON.stringify(L).match(/Coming soon|Lorem ipsum|Lesson content|TODO/i),
  "Placeholder text found",
);
const withRealCode = L.filter(
  (x) => x.examples[0].title !== "Khung thử nghiệm",
).length;
assert(withRealCode >= 100, `Only ${withRealCode} lessons with real code`);
let notRunnableCount = 0;
for (const x of L) {
  for (const ex of x.examples) {
    if (ex.runnable === false) { notRunnableCount++; continue; }
    if (ex.input && !/\bcin\b|getline/.test(ex.code || "")) {
      throw new Error(`Example has input but no cin: ${x.id} "${ex.title}"`);
    }
  }
}
console.log(
  JSON.stringify(
    {
      chapters: new Set(L.map((x) => x.chapter)).size,
      lessons: L.length,
      lessonsWithRealCode: withRealCode,
      totalExamples: L.reduce((n, x) => n + x.examples.length, 0),
      runnableExamples: L.reduce((n, x) => n + x.examples.length, 0) - notRunnableCount,
      notRunnableExamples: notRunnableCount,
      lessonsWithTables: L.filter((x) => x.tables.length).length,
      exercises: E.length,
      exerciseTopics: Object.keys(topics).length,
      quizzes: L.reduce((n, x) => n + x.quiz.length, 0),
      avgQuiz: +(L.reduce((n, x) => n + x.quiz.length, 0) / L.length).toFixed(2),
    },
    null,
    2,
  ),
);
