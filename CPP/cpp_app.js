(function () {
  const lessons = window.cppLessons || [],
    exercises = window.cppExercises || [];
  const lessonTopic = (l) => l.chapter;
  const CHAPTERS = [...new Set(lessons.map((l) => l.chapter))];
  const CHAPTER_INTRO = {
    "01 · C++ Cơ bản": "Nền tảng: cú pháp, câu lệnh, xuất/nhập và comment.",
    "02 · Biến & Kiểu dữ liệu": "Biến, hằng số, identifier, các kiểu dữ liệu và auto.",
    "03 · Toán tử": "Số học, gán, so sánh, logic và độ ưu tiên.",
    "04 · Chuỗi (Strings)": "string, nối chuỗi, độ dài, ký tự đặc biệt, C-style.",
    "05 · Toán học & Boolean": "Hàm toán học và logic true/false.",
    "06 · Điều kiện & Switch": "if/else, nested if, ternary và switch.",
    "07 · Vòng lặp": "while, do-while, for, vòng lặp lồng và break/continue.",
    "08 · Mảng": "Mảng một và nhiều chiều, duyệt mảng và kích thước.",
    "09 · Struct, Enum, Tham chiếu & Con trỏ": "struct, enum, reference, pointer và quản lý bộ nhớ.",
    "10 · Hàm (Functions)": "Tham số, return, overload, scope, đệ quy và lambda.",
    "11 · OOP & Kế thừa": "Class, constructor, encapsulation, inheritance, polymorphism.",
    "12 · Templates, File & Xử lý lỗi": "Templates, file I/O, ngày giờ, lỗi và exception.",
    "13 · STL & Containers": "Vector, list, stack, queue, deque, set, map, iterator, algorithm.",
    "14 · Dự án & Chứng chỉ": "Áp dụng kiến thức vào dự án thực tế và chứng chỉ.",
    "15 · How-To & Tra cứu thư viện": "Mẹo nhanh và tài liệu tham chiếu thư viện chuẩn.",
    "16 · Thực hành tổng hợp": "Bài tập, quiz, code challenge và lộ trình học.",
  };
  function normalizeTokens(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[^a-z0-9&]+/g, " ")
      .split(" ")
      .filter((word) => word.length > 2);
  }
  exercises.forEach((ex) => {
    ex._tokens = new Set([
      ...normalizeTokens(ex.title),
      ...normalizeTokens(ex.topic),
      ...(ex.tags || []).map((tag) => String(tag).toLowerCase()),
    ]);
  });
  function linkExercises() {
    const STEM = (w) => (w.length > 3 && w.endsWith("s") ? w.slice(0, -1) : w);
    const vocabOf = (lesson) => {
      const set = new Set();
      const add = (text) => normalizeTokens(text).forEach((w) => set.add(STEM(w)));
      add(lesson.title);
      add(lesson.titleEn);
      add(String(lesson.slug || "").replace(/-/g, " "));
      (lesson.sections || []).forEach(add);
      return set;
    };
    const chapterCursor = {};
    // Prerequisite gate: an exercise may only be linked to a lesson at/after
    // the lesson that first teaches every construct its code uses.
    const API_WORDS = new Set(
      (
        "string vector map set stack queue list deque pair array optional tuple " +
        "sort reverse find count max_element min_element accumulate for_each transform " +
        "class struct enum union template typename namespace static const constexpr auto " +
        "new delete shared_ptr unique_ptr weak_ptr try catch throw exception runtime_error " +
        "logic_error out_of_range ifstream ofstream fstream stringstream istringstream ostringstream " +
        "virtual override public private protected this friend while for switch break continue operator " +
        "endl getline cout cin setprecision fixed iomanip chrono random time_t"
      ).split(/\s+/)
    );
    const TOKEN_RE = () => /[A-Za-z_][A-Za-z0-9_]{2,}/g;
    const firstTaught = {};
    lessons
      .slice()
      .sort((a, b) => a.num - b.num)
      .forEach((l) => {
        const blob = [
          l.title,
          l.titleEn,
          String(l.slug || "").replace(/-/g, " "),
          (l.concept && l.concept.content) || "",
          (l.syntax || []).map((s) => s.code || "").join(" "),
          (l.examples || []).map((e) => e.code || "").join(" "),
          (l.useCases || []).join(" "),
          (l.notes || []).join(" "),
        ].join(" ");
        (blob.match(TOKEN_RE()) || []).forEach((token) => {
          const low = token.toLowerCase();
          if (API_WORDS.has(low) && !(low in firstTaught)) firstTaught[low] = l.num;
        });
      });
    exercises.forEach((ex) => {
      const code = (ex.starterCode || "") + " " + (ex.solution || "");
      let need = 0;
      (code.match(TOKEN_RE()) || []).forEach((token) => {
        const low = token.toLowerCase();
        if (API_WORDS.has(low) && (firstTaught[low] || 0) > need) need = firstTaught[low];
      });
      ex._needNum = need;
    });
    const isEligible = (ex, lesson) =>
      ex._needNum === 0 || ex._needNum <= lesson.num + 2;
    lessons.forEach((lesson) => {
      const wanted = lessonTopic(lesson);
      const vocab = vocabOf(lesson);
      const titleHay = [lesson.title, lesson.titleEn, lesson.slug].filter(Boolean).join(" ").toLowerCase();
      const hay = [
        lesson.title,
        lesson.titleEn,
        lesson.chapter,
        lesson.description,
        lesson.concept && lesson.concept.content,
        lesson.syntax && lesson.syntax[0] && lesson.syntax[0].code,
        (lesson.examples || []).map((e) => e.code).join(" "),
        (lesson.sections || []).join(" "),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      const scored = exercises
        .filter((ex) => wanted && ex.topic === wanted && isEligible(ex, lesson))
        .map((ex) => {
          const tagVocab = new Set(
            (ex.tags || []).flatMap((tag) => normalizeTokens(tag).map(STEM)),
          );
          let score = 0;
          ex._tokens.forEach((token) => {
            if (token.length <= 2) return;
            const stem = STEM(token);
            if (tagVocab.has(stem) && vocab.has(stem)) score += 6;
            else if (vocab.has(stem)) score += 4;
            else if (titleHay.includes(token)) score += 3;
            else if (hay.includes(token)) score += 1;
          });
          return { ex, score };
        })
        .sort((a, b) => b.score - a.score || a.ex.id.localeCompare(b.ex.id));
      const strong = scored.filter((s) => s.score >= 4).map((s) => s.ex);
      const weak = scored.filter((s) => s.score < 4).map((s) => s.ex);
      const picked = [];
      const take = (ex) => {
        if (ex && picked.length < 3 && !picked.includes(ex)) picked.push(ex);
      };
      strong.slice(0, 3).forEach(take);
      if (picked.length < 3 && weak.length) {
        const offset = chapterCursor[wanted] || 0;
        weak.forEach((_, idx) => take(weak[(offset + idx) % weak.length]));
      }
      chapterCursor[wanted] = (chapterCursor[wanted] || 0) + 3;
      if (picked.length < 3) {
        const rest = exercises
          .filter((ex) => wanted && ex.topic !== wanted && isEligible(ex, lesson))
          .map((ex) => {
            let score = 0;
            ex._tokens.forEach((token) => {
              if (token.length <= 2) return;
              if (vocab.has(STEM(token))) score += 4;
              else if (titleHay.includes(token)) score += 2;
              else if (hay.includes(token)) score += 1;
            });
            return { ex, score };
          })
          .sort(
            (a, b) =>
              b.score - a.score || a.ex._needNum - b.ex._needNum || a.ex.id.localeCompare(b.ex.id),
          )
          .map((s) => s.ex);
        rest.slice(0, 3).forEach(take);
      }
      lesson.exerciseIds = picked.map((ex) => ex.id);
    });
  }
  linkExercises();
  function hashCode(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }
  function mulberry32(a) {
    return function () {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function shuffleQuestion(question, seed) {
    const items = question.options.map((text, i) => ({ text, i }));
    const rand = mulberry32(hashCode(seed));
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return {
      options: items.map((x) => x.text),
      answer: items.findIndex((x) => x.i === question.answer),
    };
  }
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
  state.collapsed = state.collapsed || {};
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
  // Render text with soft line breaks: blank line -> new <p>, single line -> <br>.
  function para(v) {
    const s = String(v ?? "").trim();
    if (!s) return "";
    return s
      .split(/\n{2,}/)
      .map((block) => `<p>${esc(block).replace(/\n/g, "<br>")}</p>`)
      .join("");
  }
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
    return { n, p };
  }
  function chapterStats(chapter) {
    const items = lessons.filter((l) => l.chapter === chapter);
    const done = items.filter((l) => state.lessons[l.id]?.completed).length;
    return { total: items.length, done };
  }
  function renderNav(filter = "") {
    const q = filter.toLowerCase();
    let html =
      '<button class="nav-link w-full text-left px-4 py-3 text-sm font-bold text-cyan-700 border-b" data-home>⌂ Trang chủ</button><button class="nav-link w-full text-left px-4 py-3 text-sm font-bold text-cyan-700 border-b" data-exercises>📝 C++ Exercises</button>',
      last = "";
    lessons.forEach((l) => {
      if (
        q &&
        !`${l.title} ${l.titleEn || ""} ${l.chapter} ${l.description} ${l.concept.content} ${l.sections.join(" ")}`
          .toLowerCase()
          .includes(q)
      )
        return;
      if (l.chapter !== last) {
        const st = chapterStats(l.chapter);
        const fold = q ? "" : state.collapsed[l.chapter] ? "folded" : "";
        html += `<button class="chapter-label w-full text-left" data-chapter-toggle="${esc(l.chapter)}"><span class="ch-caret ${fold ? "closed" : ""}">▾</span>${esc(l.chapter)} <span class="ch-count ${st.done === st.total && st.total ? "all-done" : ""}">${st.done}/${st.total}</span></button>`;
        last = l.chapter;
      }
      const hide = !q && state.collapsed[l.chapter] ? " hidden" : "";
      html += `<button data-lesson="${esc(l.id)}" class="nav-link w-full text-left px-4 py-2 text-sm flex gap-2 items-center${hide}"><span class="progress-dot ${state.lessons[l.id]?.completed ? "done" : "todo"}"></span><span class="lesson-num">${l.num}</span><span class="truncate">${esc(l.title)}</span></button>`;
    });
    nav.innerHTML = html;
    nav.querySelector("[data-home]").onclick = home;
    nav.querySelector("[data-exercises]").onclick = renderExercises;
    nav.querySelectorAll("[data-chapter-toggle]").forEach((b) => {
      b.onclick = () => {
        const ch = b.dataset.chapterToggle;
        state.collapsed[ch] = !state.collapsed[ch];
        save();
        renderNav($("search").value);
      };
    });
    nav
      .querySelectorAll("[data-lesson]")
      .forEach((b) => (b.onclick = () => renderLesson(b.dataset.lesson)));
    const a = nav.querySelector(`[data-lesson="${CSS.escape(active || "")}"]`);
    if (a) a.classList.add("active");
  }
  function home() {
    active = null;
    location.hash = "#home";
    const totalExamples = lessons.reduce((n, l) => n + (l.examples ? l.examples.length : 0), 0);
    const { n, p } = progress();
    const cards = CHAPTERS.map((ch) => {
      const st = chapterStats(ch);
      const pct = st.total ? Math.round((st.done * 100) / st.total) : 0;
      const first = lessons.find((l) => l.chapter === ch);
      return `<button class="surface chapter-card" data-ch="${esc(ch)}"><div class="card-top"><span class="chapter-name">${esc(ch)}</span><span class="badge ${st.done === st.total && st.total ? "beginner" : ""}">${st.done}/${st.total}</span></div><p class="muted small">${esc(CHAPTER_INTRO[ch] || "")}</p><div class="progress-track"><div style="width:${pct}%"></div></div></button>`;
    }).join("");
    content.innerHTML = `<section class="fade"><div class="hero"><span>C++ PROGRAMMING · 150 BÀI HỌC · TIẾNG VIỆT</span><h2>Học C++ từ số 0</h2><p>Giáo trình C++ tiếng Việt đầy đủ: ${lessons.length} bài học, ${totalExamples} ví dụ code chạy được, bảng tra cứu, quiz và lộ trình 16 chương từ biến, hàm, OOP đến STL.</p><div class="hero-actions"><button id="start" class="primary-btn large">${n ? "Tiếp tục học →" : "Bắt đầu học →"}</button><button id="goExercises" class="secondary-btn light">📝 Luyện tập ngay</button></div></div><div class="feature-grid"><div class="surface"><h3>📚 ${lessons.length} bài học thật</h3><p class="muted">Toàn bộ nội dung, ví dụ và giải thích được biên soạn bằng tiếng Việt — không placeholder.</p></div><div class="surface"><h3>⚡ ${totalExamples} ví dụ có thể chạy</h3><p class="muted">Mỗi bài kèm code thật; bấm Chạy thử để biên dịch và xem output ngay trong bài.</p></div><div class="surface"><h3>🎯 ${n}/${lessons.length} hoàn thành · ${p}%</h3><p class="muted">Tiến độ lưu trên trình duyệt kèm quiz kiểm tra theo từng bài.</p></div></div><h3 class="chapters-title">16 chương của khoá học</h3><div class="chapter-grid">${cards}</div></section>`;
    const next =
      lessons.find((l) => !state.lessons[l.id]?.completed) || lessons[0];
    $("start").onclick = () => renderLesson(next.id);
    $("goExercises").onclick = renderExercises;
    content.querySelectorAll("[data-ch]").forEach((c) => {
      c.onclick = () => {
        const first = lessons.find((l) => l.chapter === c.dataset.ch);
        if (first) renderLesson(first.id);
      };
    });
    renderNav($("search").value);
    scroll.scrollTop = 0;
  }
  function runExampleButton(idx, ex) {
    const runBtn = ex.runnable === false
      ? `<button class="secondary-btn small" disabled title="Đây là sơ đồ cú pháp hoặc ví dụ minh họa lỗi — không phải chương trình chạy được">⚠ Sơ đồ / minh họa lỗi</button>`
      : `<button class="primary-btn small run-btn" data-run="${idx}"><i class="fas fa-play mr-1"></i> Chạy thử</button>`;
    return `<div class="example-actions">${runBtn}<button class="secondary-btn small copy-btn" data-copy="${idx}">⧉ Copy</button></div><pre id="runout-${idx}" class="output-box hidden" aria-live="polite"></pre>`;
  }
  function tableHtml(t) {
    const head = t.header
      .map((h) => `<th>${esc(h.replace(/\*\*/g, ""))}</th>`)
      .join("");
    const rows = t.rows
      .map(
        (r) =>
          `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`,
      )
      .join("");
    return `<div class="table-wrap"><table class="data-table"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
  }
  function renderLesson(id, change = true) {
    const l = lesson(id) || lessons[0];
    if (!l) return home();
    active = l.id;
    if (change) location.hash = "#learn/" + l.slug;
    const i = lessons.indexOf(l),
      st = state.lessons[l.id] || {},
      linked = (l.exerciseIds || [])
        .map((exId) => exercises.find((x) => x.id === exId))
        .filter(Boolean),
      exerciseList = linked.length ? linked : exercises.slice(0, 3),
      allExamples = l.examples || [],
      prev = lessons[i - 1],
      next = lessons[i + 1];
    const sectionList = l.sections && l.sections.length
      ? `<ul class="section-outline">${l.sections.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>`
      : "";
    const exampleHtml = allExamples
      .map(
        (ex, idx) =>
          `<div class="surface example-card"><div class="example-head"><h4>${esc(ex.title || "Ví dụ " + (idx + 1))}</h4><span class="ex-num">Ví dụ ${idx + 1}/${allExamples.length}</span></div><pre><code class="language-cpp">${esc(ex.code)}</code></pre>${ex.output ? `<div class="output-box"><b>Output</b><pre>${esc(ex.output)}</pre></div>` : ""}${ex.explanation ? `<p class="ex-explain">${esc(ex.explanation)}</p>` : ""}${runExampleButton(idx, ex)}</div>`,
      )
      .join("");
    const tableHtmlAll = (l.tables || [])
      .map((t) => `<div class="table-block"><h4 class="table-title">${esc(t.title)}</h4>${tableHtml(t)}</div>`)
      .join("");
    let sec = 0;
    const H = (t) => `<h3>${++sec}. ${t}</h3>`;
    content.innerHTML = `<article class="fade"><div class="lesson-header"><div class="breadcrumb">C++ / ${esc(l.chapter)} / Bài ${l.num}</div><h2>${esc(l.title)}</h2>${l.titleEn && l.titleEn !== l.title ? `<p class="title-en">${esc(l.titleEn)}</p>` : ""}<p>${esc(l.description)}</p><div class="badges"><span class="badge ${l.difficulty}">${l.difficulty}</span><span class="badge">${l.estimatedTime} phút</span><span class="badge">Bài ${i + 1}/${lessons.length}</span><span class="badge ${st.completed ? "beginner" : ""}">${st.completed ? "✓ Hoàn thành" : "Đang học"}</span><span class="badge">${allExamples.length} ví dụ</span></div></div><section class="surface lesson-content">${H("Khái niệm")}${para(l.concept.content)}${sectionList ? `<h4 class="sub">Dàn bài trong chương</h4>${sectionList}` : ""}${H("Mục tiêu")}<ul>${l.objectives.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>${H("Ví dụ và phân tích")}${exampleHtml}${tableHtmlAll ? H("Bảng tra cứu") + tableHtmlAll : ""}<div class="remember"><b>💡 Bạn cần nhớ</b><ul>${l.keyTakeaways.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>${H("Khi nào sử dụng")}<ul>${l.useCases.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>${l.notes && l.notes.length ? H("Mẹo và lưu ý") + `<div class="tips">${l.notes.map((x) => `<p class="tip">${esc(x)}</p>`).join("")}</div>` : ""}${H("Lỗi thường gặp")}${l.commonMistakes.map((x) => `<div class="mistake"><p><b>Sai:</b> <code>${esc(x.wrong)}</code></p><p>${esc(x.why)}</p><p><b>Đúng:</b> <code>${esc(x.correct)}</code></p></div>`).join("")}${H("Bài tập liên quan")}<div class="exercise-chips">${exerciseList.map((e) => `<button class="exercise-chip" data-open-ex="${esc(e.id)}"><span class="chip-main">${esc(e.title)}</span><span class="chip-meta">${esc(e.topic)} · ${esc(e.difficulty)} · Mở →</span></button>`).join("")}</div>${H("Quiz")}<div id="quizBox"></div>${H("Tóm tắt")}<p>${esc(l.keyTakeaways.join(" "))}</p><div class="lesson-actions"><button id="prev" class="secondary-btn" ${prev ? "" : "disabled"}>← Bài trước</button><button id="complete" class="primary-btn">${st.completed ? "Đã hoàn thành" : "Đánh dấu hoàn thành"} ✓</button><button id="next" class="primary-btn" ${next ? "" : "disabled"}>Bài tiếp →</button></div></section></article>`;
    if (window.hljs)
      content
        .querySelectorAll("pre code")
        .forEach((x) => hljs.highlightElement(x));
    content
      .querySelectorAll("[data-open-ex]")
      .forEach((button) => {
        button.onclick = () => renderExercise(button.dataset.openEx);
      });
    content.querySelectorAll("[data-run]").forEach((b) => {
      b.onclick = () => {
        const idx = +b.dataset.run,
          ex = allExamples[idx],
          node = $("runout-" + idx);
        node.classList.remove("hidden");
        node.textContent = "Đang biên dịch và chạy…";
        execute(ex.code, ex.input || "", node);
      };
    });
    content.querySelectorAll("[data-copy]").forEach((b) => {
      b.onclick = () => {
        navigator.clipboard?.writeText(allExamples[+b.dataset.copy].code);
        b.textContent = "✓ Đã copy";
        setTimeout(() => (b.innerHTML = "⧉ Copy"), 1200);
      };
    });
    $("complete").onclick = () => {
      state.lessons[l.id] = Object.assign({}, state.lessons[l.id], {
        completed: !st.completed,
      });
      save();
      renderLesson(l.id, false);
    };
    $("prev").onclick = () => prev && renderLesson(prev.id);
    $("next").onclick = () => next && renderLesson(next.id);
    renderQuiz(l);
    renderNav($("search").value);
    progress();
    scroll.scrollTop = 0;
  }
  function renderQuiz(l) {
    const q = l.quiz || [];
    $("quizBox").innerHTML = q
      .map(
        (x, qi) => {
          const v = shuffleQuestion(x, l.id + "|" + qi);
          return `<div class="quiz-question"><p><b>${qi + 1}.</b> ${esc(x.question)}</p><div class="quiz-options">${v.options.map((o, oi) => `<button class="quiz-option" data-answer="${oi}" data-correct="${v.answer}">${esc(o)}</button>`).join("")}</div><p class="quiz-feedback" aria-live="polite"></p></div>`;
        },
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
              ...content.querySelectorAll("#quizBox .quiz-question"),
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
          const d = await callCodeApi({language:"cpp",standard:"c++20",code:$("editor").value,input:t.input || ""});
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
  const API_BASE = /^(\[?127\.0\.0\.1\]?|\[?::1\]?|localhost):8766$/.test(window.location.host) ? "/api" : "http://127.0.0.1:8766/api";
  const WANDBOX = "https://wandbox.org/api/compile.json";
  let lastWandbox = 0;
  async function localRun(payload) {
    const c = new AbortController();
    const t = setTimeout(() => c.abort(), 3000);
    try {
      const r = await fetch(API_BASE + "/run", {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload),signal:c.signal});
      if (!r.ok) throw new Error("http " + r.status);
      return await r.json();
    } finally { clearTimeout(t); }
  }
  async function wandboxRun(payload) {
    const wait = lastWandbox + 1200 - Date.now();
    if (wait > 0) await new Promise((r) => setTimeout(r, wait));
    lastWandbox = Date.now();
    const r = await fetch(WANDBOX, {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({compiler:"gcc-13.2.0",code:payload.code,stdin:payload.input || ""})});
    if (!r.ok) throw new Error("wandbox http " + r.status);
    const d = await r.json();
    if (d.compiler_error && String(d.status) !== "0") return {ok:false,phase:"compile",output:d.compiler_error};
    return {ok:String(d.status) === "0",phase:"run",output:(d.program_message || "") + (d.program_error || "")};
  }
  async function callCodeApi(payload) {
    try { return await localRun(payload); }
    catch (e) { return await wandboxRun(payload); }
  }
  async function execute(code, input, node) {
    node.classList.remove("hidden");
    node.textContent = "Đang biên dịch và chạy...";
    try {
      const d = await callCodeApi({language:"cpp",standard:"c++20",code,input});
      node.textContent =
        (d.phase === "compile" ? "Lỗi biên dịch:\n" : "Kết quả chạy:\n") +
        (d.output || "Không có output.");
    } catch (error) {
      node.textContent = "Không chạy được code: không thấy compiler local (127.0.0.1:8766) và không gọi được Wandbox API (cần internet). Chạy python CPP/cpp_server.py rồi thử lại, hoặc kiểm tra kết nối mạng.";
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
        state.collapsed = {};
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
      return l ? renderLesson(l.id, false) : home();
    }
    home();
  }
  window.addEventListener("hashchange", route);
  window.cppApp = { route, renderLesson, renderExercises, renderExercise, home };
  route();
})();
