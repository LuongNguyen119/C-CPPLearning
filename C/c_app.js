(function () {
  const lessons = window.cLessons || [];
  const exercises = window.cExercises || [];
  const $ = (id) => document.getElementById(id);
  const nav = $('nav');
  const content = $('content');
  const scroll = $('scroll');
  const storeKey = 'c-learning-progress-v1';
  const state = (() => {
    try { return JSON.parse(localStorage.getItem(storeKey) || '{}'); }
    catch { return {}; }
  })();
  state.lessons = state.lessons || {};
  state.exercises = state.exercises || {};
  state.quiz = state.quiz || {};
  let activeLessonId = null;

  function escape(value) {
    return String(value ?? '').replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }
  function save() { localStorage.setItem(storeKey, JSON.stringify(state)); }
  function lessonById(id) { return lessons.find((lesson) => lesson.id === id); }
  function completedLessons() { return lessons.filter((lesson) => state.lessons[lesson.id]?.completed).length; }
  function updateProgress() {
    const count = completedLessons();
    const percent = lessons.length ? Math.round(count * 100 / lessons.length) : 0;
    $('done').textContent = count;
    $('total').textContent = lessons.length;
    $('pct').textContent = percent;
    $('bar').style.width = percent + '%';
  }
  function button(label, attrs, className) {
    return '<button ' + attrs + ' class="' + className + '">' + label + '</button>';
  }
  function renderNav(filter) {
    const q = (filter || '').trim().toLowerCase();
    let html = button('⌂ Trang chủ', 'data-home="1"', 'nav-link w-full text-left px-4 py-3 text-sm font-bold text-emerald-700 border-b') + button('📝 C Exercises', 'data-exercises="1"', 'nav-link w-full text-left px-4 py-3 text-sm font-bold text-emerald-700 border-b');
    let lastChapter = '';
    lessons.forEach((lesson) => {
      const haystack = (lesson.title + ' ' + lesson.chapter + ' ' + lesson.description + ' ' + lesson.concept.content + ' ' + lesson.code).toLowerCase();
      if (q && !haystack.includes(q)) return;
      if (lesson.chapter !== lastChapter) {
        html += '<div class="chapter-label">' + escape(lesson.chapter) + '</div>';
        lastChapter = lesson.chapter;
      }
      const complete = state.lessons[lesson.id]?.completed;
      html += '<button data-lesson="' + escape(lesson.id) + '" class="nav-link w-full text-left px-4 py-2 text-sm flex gap-2 items-center"><span class="progress-dot ' + (complete ? 'done' : 'todo') + '"></span><span>' + escape(lesson.title) + '</span></button>';
    });
    nav.innerHTML = html;
    nav.querySelector('[data-home]').onclick = home;
    nav.querySelector('[data-exercises]').onclick = renderExercises;
    nav.querySelectorAll('[data-lesson]').forEach((item) => { item.onclick = () => renderLesson(item.dataset.lesson); });
    const active = nav.querySelector('[data-lesson="' + CSS.escape(activeLessonId || '') + '"]');
    if (active) active.classList.add('active');
  }
  function home(updateHash = true) {
    activeLessonId = null;
    if (updateHash && location.hash !== '#home') location.hash = '#home';
    content.innerHTML = '<section class="fade"><div class="hero"><span>C PROGRAMMING LEARNING</span><h2>Học C từ số 0</h2><p>Khóa học tiếng Việt đi từ chương trình đầu tiên đến biến, điều kiện, vòng lặp, hàm, mảng, con trỏ, bộ nhớ, struct và tệp.</p><button id="startLearning" class="primary-btn">Bắt đầu học →</button></div><div class="feature-grid"><div class="surface"><h3>Dễ học</h3><p>Giải thích khái niệm bằng ngôn ngữ gần gũi.</p></div><div class="surface"><h3>Ví dụ C</h3><p>Mỗi bài có mã mẫu, output và phân tích.</p></div><div class="surface"><h3>Theo dõi tiến độ</h3><p>Lesson, quiz và exercise được lưu trên trình duyệt.</p></div></div><div class="surface overview"><h3>' + lessons.length + ' bài học · ' + exercises.length + ' bài tập</h3><p>Cấu trúc tham khảo W3Schools; nội dung được biên soạn lại bằng tiếng Việt.</p></div></section>';
    $('startLearning').onclick = () => renderLesson(lessons[0]?.id);
    renderNav($('search').value);
    updateProgress();
  }
  function list(items) { return items.map((item) => '<li>' + escape(item) + '</li>').join(''); }
  function renderLesson(id, updateHash = true) {
    const lesson = lessonById(id) || lessons[0];
    if (!lesson) return home(false);
    activeLessonId = lesson.id;
    if (updateHash) location.hash = '#learn/' + lesson.slug;
    const index = lessons.indexOf(lesson);
    const status = state.lessons[lesson.id]?.completed ? 'Completed' : 'In progress';
    const prerequisiteNames = lesson.prerequisites.length ? lesson.prerequisites.map((item) => lessonById(item)?.title || item).join(' · ') : 'Không yêu cầu; đây là bài nền tảng.';
    const example = lesson.examples[0];
    const ex = exercises.find((item) => (lesson.exerciseIds || []).includes(item.id)) || exercises[0];
    const mistakes = lesson.commonMistakes.map((item) => '<div class="mistake"><p><b>Sai:</b> <code>' + escape(item.wrong) + '</code></p><p>' + escape(item.why) + '</p><p><b>Đúng:</b> <code>' + escape(item.correct) + '</code></p></div>').join('');
    content.innerHTML = '<article class="fade"><div class="lesson-header"><div class="breadcrumb">C Programming / ' + escape(lesson.chapter) + ' / ' + escape(lesson.title) + '</div><h2>' + escape(lesson.title) + '</h2><p>' + escape(lesson.description) + '</p><div class="badges"><span class="badge beginner">' + escape(lesson.difficulty) + '</span><span class="badge">' + lesson.estimatedTime + ' phút</span><span class="badge">Bài ' + (index + 1) + '/' + lessons.length + '</span><span class="badge">' + status + '</span></div></div><section class="surface lesson-content"><h3>1. Giới thiệu và khái niệm</h3><p>' + escape(lesson.concept.content) + '</p><h3>2. Prerequisite</h3><p class="muted">' + escape(prerequisiteNames) + '</p><h3>3. Mục tiêu</h3><ul>' + list(lesson.objectives) + '</ul><h3>4. Cú pháp</h3><pre><code class="language-c">' + escape(lesson.syntax[0].code) + '</code></pre><p>' + escape(lesson.syntax[0].explanation) + '</p><h3>5. Ví dụ</h3><pre><code class="language-c">' + escape(example.code) + '</code></pre><div class="output-box"><b>Output dự kiến</b><pre>' + escape(example.output) + '</pre></div><p>' + escape(example.explanation) + '</p><h3>6. Khi nào sử dụng</h3><ul>' + list(lesson.useCases) + '</ul><div class="remember"><b>💡 Bạn cần nhớ</b><ul>' + list(lesson.keyTakeaways) + '</ul></div><h3>7. Lỗi thường gặp</h3>' + mistakes + '<h3>8. Bài tập</h3><p>Luyện tập với bài <b>' + escape(ex.title) + '</b>.</p><button id="openExercise" class="primary-btn">Mở bài tập →</button><h3>9. Quiz</h3><div id="quizBox"></div><h3>10. Tóm tắt</h3><p>' + escape(lesson.keyTakeaways.join(' ')) + '</p><div class="lesson-actions"><button id="prev" class="secondary-btn">← Bài trước</button><button id="complete" class="primary-btn">' + (status === 'Completed' ? 'Đã hoàn thành' : 'Đánh dấu hoàn thành') + ' ✓</button><button id="next" class="primary-btn">Bài tiếp →</button></div></section></article>';
    if (window.hljs) document.querySelectorAll('pre code').forEach((code) => hljs.highlightElement(code));
    $('openExercise').onclick = () => renderExercise(ex.id);
    $('complete').onclick = () => { state.lessons[lesson.id] = Object.assign({}, state.lessons[lesson.id], {completed: true}); save(); renderLesson(lesson.id, false); };
    $('prev').disabled = index === 0; $('next').disabled = index === lessons.length - 1;
    $('prev').onclick = () => renderLesson(lessons[index - 1].id); $('next').onclick = () => renderLesson(lessons[index + 1].id);
    renderQuiz(lesson); renderNav($('search').value); updateProgress(); scroll.scrollTop = 0;
  }
  function renderQuiz(lesson) {
    const questions = lesson.quiz || [];
    $('quizBox').innerHTML = questions.map((q, qi) => '<div class="quiz-question"><p><b>' + (qi + 1) + '.</b> ' + escape(q.question) + '</p><div class="quiz-options">' + q.options.map((option, oi) => '<button class="quiz-option" data-answer="' + oi + '" data-correct="' + q.answer + '">' + escape(option) + '</button>').join('') + '</div><p class="quiz-feedback" aria-live="polite"></p></div>').join('');
    $('quizBox').querySelectorAll('.quiz-option').forEach((button) => { button.onclick = () => { const box = button.closest('.quiz-question'); const right = Number(button.dataset.answer) === Number(button.dataset.correct); box.querySelectorAll('.quiz-option').forEach((item) => { item.disabled = true; }); button.classList.add(right ? 'correct' : 'wrong'); box.querySelector('.quiz-feedback').textContent = right ? 'Chính xác! ' + qExplanation(questions, box) : 'Chưa đúng. Đọc lại khái niệm và thử lại.'; const record = state.quiz[lesson.id] || {correct: 0, total: questions.length}; if (right) record.correct += 1; state.quiz[lesson.id] = record; save(); }; });
  }
  function qExplanation(questions, box) { const position = Array.from(document.querySelectorAll('#quizBox .quiz-question')).indexOf(box); return questions[position]?.explanation || ''; }
  function renderExercises() {
    activeLessonId = null; location.hash = '#exercises';
    content.innerHTML = '<section class="fade"><div class="lesson-header"><div class="breadcrumb">C Programming / Practice</div><h2>C Exercises</h2><p>Luyện tập theo chủ đề, độ khó và test cases.</p></div><div class="surface filters"><input id="exerciseSearch" placeholder="Tìm bài tập..." aria-label="Tìm bài tập"><select id="exerciseDifficulty"><option value="">Tất cả độ khó</option><option value="easy">Easy</option><option value="medium">Medium</option><option value="hard">Hard</option></select><select id="exerciseTopic"><option value="">Tất cả topic</option></select></div><div id="exerciseProgress" class="surface overview"></div><div id="exerciseList" class="exercise-grid"></div></section>';
    const topicSelect = $('exerciseTopic'); [...new Set(exercises.map((item) => item.topic))].forEach((topic) => { topicSelect.insertAdjacentHTML('beforeend', '<option value="' + escape(topic) + '">' + escape(topic) + '</option>'); });
    const draw = () => { const q = $('exerciseSearch').value.toLowerCase(); const d = $('exerciseDifficulty').value; const t = $('exerciseTopic').value; const items = exercises.filter((item) => (!q || (item.title + ' ' + item.description + ' ' + item.topic + ' ' + item.tags.join(' ')).toLowerCase().includes(q)) && (!d || item.difficulty === d) && (!t || item.topic === t)); $('exerciseList').innerHTML = items.length ? items.map((item) => { const record = state.exercises[item.id] || {}; return '<article class="surface exercise-card"><div class="card-top"><span>' + escape(item.id) + '</span><span class="badge ' + escape(item.difficulty) + '">' + escape(item.difficulty) + '</span></div><h3>' + escape(item.title) + '</h3><p>' + escape(item.description) + '</p><div class="card-meta"><span>' + escape(item.topic) + '</span><span>' + item.estimatedTime + ' phút</span></div><div class="card-bottom"><span>' + (record.completed ? '✓ Completed' : 'Chưa làm') + '</span><button class="primary-btn" data-exercise="' + escape(item.id) + '">' + (record.completed ? 'Review' : 'Start Exercise') + '</button></div></article>'; }).join('') : '<p class="muted">Không tìm thấy bài tập.</p>'; const complete = exercises.filter((item) => state.exercises[item.id]?.completed).length; $('exerciseProgress').innerHTML = '<b>Tiến độ bài tập: ' + complete + '/' + exercises.length + ' · ' + Math.round(complete * 100 / exercises.length) + '%</b><div class="progress-track"><div style="width:' + (complete * 100 / exercises.length) + '%"></div></div>'; $('exerciseList').querySelectorAll('[data-exercise]').forEach((button) => { button.onclick = () => renderExercise(button.dataset.exercise); }); };
    $('exerciseSearch').oninput = draw; $('exerciseDifficulty').onchange = draw; $('exerciseTopic').onchange = draw; draw(); renderNav($('search').value); updateProgress();
  }
  function renderExercise(id) {
    const exercise = exercises.find((item) => item.id === id) || exercises[0]; if (!exercise) return;
    location.hash = '#exercises/' + exercise.slug;
    content.innerHTML = '<article class="fade"><button id="backExercises" class="link-btn">← C Exercises</button><div class="lesson-header"><div class="breadcrumb">C Exercises / ' + escape(exercise.topic) + '</div><h2>' + escape(exercise.title) + '</h2><p>' + escape(exercise.description) + '</p><div class="badges"><span class="badge ' + escape(exercise.difficulty) + '">' + escape(exercise.difficulty) + '</span><span class="badge">' + exercise.estimatedTime + ' phút</span></div></div><section class="surface lesson-content"><h3>Problem</h3><p>' + escape(exercise.description) + '</p><h3>Test cases</h3><div class="test-grid">' + exercise.testCases.map((test, i) => '<div class="test-card"><b>Test ' + (i + 1) + '</b><br>Input: <code>' + escape(test.input || '(none)') + '</code><br>Expected: <code>' + escape(test.expected) + '</code></div>').join('') + '</div><h3>Code Editor</h3><textarea id="exerciseEditor" class="editor" spellcheck="false">' + escape(exercise.starterCode) + '</textarea><div class="editor-actions"><button id="runExercise" class="primary-btn">Run Code</button><button id="submitExercise" class="primary-btn">Submit</button><button id="resetExercise" class="secondary-btn">Reset</button><button id="copyExercise" class="secondary-btn">Copy</button></div><pre id="exerciseOutput" class="output-box hidden" aria-live="polite"></pre><div id="submissionResult"></div><h3>Hints</h3><div class="hint-actions">' + exercise.hints.map((hint, i) => '<button class="hint-btn" data-hint="' + i + '">Hint ' + (i + 1) + '</button>').join('') + '</div><p id="hintOutput"></p><button id="solutionButton" class="secondary-btn">Show Solution</button><pre id="solutionOutput" class="hidden"><code class="language-c">' + escape(exercise.solution) + '</code></pre><p class="muted small">Run/Submit gọi compiler local qua c_server.py khi mở bằng HTTP localhost.</p></section></article>';
    $('backExercises').onclick = renderExercises; $('resetExercise').onclick = () => { $('exerciseEditor').value = exercise.starterCode; }; $('copyExercise').onclick = () => navigator.clipboard?.writeText($('exerciseEditor').value); $('solutionButton').onclick = () => { if (confirm('Bạn có chắc muốn xem đáp án?')) $('solutionOutput').classList.toggle('hidden'); }; document.querySelectorAll('.hint-btn').forEach((button) => { button.onclick = () => { $('hintOutput').textContent = exercise.hints[Number(button.dataset.hint)]; }; });
    $('runExercise').onclick = () => executeCode($('exerciseEditor').value, exercise.testCases[0]?.input || '', $('exerciseOutput'));
    $('submitExercise').onclick = async () => { const results = []; for (const test of exercise.testCases) { try { const response = await fetch('http://127.0.0.1:8765/api/run', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({code: $('exerciseEditor').value, input: test.input || ''})}); const data = await response.json(); const actual = (data.output || '').trim(); results.push({ok: Boolean(data.ok) && actual === test.expected.trim(), actual, expected: test.expected}); } catch (error) { results.push({ok:false, actual:'Không kết nối backend', expected:test.expected}); } } const passed = results.filter((r) => r.ok).length; $('submissionResult').innerHTML = '<div class="result ' + (passed === results.length ? 'success' : 'failure') + '"><b>' + passed + '/' + results.length + ' tests passed · Score ' + Math.round(passed * 100 / results.length) + '/100</b>' + results.map((r, i) => '<p>' + (r.ok ? '✓' : '✕') + ' Test ' + (i + 1) + (r.ok ? '' : ' · Expected: ' + escape(r.expected) + ' · Got: ' + escape(r.actual)) + '</p>').join('') + '</div>'; state.exercises[exercise.id] = Object.assign({}, state.exercises[exercise.id], {completed: passed === results.length, bestScore: Math.max(passed * 100 / results.length, state.exercises[exercise.id]?.bestScore || 0), attempts: (state.exercises[exercise.id]?.attempts || 0) + 1}); save(); };
  }
  async function executeCode(code, input, outputNode) { outputNode.classList.remove('hidden'); outputNode.textContent = 'Đang biên dịch và chạy...'; try { const response = await fetch('http://127.0.0.1:8765/api/run', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({code,input})}); const data = await response.json(); outputNode.textContent = (data.phase === 'compile' ? 'Lỗi biên dịch:\n' : 'Kết quả chạy:\n') + (data.output || 'Không có output.'); } catch (error) { outputNode.textContent = 'Không kết nối được c_server.py. Hãy mở trang qua http://127.0.0.1:8765/C/C.html.'; } }
  function toggleSidebar() { $('sidebar').classList.toggle('open'); $('backdrop').classList.toggle('show'); }
  $('toggle').onclick = toggleSidebar; $('search').oninput = (event) => renderNav(event.target.value); $('theme').onclick = () => { document.body.classList.toggle('dark'); localStorage.setItem('c-theme', document.body.classList.contains('dark') ? 'dark' : 'light'); }; if (localStorage.getItem('c-theme') === 'dark') document.body.classList.add('dark'); document.addEventListener('keydown', (event) => { if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); $('search').focus(); } if (event.ctrlKey && event.key.toLowerCase() === 'b') { event.preventDefault(); toggleSidebar(); } }); $('reset').onclick = () => { if (confirm('Đặt lại toàn bộ tiến độ?')) { state.lessons = {}; state.exercises = {}; state.quiz = {}; save(); home(); } };
  function route() { const hash = location.hash; if (hash === '#exercises') return renderExercises(); const exerciseMatch = hash.match(/^#exercises\/(.+)$/); if (exerciseMatch) { const item = exercises.find((exercise) => exercise.slug === exerciseMatch[1] || exercise.id === exerciseMatch[1]); return item ? renderExercise(item.id) : renderExercises(); } const lessonMatch = hash.match(/^#learn\/(.+)$/); if (lessonMatch) { const item = lessons.find((lesson) => lesson.slug === lessonMatch[1] || lesson.id === lessonMatch[1]); return item ? renderLesson(item.id, false) : home(false); } home(false); }
  window.addEventListener('hashchange', route); window.cApp = {route, renderLesson, renderExercises, renderExercise}; route();
})();
