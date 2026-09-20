# -*- coding: utf-8 -*-
"""Rebuild CPP/cpp_lessons.js from w3schools_cpp_tutorial_vi.md.

Each digest lesson becomes a full lesson object (id, chapter, concept, real code
examples with outputs, tables, quizzes...) in the exact schema cpp_app.js expects.
Run:  python tools/build_cpp_lessons.py
"""
import io
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VI_MD = os.path.join(ROOT, "w3schools_cpp_tutorial_vi.md")
EN_MD = os.path.join(ROOT, "w3schools_cpp_tutorial.md")
OLD_JS = os.path.join(ROOT, "CPP", "cpp_lessons.js")
OUT_JS = os.path.join(ROOT, "CPP", "cpp_lessons.js")

# ---------------------------------------------------------------- chapters
# (number is 1-based index in the 150-lesson W3Schools order)
CHAPTERS = [
    ("01 · C++ Cơ bản", "Basics", 1, 10),
    ("02 · Biến & Kiểu dữ liệu", "Variables & Types", 11, 25),
    ("03 · Toán tử", "Variables & Types", 26, 32),
    ("04 · Chuỗi (Strings)", "Strings & Vectors", 33, 42),
    ("05 · Toán học & Boolean", "Basics", 43, 47),
    ("06 · Điều kiện & Switch", "Conditions", 48, 57),
    ("07 · Vòng lặp", "Loops", 58, 67),
    ("08 · Mảng", "Strings & Vectors", 68, 74),
    ("09 · Struct, Enum, Tham chiếu & Con trỏ", "Memory Safety", 75, 83),
    ("10 · Hàm (Functions)", "Functions & OOP", 84, 96),
    ("11 · OOP & Kế thừa", "OOP", 97, 110),
    ("12 · Templates, File & Xử lý lỗi", "STL & Files", 111, 117),
    ("13 · STL & Containers", "STL & Files", 118, 128),
    ("14 · Dự án & Chứng chỉ", "Modern C++", 129, 130),
    ("15 · How-To & Tra cứu thư viện", "Basics", 131, 142),
    ("16 · Thực hành tổng hợp", "Loops", 143, 150),
]


def chapter_for(num):
    for name, topic, a, b in CHAPTERS:
        if a <= num <= b:
            return name, topic
    return CHAPTERS[-1][0], CHAPTERS[-1][1]


INTERMEDIATE = {9, 10, 11, 12, 13, 14}  # chapter ordinals

# Starter snippets for lessons whose digest page has no code (concept/challenge/ref pages)
STARTERS = {
    1: ('#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Hello World!";\n  return 0;\n}',
        'Chương trình C++ tối thiểu: nhập/xuất cơ bản để bạn thử lại ý tưởng của bài.'),
    2: ('#include <iostream>\nusing namespace std;\n\nint main() {\n  int speed = 10;\n  cout << speed;\n  return 0;\n}',
        'Khai báo biến có kiểu và in giá trị — khung để thử các kiểu dữ liệu của bài.'),
    3: ('#include <iostream>\nusing namespace std;\n\nint main() {\n  int a = 7, b = 4;\n  cout << a + b << " " << a % b;\n  return 0;\n}',
        'Hai số nguyên và vài phép toán — thay đổi biểu thức để kiểm tra kết quả.'),
    4: ('#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n  string txt = "C++";\n  cout << txt + " is fun" << " " << txt.size();\n  return 0;\n}',
        'Chuỗi std::string với nối chuỗi và độ dài — chỗ để thử các hàm chuỗi.'),
    5: ('#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n  cout << sqrt(16) << " " << (5 > 3);\n  return 0;\n}',
        'Hàm toán học và biểu thức boolean trong cùng một chương trình.'),
    6: ('#include <iostream>\nusing namespace std;\n\nint main() {\n  int time = 20;\n  if (time < 18) { cout << "Good time!"; } else { cout << "Not good time"; }\n  return 0;\n}',
        'Cấu trúc if/else tối thiểu để thử các điều kiện của bài.'),
    7: ('#include <iostream>\nusing namespace std;\n\nint main() {\n  for (int i = 0; i < 5; i++) { cout << i << "\\n"; }\n  return 0;\n}',
        'Vòng lặp for cơ bản — biến đổi điều kiện để quan sát hành vi lặp.'),
    8: ('#include <iostream>\nusing namespace std;\n\nint main() {\n  int cars[4] = {1962, 1966, 1974, 2014};\n  cout << cars[0] << " " << sizeof(cars) / sizeof(cars[0]);\n  return 0;\n}',
        'Mảng số nguyên và cách lấy số phần tử — chỗ để thử các phép với mảng.'),
    9: ('#include <iostream>\nusing namespace std;\n\nint main() {\n  int x = 5;\n  int* p = &x;\n  cout << x << " " << *p << " " << sizeof(int);\n  return 0;\n}',
        'Con trỏ và địa chỉ bộ nhớ tối thiểu để thử các khái niệm của bài.'),
    10: ('#include <iostream>\nusing namespace std;\n\nint plusFunc(int x, int y) { return x + y; }\n\nint main() {\n  cout << plusFunc(3, 4);\n  return 0;\n}',
        'Hàm có tham số và giá trị trả về — mở rộng theo nội dung bài.'),
    11: ('#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Car {\n  public:\n    string brand = "Ford";\n    void honk() { cout << "Tuut, tuut!"; }\n};\n\nint main() {\n  Car myCar; myCar.honk(); cout << " " << myCar.brand;\n  return 0;\n}',
        'Lớp và đối tượng tối thiểu để thử các khái niệm OOP của bài.'),
    12: ('#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n  try { int* p = nullptr; if (!p) throw 42; } catch (int e) { cout << "caught " << e; }\n  return 0;\n}',
        'try/catch và ifstream/ofstream — khung để thử file I/O và xử lý lỗi.'),
    13: ('#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n  vector<int> v = {3, 1, 2}; sort(v.begin(), v.end());\n  for (int x : v) cout << x << " ";\n  return 0;\n}',
        'Vector và algorithm — chỗ để thử các container và hàm STL của bài.'),
    14: ('#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Muc tieu du an: ap dung kien thuc C++ da hoc";\n  return 0;\n}',
        'Trang dự án/chứng chỉ: dùng khung này để bắt đầu ý tưởng của bạn.'),
    15: ('#include <iostream>\n#include <cstdlib>\n#include <ctime>\nusing namespace std;\n\nint main() {\n  srand(time(0));\n  cout << rand() % 100;\n  return 0;\n}',
        'Ví dụ How-To nhỏ gọn — đối chiếu với bảng tra cứu trong bài.'),
    16: ('#include <iostream>\nusing namespace std;\n\nint main() {\n  // Giai cac bai tap trong muc nay tai day\n  cout << "San thuc hanh C++";\n  return 0;\n}',
        'Khung code chung cho trang thực hành/tổng hợp.'),
}

# Keyword-driven common mistakes
MISTAKES = [
    (r"booleans?", "Gán số 1/0 trực tiếp cho biến bool thay vì biểu thức so sánh.",
     "bool nhận true/false; dùng nó cho điều kiện sẽ rõ ràng và an toàn hơn.",
     "Dùng biểu thức so sánh: bool isCoding = (x > 5);"),
    (r"if|else|condition", "Viết if (x = 5) thay vì if (x == 5).",
     "Dấu = là gán, == mới là so sánh; gán trong if luôn cho kết quả true.",
     "if (x == 5) { ... }"),
    (r"switch", "Quên break ở cuối mỗi case.",
     "Thiếu break gây 'fall-through': các case bên dưới cũng chạy theo.",
     "case 1: ... break;"),
    (r"loop|while|for", "Vòng lặp while không có câu lệnh làm thay đổi điều kiện.",
     "Điều kiện không bao giờ sai → lặp vô hạn.",
     "Đảm bảo biến đếm/điều kiện thay đổi trong thân vòng lặp."),
    (r"array|mảng", "Truy cập phần tử ngoài chỉ mục hợp lệ (ví dụ arr[5] cho mảng 5 phần tử).",
     "Chỉ mục hợp lệ là 0..n-1; vượt biên là undefined behavior.",
     "Duyệt i từ 0 đến n-1."),
    (r"pointer|con trỏ|dereferenc|truy cập giá trị", "Dùng con trỏ chưa khởi tạo hoặc đã delete.",
     "Trỏ vào vùng nhớ rác gây crash hoặc dữ liệu sai khó tìm.",
     "Khởi tạo nullptr, kiểm tra trước khi dereference, set nullptr sau delete."),
    (r"memory|new", "new mà quên delete.",
     "Bộ nhớ không được giải phóng gây rò rỉ (memory leak).",
     "Dùng cân bằng new/delete hoặc smart pointer."),
    (r"function|hàm", "Gọi hàm trước khi khai báo (không có prototype).",
     "Compiler không biết chữ ký hàm → lỗi biên dịch.",
     "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."),
    (r"string|chuỗi", "Quên #include <string> khi dùng std::string.",
     "string không phải kiểu dựng sẵn — thiếu header sẽ không biên dịch.",
     "#include <string> rồi mới dùng string."),
    (r"class|constructor|oop|inheritance|kế thừa|polymorphism|encapsulation",
     "Quên constructor khởi tạo các member quan trọng.",
     "Đối tượng có thể ở trạng thái rác (giá trị chưa xác định).",
     "Luôn có constructor đặt giá trị khởi tạo an toàn."),
    (r"file|fstream|tệp", "Không kiểm tra file mở thành công trước khi đọc/ghi.",
     "Thao tác trên file mở thất bại âm thầm hoặc crash.",
     "if (myFile) { ... } hoặc if (!myFile.is_open()) return;"),
    (r"vector|stack|queue|deque|set|map|stl|container|danh sách|ngăn xếp|hàng đợi",
     "Dùng phần tử front()/back()/top() khi container rỗng.",
     "Hành vi không xác định khi container trống.",
     "Kiểm tra .empty() trước khi truy cập."),
    (r"template", "Định nghĩa template tách riêng trong .cpp không được include.",
     "Compiler cần thấy định nghĩa tại nơi dùng template.",
     "Giữ định nghĩa template cùng header."),
    (r"exception|try|catch|lỗi", "Bắt exception rồi bỏ qua không xử lý.",
     "Lỗi bị nuốt, chương trình tiếp tục ở trạng thái sai.",
     "Catch rồi xử lý hoặc rethrow khi cần."),
    (r"auto", "Dùng auto khiến kiểu không rõ ràng ở chỗ quan trọng.",
     "auto lấy kiểu từ vế phải — có thể khác kiểu bạn nghĩ.",
     "Chỉ dùng auto khi kiểu đã rõ và ổn định."),
    (r"operator|toán tử", "Nhầm = (gán) với == (so sánh) trong biểu thức.",
     "Toán tử sai cho kết quả sai mà không báo lỗi.",
     "double-click kiểm tra: so sánh thì ==."),
    (r"char|ký tự", "Dùng nháy kép \"a\" thay vì nháy đơn 'a' cho ký tự.",
     "\"a\" là chuỗi (char[]), 'a' mới là char.",
     "char c = 'a';"),
    (r"lambda", "Bắt giữ biến theo giá trị [=] rồi mong sửa được biến gốc.",
     "Bản copy tách rời biến gốc ngoài lambda.",
     "Dùng [&] hoặc bắt giữ theo tham chiếu khi cần ghi."),
]

GENERIC_MISTAKE = {
    "wrong": "Bỏ qua kiểu dữ liệu hoặc header cần thiết.",
    "why": "Compiler không biết tên hoặc biểu thức có thể sai kiểu.",
    "correct": "Thêm header và chọn kiểu phù hợp trước khi biên dịch.",
}

USE_CASES = {
    "Basics": ["Nền tảng để đọc mọi ví dụ C++ sau này.", "Viết chương trình/console app đầu tiên."],
    "Variables & Types": ["Lưu trữ và biến đổi dữ liệu trong mọi bài tập.", "Chọn kiểu đúng để tránh lãng phí bộ nhớ/sai chính xác."],
    "Conditions": ["Phân nhánh logic: menu, kiểm tra input, trạng thái game.", "Xử lý lỗi đơn giản bằng so sánh."],
    "Loops": ["Xử lý tập hợp/mảng nhiều phần tử.", "Tự động hóa tác vụ lặp (đếm, in bảng, tính tổng)."],
    "Strings & Vectors": ["Xử lý văn bản, tên, mô tả.", "Lưu danh sách thay đổi kích thước."],
    "Functions & OOP": ["Tách code thành hàm tái sử dụng.", "Gom logic liên quan tránh trùng lặp (DRY)."],
    "Memory Safety": ["Quản lý bộ nhớ trong hệ thống nhúng/performance.", "Hiểu cách biến và con trỏ tương tác vùng nhớ."],
    "OOP": ["Mô hình thực thể: sinh viên, xe, nhân vật game.", "Mở rộng tính năng qua kế thừa, đa hình."],
    "STL & Files": ["Lưu trữ dữ liệu hiệu quả bằng vector/map/set.", "Đọc ghi cấu hình, log, file dữ liệu."],
    "Templates": ["Viết hàm/class tái dùng cho mọi kiểu.", "Thư viện generic."],
    "Modern C++": ["Viết code hiện đại an toàn hơn.", "Dự án C++ thực tế."],
}

NOTES_DEFAULT = [
    "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
    "Biên dịch với cảnh báo để phát hiện lỗi sớm.",
]


# ---------------------------------------------------------------- parsing
def read_lines(path):
    with io.open(path, encoding="utf-8") as f:
        return f.read().split("\n")


def split_lessons(lines):
    """Return list of (num, body_lines) blocks from an md digest."""
    blocks, cur = [], None
    for ln in lines:
        m = re.match(r"^## (\d+)\. (.*)$", ln)
        if m:
            if cur:
                blocks.append(cur)
            cur = [int(m.group(1)), m.group(2), []]
        elif cur is not None:
            cur[2].append(ln)
    if cur:
        blocks.append(cur)
    return [(b[0], b[1], b[2]) for b in blocks]


CODE_FENCE_HINT = re.compile(r"(#include|int main|std::|using namespace|<<|>>|\{|\bfor\b|\bwhile\b)")


def parse_body(body):
    """Parse a lesson body into sections/examples/tables."""
    sections = []  # {h: heading, level: 3|4, points: [...]}
    examples = []
    tables = []
    notes = []
    url = None
    i = 0
    last_points = []      # points seen since last code block (explanations)
    cur_heading = None
    while i < len(body):
        ln = body[i]
        s = ln.strip()
        m = re.match(r"^\*\*Nguồn:\*\* <(https://[^>]+)>", s)
        if m:
            url = m.group(1)
            i += 1
            continue
        m = re.match(r"^(#{3,4}) (.+)$", s)
        if m:
            cur_heading = m.group(2).strip()
            i += 1
            continue
        if s.startswith(">"):
            pts = []
            while i < len(body) and body[i].strip().startswith(">"):
                t = re.sub(r"^>\s?", "", body[i].strip()).strip()
                if t:
                    pts.append(t)
                i += 1
            for t in pts:
                if t.startswith("Mẹo:") or t.startswith("Lưu ý:") or t.startswith("Ghi chú:"):
                    notes.append(t)
                else:
                    last_points.append(t)
                sections.append({"h": cur_heading, "level": 3, "point": t})
            continue
        if s.startswith("```"):
            lang = s[3:].strip()
            code = []
            i += 1
            while i < len(body) and not body[i].strip().startswith("```"):
                code.append(body[i])
                i += 1
            i += 1  # closing fence
            code_txt = "\n".join(code).rstrip()
            # peek: output block right after?
            output = ""
            j = i
            while j < len(body) and body[j].strip() == "":
                j += 1
            if j < len(body) and body[j].strip().startswith("```"):
                lang2 = body[j].strip()[3:].strip()
                k = j + 1
                out = []
                while k < len(body) and not body[k].strip().startswith("```"):
                    out.append(body[k])
                    k += 1
                cand = "\n".join(out).strip()
                if lang2 != "cpp" and cand and not CODE_FENCE_HINT.search(cand):
                    output = cand
                    i = k + 1
            expl = last_points[-1] if last_points else ""
            last_points.clear()
            looks_cpp = lang == "cpp" or (lang in ("", "text") and CODE_FENCE_HINT.search(code_txt) and ";" in code_txt)
            if looks_cpp:
                examples.append({
                    "title": cur_heading or "Ví dụ",
                    "code": code_txt,
                    "output": output,
                    "explanation": expl,
                })
            continue
        if s.startswith("|") and s.endswith("|"):
            rows = []
            while i < len(body) and body[i].strip().startswith("|") and body[i].strip().endswith("|"):
                cells = [c.strip() for c in body[i].strip().strip("|").split("|")]
                if not re.match(r"^[\s\-:|]+$", body[i].strip()):
                    rows.append(cells)
                i += 1
            if rows:
                tables.append({"title": cur_heading or "Bảng", "header": rows[0], "rows": [r for r in rows[1:]]})
            continue
        i += 1
    return {"sections": sections, "examples": examples, "tables": tables, "notes": notes, "url": url}


def shorten(text, cap=160):
    text = re.sub(r"\s+", " ", text or "").strip()
    if len(text) <= cap:
        return text
    cut = text[:cap]
    tail = re.split(r"(?<=[.!?]) ", text[cap:])
    first = tail[0] if tail and tail[0] and len(tail[0]) < 60 else ""
    return (cut + (" " + first if first else "")).rstrip(" ,;:") + "…"


def clean_title(vi_head):
    """Strip a trailing '(English…)' or '(note)' parenthetical from the Vi title."""
    return re.sub(r"\s*\([^()]*\)\s*$", "", vi_head).strip()


def mistakes_for(title, concept):
    hay = (title + " " + concept).lower()
    hits = []
    for pat, wrong, why, correct in MISTAKES:
        if re.search(pat, hay):
            hits.append({"wrong": wrong, "why": why, "correct": correct})
        if len(hits) >= 2:
            break
    if not hits:
        hits.append(GENERIC_MISTAKE)
    return hits


# ---------------------------------------------------------------- quiz bank
# Old per-chapter quiz bank lives in the pre-redesign cpp_lessons.js. After the
# first regeneration that file is the generated one, so also consult the backup.
BANK_SOURCES = [OLD_JS, os.path.expandvars(r"%LOCALAPPDATA%\Temp\cpp_lessons_backup.js")]


def extract_old_bank():
    for src_path in BANK_SOURCES:
        try:
            src = io.open(src_path, encoding="utf-8").read()
        except OSError:
            continue
        m = re.search(r"const CPP_QUIZ_BANK = (\{.*\});\n", src)
        if not m:
            continue
        try:
            bank = json.loads(m.group(1))
        except ValueError:
            continue
        if bank:
            return bank
    return {}


OLD_TO_NEW = {
    "01 · C++ Basics": 1,
    "02 · Values and Control": 2,
    "03 · Control Flow": 6,
    "04 · Strings and Containers": 4,
    "04 · STL Containers": 13,
    "05 · Functions": 10,
    "06 · OOP": 11,
    "07 · Polymorphism": 11,
    "08 · STL": 13,
    "08 · STL Algorithms": 13,
    "09 · Resource Safety": 9,
    "09 · Templates": 12,
    "10 · Files and Projects": 12,
    "10 · Resource Safety": 9,
    "11 · Modern C++": 15,
    "11 · Projects": 14,
}


# ---------------------------------------------------------------- build
def main():
    if not os.path.exists(VI_MD):
        sys.exit("missing " + VI_MD)
    vi_blocks = split_lessons(read_lines(VI_MD))
    en_titles = {n: re.sub(r"^## \d+\. ", "", h) for n, h, _ in split_lessons(read_lines(EN_MD))} if os.path.exists(EN_MD) else {}

    bank = {}
    chapter_by_ordinal = {i + 1: (c[0], c[1]) for i, c in enumerate(CHAPTERS)}
    old_bank = extract_old_bank()
    for old_key, ordinal in OLD_TO_NEW.items():
        ch_name = chapter_by_ordinal[ordinal][0]
        bank.setdefault(ch_name, [])
        for q in old_bank.get(old_key, []):
            if q not in bank[ch_name]:
                bank[ch_name].append(q)

    lessons = []
    for num, head, body in sorted(vi_blocks):
        parsed = parse_body(body)
        vi_title = clean_title(head).replace("C + +", "C++")
        en_title = en_titles.get(num, "")
        page = ""
        if parsed["url"]:
            m = re.search(r"cpp/(cpp_[a-z0-9_]+)\.asp", parsed["url"])
            page = m.group(1) if m else "cpp_lesson_%d" % num
        else:
            page = "cpp_lesson_%d" % num
        lid = page.replace("_", "-")
        slug = lid.replace("cpp-", "", 1)
        chapter, topic = chapter_for(num)
        starter, starter_note = STARTERS[int(chapter[:2])]

        concept_pts = []
        for sec in parsed["sections"]:
            concept_pts.append(sec["point"])

        if parsed["examples"]:
            examples = parsed["examples"][:6]
        else:
            examples = [{"title": "Khung thử nghiệm", "code": starter, "output": "", "explanation": starter_note}]
        # ensure every example has explanation or sensible fallback
        for ex in examples:
            if not ex.get("explanation"):
                ex["explanation"] = "Chạy thử và tự sửa code để cảm nhận cách nó hoạt động."
        syntax_code = examples[0]["code"]
        syntax_ex = examples[0]["explanation"]

        concept = " ".join(concept_pts).strip()
        if len(concept) <= 40:
            concept = (concept + " " + (vi_title + ": tài liệu tham khảo nhanh kèm ví dụ chạy được trong trình duyệt.")).strip()
        description = shorten(concept_pts[0] if concept_pts else concept, 220)

        section_titles = []
        seen = set()
        for sec in parsed["sections"]:
            h = (sec["h"] or "").strip()
            if h and h not in seen:
                seen.add(h)
                section_titles.append(h)

        objectives = ["Nắm được: " + vi_title + "."]
        if section_titles:
            objectives.append("Trình bày được: " + "; ".join(section_titles[:3]) + ".")
        objectives.append("Chạy và sửa được %d ví dụ code của bài." % len(examples))

        notes = parsed["notes"][:5]
        if not notes:
            notes = NOTES_DEFAULT[:2]
        takeaways = [shorten(p, 120) for p in concept_pts[:4]] or [shorten(concept, 140)]

        est = 5 + min(15, 3 * len(examples))
        difficulty = "intermediate" if int(chapter[:2]) in INTERMEDIATE else "beginner"

        lessons.append({
            "id": lid,
            "slug": slug,
            "title": vi_title,
            "titleEn": en_title,
            "num": num,
            "chapter": chapter,
            "topic": topic,
            "difficulty": difficulty,
            "estimatedTime": est,
            "prerequisites": [],
            "description": description,
            "objectives": objectives,
            "concept": {"title": "Khái niệm", "content": concept},
            "sections": section_titles[:14],
            "syntax": [{"code": syntax_code, "explanation": syntax_ex}],
            "examples": examples,
            "tables": parsed["tables"][:3],
            "useCases": USE_CASES.get(topic, ["Áp dụng trong bài tập C++ và project nhỏ.", "Làm nền cho chủ đề nâng cao hơn."]),
            "notes": notes[:6],
            "commonMistakes": mistakes_for(vi_title, concept),
            "keyTakeaways": takeaways,
            "exerciseIds": [],
            "quiz": [],
            "source": parsed["url"] or "https://www.w3schools.com/cpp/",
        })

    # prerequisites: previous lesson in same chapter
    prev_in_ch = {}
    for l in lessons:
        p = prev_in_ch.get(l["chapter"])
        l["prerequisites"] = [p] if p else []
        prev_in_ch[l["chapter"]] = l["id"]

    lessons_js = json.dumps(lessons, ensure_ascii=False, separators=(",", ":"))
    bank_js = json.dumps(bank, ensure_ascii=False, separators=(",", ":"))

    helper = r"""
  function __quizHash(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function __firstSentence(t) { t = String(t || '').trim(); const m = t.split(/(?<=[.!?])\s+/)[0] || t; return m.length > 150 ? m.slice(0, 147).trimEnd() + '\u2026' : m; }
  function __buildQuizzes(all, banks) {
    const sentences = all.map((x) => ({ own: __firstSentence(x.concept && x.concept.content), ch: x.chapter }));
    all.forEach((l, idx) => {
      const own = __firstSentence(l.concept && l.concept.content);
      const distractors = [];
      const seen = new Set([own]);
      let k = __quizHash(l.id + '|' + l.title);
      for (let step = 1; step < all.length && distractors.length < 3; step++) {
        const cand = sentences[(k + step * 37) % all.length];
        if (cand.ch !== l.chapter && cand.own && !seen.has(cand.own)) { distractors.push(cand.own); seen.add(cand.own); }
      }
      for (let r = 0; r < all.length && distractors.length < 3; r++) {
        const cand = sentences[r];
        if (cand.own && !seen.has(cand.own)) { distractors.push(cand.own); seen.add(cand.own); }
      }
      while (distractors.length < 3) distractors.push('Phương án ' + (distractors.length + 1));
      const q1 = {
        question: 'Đâu là nội dung trọng tâm của bài "' + l.title + '"?',
        options: [own, distractors[0], distractors[1], distractors[2]],
        answer: 0,
        explanation: 'Bài "' + l.title + '" tập trung vào: ' + own,
      };
      const bank = banks[l.chapter] || [];
      const out = [q1];
      if (bank.length) out.push(bank[k % bank.length]);
      if (bank.length > 1) out.push(bank[(k + 1 + (idx % bank.length)) % bank.length]);
      l.quiz = out;
    });
  }
  __buildQuizzes(lessons, BANK);
  window.cppLessons = lessons;
})();
"""
    helper = helper.replace("BANK", bank_js, 1)

    out = (
        "// Tự sinh từ w3schools_cpp_tutorial_vi.md bằng tools/build_cpp_lessons.py — không sửa tay.\n"
        "(function () {\n"
        "  const lessons = " + lessons_js + ";\n"
        + helper
    )
    with io.open(OUT_JS, "w", encoding="utf-8") as f:
        f.write(out)

    print("lessons:", len(lessons))
    print("with real code:", sum(1 for l in lessons if l["examples"] and l["examples"][0]["title"] != "Khung thử nghiệm"))
    print("total examples:", sum(len(l["examples"]) for l in lessons))
    print("with tables:", sum(1 for l in lessons if l["tables"]))
    print("quiz bank chapters:", len(bank))
    print("bytes:", os.path.getsize(OUT_JS))


if __name__ == "__main__":
    main()
