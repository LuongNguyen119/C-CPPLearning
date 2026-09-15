(function () {
  const normalizeCode = (value) =>
    /\b(cout|cin|cerr|clog|endl|string|vector|array|deque|list|stack|queue|map|set|pair|tuple|optional|variant|span|unique_ptr|shared_ptr|weak_ptr|make_unique|make_shared|move|sort|find|count|accumulate|transform|remove_if|lower_bound|filesystem|chrono|regex|exception|integral)\b/.test(
      value,
    ) && !/using\s+namespace\s+std\s*;/.test(value)
      ? "using namespace std;\n" + value
      : value;
  const E = (
    id,
    title,
    chapter,
    concept,
    syntax,
    code,
    output,
    explanation,
    prerequisites = [],
  ) => ({
    id,
    slug: id.replace(/^cpp-/, "").replace(/[^a-z0-9-]/g, "-"),
    title,
    chapter,
    difficulty: [
      "cpp-oop",
      "cpp-inheritance",
      "cpp-polymorphism",
      "cpp-stl-algorithms",
      "cpp-smart-pointers",
      "cpp-exceptions",
    ].includes(id)
      ? "intermediate"
      : "beginner",
    estimatedTime: 12,
    prerequisites,
    description: concept,
    objectives: [
      `Hiểu ${title}.`,
      `Viết được ví dụ C++ dùng ${title}.`,
      "Nhận diện lỗi và chọn cách sửa phù hợp.",
    ],
    concept: { title: "Khái niệm", content: concept },
    syntax: [{ code: normalizeCode(code), explanation }],
    examples: [
      {
        title: "Ví dụ minh họa",
        code: normalizeCode(code),
        output,
        explanation,
      },
    ],
    useCases: [
      "Áp dụng trong bài tập C++ và project nhỏ.",
      "Làm nền cho chủ đề nâng cao hơn.",
    ],
    notes: [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm.",
    ],
    commonMistakes: [
      {
        wrong: "Bỏ qua kiểu dữ liệu hoặc header cần thiết.",
        why: "Compiler không biết tên hoặc biểu thức có thể sai kiểu.",
        correct: "Thêm header và chọn kiểu phù hợp trước khi biên dịch.",
      },
    ],
    keyTakeaways: [
      `Nắm mục đích của ${title}.`,
      "Đọc được cú pháp và ví dụ.",
      "Tự thay đổi code rồi kiểm tra kết quả.",
    ],
    exerciseIds: [],
    quiz: [
      {
        question: `Điều nào đúng về ${title}?`,
        options: [
          `Hiểu và thực hành ${title}`,
          "Chỉ sao chép code",
          "Bỏ qua lỗi biên dịch",
          "Không cần kiểm tra output",
        ],
        answer: 0,
        explanation: "Hiểu khái niệm và thực hành là mục tiêu của bài.",
      },
      {
        question: "C++ hiện đại nên ưu tiên điều gì?",
        options: [
          "Thư viện chuẩn và quản lý tài nguyên an toàn",
          "Con trỏ thô ở mọi nơi",
          "Biến toàn cục cho mọi dữ liệu",
          "Bỏ qua warning",
        ],
        answer: 0,
        explanation: "C++ hiện đại ưu tiên STL, RAII và ownership rõ ràng.",
      },
      {
        question: "Khi chương trình sai, bước đầu tiên nên làm gì?",
        options: [
          "Đọc lỗi và tạo test nhỏ",
          "Xóa toàn bộ code",
          "Đổi compiler ngẫu nhiên",
          "Bỏ qua kết quả",
        ],
        answer: 0,
        explanation: "Thông báo lỗi và test nhỏ giúp thu hẹp nguyên nhân.",
      },
    ],
    source: "https://www.w3schools.com/cpp/",
  });
  const lessons = [
    E(
      "cpp-intro",
      "C++ là gì?",
      "01 · C++ Basics",
      "C++ là ngôn ngữ biên dịch đa mục đích, phát triển từ C và hỗ trợ cả lập trình thủ tục lẫn hướng đối tượng. C++ được dùng cho game, ứng dụng desktop, hệ thống nhúng, công cụ hiệu năng cao và phần mềm máy chủ.",
      "#include <iostream>\nint main() { /* ... */ }",
      '#include <iostream>\n\nint main() {\n    cout << "Hello, World!\\n";\n    return 0;\n}',
      "Hello, World!",
      "iostream cung cấp cout; main là điểm bắt đầu; \\n tạo dòng mới.",
    ),
    E(
      "cpp-getting-started",
      "Compiler, IDE và C++20",
      "01 · C++ Basics",
      "Editor dùng để viết mã; compiler như g++ hoặc clang++ dịch mã thành chương trình. IDE gom editor, build, debugger và quản lý project. C++20 là một chuẩn ngôn ngữ; compiler cần được chọn bằng cờ chuẩn.",
      "g++ -std=c++20 -Wall -Wextra -pedantic main.cpp -o main",
      '#include <iostream>\nint main() { cout << "Built with C++20"; }',
      "Built with C++20",
      "-std=c++20 bật chuẩn C++20; -Wall và -Wextra yêu cầu cảnh báo.",
    ),
    E(
      "cpp-syntax",
      "C++ Syntax",
      "01 · C++ Basics",
      "C++ phân biệt hoa thường. Statement thường kết thúc bằng ;, block dùng { }, và biểu thức được tổ chức trong hàm, class hoặc namespace.",
      "#include <iostream>\nint main() { statement; }",
      '#include <iostream>\n\nint main() {\n    int age = 18;\n    if (age >= 18) {\n        cout << "Adult";\n    }\n    return 0;\n}',
      "Adult",
      "Block của if chỉ chạy khi điều kiện đúng.",
    ),
    E(
      "cpp-comments",
      "Comments",
      "01 · C++ Basics",
      "Comment là ghi chú bị compiler bỏ qua. C++ hỗ trợ // cho một dòng và /* ... */ cho nhiều dòng. Dùng comment giải thích lý do hoặc contract, không dùng để che giấu mã cũ.",
      "// một dòng\n/* nhiều dòng */",
      '#include <iostream>\n\nint main() {\n    // Ghi chú ngắn\n    cout << "Code";\n    return 0;\n}',
      "Code",
      "Comment không tạo output và không ảnh hưởng logic.",
    ),
    E(
      "cpp-output",
      "Output với cout",
      "01 · C++ Basics",
      `cout là stream xuất chuẩn. Toán tử << nối nhiều giá trị; ký tự newline tạo dòng mới còn endl vừa xuống dòng vừa flush.`,
      `cout << value;`,
      `#include <iostream>
using namespace std;

int main() {
    int age = 20;
    cout << "Age: " << age;
    return 0;
}`,
      "Age: 20",
      "Các phần được nối bằng << và kiểu dữ liệu được stream tự xử lý.",
    ),
    E(
      "cpp-input",
      "Input với cin và getline",
      "01 · C++ Basics",
      "cin đọc token theo kiểu dữ liệu; std::getline đọc cả dòng có khoảng trắng. Sau cin >> value, newline còn trong buffer có thể làm getline đọc một dòng rỗng; dùng cin.ignore để xử lý.",
      "cin >> number;\nstd::getline(cin, text);",
      '#include <iostream>\n#include <string>\n\nint main() {\n    string name;\n    std::getline(cin, name);\n    cout << "Hello " << name;\n    return 0;\n}',
      "Hello (input name)",
      "string giữ văn bản và getline nhận cả khoảng trắng.",
    ),
    E(
      "cpp-variables",
      "Variables",
      "02 · Values and Control",
      "Biến là đối tượng có tên, kiểu và lifetime. C++ có thể suy luận kiểu bằng auto nhưng người mới nên hiểu kiểu thật trước; khởi tạo bằng {}, = hoặc constructor giúp tránh giá trị rác.",
      "type name{value};\nconst type name{value};",
      '#include <iostream>\n\nint main() {\n    int age{20};\n    double height{1.75};\n    const int birthYear{2000};\n    cout << age << " " << height << " " << birthYear;\n}',
      "20 1.75 2000",
      "{} là uniform initialization; const không cho phép gán lại.",
    ),
    E(
      "cpp-types",
      "Data Types",
      "02 · Values and Control",
      "Kiểu cơ bản gồm bool, char, int, long long, float và double. C++ còn có kiểu thư viện như string và container như vector; chọn kiểu theo miền giá trị và ý nghĩa dữ liệu.",
      "bool, char, int, long long, float, double",
      '#include <iostream>\n\nint main() {\n    bool ready{true};\n    long long population{8000000000LL};\n    cout << ready << " " << population;\n    return 0;\n}',
      "1 8000000000",
      "Kiểu giúp compiler kiểm tra phép toán và quyết định biểu diễn bộ nhớ.",
    ),
    E(
      "cpp-const",
      "const và constexpr",
      "02 · Values and Control",
      "const ngăn thay đổi một object sau khởi tạo; constexpr yêu cầu giá trị có thể tính tại compile time khi ngữ cảnh cho phép. Dùng chúng để biểu đạt dữ liệu bất biến và tối ưu an toàn.",
      "const int limit{10};\nconstexpr int square(int x) { return x*x; }",
      "#include <iostream>\n\nconstexpr int square(int x) { return x * x; }\nint main() {\n    constexpr int answer = square(4);\n    cout << answer;\n    return 0;\n}",
      "16",
      "square(4) có thể được tính lúc biên dịch.",
    ),
    E(
      "cpp-cast",
      "Type Conversion",
      "02 · Values and Control",
      "C++ có chuyển ngầm định giữa kiểu tương thích và cast tường minh. static_cast diễn đạt chuyển đổi số/kiểu liên quan rõ hơn C-style cast; hãy cẩn thận khi thu hẹp từ double sang int.",
      "static_cast<target>(value)",
      '#include <iostream>\n\nint main() {\n    int whole = static_cast<int>(3.9);\n    double ratio = static_cast<double>(5) / 2;\n    cout << whole << " " << ratio;\n    return 0;\n}',
      "3 2.5",
      "Cast đầu cắt phần thập phân; cast thứ hai buộc phép chia số thực.",
    ),
    E(
      "cpp-arithmetic",
      "Arithmetic Operators",
      "02 · Values and Control",
      "+, -, *, / và % thực hiện phép tính. Chia hai số nguyên vẫn cho số nguyên; dùng toán hạng số thực nếu cần phần thập phân. ++ và -- thay đổi giá trị một đơn vị.",
      "a + b; a / b; a % b; ++a;",
      '#include <iostream>\n\nint main() {\n    int a{10}, b{3};\n    cout << a / b << " " << a % b;\n    return 0;\n}',
      "3 1",
      "Phép chia nguyên bỏ phần lẻ; % lấy phần dư.",
    ),
    E(
      "cpp-comparison",
      "Comparison and Logical Operators",
      "02 · Values and Control",
      "==, !=, <, >, <=, >= tạo bool. &&, || và ! kết hợp điều kiện; C++ short-circuit nên vế sau có thể không chạy.",
      "left == right && ready",
      '#include <iostream>\n\nint main() {\n    int age{20};\n    bool hasCard{true};\n    if (age >= 18 && hasCard) cout << "Allowed";\n    return 0;\n}',
      "Allowed",
      "Hai điều kiện đều đúng nên if chạy.",
    ),
    E(
      "cpp-if",
      "if, else và switch",
      "03 · Control Flow",
      "if/else phù hợp với điều kiện và khoảng giá trị. switch phù hợp khi so sánh một biểu thức với các giá trị cố định; case cần break hoặc chủ động dùng fallthrough.",
      "if (condition) { ... }\nswitch (value) { case 1: ...; break; }",
      '#include <iostream>\n\nint main() {\n    int choice{2};\n    switch (choice) {\n        case 1: cout << "Add"; break;\n        case 2: cout << "Edit"; break;\n        default: cout << "Other";\n    }\n    return 0;\n}',
      "Edit",
      "switch đọc choice và dừng tại case 2.",
    ),
    E(
      "cpp-loops",
      "while, do while và for",
      "03 · Control Flow",
      "while kiểm tra trước, do while chạy ít nhất một lần, for gom khởi tạo/điều kiện/cập nhật. C++ còn có range-based for để duyệt container.",
      "for (init; condition; update) { ... }",
      '#include <iostream>\n\nint main() {\n    for (int i{1}; i <= 3; ++i) cout << i << " ";\n    return 0;\n}',
      "1 2 3 ",
      "++i cập nhật biến đếm sau mỗi lượt.",
    ),
    E(
      "cpp-string",
      "string",
      "04 · Strings and Containers",
      "string là lớp thư viện quản lý chuỗi và bộ nhớ tự động. Nó có size(), empty(), append, find và hỗ trợ so sánh; không cần tự chèn ký tự null như char array.",
      'string text{"hello"};\ntext.size();',
      '#include <iostream>\n#include <string>\n\nint main() {\n    string first{"Hello"};\n    string second{" C++"};\n    cout << first + second;\n    return 0;\n}',
      "Hello C++",
      "operator+ tạo chuỗi mới; string tự quản lý storage.",
    ),
    E(
      "cpp-vector",
      "vector",
      "04 · Strings and Containers",
      "vector<T> là mảng động an toàn và tiện dụng. push_back thêm phần tử, size trả số phần tử, [] truy cập nhanh còn at() kiểm tra biên và ném exception nếu sai.",
      "vector<T> values{...};\nvalues.push_back(value);",
      '#include <iostream>\n#include <vector>\n\nint main() {\n    vector<int> values{1, 2, 3};\n    values.push_back(4);\n    for (const int value : values) cout << value << " ";\n    return 0;\n}',
      "1 2 3 4",
      "range-based for đọc từng phần tử; vector tự tăng capacity khi cần.",
    ),
    E(
      "cpp-functions",
      "Functions, references và overload",
      "05 · Functions",
      "Hàm chia code thành nhiệm vụ nhỏ. C++ cho phép truyền tham chiếu để sửa object gốc, dùng const T& để đọc không copy, và overload nhiều hàm cùng tên với chữ ký khác nhau.",
      "return_type name(parameters);",
      "#include <iostream>\n\nint add(int a, int b) { return a + b; }\nint main() { cout << add(2, 3); return 0; }",
      "5",
      "add nhận hai giá trị và trả tổng; main dùng kết quả.",
    ),
    E(
      "cpp-lambda",
      "Lambda và auto",
      "05 · Functions",
      "Lambda là hàm không tên, thường dùng ngay tại nơi cần callback hoặc predicate. auto suy luận kiểu từ biểu thức; không nên dùng khi làm mất ý nghĩa kiểu trong API.",
      "auto predicate = [](int x) { return x > 0; };",
      "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    vector<int> v{-1, 2, 3};\n    int count = count_if(v.begin(), v.end(), [](int x) { return x > 0; });\n    cout << count;\n    return 0;\n}",
      "2",
      "Lambda được truyền vào count_if như một predicate.",
    ),
    E(
      "cpp-class",
      "class và struct",
      "06 · OOP",
      "class đóng gói state và hành vi. Member của class mặc định private; member của struct mặc định public. Encapsulation giữ invariant bằng cách giới hạn cách sửa dữ liệu.",
      "class Name { public: ... private: ... };",
      "#include <iostream>\n\nclass Counter {\n    int value{0};\npublic:\n    void increment() { ++value; }\n    int get() const { return value; }\n};\nint main() { Counter c; c.increment(); cout << c.get(); }",
      "1",
      "value private; public method điều khiển thay đổi và getter đọc state.",
    ),
    E(
      "cpp-constructors",
      "Constructor, destructor và this",
      "06 · OOP",
      "Constructor khởi tạo object khi nó được tạo; destructor chạy khi lifetime kết thúc. this trỏ object hiện tại. C++ hiện đại ưu tiên member initializer list và để compiler tạo destructor khi không cần tài nguyên riêng.",
      "Class() : member{value} {}\n~Class() = default;",
      "#include <iostream>\n\nclass User {\n    int id;\npublic:\n    explicit User(int value) : id{value} {}\n    int getId() const { return id; }\n};\nint main() { User user{42}; cout << user.getId(); }",
      "42",
      "Initializer list khởi tạo id trực tiếp trước thân constructor.",
    ),
    E(
      "cpp-encapsulation",
      "Encapsulation, composition và const member",
      "06 · OOP",
      "Encapsulation che giấu representation; composition xây object lớn từ object nhỏ. const member function cam kết không thay đổi state quan sát được và có thể gọi trên const object.",
      "class A { B part; public: result read() const; };",
      "#include <iostream>\n\nclass Temperature {\n    double celsius;\npublic:\n    explicit Temperature(double c) : celsius{c} {}\n    double fahrenheit() const { return celsius * 9.0 / 5.0 + 32.0; }\n};\nint main() { const Temperature t{0}; cout << t.fahrenheit(); }",
      "32",
      "t là const nên chỉ gọi được hàm member có hậu tố const.",
    ),
    E(
      "cpp-inheritance",
      "Inheritance và override",
      "07 · Polymorphism",
      "Inheritance biểu diễn quan hệ “is-a”; class dẫn xuất nhận interface hoặc implementation từ base. override yêu cầu compiler kiểm tra bạn thật sự ghi đè virtual function. Composition thường tốt hơn inheritance nếu quan hệ không phải is-a.",
      "class Child : public Parent { void run() override; };",
      '#include <iostream>\n\nstruct Animal { virtual void speak() const { cout << "?"; } virtual ~Animal() = default; };\nstruct Cat : Animal { void speak() const override { cout << "Meow"; } };\nint main() { Cat cat; cat.speak(); }',
      "Meow",
      "Cat override speak của Animal.",
    ),
    E(
      "cpp-polymorphism",
      "virtual và polymorphism",
      "07 · Polymorphism",
      "Polymorphism cho phép gọi interface base nhưng chạy implementation phù hợp của object dẫn xuất. Base có virtual destructor khi xóa qua pointer base; dùng reference/pointer và ownership rõ ràng.",
      "virtual Return method() const = 0;",
      "#include <iostream>\n\nstruct Shape { virtual double area() const = 0; virtual ~Shape() = default; };\nstruct Square : Shape { double side; explicit Square(double s):side{s}{} double area() const override{return side*side;} };\nint main(){ Square s{3}; cout << s.area(); }",
      "9",
      "Square cung cấp implementation cho interface area.",
    ),
    E(
      "cpp-algorithms",
      "STL algorithms và iterators",
      "08 · STL",
      "STL tách container khỏi algorithm. Iterator biểu diễn vị trí trong range; <algorithm> có sort, find, count, max_element. Dùng begin/end hoặc range-based API để tái sử dụng code.",
      "sort(begin, end);\nfind(begin, end, value);",
      '#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    vector<int> v{3, 1, 2};\n    sort(v.begin(), v.end());\n    for (int x : v) cout << x << " ";\n    return 0;\n}',
      "1 2 3 ",
      "sort thay đổi vector theo thứ tự tăng mặc định.",
    ),
    E(
      "cpp-map-set",
      "map, set và pair",
      "08 · STL",
      "map lưu cặp key-value có thứ tự; unordered_map dùng hash. set giữ phần tử duy nhất. pair nhóm hai giá trị; structured binding giúp đọc entry rõ hơn.",
      "map<Key, Value> data;\ndata[key] = value;",
      '#include <iostream>\n#include <map>\n\nint main() {\n    map<string, int> scores{{"An", 9}};\n    scores["Binh"] = 8;\n    for (const auto& [name, score] : scores) cout << name << ":" << score << " ";\n    return 0;\n}',
      "An:9 Binh:8 ",
      "map sắp xếp key; structured binding tách pair thành name và score.",
    ),
    E(
      "cpp-smart-pointers",
      "RAII và smart pointers",
      "09 · Resource Safety",
      "RAII gắn lifetime tài nguyên với lifetime object. unique_ptr biểu diễn ownership duy nhất; shared_ptr chia sẻ ownership và có reference count. Ưu tiên object tự động và unique_ptr trước shared_ptr.",
      "unique_ptr<T> p = make_unique<T>(args...);",
      "#include <iostream>\n#include <memory>\n\nint main() {\n    auto value = make_unique<int>(42);\n    cout << *value;\n    return 0;\n}",
      "42",
      "Khi value ra khỏi scope, memory tự được giải phóng.",
    ),
    E(
      "cpp-exceptions",
      "Exceptions và error handling",
      "09 · Resource Safety",
      "Exception báo lỗi bằng cách thoát luồng bình thường tới catch. Dùng exception cho lỗi thực sự bất thường, không thay thế validation đơn giản; RAII bảo đảm resource được dọn khi stack unwinding.",
      "try { ... } catch (const exception& e) { ... }",
      '#include <iostream>\n#include <stdexcept>\n\nint divide(int a, int b) { if (b == 0) throw invalid_argument("zero"); return a / b; }\nint main() { try { cout << divide(4, 0); } catch (const exception& e) { cout << e.what(); } }',
      "zero",
      "throw tạo exception; catch nhận const reference tới exception.",
    ),
    E(
      "cpp-files",
      "File I/O, header và namespace",
      "10 · Files and Projects",
      "fstream cung cấp ifstream để đọc, ofstream để ghi và fstream cho cả hai. Namespace tránh xung đột tên; header chứa interface và source chứa implementation.",
      '#include <fstream>\nstd::ofstream out{"data.txt"};',
      '#include <fstream>\n#include <iostream>\n\nint main() {\n    std::ofstream out{"data.txt"};\n    if (!out) return 1;\n    out << "C++ file\\n";\n    cout << "written";\n    return 0;\n}',
      "written",
      "ofstream tự đóng khi ra khỏi scope; vẫn cần kiểm tra mở file.",
    ),
    E(
      "cpp-debugging",
      "Command line, bitwise và debug",
      "10 · Files and Projects",
      "argc/argv nhận đối số dòng lệnh; bitwise thao tác bit trên số nguyên. Debug gồm tái hiện lỗi, đọc warning, dùng debugger và test nhỏ.",
      "#include <cstdint>\nint main(int argc, char* argv[]) { ... }",
      '#include <iostream>\n\nint main(int argc, char* argv[]) {\n    cout << "Arguments: " << argc;\n    return 0;\n}',
      "Arguments: 1",
      "argc ít nhất là 1; argv[0] thường là tên chương trình.",
    ),
    E(
      "cpp-project",
      "C++ Project tổng hợp",
      "11 · Projects",
      "Project tổng hợp kết hợp class, vector, algorithms, file và validation. Hãy chia module, giữ ownership rõ, viết test cho từng chức năng rồi mới ghép menu.",
      "class App { vector<Record> records; };",
      '#include <iostream>\n#include <vector>\n\nstruct Task { string title; bool done{}; };\nint main() {\n    vector<Task> tasks{{"Learn C++", false}};\n    tasks[0].done = true;\n    cout << tasks[0].title << ": " << tasks[0].done;\n    return 0;\n}',
      "Learn C++: 1",
      "vector quản lý danh sách; struct biểu diễn record; bool lưu trạng thái.",
    ),
    E(
      "cpp-reference",
      "C++ Standard Library Reference",
      "11 · Projects",
      "Reference là nơi tra cứu nhanh class, function, header và complexity. Đọc lesson để hiểu khi nào dùng; đọc reference để kiểm tra signature, precondition, exception và iterator invalidation.",
      "header -> type -> function -> contract",
      "#include <iostream>\n#include <vector>\n\nint main() { vector<int> values{1,2,3}; cout << values.size(); }",
      "3",
      "vector::size trả số phần tử; reference giúp kiểm tra kiểu và contract.",
    ),
  ];

  // Additional C++ curriculum: STL, OOP, templates, memory safety and modern C++.
  lessons.push(
    E(
      "cpp-namespace",
      "Namespaces",
      "01 · C++ Basics",
      "Namespace tạo vùng tên để tránh xung đột giữa các hàm, class và biến có cùng tên. Thư viện chuẩn nằm trong namespace std; viết std:: giúp compiler biết chính xác symbol nào được dùng.",
      "#include <iostream>\nnamespace app { void greet(); }",
      '#include <iostream>\nnamespace app { void greet() { cout << "Hello"; } }\nint main() { app::greet(); }',
      "Hello",
      "greet thuộc app nên được gọi bằng app::greet().",
      ["cpp-intro"],
    ),
  );
  lessons.push(
    E(
      "cpp-newline",
      "\\n và endl",
      "01 · C++ Basics",
      "Cả ký tự newline và endl đều xuống dòng. endl còn flush stream, nên dùng nó khi thật sự cần đẩy buffer ngay; trong output thường xuyên, \\n thường hiệu quả hơn.",
      'cout << "text\\n";\ncout << "text" << endl;',
      '#include <iostream>\nint main() { cout << "A\\nB\\n"; }',
      "A\nB",
      "\\n xuống dòng mà không yêu cầu flush mỗi lần.",
      ["cpp-output"],
    ),
  );
  lessons.push(
    E(
      "cpp-stream-state",
      "Trạng thái stream",
      "01 · C++ Basics",
      "cin có các trạng thái good, fail, eof và bad. Khi input sai kiểu, stream bật failbit; cần clear() rồi loại phần dữ liệu sai trước khi đọc tiếp.",
      "if (cin.fail()) { cin.clear(); cin.ignore(...); }",
      "#include <iostream>\n#include <limits>\nint main() {\n    int n;\n    if (!(cin >> n)) {\n        cin.clear();\n        cin.ignore(numeric_limits<streamsize>::max(), '\\n');\n        cout << \"Invalid\";\n    }\n}",
      "Invalid",
      "clear xóa cờ lỗi; ignore bỏ dữ liệu còn lại của dòng.",
      ["cpp-input"],
    ),
  );
  lessons.push(
    E(
      "cpp-enum-class",
      "enum class",
      "01 · C++ Basics",
      "enum class tạo tập hằng có phạm vi và kiểu an toàn hơn enum kiểu cũ. Thành viên không tự chuyển thành int, vì vậy code tránh được nhiều phép so sánh nhầm.",
      "enum class Color { red, green };\nColor color = Color::green;",
      '#include <iostream>\nenum class Color { Red, Green };\nint main() { Color color = Color::Green; if (color == Color::Green) cout << "green"; }',
      "green",
      "Phải dùng Color::Green để truy cập thành viên có phạm vi.",
      ["cpp-if"],
    ),
  );
  lessons.push(
    E(
      "cpp-auto",
      "auto và suy luận kiểu",
      "02 · Values and Control",
      "auto yêu cầu compiler suy luận kiểu từ biểu thức khởi tạo. Nó giảm lặp tên kiểu dài, nhưng không làm biến trở thành kiểu động; kiểu vẫn cố định sau khi biên dịch.",
      "auto name = initializer;",
      "#include <iostream>\n#include <vector>\nint main() { vector<int> values{1,2,3}; auto count = values.size(); cout << count; }",
      "3",
      "count có kiểu size_type được suy luận từ values.size().",
      ["cpp-types"],
    ),
  );
  lessons.push(
    E(
      "cpp-const-ref",
      "const reference",
      "02 · Values and Control",
      "const T& cho phép đọc object lớn mà không sao chép và không cho hàm sửa object qua tham chiếu đó. Đây là kiểu tham số phổ biến cho string, vector và class.",
      "void print(const T& value);",
      '#include <iostream>\n#include <string>\nvoid print(const string& text) { cout << text; }\nint main() { print("C++"); }',
      "C++",
      "const reference đọc dữ liệu mà không tạo bản sao string.",
      ["cpp-functions"],
    ),
  );
  lessons.push(
    E(
      "cpp-ternary",
      "Toán tử điều kiện ?:",
      "02 · Values and Control",
      "Toán tử ba ngôi chọn một trong hai biểu thức dựa trên điều kiện. Nó phù hợp cho lựa chọn ngắn; nếu nhánh dài, dùng if để dễ đọc hơn.",
      "condition ? value_if_true : value_if_false",
      '#include <iostream>\nint main() { int n=7; cout << (n%2==0 ? "Even" : "Odd"); }',
      "Odd",
      "Điều kiện đúng chọn biểu thức trước dấu :.",
      ["cpp-comparison"],
    ),
  );
  lessons.push(
    E(
      "cpp-switch-enum",
      "switch với enum class",
      "03 · Control Flow",
      "enum class kết hợp switch tạo menu/trạng thái có tên rõ ràng. Mỗi case dùng tên đủ phạm vi và nên có default để xử lý giá trị ngoài dự kiến.",
      "switch (state) { case State::ready: ... }",
      '#include <iostream>\nenum class State { Ready, Done };\nint main() { State state=State::Done; switch(state){case State::Ready: cout<<"ready"; break; case State::Done: cout<<"done"; break;} }',
      "done",
      "switch so sánh các giá trị enum class mà không cần dùng số ma thuật.",
      ["cpp-enum-class"],
    ),
  );
  lessons.push(
    E(
      "cpp-array",
      "array",
      "04 · STL Containers",
      "array<T,N> là container có kích thước cố định, lưu liên tiếp như mảng C nhưng cung cấp size(), begin/end và giao tiếp tốt với STL.",
      "array<T,N> values{...};",
      '#include <array>\n#include <iostream>\nint main(){ array<int,3> a{2,4,6}; cout<<a.size()<<" "<<a[1]; }',
      "3 4",
      "array biết kích thước và dùng được với algorithms.",
      ["cpp-vector"],
    ),
  );
  lessons.push(
    E(
      "cpp-deque",
      "deque",
      "04 · STL Containers",
      "deque là hàng đợi hai đầu, cho phép thêm/xóa hiệu quả ở front và back. Không nên giả định toàn bộ phần tử nằm trong một vùng nhớ liên tiếp như vector.",
      "deque<T> q;\npush_front/push_back",
      '#include <deque>\n#include <iostream>\nint main(){ deque<int> q{2,3}; q.push_front(1); q.push_back(4); for(int x:q)cout<<x<<" "; }',
      "1 2 3 4 ",
      "deque phù hợp khi cần thêm ở cả hai đầu.",
      ["cpp-vector"],
    ),
  );
  lessons.push(
    E(
      "cpp-list",
      "list",
      "04 · STL Containers",
      "list là danh sách liên kết hai chiều. Chèn/xóa tại iterator đã biết không di chuyển các node khác, nhưng truy cập theo index chậm hơn vector/deque.",
      "list<T> values;\nvalues.insert(it,value);",
      '#include <iostream>\n#include <list>\nint main(){ list<int> values{1,3}; auto it=values.begin(); ++it; values.insert(it,2); for(int x:values)cout<<x<<" "; }',
      "1 2 3 ",
      "list giữ iterator hợp lệ khi chèn node mới.",
      ["cpp-iterators"],
    ),
  );
  lessons.push(
    E(
      "cpp-stack",
      "stack",
      "04 · STL Containers",
      "stack là container adapter theo nguyên tắc LIFO: phần tử vào sau được lấy ra trước. Nó cung cấp push, pop, top và empty, không cho duyệt trực tiếp.",
      "stack<T> stack;\nstack.push(value);\nstack.top();",
      "#include <iostream>\n#include <stack>\nint main(){ stack<int> s; s.push(1); s.push(2); cout<<s.top(); s.pop(); }",
      "2",
      "top xem phần tử trên cùng; pop loại bỏ nhưng không trả giá trị.",
      ["cpp-vector"],
    ),
  );
  lessons.push(
    E(
      "cpp-queue",
      "queue",
      "04 · STL Containers",
      "queue là adapter FIFO: phần tử vào trước được lấy ra trước. front xem đầu hàng, back xem cuối hàng; push thêm cuối và pop loại đầu.",
      "queue<T> q;\nq.push(value);\nq.front();",
      "#include <iostream>\n#include <queue>\nint main(){ queue<int> q; q.push(10); q.push(20); cout<<q.front(); q.pop(); cout<<q.front(); }",
      "1020",
      "Hai phần tử được lấy theo đúng thứ tự đưa vào.",
      ["cpp-vector"],
    ),
  );
  lessons.push(
    E(
      "cpp-priority-queue",
      "priority_queue",
      "04 · STL Containers",
      "priority_queue luôn đưa phần tử có độ ưu tiên cao nhất lên top. Mặc định là max-heap; có thể truyền comparator để tạo min-heap hoặc thứ tự riêng.",
      "priority_queue<T> pq;\npq.top();",
      "#include <iostream>\n#include <queue>\nint main(){ priority_queue<int> pq; pq.push(3); pq.push(9); pq.push(5); cout<<pq.top(); }",
      "9",
      "Phần tử lớn nhất được ưu tiên mặc định.",
      ["cpp-queue"],
    ),
  );
  lessons.push(
    E(
      "cpp-unordered-map",
      "unordered_map",
      "04 · STL Containers",
      "unordered_map lưu key-value bằng bảng băm. Tìm kiếm trung bình O(1), nhưng không giữ thứ tự key; cần hash và equality phù hợp.",
      "unordered_map<Key,Value> data;",
      '#include <iostream>\n#include <unordered_map>\n#include <string>\nint main(){ unordered_map<string,int> m{{"An",9}}; m["Binh"]=8; cout<<m.at("An"); }',
      "9",
      "at đọc key và ném exception nếu key không tồn tại; operator[] có thể tạo entry mới.",
      ["cpp-map-set"],
    ),
  );
  lessons.push(
    E(
      "cpp-unordered-set",
      "unordered_set",
      "04 · STL Containers",
      "unordered_set lưu các giá trị duy nhất bằng hash và không sắp xếp chúng. Dùng count hoặc find để kiểm tra phần tử có tồn tại.",
      "unordered_set<T> values;\nvalues.insert(value);",
      '#include <iostream>\n#include <unordered_set>\nint main(){ unordered_set<int> s{2,2,3}; cout<<s.size()<<" "<<s.count(3); }',
      "2 1",
      "Hai số 2 chỉ tạo một phần tử duy nhất.",
      ["cpp-map-set"],
    ),
  );
  lessons.push(
    E(
      "cpp-tuple",
      "tuple",
      "04 · STL Containers",
      "tuple nhóm nhiều giá trị có thể khác kiểu. std::get<index> truy cập theo vị trí; structured binding thường làm code đọc dễ hơn.",
      "tuple<T1,T2> value{...};\nstd::get<0>(value);",
      '#include <iostream>\n#include <tuple>\nint main(){ tuple<string,int> user{"An",20}; cout<<std::get<0>(user)<<" "<<std::get<1>(user); }',
      "An 20",
      "get truy cập trường theo index compile-time.",
      ["cpp-map-set"],
    ),
  );
  lessons.push(
    E(
      "cpp-optional",
      "optional",
      "04 · STL Containers",
      "optional biểu diễn một giá trị có thể có hoặc không có mà không cần dùng sentinel như -1. Kiểm tra has_value hoặc dùng value_or trước khi lấy giá trị.",
      "optional<T> find();\nif (value) { ... }",
      "#include <iostream>\n#include <optional>\noptional<int> findScore(bool found){ if(found)return 9; return nullopt; }\nint main(){ cout<<findScore(true).value_or(0); }",
      "9",
      "optional giữ rõ trường hợp “không có kết quả”.",
      ["cpp-functions"],
    ),
  );
  lessons.push(
    E(
      "cpp-variant",
      "variant",
      "04 · STL Containers",
      "variant giữ một giá trị thuộc một trong các kiểu đã khai báo và biết kiểu hiện tại. std::visit xử lý giá trị mà không cần union thủ công.",
      "variant<int,string> value;\nstd::visit(visitor,value);",
      '#include <iostream>\n#include <variant>\n#include <string>\nint main(){ variant<int,string> value=string("text"); std::visit([](const auto& x){cout<<x;},value); }',
      "text",
      "visit gọi lambda phù hợp với alternative hiện tại.",
      ["cpp-vector"],
    ),
  );
  lessons.push(
    E(
      "cpp-string-view",
      "string_view",
      "04 · STL Containers",
      "string_view là view không sở hữu một dãy ký tự. Nó tránh sao chép khi chỉ cần đọc, nhưng view phải ngắn hơn hoặc bằng lifetime của string gốc.",
      "string_view view{text};",
      '#include <iostream>\n#include <string_view>\nvoid print(string_view text){ cout<<text; }\nint main(){ print("C++ view"); }',
      "C++ view",
      "String literal sống đủ lâu trong lời gọi; hàm chỉ đọc view.",
      ["cpp-string"],
    ),
  );
  lessons.push(
    E(
      "cpp-span",
      "span",
      "04 · STL Containers",
      "span là view không sở hữu trên vùng phần tử liên tiếp, dùng chung cho vector, array và mảng C. Nó truyền pointer cùng length mà không copy dữ liệu.",
      "span<T> values;",
      "#include <iostream>\n#include <span>\nvoid sum(span<const int> a){int total=0;for(int x:a)total+=x;cout<<total;}\nint main(){int a[]{1,2,3};sum(a);}",
      "6",
      "span nhận mảng và biết số phần tử qua extent runtime.",
      ["cpp-array"],
    ),
  );
  lessons.push(
    E(
      "cpp-count-find",
      "count và find",
      "08 · STL Algorithms",
      "count đếm số lần xuất hiện; find trả iterator tới phần tử đầu tiên hoặc end nếu không thấy. Cả hai làm việc trên iterator range.",
      "count(first,last,value);\nfind(first,last,value);",
      '#include <algorithm>\n#include <iostream>\n#include <vector>\nint main(){vector<int> v{1,2,2,3};cout<<count(v.begin(),v.end(),2)<<" "<<(find(v.begin(),v.end(),3)!=v.end());}',
      "2 1",
      "count trả số lượng; find trả vị trí để tiếp tục xử lý.",
      ["cpp-algorithms"],
    ),
  );
  lessons.push(
    E(
      "cpp-max-element",
      "max_element và min_element",
      "08 · STL Algorithms",
      "max_element/min_element trả iterator tới phần tử lớn nhất/nhỏ nhất trong range. Range rỗng không có phần tử hợp lệ nên cần kiểm tra trước khi dereference.",
      "auto it = max_element(begin,end);",
      "#include <algorithm>\n#include <iostream>\n#include <vector>\nint main(){vector<int> v{4,9,2};auto it=max_element(v.begin(),v.end());cout<<*it;}",
      "9",
      "Dereference iterator sau khi bảo đảm range không rỗng.",
      ["cpp-algorithms"],
    ),
  );
  lessons.push(
    E(
      "cpp-accumulate",
      "accumulate và reduce",
      "08 · STL Algorithms",
      "accumulate trong numeric gộp các phần tử theo thứ tự, thường dùng tính tổng. reduce có thể thay đổi thứ tự kết hợp và thích hợp phép toán associative, đặc biệt khi song song hóa.",
      "accumulate(begin,end,initial);",
      "#include <iostream>\n#include <numeric>\n#include <vector>\nint main(){vector<int> v{1,2,3,4};cout<<accumulate(v.begin(),v.end(),0);}",
      "10",
      "Giá trị ban đầu 0 quyết định kiểu và kết quả tích lũy.",
      ["cpp-algorithms"],
    ),
  );
  lessons.push(
    E(
      "cpp-transform",
      "transform",
      "08 · STL Algorithms",
      "transform áp dụng một phép biến đổi cho từng phần tử và ghi vào output range. Nó tách thuật toán khỏi container và tránh viết loop thủ công lặp lại.",
      "transform(begin,end,out,operation);",
      '#include <algorithm>\n#include <iostream>\n#include <vector>\nint main(){vector<int> v{1,2,3},out(3);transform(v.begin(),v.end(),out.begin(),[](int x){return x*x;});for(int x:out)cout<<x<<" ";}',
      "1 4 9 ",
      "Output iterator phải trỏ tới vùng đủ chỗ ghi.",
      ["cpp-algorithms"],
    ),
  );
  lessons.push(
    E(
      "cpp-remove-if",
      "remove_if và erase",
      "08 · STL Algorithms",
      "remove_if dồn các phần tử không bị loại về đầu range và trả “new logical end”; container vẫn giữ kích thước cũ. Với vector, kết hợp erase để xóa phần đuôi thực sự.",
      "values.erase(remove_if(...), values.end());",
      '#include <algorithm>\n#include <iostream>\n#include <vector>\nint main(){vector<int> v{1,2,3,4};v.erase(remove_if(v.begin(),v.end(),[](int x){return x%2==0;}),v.end());for(int x:v)cout<<x<<" ";}',
      "1 3 ",
      "remove_if không tự giảm size container.",
      ["cpp-vector"],
    ),
  );
  lessons.push(
    E(
      "cpp-binary-search",
      "binary_search và lower_bound",
      "08 · STL Algorithms",
      "binary_search kiểm tra phần tử trong range đã sắp xếp. lower_bound trả vị trí đầu tiên không nhỏ hơn giá trị; cả hai cần range có thứ tự theo cùng comparator.",
      "binary_search(begin,end,value);",
      "#include <algorithm>\n#include <iostream>\n#include <vector>\nint main(){vector<int> v{1,3,5,7};auto it=lower_bound(v.begin(),v.end(),4);cout<<(it-v.begin());}",
      "2",
      "Vị trí 2 là nơi 4 có thể chèn trước 5.",
      ["cpp-algorithms"],
    ),
  );
  lessons.push(
    E(
      "cpp-comparator",
      "Comparator",
      "08 · STL Algorithms",
      "Comparator định nghĩa thứ tự cho sort và các algorithm. Nó phải biểu diễn strict weak ordering: không được vừa a<b vừa b<a và phải nhất quán.",
      "sort(begin,end,[](const T&a,const T&b){ return a.key < b.key; });",
      '#include <algorithm>\n#include <iostream>\n#include <vector>\nint main(){vector<int> v{3,1,2};sort(v.begin(),v.end(),[](int a,int b){return a>b;});for(int x:v)cout<<x<<" ";}',
      "3 2 1 ",
      "Lambda comparator sắp xếp giảm dần.",
      ["cpp-algorithms"],
    ),
  );
  lessons.push(
    E(
      "cpp-iterators",
      "Iterator cơ bản",
      "08 · STL Algorithms",
      "Iterator là đối tượng giống con trỏ, đại diện vị trí trong container. begin/end tạo range nửa mở [begin,end); end không trỏ phần tử hợp lệ và không được dereference.",
      "for (auto it=begin; it!=end; ++it) { ... }",
      '#include <iostream>\n#include <vector>\nint main(){vector<int> v{2,4,6};for(auto it=v.begin();it!=v.end();++it)cout<<*it<<" ";}',
      "2 4 6 ",
      "Iterator cho phép algorithm dùng chung nhiều container.",
      ["cpp-vector"],
    ),
  );
  lessons.push(
    E(
      "cpp-invalidation",
      "Iterator invalidation",
      "08 · STL Algorithms",
      "Một số thao tác container làm iterator/reference cũ không còn hợp lệ. vector có thể invalidation khi reallocate; list thường giữ iterator khác khi chèn. Đọc contract của container trước khi giữ iterator lâu.",
      "auto it=v.begin();\nv.push_back(value); // may invalidate it",
      "#include <iostream>\n#include <vector>\nint main(){vector<int> v{1,2};auto it=v.begin();v.reserve(10);v.push_back(3);cout<<*it;}",
      "1",
      "reserve trước giúp tránh reallocation trong ví dụ này; không nên giữ iterator nếu chưa hiểu contract.",
      ["cpp-vector"],
    ),
  );
  lessons.push(
    E(
      "cpp-ranges",
      "Ranges và views",
      "08 · STL Algorithms",
      "C++20 ranges cho phép viết algorithm trên range thay vì cặp iterator. View như filter hoặc transform tạo pipeline lười, không tạo container mới cho tới khi bạn yêu cầu.",
      "ranges::sort(values);\nvalues | views::filter(pred);",
      '#include <iostream>\n#include <ranges>\n#include <vector>\nint main(){vector<int> v{1,2,3,4};for(int x:v|views::filter([](int n){return n%2==0;}))cout<<x<<" ";}',
      "2 4 ",
      "filter view chỉ tạo giá trị khi vòng lặp yêu cầu.",
      ["cpp-algorithms"],
    ),
  );
  lessons.push(
    E(
      "cpp-operator-overload",
      "Operator overloading",
      "06 · OOP",
      "Operator overloading cho phép kiểu tự định nghĩa dùng cú pháp tự nhiên như + hoặc ==. Overload nên giữ ý nghĩa trực quan, không tạo hành vi bất ngờ.",
      "Type operator+(const Type& other) const;",
      '#include <iostream>\nstruct Point{int x,y;Point operator+(const Point& o)const{return {x+o.x,y+o.y};}};\nint main(){Point a{1,2},b{3,4};Point c=a+b;cout<<c.x<<" "<<c.y;}',
      "4 6",
      "a+b gọi member operator+ và tạo Point mới.",
      ["cpp-class"],
    ),
  );
  lessons.push(
    E(
      "cpp-abstract",
      "Abstract class",
      "07 · Polymorphism",
      "Abstract class có ít nhất một pure virtual function và không thể tạo object trực tiếp. Nó mô tả interface chung để class dẫn xuất phải cung cấp implementation.",
      "virtual double area() const = 0;",
      "#include <iostream>\nstruct Shape{virtual double area()const=0;virtual ~Shape()=default;};\nstruct Square:Shape{double s;explicit Square(double value):s{value}{}double area()const override{return s*s;}};\nint main(){Square x{3};cout<<x.area();}",
      "9",
      "Shape chỉ là interface; Square mới là class cụ thể có thể tạo.",
      ["cpp-polymorphism"],
    ),
  );
  lessons.push(
    E(
      "cpp-interface",
      "Interface bằng class thuần ảo",
      "07 · Polymorphism",
      "C++ không có từ khóa interface riêng; một class chỉ chứa pure virtual functions và virtual destructor có thể đóng vai trò interface. Client phụ thuộc abstraction thay vì class cụ thể.",
      "struct Logger { virtual void write() = 0; virtual ~Logger() = default; };",
      '#include <iostream>\nstruct Logger{virtual void write()=0;virtual ~Logger()=default;};\nstruct ConsoleLogger:Logger{void write()override{cout<<"log";}};\nint main(){ConsoleLogger l;l.write();}',
      "log",
      "ConsoleLogger thực hiện hợp đồng write của Logger.",
      ["cpp-abstract"],
    ),
  );
  lessons.push(
    E(
      "cpp-virtual-dispatch",
      "Virtual dispatch",
      "07 · Polymorphism",
      "Khi gọi virtual function qua reference hoặc pointer base, C++ chọn implementation theo object thật lúc chạy. Đây là cơ chế dynamic polymorphism; gọi qua object value sẽ không có dispatch động như vậy.",
      "baseRef.virtualMethod();",
      '#include <iostream>\nstruct Animal{virtual void speak()const{cout<<"?";}virtual ~Animal()=default;};\nstruct Dog:Animal{void speak()const override{cout<<"Woof";}};\nint main(){Dog dog;Animal& ref=dog;ref.speak();}',
      "Woof",
      "Reference base vẫn dispatch tới Dog::speak.",
      ["cpp-inheritance"],
    ),
  );
  lessons.push(
    E(
      "cpp-move-constructor",
      "Move constructor",
      "06 · OOP",
      "Move constructor chuyển tài nguyên từ temporary hoặc object sắp bị hủy thay vì sao chép. Nó thường nhận T&& và để source ở trạng thái hợp lệ nhưng không xác định giá trị.",
      "Type(Type&& other) noexcept;",
      '#include <iostream>\n#include <string>\n#include <utility>\nstruct Name{string value;explicit Name(string v):value{move(v)}{} };\nint main(){Name n{"An"};cout<<n.value;}',
      "An",
      "move cho phép chuyển string vào member thay vì tạo thêm bản sao không cần thiết.",
      ["cpp-class"],
    ),
  );
  lessons.push(
    E(
      "cpp-rule-of-zero",
      "Rule of zero",
      "06 · OOP",
      "Rule of zero khuyên class không tự viết destructor, copy/move constructor hoặc assignment nếu có thể giao ownership cho RAII types như string, vector và smart pointer. Compiler-generated operations khi đó thường đúng.",
      "class Type { string data; vector<int> values; };",
      '#include <iostream>\n#include <string>\nstruct User{string name;};\nint main(){User a{"An"};User b=a;cout<<b.name;}',
      "An",
      "string tự quản lý bộ nhớ nên User không cần special member function.",
      ["cpp-smart-pointers"],
    ),
  );
  lessons.push(
    E(
      "cpp-object-slicing",
      "Object slicing",
      "07 · Polymorphism",
      "Object slicing xảy ra khi copy object dẫn xuất vào object base by value; phần dữ liệu dẫn xuất bị cắt. Dùng reference, pointer hoặc value-semantic thiết kế phù hợp để tránh mất hành vi.",
      "Base base = derived; // slices",
      '#include <iostream>\nstruct Base{virtual const char* name()const{return "base";}virtual ~Base()=default;};\nstruct Child:Base{const char* name()const override{return "child";}};\nvoid print(const Base& b){cout<<b.name();}\nint main(){Child c;print(c);}',
      "child",
      "Truyền const Base& giữ object thật và cho phép virtual dispatch.",
      ["cpp-polymorphism"],
    ),
  );
  lessons.push(
    E(
      "cpp-function-template",
      "Function templates",
      "09 · Templates",
      "Function template mô tả thuật toán một lần cho nhiều kiểu. Compiler sinh specialization cần thiết khi hàm được gọi; type phải hỗ trợ các phép toán trong thân hàm.",
      "template<class T> T maxValue(T a,T b);",
      '#include <iostream>\ntemplate<class T>T maxValue(T a,T b){return a>b?a:b;}\nint main(){cout<<maxValue(3,5)<<" "<<maxValue(2.5,1.5);}',
      "5 2.5",
      "Một template dùng được cho int và double vì cả hai hỗ trợ >.",
      ["cpp-functions"],
    ),
  );
  lessons.push(
    E(
      "cpp-class-template",
      "Class templates",
      "09 · Templates",
      "Class template tạo family các kiểu như Box<int> và Box<string>. Kiểu tham số hóa được kiểm tra tại compile time và không cần base class chung.",
      "template<class T> class Box { T value; };",
      '#include <iostream>\n#include <string>\ntemplate<class T>struct Box{T value;};\nint main(){Box<int>a{7};Box<string>b{"C++"};cout<<a.value<<" "<<b.value;}',
      "7 C++",
      "Cùng một Box lưu được nhiều kiểu khác nhau.",
      ["cpp-function-template"],
    ),
  );
  lessons.push(
    E(
      "cpp-non-type-template",
      "Non-type template parameters",
      "09 · Templates",
      "Template parameter có thể là giá trị compile-time, chẳng hạn kích thước mảng. Điều này tạo kiểu khác nhau cho mỗi kích thước và không cần allocation động.",
      "template<class T, std::size_t N> struct Buffer;",
      "#include <iostream>\n#include <array>\ntemplate<class T,std::size_t N>std::size_t sizeOf(const array<T,N>&){return N;}\nint main(){array<int,4>a{};cout<<sizeOf(a);}",
      "4",
      "N được truyền như một giá trị compile-time.",
      ["cpp-array"],
    ),
  );
  lessons.push(
    E(
      "cpp-specialization",
      "Template specialization",
      "09 · Templates",
      "Specialization cung cấp implementation riêng cho một kiểu hoặc trường hợp đặc biệt. Chỉ dùng khi hành vi thật sự khác; nếu chỉ khác dữ liệu, template tổng quát thường đủ.",
      "template<> struct Printer<bool> { ... };",
      '#include <iostream>\ntemplate<class T>struct Label{static const char*get(){return "value";}};\ntemplate<>struct Label<bool>{static const char*get(){return "boolean";}};\nint main(){cout<<Label<int>::get()<<" "<<Label<bool>::get();}',
      "value boolean",
      "Specialization bool chọn implementation riêng.",
      ["cpp-class-template"],
    ),
  );
  lessons.push(
    E(
      "cpp-variadic",
      "Variadic templates và fold expressions",
      "09 · Templates",
      "Variadic template nhận số lượng tham số bất kỳ. Fold expression C++17 gọn hóa việc gộp parameter pack mà không cần đệ quy thủ công.",
      "template<class... T> auto sum(T... values) { return (... + values); }",
      "#include <iostream>\ntemplate<class... T>auto sum(T... values){return (...+values);}\nint main(){cout<<sum(1,2,3,4);}",
      "10",
      "Fold trái cộng toàn bộ pack theo thứ tự.",
      ["cpp-function-template"],
    ),
  );
  lessons.push(
    E(
      "cpp-if-constexpr",
      "if constexpr",
      "09 · Templates",
      "if constexpr loại bỏ nhánh không phù hợp ngay khi biên dịch. Nó cho phép template kiểm tra đặc điểm kiểu mà không khiến compiler phân tích code không hợp lệ ở nhánh bị loại.",
      "if constexpr (condition) { ... }",
      '#include <iostream>\n#include <type_traits>\ntemplate<class T>void show(T value){if constexpr(is_integral_v<T>)cout<<"integer";else cout<<"other";}\nint main(){show(3);}',
      "integer",
      "Nhánh được chọn dựa trên kiểu T tại compile time.",
      ["cpp-function-template"],
    ),
  );
  lessons.push(
    E(
      "cpp-concepts",
      "Concepts và constraints",
      "09 · Templates",
      "Concept mô tả yêu cầu đối với template parameter bằng tên có ý nghĩa. requires giúp lỗi template gần nơi gọi hơn và ngăn nhận kiểu không hỗ trợ phép toán cần thiết.",
      "template<class T> requires integral<T> T twice(T x);",
      "#include <concepts>\n#include <iostream>\ntemplate<integral T>T twice(T x){return x*2;}\nint main(){cout<<twice(4);}",
      "8",
      "Concept integral giới hạn hàm cho kiểu số nguyên.",
      ["cpp-if-constexpr"],
    ),
  );
  lessons.push(
    E(
      "cpp-lifetime",
      "Lifetime và dangling references",
      "10 · Resource Safety",
      "Lifetime là khoảng thời gian object tồn tại. Reference hoặc pointer chỉ hợp lệ trong lifetime của object; hiểu lifetime giúp tránh trả về địa chỉ local và dùng iterator đã hết hiệu lực.",
      "Object object; // lifetime begins\n// lifetime ends at scope end",
      "#include <iostream>\nconst int& safe(){static int value=7;return value;}\nint main(){cout<<safe();}",
      "7",
      "static object sống tới cuối chương trình nên reference còn hợp lệ.",
      ["cpp-functions"],
    ),
  );
  lessons.push(
    E(
      "cpp-dangling",
      "Dangling pointer/reference",
      "10 · Resource Safety",
      "Dangling pointer là pointer vẫn giữ địa chỉ nhưng object đã bị hủy. Dereference nó là undefined behavior; cách phòng tránh là ownership rõ, scope phù hợp và không trả reference tới local.",
      "int* p = nullptr;",
      "#include <iostream>\nint main(){int value=5;int* p=&value;cout<<*p;}",
      "5",
      "p chỉ dùng trong lifetime của value.",
      ["cpp-functions"],
    ),
  );
  lessons.push(
    E(
      "cpp-ownership",
      "Ownership và borrowing",
      "10 · Resource Safety",
      "Ownership trả lời ai chịu trách nhiệm hủy tài nguyên; borrowing là dùng tạm qua reference/view mà không sở hữu. unique_ptr thể hiện owner, const reference thể hiện borrower chỉ đọc.",
      "void inspect(const Resource& resource);",
      "#include <iostream>\n#include <memory>\nvoid inspect(const int& value){cout<<value;}\nint main(){auto owner=make_unique<int>(7);inspect(*owner);}",
      "7",
      "owner sở hữu int; inspect chỉ mượn qua const reference.",
      ["cpp-class"],
    ),
  );
  lessons.push(
    E(
      "cpp-weak-ptr",
      "weak_ptr và cycle",
      "10 · Resource Safety",
      "weak_ptr quan sát object do shared_ptr quản lý nhưng không tăng reference count. Dùng lock() để lấy shared_ptr tạm; weak_ptr giúp phá cycle giữa các object liên kết.",
      "weak_ptr<T> observer;\nif(auto p=observer.lock()) { ... }",
      "#include <iostream>\n#include <memory>\nint main(){auto owner=make_shared<int>(7);weak_ptr<int> view=owner;if(auto p=view.lock())cout<<*p;}",
      "7",
      "lock trả shared_ptr nếu object vẫn còn sống.",
      ["cpp-class"],
    ),
  );
  lessons.push(
    E(
      "cpp-exception-safety",
      "Exception safety guarantees",
      "10 · Resource Safety",
      "Exception safety mô tả trạng thái chương trình khi lỗi xảy ra: no-throw, strong guarantee (không đổi state nếu thất bại) và basic guarantee (invariant vẫn đúng). RAII giúp rollback resource tự động.",
      "try { operation(); } catch (...) { /* state remains valid */ }",
      "#include <iostream>\n#include <vector>\nvoid add(vector<int>& v,int x){vector<int> copy=v;copy.push_back(x);v.swap(copy);}\nint main(){vector<int>v{1};add(v,2);cout<<v.size();}",
      "2",
      "Copy-then-swap chỉ thay state sau khi thao tác có thể ném hoàn thành.",
      ["cpp-exceptions"],
    ),
  );
  lessons.push(
    E(
      "cpp-custom-raii",
      "Tự tạo wrapper RAII",
      "10 · Resource Safety",
      "Wrapper RAII nhận resource trong constructor và giải phóng trong destructor. Class sở hữu tài nguyên nên cấm copy hoặc định nghĩa move rõ; ưu tiên dùng wrapper thư viện chuẩn khi có.",
      "ResourceGuard() { acquire(); }\n~ResourceGuard() { release(); }",
      '#include <iostream>\nstruct Guard{const char*name;explicit Guard(const char*n):name{n}{cout<<"open ";}~Guard(){cout<<"close";}};\nint main(){Guard g{"file"};}',
      "open close",
      "Destructor chạy khi g ra khỏi scope, kể cả khi return sớm.",
      ["cpp-class"],
    ),
  );
  lessons.push(
    E(
      "cpp-ub-sanitizer",
      "Undefined behavior và sanitizer",
      "10 · Resource Safety",
      "Undefined behavior là chương trình vi phạm điều kiện chuẩn, khiến compiler không phải đảm bảo kết quả. AddressSanitizer và UndefinedBehaviorSanitizer giúp phát hiện nhiều lỗi khi test; compiler warnings vẫn cần thiết.",
      "g++ -fsanitize=address,undefined -g main.cpp",
      "#include <iostream>\nint main(){int a[2]{1,2};cout<<a[0];}",
      "1",
      "Lệnh sanitizer là công cụ build/debug; code mẫu truy cập trong giới hạn.",
      ["cpp-debugging"],
    ),
  );
  lessons.push(
    E(
      "cpp-structured-bindings",
      "Structured bindings",
      "11 · Modern C++",
      "Structured binding tách các thành phần của pair, tuple, array hoặc object có binding phù hợp thành các tên cục bộ. Nó làm vòng lặp map và hàm trả nhiều giá trị dễ đọc hơn.",
      "auto [name, score] = entry;",
      '#include <iostream>\n#include <utility>\nint main(){auto [name,score]=pair{"An",9};cout<<name<<" "<<score;}',
      "An 9",
      "Hai tên được bind vào first và second của pair.",
      ["cpp-tuple"],
    ),
  );
  lessons.push(
    E(
      "cpp-decltype",
      "decltype",
      "11 · Modern C++",
      "decltype lấy kiểu của một biểu thức mà không chạy biểu thức đó. Nó hữu ích trong generic code, trailing return type và giữ chính xác reference/constness.",
      "decltype(expression) name;",
      "#include <iostream>\nint main(){int n=7;decltype(n) copy=3;cout<<copy;}",
      "3",
      "decltype(n) là int vì n là int.",
      ["cpp-auto"],
    ),
  );
  lessons.push(
    E(
      "cpp-move",
      "move",
      "11 · Modern C++",
      "move không tự di chuyển dữ liệu; nó cast expression thành rvalue để overload move có thể được chọn. Sau khi move, object nguồn vẫn hợp lệ nhưng giá trị không nên đoán.",
      "target = move(source);",
      '#include <iostream>\n#include <string>\n#include <utility>\nint main(){string source="hello";string target=move(source);cout<<target;}',
      "hello",
      "Move constructor nhận quyền sử dụng buffer của source khi có thể.",
      ["cpp-move-constructor"],
    ),
  );
  lessons.push(
    E(
      "cpp-consteval",
      "consteval",
      "11 · Modern C++",
      "consteval tạo immediate function: mọi lời gọi phải được tính tại compile time. Nó mạnh hơn constexpr khi API bắt buộc kết quả không được tính lúc runtime.",
      "consteval int value() { return 42; }",
      "#include <iostream>\nconsteval int answer(){return 42;}\nint main(){constexpr int n=answer();cout<<n;}",
      "42",
      "answer được gọi trong ngữ cảnh compile-time.",
      ["cpp-const"],
    ),
  );
  lessons.push(
    E(
      "cpp-filesystem",
      "filesystem",
      "11 · Modern C++",
      "filesystem cung cấp path và thao tác file/thư mục portable hơn việc nối chuỗi thủ công. Có thể kiểm tra tồn tại, lấy extension và duyệt directory; luôn xử lý permission/error.",
      'filesystem::path path{"file.txt"};',
      '#include <filesystem>\n#include <iostream>\nint main(){filesystem::path p{"notes.txt"};cout<<p.extension().string();}',
      ".txt",
      "path tách phần extension theo quy tắc filesystem.",
      ["cpp-files"],
    ),
  );
  lessons.push(
    E(
      "cpp-chrono",
      "chrono",
      "11 · Modern C++",
      "chrono biểu diễn duration, time_point và clock với kiểu an toàn. Dùng steady_clock để đo khoảng thời gian vì nó không lùi theo thay đổi đồng hồ hệ thống.",
      "auto start=chrono::steady_clock::now();",
      "#include <chrono>\n#include <iostream>\nint main(){auto start=chrono::steady_clock::now();auto end=start+chrono::milliseconds(25);cout<<chrono::duration_cast<chrono::milliseconds>(end-start).count();}",
      "25",
      "duration_cast chuyển duration về đơn vị milliseconds.",
      ["cpp-functions"],
    ),
  );
  lessons.push(
    E(
      "cpp-regex",
      "regex",
      "11 · Modern C++",
      "regex biểu diễn mẫu tìm kiếm và validation text. Nó tiện cho mẫu vừa phải nhưng có thể tốn chi phí; input không tin cậy cần giới hạn và pattern được kiểm thử.",
      'regex pattern{"..."};\nregex_match(text,pattern);',
      '#include <iostream>\n#include <regex>\nint main(){regex p{"[0-9]+"};cout<<regex_match(string{"2026"},p);}',
      "1",
      "Chuỗi 2026 khớp pattern chỉ gồm chữ số.",
      ["cpp-string"],
    ),
  );
  lessons.push(
    E(
      "cpp-three-way",
      "Three-way comparison <=>",
      "11 · Modern C++",
      "Toán tử spaceship <=> tạo kết quả so sánh thứ tự, giúp sinh các phép so sánh liên quan. Nó cần header compare và một kiểu category phù hợp như strong_ordering.",
      "auto result = left <=> right;",
      "#include <compare>\n#include <iostream>\nint main(){int a=2,b=3;auto result=a<=>b;cout<<(result<0);}",
      "1",
      "result<0 nghĩa là a đứng trước b.",
      ["cpp-comparison"],
    ),
  );
  lessons.push(
    E(
      "cpp-expected",
      "std::expected (C++23 overview)",
      "11 · Modern C++",
      "std::expected<T,E> là công cụ C++23 để trả về kết quả hoặc lỗi mà không dùng exception cho mọi trường hợp. Khi compiler chỉ bật C++20, có thể dùng pair/variant/optional hoặc result type riêng làm fallback.",
      "std::expected<T,E> parse(text);",
      "#include <iostream>\n#include <optional>\noptional<int> parsePositive(int n){return n>=0?optional<int>{n}:nullopt;}\nint main(){cout<<parsePositive(4).value_or(0);}",
      "4",
      "Ví dụ dùng optional làm fallback C++20 cho API expected-like.",
      ["cpp-vector"],
    ),
  );
  lessons.push(
    E(
      "cpp-thread",
      "Thread, future và async",
      "11 · Modern C++",
      "C++ cung cấp thread, mutex, future và async cho tác vụ đồng thời. Chia sẻ dữ liệu cần synchronization; future giúp nhận kết quả và exception từ tác vụ bất đồng bộ.",
      "#include <future>\nauto result=std::async(std::launch::async, task);",
      "#include <future>\n#include <iostream>\nint main(){auto future=std::async(std::launch::async,[]{return 6*7;});cout<<future.get();}",
      "42",
      "get chờ task hoàn thành và lấy kết quả.",
      ["cpp-functions"],
    ),
  );
  lessons.push(
    E(
      "cpp-span-modern",
      "span trong API hiện đại",
      "11 · Modern C++",
      "span là cách hiện đại để nhận một range liên tiếp không sở hữu. Dùng nó thay cặp pointer+length khi API cần đọc nhiều loại buffer mà không copy.",
      "void process(span<const T> values);",
      '#include <iostream>\n#include <span>\nvoid process(span<const int> values){cout<<values.front()<<" "<<values.back();}\nint main(){array<int,3>a{1,2,3};process(a);}',
      "1 3",
      "API nhận array qua span mà không cần overload riêng.",
      ["cpp-array"],
    ),
  );
  const exerciseMap = {
    "01 · C++ Basics": "cpp-ex-001",
    "02 · Values and Control": "cpp-ex-006",
    "03 · Control Flow": "cpp-ex-011",
    "04 · Strings and Containers": "cpp-ex-016",
    "05 · Functions": "cpp-ex-021",
    "06 · OOP": "cpp-ex-036",
    "07 · Polymorphism": "cpp-ex-036",
    "08 · STL": "cpp-ex-031",
    "09 · Resource Safety": "cpp-ex-046",
    "10 · Files and Projects": "cpp-ex-031",
    "11 · Projects": "cpp-ex-051",
    "11 · Modern C++": "cpp-ex-051",
  };
  lessons.forEach((lesson, index) => {
    lesson.exerciseIds = [exerciseMap[lesson.chapter] || "cpp-ex-001"];
  });
  window.cppLessons = lessons;
})();
