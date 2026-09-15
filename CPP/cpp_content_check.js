const fs = require("fs"),
  vm = require("vm"),
  assert = require("assert");
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(__dirname + "/cpp_lessons.js", "utf8"), ctx);
vm.runInContext(fs.readFileSync(__dirname + "/cpp_exercises.js", "utf8"), ctx);
const L = ctx.window.cppLessons,
  E = ctx.window.cppExercises;
assert(L.length >= 80, "Need 80+ C++ lessons");
assert.equal(new Set(L.map((x) => x.id)).size, L.length);
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
  ])
    assert(l[k], `${l.id} missing ${k}`);
  assert(l.concept.content.length > 40);
  assert(l.examples.length);
  assert(
    l.examples[0].code.includes("#include") ||
      l.examples[0].code.includes("std::"),
    `${l.id} example not C++`,
  );
  for (const q of l.quiz) assert(q.answer >= 0 && q.answer < q.options.length);
  for (const p of l.prerequisites)
    assert(
      L.some((x) => x.id === p),
      `${l.id} missing ${p}`,
    );
}
const topics = {};
for (const e of E) {
  assert(e.testCases.length);
  topics[e.topic] = (topics[e.topic] || 0) + 1;
}
for (const [topic, n] of Object.entries(topics))
  assert(n >= 5, `${topic} has ${n}`);
assert(Object.keys(topics).length >= 10, "Need 10 exercise topics");
assert(Object.keys(topics).length >= 7, "Need multiple exercise topics");
assert(!JSON.stringify(L).match(/Coming soon|Lorem ipsum|Lesson content/i));
console.log(
  JSON.stringify({
    chapters: new Set(L.map((x) => x.chapter)).size,
    lessons: L.length,
    concepts: L.filter((x) => x.concept.content).length,
    examples: L.reduce((n, x) => n + x.examples.length, 0),
    exercises: E.length,
    exerciseTopics: topics,
    quizzes: L.reduce((n, x) => n + x.quiz.length, 0),
  }),
);
