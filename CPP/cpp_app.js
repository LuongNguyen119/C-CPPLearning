(function () {
  const lessons = window.cppLessons || [],
    exercises = window.cppExercises || [];
  const $ = (id) => document.getElementById(id),
    nav = $("nav"),
    content = $("content"),
    scroll = $("scroll");
  const key = "cpp-learning-progress-v1";
  let state;
  try {
    state = JSON.parse(localStorage.getItem(key) || "{}");
  } catch (e) {
    state = {};
  }
  state.lessons = state.lessons || {};
  state.exercises = state.exercises || {};
  state.quiz = state.quiz || {};
  let active = null;
  const esc = (v) =>
    String(v ?? "").replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  function formatCpp(source) {
    const text = String(source ?? '').replace(/\r/g, '').trim();
    if (!text) return '';
    let result = '', line = '', indent = 0, parens = 0;
    const flush = () => { if (line.trim()) result += '  '.repeat(indent) + line.trim() + '\n'; line = ''; };
    for (const char of text) {
      if (char === '(') parens++;
      if (char === ')') parens--;
      if (char === '{') { line = line.trimEnd() + ' {'; flush(); indent++; continue; }
      if (char === '}') { flush(); indent = Math.max(0, indent - 1); result += '  '.repeat(indent) + '}'; continue; }
      if (char === ';' && parens === 0) { line += ';'; flush(); continue; }
      if (char === '\n') { flush(); continue; }
      line += char;
    }
    flush();
    return result.replace(/\n\s*\n/g, '\n').trim();
  }
  const save = () => localStorage.setItem(key, JSON.stringify(state));
  const lesson = (id) => lessons.find((x) => x.id === id);
  function progress() {
    const n = lessons.filter((x) => state.lessons[x.id]?.completed).length,
      p = lessons.length ? Math.round((n * 100) / lessons.length) : 0;
    $("done").textContent = n;
    $("total").textContent = lessons.length;
    $("pct").textContent = p;
    $("bar").style.width = p + "%";
  }
  function renderNav(filter = "") {
    const q = filter.toLowerCase();
    let html =
        '<button class="nav-link w-full text-left px-4 py-3 text-sm font-bold text-emerald-700 border-b" data-home>⌂ Trang chủ</button><button class="nav-link w-full text-left px-4 py-3 text-sm font-bold text-emerald-700 border-b" data-exercises>📝 C++ Exercises</button>',
      last = "";
    lessons.forEach((l) => {
      if (
        q &&
        !`${l.title} ${l.chapter} ${l.description} ${l.concept.content} ${l.syntax[0].code} ${l.examples[0].code}`
          .toLowerCase()
          .includes(q)
      )
        return;
      if (l.chapter !== last) {
        html += `<div class="chapter-label">${esc(l.chapter)}</div>`;
        last = l.chapter;
      }
      html += `<button data-lesson="${esc(l.id)}" class="nav-link w-full text-left px-4 py-2 text-sm flex gap-2 items-center"><span class="progress-dot ${state.lessons[l.id]?.completed ? "done" : "todo"}"></span><span>${esc(l.title)}</span></button>`;
    });
    nav.innerHTML = html;
    nav.querySelector("[data-home]").onclick = home;
    nav.querySelector("[data-exercises]").onclick = renderExercises;
    nav
      .querySelectorAll("[data-lesson]")
      .forEach((b) => (b.onclick = () => renderLesson(b.dataset.lesson)));
    const a = nav.querySelector(`[data-lesson="${CSS.escape(active || "")}"]`);
    if (a) a.classList.add("active");
  }
  function home() {
    active = null;
    location.hash = "#home";
    content.innerHTML = `<section class="fade"><div class="hero"><span>C++ PROGRAMMING LEARNING</span><h2>Học C++ từ số 0</h2><p>Học C++ hiện đại theo lộ trình từng bước: iostream, string, vector, hàm, class, OOP, STL, RAII và file I/O.</p><button id="start" class="primary-btn">Bắt đầu học →</button></div><div class="feature-grid"><div class="surface"><h3>Dễ học</h3><p class="muted">Giải thích gần gũi cho người mới.</p></div><div class="surface"><h3>C++ hiện đại</h3><p class="muted">Ưu tiên STL, RAII và ownership an toàn.</p></div><div class="surface"><h3>Thực hành</h3><p class="muted">Ví dụ, bài tập, quiz và tiến độ.</p></div></div><div class="surface overview"><h3>${lessons.length} bài học · ${exercises.length} bài tập</h3><p class="muted">Cấu trúc tham khảo W3Schools C++, nội dung được viết lại bằng tiếng Việt.</p></div></section>`;
    $("start").onclick = () => renderLesson(lessons[0].id);
    renderNav($("search").value);
    progress();
  }
  function renderLesson(id, change = true) {
    const l = lesson(id) || lessons[0];
    if (!l) return home();
    active = l.id;
    if (change) location.hash = "#learn/" + l.slug;
    const i = lessons.indexOf(l),
      st = state.lessons[l.id] || {},
      ex =
        exercises.find((x) => (l.exerciseIds || []).includes(x.id)) ||
        exercises[0],
      explain = l.examples[0];
    content.innerHTML = `<article class="fade"><div class="lesson-header"><div class="breadcrumb">C++ / ${esc(l.chapter)} / ${esc(l.title)}</div><h2>${esc(l.title)}</h2><p>${esc(l.description)}</p><div class="badges"><span class="badge ${l.difficulty}">${l.difficulty}</span><span class="badge">${l.estimatedTime} phút</span><span class="badge">Bài ${i + 1}/${lessons.length}</span><span class="badge">${st.completed ? "Completed" : "In progress"}</span></div></div><section class="surface lesson-content"><h3>1. Giới thiệu và khái niệm</h3><p>${esc(l.concept.content)}</p><h3>2. Prerequisite</h3><p class="muted">${l.prerequisites.length ? l.prerequisites.map((x) => esc(lesson(x)?.title || x)).join(" · ") : "Không yêu cầu; bài nền tảng."}</p><h3>3. Mục tiêu</h3><ul>${l.objectives.map((x) => `<li>${esc(x)}</li>`).join("")}</ul><h3>4. Cú pháp</h3><pre><code class="language-cpp">${esc(l.syntax[0].code)}</code></pre><p>${esc(l.syntax[0].explanation)}</p><h3>5. Ví dụ và phân tích</h3><pre><code class="language-cpp">${esc(explain.code)}</code></pre><div class="output-box"><b>Output dự kiến</b><pre>${esc(explain.output)}</pre></div><p>${esc(explain.explanation)}</p><h3>6. Khi nào sử dụng</h3><ul>${l.useCases.map((x) => `<li>${esc(x)}</li>`).join("")}</ul><div class="remember"><b>💡 Bạn cần nhớ</b><ul>${l.keyTakeaways.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div><h3>7. Lỗi thường gặp</h3>${l.commonMistakes.map((x) => `<div class="mistake"><p><b>Sai:</b> <code>${esc(x.wrong)}</code></p><p>${esc(x.why)}</p><p><b>Đúng:</b> <code>${esc(x.correct)}</code></p></div>`).join("")}<h3>8. Bài tập</h3><p>Luyện tập với <b>${esc(ex.title)}</b>.</p><button id="openEx" class="primary-btn">Mở bài tập →</button><h3>9. Quiz</h3><div id="quizBox"></div><h3>10. Tóm tắt</h3><p>${esc(l.keyTakeaways.join(" "))}</p><div class="lesson-actions"><button id="prev" class="secondary-btn">← Bài trước</button><button id="complete" class="primary-btn">${st.completed ? "Đã hoàn thành" : "Đánh dấu hoàn thành"} ✓</button><button id="next" class="primary-btn">Bài tiếp →</button></div></section></article>`;
    if (window.hljs)
      document
        .querySelectorAll("pre code")
        .forEach((x) => hljs.highlightElement(x));
    $("openEx").onclick = () => renderExercise(ex.id);
    $("complete").onclick = () => {
      state.lessons[l.id] = Object.assign({}, state.lessons[l.id], {
        completed: true,
      });
      save();
      renderLesson(l.id, false);
    };
    $("prev").disabled = i === 0;
    $("next").disabled = i === lessons.length - 1;
    $("prev").onclick = () => renderLesson(lessons[i - 1].id);
    $("next").onclick = () => renderLesson(lessons[i + 1].id);
    renderQuiz(l);
    renderNav($("search").value);
    progress();
    scroll.scrollTop = 0;
  }
  function renderQuiz(l) {
    const q = l.quiz || [];
    $("quizBox").innerHTML = q
      .map(
        (x, qi) =>
          `<div class="quiz-question"><p><b>${qi + 1}.</b> ${esc(x.question)}</p><div class="quiz-options">${x.options.map((o, oi) => `<button class="quiz-option" data-answer="${oi}" data-correct="${x.answer}">${esc(o)}</button>`).join("")}</div><p class="quiz-feedback" aria-live="polite"></p></div>`,
      )
      .join("");
    $("quizBox")
      .querySelectorAll(".quiz-option")
      .forEach(
        (b) =>
          (b.onclick = () => {
            const box = b.closest(".quiz-question"),
              ok = +b.dataset.answer === +b.dataset.correct;
            box.querySelectorAll("button").forEach((x) => (x.disabled = true));
            b.classList.add(ok ? "correct" : "wrong");
            const pos = [
              ...document.querySelectorAll("#quizBox .quiz-question"),
            ].indexOf(box);
            box.querySelector(".quiz-feedback").textContent = ok
              ? "Chính xác! " + q[pos].explanation
              : "Chưa đúng. Đọc lại phần khái niệm và thử lại.";
            state.quiz[l.id] = state.quiz[l.id] || {
              answered: {},
              correct: 0,
              total: q.length,
            };
            if (!state.quiz[l.id].answered[pos]) {
              state.quiz[l.id].answered[pos] = true;
              if (ok) state.quiz[l.id].correct++;
            }
            save();
          }),
      );
  }
  function renderExercises() {
    active = null;
    location.hash = "#exercises";
    content.innerHTML =
      '<section class="fade"><div class="lesson-header"><div class="breadcrumb">C++ / Practice</div><h2>C++ Exercises</h2><p>Luyện tập theo topic và độ khó.</p></div><div class="surface filters"><input id="eq" placeholder="Tìm bài tập..." aria-label="Tìm bài tập"><select id="ed"><option value="">Tất cả độ khó</option><option>easy</option><option>medium</option><option>hard</option></select><select id="et"><option value="">Tất cả topic</option></select></div><div id="exerciseProgress" class="surface overview"></div><div id="exerciseList" class="exercise-grid"></div></section>';
    [...new Set(exercises.map((x) => x.topic))].forEach((t) =>
      $("et").insertAdjacentHTML("beforeend", `<option>${esc(t)}</option>`),
    );
    const draw = () => {
      const q = $("eq").value.toLowerCase(),
        d = $("ed").value,
        t = $("et").value,
        items = exercises.filter(
          (x) =>
            (!q ||
              (
                x.title +
                " " +
                x.description +
                " " +
                x.topic +
                " " +
                x.tags.join(" ")
              )
                .toLowerCase()
                .includes(q)) &&
            (!d || x.difficulty === d) &&
            (!t || x.topic === t),
        );
      $("exerciseList").innerHTML = items.length
        ? items
            .map((x) => {
              const st = state.exercises[x.id] || {};
              return `<article class="surface exercise-card"><div class="card-top"><span>${esc(x.id)}</span><span class="badge ${x.difficulty}">${x.difficulty}</span></div><h3>${esc(x.title)}</h3><p>${esc(x.description)}</p><div class="card-meta"><span>${esc(x.topic)}</span><span>${x.estimatedTime} phút</span></div><div class="card-bottom"><span>${st.completed ? "✓ Completed" : "Chưa làm"}</span><button class="primary-btn" data-ex="${esc(x.id)}">${st.completed ? "Review" : "Start Exercise"}</button></div></article>`;
            })
            .join("")
        : '<p class="muted">Không tìm thấy bài.</p>';
      $("exerciseList")
        .querySelectorAll("[data-ex]")
        .forEach((b) => (b.onclick = () => renderExercise(b.dataset.ex)));
      const n = exercises.filter(
        (x) => state.exercises[x.id]?.completed,
      ).length;
      $("exerciseProgress").innerHTML =
        `<b>Tiến độ: ${n}/${exercises.length} · ${Math.round((n * 100) / exercises.length)}%</b><div class="progress-track"><div style="width:${(n * 100) / exercises.length}%"></div></div>`;
    };
    $("eq").oninput = draw;
    $("ed").onchange = draw;
    $("et").onchange = draw;
    draw();
    renderNav();
    progress();
  }
  function renderExercise(id) {
    const x = exercises.find((e) => e.id === id) || exercises[0];
    location.hash = "#exercises/" + x.slug;
    content.innerHTML = `<article class="fade"><button id="back" class="link-btn">← C++ Exercises</button><div class="lesson-header"><div class="breadcrumb">C++ Exercises / ${esc(x.topic)}</div><h2>${esc(x.title)}</h2><p>${esc(x.description)}</p><div class="badges"><span class="badge ${x.difficulty}">${x.difficulty}</span><span class="badge">${x.estimatedTime} phút</span></div></div><section class="surface lesson-content"><h3>Problem</h3><p>${esc(x.description)}</p><h3>Test cases</h3><div class="test-grid">${x.testCases.map((t, i) => `<div class="test-card"><b>Test ${i + 1}</b><br>Input: <code>${esc(t.input || "(none)")}</code><br>Expected: <code>${esc(t.expected)}</code></div>`).join("")}</div><h3>Code Editor</h3><textarea id="editor" class="editor" spellcheck="false">${esc(x.starterCode)}</textarea><div class="editor-actions"><button id="run" class="primary-btn">Run Code</button><button id="submit" class="primary-btn">Submit</button><button id="resetCode" class="secondary-btn">Reset</button><button id="copy" class="secondary-btn">Copy</button></div><pre id="out" class="output-box hidden"></pre><div id="result"></div><h3>Hints</h3><div class="hint-actions">${x.hints.map((_, i) => `<button class="hint-btn" data-i="${i}">Hint ${i + 1}</button>`).join("")}</div><p id="hintText"></p><button id="solution" class="secondary-btn"><span aria-hidden="true">💡</span> Show Solution</button><div id="solutionBox" class="solution-card hidden"><div class="solution-card-header"><span><i class="fas fa-check-circle"></i> Lời giải tham khảo</span><span class="small">C++20</span></div><pre class="solution-code"><code class="language-cpp">${esc(formatCpp(x.solution))}</code></pre><div class="solution-explanation"><b>Giải thích:</b> ${esc(x.explanation)}</div></div><p class="muted small">C++ được biên dịch bằng g++ local qua cpp_server.py.</p></section></article>`;
    if (window.hljs) hljs.highlightAll();
    $("back").onclick = renderExercises;
    $("resetCode").onclick = () => ($("editor").value = x.starterCode);
    $("copy").onclick = () => navigator.clipboard?.writeText($("editor").value);
    $("solution").onclick = () => {
      if (confirm("Bạn có chắc muốn xem đáp án?"))
        $("solutionBox").classList.toggle("hidden");
    };
    document
      .querySelectorAll(".hint-btn")
      .forEach(
        (b) =>
          (b.onclick = () =>
            ($("hintText").textContent = x.hints[+b.dataset.i])),
      );
    $("run").onclick = () =>
      execute($("editor").value, x.testCases[0]?.input || "", $("out"));
    $("submit").onclick = async () => {
      const rows = [];
      for (const t of x.testCases) {
        try {
          const r = await fetch("/api/run", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              language: "cpp",
              standard: "c++20",
              code: $("editor").value,
              input: t.input || "",
            }),
          });
          const d = await r.json();
          rows.push({
            ok: d.ok && (d.output || "").trim() === t.expected.trim(),
            actual: d.output || "",
            expected: t.expected,
          });
        } catch (e) {
          rows.push({
            ok: false,
            actual: "Backend unavailable",
            expected: t.expected,
          });
        }
      }
      const pass = rows.filter((r) => r.ok).length;
      $("result").innerHTML =
        `<div class="result ${pass === rows.length ? "success" : "failure"}"><b>${pass}/${rows.length} tests passed · Score ${Math.round((pass * 100) / rows.length)}/100</b>${rows.map((r, i) => `<p>${r.ok ? "✓" : "✕"} Test ${i + 1}${r.ok ? "" : " · Expected: " + esc(r.expected) + " · Got: " + esc(r.actual)}</p>`).join("")}</div>`;
      state.exercises[x.id] = Object.assign({}, state.exercises[x.id], {
        completed: pass === rows.length,
        bestScore: Math.max(
          (pass * 100) / rows.length,
          state.exercises[x.id]?.bestScore || 0,
        ),
        attempts: (state.exercises[x.id]?.attempts || 0) + 1,
      });
      save();
    };
  }
  async function execute(code, input, node) {
    node.classList.remove("hidden");
    node.textContent = "Đang biên dịch và chạy...";
    try {
      const r = await fetch("/api/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: "cpp",
          standard: "c++20",
          code,
          input,
        }),
      });
      const d = await r.json();
      node.textContent =
        (d.phase === "compile" ? "Lỗi biên dịch:\n" : "Kết quả chạy:\n") +
        (d.output || "Không có output.");
    } catch (e) {
      node.textContent =
        "Không kết nối được cpp_server.py. Mở trang qua http://127.0.0.1:8766/CPP.html.";
    }
  }
  function toggleSidebar() {
    const sidebar = $("sidebar"),
      backdrop = $("backdrop");
    if (!sidebar || !backdrop) return;
    sidebar.classList.toggle("open");
    backdrop.classList.toggle("show");
  }
  if ($("toggle")) $("toggle").onclick = toggleSidebar;
  if ($("search")) $("search").oninput = (e) => renderNav(e.target.value);
  if ($("theme"))
    $("theme").onclick = () => {
      document.body.classList.toggle("dark");
      localStorage.setItem(
        "cpp-theme",
        document.body.classList.contains("dark") ? "dark" : "light",
      );
    };
  if (localStorage.getItem("cpp-theme") === "dark")
    document.body.classList.add("dark");
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      $("search").focus();
    }
    if (e.ctrlKey && e.key.toLowerCase() === "b") {
      e.preventDefault();
      toggleSidebar();
    }
  });
  if ($("reset"))
    $("reset").onclick = () => {
      if (confirm("Đặt lại tiến độ C++?")) {
        state.lessons = {};
        state.exercises = {};
        state.quiz = {};
        save();
        home();
      }
    };
  function route() {
    const h = location.hash;
    if (h === "#exercises") return renderExercises();
    let m = h.match(/^#exercises\/(.+)$/);
    if (m) {
      const x = exercises.find((e) => e.slug === m[1] || e.id === m[1]);
      return x ? renderExercise(x.id) : renderExercises();
    }
    m = h.match(/^#learn\/(.+)$/);
    if (m) {
      const l = lessons.find((e) => e.slug === m[1] || e.id === m[1]);
      return l ? renderLesson(l.id, false) : home(false);
    }
    home(false);
  }
  window.addEventListener("hashchange", route);
  window.cppApp = { route, renderLesson, renderExercises, renderExercise };
  route();
})();
