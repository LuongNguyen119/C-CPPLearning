// Tự sinh từ w3schools_cpp_tutorial_vi.md bằng tools/build_cpp_lessons.py — không sửa tay.
(function () {
  const lessons = [
  {
    "id": "cpp-intro",
    "slug": "intro",
    "title": "Giới thiệu C++ (Introduction)",
    "titleEn": "C++ Introduction",
    "num": 1,
    "chapter": "01 · C++ Cơ bản",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [],
    "description": "C++ là ngôn ngữ đa nền tảng, dùng để tạo các ứng dụng hiệu năng cao.",
    "objectives": [
      "Nắm được: Giới thiệu về C++.",
      "Trình bày được: C++ là gì?; Tại sao nên sử dụng C++; Sự khác nhau giữa C và C++.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "C++ là ngôn ngữ đa nền tảng, dùng để tạo các ứng dụng hiệu năng cao. C++ được Bjarne Stroustrup phát triển, như phần mở rộng của C. C++ cho lập trình viên khả năng kiểm soát cao tài nguyên hệ thống và bộ nhớ. C++ đã tiến hóa qua nhiều năm, với các phiên bản chính gồm C++11, C++14, C++17, C++20, C++23 và C++26.\n\nC++ là một trong những ngôn ngữ lập trình phổ biến nhất thế giới. C++ có mặt trong các hệ điều hành, giao diện đồ họa và hệ thống nhúng hiện nay. C++ là ngôn ngữ lập trình hướng đối tượng mang lại cấu trúc rõ ràng cho các chương trình và cho phép tái sử dụng code, hạ thấp chi phí phát triển. C++ có tính di động, dùng phát triển ứng dụng thích ứng được nhiều nền tảng. C++ thật vui và dễ học! Vì C++ gần gũi với C, C# và Java, lập trình viên dễ chuyển sang C++ hoặc ngược lại.\n\nC++ được phát triển như phần mở rộng của C, và hai ngôn ngữ gần như cùng cú pháp. Khác biệt chính giữa C và C++: C++ hỗ trợ lớp và đối tượng, C thì không.\n\nKhi hoàn thành hướng dẫn này, bạn sẽ viết được chương trình C++ và tạo các ví dụ thực tế. Bạn không cần có kinh nghiệm lập trình từ trước."
    },
    "sections": [
      "C++ là gì?",
      "Tại sao nên sử dụng C++",
      "Sự khác nhau giữa C và C++",
      "Bắt đầu"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello World!\";\n  return 0;\n}",
        "explanation": "Chương trình C++ tối thiểu: nhập/xuất cơ bản để bạn thử lại ý tưởng của bài."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello World!\";\n  return 0;\n}",
        "output": "Hello World!",
        "explanation": "Chương trình C++ tối thiểu: nhập/xuất cơ bản để bạn thử lại ý tưởng của bài."
      }
    ],
    "tables": [],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Bỏ qua kiểu dữ liệu hoặc header cần thiết.",
        "why": "Compiler không biết tên hoặc biểu thức có thể sai kiểu.",
        "correct": "Thêm header và chọn kiểu phù hợp trước khi biên dịch."
      }
    ],
    "keyTakeaways": [
      "C++ là ngôn ngữ đa nền tảng, dùng để tạo các ứng dụng hiệu năng cao.",
      "C++ được Bjarne Stroustrup phát triển, như phần mở rộng của C.",
      "C++ cho lập trình viên khả năng kiểm soát cao tài nguyên hệ thống và bộ nhớ.",
      "C++ đã tiến hóa qua nhiều năm, với các phiên bản chính gồm C++11, C++14, C++17, C++20, C++23 và C++26."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_intro.asp"
  },
  {
    "id": "cpp-getstarted",
    "slug": "getstarted",
    "title": "Bắt đầu với C++ (Getting Started)",
    "titleEn": "C++ Getting Started",
    "num": 2,
    "chapter": "01 · C++ Cơ bản",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 11,
    "prerequisites": [
      "cpp-intro"
    ],
    "description": "Bắt đầu học C++ ngay: viết chương trình đầu tiên và cài môi trường C++ trên máy.",
    "objectives": [
      "Nắm được: Bắt đầu với C++.",
      "Trình bày được: Bắt đầu với C++; Cài đặt C++; Cài đặt C++ iDE.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Tại W3Schools, bạn thử C++ mà không cần cài đặt gì. Trình soạn thảo C++ trực tuyến chạy ngay trong trình duyệt, hiển thị cả code lẫn kết quả:\n\nTrình soạn thảo này sẽ dùng suốt hướng dẫn để minh họa các khía cạnh của C++.\n\nMuốn chạy C++ trên máy của bạn, cần hai thứ: Có nhiều trình soạn thảo và trình biên dịch để chọn. Các bước sau sẽ hướng dẫn dùng IDE có sẵn cả hai.\n\nIDE (Môi trường phát triển tích hợp) dùng để sửa VÀ biên dịch mã. Những IDE phổ biến gồm Code::Blocks, Eclipse và Visual Studio. Tất cả đều miễn phí, dùng để vừa soạn thảo vừa gỡ lỗi code C++. Lưu ý: IDE trên web cũng dùng được nhưng tính năng hạn chế. Hướng dẫn này dùng Code::Blocks, nơi khởi đầu tốt theo chúng tôi. Bạn có thể tải phiên bản Codeblocks mới nhất tại http://www.codeblocks.org/. Tải tệp mingw-setup.exe để cài trình soạn thảo kèm trình biên dịch.\n\nHãy tạo tệp C++ đầu tiên của bạn. Mở Codeblocks và chọn File > New > Empty File. Viết mã C++ sau và lưu thành myfirstprogram.cpp (File > Save File as):\n\nĐừng lo nếu chưa hiểu đoạn mã trên - ta sẽ thảo luận chi tiết ở các chương sau. Hiện tại, hãy tập trung vào cách chạy code. Trong Codeblocks, nó sẽ trông như sau: Sau đó chọn Build > Build and Run để chạy chương trình. Kết quả sẽ trông như thế này: Chúc mừng! Bạn vừa viết và chạy chương trình C++ đầu tiên."
    },
    "sections": [
      "Bắt đầu với C++",
      "Cài đặt C++",
      "Cài đặt C++ iDE",
      "Khởi động nhanh C++"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello World!\";\n  return 0;\n}",
        "explanation": "Trình soạn thảo C++ trực tuyến chạy ngay trong trình duyệt, hiển thị cả code lẫn kết quả:"
      }
    ],
    "examples": [
      {
        "title": "Bắt đầu với C++",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello World!\";\n  return 0;\n}",
        "output": "Hello World!",
        "explanation": "Trình soạn thảo C++ trực tuyến chạy ngay trong trình duyệt, hiển thị cả code lẫn kết quả:"
      },
      {
        "title": "Khởi động nhanh C++",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello World!\";\n  return 0;\n}",
        "output": "Hello World!",
        "explanation": "Viết mã C++ sau và lưu thành myfirstprogram.cpp (File > Save File as):"
      }
    ],
    "tables": [],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Lưu ý: IDE trên web cũng dùng được nhưng tính năng hạn chế."
    ],
    "commonMistakes": [
      {
        "wrong": "new mà quên delete.",
        "why": "Bộ nhớ không được giải phóng gây rò rỉ (memory leak).",
        "correct": "Dùng cân bằng new/delete hoặc smart pointer."
      },
      {
        "wrong": "Không kiểm tra file mở thành công trước khi đọc/ghi.",
        "why": "Thao tác trên file mở thất bại âm thầm hoặc crash.",
        "correct": "if (myFile) { ... } hoặc if (!myFile.is_open()) return;"
      }
    ],
    "keyTakeaways": [
      "Bắt đầu học C++ ngay: viết chương trình đầu tiên và cài môi trường C++ trên máy.",
      "Trình soạn thảo C++ trực tuyến chạy ngay trong trình duyệt, hiển thị cả code lẫn kết quả:",
      "Trình soạn thảo này sẽ dùng suốt hướng dẫn để minh họa các khía cạnh của C++.",
      "Muốn chạy C++ trên máy của bạn, cần hai thứ:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_getstarted.asp"
  },
  {
    "id": "cpp-syntax",
    "slug": "syntax",
    "title": "Cú pháp C++ (Syntax)",
    "titleEn": "C++ Syntax",
    "num": 3,
    "chapter": "01 · C++ Cơ bản",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 11,
    "prerequisites": [
      "cpp-getstarted"
    ],
    "description": "Hãy cùng phân tích đoạn mã sau để hiểu rõ hơn:",
    "objectives": [
      "Nắm được: Cú pháp C++.",
      "Trình bày được: Cú pháp C++; Ví dụ được giải thích; Bỏ qua Không gian tên.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Hãy cùng phân tích đoạn mã sau để hiểu rõ hơn:\n\nDòng 1: #include <iostream> là thư viện tệp header cho phép làm việc với đối tượng nhập/xuất như cout (dùng ở dòng 5). Tệp header bổ sung tính năng cho chương trình C++. Dòng 2: using namespace std có nghĩa ta dùng được tên của đối tượng và biến từ thư viện chuẩn. Đừng lo nếu chưa hiểu #include <iostream> và using namespace std hoạt động ra sao. Cứ xem chúng là thứ (gần như) luôn xuất hiện trong chương trình. Dòng 3: một dòng trống. C++ bỏ qua khoảng trắng. Dòng 4: một thứ luôn xuất hiện trong chương trình C++ là int main(). Đó được gọi là một hàm. Dòng 5: cout (đọc là \"see-out\") là đối tượng dùng cùng toán tử chèn (<<) để xuất/in văn bản. Trong ví dụ, nó sẽ in \"Hello World!\". Lưu ý: C++ phân biệt hoa thường: \"cout\" và \"Cout\" khác nhau. Lưu ý: mọi phát biểu C++ kết thúc bằng dấu chấm phẩy ;. Lưu ý: thân của int main() cũng có thể viết là: int main() { cout << \"Hello World!\"; return 0; } Nhớ rằng: trình biên dịch bỏ qua khoảng trắng. Tuy nhiên, chia dòng giúp code dễ đọc hơn. Dòng 6: return 0; kết thúc hàm main. Dòng 7: đừng quên đóng ngoặc nhọn } để kết thúc hàm main.\n\nBạn có thể thấy một số chương trình C++ chạy mà không cần dòng standard namespace. Phát biểu using namespace std; có thể được bỏ, và thay bằng từ khóa std theo sau là toán tử ::, cho một số đối tượng (như std::cout trong ví dụ dưới):\n\nCả hai cách đều hợp lệ trong C++. Dùng std:: cho thấy tên đến từ đâu và tránh xung đột tên trong chương trình lớn.\n\nTrong hướng dẫn này, chúng ta chủ yếu dùng using namespace std; Điều này giữ code ngắn và dễ đọc khi học những điều cơ bản về C++. Nó giúp người mới tập trung vào việc hiểu bản thân ngôn ngữ, thay vì liên tục viết std:: trong mọi ví dụ. Khi viết chương trình lớn hoặc phức tạp hơn, bạn có thể muốn dùng std:: tường minh. Bạn sẽ gặp cả hai phong cách trong code C++ thực tế."
    },
    "sections": [
      "Cú pháp C++",
      "Ví dụ được giải thích",
      "Bỏ qua Không gian tên",
      "Ví dụ",
      "- Chúng ta dùng hình nào?"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello World!\";\n  return 0;\n}",
        "explanation": "Hãy cùng phân tích đoạn mã sau để hiểu rõ hơn:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello World!\";\n  return 0;\n}",
        "output": "Hello World!",
        "explanation": "Hãy cùng phân tích đoạn mã sau để hiểu rõ hơn:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n\n int main() {\n   std::cout << \"Hello World!\";\n   return 0;\n }",
        "output": "Hello World!",
        "explanation": "Bạn có thể thấy một số chương trình C++ chạy mà không cần dòng standard namespace. Phát biểu using namespace std; có thể được bỏ, và thay bằng từ khóa std theo sau là toán tử ::, cho một số đối tượng (như std::cout trong ví dụ dưới):"
      }
    ],
    "tables": [],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Lưu ý: C++ phân biệt hoa thường: \"cout\" và \"Cout\" khác nhau.",
      "Lưu ý: mọi phát biểu C++ kết thúc bằng dấu chấm phẩy ;.",
      "Lưu ý: thân của int main() cũng có thể viết là: int main() { cout << \"Hello World!\"; return 0; }"
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      },
      {
        "wrong": "Không kiểm tra file mở thành công trước khi đọc/ghi.",
        "why": "Thao tác trên file mở thất bại âm thầm hoặc crash.",
        "correct": "if (myFile) { ... } hoặc if (!myFile.is_open()) return;"
      }
    ],
    "keyTakeaways": [
      "Hãy cùng phân tích đoạn mã sau để hiểu rõ hơn:",
      "Dòng 1: #include <iostream> là thư viện tệp header cho phép làm việc với đối tượng nhập/xuất như cout (dùng ở dòng 5). T ệp header bổ sung tính năng cho chương trình C++.…",
      "Dòng 2: using namespace std có nghĩa ta dùng được tên của đối tượng và biến từ thư viện chuẩn.",
      "Đừng lo nếu chưa hiểu #include <iostream> và using namespace std hoạt động ra sao. Cứ xem chúng là thứ (gần như) luôn xu ất hiện trong chương trình.…"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_syntax.asp"
  },
  {
    "id": "cpp-statements",
    "slug": "statements",
    "title": "Câu lệnh C++ (Statements)",
    "titleEn": "C++ Statements",
    "num": 4,
    "chapter": "01 · C++ Cơ bản",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 14,
    "prerequisites": [
      "cpp-syntax"
    ],
    "description": "Chương trình máy tính là danh sách \"chỉ thị\" để máy tính \"thực thi\".",
    "objectives": [
      "Nắm được: Câu lệnh C++.",
      "Trình bày được: Câu lệnh C++; Ví dụ; Nhiều tuyên bố.",
      "Chạy và sửa được 3 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Chương trình máy tính là danh sách \"chỉ thị\" để máy tính \"thực thi\". Trong ngôn ngữ lập trình, các chỉ thị này được gọi là phát biểu (statement). Phát biểu sau \"chỉ thị\" trình biên dịch in văn bản \"Hello World\" ra màn hình:\n\nĐiều quan trọng là phải kết thúc phát biểu bằng dấu ; Nếu quên dấu chấm phẩy ( ; ), sẽ phát sinh lỗi và chương trình không chạy:\n\nTự trải nghiệm\n\nHầu hết chương trình C++ chứa nhiều phát biểu. Các phát biểu được thực thi lần theo đúng thứ tự chúng được viết:\n\nTừ ví dụ trên, ta có ba phát biểu: Phát biểu đầu chạy trước (in \"Hello World!\" ra màn hình). Sau đó phát biểu thứ hai chạy (in \"Have a good day!\" ra màn hình). Bạn sẽ học thêm về các phát biểu khi đọc hướng dẫn này. Hiện tại, chỉ cần nhớ luôn kết thúc chúng bằng dấu chấm phẩy để tránh mọi lỗi. Sắp tới: chương tiếp theo dạy cách kiểm soát kết quả xuất và chèn dòng mới để dễ đọc hơn."
    },
    "sections": [
      "Câu lệnh C++",
      "Ví dụ",
      "Nhiều tuyên bố"
    ],
    "syntax": [
      {
        "code": "cout << \"Hello World!\";",
        "explanation": "Phát biểu sau \"chỉ thị\" trình biên dịch in văn bản \"Hello World\" ra màn hình:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  cout << \"Hello World!\";\n  return 0;\n}\n",
        "output": "Hello World!",
        "explanation": "Phát biểu sau \"chỉ thị\" trình biên dịch in văn bản \"Hello World\" ra màn hình:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  cout << \"Hello World!\";\n  return 0;\n}\n",
        "output": "Hello World!",
        "explanation": "Nếu quên dấu chấm phẩy ( ; ), sẽ phát sinh lỗi và chương trình không chạy:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  cout << \"Hello World!\";\n  cout << \"Have a good day!\";\n  return 0;\n}\n",
        "output": "Hello World!Have a good day!",
        "explanation": "Các phát biểu được thực thi lần theo đúng thứ tự chúng được viết:"
      }
    ],
    "tables": [],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Dùng phần tử front()/back()/top() khi container rỗng.",
        "why": "Hành vi không xác định khi container trống.",
        "correct": "Kiểm tra .empty() trước khi truy cập."
      },
      {
        "wrong": "Bắt exception rồi bỏ qua không xử lý.",
        "why": "Lỗi bị nuốt, chương trình tiếp tục ở trạng thái sai.",
        "correct": "Catch rồi xử lý hoặc rethrow khi cần."
      }
    ],
    "keyTakeaways": [
      "Chương trình máy tính là danh sách \"chỉ thị\" để máy tính \"thực thi\".",
      "Trong ngôn ngữ lập trình, các chỉ thị này được gọi là phát biểu (statement).",
      "Phát biểu sau \"chỉ thị\" trình biên dịch in văn bản \"Hello World\" ra màn hình:",
      "Điều quan trọng là phải kết thúc phát biểu bằng dấu ;"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_statements.asp"
  },
  {
    "id": "cpp-challenges-syntax",
    "slug": "challenges-syntax",
    "title": "Thử thách cú pháp C++ (Syntax Challenge)",
    "titleEn": "C++ Syntax Challenge",
    "num": 5,
    "chapter": "01 · C++ Cơ bản",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-statements"
    ],
    "description": "Kiểm tra hiểu biết C++ của bạn bằng một thử thách code nhỏ.",
    "objectives": [
      "Nắm được: Thử thách cú pháp C++.",
      "Trình bày được: Thử thách: tạo một chương trình C++ đơn giản.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Kiểm tra hiểu biết C++ của bạn bằng một thử thách code nhỏ."
    },
    "sections": [
      "Thử thách: tạo một chương trình C++ đơn giản"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello World!\";\n  return 0;\n}",
        "explanation": "Chương trình C++ tối thiểu: nhập/xuất cơ bản để bạn thử lại ý tưởng của bài."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello World!\";\n  return 0;\n}",
        "output": "Hello World!",
        "explanation": "Chương trình C++ tối thiểu: nhập/xuất cơ bản để bạn thử lại ý tưởng của bài."
      }
    ],
    "tables": [],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Bỏ qua kiểu dữ liệu hoặc header cần thiết.",
        "why": "Compiler không biết tên hoặc biểu thức có thể sai kiểu.",
        "correct": "Thêm header và chọn kiểu phù hợp trước khi biên dịch."
      }
    ],
    "keyTakeaways": [
      "Kiểm tra hiểu biết C++ của bạn bằng một thử thách code nhỏ."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_challenges_syntax.asp"
  },
  {
    "id": "cpp-output",
    "slug": "output",
    "title": "Xuất dữ liệu trong C++ (Output / cout)",
    "titleEn": "C++ Output (Print Text)",
    "num": 6,
    "chapter": "01 · C++ Cơ bản",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 11,
    "prerequisites": [
      "cpp-challenges-syntax"
    ],
    "description": "Đối tượng cout cùng toán tử << dùng để xuất giá trị và in văn bản.",
    "objectives": [
      "Nắm được: Xuất dữ liệu trong C++.",
      "Trình bày được: Đầu ra C++ (In văn bản); Ví dụ.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Đối tượng cout cùng toán tử << được dùng để in văn bản và xuất giá trị ra màn hình. Chỉ cần nhớ đặt văn bản trong cặp dấu ngoặc kép (\"...\"):\n\nBạn có thể thêm bao nhiêu câu lệnh cout tùy ý, miễn là đặt văn bản trong dấu ngoặc kép. Lưu ý rằng cout không tự xuống dòng ở cuối kết quả.\n\nMẹo: muốn biết cách thêm dòng mới, hãy xem bài \"Ký tự xuống dòng (New Lines / endl)\"."
    },
    "sections": [
      "Đầu ra C++ (In văn bản)",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello World!\";\n  return 0;\n}",
        "explanation": "Chỉ cần nhớ đặt văn bản trong nháy kép ( \"\" ):"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello World!\";\n  return 0;\n}",
        "output": "Hello World!",
        "explanation": "Chỉ cần nhớ đặt văn bản trong nháy kép ( \"\" ):"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello World!\";\n  cout << \"I am learning C++\";\n  return 0;\n}",
        "output": "Hello World!I am learning C++",
        "explanation": "Bạn có thể thêm bao nhiêu cout cũng được. Tuy nhiên lưu ý nó không tự xuống dòng ở cuối kết quả:"
      }
    ],
    "tables": [],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Mẹo: cách thêm dòng mới - xem chương C++ New Lines."
    ],
    "commonMistakes": [
      {
        "wrong": "new mà quên delete.",
        "why": "Bộ nhớ không được giải phóng gây rò rỉ (memory leak).",
        "correct": "Dùng cân bằng new/delete hoặc smart pointer."
      },
      {
        "wrong": "Nhầm = (gán) với == (so sánh) trong biểu thức.",
        "why": "Toán tử sai cho kết quả sai mà không báo lỗi.",
        "correct": "double-click kiểm tra: so sánh thì ==."
      }
    ],
    "keyTakeaways": [
      "Đối tượng cout cùng toán tử << dùng để xuất giá trị và in văn bản.",
      "Chỉ cần nhớ đặt văn bản trong nháy kép ( \"\" ):",
      "Bạn có thể thêm bao nhiêu cout cũng được. Tuy nhiên lưu ý nó không tự xuống dòng ở cuối kết quả:",
      "Mẹo: cách thêm dòng mới - xem chương C++ New Lines."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_output.asp"
  },
  {
    "id": "cpp-output-numbers",
    "slug": "output-numbers",
    "title": "In số trong C++ (Output Numbers)",
    "titleEn": "C++ Output Numbers",
    "num": 7,
    "chapter": "01 · C++ Cơ bản",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 14,
    "prerequisites": [
      "cpp-output"
    ],
    "description": "Bạn cũng có thể dùng cout để in số.",
    "objectives": [
      "Nắm được: Số đầu ra C++.",
      "Trình bày được: Số in C++; Ví dụ.",
      "Chạy và sửa được 3 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Bạn cũng có thể dùng cout để in số. Tuy nhiên, khác với văn bản, số được viết trực tiếp, không cần dấu ngoặc kép:\n\nBạn còn có thể thực hiện các phép tính số học ngay trong câu lệnh cout, như ví dụ dưới đây:"
    },
    "sections": [
      "Số in C++",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << 3;\n  return 0;\n}",
        "explanation": "Nhưng khác văn bản, số không đặt trong nháy kép:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << 3;\n  return 0;\n}",
        "output": "3",
        "explanation": "Nhưng khác văn bản, số không đặt trong nháy kép:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  cout << 3 + 3;\n  return 0;\n}\n",
        "output": "6",
        "explanation": "Bạn cũng có thể thực hiện tính toán số học:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  cout << 2 * 5;\n  return 0;\n}\n",
        "output": "10",
        "explanation": "Chạy thử và tự sửa code để cảm nhận cách nó hoạt động."
      }
    ],
    "tables": [],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Bỏ qua kiểu dữ liệu hoặc header cần thiết.",
        "why": "Compiler không biết tên hoặc biểu thức có thể sai kiểu.",
        "correct": "Thêm header và chọn kiểu phù hợp trước khi biên dịch."
      }
    ],
    "keyTakeaways": [
      "Bạn cũng có thể dùng cout để in số.",
      "Nhưng khác văn bản, số không đặt trong nháy kép:",
      "Bạn cũng có thể thực hiện tính toán số học:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_output_numbers.asp"
  },
  {
    "id": "cpp-new-lines",
    "slug": "new-lines",
    "title": "Ký tự xuống dòng (New Lines / endl)",
    "titleEn": "C++ New Lines",
    "num": 8,
    "chapter": "01 · C++ Cơ bản",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 17,
    "prerequisites": [
      "cpp-output-numbers"
    ],
    "description": "Để chèn dòng mới trong kết quả xuất, dùng ký tự \\n:",
    "objectives": [
      "Nắm được: C++ Dòng mới.",
      "Trình bày được: Dòng mới; Ví dụ.",
      "Chạy và sửa được 4 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Để chèn dòng mới trong kết quả xuất, dùng ký tự \\n:\n\nBạn cũng có thể dùng thêm một << và đặt ký tự \\n sau văn bản, như thế này:\n\nMẹo: hai ký tự \\n liền nhau sẽ tạo một dòng trống:\n\nMột cách khác để chèn dòng mới là dùng endl:\n\nCả \\n và endl đều ngắt dòng. Tuy nhiên \\n được dùng nhiều hơn. Ký tự xuống dòng (\\n) gọi là escape sequence, buộc con trỏ nhảy về đầu dòng tiếp theo trên màn hình. Kết quả là một dòng mới. Ví dụ các mã thoát hợp lệ khác:"
    },
    "sections": [
      "Dòng mới",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello World! \\n\";\n  cout << \"I am learning C++\";\n  return 0;\n}",
        "explanation": "Để chèn dòng mới trong kết quả xuất, dùng ký tự \\n:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello World! \\n\";\n  cout << \"I am learning C++\";\n  return 0;\n}",
        "output": "Hello World! \nI am learning C++",
        "explanation": "Để chèn dòng mới trong kết quả xuất, dùng ký tự \\n:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello World!\" << \"\\n\";\n  cout << \"I am learning C++\";\n  return 0;\n}",
        "output": "Hello World!\nI am learning C++",
        "explanation": "Bạn cũng có thể dùng thêm một << và đặt ký tự \\n sau văn bản, như thế này:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello World!\" << \"\\n\\n\";\n  cout << \"I am learning C++\";\n  return 0;\n}",
        "output": "Hello World!\n\nI am learning C++",
        "explanation": "Chạy thử và tự sửa code để cảm nhận cách nó hoạt động."
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello World!\" << endl;\n  cout << \"I am learning C++\";\n  return 0;\n}",
        "output": "Hello World!\nI am learning C++",
        "explanation": "Một cách khác để chèn dòng mới là dùng endl:"
      }
    ],
    "tables": [
      {
        "title": "Ví dụ",
        "header": [
          "Trình Tự Thoát",
          "Mô tả",
          "Hãy thử làm vậy."
        ],
        "rows": [
          [
            "\\t",
            "Tạo một tab ngang",
            "Hãy thử làm vậy."
          ],
          [
            "\\\\",
            "Chèn ký tự sổ chéo (\\)",
            "Hãy thử làm vậy."
          ],
          [
            "\\\"",
            "Chèn ký tự nháy kép",
            "Hãy thử làm vậy."
          ]
        ]
      }
    ],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Mẹo: hai ký tự \\n liền nhau sẽ tạo một dòng trống:"
    ],
    "commonMistakes": [
      {
        "wrong": "Dùng con trỏ chưa khởi tạo hoặc đã delete.",
        "why": "Trỏ vào vùng nhớ rác gây crash hoặc dữ liệu sai khó tìm.",
        "correct": "Khởi tạo nullptr, kiểm tra trước khi dereference, set nullptr sau delete."
      },
      {
        "wrong": "Dùng nháy kép \"a\" thay vì nháy đơn 'a' cho ký tự.",
        "why": "\"a\" là chuỗi (char[]), 'a' mới là char.",
        "correct": "char c = 'a';"
      }
    ],
    "keyTakeaways": [
      "Để chèn dòng mới trong kết quả xuất, dùng ký tự \\n:",
      "Bạn cũng có thể dùng thêm một << và đặt ký tự \\n sau văn bản, như thế này:",
      "Mẹo: hai ký tự \\n liền nhau sẽ tạo một dòng trống:",
      "Một cách khác để chèn dòng mới là dùng endl:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_new_lines.asp"
  },
  {
    "id": "cpp-challenges-output",
    "slug": "challenges-output",
    "title": "Thử thách xuất dữ liệu (Output Challenge)",
    "titleEn": "C++ Output Challenge",
    "num": 9,
    "chapter": "01 · C++ Cơ bản",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-new-lines"
    ],
    "description": "Kiểm tra hiểu biết về xuất dữ liệu C++ bằng thử thách code nhỏ.",
    "objectives": [
      "Nắm được: Thử thách đầu ra C++.",
      "Trình bày được: Thử thách: in tên và tuổi.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Kiểm tra hiểu biết của bạn về cách xuất dữ liệu trong C++ bằng thử thách code nhỏ. Đọc kỹ yêu cầu, sửa lại đoạn mã cho đến khi kết quả in ra đúng như mong đợi."
    },
    "sections": [
      "Thử thách: in tên và tuổi"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello World!\";\n  return 0;\n}",
        "explanation": "Chương trình C++ tối thiểu: nhập/xuất cơ bản để bạn thử lại ý tưởng của bài."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello World!\";\n  return 0;\n}",
        "output": "Hello World!",
        "explanation": "Chương trình C++ tối thiểu: nhập/xuất cơ bản để bạn thử lại ý tưởng của bài."
      }
    ],
    "tables": [],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Bỏ qua kiểu dữ liệu hoặc header cần thiết.",
        "why": "Compiler không biết tên hoặc biểu thức có thể sai kiểu.",
        "correct": "Thêm header và chọn kiểu phù hợp trước khi biên dịch."
      }
    ],
    "keyTakeaways": [
      "Kiểm tra hiểu biết về xuất dữ liệu C++ bằng thử thách code nhỏ."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_challenges_output.asp"
  },
  {
    "id": "cpp-comments",
    "slug": "comments",
    "title": "Comments trong C++ (Ghi chú)",
    "titleEn": "C++ Comments",
    "num": 10,
    "chapter": "01 · C++ Cơ bản",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 14,
    "prerequisites": [
      "cpp-challenges-output"
    ],
    "description": "Comment có thể dùng để giải thích mã C++ và làm nó dễ đọc hơn. Nó cũng có thể dùng để ngăn thực thi khi thử nghiệm mã thay thế.",
    "objectives": [
      "Nắm được: Nhận xét về C++.",
      "Trình bày được: c. Nhận xét:; Bình luận một dòng; Ví dụ.",
      "Chạy và sửa được 3 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Comment có thể dùng để giải thích mã C++ và làm nó dễ đọc hơn. Nó cũng có thể dùng để ngăn thực thi khi thử nghiệm mã thay thế.\n\nComment một dòng bắt đầu bằng hai dấu gạch chéo ( // ). Mọi văn bản giữa // và cuối dòng được trình biên dịch bỏ qua (không chạy). Ví dụ này dùng comment một dòng trước dòng mã:\n\nVí dụ này dùng comment một dòng ở cuối dòng mã:\n\nComment nhiều dòng bắt đầu bằng /* và kết thúc bằng */. Mọi văn bản giữa /* và */ sẽ được trình biên dịch bỏ qua:\n\nTùy bạn chọn dùng kiểu nào. Thường ta dùng // cho comment ngắn, /* */ cho dài."
    },
    "sections": [
      "c. Nhận xét:",
      "Bình luận một dòng",
      "Ví dụ",
      "Bình luận nhiều dòng C++"
    ],
    "syntax": [
      {
        "code": "// This is a comment\ncout << \"Hello World!\";",
        "explanation": "Ví dụ này dùng comment một dòng trước dòng mã:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  // This is a comment\n  cout << \"Hello World!\";\n  return 0;\n}\n",
        "output": "Hello World!",
        "explanation": "Ví dụ này dùng comment một dòng trước dòng mã:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  cout << \"Hello World!\"; // This is a comment\n  return 0;\n}\n",
        "output": "Hello World!",
        "explanation": "Ví dụ này dùng comment một dòng ở cuối dòng mã:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  /* The code below will print the words Hello World!\n  to the screen, and it is amazing */\n  cout << \"Hello World!\";\n  return 0;\n}\n",
        "output": "Hello World!",
        "explanation": "Mọi văn bản giữa /* và */ sẽ được trình biên dịch bỏ qua:"
      }
    ],
    "tables": [],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Bỏ qua kiểu dữ liệu hoặc header cần thiết.",
        "why": "Compiler không biết tên hoặc biểu thức có thể sai kiểu.",
        "correct": "Thêm header và chọn kiểu phù hợp trước khi biên dịch."
      }
    ],
    "keyTakeaways": [
      "Comment có thể dùng để giải thích mã C++ và làm nó dễ đọc hơn. Nó cũng có thể dùng để ngăn thực thi khi thử nghiệm mã th ay thế.…",
      "Comment một dòng bắt đầu bằng hai dấu gạch chéo ( // ).",
      "Mọi văn bản giữa // và cuối dòng được trình biên dịch bỏ qua (không chạy).",
      "Ví dụ này dùng comment một dòng trước dòng mã:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_comments.asp"
  },
  {
    "id": "cpp-variables",
    "slug": "variables",
    "title": "Biến trong C++ (Variables)",
    "titleEn": "C++ Variables",
    "num": 11,
    "chapter": "02 · Biến & Kiểu dữ liệu",
    "topic": "Variables & Types",
    "difficulty": "beginner",
    "estimatedTime": 20,
    "prerequisites": [],
    "description": "Biến là vùng chứa để lưu trữ các giá trị dữ liệu.",
    "objectives": [
      "Nắm được: Biến C++.",
      "Trình bày được: Biến C++; Khai báo (tạo) biến; Cú pháp.",
      "Chạy và sửa được 6 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Biến là vùng chứa để lưu trữ các giá trị dữ liệu. Trong C++ có nhiều loại biến (khai báo bằng các từ khóa khác nhau), ví dụ: Để tạo biến, hãy chỉ định kiểu và gán giá trị: Trong đó type là một kiểu C++ (như int), và variableName là tên biến (như x hay myName). Dấu bằng dùng để gán giá trị cho biến. Để tạo biến lưu một số, xem ví dụ sau: Tạo biến myNum kiểu int và gán giá trị 15: Bạn cũng có thể khai báo biến chưa gán và gán sau: Lưu ý rằng gán giá trị mới cho biến đã tồn tại sẽ ghi đè giá trị trước: Minh họa các kiểu dữ liệu khác: Bạn sẽ học kỹ hơn từng loại ở chương Data Types. Đối tượng cout dùng cùng toán tử << để hiển thị biến. Để nối văn bản với biến, tách chúng bằng toán tử <<: Bạn cũng có thể kết hợp các kiểu khác nhau - sẽ học ở chương sau. Để cộng một biến vào biến khác, dùng toán tử +:"
    },
    "sections": [
      "Biến C++",
      "Khai báo (tạo) biến",
      "Cú pháp",
      "Ví dụ",
      "Thay đổi giá trị biến số",
      "Các loại khác",
      "Hiển thị các biến",
      "Thêm các biến với nhau"
    ],
    "syntax": [
      {
        "code": "type variableName = value;",
        "explanation": "Để tạo biến, hãy chỉ định kiểu và gán giá trị:"
      }
    ],
    "examples": [
      {
        "title": "Cú pháp",
        "code": "type variableName = value;",
        "output": "",
        "explanation": "Để tạo biến, hãy chỉ định kiểu và gán giá trị:",
        "runnable": false
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int myNum = 15;\n  cout << myNum;\n  return 0;\n}\n",
        "output": "15",
        "explanation": "Tạo biến myNum kiểu int và gán giá trị 15:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int myNum;\n  myNum = 15;\n  cout << myNum;\n  return 0;\n}\n",
        "output": "15",
        "explanation": "Bạn cũng có thể khai báo biến chưa gán và gán sau:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int myNum = 15;  // myNum is 15\n  myNum = 10;  // Now myNum is 10\n  cout << myNum;  // Outputs 10\n  return 0;\n}\n",
        "output": "10",
        "explanation": "Lưu ý rằng gán giá trị mới cho biến đã tồn tại sẽ ghi đè giá trị trước:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int myAge = 35;\n  cout << \"I am \" << myAge << \" years old.\";\n  return 0;\n}\n",
        "output": "I am 35 years old.",
        "explanation": "Để nối văn bản với biến, tách chúng bằng toán tử <<:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string name = \"John\";\n  int age = 35;\n  double height = 6.1;\n\n  cout << name << \" is \" << age << \" years old and \" << height << \" feet tall.\";\n  return 0;\n}\n",
        "output": "John is 35 years old and 6.1 feet tall.",
        "explanation": "Bạn cũng có thể kết hợp các kiểu khác nhau - sẽ học ở chương sau."
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ và biến đổi dữ liệu trong mọi bài tập.",
      "Chọn kiểu đúng để tránh lãng phí bộ nhớ/sai chính xác."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Nhầm = (gán) với == (so sánh) trong biểu thức.",
        "why": "Toán tử sai cho kết quả sai mà không báo lỗi.",
        "correct": "double-click kiểm tra: so sánh thì ==."
      }
    ],
    "keyTakeaways": [
      "Biến là vùng chứa để lưu trữ các giá trị dữ liệu.",
      "Trong C++ có nhiều loại biến (khai báo bằng các từ khóa khác nhau), ví dụ:",
      "Để tạo biến, hãy chỉ định kiểu và gán giá trị:",
      "Trong đó type là một kiểu C++ (như int), và variableName là tên biến (như x hay myName). Dấu bằng dùng để gán giá trị ch o biến.…"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_variables.asp"
  },
  {
    "id": "cpp-variables-multiple",
    "slug": "variables-multiple",
    "title": "Khai báo nhiều biến (Multiple Variables)",
    "titleEn": "C++ Declare Multiple Variables",
    "num": 12,
    "chapter": "02 · Biến & Kiểu dữ liệu",
    "topic": "Variables & Types",
    "difficulty": "beginner",
    "estimatedTime": 11,
    "prerequisites": [
      "cpp-variables"
    ],
    "description": "Để khai báo nhiều biến cùng kiểu, dùng danh sách phân tách bằng dấu phẩy:",
    "objectives": [
      "Nắm được: Khai báo nhiều biến trong C++.",
      "Trình bày được: Khai báo nhiều biến; Một giá trị cho nhiều biến.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Để khai báo nhiều biến cùng kiểu, dùng danh sách phân tách bằng dấu phẩy: Bạn cũng có thể gán cùng một giá trị cho nhiều biến trong một dòng:"
    },
    "sections": [
      "Khai báo nhiều biến",
      "Một giá trị cho nhiều biến"
    ],
    "syntax": [
      {
        "code": "int x = 5, y = 6, z = 50;\ncout << x + y + z;",
        "explanation": "Để khai báo nhiều biến cùng kiểu, dùng danh sách phân tách bằng dấu phẩy:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int x = 5, y = 6, z = 50;\n  cout << x + y + z;\n  return 0;\n}\n",
        "output": "61",
        "explanation": "Để khai báo nhiều biến cùng kiểu, dùng danh sách phân tách bằng dấu phẩy:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int x, y, z;\n  x = y = z = 50;\n  cout << x + y + z;\n  return 0;\n}\n",
        "output": "150",
        "explanation": "Bạn cũng có thể gán cùng một giá trị cho nhiều biến trong một dòng:"
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ và biến đổi dữ liệu trong mọi bài tập.",
      "Chọn kiểu đúng để tránh lãng phí bộ nhớ/sai chính xác."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Dùng phần tử front()/back()/top() khi container rỗng.",
        "why": "Hành vi không xác định khi container trống.",
        "correct": "Kiểm tra .empty() trước khi truy cập."
      }
    ],
    "keyTakeaways": [
      "Để khai báo nhiều biến cùng kiểu, dùng danh sách phân tách bằng dấu phẩy:",
      "Bạn cũng có thể gán cùng một giá trị cho nhiều biến trong một dòng:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_variables_multiple.asp"
  },
  {
    "id": "cpp-variables-identifiers",
    "slug": "variables-identifiers",
    "title": "Quy tắc đặt tên biến (Identifiers)",
    "titleEn": "C++ Identifiers",
    "num": 13,
    "chapter": "02 · Biến & Kiểu dữ liệu",
    "topic": "Variables & Types",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-variables-multiple"
    ],
    "description": "Mọi biến C++ phải có tên riêng (duy nhất).",
    "objectives": [
      "Nắm được: Mã định danh C++.",
      "Trình bày được: Mã định danh C++; Ví dụ.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Mọi biến C++ phải có tên riêng (duy nhất). Những tên gọi riêng này được gọi là định danh (identifier). Định danh có thể là tên ngắn (x, y) hoặc tên mô tả hơn (age, sum, totalVolume). Lưu ý: nên dùng tên mô tả để tạo code dễ hiểu và dễ bảo trì: Quy tắc chung khi đặt tên biến là:"
    },
    "sections": [
      "Mã định danh C++",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "// Good\nint minutesPerHour = 60;\n\n// OK, but not so easy to understand what m actually is\nint m = 60;",
        "explanation": "Định danh có thể là tên ngắn (x, y) hoặc tên mô tả hơn (age, sum, totalVolume)."
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "int main() {\n  // Good\n  int minutesPerHour = 60;\n\n  // OK, but not so easy to understand what m actually is\n  int m = 60;\n  return 0;\n}\n",
        "output": "",
        "explanation": "Định danh có thể là tên ngắn (x, y) hoặc tên mô tả hơn (age, sum, totalVolume)."
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ và biến đổi dữ liệu trong mọi bài tập.",
      "Chọn kiểu đúng để tránh lãng phí bộ nhớ/sai chính xác."
    ],
    "notes": [
      "Lưu ý: nên dùng tên mô tả để tạo code dễ hiểu và dễ bảo trì:"
    ],
    "commonMistakes": [
      {
        "wrong": "Viết if (x = 5) thay vì if (x == 5).",
        "why": "Dấu = là gán, == mới là so sánh; gán trong if luôn cho kết quả true.",
        "correct": "if (x == 5) { ... }"
      }
    ],
    "keyTakeaways": [
      "Mọi biến C++ phải có tên riêng (duy nhất).",
      "Những tên gọi riêng này được gọi là định danh (identifier).",
      "Định danh có thể là tên ngắn (x, y) hoặc tên mô tả hơn (age, sum, totalVolume).",
      "Lưu ý: nên dùng tên mô tả để tạo code dễ hiểu và dễ bảo trì:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_variables_identifiers.asp"
  },
  {
    "id": "cpp-variables-constants",
    "slug": "variables-constants",
    "title": "Hằng số trong C++ (Constants / const)",
    "titleEn": "C++ Constant Variables",
    "num": 14,
    "chapter": "02 · Biến & Kiểu dữ liệu",
    "topic": "Variables & Types",
    "difficulty": "beginner",
    "estimatedTime": 11,
    "prerequisites": [
      "cpp-variables-identifiers"
    ],
    "description": "Khi không muốn người khác (hoặc chính mình) đổi giá trị biến, dùng từ khóa const (khai báo biến là \"hằng\", nghĩa là không đổi và chỉ đọc):",
    "objectives": [
      "Nắm được: Biến hằng số trong C++.",
      "Trình bày được: dương; Ví dụ; Ghi chú về hằng số.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Khi không muốn người khác (hoặc chính mình) đổi giá trị biến, dùng từ khóa const (khai báo biến là \"hằng\", nghĩa là không đổi và chỉ đọc): Hãy luôn khai báo biến là hằng khi giá trị khó thay đổi: Khi khai báo biến hằng (constant), phải gán giá trị ngay: Như thế này: Tuy nhiên, điều này sẽ không hoạt động:"
    },
    "sections": [
      "dương",
      "Ví dụ",
      "Ghi chú về hằng số"
    ],
    "syntax": [
      {
        "code": "const int minutesPerHour = 60;",
        "explanation": "Hãy luôn khai báo biến là hằng khi giá trị khó thay đổi:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "int main() {\n  const int minutesPerHour = 60;\n  return 0;\n}\n",
        "output": "",
        "explanation": "Hãy luôn khai báo biến là hằng khi giá trị khó thay đổi:"
      },
      {
        "title": "Ví dụ",
        "code": "int main() {\n  const int minutesPerHour = 60;\n  return 0;\n}\n",
        "output": "",
        "explanation": "Như thế này:"
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ và biến đổi dữ liệu trong mọi bài tập.",
      "Chọn kiểu đúng để tránh lãng phí bộ nhớ/sai chính xác."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Bỏ qua kiểu dữ liệu hoặc header cần thiết.",
        "why": "Compiler không biết tên hoặc biểu thức có thể sai kiểu.",
        "correct": "Thêm header và chọn kiểu phù hợp trước khi biên dịch."
      }
    ],
    "keyTakeaways": [
      "Khi không muốn người khác (hoặc chính mình) đổi giá trị biến, dùng từ khóa const (khai báo biến là \"hằng\", nghĩa là khôn g đổi và chỉ đọc)…",
      "Hãy luôn khai báo biến là hằng khi giá trị khó thay đổi:",
      "Khi khai báo biến hằng (constant), phải gán giá trị ngay:",
      "Như thế này:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_variables_constants.asp"
  },
  {
    "id": "cpp-variables-reallife",
    "slug": "variables-reallife",
    "title": "Ví dụ thực tế về biến (Variables Real Life)",
    "titleEn": "C++ Variables Real Life Examples",
    "num": 15,
    "chapter": "02 · Biến & Kiểu dữ liệu",
    "topic": "Variables & Types",
    "difficulty": "beginner",
    "estimatedTime": 11,
    "prerequisites": [
      "cpp-variables-constants"
    ],
    "description": "Hãy thử một ví dụ thực tế hơn!",
    "objectives": [
      "Nắm được: Ví dụ thực tế về biến trong C++.",
      "Trình bày được: Ví dụ thực tế; Tính diện tích hình chữ nhật.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Hãy thử một ví dụ thực tế hơn! Trong các ví dụ, ta thường đơn giản hóa tên biến cho khớp kiểu dữ liệu (myInt hoặc myNum cho int, myChar cho char, v.v.) để tránh nhầm lẫn. Tuy nhiên, để minh họa thực tế của biến, ta tạo chương trình lưu dữ liệu khác nhau về một sinh viên: Trong ví dụ thực tế này, ta tạo chương trình tính diện tích hình chữ nhật (nhân chiều dài với chiều rộng):"
    },
    "sections": [
      "Ví dụ thực tế",
      "Tính diện tích hình chữ nhật"
    ],
    "syntax": [
      {
        "code": "// Student data\nint studentID = 15;\nint studentAge = 23;\ndouble studentFee = 75.25;\nchar studentGrade = 'B';\n\n// Print variables\n   cout << \"Student ID: \" << studentID << \"\\n\";\ncout << \"Student Age: \" << studentAge << \"\\n\";\ncout << \"Student Fee: \" << studentFee << \"\\n\";\ncout << \"Student Grade: \" << studentGrade << \"\\n\";",
        "explanation": "Tuy nhiên, để minh họa thực tế của biến, ta tạo chương trình lưu dữ liệu khác nhau về một sinh viên:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  // Student data\n  int studentID = 15;\n  int studentAge = 23;\n  double studentFee = 75.25;\n  char studentGrade = 'B';\n\n  // Print variables\n     cout << \"Student ID: \" << studentID << \"\\n\";\n  cout << \"Student Age: \" << studentAge << \"\\n\";\n  cout << \"Student Fee: \" << studentFee << \"\\n\";\n  cout << \"Student Grade: \" << studentGrade << \"\\n\";\n  return 0;\n}\n",
        "output": "Student ID: 15\nStudent Age: 23\nStudent Fee: 75.25\nStudent Grade: B",
        "explanation": "Tuy nhiên, để minh họa thực tế của biến, ta tạo chương trình lưu dữ liệu khác nhau về một sinh viên:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  // Create integer variables\n  int length = 4;\n  int width = 6;\n\n  // Calculate the area of a rectangle\n     int area = length * width;\n\n  // Print the variables\n  cout << \"Length is: \" << length << \"\\n\";\n  cout << \"Width is: \" << width << \"\\n\";\n  cout << \"Area of the rectangle is: \" << area << \"\\n\";\n  return 0;\n}\n",
        "output": "Length is: 4\nWidth is: 6\nArea of the rectangle is: 24",
        "explanation": "Trong ví dụ thực tế này, ta tạo chương trình tính diện tích hình chữ nhật (nhân chiều dài với chiều rộng):"
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ và biến đổi dữ liệu trong mọi bài tập.",
      "Chọn kiểu đúng để tránh lãng phí bộ nhớ/sai chính xác."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Dùng nháy kép \"a\" thay vì nháy đơn 'a' cho ký tự.",
        "why": "\"a\" là chuỗi (char[]), 'a' mới là char.",
        "correct": "char c = 'a';"
      }
    ],
    "keyTakeaways": [
      "Hãy thử một ví dụ thực tế hơn!",
      "Trong các ví dụ, ta thường đơn giản hóa tên biến cho khớp kiểu dữ liệu (myInt hoặc myNum cho int, myChar cho char, v.v.)  để tránh nhầm lẫn.…",
      "Tuy nhiên, để minh họa thực tế của biến, ta tạo chương trình lưu dữ liệu khác nhau về một sinh viên:",
      "Trong ví dụ thực tế này, ta tạo chương trình tính diện tích hình chữ nhật (nhân chiều dài với chiều rộng):"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_variables_reallife.asp"
  },
  {
    "id": "cpp-challenges-variables",
    "slug": "challenges-variables",
    "title": "Thử thách về biến (Variables Challenge)",
    "titleEn": "C++ Variables Challenge",
    "num": 16,
    "chapter": "02 · Biến & Kiểu dữ liệu",
    "topic": "Variables & Types",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-variables-reallife"
    ],
    "description": "Kiểm tra hiểu biết về biến C++ bằng thử thách code nhỏ.",
    "objectives": [
      "Nắm được: Thử thách về biến trong C++.",
      "Trình bày được: Thử thách: tính diện tích hình chữ nhật.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Kiểm tra hiểu biết về biến C++ bằng thử thách code nhỏ."
    },
    "sections": [
      "Thử thách: tính diện tích hình chữ nhật"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int speed = 10;\n  cout << speed;\n  return 0;\n}",
        "explanation": "Khai báo biến có kiểu và in giá trị — khung để thử các kiểu dữ liệu của bài."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int speed = 10;\n  cout << speed;\n  return 0;\n}",
        "output": "10",
        "explanation": "Khai báo biến có kiểu và in giá trị — khung để thử các kiểu dữ liệu của bài."
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ và biến đổi dữ liệu trong mọi bài tập.",
      "Chọn kiểu đúng để tránh lãng phí bộ nhớ/sai chính xác."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Bỏ qua kiểu dữ liệu hoặc header cần thiết.",
        "why": "Compiler không biết tên hoặc biểu thức có thể sai kiểu.",
        "correct": "Thêm header và chọn kiểu phù hợp trước khi biên dịch."
      }
    ],
    "keyTakeaways": [
      "Kiểm tra hiểu biết về biến C++ bằng thử thách code nhỏ."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_challenges_variables.asp"
  },
  {
    "id": "cpp-user-input",
    "slug": "user-input",
    "title": "Nhập dữ liệu từ bàn phím (User Input / cin)",
    "titleEn": "C++ User Input",
    "num": 17,
    "chapter": "02 · Biến & Kiểu dữ liệu",
    "topic": "Variables & Types",
    "difficulty": "beginner",
    "estimatedTime": 11,
    "prerequisites": [
      "cpp-challenges-variables"
    ],
    "description": "Bạn đã biết cout dùng để xuất (in) giá trị. Bây giờ ta dùng cin để lấy dữ liệu nhập.",
    "objectives": [
      "Nắm được: Đầu vào người dùng C++.",
      "Trình bày được: Đầu vào người dùng C++; Ví dụ; Tạo máy tính bỏ túi đơn giản.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Bạn đã biết cout dùng để xuất (in) giá trị. Bây giờ ta dùng cin để lấy dữ liệu nhập. cin là biến định sẵn, đọc dữ liệu từ bàn phím bằng toán tử trích xuất ( >> ). Ví dụ sau, người dùng nhập một số, lưu vào biến x. Rồi ta in giá trị của x: cout đọc là \"see-out\". Dùng để xuất, và dùng toán tử chèn ( << ) cin đọc là \"see-in\". Dùng để nhập, và dùng toán tử trích xuất ( >> ) Ví dụ này, người dùng phải nhập hai số. Sau đó ta in tổng bằng cách cộng hai số: Xong rồi! Bạn vừa tạo một máy tính bỏ túi cơ bản! Mẹo: cả cin và cout đều thuộc thư viện <iostream>, viết tắt của các luồng input/output chuẩn. Để tham chiếu đầy đủ các đối tượng <iostream> cùng thông tin chi tiết, hãy đi tới tài liệu tham chiếu C++ iostream."
    },
    "sections": [
      "Đầu vào người dùng C++",
      "Ví dụ",
      "Tạo máy tính bỏ túi đơn giản",
      "Tham chiếu <iostream> đầy đủ"
    ],
    "syntax": [
      {
        "code": "int x;\ncout << \"Type a number: \"; // Type a number and press enter\ncin >> x; // Get user input from the keyboard\ncout << \"Your number is: \" << x; // Display the input value",
        "explanation": "Ví dụ sau, người dùng nhập một số, lưu vào biến x. Rồi ta in giá trị của x:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int x;\n  cout << \"Type a number: \"; // Type a number and press enter\n  cin >> x; // Get user input from the keyboard\n  cout << \"Your number is: \" << x; // Display the input value\n  return 0;\n}\n",
        "output": "",
        "explanation": "Ví dụ sau, người dùng nhập một số, lưu vào biến x. Rồi ta in giá trị của x:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int x, y;\n  int sum;\n  cout << \"Type a number: \";\n  cin >> x;\n  cout << \"Type another number: \";\n  cin >> y;\n  sum = x + y;\n  cout << \"Sum is: \" << sum;\n  return 0;\n}\n",
        "output": "",
        "explanation": "Ví dụ này, người dùng phải nhập hai số. Sau đó ta in tổng bằng cách cộng hai số:"
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ và biến đổi dữ liệu trong mọi bài tập.",
      "Chọn kiểu đúng để tránh lãng phí bộ nhớ/sai chính xác."
    ],
    "notes": [
      "Mẹo: cả cin và cout đều thuộc thư viện <iostream>, viết tắt của các luồng input/output chuẩn. Để tham chiếu đầy đủ các đối tượng <iostream> cùng thông tin chi tiết, hãy đi tới tài liệu tham chiếu C++ iostream."
    ],
    "commonMistakes": [
      {
        "wrong": "Nhầm = (gán) với == (so sánh) trong biểu thức.",
        "why": "Toán tử sai cho kết quả sai mà không báo lỗi.",
        "correct": "double-click kiểm tra: so sánh thì ==."
      }
    ],
    "keyTakeaways": [
      "Bạn đã biết cout dùng để xuất (in) giá trị. Bây giờ ta dùng cin để lấy dữ liệu nhập.",
      "cin là biến định sẵn, đọc dữ liệu từ bàn phím bằng toán tử trích xuất ( >> ).",
      "Ví dụ sau, người dùng nhập một số, lưu vào biến x. Rồi ta in giá trị của x:",
      "cout đọc là \"see-out\". Dùng để xuất, và dùng toán tử chèn ( << )"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_user_input.asp"
  },
  {
    "id": "cpp-data-types",
    "slug": "data-types",
    "title": "Kiểu dữ liệu trong C++ (Data Types)",
    "titleEn": "C++ Data Types",
    "num": 18,
    "chapter": "02 · Biến & Kiểu dữ liệu",
    "topic": "Variables & Types",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-user-input"
    ],
    "description": "Như đã giải thích ở chương Variables, biến trong C++ phải có kiểu chỉ định:",
    "objectives": [
      "Nắm được: Kiểu dữ liệu C++.",
      "Trình bày được: Kiểu dữ liệu C++; Các loại dữ liệu cơ bản.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Như đã giải thích ở chương Variables, biến trong C++ phải có kiểu chỉ định: Kiểu dữ liệu xác định kích thước và loại thông tin biến sẽ lưu: Bạn sẽ học thêm về từng kiểu dữ liệu trong các chương tiếp theo."
    },
    "sections": [
      "Kiểu dữ liệu C++",
      "Các loại dữ liệu cơ bản"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int speed = 10;\n  cout << speed;\n  return 0;\n}",
        "explanation": "Khai báo biến có kiểu và in giá trị — khung để thử các kiểu dữ liệu của bài."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int speed = 10;\n  cout << speed;\n  return 0;\n}",
        "output": "10",
        "explanation": "Khai báo biến có kiểu và in giá trị — khung để thử các kiểu dữ liệu của bài."
      }
    ],
    "tables": [
      {
        "title": "Các loại dữ liệu cơ bản",
        "header": [
          "Data Type",
          "Kích thước",
          "Mô tả"
        ],
        "rows": [
          [
            "bool",
            "1 byte",
            "Lưu giá trị đúng hoặc sai"
          ],
          [
            "char",
            "1 byte",
            "Lưu một ký tự/chữ/số duy nhất, hoặc giá trị ASCII"
          ],
          [
            "int",
            "2 hoặc 4 byte",
            "Lưu số nguyên, không có phần thập phân"
          ],
          [
            "float",
            "4 byte",
            "Lưu số thập phân với một hoặc nhiều chữ số sau dấu phẩy. Đủ cho 6-7 chữ số thập phân"
          ],
          [
            "double",
            "8 byte",
            "Lưu số thập phân với một hoặc nhiều chữ số sau dấu phẩy. Đủ cho 15 chữ số thập phân"
          ]
        ]
      }
    ],
    "useCases": [
      "Lưu trữ và biến đổi dữ liệu trong mọi bài tập.",
      "Chọn kiểu đúng để tránh lãng phí bộ nhớ/sai chính xác."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Bỏ qua kiểu dữ liệu hoặc header cần thiết.",
        "why": "Compiler không biết tên hoặc biểu thức có thể sai kiểu.",
        "correct": "Thêm header và chọn kiểu phù hợp trước khi biên dịch."
      }
    ],
    "keyTakeaways": [
      "Như đã giải thích ở chương Variables, biến trong C++ phải có kiểu chỉ định:",
      "Kiểu dữ liệu xác định kích thước và loại thông tin biến sẽ lưu:",
      "Bạn sẽ học thêm về từng kiểu dữ liệu trong các chương tiếp theo."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_data_types.asp"
  },
  {
    "id": "cpp-data-types-numeric",
    "slug": "data-types-numeric",
    "title": "Kiểu dữ liệu số (Numeric Types)",
    "titleEn": "C++ Numeric Data Type",
    "num": 19,
    "chapter": "02 · Biến & Kiểu dữ liệu",
    "topic": "Variables & Types",
    "difficulty": "beginner",
    "estimatedTime": 17,
    "prerequisites": [
      "cpp-data-types"
    ],
    "description": "Dùng int khi cần lưu số nguyên không có thập phân, như 35 hay 1000; dùng float hoặc double khi cần số thực (có thập phân), như 9.99 hay 3.14515.",
    "objectives": [
      "Nắm được: Kiểu dữ liệu số trong C++.",
      "Trình bày được: Loại Số; double; Số khoa học.",
      "Chạy và sửa được 4 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Dùng int khi cần lưu số nguyên không có thập phân, như 35 hay 1000; dùng float hoặc double khi cần số thực (có thập phân), như 9.99 hay 3.14515. float so với double Độ chính xác của giá trị số thực cho biết số chữ số giá trị có thể có sau dấu thập phân. Độ chính xác của float chỉ sáu hoặc bảy chữ số thập phân, trong khi biến double có độ chính xác khoảng 15 chữ số. Số thực cũng có thể viết dạng khoa học với \"e\" chỉ lũy thừa của 10:"
    },
    "sections": [
      "Loại Số",
      "double",
      "Số khoa học"
    ],
    "syntax": [
      {
        "code": "int myNum = 1000;\n   cout << myNum;",
        "explanation": "Dùng int khi cần lưu số nguyên không có thập phân, như 35 hay 1000; dùng float hoặc double khi cần số thực (có thập phân), như 9.99 hay 3.14515."
      }
    ],
    "examples": [
      {
        "title": "int",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int myNum = 1000;\n     cout << myNum;\n  return 0;\n}\n",
        "output": "1000",
        "explanation": "Dùng int khi cần lưu số nguyên không có thập phân, như 35 hay 1000; dùng float hoặc double khi cần số thực (có thập phân), như 9.99 hay 3.14515."
      },
      {
        "title": "float",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  float myNum = 5.75;\n     cout << myNum;\n  return 0;\n}\n",
        "output": "5.75",
        "explanation": "Chạy thử và tự sửa code để cảm nhận cách nó hoạt động."
      },
      {
        "title": "double",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  double myNum = 19.99;\n     cout << myNum;\n  return 0;\n}\n",
        "output": "19.99",
        "explanation": "Chạy thử và tự sửa code để cảm nhận cách nó hoạt động."
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  float f1 = 35e3;\n     double d1 = 12E4;\n     cout << f1;\n  cout << d1;\n  return 0;\n}\n",
        "output": "35000120000",
        "explanation": "Số thực cũng có thể viết dạng khoa học với \"e\" chỉ lũy thừa của 10:"
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ và biến đổi dữ liệu trong mọi bài tập.",
      "Chọn kiểu đúng để tránh lãng phí bộ nhớ/sai chính xác."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Bỏ qua kiểu dữ liệu hoặc header cần thiết.",
        "why": "Compiler không biết tên hoặc biểu thức có thể sai kiểu.",
        "correct": "Thêm header và chọn kiểu phù hợp trước khi biên dịch."
      }
    ],
    "keyTakeaways": [
      "Dùng int khi cần lưu số nguyên không có thập phân, như 35 hay 1000; dùng float hoặc double khi cần số thực (có thập phân ), như 9.99 hay 3.14515.…",
      "float so với double",
      "Độ chính xác của giá trị số thực cho biết số chữ số giá trị có thể có sau dấu thập phân. Độ chính xác của float chỉ sáu…",
      "Số thực cũng có thể viết dạng khoa học với \"e\" chỉ lũy thừa của 10:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_data_types_numeric.asp"
  },
  {
    "id": "cpp-data-types-bool",
    "slug": "data-types-bool",
    "title": "Kiểu Boolean (bool)",
    "titleEn": "C++ Boolean Data Types",
    "num": 20,
    "chapter": "02 · Biến & Kiểu dữ liệu",
    "topic": "Variables & Types",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-data-types-numeric"
    ],
    "description": "Kiểu boolean khai báo bằng từ khóa bool, chỉ nhận giá trị true hoặc false.",
    "objectives": [
      "Nắm được: Kiểu dữ liệu Boolean trong C++.",
      "Trình bày được: Loại Boolean; Ví dụ.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Kiểu boolean khai báo bằng từ khóa bool, chỉ nhận giá trị true hoặc false. Khi giá trị được trả về, true = 1 và false = 0. Giá trị boolean chủ yếu dùng cho kiểm tra điều kiện - sẽ học thêm ở chương sau."
    },
    "sections": [
      "Loại Boolean",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "bool isCodingFun = true;\nbool isFishTasty = false;\ncout << isCodingFun;  // Outputs 1 (true)\ncout << isFishTasty;  // Outputs 0 (false)",
        "explanation": "Khi giá trị được trả về, true = 1 và false = 0."
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  bool isCodingFun = true;\n  bool isFishTasty = false;\n  cout << isCodingFun;  // Outputs 1 (true)\n  cout << isFishTasty;  // Outputs 0 (false)\n  return 0;\n}\n",
        "output": "10",
        "explanation": "Khi giá trị được trả về, true = 1 và false = 0."
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ và biến đổi dữ liệu trong mọi bài tập.",
      "Chọn kiểu đúng để tránh lãng phí bộ nhớ/sai chính xác."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Gán số 1/0 trực tiếp cho biến bool thay vì biểu thức so sánh.",
        "why": "bool nhận true/false; dùng nó cho điều kiện sẽ rõ ràng và an toàn hơn.",
        "correct": "Dùng biểu thức so sánh: bool isCoding = (x > 5);"
      }
    ],
    "keyTakeaways": [
      "Kiểu boolean khai báo bằng từ khóa bool, chỉ nhận giá trị true hoặc false.",
      "Khi giá trị được trả về, true = 1 và false = 0.",
      "Giá trị boolean chủ yếu dùng cho kiểm tra điều kiện - sẽ học thêm ở chương sau."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_data_types_bool.asp"
  },
  {
    "id": "cpp-data-types-char",
    "slug": "data-types-char",
    "title": "Kiểu ký tự (char)",
    "titleEn": "C++ Char Data Types",
    "num": 21,
    "chapter": "02 · Biến & Kiểu dữ liệu",
    "topic": "Variables & Types",
    "difficulty": "beginner",
    "estimatedTime": 11,
    "prerequisites": [
      "cpp-data-types-bool"
    ],
    "description": "Kiểu char lưu một ký tự duy nhất. Ký tự phải đặt trong nháy đơn, như 'A' hay 'c':",
    "objectives": [
      "Nắm được: Các loại dữ liệu ký tự C++.",
      "Trình bày được: Loại ký tự; Ví dụ.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Kiểu char lưu một ký tự duy nhất. Ký tự phải đặt trong nháy đơn, như 'A' hay 'c': Hoặc nếu quen với ASCII, bạn có thể dùng giá trị ASCII để hiển thị một số ký tự: Mẹo: danh sách toàn bộ giá trị ASCII ở ASCII Table Reference."
    },
    "sections": [
      "Loại ký tự",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "char myGrade = 'B';\n   cout << myGrade;",
        "explanation": "Kiểu char lưu một ký tự duy nhất. Ký tự phải đặt trong nháy đơn, như 'A' hay 'c':"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  char myGrade = 'B';\n     cout << myGrade;\n  return 0;\n}\n",
        "output": "B",
        "explanation": "Kiểu char lưu một ký tự duy nhất. Ký tự phải đặt trong nháy đơn, như 'A' hay 'c':"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  char a = 65, b = 66, c = 67;\n  cout << a;\n  cout << b;\n  cout << c;\n  return 0;\n}\n",
        "output": "ABC",
        "explanation": "Hoặc nếu quen với ASCII, bạn có thể dùng giá trị ASCII để hiển thị một số ký tự:"
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ và biến đổi dữ liệu trong mọi bài tập.",
      "Chọn kiểu đúng để tránh lãng phí bộ nhớ/sai chính xác."
    ],
    "notes": [
      "Mẹo: danh sách toàn bộ giá trị ASCII ở ASCII Table Reference."
    ],
    "commonMistakes": [
      {
        "wrong": "Dùng phần tử front()/back()/top() khi container rỗng.",
        "why": "Hành vi không xác định khi container trống.",
        "correct": "Kiểm tra .empty() trước khi truy cập."
      },
      {
        "wrong": "Dùng nháy kép \"a\" thay vì nháy đơn 'a' cho ký tự.",
        "why": "\"a\" là chuỗi (char[]), 'a' mới là char.",
        "correct": "char c = 'a';"
      }
    ],
    "keyTakeaways": [
      "Kiểu char lưu một ký tự duy nhất. Ký tự phải đặt trong nháy đơn, như 'A' hay 'c':",
      "Hoặc nếu quen với ASCII, bạn có thể dùng giá trị ASCII để hiển thị một số ký tự:",
      "Mẹo: danh sách toàn bộ giá trị ASCII ở ASCII Table Reference."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_data_types_char.asp"
  },
  {
    "id": "cpp-data-types-string",
    "slug": "data-types-string",
    "title": "Kiểu chuỗi (string)",
    "titleEn": "C++ String Data Type",
    "num": 22,
    "chapter": "02 · Biến & Kiểu dữ liệu",
    "topic": "Variables & Types",
    "difficulty": "beginner",
    "estimatedTime": 11,
    "prerequisites": [
      "cpp-data-types-char"
    ],
    "description": "Kiểu string dùng để lưu một chuỗi ký tự (văn bản). Nó không phải kiểu tích hợp sẵn, nhưng cư xử như một kiểu trong cách dùng cơ bản nhất.",
    "objectives": [
      "Nắm được: Kiểu dữ liệu chuỗi C++.",
      "Trình bày được: Loại Chuỗi; Ví dụ.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Kiểu string dùng để lưu một chuỗi ký tự (văn bản). Nó không phải kiểu tích hợp sẵn, nhưng cư xử như một kiểu trong cách dùng cơ bản nhất. Để dùng chuỗi, phải include thêm tệp header trong mã nguồn, đó là thư viện <string>: Bạn sẽ học nhiều hơn về chuỗi trong Chương C++ Strings."
    },
    "sections": [
      "Loại Chuỗi",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "string greeting = \"Hello\";\ncout << greeting;",
        "explanation": "Kiểu string dùng để lưu một chuỗi ký tự (văn bản). Nó không phải kiểu tích hợp sẵn, nhưng cư xử như một kiểu trong cách dùng cơ bản nhất."
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string greeting = \"Hello\";\n  cout << greeting;\n  return 0;\n}\n",
        "output": "Hello",
        "explanation": "Kiểu string dùng để lưu một chuỗi ký tự (văn bản). Nó không phải kiểu tích hợp sẵn, nhưng cư xử như một kiểu trong cách dùng cơ bản nhất."
      },
      {
        "title": "Ví dụ",
        "code": "#include <string>\n#include <iostream>\nusing namespace std;\n\nint main() {\n  // Include the string library\n\n  // Create a string variable\n  string greeting = \"Hello\";\n\n  // Output string value\n  cout << greeting;\n  return 0;\n}\n",
        "output": "Hello",
        "explanation": "Để dùng chuỗi, phải include thêm tệp header trong mã nguồn, đó là thư viện <string>:"
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ và biến đổi dữ liệu trong mọi bài tập.",
      "Chọn kiểu đúng để tránh lãng phí bộ nhớ/sai chính xác."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Quên #include <string> khi dùng std::string.",
        "why": "string không phải kiểu dựng sẵn — thiếu header sẽ không biên dịch.",
        "correct": "#include <string> rồi mới dùng string."
      },
      {
        "wrong": "Không kiểm tra file mở thành công trước khi đọc/ghi.",
        "why": "Thao tác trên file mở thất bại âm thầm hoặc crash.",
        "correct": "if (myFile) { ... } hoặc if (!myFile.is_open()) return;"
      }
    ],
    "keyTakeaways": [
      "Kiểu string dùng để lưu một chuỗi ký tự (văn bản). Nó không phải kiểu tích hợp sẵn, nhưng cư xử như một kiểu trong cách  dùng cơ bản nhất.…",
      "Để dùng chuỗi, phải include thêm tệp header trong mã nguồn, đó là thư viện <string>:",
      "Bạn sẽ học nhiều hơn về chuỗi trong Chương C++ Strings."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_data_types_string.asp"
  },
  {
    "id": "cpp-auto",
    "slug": "auto",
    "title": "Từ khóa auto (Auto Keyword)",
    "titleEn": "C++ auto Keyword",
    "num": 23,
    "chapter": "02 · Biến & Kiểu dữ liệu",
    "topic": "Variables & Types",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-data-types-string"
    ],
    "description": "Từ khóa auto tự động nhận diện kiểu của biến dựa trên giá trị bạn gán cho nó.",
    "objectives": [
      "Nắm được: Từ khóa tự động C++.",
      "Trình bày được: Từ khóa tự động; Ví dụ; Ví dụ với các kiểu khác nhau.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Từ khóa auto tự động nhận diện kiểu của biến dựa trên giá trị bạn gán cho nó. Giúp viết code gọn và tránh lặp tên kiểu, nhất là kiểu dài hoặc phức tạp. Ví dụ: thay vì viết int x = 5;, bạn có thể viết: Từ C++11, auto trở thành cách mạnh mẽ để trình biên dịch tự suy ra kiểu dựa trên giá trị bạn gán. Ví dụ minh họa cách dùng auto để tạo biến nhiều kiểu khác nhau, dựa trên giá trị bạn gán: Lưu ý: trong hướng dẫn này, ta thường dùng int, double và các kiểu cơ bản khi kiểu đã rõ ràng. Nhưng với kiểu phức tạp hơn - như iterator và lambda (sẽ học thêm ở chương sau) - ta dùng auto để code gọn và dễ hiểu hơn."
    },
    "sections": [
      "Từ khóa tự động",
      "Ví dụ",
      "Ví dụ với các kiểu khác nhau",
      "Các Lưu Ý Quan Trọng"
    ],
    "syntax": [
      {
        "code": "// Creating auto variables\nauto myNum = 5; // int\nauto myFloatNum = 5.99f; // float\nauto myDoubleNum = 9.98; // double\nauto myLetter = 'D'; // char\nauto myBoolean = true; // bool\nauto myString = string(\"Hello\"); // std::string",
        "explanation": "Ví dụ minh họa cách dùng auto để tạo biến nhiều kiểu khác nhau, dựa trên giá trị bạn gán:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <string>\nusing namespace std;\nint main() {\n  // Creating auto variables\n  auto myNum = 5; // int\n  auto myFloatNum = 5.99f; // float\n  auto myDoubleNum = 9.98; // double\n  auto myLetter = 'D'; // char\n  auto myBoolean = true; // bool\n  auto myString = string(\"Hello\"); // std::string\n  return 0;\n}\n",
        "output": "",
        "explanation": "Ví dụ minh họa cách dùng auto để tạo biến nhiều kiểu khác nhau, dựa trên giá trị bạn gán:"
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ và biến đổi dữ liệu trong mọi bài tập.",
      "Chọn kiểu đúng để tránh lãng phí bộ nhớ/sai chính xác."
    ],
    "notes": [
      "Lưu ý: trong hướng dẫn này, ta thường dùng int, double và các kiểu cơ bản khi kiểu đã rõ ràng."
    ],
    "commonMistakes": [
      {
        "wrong": "Dùng auto khiến kiểu không rõ ràng ở chỗ quan trọng.",
        "why": "auto lấy kiểu từ vế phải — có thể khác kiểu bạn nghĩ.",
        "correct": "Chỉ dùng auto khi kiểu đã rõ và ổn định."
      },
      {
        "wrong": "Bắt giữ biến theo giá trị [=] rồi mong sửa được biến gốc.",
        "why": "Bản copy tách rời biến gốc ngoài lambda.",
        "correct": "Dùng [&] hoặc bắt giữ theo tham chiếu khi cần ghi."
      }
    ],
    "keyTakeaways": [
      "Từ khóa auto tự động nhận diện kiểu của biến dựa trên giá trị bạn gán cho nó.",
      "Giúp viết code gọn và tránh lặp tên kiểu, nhất là kiểu dài hoặc phức tạp.",
      "Ví dụ: thay vì viết int x = 5;, bạn có thể viết:",
      "Từ C++11, auto trở thành cách mạnh mẽ để trình biên dịch tự suy ra kiểu dựa trên giá trị bạn gán."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_auto.asp"
  },
  {
    "id": "cpp-data-types-reallife",
    "slug": "data-types-reallife",
    "title": "Ví dụ thực tế về kiểu dữ liệu",
    "titleEn": "C++ Data Types Real Life Examples",
    "num": 24,
    "chapter": "02 · Biến & Kiểu dữ liệu",
    "topic": "Variables & Types",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-auto"
    ],
    "description": "Ví dụ thực tế dùng các kiểu dữ liệu khác nhau để tính và xuất tổng chi phí của nhiều mặt hàng:",
    "objectives": [
      "Nắm được: Ví dụ thực tế về kiểu dữ liệu trong C++.",
      "Trình bày được: Ví dụ thực tế.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Ví dụ thực tế dùng các kiểu dữ liệu khác nhau để tính và xuất tổng chi phí của nhiều mặt hàng:"
    },
    "sections": [
      "Ví dụ thực tế"
    ],
    "syntax": [
      {
        "code": "// Create variables of different data types\nint items = 50;\ndouble cost_per_item = 9.99;\ndouble total_cost = items * cost_per_item;\nchar currency = '$';\n\n// Print variables\ncout << \"Number of items: \" << items << \"\\n\";\ncout << \"Cost per item: \" << cost_per_item << currency << \"\\n\";\ncout << \"Total cost = \" << total_cost << currency << \"\\n\";",
        "explanation": "Ví dụ thực tế dùng các kiểu dữ liệu khác nhau để tính và xuất tổng chi phí của nhiều mặt hàng:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  // Create variables of different data types\n  int items = 50;\n  double cost_per_item = 9.99;\n  double total_cost = items * cost_per_item;\n  char currency = '$';\n\n  // Print variables\n  cout << \"Number of items: \" << items << \"\\n\";\n  cout << \"Cost per item: \" << cost_per_item << currency << \"\\n\";\n  cout << \"Total cost = \" << total_cost << currency << \"\\n\";\n  return 0;\n}\n",
        "output": "Number of items: 50\nCost per item: 9.99$\nTotal cost = 499.5$",
        "explanation": "Ví dụ thực tế dùng các kiểu dữ liệu khác nhau để tính và xuất tổng chi phí của nhiều mặt hàng:"
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ và biến đổi dữ liệu trong mọi bài tập.",
      "Chọn kiểu đúng để tránh lãng phí bộ nhớ/sai chính xác."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Bỏ qua kiểu dữ liệu hoặc header cần thiết.",
        "why": "Compiler không biết tên hoặc biểu thức có thể sai kiểu.",
        "correct": "Thêm header và chọn kiểu phù hợp trước khi biên dịch."
      }
    ],
    "keyTakeaways": [
      "Ví dụ thực tế dùng các kiểu dữ liệu khác nhau để tính và xuất tổng chi phí của nhiều mặt hàng:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_data_types_reallife.asp"
  },
  {
    "id": "cpp-challenges-data-types",
    "slug": "challenges-data-types",
    "title": "Thử thách kiểu dữ liệu (Data Types Challenge)",
    "titleEn": "C++ Data Types Challenge",
    "num": 25,
    "chapter": "02 · Biến & Kiểu dữ liệu",
    "topic": "Variables & Types",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-data-types-reallife"
    ],
    "description": "Kiểm tra hiểu biết về kiểu dữ liệu C++ bằng thử thách code nhỏ.",
    "objectives": [
      "Nắm được: Thử thách về kiểu dữ liệu trong C++.",
      "Trình bày được: Thử thách: tạo bảng điểm học sinh.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Kiểm tra hiểu biết về kiểu dữ liệu C++ bằng thử thách code nhỏ."
    },
    "sections": [
      "Thử thách: tạo bảng điểm học sinh"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int speed = 10;\n  cout << speed;\n  return 0;\n}",
        "explanation": "Khai báo biến có kiểu và in giá trị — khung để thử các kiểu dữ liệu của bài."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int speed = 10;\n  cout << speed;\n  return 0;\n}",
        "output": "10",
        "explanation": "Khai báo biến có kiểu và in giá trị — khung để thử các kiểu dữ liệu của bài."
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ và biến đổi dữ liệu trong mọi bài tập.",
      "Chọn kiểu đúng để tránh lãng phí bộ nhớ/sai chính xác."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Bỏ qua kiểu dữ liệu hoặc header cần thiết.",
        "why": "Compiler không biết tên hoặc biểu thức có thể sai kiểu.",
        "correct": "Thêm header và chọn kiểu phù hợp trước khi biên dịch."
      }
    ],
    "keyTakeaways": [
      "Kiểm tra hiểu biết về kiểu dữ liệu C++ bằng thử thách code nhỏ."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_challenges_data_types.asp"
  },
  {
    "id": "cpp-operators",
    "slug": "operators",
    "title": "Toán tử trong C++ (Operators)",
    "titleEn": "C++ Operators",
    "num": 26,
    "chapter": "03 · Toán tử",
    "topic": "Variables & Types",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [],
    "description": "Toán tử dùng để thực hiện các phép toán trên biến và giá trị.",
    "objectives": [
      "Nắm được: Toán tử C++.",
      "Trình bày được: Toán tử; Ví dụ.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Toán tử dùng để thực hiện các phép toán trên biến và giá trị. Trong ví dụ dưới đây, ta dùng toán tử + để cộng hai giá trị: Dù toán tử + thường dùng để cộng hai giá trị như ví dụ trên, nó cũng dùng được để cộng biến với giá trị, hoặc biến với biến: C++ chia các toán tử thành các nhóm sau:"
    },
    "sections": [
      "Toán tử",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "int x = 100 + 50;",
        "explanation": "Trong ví dụ dưới đây, ta dùng toán tử + để cộng hai giá trị:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "int main() {\n  int x = 100 + 50;\n  return 0;\n}\n",
        "output": "",
        "explanation": "Trong ví dụ dưới đây, ta dùng toán tử + để cộng hai giá trị:"
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ và biến đổi dữ liệu trong mọi bài tập.",
      "Chọn kiểu đúng để tránh lãng phí bộ nhớ/sai chính xác."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Nhầm = (gán) với == (so sánh) trong biểu thức.",
        "why": "Toán tử sai cho kết quả sai mà không báo lỗi.",
        "correct": "double-click kiểm tra: so sánh thì ==."
      }
    ],
    "keyTakeaways": [
      "Toán tử dùng để thực hiện các phép toán trên biến và giá trị.",
      "Trong ví dụ dưới đây, ta dùng toán tử + để cộng hai giá trị:",
      "Dù toán tử + thường dùng để cộng hai giá trị như ví dụ trên, nó cũng dùng được để cộng biến với giá trị, hoặc biến với b iến…",
      "C++ chia các toán tử thành các nhóm sau:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_operators.asp"
  },
  {
    "id": "cpp-operators-arithmetic",
    "slug": "operators-arithmetic",
    "title": "Toán tử số học (Arithmetic Operators)",
    "titleEn": "C++ Arithmetic Operators",
    "num": 27,
    "chapter": "03 · Toán tử",
    "topic": "Variables & Types",
    "difficulty": "beginner",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-operators"
    ],
    "description": "Toán tử số học dùng để thực hiện các phép toán số học phổ biến.",
    "objectives": [
      "Nắm được: Toán tử số học trong C++.",
      "Trình bày được: Toán tử số học; Ví dụ; Tăng và giảm giá trị.",
      "Chạy và sửa được 6 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Toán tử số học dùng để thực hiện các phép toán số học phổ biến. Ví dụ kết hợp nhiều toán tử số học trong một chương trình: Tự trải nghiệm Lưu ý: khi chia hai số nguyên trong C++, kết quả cũng là số nguyên. Ví dụ 10 / 3 cho ra 3. Tự trải nghiệm Tăng và giảm giá trị rất phổ biến trong lập trình, nhất là khi làm việc với bộ đếm, vòng lặp và mảng (sẽ học thêm ở các chương sau). Toán tử ++ tăng giá trị lên 1, còn -- giảm giá trị đi 1: Tự trải nghiệm Tự trải nghiệm Đôi khi bạn vừa tăng vừa giảm cùng một biến. Hãy nhớ rằng nếu bạn tăng một giá trị rồi sau đó giảm nó, nó sẽ tăng lên một rồi lại giảm xuống một - kết thúc đúng chỗ nó bắt đầu. Tự trải nghiệm Tưởng tượng viết chương trình đếm người vào/ra phòng. Dùng ++ khi có người vào, -- khi có người rời đi: Tự trải nghiệm"
    },
    "sections": [
      "Toán tử số học",
      "Ví dụ",
      "Tăng và giảm giá trị"
    ],
    "syntax": [
      {
        "code": "int x = 10;\nint y = 3;\n\ncout << (x + y) << \"\\n\"; // 13\ncout << (x - y) << \"\\n\"; // 7\ncout << (x * y) << \"\\n\"; // 30\ncout << (x / y) << \"\\n\"; // 3 (integer division)\ncout << (x % y) << \"\\n\"; // 1\n\nint z = 5;\n++z;\ncout << z << \"\\n\"; // 6\n--z;\ncout << z << \"\\n\"; // 5",
        "explanation": "Ví dụ kết hợp nhiều toán tử số học trong một chương trình:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int x = 10;\n  int y = 3;\n\n  cout << (x + y) << \"\\n\"; // 13\n  cout << (x - y) << \"\\n\"; // 7\n  cout << (x * y) << \"\\n\"; // 30\n  cout << (x / y) << \"\\n\"; // 3 (integer division)\n  cout << (x % y) << \"\\n\"; // 1\n\n  int z = 5;\n  ++z;\n  cout << z << \"\\n\"; // 6\n  --z;\n  cout << z << \"\\n\"; // 5\n  return 0;\n}\n",
        "output": "13\n7\n30\n3\n1\n6\n5",
        "explanation": "Ví dụ kết hợp nhiều toán tử số học trong một chương trình:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int x = 10;\n  int y = 3;\n  cout << (x / y) << \"\\n\";   // Integer division, result is 3\n\n  double a = 10.0;\n  double b = 3.0;\n  cout << (a / b) << \"\\n\";   // Decimal division, result is 3.333...\n  return 0;\n}\n",
        "output": "3\n3.33333",
        "explanation": "Tự trải nghiệm"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int x = 5;\n\n  ++x; // Increment x by 1\n  cout << x << \"\\n\"; // 6\n  return 0;\n}\n",
        "output": "6",
        "explanation": "Toán tử ++ tăng giá trị lên 1, còn -- giảm giá trị đi 1:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int x = 5;\n\n  --x; // Decrement x by 1\n  cout << x << \"\\n\"; // 4\n  return 0;\n}\n",
        "output": "4",
        "explanation": "Tự trải nghiệm"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int x = 5;\n\n  ++x; // Increment x by 1 (x becomes 6)\n  --x; // Decrement x by 1 (x becomes 5 again)\n\n  cout << x << \"\\n\"; // 5\n  return 0;\n}\n",
        "output": "5",
        "explanation": "Đôi khi bạn vừa tăng vừa giảm cùng một biến. Hãy nhớ rằng nếu bạn tăng một giá trị rồi sau đó giảm nó, nó sẽ tăng lên một rồi lại giảm xuống một - kết thúc đúng chỗ nó bắt đầu."
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int peopleInRoom = 0;\n\n  // 3 people enter\n  peopleInRoom++;\n  peopleInRoom++;\n  peopleInRoom++;\n\n  cout << peopleInRoom << \"\\n\"; // 3\n\n  // 1 person leaves\n  peopleInRoom--;\n\n  cout << peopleInRoom << \"\\n\"; // 2\n  return 0;\n}\n",
        "output": "3\n2",
        "explanation": "Tưởng tượng viết chương trình đếm người vào/ra phòng. Dùng ++ khi có người vào, -- khi có người rời đi:"
      }
    ],
    "tables": [
      {
        "title": "Toán tử số học",
        "header": [
          "Thao Tác",
          "Tên",
          "Mô tả",
          "Ví dụ",
          "Hãy thử làm vậy."
        ],
        "rows": [
          [
            "+",
            "Thêm vào",
            "Cộng hai giá trị",
            "x + y",
            "Hãy thử làm vậy."
          ],
          [
            "-",
            "Phép trừ",
            "Trừ giá trị này khỏi giá trị kia",
            "x - y",
            "Hãy thử làm vậy."
          ],
          [
            "*",
            "Phép nhân",
            "Nhân hai giá trị",
            "x * y",
            "Hãy thử làm vậy."
          ],
          [
            "/",
            "Phép chia",
            "Chia giá trị này cho giá trị kia",
            "x / y",
            "Hãy thử làm vậy."
          ],
          [
            "%",
            "Giá trị tuyệt đối",
            "Trả về phần dư của phép chia",
            "x % y",
            "Hãy thử làm vậy."
          ],
          [
            "++",
            "Tăng Lượng",
            "Tăng giá trị của biến lên 1",
            "++x",
            "Hãy thử làm vậy."
          ],
          [
            "--",
            "Giảm",
            "Giảm giá trị của biến đi 1",
            "--x",
            "Hãy thử làm vậy."
          ]
        ]
      }
    ],
    "useCases": [
      "Lưu trữ và biến đổi dữ liệu trong mọi bài tập.",
      "Chọn kiểu đúng để tránh lãng phí bộ nhớ/sai chính xác."
    ],
    "notes": [
      "Lưu ý: khi chia hai số nguyên trong C++, kết quả cũng là số nguyên. Ví dụ 10 / 3 cho ra 3."
    ],
    "commonMistakes": [
      {
        "wrong": "Truy cập phần tử ngoài chỉ mục hợp lệ (ví dụ arr[5] cho mảng 5 phần tử).",
        "why": "Chỉ mục hợp lệ là 0..n-1; vượt biên là undefined behavior.",
        "correct": "Duyệt i từ 0 đến n-1."
      },
      {
        "wrong": "Nhầm = (gán) với == (so sánh) trong biểu thức.",
        "why": "Toán tử sai cho kết quả sai mà không báo lỗi.",
        "correct": "double-click kiểm tra: so sánh thì ==."
      }
    ],
    "keyTakeaways": [
      "Toán tử số học dùng để thực hiện các phép toán số học phổ biến.",
      "Ví dụ kết hợp nhiều toán tử số học trong một chương trình:",
      "Tự trải nghiệm",
      "Lưu ý: khi chia hai số nguyên trong C++, kết quả cũng là số nguyên. Ví dụ 10 / 3 cho ra 3."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_operators_arithmetic.asp"
  },
  {
    "id": "cpp-operators-assignment",
    "slug": "operators-assignment",
    "title": "Toán tử gán (Assignment Operators)",
    "titleEn": "C++ Assignment Operators",
    "num": 28,
    "chapter": "03 · Toán tử",
    "topic": "Variables & Types",
    "difficulty": "beginner",
    "estimatedTime": 14,
    "prerequisites": [
      "cpp-operators-arithmetic"
    ],
    "description": "Toán tử gán dùng để gán giá trị cho biến.",
    "objectives": [
      "Nắm được: Toán tử gán trong C++.",
      "Trình bày được: Người vận hành chỉ định; Ví dụ; Toán tử gán kết hợp.",
      "Chạy và sửa được 3 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Toán tử gán dùng để gán giá trị cho biến. Ví dụ dưới đây, ta dùng toán tử gán ( = ) để gán giá trị 10 cho biến x: Toán tử gán kết hợp phép cộng ( += ) cộng giá trị vào biến: Danh sách toàn bộ toán tử gán: Toán tử gán kết hợp là cách viết gọn cho phép toán dùng chính biến ở hai vế. Ví dụ, thay vì viết x = x + 5;, chỉ cần viết x += 5;. Mẹo: toán tử ghép làm code ngắn và dễ đọc hơn, nhất là khi cập nhật cùng một biến nhiều lần. Vì sao gọi là \"kết hợp\"? Gọi là toán tử gán kết hợp vì chúng ghép toán tử thường (+, -, *, v.v.) với toán tử gán (=) thành một. Toán tử gán kết hợp cũng hữu ích trong tình huống thực tế. Ví dụ, dùng += để theo dõi tiền tiết kiệm khi gửi thêm tiền vào tài khoản:"
    },
    "sections": [
      "Người vận hành chỉ định",
      "Ví dụ",
      "Toán tử gán kết hợp",
      "Ví dụ thực tế: theo dõi tiền tiết kiệm"
    ],
    "syntax": [
      {
        "code": "int x = 10;",
        "explanation": "Ví dụ dưới đây, ta dùng toán tử gán ( = ) để gán giá trị 10 cho biến x:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "int main() {\n  int x = 10;\n  return 0;\n}\n",
        "output": "",
        "explanation": "Ví dụ dưới đây, ta dùng toán tử gán ( = ) để gán giá trị 10 cho biến x:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int x = 10;\n\n  x += 5;  // same as x = x + 5\n  cout << x << \"\\n\"; // 15\n\n  x *= 2;  // same as x = x * 2\n  cout << x << \"\\n\"; // 30\n  return 0;\n}\n",
        "output": "15\n30",
        "explanation": "Toán tử gán kết hợp là cách viết gọn cho phép toán dùng chính biến ở hai vế. Ví dụ, thay vì viết x = x + 5;, chỉ cần viết x += 5;."
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int savings = 100;\n  savings += 50; // add 50 to savings\n\n  cout << \"Total savings: \" << savings;\n  return 0;\n}\n",
        "output": "Total savings: 150",
        "explanation": "Toán tử gán kết hợp cũng hữu ích trong tình huống thực tế. Ví dụ, dùng += để theo dõi tiền tiết kiệm khi gửi thêm tiền vào tài khoản:"
      }
    ],
    "tables": [
      {
        "title": "Ví dụ",
        "header": [
          "Thao Tác",
          "Ví dụ",
          "Đồng thời là",
          "Hãy thử làm vậy."
        ],
        "rows": [
          [
            "=",
            "x = 5",
            "x = 5",
            "Hãy thử làm vậy."
          ],
          [
            "+=",
            "x += 3",
            "x = x + 3",
            "Hãy thử làm vậy."
          ],
          [
            "-=",
            "x -= 3",
            "x = x - 3",
            "Hãy thử làm vậy."
          ],
          [
            "*=",
            "x *= 3",
            "x = x * 3",
            "Hãy thử làm vậy."
          ],
          [
            "/=",
            "x /= 3",
            "x = x / 3",
            "Hãy thử làm vậy."
          ],
          [
            "%=",
            "x %= 3",
            "x = x % 3",
            "Hãy thử làm vậy."
          ],
          [
            "&=",
            "x &= 3",
            "x = x & 3",
            "Hãy thử làm vậy."
          ],
          [
            "=",
            "x",
            "= 3",
            "x = x",
            "3",
            "Hãy thử làm vậy."
          ],
          [
            "^=",
            "x ^= 3",
            "x = x ^ 3",
            "Hãy thử làm vậy."
          ],
          [
            ">>=",
            "x >>= 3",
            "x = x >> 3",
            "Hãy thử làm vậy."
          ],
          [
            "<<=",
            "x <<= 3",
            "x = x << 3",
            "Hãy thử làm vậy."
          ]
        ]
      }
    ],
    "useCases": [
      "Lưu trữ và biến đổi dữ liệu trong mọi bài tập.",
      "Chọn kiểu đúng để tránh lãng phí bộ nhớ/sai chính xác."
    ],
    "notes": [
      "Mẹo: toán tử ghép làm code ngắn và dễ đọc hơn, nhất là khi cập nhật cùng một biến nhiều lần."
    ],
    "commonMistakes": [
      {
        "wrong": "Dùng phần tử front()/back()/top() khi container rỗng.",
        "why": "Hành vi không xác định khi container trống.",
        "correct": "Kiểm tra .empty() trước khi truy cập."
      },
      {
        "wrong": "Nhầm = (gán) với == (so sánh) trong biểu thức.",
        "why": "Toán tử sai cho kết quả sai mà không báo lỗi.",
        "correct": "double-click kiểm tra: so sánh thì ==."
      }
    ],
    "keyTakeaways": [
      "Toán tử gán dùng để gán giá trị cho biến.",
      "Ví dụ dưới đây, ta dùng toán tử gán ( = ) để gán giá trị 10 cho biến x:",
      "Toán tử gán kết hợp phép cộng ( += ) cộng giá trị vào biến:",
      "Danh sách toàn bộ toán tử gán:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_operators_assignment.asp"
  },
  {
    "id": "cpp-operators-comparison",
    "slug": "operators-comparison",
    "title": "Toán tử so sánh (Comparison Operators)",
    "titleEn": "C++ Comparison Operators",
    "num": 29,
    "chapter": "03 · Toán tử",
    "topic": "Variables & Types",
    "difficulty": "beginner",
    "estimatedTime": 14,
    "prerequisites": [
      "cpp-operators-assignment"
    ],
    "description": "Toán tử so sánh dùng để so sánh hai giá trị (hoặc biến). Điều này quan trọng trong lập trình vì giúp tìm câu trả lời và ra quyết định.",
    "objectives": [
      "Nắm được: Toán tử so sánh trong C++.",
      "Trình bày được: Toán tử So sánh; Ví dụ; Ví dụ thực tế.",
      "Chạy và sửa được 3 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Toán tử so sánh dùng để so sánh hai giá trị (hoặc biến). Điều này quan trọng trong lập trình vì giúp tìm câu trả lời và ra quyết định. Kết quả của phép so sánh là 1 hoặc 0, tức true (1) hoặc false (0). Những giá trị này gọi là giá trị Boolean - sẽ học thêm ở chương Booleans and If..Else. Ví dụ sau dùng toán tử lớn hơn ( > ) để biết 5 có lớn hơn 3 không: Danh sách toàn bộ toán tử so sánh: Toán tử so sánh hay dùng trong điều kiện thực tế, chẳng hạn kiểm tra tuổi bầu cử: Tự trải nghiệm Một ứng dụng phổ biến khác là kiểm tra mật khẩu đủ dài chưa: Tự trải nghiệm"
    },
    "sections": [
      "Toán tử So sánh",
      "Ví dụ",
      "Ví dụ thực tế"
    ],
    "syntax": [
      {
        "code": "int x = 5;\nint y = 3;\ncout << (x > y); // returns 1 (true) because 5 is greater than 3",
        "explanation": "Ví dụ sau dùng toán tử lớn hơn ( > ) để biết 5 có lớn hơn 3 không:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int x = 5;\n  int y = 3;\n  cout << (x > y); // returns 1 (true) because 5 is greater than 3\n  return 0;\n}\n",
        "output": "1",
        "explanation": "Ví dụ sau dùng toán tử lớn hơn ( > ) để biết 5 có lớn hơn 3 không:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int age = 18;\n\n  cout << (age >= 18) << \"\\n\"; // 1 (true), old enough to vote\n  cout << (age < 18) << \"\\n\";  // 0 (false)\n  return 0;\n}\n",
        "output": "1\n0",
        "explanation": "Toán tử so sánh hay dùng trong điều kiện thực tế, chẳng hạn kiểm tra tuổi bầu cử:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int passwordLength = 5;\n\n  cout << (passwordLength >= 8) << \"\\n\"; // 0 (false), too short\n  cout << (passwordLength < 8) << \"\\n\";  // 1 (true), needs more characters\n  return 0;\n}\n",
        "output": "0\n1",
        "explanation": "Một ứng dụng phổ biến khác là kiểm tra mật khẩu đủ dài chưa:"
      }
    ],
    "tables": [
      {
        "title": "Ví dụ",
        "header": [
          "Thao Tác",
          "Tên",
          "Ví dụ",
          "Hãy thử làm vậy."
        ],
        "rows": [
          [
            "==",
            "Tương đương với",
            "x == y",
            "Hãy thử làm vậy."
          ],
          [
            "!=",
            "Không công bằng",
            "x != y",
            "Hãy thử làm vậy."
          ],
          [
            ">",
            "Lớn hơn",
            "x > y",
            "Hãy thử làm vậy."
          ],
          [
            "<",
            "Ít hơn",
            "x < y",
            "Hãy thử làm vậy."
          ],
          [
            ">=",
            "Lớn hơn hoặc bằng",
            "x >= y",
            "Hãy thử làm vậy."
          ],
          [
            "<=",
            "Nhỏ hơn hoặc bằng",
            "x <= y",
            "Hãy thử làm vậy."
          ]
        ]
      }
    ],
    "useCases": [
      "Lưu trữ và biến đổi dữ liệu trong mọi bài tập.",
      "Chọn kiểu đúng để tránh lãng phí bộ nhớ/sai chính xác."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Gán số 1/0 trực tiếp cho biến bool thay vì biểu thức so sánh.",
        "why": "bool nhận true/false; dùng nó cho điều kiện sẽ rõ ràng và an toàn hơn.",
        "correct": "Dùng biểu thức so sánh: bool isCoding = (x > 5);"
      },
      {
        "wrong": "Viết if (x = 5) thay vì if (x == 5).",
        "why": "Dấu = là gán, == mới là so sánh; gán trong if luôn cho kết quả true.",
        "correct": "if (x == 5) { ... }"
      }
    ],
    "keyTakeaways": [
      "Toán tử so sánh dùng để so sánh hai giá trị (hoặc biến). Điều này quan trọng trong lập trình vì giúp tìm câu trả lời và  ra quyết định.…",
      "Kết quả của phép so sánh là 1 hoặc 0, tức true (1) hoặc false (0). Những giá trị này gọi là giá trị Boolean - sẽ học thê m ở chương Booleans and If..Else.…",
      "Ví dụ sau dùng toán tử lớn hơn ( > ) để biết 5 có lớn hơn 3 không:",
      "Danh sách toàn bộ toán tử so sánh:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_operators_comparison.asp"
  },
  {
    "id": "cpp-operators-logical",
    "slug": "operators-logical",
    "title": "Toán tử logic (Logical Operators)",
    "titleEn": "C++ Logical Operators",
    "num": 30,
    "chapter": "03 · Toán tử",
    "topic": "Variables & Types",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-operators-comparison"
    ],
    "description": "Cũng như toán tử so sánh, bạn có thể kiểm tra giá trị true (1) hoặc false (0) bằng toán tử logic.",
    "objectives": [
      "Nắm được: Toán tử logic trong C++.",
      "Trình bày được: Toán tử logic.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Cũng như toán tử so sánh, bạn có thể kiểm tra giá trị true (1) hoặc false (0) bằng toán tử logic. Toán tử logic dùng để xác định quan hệ logic giữa các biến hoặc giá trị: Bạn sẽ học nhiều hơn về true/false trong chương sau."
    },
    "sections": [
      "Toán tử logic"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int a = 7, b = 4;\n  cout << a + b << \" \" << a % b;\n  return 0;\n}",
        "explanation": "Hai số nguyên và vài phép toán — thay đổi biểu thức để kiểm tra kết quả."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int a = 7, b = 4;\n  cout << a + b << \" \" << a % b;\n  return 0;\n}",
        "output": "11 3",
        "explanation": "Hai số nguyên và vài phép toán — thay đổi biểu thức để kiểm tra kết quả."
      }
    ],
    "tables": [
      {
        "title": "Toán tử logic",
        "header": [
          "Thao Tác",
          "Tên",
          "Mô tả",
          "Ví dụ",
          "Hãy thử làm vậy."
        ],
        "rows": [
          [
            "&&",
            "Mệnh Đề Logic",
            "Trả về true nếu cả hai phát biểu đều đúng",
            "x < 5 && x < 10",
            "Hãy thử làm vậy."
          ],
          [
            "",
            "Mệnh Đề Logic Hoặc",
            "Trả về true nếu một trong hai phát biểu đúng",
            "x < 5",
            "x < 4",
            "Hãy thử làm vậy."
          ],
          [
            "!",
            "Cổng NOT luân lýStencils",
            "Đảo ngược kết quả, trả về false nếu kết quả là true",
            "!(x < 5 && x < 10)",
            "Hãy thử làm vậy."
          ]
        ]
      }
    ],
    "useCases": [
      "Lưu trữ và biến đổi dữ liệu trong mọi bài tập.",
      "Chọn kiểu đúng để tránh lãng phí bộ nhớ/sai chính xác."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Nhầm = (gán) với == (so sánh) trong biểu thức.",
        "why": "Toán tử sai cho kết quả sai mà không báo lỗi.",
        "correct": "double-click kiểm tra: so sánh thì ==."
      }
    ],
    "keyTakeaways": [
      "Cũng như toán tử so sánh, bạn có thể kiểm tra giá trị true (1) hoặc false (0) bằng toán tử logic.",
      "Toán tử logic dùng để xác định quan hệ logic giữa các biến hoặc giá trị:",
      "Bạn sẽ học nhiều hơn về true/false trong chương sau."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_operators_logical.asp"
  },
  {
    "id": "cpp-operators-precedence",
    "slug": "operators-precedence",
    "title": "Thứ tự ưu tiên toán tử (Operator Precedence)",
    "titleEn": "C++ Operator Precedence",
    "num": 31,
    "chapter": "03 · Toán tử",
    "topic": "Variables & Types",
    "difficulty": "beginner",
    "estimatedTime": 11,
    "prerequisites": [
      "cpp-operators-logical"
    ],
    "description": "Khi tính toán chứa nhiều hơn một toán tử, C++ theo quy tắc thứ tự ưu tiên để quyết định phần nào tính trước.",
    "objectives": [
      "Nắm được: Độ ưu tiên toán tử trong C++.",
      "Trình bày được: Ưu tiên của người vận hành; Ví dụ; Tại sao điều này xảy ra?.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Khi tính toán chứa nhiều hơn một toán tử, C++ theo quy tắc thứ tự ưu tiên để quyết định phần nào tính trước. Ví dụ, phép nhân thực hiện trước phép cộng: Tự trải nghiệm Trong 2 + 3 * 4, phép nhân tính trước nên kết quả là 14. Nếu muốn cộng trước, phải dùng ngoặc: (2 + 3) * 4, cho kết quả 20. Mẹo: luôn dùng ngoặc đơn ( ) nếu bạn muốn chắc chắn phép tính được thực hiện theo thứ tự bạn mong đợi. Nó cũng làm code dễ đọc hơn. Một số toán tử phổ biến trong C++, từ ưu tiên cao đến thấp: Phép trừ và cộng thực hiện từ trái sang phải, trừ khi thêm ngoặc đơn: Tự trải nghiệm Nhớ rằng: ngoặc đơn luôn tính trước. Dùng nó để kiểm soát thứ tự tính toán."
    },
    "sections": [
      "Ưu tiên của người vận hành",
      "Ví dụ",
      "Tại sao điều này xảy ra?",
      "Thứ Tự Của Toán Tử",
      "Đánh đập khách hàng, vậy là đáng tin tưởng à?"
    ],
    "syntax": [
      {
        "code": "int result1 = 2 + 3 * 4;     // 2 + 12 = 14\nint result2 = (2 + 3) * 4;   // 5 * 4 = 20\n\ncout << result1 << \"\\n\";\ncout << result2 << \"\\n\";",
        "explanation": "Ví dụ, phép nhân thực hiện trước phép cộng:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int result1 = 2 + 3 * 4;     // 2 + 12 = 14\n  int result2 = (2 + 3) * 4;   // 5 * 4 = 20\n\n  cout << result1 << \"\\n\";\n  cout << result2 << \"\\n\";\n  return 0;\n}\n",
        "output": "14\n20",
        "explanation": "Ví dụ, phép nhân thực hiện trước phép cộng:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int result1 = 10 - 2 + 5;    // (10 - 2) + 5 = 13\n  int result2 = 10 - (2 + 5);  // 10 - 7 = 3\n\n  cout << result1 << \"\\n\";\n  cout << result2 << \"\\n\";\n  return 0;\n}\n",
        "output": "13\n3",
        "explanation": "Phép trừ và cộng thực hiện từ trái sang phải, trừ khi thêm ngoặc đơn:"
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ và biến đổi dữ liệu trong mọi bài tập.",
      "Chọn kiểu đúng để tránh lãng phí bộ nhớ/sai chính xác."
    ],
    "notes": [
      "Mẹo: luôn dùng ngoặc đơn ( ) nếu bạn muốn chắc chắn phép tính được thực hiện theo thứ tự bạn mong đợi. Nó cũng làm code dễ đọc hơn."
    ],
    "commonMistakes": [
      {
        "wrong": "Nhầm = (gán) với == (so sánh) trong biểu thức.",
        "why": "Toán tử sai cho kết quả sai mà không báo lỗi.",
        "correct": "double-click kiểm tra: so sánh thì ==."
      }
    ],
    "keyTakeaways": [
      "Khi tính toán chứa nhiều hơn một toán tử, C++ theo quy tắc thứ tự ưu tiên để quyết định phần nào tính trước.",
      "Ví dụ, phép nhân thực hiện trước phép cộng:",
      "Tự trải nghiệm",
      "Trong 2 + 3 * 4, phép nhân tính trước nên kết quả là 14."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_operators_precedence.asp"
  },
  {
    "id": "cpp-challenges-operators",
    "slug": "challenges-operators",
    "title": "Thử thách về toán tử (Operators Challenge)",
    "titleEn": "C++ Operators Challenge",
    "num": 32,
    "chapter": "03 · Toán tử",
    "topic": "Variables & Types",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-operators-precedence"
    ],
    "description": "Kiểm tra hiểu biết về toán tử C++ bằng thử thách code nhỏ.",
    "objectives": [
      "Nắm được: Thử thách về toán tử trong C++.",
      "Trình bày được: Thử thách: tính tổng chi phí của một mặt hàng.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Kiểm tra hiểu biết về toán tử C++ bằng thử thách code nhỏ."
    },
    "sections": [
      "Thử thách: tính tổng chi phí của một mặt hàng"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int a = 7, b = 4;\n  cout << a + b << \" \" << a % b;\n  return 0;\n}",
        "explanation": "Hai số nguyên và vài phép toán — thay đổi biểu thức để kiểm tra kết quả."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int a = 7, b = 4;\n  cout << a + b << \" \" << a % b;\n  return 0;\n}",
        "output": "11 3",
        "explanation": "Hai số nguyên và vài phép toán — thay đổi biểu thức để kiểm tra kết quả."
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ và biến đổi dữ liệu trong mọi bài tập.",
      "Chọn kiểu đúng để tránh lãng phí bộ nhớ/sai chính xác."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Nhầm = (gán) với == (so sánh) trong biểu thức.",
        "why": "Toán tử sai cho kết quả sai mà không báo lỗi.",
        "correct": "double-click kiểm tra: so sánh thì ==."
      }
    ],
    "keyTakeaways": [
      "Kiểm tra hiểu biết về toán tử C++ bằng thử thách code nhỏ."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_challenges_operators.asp"
  },
  {
    "id": "cpp-strings",
    "slug": "strings",
    "title": "Chuỗi trong C++ (std::string)",
    "titleEn": "C++ Strings",
    "num": 33,
    "chapter": "04 · Chuỗi (Strings)",
    "topic": "Strings & Vectors",
    "difficulty": "beginner",
    "estimatedTime": 14,
    "prerequisites": [],
    "description": "Chuỗi dùng để lưu văn bản/ký tự.",
    "objectives": [
      "Nắm được: Chuỗi C++.",
      "Trình bày được: Chuỗi C++; Ví dụ.",
      "Chạy và sửa được 3 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Chuỗi dùng để lưu văn bản/ký tự. Ví dụ, \"Hello World\" là một chuỗi. Biến chuỗi chứa một tập hợp ký tự đặt trong nháy kép ( \"\" ): Tạo biến kiểu string và gán giá trị: Để dùng chuỗi, phải include thêm tệp header trong mã nguồn, đó là thư viện <string>: Lưu ý: chuỗi có thể chứa nhiều từ, khoảng trắng và dấu câu:"
    },
    "sections": [
      "Chuỗi C++",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "string greeting = \"Hello\";",
        "explanation": "Tạo biến kiểu string và gán giá trị:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <string>\nusing namespace std;\nint main() {\n  string greeting = \"Hello\";\n  return 0;\n}\n",
        "output": "",
        "explanation": "Tạo biến kiểu string và gán giá trị:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <string>\n#include <iostream>\nusing namespace std;\n\nint main() {\n  // Include the string library\n\n  // Create a string variable\n  string greeting = \"Hello\";\n\n  // Print the string\n  cout << greeting;\n  return 0;\n}\n",
        "output": "Hello",
        "explanation": "Để dùng chuỗi, phải include thêm tệp header trong mã nguồn, đó là thư viện <string>:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string greeting = \"Hello and welcome!\";\n   cout << greeting;\n  return 0;\n}\n",
        "output": "Hello and welcome!",
        "explanation": "Chạy thử và tự sửa code để cảm nhận cách nó hoạt động."
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý văn bản, tên, mô tả.",
      "Lưu danh sách thay đổi kích thước."
    ],
    "notes": [
      "Lưu ý: chuỗi có thể chứa nhiều từ, khoảng trắng và dấu câu:"
    ],
    "commonMistakes": [
      {
        "wrong": "Quên #include <string> khi dùng std::string.",
        "why": "string không phải kiểu dựng sẵn — thiếu header sẽ không biên dịch.",
        "correct": "#include <string> rồi mới dùng string."
      },
      {
        "wrong": "Không kiểm tra file mở thành công trước khi đọc/ghi.",
        "why": "Thao tác trên file mở thất bại âm thầm hoặc crash.",
        "correct": "if (myFile) { ... } hoặc if (!myFile.is_open()) return;"
      }
    ],
    "keyTakeaways": [
      "Chuỗi dùng để lưu văn bản/ký tự.",
      "Ví dụ, \"Hello World\" là một chuỗi.",
      "Biến chuỗi chứa một tập hợp ký tự đặt trong nháy kép ( \"\" ):",
      "Tạo biến kiểu string và gán giá trị:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_strings.asp"
  },
  {
    "id": "cpp-strings-concat",
    "slug": "strings-concat",
    "title": "Nối chuỗi (String Concatenation)",
    "titleEn": "C++ String Concatenation",
    "num": 34,
    "chapter": "04 · Chuỗi (Strings)",
    "topic": "Strings & Vectors",
    "difficulty": "beginner",
    "estimatedTime": 14,
    "prerequisites": [
      "cpp-strings"
    ],
    "description": "Toán tử + có thể dùng giữa các chuỗi để ghép chúng thành chuỗi mới. Đó gọi là nối chuỗi:",
    "objectives": [
      "Nắm được: Nối chuỗi trong C++.",
      "Trình bày được: Nối chuỗi; Ví dụ; Bổ Sung.",
      "Chạy và sửa được 3 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Toán tử + có thể dùng giữa các chuỗi để ghép chúng thành chuỗi mới. Đó gọi là nối chuỗi: Ở ví dụ trên, ta thêm khoảng trắng sau firstName để tạo khoảng trống giữa John và Doe khi xuất. Tuy nhiên cũng có thể thêm khoảng trắng bằng nháy (\" \" hoặc ' '): String trong C++ thực chất là một object chứa các hàm thao tác trên chuỗi. Ví dụ, cũng có thể nối chuỗi bằng append(): Mẹo: danh sách hàm string hữu ích khác ở String Functions Reference."
    },
    "sections": [
      "Nối chuỗi",
      "Ví dụ",
      "Bổ Sung"
    ],
    "syntax": [
      {
        "code": "string firstName = \"John \";\nstring lastName = \"Doe\";\nstring fullName = firstName + lastName;\ncout << fullName;",
        "explanation": "Toán tử + có thể dùng giữa các chuỗi để ghép chúng thành chuỗi mới. Đó gọi là nối chuỗi:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string firstName = \"John \";\n  string lastName = \"Doe\";\n  string fullName = firstName + lastName;\n  cout << fullName;\n  return 0;\n}\n",
        "output": "John Doe",
        "explanation": "Toán tử + có thể dùng giữa các chuỗi để ghép chúng thành chuỗi mới. Đó gọi là nối chuỗi:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string firstName = \"John\";\n  string lastName = \"Doe\";\n  string fullName = firstName + \" \" + lastName;\n  cout << fullName;\n  return 0;\n}\n",
        "output": "John Doe",
        "explanation": "Ở ví dụ trên, ta thêm khoảng trắng sau firstName để tạo khoảng trống giữa John và Doe khi xuất. Tuy nhiên cũng có thể thêm khoảng trắng bằng nháy (\" \" hoặc ' '):"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string firstName = \"John \";\n  string lastName = \"Doe\";\n  string fullName = firstName.append(lastName);\n  cout << fullName;\n  return 0;\n}\n",
        "output": "John Doe",
        "explanation": "String trong C++ thực chất là một object chứa các hàm thao tác trên chuỗi. Ví dụ, cũng có thể nối chuỗi bằng append():"
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý văn bản, tên, mô tả.",
      "Lưu danh sách thay đổi kích thước."
    ],
    "notes": [
      "Mẹo: danh sách hàm string hữu ích khác ở String Functions Reference."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      },
      {
        "wrong": "Quên #include <string> khi dùng std::string.",
        "why": "string không phải kiểu dựng sẵn — thiếu header sẽ không biên dịch.",
        "correct": "#include <string> rồi mới dùng string."
      }
    ],
    "keyTakeaways": [
      "Toán tử + có thể dùng giữa các chuỗi để ghép chúng thành chuỗi mới. Đó gọi là nối chuỗi:",
      "Ở ví dụ trên, ta thêm khoảng trắng sau firstName để tạo khoảng trống giữa John và Doe khi xuất. Tuy nhiên cũng có thể th êm khoảng trắng bằng nháy (\" \" hoặc ' ')…",
      "String trong C++ thực chất là một object chứa các hàm thao tác trên chuỗi. Ví dụ, cũng có thể nối chuỗi bằng append():",
      "Mẹo: danh sách hàm string hữu ích khác ở String Functions Reference."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_strings_concat.asp"
  },
  {
    "id": "cpp-strings-numbers",
    "slug": "strings-numbers",
    "title": "Số và chuỗi (Numbers & Strings)",
    "titleEn": "C++ Numbers and Strings",
    "num": 35,
    "chapter": "04 · Chuỗi (Strings)",
    "topic": "Strings & Vectors",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-strings-concat"
    ],
    "description": "C++ dùng toán tử + cho cả phép cộng và phép nối chuỗi.",
    "objectives": [
      "Nắm được: Số và chuỗi trong C++.",
      "Trình bày được: Cộng số và chuỗi; Ví dụ.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "C++ dùng toán tử + cho cả phép cộng và phép nối chuỗi. Số được cộng. Chuỗi được nối. Nếu cộng hai số, kết quả sẽ là một số: Nếu cộng hai chuỗi, kết quả là một chuỗi được nối: Nếu cộng một số với chuỗi, sẽ phát sinh lỗi:"
    },
    "sections": [
      "Cộng số và chuỗi",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "string x = \"10\";\n   int y = 20;\n   string z = x + y;",
        "explanation": "Nếu cộng một số với chuỗi, sẽ phát sinh lỗi:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "string x = \"10\";\n   int y = 20;\n   string z = x + y;",
        "output": "",
        "explanation": "Nếu cộng một số với chuỗi, sẽ phát sinh lỗi:",
        "runnable": false
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý văn bản, tên, mô tả.",
      "Lưu danh sách thay đổi kích thước."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Quên #include <string> khi dùng std::string.",
        "why": "string không phải kiểu dựng sẵn — thiếu header sẽ không biên dịch.",
        "correct": "#include <string> rồi mới dùng string."
      },
      {
        "wrong": "Bắt exception rồi bỏ qua không xử lý.",
        "why": "Lỗi bị nuốt, chương trình tiếp tục ở trạng thái sai.",
        "correct": "Catch rồi xử lý hoặc rethrow khi cần."
      }
    ],
    "keyTakeaways": [
      "C++ dùng toán tử + cho cả phép cộng và phép nối chuỗi.",
      "Số được cộng. Chuỗi được nối.",
      "Nếu cộng hai số, kết quả sẽ là một số:",
      "Nếu cộng hai chuỗi, kết quả là một chuỗi được nối:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_strings_numbers.asp"
  },
  {
    "id": "cpp-strings-length",
    "slug": "strings-length",
    "title": "Độ dài chuỗi (String Length / size)",
    "titleEn": "C++ String Length",
    "num": 36,
    "chapter": "04 · Chuỗi (Strings)",
    "topic": "Strings & Vectors",
    "difficulty": "beginner",
    "estimatedTime": 11,
    "prerequisites": [
      "cpp-strings-numbers"
    ],
    "description": "Để lấy độ dài chuỗi, dùng hàm length():",
    "objectives": [
      "Nắm được: Độ dài chuỗi C++.",
      "Trình bày được: Chiều Dài Chuỗi Ký Tự; Ví dụ.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Để lấy độ dài chuỗi, dùng hàm length(): Mẹo: bạn có thể gặp code C++ dùng size() để lấy độ dài chuỗi. Đó chỉ là bí danh của length()."
    },
    "sections": [
      "Chiều Dài Chuỗi Ký Tự",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "string txt = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\ncout << \"The length of the txt string is: \" << txt.length();",
        "explanation": "Để lấy độ dài chuỗi, dùng hàm length():"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string txt = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n  cout << \"The length of the txt string is: \" << txt.length();\n  return 0;\n}\n",
        "output": "The length of the txt string is: 26",
        "explanation": "Để lấy độ dài chuỗi, dùng hàm length():"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string txt = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n  cout << \"The length of the txt string is: \" << txt.size();\n  return 0;\n}\n",
        "output": "The length of the txt string is: 26",
        "explanation": "Chạy thử và tự sửa code để cảm nhận cách nó hoạt động."
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý văn bản, tên, mô tả.",
      "Lưu danh sách thay đổi kích thước."
    ],
    "notes": [
      "Mẹo: bạn có thể gặp code C++ dùng size() để lấy độ dài chuỗi. Đó chỉ là bí danh của length()."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      },
      {
        "wrong": "Quên #include <string> khi dùng std::string.",
        "why": "string không phải kiểu dựng sẵn — thiếu header sẽ không biên dịch.",
        "correct": "#include <string> rồi mới dùng string."
      }
    ],
    "keyTakeaways": [
      "Để lấy độ dài chuỗi, dùng hàm length():",
      "Mẹo: bạn có thể gặp code C++ dùng size() để lấy độ dài chuỗi. Đó chỉ là bí danh của length()."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_strings_length.asp"
  },
  {
    "id": "cpp-strings-access",
    "slug": "strings-access",
    "title": "Truy cập ký tự trong chuỗi (Access Strings)",
    "titleEn": "C++ Accessing Strings",
    "num": 37,
    "chapter": "04 · Chuỗi (Strings)",
    "topic": "Strings & Vectors",
    "difficulty": "beginner",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-strings-length"
    ],
    "description": "Bạn truy cập ký tự trong chuỗi bằng chỉ mục trong ngoặc vuông [].",
    "objectives": [
      "Nắm được: Truy cập chuỗi trong C++.",
      "Trình bày được: Chuỗi truy cập; Ví dụ; Thay đổi ký tự trong chuỗi.",
      "Chạy và sửa được 5 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Bạn truy cập ký tự trong chuỗi bằng chỉ mục trong ngoặc vuông []. Ví dụ này in ký tự đầu tiên của myString: Lưu ý: chỉ mục chuỗi bắt đầu từ 0: [0] là ký tự đầu, [1] là ký tự thứ hai, v.v. Ví dụ này in ký tự thứ hai của myString: Để in ký tự cuối của chuỗi, dùng đoạn mã sau: Để đổi giá trị một ký tự trong chuỗi, hãy chỉ số mục và dùng nháy đơn: Thư viện <string> cũng có hàm at() để truy cập ký tự trong chuỗi: Mẹo: danh sách hàm string hữu ích khác ở String Functions Reference."
    },
    "sections": [
      "Chuỗi truy cập",
      "Ví dụ",
      "Thay đổi ký tự trong chuỗi",
      "Chức năng at()"
    ],
    "syntax": [
      {
        "code": "string myString = \"Hello\";\ncout << myString[0];\n// Outputs H",
        "explanation": "Ví dụ này in ký tự đầu tiên của myString:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string myString = \"Hello\";\n  cout << myString[0];\n  // Outputs H\n  return 0;\n}\n",
        "output": "H",
        "explanation": "Ví dụ này in ký tự đầu tiên của myString:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string myString = \"Hello\";\n  cout << myString[1];\n  // Outputs e\n  return 0;\n}\n",
        "output": "e",
        "explanation": "Ví dụ này in ký tự thứ hai của myString:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string myString = \"Hello\";\n  cout << myString[myString.length() - 1];\n     // Outputs o\n  return 0;\n}\n",
        "output": "o",
        "explanation": "Để in ký tự cuối của chuỗi, dùng đoạn mã sau:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string myString = \"Hello\";\n  myString[0] = 'J';\n  cout << myString;\n  // Outputs Jello instead of Hello\n  return 0;\n}\n",
        "output": "Jello",
        "explanation": "Để đổi giá trị một ký tự trong chuỗi, hãy chỉ số mục và dùng nháy đơn:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string myString = \"Hello\";\n  cout << myString; // Outputs Hello\n\n     cout << myString.at(0);  // First character\n  cout << myString.at(1);  // Second character\n  cout << myString.at(myString.length() - 1);  // Last character\n\n  myString.at(0) = 'J';\n     cout << myString;  // Outputs Jello\n  return 0;\n}\n",
        "output": "HelloHeoJello",
        "explanation": "Thư viện <string> cũng có hàm at() để truy cập ký tự trong chuỗi:"
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý văn bản, tên, mô tả.",
      "Lưu danh sách thay đổi kích thước."
    ],
    "notes": [
      "Lưu ý: chỉ mục chuỗi bắt đầu từ 0: [0] là ký tự đầu, [1] là ký tự thứ hai, v.v.",
      "Mẹo: danh sách hàm string hữu ích khác ở String Functions Reference."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      },
      {
        "wrong": "Quên #include <string> khi dùng std::string.",
        "why": "string không phải kiểu dựng sẵn — thiếu header sẽ không biên dịch.",
        "correct": "#include <string> rồi mới dùng string."
      }
    ],
    "keyTakeaways": [
      "Bạn truy cập ký tự trong chuỗi bằng chỉ mục trong ngoặc vuông [].",
      "Ví dụ này in ký tự đầu tiên của myString:",
      "Lưu ý: chỉ mục chuỗi bắt đầu từ 0: [0] là ký tự đầu, [1] là ký tự thứ hai, v.v.",
      "Ví dụ này in ký tự thứ hai của myString:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_strings_access.asp"
  },
  {
    "id": "cpp-strings-esc",
    "slug": "strings-esc",
    "title": "Ký tự đặc biệt trong chuỗi (Escape Characters)",
    "titleEn": "C++ Strings Special Characters (Escape Characters)",
    "num": 38,
    "chapter": "04 · Chuỗi (Strings)",
    "topic": "Strings & Vectors",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-strings-access"
    ],
    "description": "Vì chuỗi phải viết trong ngoặc kép, C++ sẽ hiểu nhầm chuỗi này và báo lỗi:",
    "objectives": [
      "Nắm được: Ký tự đặc biệt trong chuỗi C++.",
      "Trình bày được: Chuỗi - ký tự đặc biệt.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Vì chuỗi phải viết trong ngoặc kép, C++ sẽ hiểu nhầm chuỗi này và báo lỗi: Giải pháp tránh lỗi này là dùng ký tự thoát backslash. Ký tự thoát backslash ( \\ ) biến ký tự đặc biệt thành ký tự thường trong chuỗi: Trình tự \" chèn dấu nháy kép vào một chuỗi: Ví dụ string txt = \"We are the so-called \\\"Vikings\\\" from the north.\"; Thử ngay » Trình tự ' chèn dấu nháy đơn vào một chuỗi: Ví dụ string txt = \"It\\'s alright.\"; Thử ngay » Trình tự \\ chèn một dấu sổ chéo đơn vào một chuỗi: Ví dụ string txt = \"The…"
    },
    "sections": [
      "Chuỗi - ký tự đặc biệt"
    ],
    "syntax": [
      {
        "code": "string txt = \"We are the so-called \"Vikings\" from the north.\";",
        "explanation": "Vì chuỗi phải viết trong ngoặc kép, C++ sẽ hiểu nhầm chuỗi này và báo lỗi:"
      }
    ],
    "examples": [
      {
        "title": "Chuỗi - ký tự đặc biệt",
        "code": "string txt = \"We are the so-called \"Vikings\" from the north.\";",
        "output": "",
        "explanation": "Vì chuỗi phải viết trong ngoặc kép, C++ sẽ hiểu nhầm chuỗi này và báo lỗi:",
        "runnable": false
      }
    ],
    "tables": [
      {
        "title": "Chuỗi - ký tự đặc biệt",
        "header": [
          "Nhân vật thoát hiểm",
          "Kết quả",
          "Mô tả"
        ],
        "rows": [
          [
            "\\'",
            "'",
            "Báo giá đơn"
          ],
          [
            "\\\"",
            "\"",
            "Báo giá gấp đôi"
          ],
          [
            "\\\\",
            "\\",
            "Xoá lùi"
          ]
        ]
      },
      {
        "title": "Chuỗi - ký tự đặc biệt",
        "header": [
          "Ký tự Thoát",
          "Kết quả",
          "Hãy thử làm vậy."
        ],
        "rows": [
          [
            "\\n",
            "Dòng mới",
            "Hãy thử làm vậy."
          ],
          [
            "\\t",
            "Vấu",
            "Hãy thử làm vậy."
          ]
        ]
      }
    ],
    "useCases": [
      "Xử lý văn bản, tên, mô tả.",
      "Lưu danh sách thay đổi kích thước."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Quên #include <string> khi dùng std::string.",
        "why": "string không phải kiểu dựng sẵn — thiếu header sẽ không biên dịch.",
        "correct": "#include <string> rồi mới dùng string."
      },
      {
        "wrong": "Bắt exception rồi bỏ qua không xử lý.",
        "why": "Lỗi bị nuốt, chương trình tiếp tục ở trạng thái sai.",
        "correct": "Catch rồi xử lý hoặc rethrow khi cần."
      }
    ],
    "keyTakeaways": [
      "Vì chuỗi phải viết trong ngoặc kép, C++ sẽ hiểu nhầm chuỗi này và báo lỗi:",
      "Giải pháp tránh lỗi này là dùng ký tự thoát backslash.",
      "Ký tự thoát backslash ( \\ ) biến ký tự đặc biệt thành ký tự thường trong chuỗi:",
      "Trình tự \" chèn dấu nháy kép vào một chuỗi: Ví dụ string txt = \"We are the so-called \\\"Vikings\\\" from the north.\"; Thử n…"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_strings_esc.asp"
  },
  {
    "id": "cpp-strings-input",
    "slug": "strings-input",
    "title": "Nhập chuỗi với getline (User Input Strings)",
    "titleEn": "C++ User Input Strings",
    "num": 39,
    "chapter": "04 · Chuỗi (Strings)",
    "topic": "Strings & Vectors",
    "difficulty": "beginner",
    "estimatedTime": 14,
    "prerequisites": [
      "cpp-strings-esc"
    ],
    "description": "Có thể dùng toán tử trích xuất >> trên cin để lưu chuỗi người dùng nhập:",
    "objectives": [
      "Nắm được: Chuỗi nhập từ người dùng trong C++.",
      "Trình bày được: Chuỗi nhập của người dùng; Ví dụ.",
      "Chạy và sửa được 3 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Có thể dùng toán tử trích xuất >> trên cin để lưu chuỗi người dùng nhập: Tuy nhiên, cin coi khoảng trắng (space, tab, v.v.) là ký tự kết thúc, nghĩa là nó chỉ lưu được một từ (dù bạn gõ nhiều từ): Từ ví dụ trên, bạn hẳn mong chương trình in \"John Doe\", nhưng nó chỉ in \"John\". Vì vậy khi làm việc với chuỗi, ta thường dùng getline() để đọc cả dòng văn bản."
    },
    "sections": [
      "Chuỗi nhập của người dùng",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "string firstName;\ncout << \"Type your first name: \";\ncin >> firstName; // get user input from the keyboard\ncout << \"Your name is: \" << firstName;\n\n// Type your first name: John\n// Your name is: John",
        "explanation": "Có thể dùng toán tử trích xuất >> trên cin để lưu chuỗi người dùng nhập:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string firstName;\n  cout << \"Type your first name: \";\n  cin >> firstName; // get user input from the keyboard\n  cout << \"Your name is: \" << firstName;\n\n  // Type your first name: John\n  // Your name is: John\n  return 0;\n}\n",
        "output": "",
        "explanation": "Có thể dùng toán tử trích xuất >> trên cin để lưu chuỗi người dùng nhập:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string fullName;\n  cout << \"Type your full name: \";\n  cin >> fullName;\n  cout << \"Your name is: \" << fullName;\n\n  // Type your full name: John Doe\n  // Your name is: John\n  return 0;\n}\n",
        "output": "",
        "explanation": "Tuy nhiên, cin coi khoảng trắng (space, tab, v.v.) là ký tự kết thúc, nghĩa là nó chỉ lưu được một từ (dù bạn gõ nhiều từ):"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string fullName;\n  cout << \"Type your full name: \";\n     getline (cin, fullName);\n  cout << \"Your name is: \" << fullName;\n\n  // Type your full name: John Doe\n  // Your name is: John Doe\n  return 0;\n}\n",
        "output": "",
        "explanation": "Từ ví dụ trên, bạn hẳn mong chương trình in \"John Doe\", nhưng nó chỉ in \"John\". Vì vậy khi làm việc với chuỗi, ta thường dùng getline() để đọc cả dòng văn bản."
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý văn bản, tên, mô tả.",
      "Lưu danh sách thay đổi kích thước."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Quên #include <string> khi dùng std::string.",
        "why": "string không phải kiểu dựng sẵn — thiếu header sẽ không biên dịch.",
        "correct": "#include <string> rồi mới dùng string."
      },
      {
        "wrong": "Nhầm = (gán) với == (so sánh) trong biểu thức.",
        "why": "Toán tử sai cho kết quả sai mà không báo lỗi.",
        "correct": "double-click kiểm tra: so sánh thì ==."
      }
    ],
    "keyTakeaways": [
      "Có thể dùng toán tử trích xuất >> trên cin để lưu chuỗi người dùng nhập:",
      "Tuy nhiên, cin coi khoảng trắng (space, tab, v.v.) là ký tự kết thúc, nghĩa là nó chỉ lưu được một từ (dù bạn gõ nhiều t ừ)…",
      "Từ ví dụ trên, bạn hẳn mong chương trình in \"John Doe\", nhưng nó chỉ in \"John\". Vì vậy khi làm việc với chuỗi, ta thường  dùng getline() để đọc cả dòng văn bản.…"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_strings_input.asp"
  },
  {
    "id": "cpp-strings-namespace",
    "slug": "strings-namespace",
    "title": "String và std Namespace (String Namespace)",
    "titleEn": "C++ Strings",
    "num": 40,
    "chapter": "04 · Chuỗi (Strings)",
    "topic": "Strings & Vectors",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-strings-input"
    ],
    "description": "Bạn có thể thấy một số chương trình C++ chạy mà không cần thư viện standard namespace. Dòng using namespace std có thể được bỏ và thay bằng từ khóa std, theo sau là toán tử :: cho các đối tượng string (và cout):",
    "objectives": [
      "Nắm được: Chuỗi C++.",
      "Trình bày được: Bỏ qua Không gian tên; Ví dụ.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Bạn có thể thấy một số chương trình C++ chạy mà không cần thư viện standard namespace. Dòng using namespace std có thể được bỏ và thay bằng từ khóa std, theo sau là toán tử :: cho các đối tượng string (và cout): Tùy bạn có muốn include thư viện standard namespace hay không. Trong hướng dẫn, chúng tôi sẽ tiếp tục include thư viện này."
    },
    "sections": [
      "Bỏ qua Không gian tên",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\n#include <string>\n// using namespace std; - Remove this line\n\nint main() {\n    std::string greeting = \"Hello\";\n  std::cout << greeting;\n  return 0;\n}",
        "explanation": "Bạn có thể thấy một số chương trình C++ chạy mà không cần thư viện standard namespace. Dòng using namespace std có thể được bỏ và thay bằng từ khóa std, theo sau là toán tử :: cho các đối tượng string (và cout):"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n// using namespace std; - Remove this line\n\nint main() {\n    std::string greeting = \"Hello\";\n  std::cout << greeting;\n  return 0;\n}",
        "output": "Hello",
        "explanation": "Bạn có thể thấy một số chương trình C++ chạy mà không cần thư viện standard namespace. Dòng using namespace std có thể được bỏ và thay bằng từ khóa std, theo sau là toán tử :: cho các đối tượng string (và cout):"
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý văn bản, tên, mô tả.",
      "Lưu danh sách thay đổi kích thước."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Quên #include <string> khi dùng std::string.",
        "why": "string không phải kiểu dựng sẵn — thiếu header sẽ không biên dịch.",
        "correct": "#include <string> rồi mới dùng string."
      },
      {
        "wrong": "Nhầm = (gán) với == (so sánh) trong biểu thức.",
        "why": "Toán tử sai cho kết quả sai mà không báo lỗi.",
        "correct": "double-click kiểm tra: so sánh thì ==."
      }
    ],
    "keyTakeaways": [
      "Bạn có thể thấy một số chương trình C++ chạy mà không cần thư viện standard namespace. Dòng using namespace std có thể đ…",
      "Tùy bạn có muốn include thư viện standard namespace hay không.",
      "Trong hướng dẫn, chúng tôi sẽ tiếp tục include thư viện này."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_strings_namespace.asp"
  },
  {
    "id": "cpp-strings-cstyle",
    "slug": "strings-cstyle",
    "title": "C-Style Strings (Chuỗi kiểu C)",
    "titleEn": "C++ C-Style Strings",
    "num": 41,
    "chapter": "04 · Chuỗi (Strings)",
    "topic": "Strings & Vectors",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-strings-namespace"
    ],
    "description": "Chuỗi kiểu C tạo bằng kiểu char thay vì string.",
    "objectives": [
      "Nắm được: Chuỗi C++ C-Style.",
      "Trình bày được: Chuỗi C-Style; Ví dụ.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Chuỗi kiểu C tạo bằng kiểu char thay vì string. Tên gọi đến từ ngôn ngữ C, vốn không có kiểu string để tạo biến chuỗi dễ dàng như nhiều ngôn ngữ khác. Thay vào đó, trong C bạn phải dùng kiểu char và tạo mảng ký tự để tạo một \"chuỗi\". Vì C++ phát triển từ C, nó tiếp tục hỗ trợ cách tạo chuỗi kiểu cũ này: Lưu ý: làm việc với kiểu string chuẩn thuận tiện hơn chuỗi kiểu C. Tuy nhiên, một lý do người dùng tiếp tục dùng chuỗi kiểu C là họ có quyền truy cập các hàm từ thư viện chuẩn C. Danh sách mọi hàm xử lý chuỗi kiểu C ở CString Functions Reference."
    },
    "sections": [
      "Chuỗi C-Style",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n  string txt = \"C++\";\n  cout << txt + \" is fun\" << \" \" << txt.size();\n  return 0;\n}",
        "explanation": "Chuỗi std::string với nối chuỗi và độ dài — chỗ để thử các hàm chuỗi."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n  string txt = \"C++\";\n  cout << txt + \" is fun\" << \" \" << txt.size();\n  return 0;\n}",
        "output": "C++ is fun 3",
        "explanation": "Chuỗi std::string với nối chuỗi và độ dài — chỗ để thử các hàm chuỗi."
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý văn bản, tên, mô tả.",
      "Lưu danh sách thay đổi kích thước."
    ],
    "notes": [
      "Lưu ý: làm việc với kiểu string chuẩn thuận tiện hơn chuỗi kiểu C. Tuy nhiên, một lý do người dùng tiếp tục dùng chuỗi kiểu C là họ có quyền truy cập các hàm từ thư viện chuẩn C."
    ],
    "commonMistakes": [
      {
        "wrong": "Truy cập phần tử ngoài chỉ mục hợp lệ (ví dụ arr[5] cho mảng 5 phần tử).",
        "why": "Chỉ mục hợp lệ là 0..n-1; vượt biên là undefined behavior.",
        "correct": "Duyệt i từ 0 đến n-1."
      },
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      }
    ],
    "keyTakeaways": [
      "Chuỗi kiểu C tạo bằng kiểu char thay vì string.",
      "Tên gọi đến từ ngôn ngữ C, vốn không có kiểu string để tạo biến chuỗi dễ dàng như nhiều ngôn ngữ khác. Thay vào đó, tron…",
      "Vì C++ phát triển từ C, nó tiếp tục hỗ trợ cách tạo chuỗi kiểu cũ này:",
      "Lưu ý: làm việc với kiểu string chuẩn thuận tiện hơn chuỗi kiểu C. Tuy nhiên, một lý do người dùng tiếp tục dùng chuỗi k iểu C là họ có quyền truy cập các hàm từ thư viện chuẩn C.…"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_strings_cstyle.asp"
  },
  {
    "id": "cpp-challenges-strings",
    "slug": "challenges-strings",
    "title": "Thử thách về chuỗi (Strings Challenge)",
    "titleEn": "C++ Strings Challenge",
    "num": 42,
    "chapter": "04 · Chuỗi (Strings)",
    "topic": "Strings & Vectors",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-strings-cstyle"
    ],
    "description": "Kiểm tra hiểu biết về chuỗi C++ bằng thử thách code nhỏ.",
    "objectives": [
      "Nắm được: Thử thách về chuỗi trong C++.",
      "Trình bày được: Thử thách: tạo lời chào.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Kiểm tra hiểu biết về chuỗi C++ bằng thử thách code nhỏ."
    },
    "sections": [
      "Thử thách: tạo lời chào"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n  string txt = \"C++\";\n  cout << txt + \" is fun\" << \" \" << txt.size();\n  return 0;\n}",
        "explanation": "Chuỗi std::string với nối chuỗi và độ dài — chỗ để thử các hàm chuỗi."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n  string txt = \"C++\";\n  cout << txt + \" is fun\" << \" \" << txt.size();\n  return 0;\n}",
        "output": "C++ is fun 3",
        "explanation": "Chuỗi std::string với nối chuỗi và độ dài — chỗ để thử các hàm chuỗi."
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý văn bản, tên, mô tả.",
      "Lưu danh sách thay đổi kích thước."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Quên #include <string> khi dùng std::string.",
        "why": "string không phải kiểu dựng sẵn — thiếu header sẽ không biên dịch.",
        "correct": "#include <string> rồi mới dùng string."
      }
    ],
    "keyTakeaways": [
      "Kiểm tra hiểu biết về chuỗi C++ bằng thử thách code nhỏ."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_challenges_strings.asp"
  },
  {
    "id": "cpp-math",
    "slug": "math",
    "title": "Hàm toán học trong C++ (Math / cmath)",
    "titleEn": "C++ Math",
    "num": 43,
    "chapter": "05 · Toán học & Boolean",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 14,
    "prerequisites": [],
    "description": "C++ có nhiều hàm cho phép thực hiện các phép toán trên số.",
    "objectives": [
      "Nắm được: Toán C++.",
      "Trình bày được: Toán C++; Duy tối đa và tối thiểu; Ví dụ.",
      "Chạy và sửa được 3 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "C++ có nhiều hàm cho phép thực hiện các phép toán trên số. Hàm max(x, y) tìm giá trị lớn hơn giữa x và y: Và hàm min(x, y) tìm giá trị nhỏ hơn giữa x và y: Các hàm khác như sqrt (căn bậc hai), round (làm tròn) và log (logarit tự nhiên) nằm trong tệp header <cmath>: Tham chiếu đầy đủ các hàm toán học: xem C++ Math Reference."
    },
    "sections": [
      "Toán C++",
      "Duy tối đa và tối thiểu",
      "Ví dụ",
      "Thư viện C+ <cmath> +",
      "Hoàn thành tham chiếu toán học"
    ],
    "syntax": [
      {
        "code": "cout << max(5, 10);",
        "explanation": "Hàm max(x, y) tìm giá trị lớn hơn giữa x và y:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  cout << max(5, 10);\n  return 0;\n}\n",
        "output": "10",
        "explanation": "Hàm max(x, y) tìm giá trị lớn hơn giữa x và y:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  cout << min(5, 10);\n  return 0;\n}\n",
        "output": "5",
        "explanation": "Và hàm min(x, y) tìm giá trị nhỏ hơn giữa x và y:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <cmath>\n#include <iostream>\nusing namespace std;\n\nint main() {\n  // Include the cmath library\n\n  cout << sqrt(64);\n  cout << round(2.6);\n  cout << log(2);\n  return 0;\n}\n",
        "output": "830.693147",
        "explanation": "Các hàm khác như sqrt (căn bậc hai), round (làm tròn) và log (logarit tự nhiên) nằm trong tệp header <cmath>:"
      }
    ],
    "tables": [],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      },
      {
        "wrong": "Không kiểm tra file mở thành công trước khi đọc/ghi.",
        "why": "Thao tác trên file mở thất bại âm thầm hoặc crash.",
        "correct": "if (myFile) { ... } hoặc if (!myFile.is_open()) return;"
      }
    ],
    "keyTakeaways": [
      "C++ có nhiều hàm cho phép thực hiện các phép toán trên số.",
      "Hàm max(x, y) tìm giá trị lớn hơn giữa x và y:",
      "Và hàm min(x, y) tìm giá trị nhỏ hơn giữa x và y:",
      "Các hàm khác như sqrt (căn bậc hai), round (làm tròn) và log (logarit tự nhiên) nằm trong tệp header <cmath>:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_math.asp"
  },
  {
    "id": "cpp-booleans",
    "slug": "booleans",
    "title": "Kiểu Boolean (Booleans)",
    "titleEn": "C++ Booleans",
    "num": 44,
    "chapter": "05 · Toán học & Boolean",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 14,
    "prerequisites": [
      "cpp-math"
    ],
    "description": "Rất thường gặp trong lập trình, bạn cần kiểu dữ liệu chỉ nhận một trong hai giá trị, như:",
    "objectives": [
      "Nắm được: Kiểu Boolean trong C++.",
      "Trình bày được: Kiểu Boolean trong C++ (C++ Booleans); Giá trị Boolean; Ví dụ.",
      "Chạy và sửa được 3 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Rất thường gặp trong lập trình, bạn cần kiểu dữ liệu chỉ nhận một trong hai giá trị, như: Vì vậy C++ có kiểu bool, nhận giá trị true (1) hoặc false (0). Biến boolean khai báo bằng từ khóa bool, nhận giá trị true hoặc false: Từ ví dụ trên: giá trị true trả về 1, false trả về 0. Nếu muốn in true/false thành chữ thay vì 1 và 0, dùng manipulator boolalpha: Lưu ý: boolalpha không phải kiểu dữ liệu. Nó là manipulator nhập/xuất - thiết lập thay đổi cách cout hiển thị giá trị boolean. Nếu muốn trở lại mặc định (in 1 và 0), dùng noboolalpha: Lưu ý: tùy bạn chọn số 1 và 0 mặc định hay chữ true và false. Cả hai đều đúng trong C++, chuyển đổi bằng boolalpha và noboolalpha. Mẹo: đọc thêm về cout và các manipulator của nó trong tài liệu tham chiếu đối tượng cout của C++. Các ví dụ trên dùng giá trị boolean cố định. Nhưng trong chương trình thực, boolean thường là kết quả của phép so sánh - sẽ học thêm ở chương tiếp theo."
    },
    "sections": [
      "Kiểu Boolean trong C++ (C++ Booleans)",
      "Giá trị Boolean",
      "Ví dụ",
      "In true/false với boolalpha",
      "Khôi phục mặc định với noboolalpha"
    ],
    "syntax": [
      {
        "code": "bool isCodingFun = true;\nbool isFishTasty = false;\n\ncout << isCodingFun << \"\\n\";  // Outputs 1 (true)\ncout << isFishTasty << \"\\n\"; // Outputs 0 (false)",
        "explanation": "Biến boolean khai báo bằng từ khóa bool, nhận giá trị true hoặc false:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  bool isCodingFun = true;\n  bool isFishTasty = false;\n\n  cout << isCodingFun << \"\\n\";  // Outputs 1 (true)\n  cout << isFishTasty << \"\\n\"; // Outputs 0 (false)\n  return 0;\n}\n",
        "output": "1\n0",
        "explanation": "Biến boolean khai báo bằng từ khóa bool, nhận giá trị true hoặc false:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  bool isCodingFun = true;\n  bool isFishTasty = false;\n\n  cout << boolalpha; // enable printing \"true\"/\"false\"\n\n  cout << isCodingFun << \"\\n\";   // Outputs true\n  cout << isFishTasty << \"\\n\";  // Outputs false\n  return 0;\n}\n",
        "output": "true\nfalse",
        "explanation": "Nếu muốn in true/false thành chữ thay vì 1 và 0, dùng manipulator boolalpha:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  bool isCodingFun = true;\n\n  cout << boolalpha;   // print as true/false\n  cout << isCodingFun << \"\\n\";  // Outputs true\n\n  cout << noboolalpha; // reset to 1/0\n  cout << isCodingFun << \"\\n\";  // Outputs 1\n  return 0;\n}\n",
        "output": "true\n1",
        "explanation": "Nếu muốn trở lại mặc định (in 1 và 0), dùng noboolalpha:"
      }
    ],
    "tables": [],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Lưu ý: boolalpha không phải kiểu dữ liệu. Nó là manipulator nhập/xuất - thiết lập thay đổi cách cout hiển thị giá trị boolean.",
      "Lưu ý: tùy bạn chọn số 1 và 0 mặc định hay chữ true và false. Cả hai đều đúng trong C++, chuyển đổi bằng boolalpha và noboolalpha.",
      "Mẹo: đọc thêm về cout và các manipulator của nó trong tài liệu tham chiếu đối tượng cout của C++."
    ],
    "commonMistakes": [
      {
        "wrong": "Gán số 1/0 trực tiếp cho biến bool thay vì biểu thức so sánh.",
        "why": "bool nhận true/false; dùng nó cho điều kiện sẽ rõ ràng và an toàn hơn.",
        "correct": "Dùng biểu thức so sánh: bool isCoding = (x > 5);"
      }
    ],
    "keyTakeaways": [
      "Rất thường gặp trong lập trình, bạn cần kiểu dữ liệu chỉ nhận một trong hai giá trị, như:",
      "Vì vậy C++ có kiểu bool, nhận giá trị true (1) hoặc false (0).",
      "Biến boolean khai báo bằng từ khóa bool, nhận giá trị true hoặc false:",
      "Từ ví dụ trên: giá trị true trả về 1, false trả về 0."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_booleans.asp"
  },
  {
    "id": "cpp-booleans-expressions",
    "slug": "booleans-expressions",
    "title": "Biểu thức Boolean (Boolean Expressions)",
    "titleEn": "C++ Boolean Expressions",
    "num": 45,
    "chapter": "05 · Toán học & Boolean",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-booleans"
    ],
    "description": "Biểu thức Boolean là đoạn mã so sánh giá trị hoặc biến và trả về giá trị boolean: 1 (true) hoặc 0 (false).",
    "objectives": [
      "Nắm được: Biểu thức Boolean trong C++.",
      "Trình bày được: Biểu thức Boolean; Ví dụ; Lưu kết quả vào biến Boolean.",
      "Chạy và sửa được 5 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Biểu thức Boolean là đoạn mã so sánh giá trị hoặc biến và trả về giá trị boolean: 1 (true) hoặc 0 (false). Biểu thức boolean là nền tảng của việc ra quyết định trong lập trình - chúng giúp chương trình quyết định làm gì dựa trên đúng hay sai. Bạn có thể dùng toán tử so sánh, như toán tử lớn hơn ( > ), để xác định một biểu thức (hoặc biến) là đúng hay sai: Hoặc thậm chí dễ dàng hơn: Các ví dụ dưới đây dùng toán tử bằng ( == ) để đánh giá biểu thức: Bạn cũng có thể lưu kết quả so sánh vào biến bool: Lưu kết quả của x > y vào biến boolean và in ra: Lưu ý: tùy bạn lưu kết quả so sánh vào biến boolean hay dùng trực tiếp. Lưu kết quả có thể làm code dễ đọc hơn, đặc biệt nếu muốn dùng lại."
    },
    "sections": [
      "Biểu thức Boolean",
      "Ví dụ",
      "Lưu kết quả vào biến Boolean"
    ],
    "syntax": [
      {
        "code": "int x = 10;\nint y = 9;\ncout << (x > y); // returns 1 (true), because 10 is higher than 9",
        "explanation": "Bạn có thể dùng toán tử so sánh, như toán tử lớn hơn ( > ), để xác định một biểu thức (hoặc biến) là đúng hay sai:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int x = 10;\n  int y = 9;\n  cout << (x > y); // returns 1 (true), because 10 is higher than 9\n  return 0;\n}\n",
        "output": "1",
        "explanation": "Bạn có thể dùng toán tử so sánh, như toán tử lớn hơn ( > ), để xác định một biểu thức (hoặc biến) là đúng hay sai:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  cout << (10 > 9); // returns 1 (true), because 10 is higher than 9\n  return 0;\n}\n",
        "output": "1",
        "explanation": "Hoặc thậm chí dễ dàng hơn:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int x = 10;\n  cout << (x == 10);  // returns 1 (true), because the value   of x is equal to 10\n  return 0;\n}\n",
        "output": "1",
        "explanation": "Các ví dụ dưới đây dùng toán tử bằng ( == ) để đánh giá biểu thức:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  cout << (10 == 15);  // returns   0 (false), because 10 is not equal to 15\n  return 0;\n}\n",
        "output": "0",
        "explanation": "Chạy thử và tự sửa code để cảm nhận cách nó hoạt động."
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int x = 10;\n     int y = 9;\n\n   bool isGreater = x > y;\n\n   cout << isGreater; // returns 1 (true)\n  return 0;\n}\n",
        "output": "1",
        "explanation": "Lưu kết quả của x > y vào biến boolean và in ra:"
      }
    ],
    "tables": [],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Lưu ý: tùy bạn lưu kết quả so sánh vào biến boolean hay dùng trực tiếp. Lưu kết quả có thể làm code dễ đọc hơn, đặc biệt nếu muốn dùng lại."
    ],
    "commonMistakes": [
      {
        "wrong": "Gán số 1/0 trực tiếp cho biến bool thay vì biểu thức so sánh.",
        "why": "bool nhận true/false; dùng nó cho điều kiện sẽ rõ ràng và an toàn hơn.",
        "correct": "Dùng biểu thức so sánh: bool isCoding = (x > 5);"
      },
      {
        "wrong": "Nhầm = (gán) với == (so sánh) trong biểu thức.",
        "why": "Toán tử sai cho kết quả sai mà không báo lỗi.",
        "correct": "double-click kiểm tra: so sánh thì ==."
      }
    ],
    "keyTakeaways": [
      "Biểu thức Boolean là đoạn mã so sánh giá trị hoặc biến và trả về giá trị boolean: 1 (true) hoặc 0 (false).",
      "Biểu thức boolean là nền tảng của việc ra quyết định trong lập trình - chúng giúp chương trình quyết định làm gì dựa trê n đúng hay sai.…",
      "Bạn có thể dùng toán tử so sánh, như toán tử lớn hơn ( > ), để xác định một biểu thức (hoặc biến) là đúng hay sai:",
      "Hoặc thậm chí dễ dàng hơn:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_booleans_expressions.asp"
  },
  {
    "id": "cpp-booleans-reallife",
    "slug": "booleans-reallife",
    "title": "Ví dụ thực tế về Boolean (Booleans Real Life)",
    "titleEn": "C++ Booleans Real Life Examples",
    "num": 46,
    "chapter": "05 · Toán học & Boolean",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 11,
    "prerequisites": [
      "cpp-booleans-expressions"
    ],
    "description": "Hãy dùng boolean trong ví dụ thực tế: xác định một người có đủ tuổi bầu cử không.",
    "objectives": [
      "Nắm được: Ví dụ thực tế về Boolean trong C++.",
      "Trình bày được: Ví dụ thực tế; Ví dụ.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Hãy dùng boolean trong ví dụ thực tế: xác định một người có đủ tuổi bầu cử không. Ví dụ dưới đây, ta dùng toán tử so sánh >= để xem tuổi (25) có LỚN HƠN HOẶC BẰNG giới hạn tuổi bầu cử, đặt ở 18: Hay không? Cách tốt hơn nữa (đang vào đà rồi), là bọc mã trên trong if...else để làm các việc khác nhau tùy kết quả: In \"Old enough to vote!\" nếu myAge >= 18. Ngược lại in \"Not old enough to vote.\": Boolean là nền tảng của mọi phép so sánh và điều kiện trong C++. Bạn sẽ học thêm về điều kiện (if...else) trong chương tiếp theo."
    },
    "sections": [
      "Ví dụ thực tế",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "int myAge = 25;\nint votingAge = 18;\n\ncout << (myAge >= votingAge); // returns 1 (true), meaning 25 year olds are allowed to vote!",
        "explanation": "Ví dụ dưới đây, ta dùng toán tử so sánh >= để xem tuổi (25) có LỚN HƠN HOẶC BẰNG giới hạn tuổi bầu cử, đặt ở 18:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int myAge = 25;\n  int votingAge = 18;\n\n  cout << (myAge >= votingAge); // returns 1 (true), meaning 25 year olds are allowed to vote!\n  return 0;\n}\n",
        "output": "1",
        "explanation": "Ví dụ dưới đây, ta dùng toán tử so sánh >= để xem tuổi (25) có LỚN HƠN HOẶC BẰNG giới hạn tuổi bầu cử, đặt ở 18:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int myAge = 25;\n  int votingAge = 18;\n\n  if (myAge >= votingAge) {\n    cout << \"Old enough to vote!\";\n     } else {\n    cout << \"Not old enough to vote.\";\n  }\n\n  // Outputs: Old enough to vote!\n  return 0;\n}\n",
        "output": "Old enough to vote!",
        "explanation": "In \"Old enough to vote!\" nếu myAge >= 18. Ngược lại in \"Not old enough to vote.\":"
      }
    ],
    "tables": [],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Gán số 1/0 trực tiếp cho biến bool thay vì biểu thức so sánh.",
        "why": "bool nhận true/false; dùng nó cho điều kiện sẽ rõ ràng và an toàn hơn.",
        "correct": "Dùng biểu thức so sánh: bool isCoding = (x > 5);"
      },
      {
        "wrong": "Viết if (x = 5) thay vì if (x == 5).",
        "why": "Dấu = là gán, == mới là so sánh; gán trong if luôn cho kết quả true.",
        "correct": "if (x == 5) { ... }"
      }
    ],
    "keyTakeaways": [
      "Hãy dùng boolean trong ví dụ thực tế: xác định một người có đủ tuổi bầu cử không.",
      "Ví dụ dưới đây, ta dùng toán tử so sánh >= để xem tuổi (25) có LỚN HƠN HOẶC BẰNG giới hạn tuổi bầu cử, đặt ở 18:",
      "Hay không? Cách tốt hơn nữa (đang vào đà rồi), là bọc mã trên trong if...else để làm các việc khác nhau tùy kết quả:",
      "In \"Old enough to vote!\" nếu myAge >= 18. Ngược lại in \"Not old enough to vote.\":"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_booleans_reallife.asp"
  },
  {
    "id": "cpp-challenges-booleans",
    "slug": "challenges-booleans",
    "title": "Thử thách về Boolean (Booleans Challenge)",
    "titleEn": "C++ Booleans Challenge",
    "num": 47,
    "chapter": "05 · Toán học & Boolean",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-booleans-reallife"
    ],
    "description": "Kiểm tra hiểu biết về boolean C++ bằng thử thách code nhỏ.",
    "objectives": [
      "Nắm được: Thử thách về Boolean trong C++.",
      "Trình bày được: Thử thách: kiểm tra độ tuổi tối thiểu.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Kiểm tra hiểu biết về boolean C++ bằng thử thách code nhỏ."
    },
    "sections": [
      "Thử thách: kiểm tra độ tuổi tối thiểu"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n  cout << sqrt(16) << \" \" << (5 > 3);\n  return 0;\n}",
        "explanation": "Hàm toán học và biểu thức boolean trong cùng một chương trình."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n  cout << sqrt(16) << \" \" << (5 > 3);\n  return 0;\n}",
        "output": "4 1",
        "explanation": "Hàm toán học và biểu thức boolean trong cùng một chương trình."
      }
    ],
    "tables": [],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Gán số 1/0 trực tiếp cho biến bool thay vì biểu thức so sánh.",
        "why": "bool nhận true/false; dùng nó cho điều kiện sẽ rõ ràng và an toàn hơn.",
        "correct": "Dùng biểu thức so sánh: bool isCoding = (x > 5);"
      }
    ],
    "keyTakeaways": [
      "Kiểm tra hiểu biết về boolean C++ bằng thử thách code nhỏ."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_challenges_booleans.asp"
  },
  {
    "id": "cpp-conditions",
    "slug": "conditions",
    "title": "Câu lệnh điều kiện If ... Else",
    "titleEn": "C++ If ... Else",
    "num": 48,
    "chapter": "06 · Điều kiện & Switch",
    "topic": "Conditions",
    "difficulty": "beginner",
    "estimatedTime": 14,
    "prerequisites": [],
    "description": "Bạn đã biết C++ hỗ trợ các phép so sánh quen thuộc trong toán học, chẳng hạn:",
    "objectives": [
      "Nắm được: C++ Nếu ... Khác.",
      "Trình bày được: Điều kiện và câu lệnh If trong C++; Câu lệnh if; Cú pháp.",
      "Chạy và sửa được 3 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Bạn đã biết C++ hỗ trợ các phép so sánh quen thuộc trong toán học, chẳng hạn: Các điều kiện này dùng để thực hiện hành động khác nhau tùy theo đúng hay sai. C++ có các câu lệnh điều kiện sau: Dùng câu lệnh if để chỉ định khối mã C++ chạy khi điều kiện đúng. Lưu ý if được viết chữ thường. Viết hoa (If hoặc IF) sẽ gây lỗi. Ví dụ dưới đây kiểm tra xem 20 có lớn hơn 18 không. Nếu điều kiện đúng, ta in một thông điệp: Ta cũng có thể dùng biến trong điều kiện: Ở ví dụ trên, ta dùng hai biến x và y để xem x có lớn hơn y không. Vì 20 lớn hơn 18, điều kiện đúng và thông điệp được in. Vì điều kiện trong if phải là true hoặc false, bạn có thể lưu kết quả vào biến boolean thay vì viết phép so sánh trực tiếp: Điều này giúp code dễ đọc hơn, nhất là khi điều kiện phức tạp hoặc dùng nhiều lần."
    },
    "sections": [
      "Điều kiện và câu lệnh If trong C++",
      "Câu lệnh if",
      "Cú pháp",
      "Ví dụ",
      "Sử dụng biến Boolean"
    ],
    "syntax": [
      {
        "code": "if (20 > 18) {\n   cout << \"20 is greater than 18\";\n }",
        "explanation": "Ví dụ dưới đây kiểm tra xem 20 có lớn hơn 18 không. Nếu điều kiện đúng, ta in một thông điệp:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  if (20 > 18) {\n     cout << \"20 is greater than 18\";\n   }\n  return 0;\n}\n",
        "output": "20 is greater than 18",
        "explanation": "Ví dụ dưới đây kiểm tra xem 20 có lớn hơn 18 không. Nếu điều kiện đúng, ta in một thông điệp:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int x = 20;\n   int y = 18;\n\n    if (x > y) {\n     cout << \"x is greater than y\";\n   }\n  return 0;\n}\n",
        "output": "x is greater than y",
        "explanation": "Ta cũng có thể dùng biến trong điều kiện:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int x = 20;\n   int y = 18;\n\n    bool isGreater = x > y;\n\n    if (isGreater) {\n     cout << \"x is greater than y\";\n   }\n  return 0;\n}\n",
        "output": "x is greater than y",
        "explanation": "Vì điều kiện trong if phải là true hoặc false, bạn có thể lưu kết quả vào biến boolean thay vì viết phép so sánh trực tiếp:"
      }
    ],
    "tables": [],
    "useCases": [
      "Phân nhánh logic: menu, kiểm tra input, trạng thái game.",
      "Xử lý lỗi đơn giản bằng so sánh."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Gán số 1/0 trực tiếp cho biến bool thay vì biểu thức so sánh.",
        "why": "bool nhận true/false; dùng nó cho điều kiện sẽ rõ ràng và an toàn hơn.",
        "correct": "Dùng biểu thức so sánh: bool isCoding = (x > 5);"
      },
      {
        "wrong": "Viết if (x = 5) thay vì if (x == 5).",
        "why": "Dấu = là gán, == mới là so sánh; gán trong if luôn cho kết quả true.",
        "correct": "if (x == 5) { ... }"
      }
    ],
    "keyTakeaways": [
      "Bạn đã biết C++ hỗ trợ các phép so sánh quen thuộc trong toán học, chẳng hạn:",
      "Các điều kiện này dùng để thực hiện hành động khác nhau tùy theo đúng hay sai.",
      "C++ có các câu lệnh điều kiện sau:",
      "Dùng câu lệnh if để chỉ định khối mã C++ chạy khi điều kiện đúng."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_conditions.asp"
  },
  {
    "id": "cpp-conditions-else",
    "slug": "conditions-else",
    "title": "Mệnh đề else (The else Statement)",
    "titleEn": "C++ The else Statement",
    "num": 49,
    "chapter": "06 · Điều kiện & Switch",
    "topic": "Conditions",
    "difficulty": "beginner",
    "estimatedTime": 11,
    "prerequisites": [
      "cpp-conditions"
    ],
    "description": "Dùng else để chỉ định khối mã chạy khi điều kiện sai.",
    "objectives": [
      "Nắm được: Câu lệnh else trong C++.",
      "Trình bày được: Tuyên bố else; Cú pháp; Ví dụ.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Dùng else để chỉ định khối mã chạy khi điều kiện sai. Ví dụ dưới đây, chương trình kiểm tra giá trị của time. Nếu nhỏ hơn 18, in \"Good day\". Vì time bằng 20, điều kiện time < 18 sai, nên mã trong khối else chạy và in \"Good evening.\". Nếu time nhỏ hơn 18, chương trình in \"Good day.\". Bạn cũng có thể lưu điều kiện vào biến boolean và dùng trong if...else. Cách này giúp code dễ đọc hơn. Mẹo: tên kiểu isDay giúp dễ hiểu điều kiện có ý nghĩa gì."
    },
    "sections": [
      "Tuyên bố else",
      "Cú pháp",
      "Ví dụ",
      "Sử dụng biến Boolean"
    ],
    "syntax": [
      {
        "code": "int time = 20;\n\n  if (time < 18) {\n   cout << \"Good day.\";\n } else {\n   cout << \"Good evening.\";\n }\n\n  // Outputs \"Good evening.\"",
        "explanation": "Ví dụ dưới đây, chương trình kiểm tra giá trị của time. Nếu nhỏ hơn 18, in \"Good day\"."
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int time = 20;\n\n    if (time < 18) {\n     cout << \"Good day.\";\n   } else {\n     cout << \"Good evening.\";\n   }\n\n    // Outputs \"Good evening.\"\n  return 0;\n}\n",
        "output": "Good evening.",
        "explanation": "Ví dụ dưới đây, chương trình kiểm tra giá trị của time. Nếu nhỏ hơn 18, in \"Good day\"."
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int time = 20;\n\n    bool isDay = time < 18;\n\n    if (isDay) {\n     cout << \"Good day.\";\n   } else {\n     cout << \"Good evening.\";\n   }\n\n    // Outputs \"Good evening.\"\n  return 0;\n}\n",
        "output": "Good evening.",
        "explanation": "Bạn cũng có thể lưu điều kiện vào biến boolean và dùng trong if...else. Cách này giúp code dễ đọc hơn."
      }
    ],
    "tables": [],
    "useCases": [
      "Phân nhánh logic: menu, kiểm tra input, trạng thái game.",
      "Xử lý lỗi đơn giản bằng so sánh."
    ],
    "notes": [
      "Mẹo: tên kiểu isDay giúp dễ hiểu điều kiện có ý nghĩa gì."
    ],
    "commonMistakes": [
      {
        "wrong": "Gán số 1/0 trực tiếp cho biến bool thay vì biểu thức so sánh.",
        "why": "bool nhận true/false; dùng nó cho điều kiện sẽ rõ ràng và an toàn hơn.",
        "correct": "Dùng biểu thức so sánh: bool isCoding = (x > 5);"
      },
      {
        "wrong": "Viết if (x = 5) thay vì if (x == 5).",
        "why": "Dấu = là gán, == mới là so sánh; gán trong if luôn cho kết quả true.",
        "correct": "if (x == 5) { ... }"
      }
    ],
    "keyTakeaways": [
      "Dùng else để chỉ định khối mã chạy khi điều kiện sai.",
      "Ví dụ dưới đây, chương trình kiểm tra giá trị của time. Nếu nhỏ hơn 18, in \"Good day\".",
      "Vì time bằng 20, điều kiện time < 18 sai, nên mã trong khối else chạy và in \"Good evening.\". Nếu time nhỏ hơn 18, chương  trình in \"Good day.\".…",
      "Bạn cũng có thể lưu điều kiện vào biến boolean và dùng trong if...else. Cách này giúp code dễ đọc hơn."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_conditions_else.asp"
  },
  {
    "id": "cpp-conditions-elseif",
    "slug": "conditions-elseif",
    "title": "Mệnh đề else if (The else if Statement)",
    "titleEn": "C++ The else if Statement",
    "num": 50,
    "chapter": "06 · Điều kiện & Switch",
    "topic": "Conditions",
    "difficulty": "beginner",
    "estimatedTime": 11,
    "prerequisites": [
      "cpp-conditions-else"
    ],
    "description": "Dùng else if để chỉ định điều kiện mới cần kiểm khi điều kiện đầu sai.",
    "objectives": [
      "Nắm được: Câu lệnh else if trong C++.",
      "Trình bày được: Câu lệnh else if; Cú pháp; Ví dụ.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Dùng else if để chỉ định điều kiện mới cần kiểm khi điều kiện đầu sai. Bạn có thể dùng else if để kiểm tra nhiều điều kiện lần lượt. Các điều kiện được kiểm tra từ trên xuống. Ngay khi một điều kiện đúng, khối mã của nó được chạy và các phần còn lại bị bỏ qua. Ví dụ dưới đây, ta chọn thông điệp in ra dựa trên giá trị của time: Giá trị của time là 16. Điều kiện đầu (time < 12) sai, nhưng điều kiện thứ hai (time < 18) đúng. Nếu time bằng 22, không điều kiện nào đúng, và chương trình sẽ in \"Good evening.\" thay thế. Cũng như với if, bạn có thể lưu điều kiện vào biến boolean rồi dùng với else if: Mẹo: tên biến kiểu isMorning hay isDay giúp dễ hiểu ý nghĩa từng điều kiện."
    },
    "sections": [
      "Câu lệnh else if",
      "Cú pháp",
      "Ví dụ",
      "Sử dụng các biến Boolean"
    ],
    "syntax": [
      {
        "code": "int time = 16;\n\n  if (time < 12) {\n   cout << \"Good morning.\";\n } else if (time < 18) {\n   cout << \"Good day.\";\n } else {\n   cout << \"Good evening.\";\n }\n\n  // Outputs \"Good day.\"",
        "explanation": "Ví dụ dưới đây, ta chọn thông điệp in ra dựa trên giá trị của time:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int time = 16;\n\n    if (time < 12) {\n     cout << \"Good morning.\";\n   } else if (time < 18) {\n     cout << \"Good day.\";\n   } else {\n     cout << \"Good evening.\";\n   }\n\n    // Outputs \"Good day.\"\n  return 0;\n}\n",
        "output": "Good day.",
        "explanation": "Ví dụ dưới đây, ta chọn thông điệp in ra dựa trên giá trị của time:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int time = 16;\n\n    bool isMorning = time < 12;\n   bool isDay = time < 18;\n\n    if (isMorning) {\n     cout << \"Good morning.\";\n   } else if (isDay) {\n     cout << \"Good day.\";\n   } else {\n     cout << \"Good evening.\";\n   }\n  return 0;\n}\n",
        "output": "Good day.",
        "explanation": "Cũng như với if, bạn có thể lưu điều kiện vào biến boolean rồi dùng với else if:"
      }
    ],
    "tables": [],
    "useCases": [
      "Phân nhánh logic: menu, kiểm tra input, trạng thái game.",
      "Xử lý lỗi đơn giản bằng so sánh."
    ],
    "notes": [
      "Mẹo: tên biến kiểu isMorning hay isDay giúp dễ hiểu ý nghĩa từng điều kiện."
    ],
    "commonMistakes": [
      {
        "wrong": "Gán số 1/0 trực tiếp cho biến bool thay vì biểu thức so sánh.",
        "why": "bool nhận true/false; dùng nó cho điều kiện sẽ rõ ràng và an toàn hơn.",
        "correct": "Dùng biểu thức so sánh: bool isCoding = (x > 5);"
      },
      {
        "wrong": "Viết if (x = 5) thay vì if (x == 5).",
        "why": "Dấu = là gán, == mới là so sánh; gán trong if luôn cho kết quả true.",
        "correct": "if (x == 5) { ... }"
      }
    ],
    "keyTakeaways": [
      "Dùng else if để chỉ định điều kiện mới cần kiểm khi điều kiện đầu sai.",
      "Bạn có thể dùng else if để kiểm tra nhiều điều kiện lần lượt.",
      "Các điều kiện được kiểm tra từ trên xuống. Ngay khi một điều kiện đúng, khối mã của nó được chạy và các phần còn lại bị  bỏ qua.…",
      "Ví dụ dưới đây, ta chọn thông điệp in ra dựa trên giá trị của time:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_conditions_elseif.asp"
  },
  {
    "id": "cpp-conditions-shorthand",
    "slug": "conditions-shorthand",
    "title": "Toán tử ba ngôi (Ternary Operator / Short Hand If)",
    "titleEn": "C++ Short Hand If Else (Ternary Operator)",
    "num": 51,
    "chapter": "06 · Điều kiện & Switch",
    "topic": "Conditions",
    "difficulty": "beginner",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-conditions-elseif"
    ],
    "description": "Cũng có dạng if...else rút gọn, gọi là toán tử ba ngôi vì dùng ba toán hạng.",
    "objectives": [
      "Nắm được: If Else rút gọn (toán tử ba ngôi) trong C++ (C++ Short Hand If Else (Ternary Operator)).",
      "Trình bày được: If...Else rút gọn (toán tử ba ngôi); Cú pháp; Ví dụ.",
      "Chạy và sửa được 5 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Cũng có dạng if...else rút gọn, gọi là toán tử ba ngôi vì dùng ba toán hạng. Toán tử ba ngôi trả về giá trị dựa trên điều kiện: nếu điều kiện đúng, trả về giá trị thứ nhất; ngược lại, trả về giá trị thứ hai. Nó có thể thay nhiều dòng mã bằng một dòng, thường dùng thay cho if...else đơn giản: Thay vì viết: Tự trải nghiệm Bạn chỉ cần viết: Tự trải nghiệm Bạn cũng có thể dùng toán tử ba ngôi ngay trong cout: Tự trải nghiệm Mẹo: dùng toán tử ba ngôi cho các điều kiện ngắn và đơn giản. Với logic dài hoặc phức tạp hơn, câu lệnh if...else thường dễ đọc hơn. Bạn có thể lồng toán tử ba ngôi để xử lý nhiều hơn hai kết quả, nhưng code sẽ khó đọc hơn: Tự trải nghiệm Lưu ý: dù lồng toán tử ba ngôi hoạt động được, thường nên dùng if...else if...else thường để rõ ràng hơn."
    },
    "sections": [
      "If...Else rút gọn (toán tử ba ngôi)",
      "Cú pháp",
      "Ví dụ",
      "Bộ ba lồng nhau"
    ],
    "syntax": [
      {
        "code": "variable = (condition) ? expressionTrue : expressionFalse;",
        "explanation": "Nó có thể thay nhiều dòng mã bằng một dòng, thường dùng thay cho if...else đơn giản:"
      }
    ],
    "examples": [
      {
        "title": "Cú pháp",
        "code": "variable = (condition) ? expressionTrue : expressionFalse;",
        "output": "",
        "explanation": "Nó có thể thay nhiều dòng mã bằng một dòng, thường dùng thay cho if...else đơn giản:",
        "runnable": false
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int time = 20;\n   if (time < 18) {\n     cout << \"Good day.\";\n   } else {\n     cout << \"Good evening.\";\n   }\n  return 0;\n}\n",
        "output": "Good evening.",
        "explanation": "Thay vì viết:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  int time = 20;\n   string result = (time < 18) ? \"Good day.\" : \"Good evening.\";\n   cout << result;\n  return 0;\n}\n",
        "output": "Good evening.",
        "explanation": "Bạn chỉ cần viết:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int time = 20;\n   cout << ((time < 18) ? \"Good day.\" : \"Good evening.\");\n  return 0;\n}\n",
        "output": "Good evening.",
        "explanation": "Bạn cũng có thể dùng toán tử ba ngôi ngay trong cout:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  int time = 22;\n   string message = (time < 12) ? \"Good morning.\"\n     : (time < 18) ? \"Good afternoon.\"\n     : \"Good evening.\";\n   cout << message;\n  return 0;\n}\n",
        "output": "Good evening.",
        "explanation": "Bạn có thể lồng toán tử ba ngôi để xử lý nhiều hơn hai kết quả, nhưng code sẽ khó đọc hơn:"
      }
    ],
    "tables": [],
    "useCases": [
      "Phân nhánh logic: menu, kiểm tra input, trạng thái game.",
      "Xử lý lỗi đơn giản bằng so sánh."
    ],
    "notes": [
      "Mẹo: dùng toán tử ba ngôi cho các điều kiện ngắn và đơn giản. Với logic dài hoặc phức tạp hơn, câu lệnh if...else thường dễ đọc hơn.",
      "Lưu ý: dù lồng toán tử ba ngôi hoạt động được, thường nên dùng if...else if...else thường để rõ ràng hơn."
    ],
    "commonMistakes": [
      {
        "wrong": "Viết if (x = 5) thay vì if (x == 5).",
        "why": "Dấu = là gán, == mới là so sánh; gán trong if luôn cho kết quả true.",
        "correct": "if (x == 5) { ... }"
      },
      {
        "wrong": "Nhầm = (gán) với == (so sánh) trong biểu thức.",
        "why": "Toán tử sai cho kết quả sai mà không báo lỗi.",
        "correct": "double-click kiểm tra: so sánh thì ==."
      }
    ],
    "keyTakeaways": [
      "Cũng có dạng if...else rút gọn, gọi là toán tử ba ngôi vì dùng ba toán hạng.",
      "Toán tử ba ngôi trả về giá trị dựa trên điều kiện: nếu điều kiện đúng, trả về giá trị thứ nhất; ngược lại, trả về giá tr ị thứ hai.…",
      "Nó có thể thay nhiều dòng mã bằng một dòng, thường dùng thay cho if...else đơn giản:",
      "Thay vì viết:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_conditions_shorthand.asp"
  },
  {
    "id": "cpp-conditions-nested",
    "slug": "conditions-nested",
    "title": "Lệnh if lồng nhau (Nested If)",
    "titleEn": "C++ Nested If",
    "num": 52,
    "chapter": "06 · Điều kiện & Switch",
    "topic": "Conditions",
    "difficulty": "beginner",
    "estimatedTime": 11,
    "prerequisites": [
      "cpp-conditions-shorthand"
    ],
    "description": "Bạn cũng có thể đặt if trong if khác. Đó gọi là câu lệnh if lồng nhau.",
    "objectives": [
      "Nắm được: C++ Lồng nếu.",
      "Trình bày được: Lồng nhau nếu; Ví dụ; Ví dụ thực tế.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Bạn cũng có thể đặt if trong if khác. Đó gọi là câu lệnh if lồng nhau. If lồng nhau cho phép kiểm tra một điều kiện chỉ khi điều kiện khác đã đúng. Ví dụ này, đầu tiên ta kiểm tra x có lớn hơn 10 không; nếu đúng, ta kiểm tra tiếp y có lớn hơn 20 không: Tự trải nghiệm If lồng nhau hữu ích khi cần kiểm nhiều điều kiện phụ thuộc nhau. Ví dụ kiểm tra người đủ tuổi bầu cử và là công dân: Tự trải nghiệm"
    },
    "sections": [
      "Lồng nhau nếu",
      "Ví dụ",
      "Ví dụ thực tế"
    ],
    "syntax": [
      {
        "code": "int x = 15;\nint y = 25;\n\nif (x > 10) {\n  cout << \"x is greater than 10\\n\";\n\n  // Nested if\n  if (y > 20) {\n    cout << \"y is also greater than 20\\n\";\n  }\n}",
        "explanation": "Ví dụ này, đầu tiên ta kiểm tra x có lớn hơn 10 không; nếu đúng, ta kiểm tra tiếp y có lớn hơn 20 không:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int x = 15;\n  int y = 25;\n\n  if (x > 10) {\n    cout << \"x is greater than 10\\n\";\n\n    // Nested if\n    if (y > 20) {\n      cout << \"y is also greater than 20\\n\";\n    }\n  }\n  return 0;\n}\n",
        "output": "x is greater than 10\ny is also greater than 20",
        "explanation": "Ví dụ này, đầu tiên ta kiểm tra x có lớn hơn 10 không; nếu đúng, ta kiểm tra tiếp y có lớn hơn 20 không:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int age = 20;\n  bool isCitizen = true;\n\n  if (age >= 18) {\n    cout << \"Old enough to vote.\\n\";\n\n    if (isCitizen) {\n      cout << \"And you are a citizen, so you can vote!\\n\";\n    } else {\n      cout << \"But you must be a citizen to vote.\\n\";\n    }\n  } else {\n    cout << \"Not old enough to vote.\\n\";\n  }\n  return 0;\n}\n",
        "output": "Old enough to vote.\nAnd you are a citizen, so you can vote!",
        "explanation": "If lồng nhau hữu ích khi cần kiểm nhiều điều kiện phụ thuộc nhau. Ví dụ kiểm tra người đủ tuổi bầu cử và là công dân:"
      }
    ],
    "tables": [],
    "useCases": [
      "Phân nhánh logic: menu, kiểm tra input, trạng thái game.",
      "Xử lý lỗi đơn giản bằng so sánh."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Viết if (x = 5) thay vì if (x == 5).",
        "why": "Dấu = là gán, == mới là so sánh; gán trong if luôn cho kết quả true.",
        "correct": "if (x == 5) { ... }"
      }
    ],
    "keyTakeaways": [
      "Bạn cũng có thể đặt if trong if khác. Đó gọi là câu lệnh if lồng nhau.",
      "If lồng nhau cho phép kiểm tra một điều kiện chỉ khi điều kiện khác đã đúng.",
      "Ví dụ này, đầu tiên ta kiểm tra x có lớn hơn 10 không; nếu đúng, ta kiểm tra tiếp y có lớn hơn 20 không:",
      "Tự trải nghiệm"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_conditions_nested.asp"
  },
  {
    "id": "cpp-conditions-logical",
    "slug": "conditions-logical",
    "title": "Toán tử logic trong câu điều kiện",
    "titleEn": "C++ Logical Operators in Conditions",
    "num": 53,
    "chapter": "06 · Điều kiện & Switch",
    "topic": "Conditions",
    "difficulty": "beginner",
    "estimatedTime": 17,
    "prerequisites": [
      "cpp-conditions-nested"
    ],
    "description": "Bạn có thể kết hợp hoặc đảo ngược các điều kiện bằng các toán tử logic. Chúng hoạt động cùng với if, else, và else if để xây dựng các quyết định phức tạp hơn.",
    "objectives": [
      "Nắm được: Toán tử logic trong điều kiện C++.",
      "Trình bày được: Toán tử logic trong điều kiện; VÀ; Ví dụ.",
      "Chạy và sửa được 4 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Bạn có thể kết hợp hoặc đảo ngược các điều kiện bằng các toán tử logic. Chúng hoạt động cùng với if, else, và else if để xây dựng các quyết định phức tạp hơn. Dùng AND ( && ) khi cả hai điều kiện phải đúng: Kiểm tra xem a lớn hơn b, và c lớn hơn a: Tự trải nghiệm Dùng OR ( || ) khi chỉ cần một trong các điều kiện đúng: Kiểm tra xem a lớn hơn b, hay a lớn hơn c: Tự trải nghiệm Toán tử NOT ( ! ) đảo ngược điều kiện: Rất hữu ích khi bạn muốn kiểm tra điều gì đó KHÔNG xảy ra: Kiểm tra xem a không lớn hơn b: Tự trải nghiệm Trong chương trình thực tế, các toán tử logic thường được dùng cho kiểm soát truy cập. Ví dụ, để truy cập một hệ thống, có những yêu cầu cụ thể: Bạn phải đăng nhập, và cần là admin hoặc có mức bảo mật cao (bậc 1 hoặc 2): Tự trải nghiệm"
    },
    "sections": [
      "Toán tử logic trong điều kiện",
      "VÀ",
      "Ví dụ",
      "OR ( || )",
      "Phủ định (NOT):",
      "Ví dụ thực tế"
    ],
    "syntax": [
      {
        "code": "int a = 200;\nint b = 33;\nint c = 500;\n\nif (a > b && c > a) {\n  cout << \"Both conditions are true\";\n}",
        "explanation": "Kiểm tra xem a lớn hơn b, và c lớn hơn a:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int a = 200;\n  int b = 33;\n  int c = 500;\n\n  if (a > b && c > a) {\n    cout << \"Both conditions are true\";\n  }\n  return 0;\n}\n",
        "output": "Both conditions are true",
        "explanation": "Kiểm tra xem a lớn hơn b, và c lớn hơn a:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int a = 200;\n  int b = 33;\n  int c = 500;\n\n  if (a > b || a > c) {\n    cout << \"At least one condition is true\";\n  }\n  return 0;\n}\n",
        "output": "At least one condition is true",
        "explanation": "Kiểm tra xem a lớn hơn b, hay a lớn hơn c:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int a = 33;\n  int b = 200;\n\n  if (!(a > b)) {\n    cout << \"a is NOT greater than b\";\n  }\n  return 0;\n}\n",
        "output": "a is NOT greater than b",
        "explanation": "Kiểm tra xem a không lớn hơn b:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  bool isLoggedIn = true;\n  bool isAdmin = false;\n  int securityLevel = 3; // 1 = highest\n\n  if (isLoggedIn && (isAdmin || securityLevel <= 2)) {\n    cout << \"Access granted.\";\n  } else {\n    cout << \"Access denied.\";\n  }\n\n  // Try changing securityLevel and isAdmin to test different outcomes:\n  // securityLevel 1 = Access granted\n  // securityLevel 2 = Access granted\n  // securityLevel 3 = Access denied\n  // securityLevel 4 = Access denied\n  // If isAdmin = true, access is granted.\n  return 0;\n}\n",
        "output": "Access denied.",
        "explanation": "Bạn phải đăng nhập, và cần là admin hoặc có mức bảo mật cao (bậc 1 hoặc 2):"
      }
    ],
    "tables": [],
    "useCases": [
      "Phân nhánh logic: menu, kiểm tra input, trạng thái game.",
      "Xử lý lỗi đơn giản bằng so sánh."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Viết if (x = 5) thay vì if (x == 5).",
        "why": "Dấu = là gán, == mới là so sánh; gán trong if luôn cho kết quả true.",
        "correct": "if (x == 5) { ... }"
      },
      {
        "wrong": "Nhầm = (gán) với == (so sánh) trong biểu thức.",
        "why": "Toán tử sai cho kết quả sai mà không báo lỗi.",
        "correct": "double-click kiểm tra: so sánh thì ==."
      }
    ],
    "keyTakeaways": [
      "Bạn có thể kết hợp hoặc đảo ngược các điều kiện bằng các toán tử logic. Chúng hoạt động cùng với if, else, và else if để  xây dựng các quyết định phức tạp hơn.…",
      "Dùng AND ( && ) khi cả hai điều kiện phải đúng:",
      "Kiểm tra xem a lớn hơn b, và c lớn hơn a:",
      "Tự trải nghiệm"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_conditions_logical.asp"
  },
  {
    "id": "cpp-conditions-reallife",
    "slug": "conditions-reallife",
    "title": "Ví dụ thực tế If Else (Real Life Examples)",
    "titleEn": "C++ Real Life If Else Examples",
    "num": 54,
    "chapter": "06 · Điều kiện & Switch",
    "topic": "Conditions",
    "difficulty": "beginner",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-conditions-logical"
    ],
    "description": "Ví dụ này cho thấy dùng if..else để \"mở cửa\" nếu người dùng nhập đúng mã:",
    "objectives": [
      "Nắm được: Ví dụ thực tế If Else trong C++.",
      "Trình bày được: Ví dụ thực tế; Ví dụ.",
      "Chạy và sửa được 6 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Ví dụ này cho thấy dùng if..else để \"mở cửa\" nếu người dùng nhập đúng mã: Ví dụ này cho thấy dùng if..else để biết một số là dương hay âm: Xác định một người đủ tuổi bầu cử chưa: Xác định một người đủ tuổi bầu cử và có phải công dân hay không (dùng if lồng nhau): Tự trải nghiệm Xác định một số là chẵn hay lẻ: Kiểm tra nhiệt độ (Celsius):"
    },
    "sections": [
      "Ví dụ thực tế",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "int doorCode = 1337;\n\nif (doorCode == 1337) {\n  cout << \"Correct code.\\nThe door is now open.\\n\";\n} else {\n  cout << \"Wrong code.\\nThe door remains closed.\\n\";\n}",
        "explanation": "Ví dụ này cho thấy dùng if..else để \"mở cửa\" nếu người dùng nhập đúng mã:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int doorCode = 1337;\n\n  if (doorCode == 1337) {\n    cout << \"Correct code.\\nThe door is now open.\\n\";\n  } else {\n    cout << \"Wrong code.\\nThe door remains closed.\\n\";\n  }\n  return 0;\n}\n",
        "output": "Correct code.\nThe door is now open.",
        "explanation": "Ví dụ này cho thấy dùng if..else để \"mở cửa\" nếu người dùng nhập đúng mã:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int myNum = 10; // Is this a positive or negative number?\n\n  if (myNum > 0) {\n    cout << \"The value is a positive number.\\n\";\n  } else if (myNum < 0) {\n    cout << \"The value is a negative number.\\n\";\n  } else {\n    cout << \"The value is 0.\\n\";\n  }\n  return 0;\n}\n",
        "output": "The value is a positive number.",
        "explanation": "Ví dụ này cho thấy dùng if..else để biết một số là dương hay âm:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int myAge = 25;\n  int votingAge = 18;\n\n  if (myAge >= votingAge) {\n    cout << \"Old enough to vote!\\n\";\n  } else {\n    cout << \"Not old enough to vote.\\n\";\n  }\n  return 0;\n}\n",
        "output": "Old enough to vote!",
        "explanation": "Xác định một người đủ tuổi bầu cử chưa:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int age = 20;\n  bool isCitizen = true;\n\n  if (age >= 18) {\n    cout << \"Old enough to vote.\\n\";\n\n    if (isCitizen) {\n      cout << \"And you are a citizen, so you can vote!\\n\";\n    } else {\n      cout << \"But you must be a citizen to vote.\\n\";\n    }\n  } else {\n    cout << \"Not old enough to vote.\\n\";\n  }\n  return 0;\n}\n",
        "output": "Old enough to vote.\nAnd you are a citizen, so you can vote!",
        "explanation": "Xác định một người đủ tuổi bầu cử và có phải công dân hay không (dùng if lồng nhau):"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int myNum = 5;\n\n  if (myNum % 2 == 0) {\n    cout << myNum << \" is even.\\n\";\n  } else {\n    cout << myNum << \" is odd.\\n\";\n  }\n  return 0;\n}\n",
        "output": "5 is odd.",
        "explanation": "Xác định một số là chẵn hay lẻ:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int temperature = 30;\n\n  if (temperature < 0) {\n    cout << \"It's freezing!\\n\";\n  } else if (temperature < 20) {\n    cout << \"It's cool.\\n\";\n  } else {\n    cout << \"It's warm.\\n\";\n  }\n  return 0;\n}\n",
        "output": "It's warm.",
        "explanation": "Kiểm tra nhiệt độ (Celsius):"
      }
    ],
    "tables": [],
    "useCases": [
      "Phân nhánh logic: menu, kiểm tra input, trạng thái game.",
      "Xử lý lỗi đơn giản bằng so sánh."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Viết if (x = 5) thay vì if (x == 5).",
        "why": "Dấu = là gán, == mới là so sánh; gán trong if luôn cho kết quả true.",
        "correct": "if (x == 5) { ... }"
      }
    ],
    "keyTakeaways": [
      "Ví dụ này cho thấy dùng if..else để \"mở cửa\" nếu người dùng nhập đúng mã:",
      "Ví dụ này cho thấy dùng if..else để biết một số là dương hay âm:",
      "Xác định một người đủ tuổi bầu cử chưa:",
      "Xác định một người đủ tuổi bầu cử và có phải công dân hay không (dùng if lồng nhau):"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_conditions_reallife.asp"
  },
  {
    "id": "cpp-challenges-conditions",
    "slug": "challenges-conditions",
    "title": "Thử thách về điều kiện (Conditions Challenge)",
    "titleEn": "C++ Conditions Challenge",
    "num": 55,
    "chapter": "06 · Điều kiện & Switch",
    "topic": "Conditions",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-conditions-reallife"
    ],
    "description": "Kiểm tra hiểu biết về điều kiện C++ bằng thử thách code nhỏ.",
    "objectives": [
      "Nắm được: Thử thách về điều kiện trong C++.",
      "Trình bày được: Thử thách: ra quyết định với If và Else.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Kiểm tra hiểu biết về điều kiện C++ bằng thử thách code nhỏ."
    },
    "sections": [
      "Thử thách: ra quyết định với If và Else"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int time = 20;\n  if (time < 18) { cout << \"Good time!\"; } else { cout << \"Not good time\"; }\n  return 0;\n}",
        "explanation": "Cấu trúc if/else tối thiểu để thử các điều kiện của bài."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int time = 20;\n  if (time < 18) { cout << \"Good time!\"; } else { cout << \"Not good time\"; }\n  return 0;\n}",
        "output": "Not good time",
        "explanation": "Cấu trúc if/else tối thiểu để thử các điều kiện của bài."
      }
    ],
    "tables": [],
    "useCases": [
      "Phân nhánh logic: menu, kiểm tra input, trạng thái game.",
      "Xử lý lỗi đơn giản bằng so sánh."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Bỏ qua kiểu dữ liệu hoặc header cần thiết.",
        "why": "Compiler không biết tên hoặc biểu thức có thể sai kiểu.",
        "correct": "Thêm header và chọn kiểu phù hợp trước khi biên dịch."
      }
    ],
    "keyTakeaways": [
      "Kiểm tra hiểu biết về điều kiện C++ bằng thử thách code nhỏ."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_challenges_conditions.asp"
  },
  {
    "id": "cpp-switch",
    "slug": "switch",
    "title": "Cấu trúc switch-case (Switch Statement)",
    "titleEn": "C++ Switch",
    "num": 56,
    "chapter": "06 · Điều kiện & Switch",
    "topic": "Conditions",
    "difficulty": "beginner",
    "estimatedTime": 14,
    "prerequisites": [
      "cpp-challenges-conditions"
    ],
    "description": "Dùng câu lệnh switch để chọn một trong nhiều khối mã để thực thi.",
    "objectives": [
      "Nắm được: Công tắc C++.",
      "Trình bày được: Câu lệnh chuyển đổi C++; Cú pháp; Từ khóa The break.",
      "Chạy và sửa được 3 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Dùng câu lệnh switch để chọn một trong nhiều khối mã để thực thi. Phải vậy thôi. Ví dụ dưới đây dùng số thứ để tính tên thứ trong tuần: Khi gặp break trong switch, chương trình thoát khỏi khối switch. Điều này ngăn chạy tiếp mã và kiểm tra case trong khối. Khi tìm thấy khớp và xong việc, đã đến lúc break. Không cần kiểm tra thêm. Một break tiết kiệm nhiều thời gian thực thi vì nó \"bỏ qua\" mọi mã còn lại trong khối switch. Từ khóa default chỉ định mã chạy khi không có case nào khớp:"
    },
    "sections": [
      "Câu lệnh chuyển đổi C++",
      "Cú pháp",
      "Từ khóa The break",
      "Từ khóa mặc định"
    ],
    "syntax": [
      {
        "code": "switch(expression) {\n  case x:\n    // code block\n    break;\n  case y:\n      // code block\n    break;\n  default:\n      // code block\n   }",
        "explanation": "Dùng câu lệnh switch để chọn một trong nhiều khối mã để thực thi."
      }
    ],
    "examples": [
      {
        "title": "Cú pháp",
        "code": "switch(expression) {\n  case x:\n    // code block\n    break;\n  case y:\n      // code block\n    break;\n  default:\n      // code block\n   }",
        "output": "",
        "explanation": "Dùng câu lệnh switch để chọn một trong nhiều khối mã để thực thi.",
        "runnable": false
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int day = 4;\n  switch (day) {\n    case 1:\n      cout << \"Monday\";\n      break;\n    case 2:\n         cout << \"Tuesday\";\n      break;\n    case 3:\n         cout << \"Wednesday\";\n      break;\n    case 4:\n      cout << \"Thursday\";\n      break;\n    case 5:\n      cout << \"Friday\";\n      break;\n    case 6:\n      cout << \"Saturday\";\n      break;\n    case 7:\n      cout << \"Sunday\";\n      break;\n     }\n  // Outputs \"Thursday\" (day 4)\n  return 0;\n}\n",
        "output": "Thursday",
        "explanation": "Ví dụ dưới đây dùng số thứ để tính tên thứ trong tuần:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int day = 4;\n  switch (day) {\n    case 6:\n      cout << \"Today is Saturday\";\n      break;\n    case 7:\n      cout << \"Today is Sunday\";\n      break;\n    default:\n      cout << \"Looking forward to the Weekend\";\n     }\n  // Outputs \"Looking forward to the Weekend\"\n  return 0;\n}\n",
        "output": "Looking forward to the Weekend",
        "explanation": "Từ khóa default chỉ định mã chạy khi không có case nào khớp:"
      }
    ],
    "tables": [],
    "useCases": [
      "Phân nhánh logic: menu, kiểm tra input, trạng thái game.",
      "Xử lý lỗi đơn giản bằng so sánh."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Quên break ở cuối mỗi case.",
        "why": "Thiếu break gây 'fall-through': các case bên dưới cũng chạy theo.",
        "correct": "case 1: ... break;"
      }
    ],
    "keyTakeaways": [
      "Dùng câu lệnh switch để chọn một trong nhiều khối mã để thực thi.",
      "Phải vậy thôi.",
      "Ví dụ dưới đây dùng số thứ để tính tên thứ trong tuần:",
      "Khi gặp break trong switch, chương trình thoát khỏi khối switch."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_switch.asp"
  },
  {
    "id": "cpp-challenges-switch",
    "slug": "challenges-switch",
    "title": "Thử thách về switch (Switch Challenge)",
    "titleEn": "C++ Switch Challenge",
    "num": 57,
    "chapter": "06 · Điều kiện & Switch",
    "topic": "Conditions",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-switch"
    ],
    "description": "Kiểm tra hiểu biết về switch trong C++ bằng thử thách code nhỏ.",
    "objectives": [
      "Nắm được: Thử thách chuyển đổi C++.",
      "Trình bày được: Thử thách: sửa đơn hàng của khách.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Kiểm tra hiểu biết về switch trong C++ bằng thử thách code nhỏ."
    },
    "sections": [
      "Thử thách: sửa đơn hàng của khách"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int time = 20;\n  if (time < 18) { cout << \"Good time!\"; } else { cout << \"Not good time\"; }\n  return 0;\n}",
        "explanation": "Cấu trúc if/else tối thiểu để thử các điều kiện của bài."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int time = 20;\n  if (time < 18) { cout << \"Good time!\"; } else { cout << \"Not good time\"; }\n  return 0;\n}",
        "output": "Not good time",
        "explanation": "Cấu trúc if/else tối thiểu để thử các điều kiện của bài."
      }
    ],
    "tables": [],
    "useCases": [
      "Phân nhánh logic: menu, kiểm tra input, trạng thái game.",
      "Xử lý lỗi đơn giản bằng so sánh."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Quên break ở cuối mỗi case.",
        "why": "Thiếu break gây 'fall-through': các case bên dưới cũng chạy theo.",
        "correct": "case 1: ... break;"
      }
    ],
    "keyTakeaways": [
      "Kiểm tra hiểu biết về switch trong C++ bằng thử thách code nhỏ."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_challenges_switch.asp"
  },
  {
    "id": "cpp-while-loop",
    "slug": "while-loop",
    "title": "Vòng lặp while (While Loop)",
    "titleEn": "C++ While Loop",
    "num": 58,
    "chapter": "07 · Vòng lặp",
    "topic": "Loops",
    "difficulty": "beginner",
    "estimatedTime": 11,
    "prerequisites": [],
    "description": "Vòng lặp có thể chạy một khối mã khi điều kiện chỉ định còn đạt.",
    "objectives": [
      "Nắm được: Vòng lặp C++ While.",
      "Trình bày được: Vòng lặp C++; Vòng lặp While trong C++ (C++ While Loop); Cú pháp.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Vòng lặp có thể chạy một khối mã khi điều kiện chỉ định còn đạt. Vòng lặp tiện lợi vì tiết kiệm thời gian, giảm lỗi và code dễ đọc hơn. Vòng lặp while lặp khối mã khi điều kiện chỉ định còn đúng: Ví dụ dưới đây, mã trong vòng lặp chạy đi chạy lại khi biến (i) còn nhỏ hơn 5: Lưu ý: đừng quên tăng biến dùng trong điều kiện (i++), nếu không vòng lặp sẽ không bao giờ kết thúc! Bạn có thắc mắc vì sao dùng i làm tên biến? Đó là biến đếm, lựa chọn phổ biến trong vòng lặp đơn giản vì ngắn, theo truyền thống, và là viết tắt của 'index'/'iterator'. Ví dụ này đếm ngược từ 3 xuống 1 rồi hiển thị \"Happy New Year!!\":"
    },
    "sections": [
      "Vòng lặp C++",
      "Vòng lặp While trong C++ (C++ While Loop)",
      "Cú pháp",
      "Ví dụ",
      "Ví dụ về đếm ngược"
    ],
    "syntax": [
      {
        "code": "int i = 0;\nwhile (i < 5) {\n     cout << i << \"\\n\";\n   i++;\n}",
        "explanation": "Ví dụ dưới đây, mã trong vòng lặp chạy đi chạy lại khi biến (i) còn nhỏ hơn 5:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int i = 0;\n  while (i < 5) {\n       cout << i << \"\\n\";\n     i++;\n  }\n  return 0;\n}\n",
        "output": "0\n1\n2\n3\n4",
        "explanation": "Ví dụ dưới đây, mã trong vòng lặp chạy đi chạy lại khi biến (i) còn nhỏ hơn 5:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int countdown = 3;\n\n  while (countdown > 0) {\n    cout << countdown << \"\\n\";\n    countdown--;\n  }\n\n  cout << \"Happy New Year!!\\n\";\n  return 0;\n}\n",
        "output": "3\n2\n1\nHappy New Year!!",
        "explanation": "Ví dụ này đếm ngược từ 3 xuống 1 rồi hiển thị \"Happy New Year!!\":"
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý tập hợp/mảng nhiều phần tử.",
      "Tự động hóa tác vụ lặp (đếm, in bảng, tính tổng)."
    ],
    "notes": [
      "Lưu ý: đừng quên tăng biến dùng trong điều kiện (i++), nếu không vòng lặp sẽ không bao giờ kết thúc!"
    ],
    "commonMistakes": [
      {
        "wrong": "Vòng lặp while không có câu lệnh làm thay đổi điều kiện.",
        "why": "Điều kiện không bao giờ sai → lặp vô hạn.",
        "correct": "Đảm bảo biến đếm/điều kiện thay đổi trong thân vòng lặp."
      },
      {
        "wrong": "new mà quên delete.",
        "why": "Bộ nhớ không được giải phóng gây rò rỉ (memory leak).",
        "correct": "Dùng cân bằng new/delete hoặc smart pointer."
      }
    ],
    "keyTakeaways": [
      "Vòng lặp có thể chạy một khối mã khi điều kiện chỉ định còn đạt.",
      "Vòng lặp tiện lợi vì tiết kiệm thời gian, giảm lỗi và code dễ đọc hơn.",
      "Vòng lặp while lặp khối mã khi điều kiện chỉ định còn đúng:",
      "Ví dụ dưới đây, mã trong vòng lặp chạy đi chạy lại khi biến (i) còn nhỏ hơn 5:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_while_loop.asp"
  },
  {
    "id": "cpp-do-while-loop",
    "slug": "do-while-loop",
    "title": "Vòng lặp do-while (Do While Loop)",
    "titleEn": "C++ Do While Loop",
    "num": 59,
    "chapter": "07 · Vòng lặp",
    "topic": "Loops",
    "difficulty": "beginner",
    "estimatedTime": 17,
    "prerequisites": [
      "cpp-while-loop"
    ],
    "description": "Vòng lặp do/while là biến thể của while. Vòng lặp này thực thi khối mã một lần trước khi kiểm tra điều kiện có đúng không.",
    "objectives": [
      "Nắm được: Vòng lặp Do While C++.",
      "Trình bày được: Vòng lặp Do/While; Cú pháp; Ví dụ Thực hiện/Trong khi.",
      "Chạy và sửa được 4 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Vòng lặp do/while là biến thể của while. Vòng lặp này thực thi khối mã một lần trước khi kiểm tra điều kiện có đúng không. Lưu ý: dấu chấm phẩy ; sau điều kiện while là bắt buộc! Ví dụ dưới dùng do/while. Vòng lặp luôn chạy ít nhất một lần dù điều kiện sai, vì khối mã chạy trước khi kiểm tra điều kiện. Đừng quên tăng biến dùng trong điều kiện (i++), nếu không vòng lặp sẽ không bao giờ kết thúc! Ở ví dụ trên, điều kiện i < 5 đúng ngay từ đầu nên vòng lặp chạy nhiều lần. Nhưng nếu điều kiện sai ngay từ đầu thì sao? Ví dụ dưới đây, biến i bắt đầu từ 10 nên điều kiện i < 5 sai ngay - nhưng vòng lặp do/while vẫn chạy một lần: do/while luôn chạy ít nhất một lần, kể cả khi điều kiện đã sai. Khác với while thường - sẽ bỏ qua hoàn toàn nếu điều kiện sai ngay từ đầu. Hành vi này làm cho do/while hữu ích khi bạn muốn chắc chắn một điều gì đó xảy ra ít nhất một lần, như hiển thị thông báo hoặc yêu cầu dữ liệu nhập. Ví dụ này liên tục hỏi người dùng nhập số dương. Vòng lặp dừng khi nhập 0 hoặc số âm:"
    },
    "sections": [
      "Vòng lặp Do/While",
      "Cú pháp",
      "Ví dụ Thực hiện/Trong khi",
      "Ví dụ",
      "Điều kiện Sai ngay từ đầu",
      "Bản chất kỹ thuật của sáng chế",
      "Ví dụ thực tế: nhập liệu từ người dùng"
    ],
    "syntax": [
      {
        "code": "do {\n   // code block to be executed\n }\n while (condition);",
        "explanation": "Vòng lặp do/while là biến thể của while. Vòng lặp này thực thi khối mã một lần trước khi kiểm tra điều kiện có đúng không."
      }
    ],
    "examples": [
      {
        "title": "Cú pháp",
        "code": "do {\n   // code block to be executed\n }\n while (condition);",
        "output": "",
        "explanation": "Vòng lặp do/while là biến thể của while. Vòng lặp này thực thi khối mã một lần trước khi kiểm tra điều kiện có đúng không.",
        "runnable": false
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int i = 0;\n  do {\n       cout << i << \"\\n\";\n     i++;\n  }\n  while (i < 5);\n  return 0;\n}\n",
        "output": "0\n1\n2\n3\n4",
        "explanation": "Ví dụ dưới dùng do/while. Vòng lặp luôn chạy ít nhất một lần dù điều kiện sai, vì khối mã chạy trước khi kiểm tra điều kiện."
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int i = 10;\n   do {\n     cout << \"i is \" << i << \"\\n\";\n     i++;\n   } while (i < 5);\n  return 0;\n}\n",
        "output": "i is 10",
        "explanation": "Ví dụ dưới đây, biến i bắt đầu từ 10 nên điều kiện i < 5 sai ngay - nhưng vòng lặp do/while vẫn chạy một lần:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main() {\n  int number;\n  do {\n    cout << \"Enter a positive number: \";\n    cin >> number;\n  } while (number > 0);\n  cout << \"Ban da nhap \" << number;\n  return 0;\n}\n",
        "output": "",
        "explanation": "Ví dụ này liên tục hỏi người dùng nhập số dương. Vòng lặp dừng khi nhập 0 hoặc số âm:",
        "input": "5 -1"
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý tập hợp/mảng nhiều phần tử.",
      "Tự động hóa tác vụ lặp (đếm, in bảng, tính tổng)."
    ],
    "notes": [
      "Lưu ý: dấu chấm phẩy ; sau điều kiện while là bắt buộc!"
    ],
    "commonMistakes": [
      {
        "wrong": "Vòng lặp while không có câu lệnh làm thay đổi điều kiện.",
        "why": "Điều kiện không bao giờ sai → lặp vô hạn.",
        "correct": "Đảm bảo biến đếm/điều kiện thay đổi trong thân vòng lặp."
      }
    ],
    "keyTakeaways": [
      "Vòng lặp do/while là biến thể của while. Vòng lặp này thực thi khối mã một lần trước khi kiểm tra điều kiện có đúng khôn g.…",
      "Lưu ý: dấu chấm phẩy ; sau điều kiện while là bắt buộc!",
      "Ví dụ dưới dùng do/while. Vòng lặp luôn chạy ít nhất một lần dù điều kiện sai, vì khối mã chạy trước khi kiểm tra điều k iện.…",
      "Đừng quên tăng biến dùng trong điều kiện (i++), nếu không vòng lặp sẽ không bao giờ kết thúc!"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_do_while_loop.asp"
  },
  {
    "id": "cpp-while-loop-reallife",
    "slug": "while-loop-reallife",
    "title": "Ví dụ thực tế vòng lặp while",
    "titleEn": "C++ Real Life While Loop Examples",
    "num": 60,
    "chapter": "07 · Vòng lặp",
    "topic": "Loops",
    "difficulty": "beginner",
    "estimatedTime": 17,
    "prerequisites": [
      "cpp-do-while-loop"
    ],
    "description": "Để minh họa ví dụ thực tế của vòng lặp while, ta tạo chương trình \"đếm ngược\" đơn giản:",
    "objectives": [
      "Nắm được: Ví dụ thực tế vòng lặp While trong C++.",
      "Trình bày được: Ví dụ thực tế; Ví dụ.",
      "Chạy và sửa được 4 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Để minh họa ví dụ thực tế của vòng lặp while, ta tạo chương trình \"đếm ngược\" đơn giản: Ví dụ này tạo chương trình chỉ in số chẵn từ 0 đến 10 (bao gồm 2 đầu): Ví dụ này dùng vòng lặp while để đảo ngược một số: Để minh họa while kết hợp if else trong thực tế, giả sử ta chơi game Yatzy: Nếu vòng lặp nhận giá trị từ 1 đến 5, in \"No Yatzy\". Mỗi khi giá trị 6 đi qua, in \"Yatzy!\"."
    },
    "sections": [
      "Ví dụ thực tế",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "int countdown = 3;\n\nwhile (countdown > 0) {\n  cout << countdown << \"\\n\";\n  countdown--;\n}\n\ncout << \"Happy New Year!!\\n\";",
        "explanation": "Để minh họa ví dụ thực tế của vòng lặp while, ta tạo chương trình \"đếm ngược\" đơn giản:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int countdown = 3;\n\n  while (countdown > 0) {\n    cout << countdown << \"\\n\";\n    countdown--;\n  }\n\n  cout << \"Happy New Year!!\\n\";\n  return 0;\n}\n",
        "output": "3\n2\n1\nHappy New Year!!",
        "explanation": "Để minh họa ví dụ thực tế của vòng lặp while, ta tạo chương trình \"đếm ngược\" đơn giản:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int i = 0;\n\n  while (i <= 10) {\n    cout << i << \"\\n\";\n    i += 2;\n  }\n  return 0;\n}\n",
        "output": "0\n2\n4\n6\n8\n10",
        "explanation": "Ví dụ này tạo chương trình chỉ in số chẵn từ 0 đến 10 (bao gồm 2 đầu):"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  // A variable with some specific numbers\n  int numbers = 12345;\n\n  // A variable to store the reversed number\n  int revNumbers = 0;\n\n  // Reverse and reorder the numbers\n  while (numbers) {\n    // Get the last number of 'numbers' and add it to 'revNumbers'\n    revNumbers = revNumbers * 10 + numbers % 10;\n    // Remove the last number of 'numbers'\n    numbers /= 10;\n  }\n\n  cout << \"Reversed numbers: \" << revNumbers << \"\\n\";\n  return 0;\n}\n",
        "output": "Reversed numbers: 54321",
        "explanation": "Ví dụ này dùng vòng lặp while để đảo ngược một số:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int dice = 1;\n\n  while (dice <= 6) {\n    if (dice < 6) {\n      cout << \"No Yatzy\\n\";\n    } else {\n      cout << \"Yatzy!\\n\";\n    }\n    dice = dice + 1;\n  }\n  return 0;\n}\n",
        "output": "No Yatzy\nNo Yatzy\nNo Yatzy\nNo Yatzy\nNo Yatzy\nYatzy!",
        "explanation": "Để minh họa while kết hợp if else trong thực tế, giả sử ta chơi game Yatzy:"
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý tập hợp/mảng nhiều phần tử.",
      "Tự động hóa tác vụ lặp (đếm, in bảng, tính tổng)."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Viết if (x = 5) thay vì if (x == 5).",
        "why": "Dấu = là gán, == mới là so sánh; gán trong if luôn cho kết quả true.",
        "correct": "if (x == 5) { ... }"
      },
      {
        "wrong": "Vòng lặp while không có câu lệnh làm thay đổi điều kiện.",
        "why": "Điều kiện không bao giờ sai → lặp vô hạn.",
        "correct": "Đảm bảo biến đếm/điều kiện thay đổi trong thân vòng lặp."
      }
    ],
    "keyTakeaways": [
      "Để minh họa ví dụ thực tế của vòng lặp while, ta tạo chương trình \"đếm ngược\" đơn giản:",
      "Ví dụ này tạo chương trình chỉ in số chẵn từ 0 đến 10 (bao gồm 2 đầu):",
      "Ví dụ này dùng vòng lặp while để đảo ngược một số:",
      "Để minh họa while kết hợp if else trong thực tế, giả sử ta chơi game Yatzy:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_while_loop_reallife.asp"
  },
  {
    "id": "cpp-challenges-while-loop",
    "slug": "challenges-while-loop",
    "title": "Thử thách vòng lặp while (While Challenge)",
    "titleEn": "C++ While Loop Challenge",
    "num": 61,
    "chapter": "07 · Vòng lặp",
    "topic": "Loops",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-while-loop-reallife"
    ],
    "description": "Kiểm tra hiểu biết về vòng lặp while C++ bằng thử thách code nhỏ.",
    "objectives": [
      "Nắm được: Thử thách vòng lặp While trong C++.",
      "Trình bày được: Thử thách: đếm từ 1 đến 5.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Kiểm tra hiểu biết về vòng lặp while C++ bằng thử thách code nhỏ."
    },
    "sections": [
      "Thử thách: đếm từ 1 đến 5"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  for (int i = 0; i < 5; i++) { cout << i << \"\\n\"; }\n  return 0;\n}",
        "explanation": "Vòng lặp for cơ bản — biến đổi điều kiện để quan sát hành vi lặp."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  for (int i = 0; i < 5; i++) { cout << i << \"\\n\"; }\n  return 0;\n}",
        "output": "0\n1\n2\n3\n4",
        "explanation": "Vòng lặp for cơ bản — biến đổi điều kiện để quan sát hành vi lặp."
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý tập hợp/mảng nhiều phần tử.",
      "Tự động hóa tác vụ lặp (đếm, in bảng, tính tổng)."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Vòng lặp while không có câu lệnh làm thay đổi điều kiện.",
        "why": "Điều kiện không bao giờ sai → lặp vô hạn.",
        "correct": "Đảm bảo biến đếm/điều kiện thay đổi trong thân vòng lặp."
      }
    ],
    "keyTakeaways": [
      "Kiểm tra hiểu biết về vòng lặp while C++ bằng thử thách code nhỏ."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_challenges_while_loop.asp"
  },
  {
    "id": "cpp-for-loop",
    "slug": "for-loop",
    "title": "Vòng lặp for (For Loop)",
    "titleEn": "C++ For Loop",
    "num": 62,
    "chapter": "07 · Vòng lặp",
    "topic": "Loops",
    "difficulty": "beginner",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-challenges-while-loop"
    ],
    "description": "Khi biết chính xác số lần lặp, hãy dùng for thay vì while:",
    "objectives": [
      "Nắm được: C++ cho vòng lặp.",
      "Trình bày được: C++ cho vòng lặp; Cú pháp; In số & dòng.",
      "Chạy và sửa được 5 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Khi biết chính xác số lần lặp, hãy dùng for thay vì while: Phát biểu 1 được thực thi (một lần) trước khi chạy khối mã. Phát biểu 2 xác định điều kiện để chạy khối mã. Phát biểu 3 được thực thi (mỗi lần) sau khi chạy khối mã. Ví dụ dưới đây sẽ in các số từ 0 đến 4: Ví dụ được giải thích Ví dụ này in các giá trị chẵn từ 0 đến 10: Ví dụ này tính tổng các số từ 1 đến 5: Ví dụ này đếm ngược từ 5 xuống 1:"
    },
    "sections": [
      "C++ cho vòng lặp",
      "Cú pháp",
      "In số & dòng",
      "Ví dụ",
      "In số chẵn",
      "Tổng các con số",
      "Đếm ngược"
    ],
    "syntax": [
      {
        "code": "for (statement 1; statement 2; statement 3) {\n   // code block to be executed\n  }",
        "explanation": "Khi biết chính xác số lần lặp, hãy dùng for thay vì while:"
      }
    ],
    "examples": [
      {
        "title": "Cú pháp",
        "code": "for (statement 1; statement 2; statement 3) {\n   // code block to be executed\n  }",
        "output": "",
        "explanation": "Khi biết chính xác số lần lặp, hãy dùng for thay vì while:",
        "runnable": false
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  for (int i = 0; i < 5; i++) {\n    cout << i << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "0\n1\n2\n3\n4",
        "explanation": "Ví dụ dưới đây sẽ in các số từ 0 đến 4:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  for (int i = 0; i <= 10; i = i + 2) {\n       cout << i << \"\\n\";\n   }\n  return 0;\n}\n",
        "output": "0\n2\n4\n6\n8\n10",
        "explanation": "Ví dụ này in các giá trị chẵn từ 0 đến 10:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int sum = 0;\n   for (int i = 1; i <= 5; i++) {\n     sum = sum + i;\n   }\n   cout << \"Sum is \" << sum;\n  return 0;\n}\n",
        "output": "Sum is 15",
        "explanation": "Ví dụ này tính tổng các số từ 1 đến 5:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  for (int i = 5; i > 0; i--) {\n     cout << i << \"\\n\";\n   }\n  return 0;\n}\n",
        "output": "5\n4\n3\n2\n1",
        "explanation": "Ví dụ này đếm ngược từ 5 xuống 1:"
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý tập hợp/mảng nhiều phần tử.",
      "Tự động hóa tác vụ lặp (đếm, in bảng, tính tổng)."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Vòng lặp while không có câu lệnh làm thay đổi điều kiện.",
        "why": "Điều kiện không bao giờ sai → lặp vô hạn.",
        "correct": "Đảm bảo biến đếm/điều kiện thay đổi trong thân vòng lặp."
      }
    ],
    "keyTakeaways": [
      "Khi biết chính xác số lần lặp, hãy dùng for thay vì while:",
      "Phát biểu 1 được thực thi (một lần) trước khi chạy khối mã.",
      "Phát biểu 2 xác định điều kiện để chạy khối mã.",
      "Phát biểu 3 được thực thi (mỗi lần) sau khi chạy khối mã."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_for_loop.asp"
  },
  {
    "id": "cpp-for-loop-nested",
    "slug": "for-loop-nested",
    "title": "Vòng lặp lồng nhau (Nested Loops)",
    "titleEn": "C++ Nested Loops",
    "num": 63,
    "chapter": "07 · Vòng lặp",
    "topic": "Loops",
    "difficulty": "beginner",
    "estimatedTime": 11,
    "prerequisites": [
      "cpp-for-loop"
    ],
    "description": "Cũng có thể đặt vòng lặp trong vòng lặp khác. Đó gọi là vòng lặp lồng.",
    "objectives": [
      "Nắm được: Vòng lặp lồng nhau C++.",
      "Trình bày được: Vòng lặp lồng nhau; Ví dụ bảng cửu chương; Ví dụ.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Cũng có thể đặt vòng lặp trong vòng lặp khác. Đó gọi là vòng lặp lồng. \"Vòng lặp trong\" chạy một lần cho mỗi lượt của \"vòng lặp ngoài\": Ví dụ này dùng vòng lặp lồng để in bảng cửu chương đơn giản (1 đến 3): Vòng lặp lồng hữu ích khi làm việc với bảng, ma trận hoặc cấu trúc dữ liệu nhiều chiều."
    },
    "sections": [
      "Vòng lặp lồng nhau",
      "Ví dụ bảng cửu chương",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "// Outer loop\nfor (int i = 1; i <= 2; ++i) {\n  cout << \"Outer: \" << i << \"\\n\"; // Executes 2 times\n\n  // Inner loop\n  for (int j = 1; j <= 3; ++j) {\n    cout << \" Inner: \" << j << \"\\n\"; // Executes 6 times (2 * 3)\n  }\n}",
        "explanation": "\"Vòng lặp trong\" chạy một lần cho mỗi lượt của \"vòng lặp ngoài\":"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  // Outer loop\n  for (int i = 1; i <= 2; ++i) {\n    cout << \"Outer: \" << i << \"\\n\"; // Executes 2 times\n\n    // Inner loop\n    for (int j = 1; j <= 3; ++j) {\n      cout << \" Inner: \" << j << \"\\n\"; // Executes 6 times (2 * 3)\n    }\n  }\n  return 0;\n}\n",
        "output": "Outer: 1\n Inner: 1\n Inner: 2\n Inner: 3\nOuter: 2\n Inner: 1\n Inner: 2\n Inner: 3",
        "explanation": "\"Vòng lặp trong\" chạy một lần cho mỗi lượt của \"vòng lặp ngoài\":"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  for (int i = 1; i <= 3; i++) {\n     for (int j = 1; j <= 3; j++) {\n       cout << i * j << \" \";\n     }\n     cout << \"\\n\";\n   }\n  return 0;\n}\n",
        "output": "1 2 3 \n2 4 6 \n3 6 9 ",
        "explanation": "Ví dụ này dùng vòng lặp lồng để in bảng cửu chương đơn giản (1 đến 3):"
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý tập hợp/mảng nhiều phần tử.",
      "Tự động hóa tác vụ lặp (đếm, in bảng, tính tổng)."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Bỏ qua kiểu dữ liệu hoặc header cần thiết.",
        "why": "Compiler không biết tên hoặc biểu thức có thể sai kiểu.",
        "correct": "Thêm header và chọn kiểu phù hợp trước khi biên dịch."
      }
    ],
    "keyTakeaways": [
      "Cũng có thể đặt vòng lặp trong vòng lặp khác. Đó gọi là vòng lặp lồng.",
      "\"Vòng lặp trong\" chạy một lần cho mỗi lượt của \"vòng lặp ngoài\":",
      "Ví dụ này dùng vòng lặp lồng để in bảng cửu chương đơn giản (1 đến 3):",
      "Vòng lặp lồng hữu ích khi làm việc với bảng, ma trận hoặc cấu trúc dữ liệu nhiều chiều."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_for_loop_nested.asp"
  },
  {
    "id": "cpp-for-loop-foreach",
    "slug": "for-loop-foreach",
    "title": "Vòng lặp Range-based for (foreach)",
    "titleEn": "C++ The foreach Loop (Ranged for-loop)",
    "num": 64,
    "chapter": "07 · Vòng lặp",
    "topic": "Loops",
    "difficulty": "beginner",
    "estimatedTime": 11,
    "prerequisites": [
      "cpp-for-loop-nested"
    ],
    "description": "Ngoài ra còn có \"for-each loop\" (còn gọi là ranged-based for loop), dùng để lặp qua phần tử trong mảng (hoặc cấu trúc dữ liệu khác):",
    "objectives": [
      "Nắm được: Vòng lặp foreach trong C++.",
      "Trình bày được: Vòng lặp foreach; Cú pháp; Lặp lại thông qua một chuỗi.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Ngoài ra còn có \"for-each loop\" (còn gọi là ranged-based for loop), dùng để lặp qua phần tử trong mảng (hoặc cấu trúc dữ liệu khác): Ví dụ sau xuất mọi phần tử của mảng bằng \"for-each loop\": Bạn cũng có thể dùng for-each để lặp qua ký tự của chuỗi: Lưu ý: đừng lo nếu chưa hiểu các ví dụ trên. Bạn sẽ học thêm về mảng ở chương C++ Arrays."
    },
    "sections": [
      "Vòng lặp foreach",
      "Cú pháp",
      "Lặp lại thông qua một chuỗi",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "int myNumbers[5] = {10, 20, 30, 40, 50};\nfor (int num : myNumbers) {\n  cout << num << \"\\n\";\n}",
        "explanation": "Ví dụ sau xuất mọi phần tử của mảng bằng \"for-each loop\":"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int myNumbers[5] = {10, 20, 30, 40, 50};\n  for (int num : myNumbers) {\n    cout << num << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "10\n20\n30\n40\n50",
        "explanation": "Ví dụ sau xuất mọi phần tử của mảng bằng \"for-each loop\":"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string word = \"Hello\";\n   for (char c : word) {\n     cout << c << \"\\n\";\n   }\n  return 0;\n}\n",
        "output": "H\ne\nl\nl\no",
        "explanation": "Bạn cũng có thể dùng for-each để lặp qua ký tự của chuỗi:"
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý tập hợp/mảng nhiều phần tử.",
      "Tự động hóa tác vụ lặp (đếm, in bảng, tính tổng)."
    ],
    "notes": [
      "Lưu ý: đừng lo nếu chưa hiểu các ví dụ trên. Bạn sẽ học thêm về mảng ở chương C++ Arrays."
    ],
    "commonMistakes": [
      {
        "wrong": "Vòng lặp while không có câu lệnh làm thay đổi điều kiện.",
        "why": "Điều kiện không bao giờ sai → lặp vô hạn.",
        "correct": "Đảm bảo biến đếm/điều kiện thay đổi trong thân vòng lặp."
      },
      {
        "wrong": "Truy cập phần tử ngoài chỉ mục hợp lệ (ví dụ arr[5] cho mảng 5 phần tử).",
        "why": "Chỉ mục hợp lệ là 0..n-1; vượt biên là undefined behavior.",
        "correct": "Duyệt i từ 0 đến n-1."
      }
    ],
    "keyTakeaways": [
      "Ngoài ra còn có \"for-each loop\" (còn gọi là ranged-based for loop), dùng để lặp qua phần tử trong mảng (hoặc cấu trúc dữ  liệu khác)…",
      "Ví dụ sau xuất mọi phần tử của mảng bằng \"for-each loop\":",
      "Bạn cũng có thể dùng for-each để lặp qua ký tự của chuỗi:",
      "Lưu ý: đừng lo nếu chưa hiểu các ví dụ trên. Bạn sẽ học thêm về mảng ở chương C++ Arrays."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_for_loop_foreach.asp"
  },
  {
    "id": "cpp-for-loop-reallife",
    "slug": "for-loop-reallife",
    "title": "Ví dụ thực tế vòng lặp for",
    "titleEn": "C++ Real Life For Loop Examples",
    "num": 65,
    "chapter": "07 · Vòng lặp",
    "topic": "Loops",
    "difficulty": "beginner",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-for-loop-foreach"
    ],
    "description": "Để minh họa ví dụ thực tế của vòng lặp for, hãy tạo chương trình đếm đến 100 theo chục:",
    "objectives": [
      "Nắm được: Ví dụ thực tế vòng lặp For trong C++.",
      "Trình bày được: Ví dụ thực tế; Ví dụ.",
      "Chạy và sửa được 5 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Để minh họa ví dụ thực tế của vòng lặp for, hãy tạo chương trình đếm đến 100 theo chục: Ví dụ này tạo chương trình chỉ in số chẵn từ 0 đến 10 (bao gồm 2 đầu): Ở đây ta chỉ in các số lẻ: Ví dụ này in các lũy thừa của 2 đến 512: Và ví dụ này tạo chương trình in bảng cửu chương của một số cho trước:"
    },
    "sections": [
      "Ví dụ thực tế",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "for (int i = 0; i <= 100; i += 10) {\n  cout << i << \"\\n\";\n}",
        "explanation": "Để minh họa ví dụ thực tế của vòng lặp for, hãy tạo chương trình đếm đến 100 theo chục:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  for (int i = 0; i <= 100; i += 10) {\n    cout << i << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "0\n10\n20\n30\n40\n50\n60\n70\n80\n90\n100",
        "explanation": "Để minh họa ví dụ thực tế của vòng lặp for, hãy tạo chương trình đếm đến 100 theo chục:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  for (int i = 0; i <= 10; i = i + 2) {\n    cout << i << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "0\n2\n4\n6\n8\n10",
        "explanation": "Ví dụ này tạo chương trình chỉ in số chẵn từ 0 đến 10 (bao gồm 2 đầu):"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  for (int i = 1; i <= 10; i = i + 2) {\n    cout << i << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "1\n3\n5\n7\n9",
        "explanation": "Ở đây ta chỉ in các số lẻ:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  for (int i = 2; i <= 512; i *= 2) {\n    cout << i << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "2\n4\n8\n16\n32\n64\n128\n256\n512",
        "explanation": "Ví dụ này in các lũy thừa của 2 đến 512:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int number = 2;\n  int i;\n\n  // Print the multiplication table for the number 2\n  for (i = 1; i <= 10; i++) {\n    cout << number << \" x \" << i << \" = \" << number * i << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n2 x 6 = 12\n2 x 7 = 14\n2 x 8 = 16\n2 x 9 = 18\n2 x 10 = 20",
        "explanation": "Và ví dụ này tạo chương trình in bảng cửu chương của một số cho trước:"
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý tập hợp/mảng nhiều phần tử.",
      "Tự động hóa tác vụ lặp (đếm, in bảng, tính tổng)."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Vòng lặp while không có câu lệnh làm thay đổi điều kiện.",
        "why": "Điều kiện không bao giờ sai → lặp vô hạn.",
        "correct": "Đảm bảo biến đếm/điều kiện thay đổi trong thân vòng lặp."
      }
    ],
    "keyTakeaways": [
      "Để minh họa ví dụ thực tế của vòng lặp for, hãy tạo chương trình đếm đến 100 theo chục:",
      "Ví dụ này tạo chương trình chỉ in số chẵn từ 0 đến 10 (bao gồm 2 đầu):",
      "Ở đây ta chỉ in các số lẻ:",
      "Ví dụ này in các lũy thừa của 2 đến 512:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_for_loop_reallife.asp"
  },
  {
    "id": "cpp-challenges-for-loop",
    "slug": "challenges-for-loop",
    "title": "Thử thách vòng lặp for (For Loop Challenge)",
    "titleEn": "C++ For Loop Challenge",
    "num": 66,
    "chapter": "07 · Vòng lặp",
    "topic": "Loops",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-for-loop-reallife"
    ],
    "description": "Kiểm tra hiểu biết về vòng lặp for C++ bằng thử thách code nhỏ.",
    "objectives": [
      "Nắm được: Thử thách vòng lặp For trong C++.",
      "Trình bày được: Thách thức: Đếm đến 5.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Kiểm tra hiểu biết về vòng lặp for C++ bằng thử thách code nhỏ."
    },
    "sections": [
      "Thách thức: Đếm đến 5"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  for (int i = 0; i < 5; i++) { cout << i << \"\\n\"; }\n  return 0;\n}",
        "explanation": "Vòng lặp for cơ bản — biến đổi điều kiện để quan sát hành vi lặp."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  for (int i = 0; i < 5; i++) { cout << i << \"\\n\"; }\n  return 0;\n}",
        "output": "0\n1\n2\n3\n4",
        "explanation": "Vòng lặp for cơ bản — biến đổi điều kiện để quan sát hành vi lặp."
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý tập hợp/mảng nhiều phần tử.",
      "Tự động hóa tác vụ lặp (đếm, in bảng, tính tổng)."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Vòng lặp while không có câu lệnh làm thay đổi điều kiện.",
        "why": "Điều kiện không bao giờ sai → lặp vô hạn.",
        "correct": "Đảm bảo biến đếm/điều kiện thay đổi trong thân vòng lặp."
      }
    ],
    "keyTakeaways": [
      "Kiểm tra hiểu biết về vòng lặp for C++ bằng thử thách code nhỏ."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_challenges_for_loop.asp"
  },
  {
    "id": "cpp-break",
    "slug": "break",
    "title": "Lệnh break và continue trong vòng lặp",
    "titleEn": "C++ Break and Continue",
    "num": 67,
    "chapter": "07 · Vòng lặp",
    "topic": "Loops",
    "difficulty": "beginner",
    "estimatedTime": 17,
    "prerequisites": [
      "cpp-challenges-for-loop"
    ],
    "description": "Bạn đã thấy câu lệnh break trong một chương trước của hướng dẫn. Nó được dùng để \"nhảy ra khỏi\" câu lệnh switch.",
    "objectives": [
      "Nắm được: Break và Continue trong C++.",
      "Trình bày được: Nghỉ giải lao C++; C++ Tiếp tục; Break và Continue trong vòng lặp While.",
      "Chạy và sửa được 4 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Bạn đã thấy câu lệnh break trong một chương trước của hướng dẫn. Nó được dùng để \"nhảy ra khỏi\" câu lệnh switch. Câu lệnh break cũng có thể dùng để nhảy ra khỏi vòng lặp. Ví dụ này nhảy khỏi vòng lặp khi i bằng 4: Câu lệnh continue phá một vòng lặp (trong vòng lặp) khi một điều kiện chỉ định xảy ra, rồi tiếp tục với vòng lặp kế tiếp. Ví dụ này bỏ qua giá trị 4: Bạn cũng có thể dùng break và continue trong vòng lặp while:"
    },
    "sections": [
      "Nghỉ giải lao C++",
      "C++ Tiếp tục",
      "Break và Continue trong vòng lặp While"
    ],
    "syntax": [
      {
        "code": "for (int i = 0; i < 10; i++) {\n  if (i == 4) {\n    break;\n  }\n  cout << i << \"\\n\";\n}",
        "explanation": "Ví dụ này nhảy khỏi vòng lặp khi i bằng 4:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  for (int i = 0; i < 10; i++) {\n    if (i == 4) {\n      break;\n    }\n    cout << i << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "0\n1\n2\n3",
        "explanation": "Ví dụ này nhảy khỏi vòng lặp khi i bằng 4:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  for (int i = 0; i < 10; i++) {\n    if (i == 4) {\n      continue;\n    }\n    cout << i << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "0\n1\n2\n3\n5\n6\n7\n8\n9",
        "explanation": "Ví dụ này bỏ qua giá trị 4:"
      },
      {
        "title": "Ví dụ về Nghỉ giải lao",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int i = 0;\n  while (i < 10) {\n    cout << i << \"\\n\";\n    i++;\n       if (i == 4) {\n      break;\n    }\n  }\n  return 0;\n}\n",
        "output": "0\n1\n2\n3",
        "explanation": "Bạn cũng có thể dùng break và continue trong vòng lặp while:"
      },
      {
        "title": "Tiếp tục ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int i = 0;\n  while (i < 10) {\n    if (i == 4) {\n      i++;\n      continue;\n       }\n    cout << i << \"\\n\";\n    i++;\n  }\n  return 0;\n}\n",
        "output": "0\n1\n2\n3\n5\n6\n7\n8\n9",
        "explanation": "Chạy thử và tự sửa code để cảm nhận cách nó hoạt động."
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý tập hợp/mảng nhiều phần tử.",
      "Tự động hóa tác vụ lặp (đếm, in bảng, tính tổng)."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Quên break ở cuối mỗi case.",
        "why": "Thiếu break gây 'fall-through': các case bên dưới cũng chạy theo.",
        "correct": "case 1: ... break;"
      },
      {
        "wrong": "Vòng lặp while không có câu lệnh làm thay đổi điều kiện.",
        "why": "Điều kiện không bao giờ sai → lặp vô hạn.",
        "correct": "Đảm bảo biến đếm/điều kiện thay đổi trong thân vòng lặp."
      }
    ],
    "keyTakeaways": [
      "Bạn đã thấy câu lệnh break trong một chương trước của hướng dẫn. Nó được dùng để \"nhảy ra khỏi\" câu lệnh switch.",
      "Câu lệnh break cũng có thể dùng để nhảy ra khỏi vòng lặp.",
      "Ví dụ này nhảy khỏi vòng lặp khi i bằng 4:",
      "Câu lệnh continue phá một vòng lặp (trong vòng lặp) khi một điều kiện chỉ định xảy ra, rồi tiếp tục với vòng lặp kế tiếp .…"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_break.asp"
  },
  {
    "id": "cpp-arrays",
    "slug": "arrays",
    "title": "Mảng trong C++ (Arrays)",
    "titleEn": "C++ Arrays",
    "num": 68,
    "chapter": "08 · Mảng",
    "topic": "Strings & Vectors",
    "difficulty": "beginner",
    "estimatedTime": 20,
    "prerequisites": [],
    "description": "Mảng dùng để lưu nhiều giá trị trong một biến thay vì khai báo từng biến riêng cho mỗi giá trị.",
    "objectives": [
      "Nắm được: Mảng C++.",
      "Trình bày được: Mảng C++; Truy cập các phần tử của mảng; Ví dụ.",
      "Chạy và sửa được 6 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Mảng dùng để lưu nhiều giá trị trong một biến thay vì khai báo từng biến riêng cho mỗi giá trị. Để khai báo mảng, định nghĩa kiểu biến, chỉ định tên mảng theo sau là ngoặc vuông và số phần tử nó sẽ lưu: Ta đã khai báo biến giữ mảng bốn chuỗi. Để chèn giá trị, dùng array literal - đặt các giá trị trong danh sách phân tách dấu phẩy, trong ngoặc nhọn: Để tạo mảng ba số nguyên, bạn có thể viết: Bạn truy cập phần tử mảng bằng chỉ mục trong ngoặc vuông []. Phát biểu này truy cập phần tử đầu tiên của cars: Lưu ý: chỉ mục mảng bắt đầu từ 0: [0] là phần tử đầu, [1] là phần tử thứ hai, v.v. Để đổi giá trị một phần tử cụ thể, hãy chỉ số mục của nó:"
    },
    "sections": [
      "Mảng C++",
      "Truy cập các phần tử của mảng",
      "Ví dụ",
      "Thay đổi một phần tử mảng"
    ],
    "syntax": [
      {
        "code": "string cars[4];",
        "explanation": "Để khai báo mảng, định nghĩa kiểu biến, chỉ định tên mảng theo sau là ngoặc vuông và số phần tử nó sẽ lưu:"
      }
    ],
    "examples": [
      {
        "title": "Mảng C++",
        "code": "#include <string>\nusing namespace std;\nint main() {\n  string cars[4];\n  return 0;\n}\n",
        "output": "",
        "explanation": "Để khai báo mảng, định nghĩa kiểu biến, chỉ định tên mảng theo sau là ngoặc vuông và số phần tử nó sẽ lưu:"
      },
      {
        "title": "Mảng C++",
        "code": "#include <string>\nusing namespace std;\nint main() {\n  string cars[4] = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n  return 0;\n}\n",
        "output": "",
        "explanation": "Ta đã khai báo biến giữ mảng bốn chuỗi. Để chèn giá trị, dùng array literal - đặt các giá trị trong danh sách phân tách dấu phẩy, trong ngoặc nhọn:"
      },
      {
        "title": "Mảng C++",
        "code": "int main() {\n  int myNum[3] = {10, 20, 30};\n  return 0;\n}\n",
        "output": "",
        "explanation": "Để tạo mảng ba số nguyên, bạn có thể viết:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string cars[4] = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n     cout << cars[0];\n  // Outputs Volvo\n  return 0;\n}\n",
        "output": "Volvo",
        "explanation": "Phát biểu này truy cập phần tử đầu tiên của cars:"
      },
      {
        "title": "Thay đổi một phần tử mảng",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main() {\n  string cars[4] = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n  cars[0] = \"Opel\";\n  cout << cars[0];\n  return 0;\n}\n",
        "output": "Opel",
        "explanation": "Để đổi giá trị một phần tử cụ thể, hãy chỉ số mục của nó:",
        "input": ""
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string cars[4] = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n  cars[0] = \"Opel\";\n     cout << cars[0];\n     // Now outputs Opel instead of Volvo\n  return 0;\n}\n",
        "output": "Opel",
        "explanation": "Chạy thử và tự sửa code để cảm nhận cách nó hoạt động."
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý văn bản, tên, mô tả.",
      "Lưu danh sách thay đổi kích thước."
    ],
    "notes": [
      "Lưu ý: chỉ mục mảng bắt đầu từ 0: [0] là phần tử đầu, [1] là phần tử thứ hai, v.v."
    ],
    "commonMistakes": [
      {
        "wrong": "Truy cập phần tử ngoài chỉ mục hợp lệ (ví dụ arr[5] cho mảng 5 phần tử).",
        "why": "Chỉ mục hợp lệ là 0..n-1; vượt biên là undefined behavior.",
        "correct": "Duyệt i từ 0 đến n-1."
      },
      {
        "wrong": "Quên #include <string> khi dùng std::string.",
        "why": "string không phải kiểu dựng sẵn — thiếu header sẽ không biên dịch.",
        "correct": "#include <string> rồi mới dùng string."
      }
    ],
    "keyTakeaways": [
      "Mảng dùng để lưu nhiều giá trị trong một biến thay vì khai báo từng biến riêng cho mỗi giá trị.",
      "Để khai báo mảng, định nghĩa kiểu biến, chỉ định tên mảng theo sau là ngoặc vuông và số phần tử nó sẽ lưu:",
      "Ta đã khai báo biến giữ mảng bốn chuỗi. Để chèn giá trị, dùng array literal - đặt các giá trị trong danh sách phân tách  dấu phẩy, trong ngoặc nhọn…",
      "Để tạo mảng ba số nguyên, bạn có thể viết:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_arrays.asp"
  },
  {
    "id": "cpp-arrays-loop",
    "slug": "arrays-loop",
    "title": "Duyệt mảng (Loop Through an Array)",
    "titleEn": "C++ Loop Through an Array",
    "num": 69,
    "chapter": "08 · Mảng",
    "topic": "Strings & Vectors",
    "difficulty": "beginner",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-arrays"
    ],
    "description": "Bạn có thể lặp qua phần tử mảng bằng vòng lặp for.",
    "objectives": [
      "Nắm được: Vòng lặp qua mảng trong C++.",
      "Trình bày được: Lặp qua một mảng; Ví dụ; Vòng lặp foreach.",
      "Chạy và sửa được 5 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Bạn có thể lặp qua phần tử mảng bằng vòng lặp for. Ví dụ sau xuất mọi phần tử của mảng cars: Ví dụ này xuất chỉ mục của từng phần tử kèm giá trị: Ví dụ này cho thấy cách lặp qua mảng số nguyên: Ngoài ra còn có \"for-each loop\" (từ C++11, 2011) chuyên dùng lặp qua phần tử mảng (và các cấu trúc dữ liệu khác như vector và list): Các ví dụ sau xuất mọi phần tử của mảng bằng \"for-each loop\": Lặp qua các số nguyên: Lă ̣ p qua ca ́ c chuô"
    },
    "sections": [
      "Lặp qua một mảng",
      "Ví dụ",
      "Vòng lặp foreach",
      "Cú pháp"
    ],
    "syntax": [
      {
        "code": "// Create an array of strings\nstring cars[5] = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\", \"Tesla\"};\n\n// Loop through strings\nfor (int i = 0; i < 5; i++) {\n  cout << cars[i] << \"\\n\";\n}",
        "explanation": "Ví dụ sau xuất mọi phần tử của mảng cars:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  // Create an array of strings\n  string cars[5] = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\", \"Tesla\"};\n\n  // Loop through strings\n  for (int i = 0; i < 5; i++) {\n    cout << cars[i] << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "Volvo\nBMW\nFord\nMazda\nTesla",
        "explanation": "Ví dụ sau xuất mọi phần tử của mảng cars:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string cars[5] = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\", \"Tesla\"};\n  for (int i = 0; i < 5; i++) {\n    cout << i << \" = \" << cars[i] << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "0 = Volvo\n1 = BMW\n2 = Ford\n3 = Mazda\n4 = Tesla",
        "explanation": "Ví dụ này xuất chỉ mục của từng phần tử kèm giá trị:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int myNumbers[5] = {10, 20, 30, 40, 50};\n  for (int i = 0; i < 5; i++) {\n    cout << myNumbers[i] << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "10\n20\n30\n40\n50",
        "explanation": "Ví dụ này cho thấy cách lặp qua mảng số nguyên:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  // Create an array of integers\n  int myNumbers[5] = {10, 20, 30, 40, 50};\n\n  // Loop through integers\n  for (int num : myNumbers) {\n    cout << num << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "10\n20\n30\n40\n50",
        "explanation": "Lặp qua các số nguyên:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  // Create an array of strings\n  string cars[5] = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\", \"Tesla\"};\n\n  // Loop through strings\n  for (string car : cars) {\n    cout << car << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "Volvo\nBMW\nFord\nMazda\nTesla",
        "explanation": "Lă ̣ p qua ca ́ c chuô"
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý văn bản, tên, mô tả.",
      "Lưu danh sách thay đổi kích thước."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Vòng lặp while không có câu lệnh làm thay đổi điều kiện.",
        "why": "Điều kiện không bao giờ sai → lặp vô hạn.",
        "correct": "Đảm bảo biến đếm/điều kiện thay đổi trong thân vòng lặp."
      },
      {
        "wrong": "Truy cập phần tử ngoài chỉ mục hợp lệ (ví dụ arr[5] cho mảng 5 phần tử).",
        "why": "Chỉ mục hợp lệ là 0..n-1; vượt biên là undefined behavior.",
        "correct": "Duyệt i từ 0 đến n-1."
      }
    ],
    "keyTakeaways": [
      "Bạn có thể lặp qua phần tử mảng bằng vòng lặp for.",
      "Ví dụ sau xuất mọi phần tử của mảng cars:",
      "Ví dụ này xuất chỉ mục của từng phần tử kèm giá trị:",
      "Ví dụ này cho thấy cách lặp qua mảng số nguyên:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_arrays_loop.asp"
  },
  {
    "id": "cpp-arrays-omit",
    "slug": "arrays-omit",
    "title": "Khai báo mảng và kích thước ngầm định (Omit Array Size)",
    "titleEn": "C++ Omit Array Size and Elements on Declaration",
    "num": 70,
    "chapter": "08 · Mảng",
    "topic": "Strings & Vectors",
    "difficulty": "beginner",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-arrays-loop"
    ],
    "description": "Trong C++, bạn không cần chỉ định kích thước mảng. Trình biên dịch đủ thông minh để xác định kích thước dựa trên số giá trị được đưa vào:",
    "objectives": [
      "Nắm được: Bỏ qua kích thước và phần tử mảng khi khai báo trong C++.",
      "Trình bày được: Bỏ qua kích thước mảng; Bỏ qua phần tử khi khai báo; Ví dụ.",
      "Chạy và sửa được 5 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Trong C++, bạn không cần chỉ định kích thước mảng. Trình biên dịch đủ thông minh để xác định kích thước dựa trên số giá trị được đưa vào: Ví dụ trên tương đương với: Tuy nhiên cách cuối được xem là \"thực hành tốt\" vì giảm nguy cơ lỗi trong chương trình. Cũng có thể khai báo mảng không chỉ định phần tử, rồi thêm sau: Lưu ý: ví dụ trên chỉ hoạt động khi bạn đã chỉ định kích thước mảng. Nếu không chỉ định kích thước mảng, sẽ phát sinh lỗi: Bạn sẽ thường nghe \"kích thước cố định\" và \"kích thước động\" khi thảo luận về mảng C++. Lý do là kích thước mảng trong C++ cố định, không thể thêm/xóa phần tử sau khi tạo. Với thao tác cần thêm/xóa phần tử mảng, C++ cung cấp vector - mảng có thể thay đổi kích thước. Kích thước vector là động, tức là có thể tăng giảm tùy ý. Vector nằm trong thư viện <vector> và đi kèm nhiều hàm hữu ích để thêm, xóa và sửa phần tử: Đây chỉ là giới thiệu về vector để bạn biết \"mảng thay đổi kích thước\" tồn tại. Đừng lo nếu bạn chưa hiểu cú pháp ở trên. Bạn sẽ học nhiều hơn về vector và các cấu trúc dữ liệu trong chương sau."
    },
    "sections": [
      "Bỏ qua kích thước mảng",
      "Bỏ qua phần tử khi khai báo",
      "Ví dụ",
      "Kích thước cố định (mảng) so với động (vector)",
      "Vectơ"
    ],
    "syntax": [
      {
        "code": "string cars[] = {\"Volvo\", \"BMW\", \"Ford\"}; // Three array elements",
        "explanation": "Trong C++, bạn không cần chỉ định kích thước mảng. Trình biên dịch đủ thông minh để xác định kích thước dựa trên số giá trị được đưa vào:"
      }
    ],
    "examples": [
      {
        "title": "Bỏ qua kích thước mảng",
        "code": "#include <string>\nusing namespace std;\nint main() {\n  string cars[] = {\"Volvo\", \"BMW\", \"Ford\"}; // Three array elements\n  return 0;\n}\n",
        "output": "",
        "explanation": "Trong C++, bạn không cần chỉ định kích thước mảng. Trình biên dịch đủ thông minh để xác định kích thước dựa trên số giá trị được đưa vào:"
      },
      {
        "title": "Bỏ qua kích thước mảng",
        "code": "#include <string>\nusing namespace std;\nint main() {\n  string cars[3] = {\"Volvo\", \"BMW\", \"Ford\"}; // Also three array elements\n  return 0;\n}\n",
        "output": "",
        "explanation": "Ví dụ trên tương đương với:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <string>\nusing namespace std;\nint main() {\n  string cars[5];\n  cars[0] = \"Volvo\";\n  cars[1] = \"BMW\";\n  cars[2] = \"Ford\";\n  cars[3] = \"Mazda\";\n  cars[4] = \"Tesla\";\n  return 0;\n}\n",
        "output": "",
        "explanation": "Cũng có thể khai báo mảng không chỉ định phần tử, rồi thêm sau:"
      },
      {
        "title": "Kích thước cố định (mảng) so với động (vector)",
        "code": "// An array with 3 elements\nstring cars[3] = {\"Volvo\", \"BMW\", \"Ford\"};\n\n// Trying to add another element (a fourth element) to the cars array will result in an error\ncars[3] = \"Tesla\";",
        "output": "",
        "explanation": "Lý do là kích thước mảng trong C++ cố định, không thể thêm/xóa phần tử sau khi tạo.",
        "runnable": false
      },
      {
        "title": "Vectơ",
        "code": "#include <string>\n#include <vector>\nusing namespace std;\nint main() {\n  // A vector with 3 elements\n  vector<string> cars = {\"Volvo\", \"BMW\", \"Ford\"};\n\n  // Adding another element to the vector\n  cars.push_back(\"Tesla\");\n  return 0;\n}\n",
        "output": "",
        "explanation": "Vector nằm trong thư viện <vector> và đi kèm nhiều hàm hữu ích để thêm, xóa và sửa phần tử:"
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý văn bản, tên, mô tả.",
      "Lưu danh sách thay đổi kích thước."
    ],
    "notes": [
      "Lưu ý: ví dụ trên chỉ hoạt động khi bạn đã chỉ định kích thước mảng."
    ],
    "commonMistakes": [
      {
        "wrong": "Truy cập phần tử ngoài chỉ mục hợp lệ (ví dụ arr[5] cho mảng 5 phần tử).",
        "why": "Chỉ mục hợp lệ là 0..n-1; vượt biên là undefined behavior.",
        "correct": "Duyệt i từ 0 đến n-1."
      },
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      }
    ],
    "keyTakeaways": [
      "Trong C++, bạn không cần chỉ định kích thước mảng. Trình biên dịch đủ thông minh để xác định kích thước dựa trên số giá  trị được đưa vào…",
      "Ví dụ trên tương đương với:",
      "Tuy nhiên cách cuối được xem là \"thực hành tốt\" vì giảm nguy cơ lỗi trong chương trình.",
      "Cũng có thể khai báo mảng không chỉ định phần tử, rồi thêm sau:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_arrays_omit.asp"
  },
  {
    "id": "cpp-arrays-size",
    "slug": "arrays-size",
    "title": "Kích thước mảng với sizeof (Get Array Size)",
    "titleEn": "C++ Get the Size of an Array",
    "num": 71,
    "chapter": "08 · Mảng",
    "topic": "Strings & Vectors",
    "difficulty": "beginner",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-arrays-omit"
    ],
    "description": "Để lấy kích thước mảng, dùng toán tử sizeof():",
    "objectives": [
      "Nắm được: Lấy kích thước mảng trong C++.",
      "Trình bày được: Lấy kích thước của một mảng; Ví dụ; Vòng lặp qua mảng với sizeof().",
      "Chạy và sửa được 5 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Để lấy kích thước mảng, dùng toán tử sizeof(): Sao kết quả là 20 thay vì 5 khi mảng chứa 5 phần tử? Lý do là toán tử sizeof() trả về kích thước của một kiểu tính bằng byte. Bạn đã học từ chương Data Types rằng kiểu int thường là 4 byte, nên từ ví dụ trên, 4 x 5 (4 byte x 5 phần tử) = 20 byte. Để biết mảng có bao nhiêu phần tử, phải chia kích thước mảng cho kích thước phần tử đầu tiên: Trong Chương Arrays and Loops, ta viết kích thước mảng ngay trong điều kiện lặp (i). Cách này không lý tưởng vì chỉ dùng được cho mảng có kích thước cố định. Tuy nhiên, bằng cách dùng phương pháp sizeof() từ ví dụ trên, giờ ta có thể tạo các vòng lặp hoạt động cho mảng có bất kỳ kích thước nào, bền vững hơn. Thay vì viết: Tốt hơn là viết: Lưu ý, từ C++11 (2011), bạn cũng có thể dùng vòng lặp \"for-each\" - gọn và đơn giản hơn: Nên biết nhiều cách lặp qua mảng, vì bạn sẽ gặp đủ loại trong các chương trình khác nhau."
    },
    "sections": [
      "Lấy kích thước của một mảng",
      "Ví dụ",
      "Vòng lặp qua mảng với sizeof()"
    ],
    "syntax": [
      {
        "code": "int myNumbers[5] = {10, 20, 30, 40, 50};\ncout << sizeof(myNumbers);",
        "explanation": "Để lấy kích thước mảng, dùng toán tử sizeof():"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int myNumbers[5] = {10, 20, 30, 40, 50};\n  cout << sizeof(myNumbers);\n  return 0;\n}\n",
        "output": "20",
        "explanation": "Để lấy kích thước mảng, dùng toán tử sizeof():"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int myNumbers[5] = {10, 20, 30, 40, 50};\n  int getArrayLength =    sizeof(myNumbers) / sizeof(myNumbers[0]);\n  cout << getArrayLength;\n  return 0;\n}\n",
        "output": "5",
        "explanation": "Để biết mảng có bao nhiêu phần tử, phải chia kích thước mảng cho kích thước phần tử đầu tiên:"
      },
      {
        "title": "Vòng lặp qua mảng với sizeof()",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int myNumbers[5] = {10, 20, 30, 40, 50};\n  for (int i = 0; i < 5; i++) {\n    cout << myNumbers[i] << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "10\n20\n30\n40\n50",
        "explanation": "Thay vì viết:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int myNumbers[5] = {10, 20, 30, 40, 50};\n  for (int i = 0; i < sizeof(myNumbers) / sizeof(myNumbers[0]); i++) {\n    cout << myNumbers[i] << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "10\n20\n30\n40\n50",
        "explanation": "Tốt hơn là viết:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int myNumbers[5] = {10, 20, 30, 40, 50};\n  for (int num : myNumbers) {\n    cout << num << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "10\n20\n30\n40\n50",
        "explanation": "Lưu ý, từ C++11 (2011), bạn cũng có thể dùng vòng lặp \"for-each\" - gọn và đơn giản hơn:"
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý văn bản, tên, mô tả.",
      "Lưu danh sách thay đổi kích thước."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Vòng lặp while không có câu lệnh làm thay đổi điều kiện.",
        "why": "Điều kiện không bao giờ sai → lặp vô hạn.",
        "correct": "Đảm bảo biến đếm/điều kiện thay đổi trong thân vòng lặp."
      },
      {
        "wrong": "Truy cập phần tử ngoài chỉ mục hợp lệ (ví dụ arr[5] cho mảng 5 phần tử).",
        "why": "Chỉ mục hợp lệ là 0..n-1; vượt biên là undefined behavior.",
        "correct": "Duyệt i từ 0 đến n-1."
      }
    ],
    "keyTakeaways": [
      "Để lấy kích thước mảng, dùng toán tử sizeof():",
      "Sao kết quả là 20 thay vì 5 khi mảng chứa 5 phần tử?",
      "Lý do là toán tử sizeof() trả về kích thước của một kiểu tính bằng byte.",
      "Bạn đã học từ chương Data Types rằng kiểu int thường là 4 byte, nên từ ví dụ trên, 4 x 5 (4 byte x 5 phần tử) = 20 byte."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_arrays_size.asp"
  },
  {
    "id": "cpp-arrays-reallife",
    "slug": "arrays-reallife",
    "title": "Ví dụ thực tế về mảng (Arrays Real Life)",
    "titleEn": "C++ Arrays Real Life Examples",
    "num": 72,
    "chapter": "08 · Mảng",
    "topic": "Strings & Vectors",
    "difficulty": "beginner",
    "estimatedTime": 11,
    "prerequisites": [
      "cpp-arrays-size"
    ],
    "description": "Để minh họa ví dụ thực tế của mảng, hãy tạo chương trình tính tuổi trung bình của nhiều người:",
    "objectives": [
      "Nắm được: Ví dụ thực tế về mảng trong C++.",
      "Trình bày được: Ví dụ thực tế; Ví dụ.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Để minh họa ví dụ thực tế của mảng, hãy tạo chương trình tính tuổi trung bình của nhiều người: Và ví dụ này tạo chương trình tìm tuổi nhỏ nhất trong các tuổi:"
    },
    "sections": [
      "Ví dụ thực tế",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "// An array storing different ages\nint ages[8] = {20, 22, 18, 35, 48, 26, 87, 70};\n\nfloat avg, sum = 0;\nint i;\n\n// Get the length of the array\nint length = sizeof(ages) / sizeof(ages[0]);\n\n// Loop through the elements of the array\nfor (int age : ages) {\n  sum += age;\n}\n\n// Calculate the average by dividing the sum by the length\navg = sum / length;\n\n// Print the average\ncout << \"The average age is: \" << avg << \"\\n\";",
        "explanation": "Để minh họa ví dụ thực tế của mảng, hãy tạo chương trình tính tuổi trung bình của nhiều người:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  // An array storing different ages\n  int ages[8] = {20, 22, 18, 35, 48, 26, 87, 70};\n\n  float avg, sum = 0;\n  int i;\n\n  // Get the length of the array\n  int length = sizeof(ages) / sizeof(ages[0]);\n\n  // Loop through the elements of the array\n  for (int age : ages) {\n    sum += age;\n  }\n\n  // Calculate the average by dividing the sum by the length\n  avg = sum / length;\n\n  // Print the average\n  cout << \"The average age is: \" << avg << \"\\n\";\n  return 0;\n}\n",
        "output": "The average age is: 40.75",
        "explanation": "Để minh họa ví dụ thực tế của mảng, hãy tạo chương trình tính tuổi trung bình của nhiều người:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  // An array storing different ages\n  int ages[8] = {20, 22, 18, 35, 48, 26, 87, 70};\n\n  int i;\n\n  // Create a variable and assign the first array element of ages to it\n  int lowestAge = ages[0];\n\n  // Loop through the elements of the ages array to find the lowest age\n  for (int age : ages) {\n    if (lowestAge > age) {\n      lowestAge = age;\n    }\n  }\n\n  // Print the lowest age\n  cout << \"The lowest age is: \" << lowestAge << \"\\n\";\n  return 0;\n}\n",
        "output": "The lowest age is: 18",
        "explanation": "Và ví dụ này tạo chương trình tìm tuổi nhỏ nhất trong các tuổi:"
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý văn bản, tên, mô tả.",
      "Lưu danh sách thay đổi kích thước."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Truy cập phần tử ngoài chỉ mục hợp lệ (ví dụ arr[5] cho mảng 5 phần tử).",
        "why": "Chỉ mục hợp lệ là 0..n-1; vượt biên là undefined behavior.",
        "correct": "Duyệt i từ 0 đến n-1."
      }
    ],
    "keyTakeaways": [
      "Để minh họa ví dụ thực tế của mảng, hãy tạo chương trình tính tuổi trung bình của nhiều người:",
      "Và ví dụ này tạo chương trình tìm tuổi nhỏ nhất trong các tuổi:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_arrays_reallife.asp"
  },
  {
    "id": "cpp-arrays-multi",
    "slug": "arrays-multi",
    "title": "Mảng nhiều chiều (Multi-Dimensional Arrays)",
    "titleEn": "C++ Multi-Dimensional Arrays",
    "num": 73,
    "chapter": "08 · Mảng",
    "topic": "Strings & Vectors",
    "difficulty": "beginner",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-arrays-reallife"
    ],
    "description": "Mảng nhiều chiều là mảng của các mảng.",
    "objectives": [
      "Nắm được: Mảng nhiều chiều trong C++.",
      "Trình bày được: Mảng nhiều chiều; Truy cập phần tử của mảng nhiều chiều; Ví dụ.",
      "Chạy và sửa được 6 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Mảng nhiều chiều là mảng của các mảng. Để khai báo mảng nhiều chiều, định nghĩa kiểu biến, chỉ định tên mảng theo sau là ngoặc vuông chỉ số phần tử của mảng chính, tiếp theo là một cặp ngoặc vuông khác chỉ số phần tử của mảng con: Giống mảng thường, bạn chèn giá trị bằng array literal - danh sách phân tách dấu phẩy trong ngoặc nhọn. Với mảng nhiều chiều, mỗi phần tử của array literal lại là một array literal. Mỗi cặp ngoặc vuông trong khai báo mảng thêm một chiều cho mảng. Một mảng như trên được cho là có hai chiều. Mảng có thể có bao nhiêu chiều cũng được. Càng nhiều chiều, code càng phức tạp. Để truy cập phần tử của mảng nhiều chiều, chỉ định một chỉ mục cho mỗi chiều của mảng. Phát biểu này truy cập giá trị phần tử ở hàng đầu tiên (0) và cột thứ ba (2) của mảng letters. Đừng quên rằng: chỉ mục mảng bắt đầu từ 0: [0] là phần tử đầu, [1] là phần tử thứ hai, v.v. Để đổi giá trị một phần tử, hãy chỉ số mục của nó ở từng chiều: Để lặp qua mảng nhiều chiều, cần một vòng lặp cho mỗi chiều của mảng. Ví dụ sau xuất mọi phần tử của mảng letters: Ví dụ này cho thấy cách lặp qua mảng ba chiều: Mảng nhiều chiều rất hợp biểu diễn lưới/ô. Ví dụ này cho thấy ứng dụng thực tế của chúng."
    },
    "sections": [
      "Mảng nhiều chiều",
      "Truy cập phần tử của mảng nhiều chiều",
      "Ví dụ",
      "Thay đổi phần tử trong mảng nhiều chiều",
      "Vòng lặp qua mảng nhiều chiều",
      "Tại sao dùng mảng nhiều chiều?"
    ],
    "syntax": [
      {
        "code": "string letters[2][4];",
        "explanation": "Để khai báo mảng nhiều chiều, định nghĩa kiểu biến, chỉ định tên mảng theo sau là ngoặc vuông chỉ số phần tử của mảng chính, tiếp theo là một cặp ngoặc vuông khác chỉ số phần tử của mảng con:"
      }
    ],
    "examples": [
      {
        "title": "Mảng nhiều chiều",
        "code": "#include <string>\nusing namespace std;\nint main() {\n  string letters[2][4];\n  return 0;\n}\n",
        "output": "",
        "explanation": "Để khai báo mảng nhiều chiều, định nghĩa kiểu biến, chỉ định tên mảng theo sau là ngoặc vuông chỉ số phần tử của mảng chính, tiếp theo là một cặp ngoặc vuông khác chỉ số phần tử của mảng con:"
      },
      {
        "title": "Mảng nhiều chiều",
        "code": "#include <string>\nusing namespace std;\nint main() {\n  string letters[2][4] = {\n    { \"A\", \"B\", \"C\", \"D\" },\n    { \"E\", \"F\", \"G\", \"H\" }\n  };\n  return 0;\n}\n",
        "output": "",
        "explanation": "Giống mảng thường, bạn chèn giá trị bằng array literal - danh sách phân tách dấu phẩy trong ngoặc nhọn. Với mảng nhiều chiều, mỗi phần tử của array literal lại là một array literal."
      },
      {
        "title": "Mảng nhiều chiều",
        "code": "#include <string>\nusing namespace std;\nint main() {\n  string letters[2][2][2] = {\n    {\n      { \"A\", \"B\" },\n      { \"C\", \"D\" }\n    },\n    {\n      { \"E\", \"F\" },\n      { \"G\", \"H\" }\n    }\n  };\n  return 0;\n}\n",
        "output": "",
        "explanation": "Mảng có thể có bao nhiêu chiều cũng được. Càng nhiều chiều, code càng phức tạp."
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string letters[2][4] = {\n    { \"A\", \"B\", \"C\", \"D\" },\n    { \"E\", \"F\", \"G\", \"H\" }\n  };\n\n  cout << letters[0][2];  // Outputs \"C\"\n  return 0;\n}\n",
        "output": "C",
        "explanation": "Phát biểu này truy cập giá trị phần tử ở hàng đầu tiên (0) và cột thứ ba (2) của mảng letters."
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string letters[2][4] = {\n    { \"A\", \"B\", \"C\", \"D\" },\n    { \"E\", \"F\", \"G\", \"H\" }\n  };\n  letters[0][0] = \"Z\";\n\n  cout << letters[0][0];  // Now outputs \"Z\" instead of \"A\"\n  return 0;\n}\n",
        "output": "Z",
        "explanation": "Để đổi giá trị một phần tử, hãy chỉ số mục của nó ở từng chiều:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string letters[2][4] = {\n    { \"A\", \"B\", \"C\", \"D\" },\n    { \"E\", \"F\", \"G\", \"H\" }\n  };\n\n  for (int i = 0; i < 2; i++) {\n    for (int j = 0; j < 4; j++) {\n      cout << letters[i][j] << \"\\n\";\n    }\n  }\n  return 0;\n}\n",
        "output": "A\nB\nC\nD\nE\nF\nG\nH",
        "explanation": "Ví dụ sau xuất mọi phần tử của mảng letters:"
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý văn bản, tên, mô tả.",
      "Lưu danh sách thay đổi kích thước."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Truy cập phần tử ngoài chỉ mục hợp lệ (ví dụ arr[5] cho mảng 5 phần tử).",
        "why": "Chỉ mục hợp lệ là 0..n-1; vượt biên là undefined behavior.",
        "correct": "Duyệt i từ 0 đến n-1."
      },
      {
        "wrong": "Dùng con trỏ chưa khởi tạo hoặc đã delete.",
        "why": "Trỏ vào vùng nhớ rác gây crash hoặc dữ liệu sai khó tìm.",
        "correct": "Khởi tạo nullptr, kiểm tra trước khi dereference, set nullptr sau delete."
      }
    ],
    "keyTakeaways": [
      "Mảng nhiều chiều là mảng của các mảng.",
      "Để khai báo mảng nhiều chiều, định nghĩa kiểu biến, chỉ định tên mảng theo sau là ngoặc vuông chỉ số phần tử của mảng ch…",
      "Giống mảng thường, bạn chèn giá trị bằng array literal - danh sách phân tách dấu phẩy trong ngoặc nhọn. Với mảng nhiều c…",
      "Mỗi cặp ngoặc vuông trong khai báo mảng thêm một chiều cho mảng. Một mảng như trên được cho là có hai chiều."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_arrays_multi.asp"
  },
  {
    "id": "cpp-challenges-arrays",
    "slug": "challenges-arrays",
    "title": "Thử thách về mảng (Arrays Challenge)",
    "titleEn": "C++ Arrays Challenge",
    "num": 74,
    "chapter": "08 · Mảng",
    "topic": "Strings & Vectors",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-arrays-multi"
    ],
    "description": "Kiểm tra hiểu biết về mảng C++ bằng thử thách code nhỏ.",
    "objectives": [
      "Nắm được: Thử thách mảng C++.",
      "Trình bày được: Thử thách: tạo một mảng đơn giản.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Kiểm tra hiểu biết về mảng C++ bằng thử thách code nhỏ."
    },
    "sections": [
      "Thử thách: tạo một mảng đơn giản"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int cars[4] = {1962, 1966, 1974, 2014};\n  cout << cars[0] << \" \" << sizeof(cars) / sizeof(cars[0]);\n  return 0;\n}",
        "explanation": "Mảng số nguyên và cách lấy số phần tử — chỗ để thử các phép với mảng."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int cars[4] = {1962, 1966, 1974, 2014};\n  cout << cars[0] << \" \" << sizeof(cars) / sizeof(cars[0]);\n  return 0;\n}",
        "output": "1962 4",
        "explanation": "Mảng số nguyên và cách lấy số phần tử — chỗ để thử các phép với mảng."
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý văn bản, tên, mô tả.",
      "Lưu danh sách thay đổi kích thước."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Truy cập phần tử ngoài chỉ mục hợp lệ (ví dụ arr[5] cho mảng 5 phần tử).",
        "why": "Chỉ mục hợp lệ là 0..n-1; vượt biên là undefined behavior.",
        "correct": "Duyệt i từ 0 đến n-1."
      }
    ],
    "keyTakeaways": [
      "Kiểm tra hiểu biết về mảng C++ bằng thử thách code nhỏ."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_challenges_arrays.asp"
  },
  {
    "id": "cpp-structs",
    "slug": "structs",
    "title": "Cấu trúc dữ liệu struct (Structures)",
    "titleEn": "C++ Structures (struct)",
    "num": 75,
    "chapter": "09 · Struct, Enum, Tham chiếu & Con trỏ",
    "topic": "Memory Safety",
    "difficulty": "intermediate",
    "estimatedTime": 20,
    "prerequisites": [],
    "description": "Cấu trúc (struct) là cách nhóm nhiều biến liên quan vào cùng một chỗ.",
    "objectives": [
      "Nắm được: Cấu trúc (struct) trong C++ (C++ Structures (struct)).",
      "Trình bày được: Cấu trúc C++; Tạo cấu trúc; Thành viên Cấu trúc Truy cập.",
      "Chạy và sửa được 6 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Cấu trúc (struct) là cách nhóm nhiều biến liên quan vào cùng một chỗ. Mỗi biến trong cấu trúc được gọi là một thành viên (member). Khác mảng, cấu trúc chứa được nhiều kiểu dữ liệu: int, string, bool, v.v. Để tạo cấu trúc, dùng từ khóa struct và khai báo từng thành viên trong ngoặc nhọn. Sau khi khai báo, hãy chỉ định tên biến cấu trúc (myStructure trong ví dụ dưới): Để truy cập thành viên cấu trúc, dùng cú pháp chấm ( . ): Gán dữ liệu cho các thành viên của cấu trúc và in ra: Bạn có thể dùng dấu phẩy ( , ) để dùng một cấu trúc cho nhiều biến: Ví dụ này cho thấy dùng một cấu trúc trong hai biến khác nhau: Dùng một cấu trúc để biểu diễn hai chiếc ô tô: Đặt tên cho cấu trúc giúp coi nó như một kiểu dữ liệu. Nghĩa là bạn có thể tạo biến theo cấu trúc này ở bất kỳ đâu trong chương trình. Để tạo cấu trúc có tên, đặt tên cấu trúc ngay sau từ khóa struct: Để khai báo biến dùng cấu trúc, hãy lấy tên cấu trúc làm kiểu dữ liệu của biến: Giờ cấu trúc có thể tái dùng mọi nơi với kiểu dữ liệu car: Dùng một cấu trúc để biểu diễn hai chiếc ô tô: Tạo cấu trúc biểu diễn một sinh viên với các thành viên sau:"
    },
    "sections": [
      "Cấu trúc C++",
      "Tạo cấu trúc",
      "Thành viên Cấu trúc Truy cập",
      "Ví dụ",
      "Một cấu trúc cho nhiều biến",
      "Cấu trúc được đặt tên",
      "Nhiệm vụ thử thách"
    ],
    "syntax": [
      {
        "code": "struct {             // Structure declaration\n  int myNum;         // Member (int variable)\n  string myString;   // Member (string variable)\n} myStructure;       // Structure variable",
        "explanation": "Sau khi khai báo, hãy chỉ định tên biến cấu trúc (myStructure trong ví dụ dưới):"
      }
    ],
    "examples": [
      {
        "title": "Tạo cấu trúc",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nstruct {             // Structure declaration\n  int myNum;         // Member (int variable)\n  string myString;   // Member (string variable)\n} myStructure;       // Structure variable\n\nint main() {\n    cout << \"Xem vi du trong bai hoc\";\n  return 0;\n}\n",
        "output": "Xem vi du trong bai hoc",
        "explanation": "Sau khi khai báo, hãy chỉ định tên biến cấu trúc (myStructure trong ví dụ dưới):"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nstruct {\n   int myNum;\n   string myString;\n } myStructure;\n\nint main() {\n  // Create a structure variable called myStructure\n\n  // Assign values to members of myStructure\n   myStructure.myNum = 1;\n   myStructure.myString = \"Hello World!\";\n\n  // Print members of myStructure\n   cout << myStructure.myNum << \"\\n\";\n   cout << myStructure.myString << \"\\n\";\n  return 0;\n}\n",
        "output": "1\nHello World!",
        "explanation": "Gán dữ liệu cho các thành viên của cấu trúc và in ra:"
      },
      {
        "title": "Một cấu trúc cho nhiều biến",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nstruct {\n   int myNum;\n   string myString;\n } myStruct1, myStruct2, myStruct3; // Multiple structure variables separated with commas\n\nint main() {\n    cout << \"Xem vi du trong bai hoc\";\n  return 0;\n}\n",
        "output": "Xem vi du trong bai hoc",
        "explanation": "Bạn có thể dùng dấu phẩy ( , ) để dùng một cấu trúc cho nhiều biến:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nstruct {\n   string brand;\n   string model;\n   int year;\n } myCar1, myCar2;  // We can add variables by separating them with a comma here\n\nint main() {\n\n   // Put data into the first structure\n   myCar1.brand = \"BMW\";\n   myCar1.model = \"X5\";\n   myCar1.year = 1999;\n\n   // Put data into the second structure\n   myCar2.brand = \"Ford\";\n   myCar2.model = \"Mustang\";\n   myCar2.year = 1969;\n\n   // Print the structure members\n   cout << myCar1.brand << \" \" << myCar1.model << \" \" << myCar1.year << \"\\n\";\n   cout << myCar2.brand << \" \" << myCar2.model << \" \" << myCar2.year << \"\\n\";\n  return 0;\n}\n",
        "output": "BMW X5 1999\nFord Mustang 1969",
        "explanation": "Dùng một cấu trúc để biểu diễn hai chiếc ô tô:"
      },
      {
        "title": "Cấu trúc được đặt tên",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nstruct car {  // This structure is now named \"car\"\n  string brand;\n  string model;\n  int year;\n};\n\nint main() {\n    cout << \"Xem vi du trong bai hoc\";\n  return 0;\n}\n",
        "output": "Xem vi du trong bai hoc",
        "explanation": "Để tạo cấu trúc có tên, đặt tên cấu trúc ngay sau từ khóa struct:"
      },
      {
        "title": "Cấu trúc được đặt tên",
        "code": "#include <string>\nusing namespace std;\nstruct car {  // This structure is now named \"car\"\n  string brand;\n  string model;\n  int year;\n};\n\nint main() {\n  car myCar1;\n  return 0;\n}\n",
        "output": "",
        "explanation": "Để khai báo biến dùng cấu trúc, hãy lấy tên cấu trúc làm kiểu dữ liệu của biến:"
      }
    ],
    "tables": [],
    "useCases": [
      "Quản lý bộ nhớ trong hệ thống nhúng/performance.",
      "Hiểu cách biến và con trỏ tương tác vùng nhớ."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Truy cập phần tử ngoài chỉ mục hợp lệ (ví dụ arr[5] cho mảng 5 phần tử).",
        "why": "Chỉ mục hợp lệ là 0..n-1; vượt biên là undefined behavior.",
        "correct": "Duyệt i từ 0 đến n-1."
      },
      {
        "wrong": "Quên #include <string> khi dùng std::string.",
        "why": "string không phải kiểu dựng sẵn — thiếu header sẽ không biên dịch.",
        "correct": "#include <string> rồi mới dùng string."
      }
    ],
    "keyTakeaways": [
      "Cấu trúc (struct) là cách nhóm nhiều biến liên quan vào cùng một chỗ.",
      "Mỗi biến trong cấu trúc được gọi là một thành viên (member).",
      "Khác mảng, cấu trúc chứa được nhiều kiểu dữ liệu: int, string, bool, v.v.",
      "Để tạo cấu trúc, dùng từ khóa struct và khai báo từng thành viên trong ngoặc nhọn."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_structs.asp"
  },
  {
    "id": "cpp-enum",
    "slug": "enum",
    "title": "Kiểu liệt kê enum (Enumerations)",
    "titleEn": "C++ Enumeration (enum)",
    "num": 76,
    "chapter": "09 · Struct, Enum, Tham chiếu & Con trỏ",
    "topic": "Memory Safety",
    "difficulty": "intermediate",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-structs"
    ],
    "description": "Enum là kiểu đặc biệt biểu diễn một nhóm hằng số (giá trị không đổi).",
    "objectives": [
      "Nắm được: Liệt kê (enum) trong C++ (C++ Enumeration (enum)).",
      "Trình bày được: Kiểu liệt kê C++ (C++ Enums); Thay đổi giá trị; Enum trong câu lệnh Switch.",
      "Chạy và sửa được 6 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Enum là kiểu đặc biệt biểu diễn một nhóm hằng số (giá trị không đổi). Để tạo enum, dùng từ khóa enum theo sau là tên enum, và tách các mục bằng dấu phẩy: Lưu ý phần tử cuối không cần dấu phẩy. Không bắt buộc viết hoa, nhưng thường được xem là thực hành tốt. Enum là viết tắt của \"enumerations\", nghĩa là \"được liệt kê cụ thể\". Để truy cập enum, bạn phải tạo một biến của nó. Bên trong phương thức main(), dùng từ khóa enum, theo sau là tên enum (Level) rồi tên biến enum (myVar trong ví dụ này): Sau khi tạo biến enum (myVar), bạn có thể gán giá trị cho nó. Giá trị gán phải là một trong các mục bên trong enum (LOW, MEDIUM hoặc HIGH): Mặc định, mục đầu (LOW) có giá trị 0, mục thứ hai (MEDIUM) có giá trị 1, v.v. Nếu in myVar bây giờ, kết quả là 1, tương ứng với MEDIUM: Như bạn đã biết, mục đầu của enum có giá trị 0, mục thứ hai có giá trị 1, v.v. Để giá trị dễ hiểu hơn, bạn có thể thay đổi chúng: Lưu ý nếu gán giá trị cho một mục cụ thể, các mục sau sẽ tự cập nhật số của chúng: Enum thường dùng trong switch để kiểm tra giá trị tương ứng: Enum đặt tên cho các hằng số, giúp code dễ đọc và dễ bảo trì. Dùng enum khi các giá trị đã biết sẽ không đổi, như ngày trong tháng, thứ, màu, lá bài, v.v."
    },
    "sections": [
      "Kiểu liệt kê C++ (C++ Enums)",
      "Thay đổi giá trị",
      "Enum trong câu lệnh Switch"
    ],
    "syntax": [
      {
        "code": "enum Level {\n  LOW,\n  MEDIUM,\n  HIGH\n};",
        "explanation": "Để tạo enum, dùng từ khóa enum theo sau là tên enum, và tách các mục bằng dấu phẩy:"
      }
    ],
    "examples": [
      {
        "title": "Kiểu liệt kê C++ (C++ Enums)",
        "code": "#include <iostream>\nusing namespace std;\nenum Level {\n  LOW,\n  MEDIUM,\n  HIGH\n};\n\nint main() {\n    cout << \"Xem vi du trong bai hoc\";\n  return 0;\n}\n",
        "output": "Xem vi du trong bai hoc",
        "explanation": "Để tạo enum, dùng từ khóa enum theo sau là tên enum, và tách các mục bằng dấu phẩy:"
      },
      {
        "title": "Kiểu liệt kê C++ (C++ Enums)",
        "code": "#include <iostream>\nenum Level {\n  LOW,\n  MEDIUM,\n  HIGH\n};\n\nusing namespace std;\nenum Level myVar;\n\nint main() {\n    cout << \"Xem vi du trong bai hoc\";\n  return 0;\n}\n",
        "output": "Xem vi du trong bai hoc",
        "explanation": "Bên trong phương thức main(), dùng từ khóa enum, theo sau là tên enum (Level) rồi tên biến enum (myVar trong ví dụ này):"
      },
      {
        "title": "Kiểu liệt kê C++ (C++ Enums)",
        "code": "#include <iostream>\nenum Level {\n  LOW,\n  MEDIUM,\n  HIGH\n};\n\nusing namespace std;\nenum Level myVar = MEDIUM;\n\nint main() {\n    cout << \"Xem vi du trong bai hoc\";\n  return 0;\n}\n",
        "output": "Xem vi du trong bai hoc",
        "explanation": "Giá trị gán phải là một trong các mục bên trong enum (LOW, MEDIUM hoặc HIGH):"
      },
      {
        "title": "Kiểu liệt kê C++ (C++ Enums)",
        "code": "#include <iostream>\nenum Level {\n  LOW,\n  MEDIUM,\n  HIGH\n};\n\nusing namespace std;\nint main() {\n  // Create an enum variable and assign a value to it\n  enum Level myVar = MEDIUM;\n\n  // Print the enum variable\n  cout << myVar;\n\n  return 0;\n}",
        "output": "1",
        "explanation": "Nếu in myVar bây giờ, kết quả là 1, tương ứng với MEDIUM:"
      },
      {
        "title": "Thay đổi giá trị",
        "code": "#include <iostream>\nusing namespace std;\nenum Level {\n  LOW = 25,\n  MEDIUM = 50,\n  HIGH = 75\n   };\n\nint main() {\n    cout << \"Xem vi du trong bai hoc\";\n  return 0;\n}\n",
        "output": "Xem vi du trong bai hoc",
        "explanation": "Để giá trị dễ hiểu hơn, bạn có thể thay đổi chúng:"
      },
      {
        "title": "Thay đổi giá trị",
        "code": "#include <iostream>\nenum Level {\n  LOW,\n  MEDIUM,\n  HIGH\n};\n\nusing namespace std;\nint main() {\n  enum Level myVar = MEDIUM;\n  cout << myVar;  // Now outputs 50\n  return 0;\n}",
        "output": "1",
        "explanation": "Chạy thử và tự sửa code để cảm nhận cách nó hoạt động."
      }
    ],
    "tables": [],
    "useCases": [
      "Quản lý bộ nhớ trong hệ thống nhúng/performance.",
      "Hiểu cách biến và con trỏ tương tác vùng nhớ."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Quên break ở cuối mỗi case.",
        "why": "Thiếu break gây 'fall-through': các case bên dưới cũng chạy theo.",
        "correct": "case 1: ... break;"
      }
    ],
    "keyTakeaways": [
      "Enum là kiểu đặc biệt biểu diễn một nhóm hằng số (giá trị không đổi).",
      "Để tạo enum, dùng từ khóa enum theo sau là tên enum, và tách các mục bằng dấu phẩy:",
      "Lưu ý phần tử cuối không cần dấu phẩy.",
      "Không bắt buộc viết hoa, nhưng thường được xem là thực hành tốt."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_enum.asp"
  },
  {
    "id": "cpp-references",
    "slug": "references",
    "title": "Tham chiếu trong C++ (References)",
    "titleEn": "C++ References",
    "num": 77,
    "chapter": "09 · Struct, Enum, Tham chiếu & Con trỏ",
    "topic": "Memory Safety",
    "difficulty": "intermediate",
    "estimatedTime": 11,
    "prerequisites": [
      "cpp-enum"
    ],
    "description": "Biến tham chiếu là bí danh của biến đã tồn tại, tạo bằng toán tử &:",
    "objectives": [
      "Nắm được: Tài liệu tham khảo C++.",
      "Trình bày được: Tạo tài liệu tham khảo; Ví dụ; Cập nhật thông qua tham chiếu.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Biến tham chiếu là bí danh của biến đã tồn tại, tạo bằng toán tử &: Bây giờ, food hay meal đều trỏ tới cùng một giá trị: Lưu ý: cả food và meal cùng trỏ một vị trí bộ nhớ. Đổi một cái sẽ ảnh hưởng cái kia. Nếu đổi giá trị biến tham chiếu, biến gốc cũng đổi (và ngược lại), vì cả hai trỏ tới cùng một vị trí bộ nhớ:"
    },
    "sections": [
      "Tạo tài liệu tham khảo",
      "Ví dụ",
      "Cập nhật thông qua tham chiếu"
    ],
    "syntax": [
      {
        "code": "string food = \"Pizza\";\nstring &meal = food;\n\n   cout << food << \"\\n\";  // Outputs Pizza\ncout << meal << \"\\n\";  // Outputs Pizza",
        "explanation": "Bây giờ, food hay meal đều trỏ tới cùng một giá trị:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string food = \"Pizza\";\n  string &meal = food;\n\n     cout << food << \"\\n\";  // Outputs Pizza\n  cout << meal << \"\\n\";  // Outputs Pizza\n  return 0;\n}\n",
        "output": "Pizza\nPizza",
        "explanation": "Bây giờ, food hay meal đều trỏ tới cùng một giá trị:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string food = \"Pizza\"; // food variable\n  string &meal = food;   // reference to food\n\n  meal = \"Burger\"; // changes both meal and food\n\n  cout << food << \"\\n\"; // Outputs Burger\n  cout << meal << \"\\n\"; // Outputs Burger\n  return 0;\n}\n",
        "output": "Burger\nBurger",
        "explanation": "Nếu đổi giá trị biến tham chiếu, biến gốc cũng đổi (và ngược lại), vì cả hai trỏ tới cùng một vị trí bộ nhớ:"
      }
    ],
    "tables": [],
    "useCases": [
      "Quản lý bộ nhớ trong hệ thống nhúng/performance.",
      "Hiểu cách biến và con trỏ tương tác vùng nhớ."
    ],
    "notes": [
      "Lưu ý: cả food và meal cùng trỏ một vị trí bộ nhớ. Đổi một cái sẽ ảnh hưởng cái kia."
    ],
    "commonMistakes": [
      {
        "wrong": "Nhầm = (gán) với == (so sánh) trong biểu thức.",
        "why": "Toán tử sai cho kết quả sai mà không báo lỗi.",
        "correct": "double-click kiểm tra: so sánh thì ==."
      }
    ],
    "keyTakeaways": [
      "Biến tham chiếu là bí danh của biến đã tồn tại, tạo bằng toán tử &:",
      "Bây giờ, food hay meal đều trỏ tới cùng một giá trị:",
      "Lưu ý: cả food và meal cùng trỏ một vị trí bộ nhớ. Đổi một cái sẽ ảnh hưởng cái kia.",
      "Nếu đổi giá trị biến tham chiếu, biến gốc cũng đổi (và ngược lại), vì cả hai trỏ tới cùng một vị trí bộ nhớ:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_references.asp"
  },
  {
    "id": "cpp-references-memory",
    "slug": "references-memory",
    "title": "Địa chỉ bộ nhớ (Memory Address / & operator)",
    "titleEn": "C++ Memory Address",
    "num": 78,
    "chapter": "09 · Struct, Enum, Tham chiếu & Con trỏ",
    "topic": "Memory Safety",
    "difficulty": "intermediate",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-references"
    ],
    "description": "Trong ví dụ từ trang trước, toán tử & được dùng để tạo biến tham chiếu. Nhưng nó cũng có thể được dùng để lấy địa chỉ bộ nhớ của một biến; đó là vị trí biến được lưu trên máy tính.",
    "objectives": [
      "Nắm được: Địa chỉ bộ nhớ C++.",
      "Trình bày được: Địa chỉ bộ nhớ; Ví dụ.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Trong ví dụ từ trang trước, toán tử & được dùng để tạo biến tham chiếu. Nhưng nó cũng có thể được dùng để lấy địa chỉ bộ nhớ của một biến; đó là vị trí biến được lưu trên máy tính. Khi một biến được tạo trong C++, một địa chỉ bộ nhớ được gán cho biến. Và khi gán giá trị cho biến, giá trị được lưu tại địa chỉ bộ nhớ đó. Để truy cập nó, dùng toán tử &, kết quả cho biết biến lưu ở đâu: Lưu ý: địa chỉ bộ nhớ dạng thập lục phân (0x..). Có thể bạn không nhận được kết quả giống hệt. Tham chiếu và con trỏ (bạn sẽ học trong chương tiếp theo) quan trọng trong C++, vì chúng cho bạn khả năng thao tác dữ liệu trong bộ nhớ máy tính - điều có thể giảm code và cải thiện hiệu năng. Hai tính năng này là điều làm C++ nổi bật so với các ngôn ngữ khác như Python và Java."
    },
    "sections": [
      "Địa chỉ bộ nhớ",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "string food = \"Pizza\";\n\n   cout << &food; // Outputs 0x6dfed4",
        "explanation": "Để truy cập nó, dùng toán tử &, kết quả cho biết biến lưu ở đâu:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string food = \"Pizza\";\n\n     cout << &food; // Outputs 0x6dfed4\n  return 0;\n}\n",
        "output": "0x6e1dbffa90",
        "explanation": "Để truy cập nó, dùng toán tử &, kết quả cho biết biến lưu ở đâu:"
      }
    ],
    "tables": [],
    "useCases": [
      "Quản lý bộ nhớ trong hệ thống nhúng/performance.",
      "Hiểu cách biến và con trỏ tương tác vùng nhớ."
    ],
    "notes": [
      "Lưu ý: địa chỉ bộ nhớ dạng thập lục phân (0x..). Có thể bạn không nhận được kết quả giống hệt."
    ],
    "commonMistakes": [
      {
        "wrong": "Dùng con trỏ chưa khởi tạo hoặc đã delete.",
        "why": "Trỏ vào vùng nhớ rác gây crash hoặc dữ liệu sai khó tìm.",
        "correct": "Khởi tạo nullptr, kiểm tra trước khi dereference, set nullptr sau delete."
      },
      {
        "wrong": "Nhầm = (gán) với == (so sánh) trong biểu thức.",
        "why": "Toán tử sai cho kết quả sai mà không báo lỗi.",
        "correct": "double-click kiểm tra: so sánh thì ==."
      }
    ],
    "keyTakeaways": [
      "Trong ví dụ từ trang trước, toán tử & được dùng để tạo biến tham chiếu. Nhưng nó cũng có thể được dùng để lấy địa chỉ bộ…",
      "Khi một biến được tạo trong C++, một địa chỉ bộ nhớ được gán cho biến. Và khi gán giá trị cho biến, giá trị được lưu tại  địa chỉ bộ nhớ đó.…",
      "Để truy cập nó, dùng toán tử &, kết quả cho biết biến lưu ở đâu:",
      "Lưu ý: địa chỉ bộ nhớ dạng thập lục phân (0x..). Có thể bạn không nhận được kết quả giống hệt."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_references_memory.asp"
  },
  {
    "id": "cpp-pointers",
    "slug": "pointers",
    "title": "Con trỏ trong C++ (Pointers)",
    "titleEn": "C++ Pointers",
    "num": 79,
    "chapter": "09 · Struct, Enum, Tham chiếu & Con trỏ",
    "topic": "Memory Safety",
    "difficulty": "intermediate",
    "estimatedTime": 14,
    "prerequisites": [
      "cpp-references-memory"
    ],
    "description": "Bạn đã học ở chương trước rằng có thể lấy địa chỉ bộ nhớ của biến bằng toán tử &:",
    "objectives": [
      "Nắm được: Con trỏ C++.",
      "Trình bày được: Tạo con trỏ; Ví dụ.",
      "Chạy và sửa được 3 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Bạn đã học ở chương trước rằng có thể lấy địa chỉ bộ nhớ của biến bằng toán tử &: Còn con trỏ là biến lưu địa chỉ bộ nhớ làm giá trị của nó. Biến con trỏ trỏ tới cùng kiểu dữ liệu (như int hoặc string), tạo bằng toán tử *. Địa chỉ biến bạn làm việc được gán cho con trỏ: Tạo biến con trỏ tên ptr trỏ tới biến string, dùng dấu sao * (string* ptr). Lưu ý kiểu của con trỏ phải khớp kiểu biến bạn làm việc. Dùng toán tử & để lưu địa chỉ bộ nhớ của biến food và gán cho con trỏ. Bây giờ, ptr giữ địa chỉ bộ nhớ của food. Mẹo: có ba cách khai báo biến con trỏ, nhưng cách đầu được ưa chuộng hơn:"
    },
    "sections": [
      "Tạo con trỏ",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "string food = \"Pizza\"; // A food variable of type string\n\ncout << food;  // Outputs the value of food (Pizza)\n   cout << &food; // Outputs the memory address of food (0x6dfed4)",
        "explanation": "Bạn đã học ở chương trước rằng có thể lấy địa chỉ bộ nhớ của biến bằng toán tử &:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string food = \"Pizza\"; // A food variable of type string\n\n  cout << food;  // Outputs the value of food (Pizza)\n     cout << &food; // Outputs the memory address of food (0x6dfed4)\n  return 0;\n}\n",
        "output": "Pizza0x7321bff9f0",
        "explanation": "Bạn đã học ở chương trước rằng có thể lấy địa chỉ bộ nhớ của biến bằng toán tử &:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string food = \"Pizza\";  // A food variable of type string\n  string* ptr = &food;    // A pointer variable, with the name ptr, that stores the address of food\n\n  // Output the value of food (Pizza)\n  cout << food << \"\\n\";\n\n  // Output the memory address of food (0x6dfed4)\n  cout << &food << \"\\n\";\n\n  // Output the memory address of food with the pointer (0x6dfed4)\n  cout << ptr << \"\\n\";\n  return 0;\n}\n",
        "output": "Pizza\n0xe324dff700\n0xe324dff700",
        "explanation": "Biến con trỏ trỏ tới cùng kiểu dữ liệu (như int hoặc string), tạo bằng toán tử *. Địa chỉ biến bạn làm việc được gán cho con trỏ:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main() {\n  string food = \"Pizza\";\n  string* ptr = &food;\n  cout << *ptr;\n  return 0;\n}\n",
        "output": "Pizza",
        "explanation": "Bây giờ, ptr giữ địa chỉ bộ nhớ của food.",
        "input": ""
      }
    ],
    "tables": [],
    "useCases": [
      "Quản lý bộ nhớ trong hệ thống nhúng/performance.",
      "Hiểu cách biến và con trỏ tương tác vùng nhớ."
    ],
    "notes": [
      "Mẹo: có ba cách khai báo biến con trỏ, nhưng cách đầu được ưa chuộng hơn:"
    ],
    "commonMistakes": [
      {
        "wrong": "Dùng con trỏ chưa khởi tạo hoặc đã delete.",
        "why": "Trỏ vào vùng nhớ rác gây crash hoặc dữ liệu sai khó tìm.",
        "correct": "Khởi tạo nullptr, kiểm tra trước khi dereference, set nullptr sau delete."
      },
      {
        "wrong": "Quên #include <string> khi dùng std::string.",
        "why": "string không phải kiểu dựng sẵn — thiếu header sẽ không biên dịch.",
        "correct": "#include <string> rồi mới dùng string."
      }
    ],
    "keyTakeaways": [
      "Bạn đã học ở chương trước rằng có thể lấy địa chỉ bộ nhớ của biến bằng toán tử &:",
      "Còn con trỏ là biến lưu địa chỉ bộ nhớ làm giá trị của nó.",
      "Biến con trỏ trỏ tới cùng kiểu dữ liệu (như int hoặc string), tạo bằng toán tử *. Địa chỉ biến bạn làm việc được gán cho  con trỏ…",
      "Tạo biến con trỏ tên ptr trỏ tới biến string, dùng dấu sao * (string* ptr). Lưu ý kiểu của con trỏ phải khớp kiểu biến b ạn làm việc.…"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_pointers.asp"
  },
  {
    "id": "cpp-pointers-dereference",
    "slug": "pointers-dereference",
    "title": "Giải tham chiếu con trỏ (Dereferencing / * operator)",
    "titleEn": "C++ Dereferencing",
    "num": 80,
    "chapter": "09 · Struct, Enum, Tham chiếu & Con trỏ",
    "topic": "Memory Safety",
    "difficulty": "intermediate",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-pointers"
    ],
    "description": "Trong ví dụ từ trang trước, ta đã dùng biến con trỏ để lấy địa chỉ bộ nhớ của một biến (dùng cùng toán tử tham chiếu &). Tuy nhiên, bạn cũng có thể dùng con trỏ để lấy giá trị của biến, bằng cách dùng toán tử * (toán tử  giải tham)…",
    "objectives": [
      "Nắm được: Truy cập giá trị qua con trỏ.",
      "Trình bày được: Lấy địa chỉ bộ nhớ và giá trị; Ví dụ.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Trong ví dụ từ trang trước, ta đã dùng biến con trỏ để lấy địa chỉ bộ nhớ của một biến (dùng cùng toán tử tham chiếu &). Tuy nhiên, bạn cũng có thể dùng con trỏ để lấy giá trị của biến, bằng cách dùng toán tử * (toán tử giải tham): Lưu ý dấu * dễ gây nhầm vì nó làm hai việc khác nhau trong code:"
    },
    "sections": [
      "Lấy địa chỉ bộ nhớ và giá trị",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "string food = \"Pizza\";  // Variable declaration\nstring* ptr = &food;    // Pointer declaration\n\n// Reference: Output the memory address of food with the pointer (0x6dfed4)\ncout << ptr << \"\\n\";\n\n// Dereference: Output the value of food with the pointer (Pizza)\ncout << *ptr << \"\\n\";",
        "explanation": "Trong ví dụ từ trang trước, ta đã dùng biến con trỏ để lấy địa chỉ bộ nhớ của một biến (dùng cùng toán tử tham chiếu &). Tuy nhiên, bạn cũng có thể dùng con trỏ để lấy giá trị của biến, bằng cách dùng toán tử * (toán tử giải tham):"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string food = \"Pizza\";  // Variable declaration\n  string* ptr = &food;    // Pointer declaration\n\n  // Reference: Output the memory address of food with the pointer (0x6dfed4)\n  cout << ptr << \"\\n\";\n\n  // Dereference: Output the value of food with the pointer (Pizza)\n  cout << *ptr << \"\\n\";\n  return 0;\n}\n",
        "output": "0x5765fffc50\nPizza",
        "explanation": "Trong ví dụ từ trang trước, ta đã dùng biến con trỏ để lấy địa chỉ bộ nhớ của một biến (dùng cùng toán tử tham chiếu &). Tuy nhiên, bạn cũng có thể dùng con trỏ để lấy giá trị của biến, bằng cách dùng toán tử * (toán tử giải tham):"
      }
    ],
    "tables": [],
    "useCases": [
      "Quản lý bộ nhớ trong hệ thống nhúng/performance.",
      "Hiểu cách biến và con trỏ tương tác vùng nhớ."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Dùng con trỏ chưa khởi tạo hoặc đã delete.",
        "why": "Trỏ vào vùng nhớ rác gây crash hoặc dữ liệu sai khó tìm.",
        "correct": "Khởi tạo nullptr, kiểm tra trước khi dereference, set nullptr sau delete."
      },
      {
        "wrong": "Nhầm = (gán) với == (so sánh) trong biểu thức.",
        "why": "Toán tử sai cho kết quả sai mà không báo lỗi.",
        "correct": "double-click kiểm tra: so sánh thì ==."
      }
    ],
    "keyTakeaways": [
      "Trong ví dụ từ trang trước, ta đã dùng biến con trỏ để lấy địa chỉ bộ nhớ của một biến (dùng cùng toán tử tham chiếu &).…",
      "Lưu ý dấu * dễ gây nhầm vì nó làm hai việc khác nhau trong code:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_pointers_dereference.asp"
  },
  {
    "id": "cpp-pointers-modify",
    "slug": "pointers-modify",
    "title": "Thay đổi giá trị qua con trỏ (Modify Pointers)",
    "titleEn": "C++ Modify Pointer Value",
    "num": 81,
    "chapter": "09 · Struct, Enum, Tham chiếu & Con trỏ",
    "topic": "Memory Safety",
    "difficulty": "intermediate",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-pointers-dereference"
    ],
    "description": "Bạn cũng có thể đổi giá trị con trỏ. Nhưng lưu ý việc này cũng đổi giá trị biến gốc:",
    "objectives": [
      "Nắm được: Thay đổi giá trị con trỏ trong C++.",
      "Trình bày được: Thay đổi giá trị của con trỏ.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Bạn cũng có thể đổi giá trị con trỏ. Nhưng lưu ý việc này cũng đổi giá trị biến gốc:"
    },
    "sections": [
      "Thay đổi giá trị của con trỏ"
    ],
    "syntax": [
      {
        "code": "string food = \"Pizza\";\nstring* ptr = &food;\n\n// Output the value of food (Pizza)\ncout << food << \"\\n\";\n\n// Output the memory address of food (0x6dfed4)\ncout << &food << \"\\n\";\n\n// Access the memory address of food and output its value (Pizza)\ncout << *ptr << \"\\n\";\n\n// Change the value of the pointer\n*ptr = \"Hamburger\";\n\n// Output the new value of the pointer (Hamburger)\ncout << *ptr << \"\\n\";\n\n// Output the new value of the food variable (Hamburger)\ncout << food << \"\\n\";",
        "explanation": "Bạn cũng có thể đổi giá trị con trỏ. Nhưng lưu ý việc này cũng đổi giá trị biến gốc:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string food = \"Pizza\";\n  string* ptr = &food;\n\n  // Output the value of food (Pizza)\n  cout << food << \"\\n\";\n\n  // Output the memory address of food (0x6dfed4)\n  cout << &food << \"\\n\";\n\n  // Access the memory address of food and output its value (Pizza)\n  cout << *ptr << \"\\n\";\n\n  // Change the value of the pointer\n  *ptr = \"Hamburger\";\n\n  // Output the new value of the pointer (Hamburger)\n  cout << *ptr << \"\\n\";\n\n  // Output the new value of the food variable (Hamburger)\n  cout << food << \"\\n\";\n  return 0;\n}\n",
        "output": "Pizza\n0x2657bffa60\nPizza\nHamburger\nHamburger",
        "explanation": "Bạn cũng có thể đổi giá trị con trỏ. Nhưng lưu ý việc này cũng đổi giá trị biến gốc:"
      }
    ],
    "tables": [],
    "useCases": [
      "Quản lý bộ nhớ trong hệ thống nhúng/performance.",
      "Hiểu cách biến và con trỏ tương tác vùng nhớ."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Dùng con trỏ chưa khởi tạo hoặc đã delete.",
        "why": "Trỏ vào vùng nhớ rác gây crash hoặc dữ liệu sai khó tìm.",
        "correct": "Khởi tạo nullptr, kiểm tra trước khi dereference, set nullptr sau delete."
      }
    ],
    "keyTakeaways": [
      "Bạn cũng có thể đổi giá trị con trỏ. Nhưng lưu ý việc này cũng đổi giá trị biến gốc:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_pointers_modify.asp"
  },
  {
    "id": "cpp-memory-management",
    "slug": "memory-management",
    "title": "Quản lý bộ nhớ trong C++ (Memory Management Overview)",
    "titleEn": "C++ Memory Management",
    "num": 82,
    "chapter": "09 · Struct, Enum, Tham chiếu & Con trỏ",
    "topic": "Memory Safety",
    "difficulty": "intermediate",
    "estimatedTime": 11,
    "prerequisites": [
      "cpp-pointers-modify"
    ],
    "description": "Quản lý bộ nhớ là kiểm soát lượng bộ nhớ chương trình dùng - và cách dùng. Bao gồm tạo, sử dụng và giải phóng bộ nhớ khi không cần nữa.",
    "objectives": [
      "Nắm được: Quản lý bộ nhớ trong C++.",
      "Trình bày được: Quản lý bộ nhớ; Bộ nhớ trong C++; Lấy kích thước bộ nhớ.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Quản lý bộ nhớ là kiểm soát lượng bộ nhớ chương trình dùng - và cách dùng. Bao gồm tạo, sử dụng và giải phóng bộ nhớ khi không cần nữa. Khi tạo biến trong C++, trình biên dịch tự dành chỗ trong bộ nhớ cho nó. Ví dụ: Dòng trên bảo chương trình: \"tôi cần chỗ để lưu một số nguyên\". C++ tự quản lý vùng nhớ này, nên trường hợp này bạn không phải lo. Bạn có thể kiểm tra bộ nhớ một kiểu biến bằng toán tử sizeof: Biết kích thước các kiểu giúp viết code hiệu quả hơn, nhất là chương trình lớn. Đôi khi có - và đôi khi không. Nếu chương trình dùng quá nhiều bộ nhớ hoặc quên dọn bộ nhớ không cần, hiệu năng có thể chậm lại hoặc thậm chí gây treo. Đó là lý do hiểu về bộ nhớ rất quan trọng. Nó cho bạn kiểm soát tốt hơn và tránh các lỗi phổ biến. Trong C++, bạn có thể dùng con trỏ để truy cập và đổi bộ nhớ trực tiếp. Điều này rất mạnh, nhưng cũng rủi ro. Nếu bạn dùng sai con trỏ, bạn có thể vô tình thay đổi hoặc làm hỏng các phần khác của bộ nhớ chương trình. Chương tiếp theo, bạn sẽ học cách tự tạo bộ nhớ bằng con trỏ - với từ khóa new, và cách giải phóng bằng delete."
    },
    "sections": [
      "Quản lý bộ nhớ",
      "Bộ nhớ trong C++",
      "Lấy kích thước bộ nhớ",
      "Ví dụ",
      "Bạn có bắt buộc phải tự quản lý bộ nhớ?",
      "Kế tiếp là gì?"
    ],
    "syntax": [
      {
        "code": "int myNumber = 10;",
        "explanation": "Ví dụ:"
      }
    ],
    "examples": [
      {
        "title": "Bộ nhớ trong C++",
        "code": "int main() {\n  int myNumber = 10;\n  return 0;\n}\n",
        "output": "",
        "explanation": "Ví dụ:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n using namespace std;\n\n  int main() {\n   int myInt;\n   float myFloat;\n   double myDouble;\n   char myChar;\n\n   cout << sizeof(myInt) << \"\\n\";     // 4 bytes (typically)\n   cout << sizeof(myFloat) << \"\\n\";   // 4 bytes\n   cout << sizeof(myDouble) << \"\\n\";  // 8 bytes\n   cout << sizeof(myChar) << \"\\n\";    // 1 byte\n   return 0;\n }",
        "output": "4\n4\n8\n1",
        "explanation": "Bạn có thể kiểm tra bộ nhớ một kiểu biến bằng toán tử sizeof:"
      }
    ],
    "tables": [],
    "useCases": [
      "Quản lý bộ nhớ trong hệ thống nhúng/performance.",
      "Hiểu cách biến và con trỏ tương tác vùng nhớ."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Dùng con trỏ chưa khởi tạo hoặc đã delete.",
        "why": "Trỏ vào vùng nhớ rác gây crash hoặc dữ liệu sai khó tìm.",
        "correct": "Khởi tạo nullptr, kiểm tra trước khi dereference, set nullptr sau delete."
      },
      {
        "wrong": "new mà quên delete.",
        "why": "Bộ nhớ không được giải phóng gây rò rỉ (memory leak).",
        "correct": "Dùng cân bằng new/delete hoặc smart pointer."
      }
    ],
    "keyTakeaways": [
      "Quản lý bộ nhớ là kiểm soát lượng bộ nhớ chương trình dùng - và cách dùng. Bao gồm tạo, sử dụng và giải phóng bộ nhớ khi  không cần nữa.…",
      "Khi tạo biến trong C++, trình biên dịch tự dành chỗ trong bộ nhớ cho nó.",
      "Ví dụ:",
      "Dòng trên bảo chương trình: \"tôi cần chỗ để lưu một số nguyên\". C++ tự quản lý vùng nhớ này, nên trường hợp này bạn khôn g phải lo.…"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_memory_management.asp"
  },
  {
    "id": "cpp-memory-management-new",
    "slug": "memory-management-new",
    "title": "Cấp phát bộ nhớ động với new & delete",
    "titleEn": "C++ Memory Management",
    "num": 83,
    "chapter": "09 · Struct, Enum, Tham chiếu & Con trỏ",
    "topic": "Memory Safety",
    "difficulty": "intermediate",
    "estimatedTime": 17,
    "prerequisites": [
      "cpp-memory-management"
    ],
    "description": "Từ khóa new cho phép bạn tự quản lý bộ nhớ.",
    "objectives": [
      "Nắm được: Quản lý bộ nhớ trong C++.",
      "Trình bày được: Từ khoá Mới; Ví dụ; Từ khóa xóa.",
      "Chạy và sửa được 4 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Từ khóa new cho phép bạn tự quản lý bộ nhớ. Ví dụ dưới đây tạo vùng nhớ cho một số nguyên bằng new, lưu giá trị 35 vào, và in ra qua con trỏ: Giải thích: Vậy ta dùng new để tạo bộ nhớ và ptr để truy cập nó. Khi tạo gì đó bằng new, bạn phải tự xóa nó khi dùng xong. Để làm điều đó, hãy sử dụng xóa : Thông báo với C++: \"Tôi không cần vùng nhớ này nữa, dọn dẹp đi.\" Nếu quên delete bộ nhớ, chương trình vẫn chạy, nhưng có thể ngốn ngày càng nhiều bộ nhớ. Đó gọi là rò rỉ bộ nhớ, lâu ngày có thể làm chậm hoặc treo chương trình. Bạn cũng có thể dùng new để tạo mảng động. Lưu ý: với mảng dùng new[] và delete[]. Với biến đơn dùng new và delete. Mảng động hữu ích khi không biết trước kích thước - như khi kích thước phụ thuộc dữ liệu nhập hoặc các giá trị chưa biết lúc bắt đầu. Ví dụ, tưởng tượng bạn điều hành một khách sạn. Vì không biết bao nhiêu khách sẽ đến, bạn hỏi người dùng số lượng và tạo đúng số phòng - mỗi phòng lưu tên một khách: Ví dụ về kết quả: Trong hầu hết trường hợp, bạn không cần dùng new. C++ tự quản lý bộ nhớ cho biến thường như: Nhưng đôi khi bạn phải tự quản lý bộ nhớ - nhất là khi: Trong các trường hợp đó, new giúp tạo bộ nhớ, delete giúp dọn khi xong. Mẹo: nếu dùng new, luôn nhớ dùng delete (hoặc delete[] với mảng) để tránh rò rỉ bộ nhớ."
    },
    "sections": [
      "Từ khoá Mới",
      "Ví dụ",
      "Từ khóa xóa",
      "Dùng new và delete với mảng",
      "Khi nào nên sử dụng:"
    ],
    "syntax": [
      {
        "code": "int* ptr = new int;\n *ptr = 35;\n cout << *ptr;",
        "explanation": "Ví dụ dưới đây tạo vùng nhớ cho một số nguyên bằng new, lưu giá trị 35 vào, và in ra qua con trỏ:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int* ptr = new int;\n   *ptr = 35;\n   cout << *ptr;\n  return 0;\n}\n",
        "output": "35",
        "explanation": "Ví dụ dưới đây tạo vùng nhớ cho một số nguyên bằng new, lưu giá trị 35 vào, và in ra qua con trỏ:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main() {\n  int* ptr = new int(11);\n  cout << *ptr << endl;\n  delete ptr;\n  cout << \"Da delete\";\n  return 0;\n}\n",
        "output": "11\nDa delete",
        "explanation": "Để làm điều đó, hãy sử dụng xóa :",
        "input": ""
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n  int numGuests;\n  cout << \"How many guests? \";\n  cin >> numGuests;\n\n  // Check for invalid input\n  if (numGuests <= 0) {\n    cout << \"Number of guests must be at least 1.\\n\";\n    return 0;\n  }\n\n  // Create memory space for x guests (an array of strings)\n  string* guests = new string[numGuests];\n\n  // Ignore the leftover newline character after reading numGuests\n  cin.ignore();\n\n  // Enter guest names\n  for (int i = 0; i < numGuests; i++) {\n    cout << \"Enter name for guest \" << (i + 1) << \": \";\n       getline(cin, guests[i]); // Read the full name (including spaces)\n  }\n\n  // Show all guests\n  cout << \"\\nGuests checked in:\\n\";\n  for (int i = 0; i < numGuests; i++) {\n    cout << guests[i] << \"\\n\";\n  }\n\n  delete[] guests; // Clean up memory\n  return 0;\n}",
        "output": "",
        "explanation": "Ví dụ, tưởng tượng bạn điều hành một khách sạn. Vì không biết bao nhiêu khách sẽ đến, bạn hỏi người dùng số lượng và tạo đúng số phòng - mỗi phòng lưu tên một khách:"
      },
      {
        "title": "Khi nào nên sử dụng:",
        "code": "#include <string>\nusing namespace std;\nint main() {\n  int age = 35;\n   string name = \"John\";\n  return 0;\n}\n",
        "output": "",
        "explanation": "Trong hầu hết trường hợp, bạn không cần dùng new. C++ tự quản lý bộ nhớ cho biến thường như:"
      }
    ],
    "tables": [],
    "useCases": [
      "Quản lý bộ nhớ trong hệ thống nhúng/performance.",
      "Hiểu cách biến và con trỏ tương tác vùng nhớ."
    ],
    "notes": [
      "Lưu ý: với mảng dùng new[] và delete[]. Với biến đơn dùng new và delete.",
      "Mẹo: nếu dùng new, luôn nhớ dùng delete (hoặc delete[] với mảng) để tránh rò rỉ bộ nhớ."
    ],
    "commonMistakes": [
      {
        "wrong": "Truy cập phần tử ngoài chỉ mục hợp lệ (ví dụ arr[5] cho mảng 5 phần tử).",
        "why": "Chỉ mục hợp lệ là 0..n-1; vượt biên là undefined behavior.",
        "correct": "Duyệt i từ 0 đến n-1."
      },
      {
        "wrong": "Dùng con trỏ chưa khởi tạo hoặc đã delete.",
        "why": "Trỏ vào vùng nhớ rác gây crash hoặc dữ liệu sai khó tìm.",
        "correct": "Khởi tạo nullptr, kiểm tra trước khi dereference, set nullptr sau delete."
      }
    ],
    "keyTakeaways": [
      "Từ khóa new cho phép bạn tự quản lý bộ nhớ.",
      "Ví dụ dưới đây tạo vùng nhớ cho một số nguyên bằng new, lưu giá trị 35 vào, và in ra qua con trỏ:",
      "Giải thích:",
      "Vậy ta dùng new để tạo bộ nhớ và ptr để truy cập nó."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_memory_management_new.asp"
  },
  {
    "id": "cpp-functions",
    "slug": "functions",
    "title": "Hàm trong C++ (Functions)",
    "titleEn": "C++ Functions",
    "num": 84,
    "chapter": "10 · Hàm (Functions)",
    "topic": "Functions & OOP",
    "difficulty": "intermediate",
    "estimatedTime": 17,
    "prerequisites": [],
    "description": "Hàm là khối mã chỉ chạy khi được gọi.",
    "objectives": [
      "Nắm được: Hàm C++.",
      "Trình bày được: Tạo một hàm; Gọi một Chức năng; Ví dụ.",
      "Chạy và sửa được 4 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Hàm là khối mã chỉ chạy khi được gọi. Bạn có thể truyền dữ liệu (gọi là tham số) vào hàm. Hàm dùng để thực hiện hành động nhất định và rất quan trọng để tái sử dụng code: định nghĩa một lần, dùng nhiều lần. C++ cung cấp một số hàm định sẵn, như main() dùng để thực thi mã. Nhưng bạn cũng có thể tạo hàm riêng để thực hiện hành động nhất định. Để tạo (thường gọi là khai báo) hàm, chỉ định tên hàm theo sau là cặp ngoặc (): Hàm được khai báo không thực thi ngay. Chúng được \"giữ dùng sau\" và chạy khi được gọi. Để gọi hàm, viết tên hàm theo sau là cặp ngoặc () và dấu chấm phẩy ; Ví dụ sau, myFunction() được dùng để in một văn bản (hành động) khi được gọi: Bên trong main, gọi myFunction(): Một hàm có thể được gọi nhiều lần: Một hàm C++ gồm hai phần: Lưu ý: nếu hàm do người dùng định nghĩa như myFunction() được khai báo sau main(), sẽ phát sinh lỗi: Tuy nhiên, vẫn có thể tách khai báo và định nghĩa hàm - để tối ưu code. Bạn thường gặp chương trình C++ đặt khai báo hàm phía trên main() và định nghĩa hàm phía dưới main(). Cách này làm code gọn gàng, dễ đọc hơn:"
    },
    "sections": [
      "Tạo một hàm",
      "Gọi một Chức năng",
      "Ví dụ",
      "Khai báo và định nghĩa hàm"
    ],
    "syntax": [
      {
        "code": "// Create a function\nvoid myFunction() {\n  cout << \"I just got executed!\";\n}\n\nint main() {\n  myFunction(); // call the function\n  return 0;\n}\n\n// Outputs \"I just got executed!\"",
        "explanation": "Bên trong main, gọi myFunction():"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\n// Create a function\nvoid myFunction() {\n  cout << \"I just got executed!\";\n}\n\nint main() {\n  myFunction(); // call the function\n  return 0;\n}\n\n// Outputs \"I just got executed!\"",
        "output": "I just got executed!",
        "explanation": "Bên trong main, gọi myFunction():"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nvoid myFunction() {\n  cout << \"I just got executed!\\n\";\n}\n\nint main() {\n  myFunction();\n  myFunction();\n  myFunction();\n  return 0;\n}\n\n// I just got executed!\n// I just got executed!\n// I just got executed!",
        "output": "I just got executed!\nI just got executed!\nI just got executed!",
        "explanation": "Một hàm có thể được gọi nhiều lần:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nvoid myFunction() {\n  cout << \"I just got executed!\";\n}\nint main() {\n  myFunction();\n  return 0;\n}\n\n\n// Error",
        "output": "I just got executed!",
        "explanation": "Chạy thử và tự sửa code để cảm nhận cách nó hoạt động."
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\n// Function declaration\nvoid myFunction();\n\n// The main method\nvoid myFunction() {\n  cout << \"I just got executed!\";\n}\nint main() {\n  myFunction();  // call the function\n  return 0;\n}\n\n// Function definition",
        "output": "I just got executed!",
        "explanation": "Bạn thường gặp chương trình C++ đặt khai báo hàm phía trên main() và định nghĩa hàm phía dưới main(). Cách này làm code gọn gàng, dễ đọc hơn:"
      }
    ],
    "tables": [],
    "useCases": [
      "Tách code thành hàm tái sử dụng.",
      "Gom logic liên quan tránh trùng lặp (DRY)."
    ],
    "notes": [
      "Lưu ý: nếu hàm do người dùng định nghĩa như myFunction() được khai báo sau main(), sẽ phát sinh lỗi:"
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      },
      {
        "wrong": "Bắt exception rồi bỏ qua không xử lý.",
        "why": "Lỗi bị nuốt, chương trình tiếp tục ở trạng thái sai.",
        "correct": "Catch rồi xử lý hoặc rethrow khi cần."
      }
    ],
    "keyTakeaways": [
      "Hàm là khối mã chỉ chạy khi được gọi.",
      "Bạn có thể truyền dữ liệu (gọi là tham số) vào hàm.",
      "Hàm dùng để thực hiện hành động nhất định và rất quan trọng để tái sử dụng code: định nghĩa một lần, dùng nhiều lần.",
      "C++ cung cấp một số hàm định sẵn, như main() dùng để thực thi mã. Nhưng bạn cũng có thể tạo hàm riêng để thực hiện hành  động nhất định.…"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_functions.asp"
  },
  {
    "id": "cpp-function-param",
    "slug": "function-param",
    "title": "Tham số hàm (Function Parameters)",
    "titleEn": "C++ Function Parameters",
    "num": 85,
    "chapter": "10 · Hàm (Functions)",
    "topic": "Functions & OOP",
    "difficulty": "intermediate",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-functions"
    ],
    "description": "Thông tin có thể truyền vào hàm dưới dạng tham số. Tham số hoạt động như biến bên trong hàm.",
    "objectives": [
      "Nắm được: Tham số hàm trong C++.",
      "Trình bày được: Tham số và đối số; Cú pháp; Ví dụ.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Thông tin có thể truyền vào hàm dưới dạng tham số. Tham số hoạt động như biến bên trong hàm. Tham số được chỉ định sau tên hàm, bên trong cặp ngoặc. Bạn có thể thêm bao nhiêu tham số cũng được, chỉ cần tách bằng dấu phẩy: Ví dụ sau có hàm nhận tham số chuỗi tên fname. Khi gọi hàm, ta truyền một tên, được dùng bên trong hàm để in họ tên đầy đủ: Khi tham số được truyền vào hàm, nó được gọi là đối số (argument). Từ ví dụ trên: fname là tham số, còn Liam, Jenny và Anja là đối số."
    },
    "sections": [
      "Tham số và đối số",
      "Cú pháp",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "void myFunction(string fname) {\n  cout << fname << \" Refsnes\\n\";\n}\n\nint main() {\n  myFunction(\"Liam\");\n  myFunction(\"Jenny\");\n  myFunction(\"Anja\");\n  return 0;\n}\n\n// Liam Refsnes\n// Jenny Refsnes\n// Anja Refsnes",
        "explanation": "Ví dụ sau có hàm nhận tham số chuỗi tên fname. Khi gọi hàm, ta truyền một tên, được dùng bên trong hàm để in họ tên đầy đủ:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nvoid myFunction(string fname) {\n  cout << fname << \" Refsnes\\n\";\n}\n\nint main() {\n  myFunction(\"Liam\");\n  myFunction(\"Jenny\");\n  myFunction(\"Anja\");\n  return 0;\n}\n\n// Liam Refsnes\n// Jenny Refsnes\n// Anja Refsnes",
        "output": "Liam Refsnes\nJenny Refsnes\nAnja Refsnes",
        "explanation": "Ví dụ sau có hàm nhận tham số chuỗi tên fname. Khi gọi hàm, ta truyền một tên, được dùng bên trong hàm để in họ tên đầy đủ:"
      }
    ],
    "tables": [],
    "useCases": [
      "Tách code thành hàm tái sử dụng.",
      "Gom logic liên quan tránh trùng lặp (DRY)."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      },
      {
        "wrong": "Quên #include <string> khi dùng std::string.",
        "why": "string không phải kiểu dựng sẵn — thiếu header sẽ không biên dịch.",
        "correct": "#include <string> rồi mới dùng string."
      }
    ],
    "keyTakeaways": [
      "Thông tin có thể truyền vào hàm dưới dạng tham số. Tham số hoạt động như biến bên trong hàm.",
      "Tham số được chỉ định sau tên hàm, bên trong cặp ngoặc. Bạn có thể thêm bao nhiêu tham số cũng được, chỉ cần tách bằng d ấu phẩy…",
      "Ví dụ sau có hàm nhận tham số chuỗi tên fname. Khi gọi hàm, ta truyền một tên, được dùng bên trong hàm để in họ tên đầy  đủ…",
      "Khi tham số được truyền vào hàm, nó được gọi là đối số (argument). Từ ví dụ trên: fname là tham số, còn Liam, Jenny và A nja là đối số.…"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_function_param.asp"
  },
  {
    "id": "cpp-function-default",
    "slug": "function-default",
    "title": "Tham số mặc định của hàm (Default Parameters)",
    "titleEn": "C++ Functions",
    "num": 86,
    "chapter": "10 · Hàm (Functions)",
    "topic": "Functions & OOP",
    "difficulty": "intermediate",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-function-param"
    ],
    "description": "Bạn cũng có thể đặt tham số mặc định bằng dấu bằng ( = ).",
    "objectives": [
      "Nắm được: Hàm C++.",
      "Trình bày được: Giá trị thông số mặc định; Ví dụ.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Bạn cũng có thể đặt tham số mặc định bằng dấu bằng ( = ). Nếu gọi hàm không có đối số, nó dùng giá trị mặc định (\"Norway\"): Tham số có giá trị mặc định thường được gọi là \"tham số tùy chọn\". Từ ví dụ trên, country là tham số tùy chọn và \"Norway\" là giá trị mặc định."
    },
    "sections": [
      "Giá trị thông số mặc định",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "void myFunction(string country = \"Norway\") {\n  cout << country << \"\\n\";\n}\n\nint main() {\n  myFunction(\"Sweden\");\n  myFunction(\"India\");\n  myFunction();\n  myFunction(\"USA\");\n  return 0;\n}\n\n// Sweden\n// India\n// Norway\n// USA",
        "explanation": "Nếu gọi hàm không có đối số, nó dùng giá trị mặc định (\"Norway\"):"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nvoid myFunction(string country = \"Norway\") {\n  cout << country << \"\\n\";\n}\n\nint main() {\n  myFunction(\"Sweden\");\n  myFunction(\"India\");\n  myFunction();\n  myFunction(\"USA\");\n  return 0;\n}\n\n// Sweden\n// India\n// Norway\n// USA",
        "output": "Sweden\nIndia\nNorway\nUSA",
        "explanation": "Nếu gọi hàm không có đối số, nó dùng giá trị mặc định (\"Norway\"):"
      }
    ],
    "tables": [],
    "useCases": [
      "Tách code thành hàm tái sử dụng.",
      "Gom logic liên quan tránh trùng lặp (DRY)."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      },
      {
        "wrong": "Bắt exception rồi bỏ qua không xử lý.",
        "why": "Lỗi bị nuốt, chương trình tiếp tục ở trạng thái sai.",
        "correct": "Catch rồi xử lý hoặc rethrow khi cần."
      }
    ],
    "keyTakeaways": [
      "Bạn cũng có thể đặt tham số mặc định bằng dấu bằng ( = ).",
      "Nếu gọi hàm không có đối số, nó dùng giá trị mặc định (\"Norway\"):",
      "Tham số có giá trị mặc định thường được gọi là \"tham số tùy chọn\". Từ ví dụ trên, country là tham số tùy chọn và \"Norway \" là giá trị mặc định.…"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_function_default.asp"
  },
  {
    "id": "cpp-function-multiple",
    "slug": "function-multiple",
    "title": "Truyền nhiều tham số vào hàm (Multiple Parameters)",
    "titleEn": "C++ Functions",
    "num": 87,
    "chapter": "10 · Hàm (Functions)",
    "topic": "Functions & OOP",
    "difficulty": "intermediate",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-function-default"
    ],
    "description": "Bên trong hàm, bạn có thể thêm bao nhiêu tham số cũng được:",
    "objectives": [
      "Nắm được: Hàm C++.",
      "Trình bày được: Nhiều thông số; Ví dụ.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Bên trong hàm, bạn có thể thêm bao nhiêu tham số cũng được: Lưu ý khi làm việc với nhiều tham số, lời gọi hàm phải có đúng số đối số như tham số, và các đối số phải truyền theo đúng thứ tự."
    },
    "sections": [
      "Nhiều thông số",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "void myFunction(string fname, int age) {\n  cout << fname << \" Refsnes. \" << age << \" years old. \\n\";\n}\n\nint main() {\n  myFunction(\"Liam\", 3);\n  myFunction(\"Jenny\", 14);\n  myFunction(\"Anja\", 30);\n  return 0;\n   }\n\n// Liam Refsnes. 3 years old.\n// Jenny Refsnes. 14 years old.\n   // Anja Refsnes. 30 years old.",
        "explanation": "Bên trong hàm, bạn có thể thêm bao nhiêu tham số cũng được:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nvoid myFunction(string fname, int age) {\n  cout << fname << \" Refsnes. \" << age << \" years old. \\n\";\n}\n\nint main() {\n  myFunction(\"Liam\", 3);\n  myFunction(\"Jenny\", 14);\n  myFunction(\"Anja\", 30);\n  return 0;\n   }\n\n// Liam Refsnes. 3 years old.\n// Jenny Refsnes. 14 years old.\n   // Anja Refsnes. 30 years old.",
        "output": "Liam Refsnes. 3 years old. \nJenny Refsnes. 14 years old. \nAnja Refsnes. 30 years old. ",
        "explanation": "Bên trong hàm, bạn có thể thêm bao nhiêu tham số cũng được:"
      }
    ],
    "tables": [],
    "useCases": [
      "Tách code thành hàm tái sử dụng.",
      "Gom logic liên quan tránh trùng lặp (DRY)."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      }
    ],
    "keyTakeaways": [
      "Bên trong hàm, bạn có thể thêm bao nhiêu tham số cũng được:",
      "Lưu ý khi làm việc với nhiều tham số, lời gọi hàm phải có đúng số đối số như tham số, và các đối số phải truyền theo đún g thứ tự.…"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_function_multiple.asp"
  },
  {
    "id": "cpp-function-return",
    "slug": "function-return",
    "title": "Giá trị trả về của hàm (Return Values)",
    "titleEn": "C++ Functions",
    "num": 88,
    "chapter": "10 · Hàm (Functions)",
    "topic": "Functions & OOP",
    "difficulty": "intermediate",
    "estimatedTime": 17,
    "prerequisites": [
      "cpp-function-multiple"
    ],
    "description": "Từ khóa void, dùng trong các ví dụ trước, chỉ ra rằng hàm không nên trả về giá trị. Nếu muốn hàm trả về giá trị, bạn có thể dùng một kiểu dữ liệu (như int, string, v.v.) thay vì void, và dùng từ khóa return bên trong hàm…",
    "objectives": [
      "Nắm được: Hàm C++.",
      "Trình bày được: Giá trị trả về; Ví dụ; Ví dụ thực tế.",
      "Chạy và sửa được 4 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Từ khóa void, dùng trong các ví dụ trước, chỉ ra rằng hàm không nên trả về giá trị. Nếu muốn hàm trả về giá trị, bạn có thể dùng một kiểu dữ liệu (như int, string, v.v.) thay vì void, và dùng từ khóa return bên trong hàm: Ví dụ này trả về tổng từ hàm có hai tham số: Bạn cũng có thể lưu kết quả vào biến: Đây là \"ví dụ game\" đơn giản và vui dùng hàm có return để nhân đôi một số năm lần:"
    },
    "sections": [
      "Giá trị trả về",
      "Ví dụ",
      "Ví dụ thực tế"
    ],
    "syntax": [
      {
        "code": "int myFunction(int x) {\n  return 5 + x;\n}\n\nint main() {\n  cout << myFunction(3);\n  return 0;\n}\n\n// Outputs 8 (5 + 3)",
        "explanation": "Từ khóa void, dùng trong các ví dụ trước, chỉ ra rằng hàm không nên trả về giá trị. Nếu muốn hàm trả về giá trị, bạn có thể dùng một kiểu dữ liệu (như int, string, v.v.) thay vì void, và dùng từ khóa return bên trong hàm:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint myFunction(int x) {\n  return 5 + x;\n}\n\nint main() {\n  cout << myFunction(3);\n  return 0;\n}\n\n// Outputs 8 (5 + 3)",
        "output": "8",
        "explanation": "Từ khóa void, dùng trong các ví dụ trước, chỉ ra rằng hàm không nên trả về giá trị. Nếu muốn hàm trả về giá trị, bạn có thể dùng một kiểu dữ liệu (như int, string, v.v.) thay vì void, và dùng từ khóa return bên trong hàm:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint myFunction(int x, int y) {\n  return x + y;\n}\n\nint main() {\n  cout << myFunction(5, 3);\n  return 0;\n}\n\n   // Outputs 8 (5 + 3)",
        "output": "8",
        "explanation": "Ví dụ này trả về tổng từ hàm có hai tham số:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint myFunction(int x, int y) {\n  return x + y;\n}\n\nint main() {\n  int z = myFunction(5, 3);\n  cout << z;\n  return 0;\n}\n   // Outputs 8 (5 + 3)",
        "output": "8",
        "explanation": "Bạn cũng có thể lưu kết quả vào biến:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint doubleGame(int x) {\n  return x * 2;\n}\n\nint main() {\n  for (int i = 1; i <= 5; i++) {\n    cout << \"Double of \" << i << \" is \" << doubleGame(i) << endl;\n  }\n  return 0;\n}",
        "output": "Double of 1 is 2\nDouble of 2 is 4\nDouble of 3 is 6\nDouble of 4 is 8\nDouble of 5 is 10",
        "explanation": "Đây là \"ví dụ game\" đơn giản và vui dùng hàm có return để nhân đôi một số năm lần:"
      }
    ],
    "tables": [],
    "useCases": [
      "Tách code thành hàm tái sử dụng.",
      "Gom logic liên quan tránh trùng lặp (DRY)."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      },
      {
        "wrong": "Quên #include <string> khi dùng std::string.",
        "why": "string không phải kiểu dựng sẵn — thiếu header sẽ không biên dịch.",
        "correct": "#include <string> rồi mới dùng string."
      }
    ],
    "keyTakeaways": [
      "Từ khóa void, dùng trong các ví dụ trước, chỉ ra rằng hàm không nên trả về giá trị. Nếu muốn hàm trả về giá trị, bạn có…",
      "Ví dụ này trả về tổng từ hàm có hai tham số:",
      "Bạn cũng có thể lưu kết quả vào biến:",
      "Đây là \"ví dụ game\" đơn giản và vui dùng hàm có return để nhân đôi một số năm lần:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_function_return.asp"
  },
  {
    "id": "cpp-function-reference",
    "slug": "function-reference",
    "title": "Truyền tham số bằng tham chiếu (Pass by Reference)",
    "titleEn": "C++ Functions",
    "num": 89,
    "chapter": "10 · Hàm (Functions)",
    "topic": "Functions & OOP",
    "difficulty": "intermediate",
    "estimatedTime": 14,
    "prerequisites": [
      "cpp-function-return"
    ],
    "description": "Trong các ví dụ ở trang trước, ta đã dùng biến thường khi truyền tham số vào hàm.",
    "objectives": [
      "Nắm được: Hàm C++.",
      "Trình bày được: Chuyển qua tham chiếu; Ví dụ.",
      "Chạy và sửa được 3 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Trong các ví dụ ở trang trước, ta đã dùng biến thường khi truyền tham số vào hàm. Bạn cũng có thể truyền một tham chiếu vào hàm. Hữu ích khi bạn cần thay đổi giá trị của tham số: Truyền số nguyên theo tham chiếu: Truyền hai số nguyên theo tham chiếu: Truyền chuỗi theo tham chiếu:"
    },
    "sections": [
      "Chuyển qua tham chiếu",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "void changeValue(int &num) {\n  num = 50;\n}\n\nint main() {\n  int value = 10;\n  changeValue(value);  // Call the function and change the value to 50\n  cout << value;\n  return 0;\n }",
        "explanation": "Truyền số nguyên theo tham chiếu:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nvoid changeValue(int &num) {\n  num = 50;\n}\n\nint main() {\n  int value = 10;\n  changeValue(value);  // Call the function and change the value to 50\n  cout << value;\n  return 0;\n }",
        "output": "50",
        "explanation": "Truyền số nguyên theo tham chiếu:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nvoid swapNums(int &x, int &y) {\n  int z = x;\n  x = y;\n  y = z;\n}\n\nint main() {\n  int firstNum = 10;\n  int secondNum = 20;\n\n  cout << \"Before swap: \" << \"\\n\";\n  cout << firstNum << secondNum << \"\\n\";\n\n  // Call the function, which will change the values of firstNum and secondNum\n  swapNums(firstNum, secondNum);\n\n  cout << \"After swap: \" << \"\\n\";\n  cout << firstNum << secondNum << \"\\n\";\n\n  return 0;\n}",
        "output": "Before swap: \n1020\nAfter swap: \n2010",
        "explanation": "Truyền hai số nguyên theo tham chiếu:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nvoid modifyStr(string &str) {\n  str += \" World!\";\n}\n\nint main() {\n  string greeting = \"Hello\";\n  modifyStr(greeting);\n  cout << greeting;\n  return 0;\n}",
        "output": "Hello World!",
        "explanation": "Truyền chuỗi theo tham chiếu:"
      }
    ],
    "tables": [],
    "useCases": [
      "Tách code thành hàm tái sử dụng.",
      "Gom logic liên quan tránh trùng lặp (DRY)."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      },
      {
        "wrong": "Quên #include <string> khi dùng std::string.",
        "why": "string không phải kiểu dựng sẵn — thiếu header sẽ không biên dịch.",
        "correct": "#include <string> rồi mới dùng string."
      }
    ],
    "keyTakeaways": [
      "Trong các ví dụ ở trang trước, ta đã dùng biến thường khi truyền tham số vào hàm.",
      "Bạn cũng có thể truyền một tham chiếu vào hàm.",
      "Hữu ích khi bạn cần thay đổi giá trị của tham số:",
      "Truyền số nguyên theo tham chiếu:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_function_reference.asp"
  },
  {
    "id": "cpp-function-array",
    "slug": "function-array",
    "title": "Truyền mảng vào hàm (Pass Arrays to Functions)",
    "titleEn": "C++ Pass Array to Function",
    "num": 90,
    "chapter": "10 · Hàm (Functions)",
    "topic": "Functions & OOP",
    "difficulty": "intermediate",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-function-reference"
    ],
    "description": "Bạn cũng có thể truyền mảng vào hàm:",
    "objectives": [
      "Nắm được: Truyền mảng vào hàm trong C++.",
      "Trình bày được: Truyền mảng làm tham số hàm; Ví dụ.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Bạn cũng có thể truyền mảng vào hàm: Hàm (myFunction) nhận một mảng làm tham số (int myNumbers[5]) và lặp qua phần tử mảng bằng vòng lặp for. Khi hàm được gọi trong main(), ta truyền mảng myNumbers, và mảng này xuất ra các phần tử. Lưu ý rằng khi gọi hàm, bạn chỉ cần dùng tên mảng khi truyền nó làm đối số myFunction(myNumbers). Tuy nhiên, khai báo đầy đủ của mảng là cần trong tham số hàm (int myNumbers[5])."
    },
    "sections": [
      "Truyền mảng làm tham số hàm",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "void myFunction(int myNumbers[5]) {\n  for (int i = 0; i < 5; i++) {\n     cout << myNumbers[i] << \"\\n\";\n  }\n}\n\nint main() {\n  int myNumbers[5] = {10, 20, 30, 40, 50};\n  myFunction(myNumbers);\n  return 0;\n}",
        "explanation": "Bạn cũng có thể truyền mảng vào hàm:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nvoid myFunction(int myNumbers[5]) {\n  for (int i = 0; i < 5; i++) {\n     cout << myNumbers[i] << \"\\n\";\n  }\n}\n\nint main() {\n  int myNumbers[5] = {10, 20, 30, 40, 50};\n  myFunction(myNumbers);\n  return 0;\n}",
        "output": "10\n20\n30\n40\n50",
        "explanation": "Bạn cũng có thể truyền mảng vào hàm:"
      }
    ],
    "tables": [],
    "useCases": [
      "Tách code thành hàm tái sử dụng.",
      "Gom logic liên quan tránh trùng lặp (DRY)."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Vòng lặp while không có câu lệnh làm thay đổi điều kiện.",
        "why": "Điều kiện không bao giờ sai → lặp vô hạn.",
        "correct": "Đảm bảo biến đếm/điều kiện thay đổi trong thân vòng lặp."
      },
      {
        "wrong": "Truy cập phần tử ngoài chỉ mục hợp lệ (ví dụ arr[5] cho mảng 5 phần tử).",
        "why": "Chỉ mục hợp lệ là 0..n-1; vượt biên là undefined behavior.",
        "correct": "Duyệt i từ 0 đến n-1."
      }
    ],
    "keyTakeaways": [
      "Bạn cũng có thể truyền mảng vào hàm:",
      "Hàm (myFunction) nhận một mảng làm tham số (int myNumbers[5]) và lặp qua phần tử mảng bằng vòng lặp for.",
      "Khi hàm được gọi trong main(), ta truyền mảng myNumbers, và mảng này xuất ra các phần tử.",
      "Lưu ý rằng khi gọi hàm, bạn chỉ cần dùng tên mảng khi truyền nó làm đối số myFunction(myNumbers). Tuy nhiên, khai báo đầ y đủ của mảng là cần trong tham số hàm (int myNumbers[5]).…"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_function_array.asp"
  },
  {
    "id": "cpp-function-structures",
    "slug": "function-structures",
    "title": "Truyền struct vào hàm (Pass Struct to Functions)",
    "titleEn": "C++ Pass Structures to a Function",
    "num": 91,
    "chapter": "10 · Hàm (Functions)",
    "topic": "Functions & OOP",
    "difficulty": "intermediate",
    "estimatedTime": 11,
    "prerequisites": [
      "cpp-function-array"
    ],
    "description": "Bạn cũng có thể truyền cấu trúc vào hàm.",
    "objectives": [
      "Nắm được: Truyền cấu trúc vào hàm trong C++.",
      "Trình bày được: Truyền cấu trúc vào hàm; Ví dụ; Chuyển qua tham chiếu.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Bạn cũng có thể truyền cấu trúc vào hàm. Hữu ích khi làm việc với dữ liệu nhóm bên trong một hàm: Lưu ý: cấu trúc được truyền theo giá trị nên hàm nhận một bản sao. Điều này có nghĩa là dữ liệu gốc không bị thay đổi. Bạn cũng có thể truyền cấu trúc theo tham chiếu, dùng &. Điều này cho phép hàm thay đổi dữ liệu gốc: Mẹo: dùng tham chiếu nếu muốn hàm thay đổi dữ liệu của cấu trúc, hoặc để tránh sao chép cấu trúc lớn."
    },
    "sections": [
      "Truyền cấu trúc vào hàm",
      "Ví dụ",
      "Chuyển qua tham chiếu"
    ],
    "syntax": [
      {
        "code": "struct Car {\n  string brand;\n  int year;\n};\n\nvoid myFunction(Car c) {\n  cout << \"Brand: \" << c.brand << \", Year: \" << c.year << \"\\n\";\n }\n\nint main() {\n  Car myCar = {\"Toyota\", 2020};\n  myFunction(myCar);\n  return 0;\n}",
        "explanation": "Hữu ích khi làm việc với dữ liệu nhóm bên trong một hàm:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nstruct Car {\n  string brand;\n  int year;\n};\n\nvoid myFunction(Car c) {\n  cout << \"Brand: \" << c.brand << \", Year: \" << c.year << \"\\n\";\n }\n\nint main() {\n  Car myCar = {\"Toyota\", 2020};\n  myFunction(myCar);\n  return 0;\n}",
        "output": "Brand: Toyota, Year: 2020",
        "explanation": "Hữu ích khi làm việc với dữ liệu nhóm bên trong một hàm:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nstruct Car {\n  string brand;\n  int year;\n};\n\nvoid updateYear(Car &c) {\n  c.year++;\n}\n\nint main() {\n  Car myCar = {\"Toyota\", 2020};\n  updateYear(myCar);\n  cout << \"The \" << myCar.brand << \" is now from year \" << myCar.year << \".\\n\";\n  return 0;\n}",
        "output": "The Toyota is now from year 2021.",
        "explanation": "Điều này cho phép hàm thay đổi dữ liệu gốc:"
      }
    ],
    "tables": [],
    "useCases": [
      "Tách code thành hàm tái sử dụng.",
      "Gom logic liên quan tránh trùng lặp (DRY)."
    ],
    "notes": [
      "Lưu ý: cấu trúc được truyền theo giá trị nên hàm nhận một bản sao.",
      "Mẹo: dùng tham chiếu nếu muốn hàm thay đổi dữ liệu của cấu trúc, hoặc để tránh sao chép cấu trúc lớn."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      }
    ],
    "keyTakeaways": [
      "Bạn cũng có thể truyền cấu trúc vào hàm.",
      "Hữu ích khi làm việc với dữ liệu nhóm bên trong một hàm:",
      "Lưu ý: cấu trúc được truyền theo giá trị nên hàm nhận một bản sao.",
      "Điều này có nghĩa là dữ liệu gốc không bị thay đổi."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_function_structures.asp"
  },
  {
    "id": "cpp-function-reallife",
    "slug": "function-reallife",
    "title": "Ví dụ thực tế về hàm (Functions Real Life)",
    "titleEn": "C++ Functions Real Life Examples",
    "num": 92,
    "chapter": "10 · Hàm (Functions)",
    "topic": "Functions & OOP",
    "difficulty": "intermediate",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-function-structures"
    ],
    "description": "Để minh họa ví dụ thực tế của hàm, hãy tạo chương trình đổi giá trị từ fahrenheit sang celsius:",
    "objectives": [
      "Nắm được: Ví dụ thực tế về hàm trong C++.",
      "Trình bày được: Ví dụ thực tế.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Để minh họa ví dụ thực tế của hàm, hãy tạo chương trình đổi giá trị từ fahrenheit sang celsius:"
    },
    "sections": [
      "Ví dụ thực tế"
    ],
    "syntax": [
      {
        "code": "// Function to convert Fahrenheit to Celsius\nfloat toCelsius(float fahrenheit) {\n  return (5.0 / 9.0) * (fahrenheit - 32.0);\n}\n\nint main() {\n  // Set a fahrenheit value\n  float f_value = 98.8;\n\n  // Call the function with the fahrenheit value\n  float result = toCelsius(f_value);\n\n  // Print the fahrenheit value\n  cout << \"Fahrenheit: \" << f_value << \"\\n\";\n\n  // Print the result\n  cout << \"Convert Fahrenheit to Celsius: \" << result << \"\\n\";\n\n  return 0;\n}",
        "explanation": "Để minh họa ví dụ thực tế của hàm, hãy tạo chương trình đổi giá trị từ fahrenheit sang celsius:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\n// Function to convert Fahrenheit to Celsius\nfloat toCelsius(float fahrenheit) {\n  return (5.0 / 9.0) * (fahrenheit - 32.0);\n}\n\nint main() {\n  // Set a fahrenheit value\n  float f_value = 98.8;\n\n  // Call the function with the fahrenheit value\n  float result = toCelsius(f_value);\n\n  // Print the fahrenheit value\n  cout << \"Fahrenheit: \" << f_value << \"\\n\";\n\n  // Print the result\n  cout << \"Convert Fahrenheit to Celsius: \" << result << \"\\n\";\n\n  return 0;\n}",
        "output": "Fahrenheit: 98.8\nConvert Fahrenheit to Celsius: 37.1111",
        "explanation": "Để minh họa ví dụ thực tế của hàm, hãy tạo chương trình đổi giá trị từ fahrenheit sang celsius:"
      }
    ],
    "tables": [],
    "useCases": [
      "Tách code thành hàm tái sử dụng.",
      "Gom logic liên quan tránh trùng lặp (DRY)."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      }
    ],
    "keyTakeaways": [
      "Để minh họa ví dụ thực tế của hàm, hãy tạo chương trình đổi giá trị từ fahrenheit sang celsius:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_function_reallife.asp"
  },
  {
    "id": "cpp-function-overloading",
    "slug": "function-overloading",
    "title": "Nạp chồng hàm (Function Overloading)",
    "titleEn": "C++ Function Overloading",
    "num": 93,
    "chapter": "10 · Hàm (Functions)",
    "topic": "Functions & OOP",
    "difficulty": "intermediate",
    "estimatedTime": 14,
    "prerequisites": [
      "cpp-function-reallife"
    ],
    "description": "Quá tải hàm cho phép nhiều hàm trùng tên miễn là tham số khác nhau về kiểu hoặc số lượng:",
    "objectives": [
      "Nắm được: Quá tải hàm trong C++.",
      "Trình bày được: Quá tải chức năng; Ví dụ; Không dùng quá tải hàm.",
      "Chạy và sửa được 3 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Quá tải hàm cho phép nhiều hàm trùng tên miễn là tham số khác nhau về kiểu hoặc số lượng: Điều này cho phép dùng cùng tên hàm cho các tác vụ tương tự. Xét ví dụ sau với hai hàm cộng các số khác kiểu: Vấn đề: ta phải tạo hai tên hàm khác nhau cho cùng một logic. Thay vì định nghĩa hai hàm cùng việc, tốt hơn là quá tải một hàm. Ví dụ dưới đây quá tải hàm plusFunc để dùng cho cả int và double: Lưu ý: nhiều hàm có thể trùng tên miễn là số lượng và/hoặc kiểu tham số khác nhau. Ví dụ này, ta quá tải hàm bằng cách dùng số tham số khác nhau:"
    },
    "sections": [
      "Quá tải chức năng",
      "Ví dụ",
      "Không dùng quá tải hàm",
      "Sử dụng quá tải hàm",
      "Quá tải hàm theo số lượng tham số"
    ],
    "syntax": [
      {
        "code": "int plusFuncInt(int x, int y) {\n  return x + y;\n}\n\ndouble plusFuncDouble(double x, double y) {\n  return x + y;\n}\n\nint main() {\n  int myNum1 = plusFuncInt(8, 5);\n  double myNum2 = plusFuncDouble(4.3, 6.26);\n\n  cout << \"Int: \" << myNum1 << \"\\n\";\n  cout << \"Double: \" << myNum2;\n  return 0;\n}",
        "explanation": "Xét ví dụ sau với hai hàm cộng các số khác kiểu:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint plusFuncInt(int x, int y) {\n  return x + y;\n}\n\ndouble plusFuncDouble(double x, double y) {\n  return x + y;\n}\n\nint main() {\n  int myNum1 = plusFuncInt(8, 5);\n  double myNum2 = plusFuncDouble(4.3, 6.26);\n\n  cout << \"Int: \" << myNum1 << \"\\n\";\n  cout << \"Double: \" << myNum2;\n  return 0;\n}",
        "output": "Int: 13\nDouble: 10.56",
        "explanation": "Xét ví dụ sau với hai hàm cộng các số khác kiểu:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint plusFunc(int x, int y) {\n  return x + y;\n}\n\ndouble plusFunc(double x, double y) {\n  return x + y;\n}\n\nint main() {\n  int myNum1 = plusFunc(8, 5);\n  double myNum2 = plusFunc(4.3, 6.26);\n\n  cout << \"Int: \" << myNum1 << \"\\n\";\n  cout << \"Double: \" << myNum2;\n  return 0;\n}",
        "output": "Int: 13\nDouble: 10.56",
        "explanation": "Ví dụ dưới đây quá tải hàm plusFunc để dùng cho cả int và double:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint plusFunc(int x, int y) {\n   return x + y;\n }\n\n  int plusFunc(int x, int y, int z) {\n   return x + y + z;\n }\n\n  int main() {\n   int result1 = plusFunc(3, 7);\n   int result2 = plusFunc(1, 2, 3);\n\n   cout << \"Sum of 2 numbers: \" << result1 << \"\\n\";\n   cout << \"Sum of 3 numbers: \" << result2;\n   return 0;\n }",
        "output": "Sum of 2 numbers: 10\nSum of 3 numbers: 6",
        "explanation": "Ví dụ này, ta quá tải hàm bằng cách dùng số tham số khác nhau:"
      }
    ],
    "tables": [],
    "useCases": [
      "Tách code thành hàm tái sử dụng.",
      "Gom logic liên quan tránh trùng lặp (DRY)."
    ],
    "notes": [
      "Lưu ý: nhiều hàm có thể trùng tên miễn là số lượng và/hoặc kiểu tham số khác nhau."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      }
    ],
    "keyTakeaways": [
      "Quá tải hàm cho phép nhiều hàm trùng tên miễn là tham số khác nhau về kiểu hoặc số lượng:",
      "Điều này cho phép dùng cùng tên hàm cho các tác vụ tương tự.",
      "Xét ví dụ sau với hai hàm cộng các số khác kiểu:",
      "Vấn đề: ta phải tạo hai tên hàm khác nhau cho cùng một logic."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_function_overloading.asp"
  },
  {
    "id": "cpp-scope",
    "slug": "scope",
    "title": "Phạm vi của biến (Variable Scope)",
    "titleEn": "C++ Variable Scope",
    "num": 94,
    "chapter": "10 · Hàm (Functions)",
    "topic": "Functions & OOP",
    "difficulty": "intermediate",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-function-overloading"
    ],
    "description": "Giờ đã hiểu hàm hoạt động thế nào, điều quan trọng là biết biến cư xử ra sao trong và ngoài hàm.",
    "objectives": [
      "Nắm được: Phạm vi biến đổi C++.",
      "Trình bày được: Phạm vị cục bộ; Ví dụ; Phạm vị toàn cục.",
      "Chạy và sửa được 5 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Giờ đã hiểu hàm hoạt động thế nào, điều quan trọng là biết biến cư xử ra sao trong và ngoài hàm. Trong C++, biến chỉ truy cập được trong vùng tạo ra nó. Đó gọi là phạm vi (scope). Biến tạo trong hàm thuộc phạm vi cục bộ của hàm đó và chỉ dùng được bên trong nó: Biến cục bộ không thể dùng ngoài hàm chứa nó. Nếu truy cập nó ngoài hàm, sẽ phát sinh lỗi: Biến tạo ngoài hàm gọi là biến toàn cục và thuộc phạm vi toàn cục. Biến toàn cục dùng được trong mọi phạm vi, toàn cục lẫn cục bộ: Biến tạo ngoài hàm là toàn cục và ai cũng có thể dùng: Nếu bạn dùng cùng tên biến bên trong và bên ngoài một hàm, C++ sẽ coi chúng là hai biến riêng biệt; một có trong phạm vi toàn cục (ngoài hàm) và một có trong phạm vi cục bộ (trong hàm): Hàm sẽ in x cục bộ, sau đó đoạn mã in x toàn cục: Tuy nhiên, nên tránh dùng cùng tên cho biến toàn cục và cục bộ vì dễ gây lỗi và nhầm lẫn. Nhìn chung, hãy cẩn thận với biến toàn cục vì chúng có thể được truy cập và sửa từ mọi hàm: Thay đổi giá trị của x từ myFunction: Tóm lại, hãy dùng biến cục bộ (với tên biến tốt) nhiều nhất có thể. Điều này sẽ làm code dễ bảo trì và dễ hiểu hơn."
    },
    "sections": [
      "Phạm vị cục bộ",
      "Ví dụ",
      "Phạm vị toàn cục",
      "Biến đặt tên",
      "Kết luận"
    ],
    "syntax": [
      {
        "code": "void myFunction() {\n  // Local variable that belongs to myFunction\n  int x = 5;\n\n  // Print the variable x\n  cout << x;\n}\n\nint main() {\n  myFunction();\n  return 0;\n}",
        "explanation": "Biến tạo trong hàm thuộc phạm vi cục bộ của hàm đó và chỉ dùng được bên trong nó:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nvoid myFunction() {\n  // Local variable that belongs to myFunction\n  int x = 5;\n\n  // Print the variable x\n  cout << x;\n}\n\nint main() {\n  myFunction();\n  return 0;\n}",
        "output": "5",
        "explanation": "Biến tạo trong hàm thuộc phạm vi cục bộ của hàm đó và chỉ dùng được bên trong nó:"
      },
      {
        "title": "Ví dụ",
        "code": "void myFunction() {\n  // Local variable that belongs to myFunction\n  int x = 5;\n}\n\nint main() {\n  myFunction();\n\n  // Print the variable x in the main function\n  cout << x;\n  return 0;\n   }",
        "output": "",
        "explanation": "Nếu truy cập nó ngoài hàm, sẽ phát sinh lỗi:",
        "runnable": false
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\n// Global variable x\nint x = 5;\n\nvoid myFunction() {\n  // We can use x here\n  cout << x << \"\\n\";\n}\n\nint main() {\n  myFunction();\n\n  // We can also use x here\n  cout << x;\n  return 0;\n}",
        "output": "5\n5",
        "explanation": "Biến tạo ngoài hàm là toàn cục và ai cũng có thể dùng:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\n// Global variable x\nint x = 5;\n\nvoid myFunction() {\n  // Local variable with the same name as the global variable (x)\n  int x = 22;\n  cout << x << \"\\n\"; // Refers to the local variable x\n}\n\nint main() {\n  myFunction();\n\n  cout << x; // Refers to the global variable x\n  return 0;\n}",
        "output": "22\n5",
        "explanation": "Hàm sẽ in x cục bộ, sau đó đoạn mã in x toàn cục:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\n// Global variable x\nint x = 5;\n\nvoid myFunction() {\n  cout << ++x << \"\\n\"; // Increment the value of x by 1 and print it\n}\n\nint main() {\n  myFunction();\n\n  cout << x; // Print the global variable x\n  return 0;\n}\n\n// The value of x is now 6 (no longer 5)",
        "output": "6\n6",
        "explanation": "Thay đổi giá trị của x từ myFunction:"
      }
    ],
    "tables": [],
    "useCases": [
      "Tách code thành hàm tái sử dụng.",
      "Gom logic liên quan tránh trùng lặp (DRY)."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      },
      {
        "wrong": "Bắt exception rồi bỏ qua không xử lý.",
        "why": "Lỗi bị nuốt, chương trình tiếp tục ở trạng thái sai.",
        "correct": "Catch rồi xử lý hoặc rethrow khi cần."
      }
    ],
    "keyTakeaways": [
      "Giờ đã hiểu hàm hoạt động thế nào, điều quan trọng là biết biến cư xử ra sao trong và ngoài hàm.",
      "Trong C++, biến chỉ truy cập được trong vùng tạo ra nó. Đó gọi là phạm vi (scope).",
      "Biến tạo trong hàm thuộc phạm vi cục bộ của hàm đó và chỉ dùng được bên trong nó:",
      "Biến cục bộ không thể dùng ngoài hàm chứa nó."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_scope.asp"
  },
  {
    "id": "cpp-functions-recursion",
    "slug": "functions-recursion",
    "title": "Đệ quy trong C++ (Recursion)",
    "titleEn": "C++ Function Recursion",
    "num": 95,
    "chapter": "10 · Hàm (Functions)",
    "topic": "Functions & OOP",
    "difficulty": "intermediate",
    "estimatedTime": 14,
    "prerequisites": [
      "cpp-scope"
    ],
    "description": "Đệ quy là kỹ thuật để hàm gọi chính nó.",
    "objectives": [
      "Nắm được: Đệ quy hàm trong C++.",
      "Trình bày được: Đệ qui; Ví dụ đệ quy; Ví dụ được giải thích.",
      "Chạy và sửa được 3 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Đệ quy là kỹ thuật để hàm gọi chính nó. Kỹ thuật này chia bài toán phức tạp thành các bài toán đơn giản dễ giải hơn. Đệ quy hơi khó hiểu. Cách tốt nhất để nắm nó là tự thử nghiệm. Cộng hai số thì dễ, nhưng cộng một dải số thì phức tạp hơn. Trong ví dụ sau, đệ quy được dùng để cộng một dải số bằng cách chia nhỏ thành nhiệm vụ cộng hai số đơn giản: Khi sum() được gọi, nó cộng tham số k vào tổng của mọi số nhỏ hơn k rồi trả kết quả. Khi k bằng 0, hàm chỉ trả về 0. Vì hàm không gọi chính nó khi k bằng 0, chương trình dừng ở đó và trả kết quả. Lập trình viên phải rất cẩn thận với đệ quy vì rất dễ viết ra hàm không bao giờ kết thúc, hoặc dùng quá nhiều bộ nhớ/năng lực vi xử lý. Tuy nhiên, khi viết đúng, đệ quy có thể là cách lập trình rất hiệu quả và thanh thoát về mặt toán học. Ví dụ này minh họa dùng đệ quy để tạo hàm đếm ngược: Hàm gọi chính nó với n - 1 cho đến khi n bằng 0. Ví dụ này dùng hàm đệ quy để tính giai thừa của 5: Giai thừa nghĩa là nhân một số với mọi số nhỏ hơn xuống đến 1 (ví dụ giai thừa của 5 là: 5 * 4 * 3 * 2 * 1 = 120)."
    },
    "sections": [
      "Đệ qui",
      "Ví dụ đệ quy",
      "Ví dụ được giải thích",
      "Đếm ngược",
      "Ví dụ",
      "Thừa số của một số"
    ],
    "syntax": [
      {
        "code": "int sum(int k) {\n  if (k > 0) {\n    return k + sum(k - 1);\n  } else {\n         return 0;\n  }\n}\n\nint main() {\n  int result = sum(10);\n  cout << result;\n  return 0;\n}",
        "explanation": "Trong ví dụ sau, đệ quy được dùng để cộng một dải số bằng cách chia nhỏ thành nhiệm vụ cộng hai số đơn giản:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint sum(int k) {\n  if (k > 0) {\n    return k + sum(k - 1);\n  } else {\n         return 0;\n  }\n}\n\nint main() {\n  int result = sum(10);\n  cout << result;\n  return 0;\n}",
        "output": "55",
        "explanation": "Trong ví dụ sau, đệ quy được dùng để cộng một dải số bằng cách chia nhỏ thành nhiệm vụ cộng hai số đơn giản:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nvoid countdown(int n) {\n  if (n > 0) {\n    cout << n << \" \";\n    countdown(n - 1);\n  }\n}\n\nint main() {\n  countdown(5);\n}",
        "output": "5 4 3 2 1 ",
        "explanation": "Ví dụ này minh họa dùng đệ quy để tạo hàm đếm ngược:"
      },
      {
        "title": "Thừa số của một số",
        "code": "#include <iostream>\nusing namespace std;\nint factorial(int n) {\n   if (n > 1) {\n     return n * factorial(n - 1);\n   } else {\n     return 1;\n   }\n }\n\n  int main() {\n   cout << \"Factorial of 5 is \" << factorial(5);\n   return 0;\n }",
        "output": "Factorial of 5 is 120",
        "explanation": "Ví dụ này dùng hàm đệ quy để tính giai thừa của 5:"
      }
    ],
    "tables": [],
    "useCases": [
      "Tách code thành hàm tái sử dụng.",
      "Gom logic liên quan tránh trùng lặp (DRY)."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      }
    ],
    "keyTakeaways": [
      "Đệ quy là kỹ thuật để hàm gọi chính nó.",
      "Kỹ thuật này chia bài toán phức tạp thành các bài toán đơn giản dễ giải hơn.",
      "Đệ quy hơi khó hiểu. Cách tốt nhất để nắm nó là tự thử nghiệm.",
      "Cộng hai số thì dễ, nhưng cộng một dải số thì phức tạp hơn."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_functions_recursion.asp"
  },
  {
    "id": "cpp-functions-lambda",
    "slug": "functions-lambda",
    "title": "Hàm ẩn danh (Lambda Expressions)",
    "titleEn": "C++ Lambda Functions",
    "num": 96,
    "chapter": "10 · Hàm (Functions)",
    "topic": "Functions & OOP",
    "difficulty": "intermediate",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-functions-recursion"
    ],
    "description": "Hàm lambda là một hàm nhỏ, ẩn danh, bạn có thể viết trực tiếp trong code. Hữu ích khi cần một hàm nhanh mà không phải đặt tên hay khai báo riêng.",
    "objectives": [
      "Nắm được: Hàm Lambda trong C++.",
      "Trình bày được: Hàm Lambda; Cú pháp; Ví dụ cơ bản về Lambda.",
      "Chạy và sửa được 6 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Hàm lambda là một hàm nhỏ, ẩn danh, bạn có thể viết trực tiếp trong code. Hữu ích khi cần một hàm nhanh mà không phải đặt tên hay khai báo riêng. Hãy coi nó như một \"hàm mini viết nhanh tại chỗ\". Đừng lo: ta sẽ giải thích [ capture ] nghĩa là gì sau. Hiện cứ dùng cặp ngoặc trống. Ở đây, message giữ một lambda in thông điệp ra màn hình: Bạn có thể truyền giá trị vào lambda như hàm thường: Bạn cũng có thể truyền lambda làm đối số cho hàm khác. Hữu ích khi bạn muốn bảo hàm làm gì, chứ không chỉ truyền dữ liệu. Trong ví dụ dưới đây, ta gửi một lambda nhỏ vào hàm khác, và hàm đó chạy nó hai lần: Lưu ý phải include thư viện <functional> để ví dụ hoạt động. Bạn có thể định nghĩa và dùng lambda ngay trong vòng lặp, rất hợp với thao tác nhanh: Bạn có thể dùng ngoặc [ ] để cấp cho lambda quyền truy cập biến bên ngoài nó. Được gọi là mệnh đề capture (capture clause). Ví dụ này, lambda capture biến x theo giá trị (một bản sao): Lưu ý: lambda dùng bản sao của x. Nếu đổi x sau khi định nghĩa lambda, nó không ảnh hưởng giá trị bên trong lambda. Lưu ý: bạn cũng có thể dùng [&] để capture theo tham chiếu. Nếu muốn lambda dùng giá trị mới nhất của biến (không chỉ bản sao), hãy dùng [&] để capture theo tham chiếu. Nghĩa là lambda sẽ làm việc với biến gốc, không phải bản sao: Tại sao? Lambda nhìn thấy biến x gốc, nên khi đổi x, lambda dùng giá trị mới. Cả hàm thường và lambda đều gom mã để chạy sau, nhưng dùng trong tình huống hơi khác nhau. Cả hai ví dụ đều làm việc như nhau: trả về tổng hai số: Lưu ý: phiên bản lambda rất tuyệt khi bạn không cần dùng lại hàm về sau. Nó nhanh và hợp trong các khối hoặc làm đối số cho hàm khác."
    },
    "sections": [
      "Hàm Lambda",
      "Cú pháp",
      "Ví dụ cơ bản về Lambda",
      "Lambda với các thông số",
      "Truyền lambda vào hàm",
      "Sử dụng Lambdas trong Loops",
      "Điều khoản bắt giữ []",
      "Chụp bằng tham chiếu",
      "Hàm thường so với hàm Lambda"
    ],
    "syntax": [
      {
        "code": "[capture] (parameters) { code };",
        "explanation": "Hãy coi nó như một \"hàm mini viết nhanh tại chỗ\"."
      }
    ],
    "examples": [
      {
        "title": "Cú pháp",
        "code": "[capture] (parameters) { code };",
        "output": "",
        "explanation": "Hãy coi nó như một \"hàm mini viết nhanh tại chỗ\".",
        "runnable": false
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n   auto message = []() {\n     cout << \"Hello World!\\n\";\n   };\n\n   message();\n   return 0;\n }",
        "output": "Hello World!",
        "explanation": "Ở đây, message giữ một lambda in thông điệp ra màn hình:"
      },
      {
        "title": "Lambda với các thông số",
        "code": "#include <iostream>\n using namespace std;\n\n int main() {\n   auto add = [](int a, int b) {\n     return a + b;\n   };\n\n   cout << add(3, 4);\n   return 0;\n }",
        "output": "7",
        "explanation": "Bạn có thể truyền giá trị vào lambda như hàm thường:"
      },
      {
        "title": "Truyền lambda vào hàm",
        "code": "#include <iostream>\n#include <functional> // Needed for std::function\n   using namespace std;\n\n// A function that takes another function as parameter\nvoid myFunction(function<void()> func) {\n  func();\n  func();\n}\n\nint main() {\n  auto message = []() {\n    cout << \"Hello World!\\n\";\n  };\n\n  myFunction(message);\n  return 0;\n}",
        "output": "Hello World!\nHello World!",
        "explanation": "Trong ví dụ dưới đây, ta gửi một lambda nhỏ vào hàm khác, và hàm đó chạy nó hai lần:"
      },
      {
        "title": "Sử dụng Lambdas trong Loops",
        "code": "#include <iostream>\n using namespace std;\n\n int main() {\n   for (int i = 1; i <= 3; i++) {\n     auto show = [i]() {\n       cout << \"Number: \" << i << \"\\n\";\n     };\n     show();\n   }\n   return 0;\n }",
        "output": "Number: 1\nNumber: 2\nNumber: 3",
        "explanation": "Bạn có thể định nghĩa và dùng lambda ngay trong vòng lặp, rất hợp với thao tác nhanh:"
      },
      {
        "title": "Điều khoản bắt giữ []",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n   int x = 10;\n   auto show = [x]() {\n     cout << x;\n   };\n\n   show();\n   return 0;\n }",
        "output": "10",
        "explanation": "Ví dụ này, lambda capture biến x theo giá trị (một bản sao):"
      }
    ],
    "tables": [],
    "useCases": [
      "Tách code thành hàm tái sử dụng.",
      "Gom logic liên quan tránh trùng lặp (DRY)."
    ],
    "notes": [
      "Lưu ý: lambda dùng bản sao của x. Nếu đổi x sau khi định nghĩa lambda, nó không ảnh hưởng giá trị bên trong lambda.",
      "Lưu ý: bạn cũng có thể dùng [&] để capture theo tham chiếu.",
      "Lưu ý: phiên bản lambda rất tuyệt khi bạn không cần dùng lại hàm về sau. Nó nhanh và hợp trong các khối hoặc làm đối số cho hàm khác."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      },
      {
        "wrong": "Bắt giữ biến theo giá trị [=] rồi mong sửa được biến gốc.",
        "why": "Bản copy tách rời biến gốc ngoài lambda.",
        "correct": "Dùng [&] hoặc bắt giữ theo tham chiếu khi cần ghi."
      }
    ],
    "keyTakeaways": [
      "Hàm lambda là một hàm nhỏ, ẩn danh, bạn có thể viết trực tiếp trong code. Hữu ích khi cần một hàm nhanh mà không phải đặ t tên hay khai báo riêng.…",
      "Hãy coi nó như một \"hàm mini viết nhanh tại chỗ\".",
      "Đừng lo: ta sẽ giải thích [ capture ] nghĩa là gì sau. Hiện cứ dùng cặp ngoặc trống.",
      "Ở đây, message giữ một lambda in thông điệp ra màn hình:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_functions_lambda.asp"
  },
  {
    "id": "cpp-oop",
    "slug": "oop",
    "title": "Lập trình hướng đối tượng C++ (OOP Overview)",
    "titleEn": "C++ OOP (Object-Oriented Programming)",
    "num": 97,
    "chapter": "11 · OOP & Kế thừa",
    "topic": "OOP",
    "difficulty": "intermediate",
    "estimatedTime": 8,
    "prerequisites": [],
    "description": "OOP là viết tắt của Object-Oriented Programming.",
    "objectives": [
      "Nắm được: OOP (lập trình hướng đối tượng) trong C++ (C++ OOP (Object-Oriented Programming)).",
      "Trình bày được: C++ Oop là gì?; Ưu điểm của Oop; Lớp và đối tượng là gì?.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "OOP là viết tắt của Object-Oriented Programming. Lập trình hướng đối tượng là tạo các \"đối tượng\", chứa dữ liệu và hàm hoạt động trên dữ liệu đó. Mẹo: nguyên tắc DRY có nghĩa là bạn nên tránh viết cùng một mã nhiều lần. Hãy đưa mã lặp lại vào các hàm hoặc lớp và tái sử dụng nó. Lớp và đối tượng là hai khía cạnh chính của lập trình hướng đối tượng. Một lớp định nghĩa đối tượng trông như thế nào, và đối tượng được tạo từ lớp đó. Ví dụ: Khi tạo đối tượng từ lớp, nó kế thừa mọi biến và hàm định nghĩa trong lớp đó. Trong các chương tới, bạn sẽ học cách: Lập trình thủ tục là viết các hàm thao tác trên dữ liệu. Lập trình hướng đối tượng (OOP) là tạo các đối tượng chứa cả dữ liệu lẫn hàm. Trong lập trình thủ tục, mã được tổ chức quanh các hàm. Trong lập trình hướng đối tượng, mã được tổ chức quanh các đối tượng."
    },
    "sections": [
      "C++ Oop là gì?",
      "Ưu điểm của Oop",
      "Lớp và đối tượng là gì?",
      "Lập trình thủ tục so với lập trình hướng đối tượng"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Car {\n  public:\n    string brand = \"Ford\";\n    void honk() { cout << \"Tuut, tuut!\"; }\n};\n\nint main() {\n  Car myCar; myCar.honk(); cout << \" \" << myCar.brand;\n  return 0;\n}",
        "explanation": "Lớp và đối tượng tối thiểu để thử các khái niệm OOP của bài."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Car {\n  public:\n    string brand = \"Ford\";\n    void honk() { cout << \"Tuut, tuut!\"; }\n};\n\nint main() {\n  Car myCar; myCar.honk(); cout << \" \" << myCar.brand;\n  return 0;\n}",
        "output": "Tuut, tuut! Ford",
        "explanation": "Lớp và đối tượng tối thiểu để thử các khái niệm OOP của bài."
      }
    ],
    "tables": [
      {
        "title": "Lớp và đối tượng là gì?",
        "header": [
          "Class",
          "Đối tượng"
        ],
        "rows": [
          [
            "**TRÁI CÂY**",
            "Táo, Chuối, Xoài"
          ],
          [
            "Xe",
            "Volvo, Audi, Toyota"
          ]
        ]
      }
    ],
    "useCases": [
      "Mô hình thực thể: sinh viên, xe, nhân vật game.",
      "Mở rộng tính năng qua kế thừa, đa hình."
    ],
    "notes": [
      "Mẹo: nguyên tắc DRY có nghĩa là bạn nên tránh viết cùng một mã nhiều lần. Hãy đưa mã lặp lại vào các hàm hoặc lớp và tái sử dụng nó."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      },
      {
        "wrong": "Quên constructor khởi tạo các member quan trọng.",
        "why": "Đối tượng có thể ở trạng thái rác (giá trị chưa xác định).",
        "correct": "Luôn có constructor đặt giá trị khởi tạo an toàn."
      }
    ],
    "keyTakeaways": [
      "OOP là viết tắt của Object-Oriented Programming.",
      "Lập trình hướng đối tượng là tạo các \"đối tượng\", chứa dữ liệu và hàm hoạt động trên dữ liệu đó.",
      "Mẹo: nguyên tắc DRY có nghĩa là bạn nên tránh viết cùng một mã nhiều lần. Hãy đưa mã lặp lại vào các hàm hoặc lớp và tái  sử dụng nó.…",
      "Lớp và đối tượng là hai khía cạnh chính của lập trình hướng đối tượng."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_oop.asp"
  },
  {
    "id": "cpp-classes",
    "slug": "classes",
    "title": "Lớp và đối tượng (Classes and Objects)",
    "titleEn": "C++ Classes and Objects",
    "num": 98,
    "chapter": "11 · OOP & Kế thừa",
    "topic": "OOP",
    "difficulty": "intermediate",
    "estimatedTime": 17,
    "prerequisites": [
      "cpp-oop"
    ],
    "description": "C++ là ngôn ngữ lập trình hướng đối tượng.",
    "objectives": [
      "Nắm được: Lớp và đối tượng trong C++.",
      "Trình bày được: Lớp/Đối tượng C++; Để tạo một lớp:; Ví dụ.",
      "Chạy và sửa được 4 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "C++ là ngôn ngữ lập trình hướng đối tượng. Mọi thứ trong C++ đều gắn với các lớp và đối tượng, cùng với các thuộc tính và phương thức của chúng. Ví dụ: trong đời thực, một chiếc ô tô là một đối tượng. Thuộc tính và phương thức về cơ bản là biến và hàm thuộc về lớp. Chúng thường được gọi là \"thành viên lớp\". Một lớp là kiểu dữ liệu do người dùng định nghĩa mà ta có thể dùng trong chương trình, nó hoạt động như một constructor của đối tượng, hay một \"bản thiết kế\" để tạo đối tượng. Để tạo lớp, dùng từ khóa class: Tạo một lớp tên là \"MyClass\": Trong C++, đối tượng được tạo từ lớp. Ta đã tạo lớp MyClass, nên giờ có thể dùng nó để tạo đối tượng. Để tạo đối tượng của MyClass, viết tên lớp rồi tên đối tượng. Để truy cập thuộc tính lớp (myNum và myString), dùng cú pháp chấm ( . ) trên đối tượng: Tạo đối tượng \"myObj\" và truy cập các thuộc tính: Một lớp có thể tạo nhiều đối tượng: Tạo lớp Book với các thuộc tính sau: Rồi tạo hai đối tượng của lớp và in giá trị thuộc tính của chúng."
    },
    "sections": [
      "Lớp/Đối tượng C++",
      "Để tạo một lớp:",
      "Ví dụ",
      "Tạo một đối tượng",
      "Nhiều đối tượng",
      "Nhiệm vụ thử thách"
    ],
    "syntax": [
      {
        "code": "class MyClass {       // The class\n  public:             // Access specifier\n    int myNum;        // Attribute (int variable)\n    string myString;  // Attribute (string variable)\n};",
        "explanation": "Tạo một lớp tên là \"MyClass\":"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nclass MyClass {       // The class\n  public:             // Access specifier\n    int myNum;        // Attribute (int variable)\n    string myString;  // Attribute (string variable)\n};\n\nint main() {\n    cout << \"Xem vi du trong bai hoc\";\n  return 0;\n}\n",
        "output": "Xem vi du trong bai hoc",
        "explanation": "Tạo một lớp tên là \"MyClass\":"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <set>\nusing namespace std;\nclass MyClass {       // The class\n  public:             // Access specifier\n    int myNum;        // Attribute (int variable)\n    string myString;  // Attribute (string variable)\n};\n\nint main() {\n  MyClass myObj;  // Create an object of MyClass\n\n  // Access attributes and set values\n  myObj.myNum = 15;\n     myObj.myString = \"Some text\";\n\n  // Print attribute values\n  cout << myObj.myNum << \"\\n\";\n  cout << myObj.myString;\n  return 0;\n}",
        "output": "15\nSome text",
        "explanation": "Tạo đối tượng \"myObj\" và truy cập các thuộc tính:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\n// Create a Car class with some attributes\nclass Car {\n  public:\n    string brand;\n    string model;\n    int year;\n};\n\nint main() {\n  // Create an object of Car\n  Car carObj1;\n  carObj1.brand = \"BMW\";\n  carObj1.model = \"X5\";\n  carObj1.year = 1999;\n\n  // Create another object of Car\n  Car carObj2;\n  carObj2.brand = \"Ford\";\n  carObj2.model = \"Mustang\";\n  carObj2.year = 1969;\n\n  // Print attribute values\n  cout << carObj1.brand << \" \" << carObj1.model << \" \" << carObj1.year << \"\\n\";\n  cout << carObj2.brand << \" \" << carObj2.model << \" \" << carObj2.year << \"\\n\";\n  return 0;\n}",
        "output": "BMW X5 1999\nFord Mustang 1969",
        "explanation": "Một lớp có thể tạo nhiều đối tượng:"
      },
      {
        "title": "Nhiệm vụ thử thách",
        "code": "#include <iostream>\n #include <string>\n using namespace std;\n\n  class Book {\n   public:\n     string title;\n     string author;\n     int year;\n };\n\n  int main() {\n   Book book1;\n   book1.title = \"Matilda\";\n   book1.author = \"Roald Dahl\";\n   book1.year = 1988;\n\n    Book book2;\n   book2.title = \"The Giving Tree\";\n   book2.author = \"Shel Silverstein\";\n   book2.year = 1964;\n\n    cout << book1.title << \", \" << book1.author << \", \" << book1.year << \"\\n\";\n   cout << book2.title << \", \" << book2.author << \", \" << book2.year;\n   return 0;\n }",
        "output": "Matilda, Roald Dahl, 1988\nThe Giving Tree, Shel Silverstein, 1964",
        "explanation": "Chạy thử và tự sửa code để cảm nhận cách nó hoạt động."
      }
    ],
    "tables": [],
    "useCases": [
      "Mô hình thực thể: sinh viên, xe, nhân vật game.",
      "Mở rộng tính năng qua kế thừa, đa hình."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      },
      {
        "wrong": "Quên #include <string> khi dùng std::string.",
        "why": "string không phải kiểu dựng sẵn — thiếu header sẽ không biên dịch.",
        "correct": "#include <string> rồi mới dùng string."
      }
    ],
    "keyTakeaways": [
      "C++ là ngôn ngữ lập trình hướng đối tượng.",
      "Mọi thứ trong C++ đều gắn với các lớp và đối tượng, cùng với các thuộc tính và phương thức của chúng. Ví dụ: trong đời t hực, một chiếc ô tô là một đối tượng.…",
      "Thuộc tính và phương thức về cơ bản là biến và hàm thuộc về lớp. Chúng thường được gọi là \"thành viên lớp\".",
      "Một lớp là kiểu dữ liệu do người dùng định nghĩa mà ta có thể dùng trong chương trình, nó hoạt động như một constructor  của đối tượng, hay một \"bản thiết kế\" để tạo đối tượng.…"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_classes.asp"
  },
  {
    "id": "cpp-class-methods",
    "slug": "class-methods",
    "title": "Phương thức của lớp (Class Methods)",
    "titleEn": "C++ Class Methods",
    "num": 99,
    "chapter": "11 · OOP & Kế thừa",
    "topic": "OOP",
    "difficulty": "intermediate",
    "estimatedTime": 17,
    "prerequisites": [
      "cpp-classes"
    ],
    "description": "Phương thức là các hàm thuộc về lớp.",
    "objectives": [
      "Nắm được: Phương pháp lớp C++.",
      "Trình bày được: Phương pháp lớp; Định nghĩa phương thức bên trong lớp; Định nghĩa phương thức bên ngoài lớp.",
      "Chạy và sửa được 4 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Phương thức là các hàm thuộc về lớp. Có hai cách định nghĩa phương thức thuộc về lớp: Ví dụ sau định nghĩa hàm bên trong lớp và đặt tên \"myMethod\". Lưu ý: bạn truy cập phương thức giống như thuộc tính; tạo đối tượng của lớp và dùng cú pháp chấm (.): Đôi khi nên khai báo phương thức trong lớp và định nghĩa sau (đặc biệt trong chương trình lớn). Việc này làm bằng cách viết tên lớp, theo sau là toán tử :: rồi tên hàm: Bạn cũng có thể truyền giá trị vào phương thức như hàm thường: Tạo lớp Dog có phương thức bark() in ra \"Woof!\". Rồi gọi phương thức đó từ main() thông qua một đối tượng."
    },
    "sections": [
      "Phương pháp lớp",
      "Định nghĩa phương thức bên trong lớp",
      "Định nghĩa phương thức bên ngoài lớp",
      "Thông số",
      "Nhiệm vụ thử thách"
    ],
    "syntax": [
      {
        "code": "class MyClass {        // The class\n  public:              // Access specifier\n    void myMethod() {  // Method/function defined inside the class\n      cout << \"Hello World!\";\n    }\n};\n\nint main() {\n  MyClass myObj;     // Create an object of MyClass\n  myObj.myMethod();  // Call the method\n  return 0;\n}",
        "explanation": "Ví dụ sau định nghĩa hàm bên trong lớp và đặt tên \"myMethod\"."
      }
    ],
    "examples": [
      {
        "title": "Ví dụ bên trong",
        "code": "#include <iostream>\nusing namespace std;\nclass MyClass {        // The class\n  public:              // Access specifier\n    void myMethod() {  // Method/function defined inside the class\n      cout << \"Hello World!\";\n    }\n};\n\nint main() {\n  MyClass myObj;     // Create an object of MyClass\n  myObj.myMethod();  // Call the method\n  return 0;\n}",
        "output": "Hello World!",
        "explanation": "Ví dụ sau định nghĩa hàm bên trong lớp và đặt tên \"myMethod\"."
      },
      {
        "title": "Ví dụ bên ngoài",
        "code": "#include <iostream>\nusing namespace std;\nclass MyClass {        // The class\n  public:              // Access specifier\n    void myMethod();   // Method/function declaration\n};\n\n// Method/function definition outside the class\nvoid    MyClass::myMethod() {\n  cout << \"Hello World!\";\n}\n\nint main() {\n  MyClass myObj;     // Create an object of MyClass\n  myObj.myMethod();  // Call the method\n  return 0;\n}",
        "output": "Hello World!",
        "explanation": "Việc này làm bằng cách viết tên lớp, theo sau là toán tử :: rồi tên hàm:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\n\nclass Car {\n  public:\n    int speed(int maxSpeed);\n};\n\nint Car::speed(int maxSpeed) {\n  return maxSpeed;\n}\n\nint main() {\n  Car myObj; // Create an object of Car\n  cout << myObj.speed(200); // Call the method with an argument\n  return 0;\n}",
        "output": "200",
        "explanation": "Bạn cũng có thể truyền giá trị vào phương thức như hàm thường:"
      },
      {
        "title": "Nhiệm vụ thử thách",
        "code": "#include <iostream>\n using namespace std;\n\n  class Dog {\n   public:\n     void bark() {\n       cout << \"Woof!\";\n     }\n };\n\n  int main() {\n   Dog myDog;\n   myDog.bark();\n   return 0;\n }",
        "output": "Woof!",
        "explanation": "Rồi gọi phương thức đó từ main() thông qua một đối tượng."
      }
    ],
    "tables": [],
    "useCases": [
      "Mô hình thực thể: sinh viên, xe, nhân vật game.",
      "Mở rộng tính năng qua kế thừa, đa hình."
    ],
    "notes": [
      "Lưu ý: bạn truy cập phương thức giống như thuộc tính; tạo đối tượng của lớp và dùng cú pháp chấm (.):"
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      },
      {
        "wrong": "Nhầm = (gán) với == (so sánh) trong biểu thức.",
        "why": "Toán tử sai cho kết quả sai mà không báo lỗi.",
        "correct": "double-click kiểm tra: so sánh thì ==."
      }
    ],
    "keyTakeaways": [
      "Phương thức là các hàm thuộc về lớp.",
      "Có hai cách định nghĩa phương thức thuộc về lớp:",
      "Ví dụ sau định nghĩa hàm bên trong lớp và đặt tên \"myMethod\".",
      "Lưu ý: bạn truy cập phương thức giống như thuộc tính; tạo đối tượng của lớp và dùng cú pháp chấm (.):"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_class_methods.asp"
  },
  {
    "id": "cpp-constructors",
    "slug": "constructors",
    "title": "Hàm khởi tạo (Constructors)",
    "titleEn": "C++ Constructors",
    "num": 100,
    "chapter": "11 · OOP & Kế thừa",
    "topic": "OOP",
    "difficulty": "intermediate",
    "estimatedTime": 14,
    "prerequisites": [
      "cpp-class-methods"
    ],
    "description": "Constructor là phương thức đặc biệt tự động được gọi khi tạo đối tượng của lớp.",
    "objectives": [
      "Nắm được: Cấu trúc C++.",
      "Trình bày được: Các nhà xây dựng; Constructor có tham số; Constructor định nghĩa bên ngoài lớp.",
      "Chạy và sửa được 3 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Constructor là phương thức đặc biệt tự động được gọi khi tạo đối tượng của lớp. Để tạo constructor, dùng cùng tên lớp theo sau là cặp ngoặc (): Constructor cũng có thể nhận tham số (như hàm thường), hữu ích để đặt giá trị khởi tạo cho thuộc tính. Lớp sau có thuộc tính brand, model, year và constructor với các tham số khác nhau. Bên trong constructor, ta gán thuộc tính bằng tham số (brand=x, v.v). Khi gọi constructor (bằng cách tạo đối tượng của lớp), ta truyền tham số cho constructor, và nó gán giá trị tương ứng cho các thuộc tính: Bạn cũng có thể định nghĩa constructor ngoài lớp dùng toán tử ::. Constructor tự chạy khi bạn tạo đối tượng. Chúng thiết lập để mọi thứ sẵn sàng ngay. Hãy nghĩ thế này: Khi bạn đặt pizza (đối tượng), constructor là đầu bếp thêm sốt, phô mai và topping trước khi giao cho bạn - bạn khỏi phải làm!"
    },
    "sections": [
      "Các nhà xây dựng",
      "Constructor có tham số",
      "Constructor định nghĩa bên ngoài lớp",
      "Tại sao constructor hữu ích"
    ],
    "syntax": [
      {
        "code": "class MyClass {     // The class\n  public:           // Access specifier\n    MyClass() {     // Constructor\n      cout << \"Hello World!\";\n    }\n};\n\nint main() {\n  MyClass myObj;    // Create an object of MyClass (this will call the constructor)\n  return 0;\n}",
        "explanation": "Để tạo constructor, dùng cùng tên lớp theo sau là cặp ngoặc ():"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nclass MyClass {     // The class\n  public:           // Access specifier\n    MyClass() {     // Constructor\n      cout << \"Hello World!\";\n    }\n};\n\nint main() {\n  MyClass myObj;    // Create an object of MyClass (this will call the constructor)\n  return 0;\n}",
        "output": "Hello World!",
        "explanation": "Để tạo constructor, dùng cùng tên lớp theo sau là cặp ngoặc ():"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nclass Car {        // The class\n  public:          // Access specifier\n    string brand;  // Attribute\n    string model;  // Attribute\n    int year;      // Attribute\n    Car(string x, string y, int z) { // Constructor with parameters\n      brand = x;\n      model = y;\n      year = z;\n    }\n};\n\nint main() {\n  // Create Car objects and call the constructor with different values\n  Car carObj1(\"BMW\", \"X5\", 1999);\n  Car carObj2(\"Ford\", \"Mustang\", 1969);\n\n  // Print values\n  cout << carObj1.brand << \" \" << carObj1.model << \" \" << carObj1.year << \"\\n\";\n  cout << carObj2.brand << \" \" << carObj2.model << \" \" << carObj2.year << \"\\n\";\n  return 0;\n}",
        "output": "BMW X5 1999\nFord Mustang 1969",
        "explanation": "Khi gọi constructor (bằng cách tạo đối tượng của lớp), ta truyền tham số cho constructor, và nó gán giá trị tương ứng cho các thuộc tính:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nclass Car {        // The class\n  public:          // Access specifier\n    string brand;  // Attribute\n    string model;  // Attribute\n    int year;      // Attribute\n    Car(string x, string y, int z); // Constructor declaration\n};\n\n// Constructor definition outside the class\nCar::Car(string x, string y, int z) {\n  brand = x;\n  model = y;\n  year = z;\n}\n\nint main() {\n  // Create Car objects and call the constructor with different values\n  Car carObj1(\"BMW\", \"X5\", 1999);\n  Car carObj2(\"Ford\", \"Mustang\", 1969);\n\n  // Print values\n  cout << carObj1.brand << \" \" << carObj1.model << \" \" << carObj1.year << \"\\n\";\n  cout << carObj2.brand << \" \" << carObj2.model << \" \" << carObj2.year << \"\\n\";\n  return 0;\n}",
        "output": "BMW X5 1999\nFord Mustang 1969",
        "explanation": "Bạn cũng có thể định nghĩa constructor ngoài lớp dùng toán tử ::."
      }
    ],
    "tables": [],
    "useCases": [
      "Mô hình thực thể: sinh viên, xe, nhân vật game.",
      "Mở rộng tính năng qua kế thừa, đa hình."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      },
      {
        "wrong": "Quên constructor khởi tạo các member quan trọng.",
        "why": "Đối tượng có thể ở trạng thái rác (giá trị chưa xác định).",
        "correct": "Luôn có constructor đặt giá trị khởi tạo an toàn."
      }
    ],
    "keyTakeaways": [
      "Constructor là phương thức đặc biệt tự động được gọi khi tạo đối tượng của lớp.",
      "Để tạo constructor, dùng cùng tên lớp theo sau là cặp ngoặc ():",
      "Constructor cũng có thể nhận tham số (như hàm thường), hữu ích để đặt giá trị khởi tạo cho thuộc tính.",
      "Lớp sau có thuộc tính brand, model, year và constructor với các tham số khác nhau. Bên trong constructor, ta gán thuộc t ính bằng tham số (brand=x, v.v).…"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_constructors.asp"
  },
  {
    "id": "cpp-constructors-overloading",
    "slug": "constructors-overloading",
    "title": "Nạp chồng hàm khởi tạo (Constructor Overloading)",
    "titleEn": "C++ Constructor Overloading",
    "num": 101,
    "chapter": "11 · OOP & Kế thừa",
    "topic": "OOP",
    "difficulty": "intermediate",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-constructors"
    ],
    "description": "Trong C++, một lớp có thể có nhiều constructor. Đó gọi là quá tải constructor.",
    "objectives": [
      "Nắm được: Quá tải constructor trong C++.",
      "Trình bày được: Nạp chồng khối xây dựng; Ví dụ với hai constructor.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Trong C++, một lớp có thể có nhiều constructor. Đó gọi là quá tải constructor. Mỗi constructor phải có số lượng hoặc kiểu tham số khác nhau để trình biên dịch biết dùng cái nào khi tạo đối tượng. Lớp này có hai constructor: một không tham số và một có tham số: Quá tải constructor cho phép tạo đối tượng với giá trị tùy chỉnh."
    },
    "sections": [
      "Nạp chồng khối xây dựng",
      "Ví dụ với hai constructor"
    ],
    "syntax": [
      {
        "code": "class Car {\n  public:\n    string brand;\n    string model;\n\n    Car() {\n      brand = \"Unknown\";\n      model = \"Unknown\";\n    }\n\n    Car(string b, string m) {\n      brand = b;\n      model = m;\n    }\n};\n\nint main() {\n  Car car1;\n  Car car2(\"BMW\", \"X5\");\n  Car car3(\"Ford\", \"Mustang\");\n\n  cout << \"Car1: \" << car1.brand << \" \" << car1.model << \"\\n\";\n  cout << \"Car2: \" << car2.brand << \" \" << car2.model << \"\\n\";\n  cout << \"Car3: \" << car3.brand << \" \" << car3.model;\n  return 0;\n}",
        "explanation": "Lớp này có hai constructor: một không tham số và một có tham số:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ với hai constructor",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nclass Car {\n  public:\n    string brand;\n    string model;\n\n    Car() {\n      brand = \"Unknown\";\n      model = \"Unknown\";\n    }\n\n    Car(string b, string m) {\n      brand = b;\n      model = m;\n    }\n};\n\nint main() {\n  Car car1;\n  Car car2(\"BMW\", \"X5\");\n  Car car3(\"Ford\", \"Mustang\");\n\n  cout << \"Car1: \" << car1.brand << \" \" << car1.model << \"\\n\";\n  cout << \"Car2: \" << car2.brand << \" \" << car2.model << \"\\n\";\n  cout << \"Car3: \" << car3.brand << \" \" << car3.model;\n  return 0;\n}",
        "output": "Car1: Unknown Unknown\nCar2: BMW X5\nCar3: Ford Mustang",
        "explanation": "Lớp này có hai constructor: một không tham số và một có tham số:"
      }
    ],
    "tables": [],
    "useCases": [
      "Mô hình thực thể: sinh viên, xe, nhân vật game.",
      "Mở rộng tính năng qua kế thừa, đa hình."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Quên constructor khởi tạo các member quan trọng.",
        "why": "Đối tượng có thể ở trạng thái rác (giá trị chưa xác định).",
        "correct": "Luôn có constructor đặt giá trị khởi tạo an toàn."
      }
    ],
    "keyTakeaways": [
      "Trong C++, một lớp có thể có nhiều constructor. Đó gọi là quá tải constructor.",
      "Mỗi constructor phải có số lượng hoặc kiểu tham số khác nhau để trình biên dịch biết dùng cái nào khi tạo đối tượng.",
      "Lớp này có hai constructor: một không tham số và một có tham số:",
      "Quá tải constructor cho phép tạo đối tượng với giá trị tùy chỉnh."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_constructors_overloading.asp"
  },
  {
    "id": "cpp-access-specifiers",
    "slug": "access-specifiers",
    "title": "Phạm vi truy cập (Access Specifiers: public / private)",
    "titleEn": "C++ Access Specifiers",
    "num": 102,
    "chapter": "11 · OOP & Kế thừa",
    "topic": "OOP",
    "difficulty": "intermediate",
    "estimatedTime": 14,
    "prerequisites": [
      "cpp-constructors-overloading"
    ],
    "description": "Access specifier kiểm soát cách truy cập thành viên (thuộc tính, phương thức) của lớp.",
    "objectives": [
      "Nắm được: Phạm vi truy cập trong C++.",
      "Trình bày được: Bộ chỉ định truy cập; Sử dụng Bộ chỉ định Truy cập; Ví dụ.",
      "Chạy và sửa được 3 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Access specifier kiểm soát cách truy cập thành viên (thuộc tính, phương thức) của lớp. Chúng bảo vệ dữ liệu và tổ chức code để chỉ phần đúng mới được xem hoặc sửa. Từ khóa public là một access specifier. Ví dụ dưới đây, các thành viên là public - nghĩa là có thể truy cập và sửa từ bên ngoài lớp: Nhưng nếu ta muốn thành viên private và ẩn với thế giới bên ngoài? Trong C++, có ba access specifier: Thành viên private không thể truy cập từ bên ngoài lớp. Ví dụ sau minh họa khác biệt giữa thành viên public và private: Nếu thử truy cập thành viên private, sẽ phát sinh lỗi: Lưu ý: vẫn có thể truy cập thành viên private của lớp bằng một phương thức public bên trong cùng lớp. Xem chương tiếp theo (Encapsulation) để biết cách. Mẹo: nên khai báo thuộc tính lớp là private khi có thể. Việc này giảm khả năng bạn (hoặc người khác) làm hỏng code. Lưu ý: mặc định mọi thành viên của lớp là private nếu không chỉ định access specifier: Thành viên protected không truy cập được từ ngoài lớp, nhưng truy cập được trong lớp con. Bạn sẽ học thêm về kế thừa trong chương sau."
    },
    "sections": [
      "Bộ chỉ định truy cập",
      "Sử dụng Bộ chỉ định Truy cập",
      "Ví dụ",
      "Riêng tư",
      "Được bảo vệ"
    ],
    "syntax": [
      {
        "code": "class MyClass {  // The class\n  public:        // Access specifier\n    // class members goes here\n};",
        "explanation": "Ví dụ dưới đây, các thành viên là public - nghĩa là có thể truy cập và sửa từ bên ngoài lớp:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nclass MyClass {  // The class\n  public:        // Access specifier\n    // class members goes here\n};\n\nint main() {\n    cout << \"Xem vi du trong bai hoc\";\n  return 0;\n}\n",
        "output": "Xem vi du trong bai hoc",
        "explanation": "Ví dụ dưới đây, các thành viên là public - nghĩa là có thể truy cập và sửa từ bên ngoài lớp:"
      },
      {
        "title": "Ví dụ",
        "code": "class MyClass {\n  public:    // Public access specifier\n    int x;   // Public attribute\n  private:   // Private access specifier\n    int y;   // Private attribute\n};\n\nint main() {\n  MyClass myObj;\n  myObj.x = 25;  // Allowed (public)\n  myObj.y = 50;  // Not allowed (private)\n  return 0;\n}",
        "output": "",
        "explanation": "Ví dụ sau minh họa khác biệt giữa thành viên public và private:",
        "runnable": false
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nclass MyClass {\n  int x;   // Private attribute\n  int y;   // Private attribute\n};\n\nint main() {\n    cout << \"Xem vi du trong bai hoc\";\n  return 0;\n}\n",
        "output": "Xem vi du trong bai hoc",
        "explanation": "Nếu thử truy cập thành viên private, sẽ phát sinh lỗi:"
      }
    ],
    "tables": [],
    "useCases": [
      "Mô hình thực thể: sinh viên, xe, nhân vật game.",
      "Mở rộng tính năng qua kế thừa, đa hình."
    ],
    "notes": [
      "Lưu ý: vẫn có thể truy cập thành viên private của lớp bằng một phương thức public bên trong cùng lớp. Xem chương tiếp theo (Encapsulation) để biết cách.",
      "Mẹo: nên khai báo thuộc tính lớp là private khi có thể. Việc này giảm khả năng bạn (hoặc người khác) làm hỏng code.",
      "Lưu ý: mặc định mọi thành viên của lớp là private nếu không chỉ định access specifier:"
    ],
    "commonMistakes": [
      {
        "wrong": "Viết if (x = 5) thay vì if (x == 5).",
        "why": "Dấu = là gán, == mới là so sánh; gán trong if luôn cho kết quả true.",
        "correct": "if (x == 5) { ... }"
      },
      {
        "wrong": "Quên constructor khởi tạo các member quan trọng.",
        "why": "Đối tượng có thể ở trạng thái rác (giá trị chưa xác định).",
        "correct": "Luôn có constructor đặt giá trị khởi tạo an toàn."
      }
    ],
    "keyTakeaways": [
      "Access specifier kiểm soát cách truy cập thành viên (thuộc tính, phương thức) của lớp.",
      "Chúng bảo vệ dữ liệu và tổ chức code để chỉ phần đúng mới được xem hoặc sửa.",
      "Từ khóa public là một access specifier.",
      "Ví dụ dưới đây, các thành viên là public - nghĩa là có thể truy cập và sửa từ bên ngoài lớp:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_access_specifiers.asp"
  },
  {
    "id": "cpp-encapsulation",
    "slug": "encapsulation",
    "title": "Tính đóng gói (Encapsulation, Getters & Setters)",
    "titleEn": "C++ Encapsulation and Getters and Setters",
    "num": 103,
    "chapter": "11 · OOP & Kế thừa",
    "topic": "OOP",
    "difficulty": "intermediate",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-access-specifiers"
    ],
    "description": "Ý nghĩa của Encapsulation là bảo đảm dữ liệu \"nhạy cảm\" được ẩn khỏi người dùng. Muốn vậy, phải khai báo biến/thuộc tính của lớp là private (không truy cập được từ bên ngoài lớp).",
    "objectives": [
      "Nắm được: Đóng gói, Getter và Setter trong C++.",
      "Trình bày được: sự bao ngoài mặt; Truy cập thành viên cá nhân; Ví dụ.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Ý nghĩa của Encapsulation là bảo đảm dữ liệu \"nhạy cảm\" được ẩn khỏi người dùng. Muốn vậy, phải khai báo biến/thuộc tính của lớp là private (không truy cập được từ bên ngoài lớp). Encapsulation hoạt động giống như vậy. Dữ liệu được ẩn và chỉ phương thức đáng tin mới truy cập hoặc sửa được. Để truy cập thuộc tính private, dùng phương thức \"get\" và \"set\": Ta dùng myObj.setSalary(50000) để gán giá trị và myObj.getSalary() để in."
    },
    "sections": [
      "sự bao ngoài mặt",
      "Truy cập thành viên cá nhân",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nclass Employee {\n  private:\n    // Private attribute\n    int salary;\n\n  public:\n    // Setter\n    void setSalary(int s) {\n      salary = s;\n    }\n    // Getter\n    int getSalary() {\n      return salary;\n    }\n};\n\nint main() {\n  Employee myObj;\n  myObj.setSalary(50000);\n  cout << myObj.getSalary();\n  return 0;\n}",
        "explanation": "Để truy cập thuộc tính private, dùng phương thức \"get\" và \"set\":"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\n\nclass Employee {\n  private:\n    // Private attribute\n    int salary;\n\n  public:\n    // Setter\n    void setSalary(int s) {\n      salary = s;\n    }\n    // Getter\n    int getSalary() {\n      return salary;\n    }\n};\n\nint main() {\n  Employee myObj;\n  myObj.setSalary(50000);\n  cout << myObj.getSalary();\n  return 0;\n}",
        "output": "50000",
        "explanation": "Để truy cập thuộc tính private, dùng phương thức \"get\" và \"set\":"
      }
    ],
    "tables": [],
    "useCases": [
      "Mô hình thực thể: sinh viên, xe, nhân vật game.",
      "Mở rộng tính năng qua kế thừa, đa hình."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Quên constructor khởi tạo các member quan trọng.",
        "why": "Đối tượng có thể ở trạng thái rác (giá trị chưa xác định).",
        "correct": "Luôn có constructor đặt giá trị khởi tạo an toàn."
      },
      {
        "wrong": "Dùng phần tử front()/back()/top() khi container rỗng.",
        "why": "Hành vi không xác định khi container trống.",
        "correct": "Kiểm tra .empty() trước khi truy cập."
      }
    ],
    "keyTakeaways": [
      "Ý nghĩa của Encapsulation là bảo đảm dữ liệu \"nhạy cảm\" được ẩn khỏi người dùng. Muốn vậy, phải khai báo biến/thuộc tính  của lớp là private (không truy cập được từ bên ngoài lớp).…",
      "Encapsulation hoạt động giống như vậy. Dữ liệu được ẩn và chỉ phương thức đáng tin mới truy cập hoặc sửa được.",
      "Để truy cập thuộc tính private, dùng phương thức \"get\" và \"set\":",
      "Ta dùng myObj.setSalary(50000) để gán giá trị và myObj.getSalary() để in."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_encapsulation.asp"
  },
  {
    "id": "cpp-friend-function",
    "slug": "friend-function",
    "title": "Hàm bạn và lớp bạn (Friend Functions & Classes)",
    "titleEn": "C++ Friend Functions",
    "num": 104,
    "chapter": "11 · OOP & Kế thừa",
    "topic": "OOP",
    "difficulty": "intermediate",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-encapsulation"
    ],
    "description": "Thông thường, thành viên private chỉ truy cập được qua phương thức public như getter và setter. Nhưng một số trường hợp, có thể dùng một hàm đặc biệt gọi là friend function để truy cập trực tiếp.",
    "objectives": [
      "Nắm được: Hàm bạn (Friend Functions) trong C++.",
      "Trình bày được: Chức năng bạn bè C++; Ví dụ.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Thông thường, thành viên private chỉ truy cập được qua phương thức public như getter và setter. Nhưng một số trường hợp, có thể dùng một hàm đặc biệt gọi là friend function để truy cập trực tiếp. Hàm friend không phải thành viên của lớp nhưng được phép truy cập dữ liệu private của lớp: Tự trải nghiệm"
    },
    "sections": [
      "Chức năng bạn bè C++",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "class Employee {\n  private:\n    int salary;\n\n  public:\n    Employee(int s) {\n      salary = s;\n    }\n\n    // Declare friend function\n    friend void displaySalary(Employee emp);\n};\n\nvoid displaySalary(Employee emp) {\n  cout << \"Salary: \" << emp.salary;\n}\n\nint main() {\n  Employee myEmp(50000);\n  displaySalary(myEmp);\n  return 0;\n}",
        "explanation": "Hàm friend không phải thành viên của lớp nhưng được phép truy cập dữ liệu private của lớp:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nclass Employee {\n  private:\n    int salary;\n\n  public:\n    Employee(int s) {\n      salary = s;\n    }\n\n    // Declare friend function\n    friend void displaySalary(Employee emp);\n};\n\nvoid displaySalary(Employee emp) {\n  cout << \"Salary: \" << emp.salary;\n}\n\nint main() {\n  Employee myEmp(50000);\n  displaySalary(myEmp);\n  return 0;\n}",
        "output": "Salary: 50000",
        "explanation": "Hàm friend không phải thành viên của lớp nhưng được phép truy cập dữ liệu private của lớp:"
      }
    ],
    "tables": [],
    "useCases": [
      "Mô hình thực thể: sinh viên, xe, nhân vật game.",
      "Mở rộng tính năng qua kế thừa, đa hình."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      },
      {
        "wrong": "Dùng phần tử front()/back()/top() khi container rỗng.",
        "why": "Hành vi không xác định khi container trống.",
        "correct": "Kiểm tra .empty() trước khi truy cập."
      }
    ],
    "keyTakeaways": [
      "Thông thường, thành viên private chỉ truy cập được qua phương thức public như getter và setter. Nhưng một số trường hợp…",
      "Hàm friend không phải thành viên của lớp nhưng được phép truy cập dữ liệu private của lớp:",
      "Tự trải nghiệm"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_friend_function.asp"
  },
  {
    "id": "cpp-inheritance",
    "slug": "inheritance",
    "title": "Tính kế thừa (Inheritance)",
    "titleEn": "C++ Inheritance",
    "num": 105,
    "chapter": "11 · OOP & Kế thừa",
    "topic": "OOP",
    "difficulty": "intermediate",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-friend-function"
    ],
    "description": "Kế thừa cho phép một lớp tái sử dụng thuộc tính và phương thức từ lớp khác. Nó giúp viết code gọn và hiệu quả hơn bằng cách tránh trùng lặp.",
    "objectives": [
      "Nắm được: Thừa kế C++.",
      "Trình bày được: tài sản kế thừa; Ví dụ.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Kế thừa cho phép một lớp tái sử dụng thuộc tính và phương thức từ lớp khác. Nó giúp viết code gọn và hiệu quả hơn bằng cách tránh trùng lặp. Ta chia \"khái niệm kế thừa\" thành hai loại: Để kế thừa từ một lớp, dùng ký hiệu :. Ví dụ dưới đây, lớp Car (con) kế thừa thuộc tính và phương thức từ lớp Vehicle (cha): - Hữu ích cho việc tái sử dụng code: dùng lại thuộc tính và phương thức của lớp có sẵn khi tạo lớp mới."
    },
    "sections": [
      "tài sản kế thừa",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "// Base class\nclass Vehicle {\n  public:\n    string brand = \"Ford\";\n    void honk() {\n      cout << \"Tuut, tuut! \\n\" ;\n    }\n};\n\n// Derived class\nclass Car: public Vehicle {\n  public:\n    string model = \"Mustang\";\n};\n\nint main() {\n  Car myCar;\n  myCar.honk();\n  cout << myCar.brand + \" \" + myCar.model;\n  return 0;\n}",
        "explanation": "Ví dụ dưới đây, lớp Car (con) kế thừa thuộc tính và phương thức từ lớp Vehicle (cha):"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\n// Base class\nclass Vehicle {\n  public:\n    string brand = \"Ford\";\n    void honk() {\n      cout << \"Tuut, tuut! \\n\" ;\n    }\n};\n\n// Derived class\nclass Car: public Vehicle {\n  public:\n    string model = \"Mustang\";\n};\n\nint main() {\n  Car myCar;\n  myCar.honk();\n  cout << myCar.brand + \" \" + myCar.model;\n  return 0;\n}",
        "output": "Tuut, tuut! \nFord Mustang",
        "explanation": "Ví dụ dưới đây, lớp Car (con) kế thừa thuộc tính và phương thức từ lớp Vehicle (cha):"
      }
    ],
    "tables": [],
    "useCases": [
      "Mô hình thực thể: sinh viên, xe, nhân vật game.",
      "Mở rộng tính năng qua kế thừa, đa hình."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Quên constructor khởi tạo các member quan trọng.",
        "why": "Đối tượng có thể ở trạng thái rác (giá trị chưa xác định).",
        "correct": "Luôn có constructor đặt giá trị khởi tạo an toàn."
      }
    ],
    "keyTakeaways": [
      "Kế thừa cho phép một lớp tái sử dụng thuộc tính và phương thức từ lớp khác. Nó giúp viết code gọn và hiệu quả hơn bằng c ách tránh trùng lặp.…",
      "Ta chia \"khái niệm kế thừa\" thành hai loại:",
      "Để kế thừa từ một lớp, dùng ký hiệu :.",
      "Ví dụ dưới đây, lớp Car (con) kế thừa thuộc tính và phương thức từ lớp Vehicle (cha):"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_inheritance.asp"
  },
  {
    "id": "cpp-inheritance-multilevel",
    "slug": "inheritance-multilevel",
    "title": "Kế thừa nhiều cấp (Multilevel Inheritance)",
    "titleEn": "C++ Multilevel Inheritance",
    "num": 106,
    "chapter": "11 · OOP & Kế thừa",
    "topic": "OOP",
    "difficulty": "intermediate",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-inheritance"
    ],
    "description": "Một lớp cũng có thể kế thừa từ một lớp vốn đã kế thừa từ lớp khác.",
    "objectives": [
      "Nắm được: Kế thừa nhiều cấp trong C++.",
      "Trình bày được: Thừa kế đa cấp.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Một lớp cũng có thể kế thừa từ một lớp vốn đã kế thừa từ lớp khác. Ví dụ sau, MyGrandChild kế thừa từ lớp MyChild (mà MyChild lại kế thừa từ MyClass)."
    },
    "sections": [
      "Thừa kế đa cấp"
    ],
    "syntax": [
      {
        "code": "// Base class (parent)\nclass MyClass {\n  public:\n    void myFunction() {\n      cout << \"Some content in parent class.\" ;\n    }\n};\n\n// Derived class (child)\nclass MyChild: public MyClass {\n};\n\n// Derived class (grandchild)\nclass MyGrandChild: public MyChild {\n};\n\nint main() {\n  MyGrandChild myObj;\n  myObj.myFunction();\n  return 0;\n}",
        "explanation": "Ví dụ sau, MyGrandChild kế thừa từ lớp MyChild (mà MyChild lại kế thừa từ MyClass)."
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\n// Base class (parent)\nclass MyClass {\n  public:\n    void myFunction() {\n      cout << \"Some content in parent class.\" ;\n    }\n};\n\n// Derived class (child)\nclass MyChild: public MyClass {\n};\n\n// Derived class (grandchild)\nclass MyGrandChild: public MyChild {\n};\n\nint main() {\n  MyGrandChild myObj;\n  myObj.myFunction();\n  return 0;\n}",
        "output": "Some content in parent class.",
        "explanation": "Ví dụ sau, MyGrandChild kế thừa từ lớp MyChild (mà MyChild lại kế thừa từ MyClass)."
      }
    ],
    "tables": [],
    "useCases": [
      "Mô hình thực thể: sinh viên, xe, nhân vật game.",
      "Mở rộng tính năng qua kế thừa, đa hình."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Quên constructor khởi tạo các member quan trọng.",
        "why": "Đối tượng có thể ở trạng thái rác (giá trị chưa xác định).",
        "correct": "Luôn có constructor đặt giá trị khởi tạo an toàn."
      }
    ],
    "keyTakeaways": [
      "Một lớp cũng có thể kế thừa từ một lớp vốn đã kế thừa từ lớp khác.",
      "Ví dụ sau, MyGrandChild kế thừa từ lớp MyChild (mà MyChild lại kế thừa từ MyClass)."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_inheritance_multilevel.asp"
  },
  {
    "id": "cpp-inheritance-multiple",
    "slug": "inheritance-multiple",
    "title": "Đa kế thừa (Multiple Inheritance)",
    "titleEn": "C++ Multiple Inheritance",
    "num": 107,
    "chapter": "11 · OOP & Kế thừa",
    "topic": "OOP",
    "difficulty": "intermediate",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-inheritance-multilevel"
    ],
    "description": "Một lớp cũng có thể kế thừa từ nhiều lớp cơ sở, dùng danh sách phân tách dấu phẩy:",
    "objectives": [
      "Nắm được: Đa thừa kế trong C++.",
      "Trình bày được: Thừa kế nhiều lần.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Một lớp cũng có thể kế thừa từ nhiều lớp cơ sở, dùng danh sách phân tách dấu phẩy:"
    },
    "sections": [
      "Thừa kế nhiều lần"
    ],
    "syntax": [
      {
        "code": "// Base class\nclass MyClass {\n  public:\n    void myFunction() {\n      cout << \"Some content in parent class.\" ;\n    }\n};\n\n// Another base class\nclass MyOtherClass {\n  public:\n    void myOtherFunction() {\n      cout << \"Some content in another class.\" ;\n    }\n};\n\n// Derived class\nclass MyChildClass: public MyClass, public MyOtherClass {\n};\n\nint main() {\n  MyChildClass myObj;\n  myObj.myFunction();\n  myObj.myOtherFunction();\n  return 0;\n}",
        "explanation": "Một lớp cũng có thể kế thừa từ nhiều lớp cơ sở, dùng danh sách phân tách dấu phẩy:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\n// Base class\nclass MyClass {\n  public:\n    void myFunction() {\n      cout << \"Some content in parent class.\" ;\n    }\n};\n\n// Another base class\nclass MyOtherClass {\n  public:\n    void myOtherFunction() {\n      cout << \"Some content in another class.\" ;\n    }\n};\n\n// Derived class\nclass MyChildClass: public MyClass, public MyOtherClass {\n};\n\nint main() {\n  MyChildClass myObj;\n  myObj.myFunction();\n  myObj.myOtherFunction();\n  return 0;\n}",
        "output": "Some content in parent class.Some content in another class.",
        "explanation": "Một lớp cũng có thể kế thừa từ nhiều lớp cơ sở, dùng danh sách phân tách dấu phẩy:"
      }
    ],
    "tables": [],
    "useCases": [
      "Mô hình thực thể: sinh viên, xe, nhân vật game.",
      "Mở rộng tính năng qua kế thừa, đa hình."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Quên constructor khởi tạo các member quan trọng.",
        "why": "Đối tượng có thể ở trạng thái rác (giá trị chưa xác định).",
        "correct": "Luôn có constructor đặt giá trị khởi tạo an toàn."
      },
      {
        "wrong": "Dùng phần tử front()/back()/top() khi container rỗng.",
        "why": "Hành vi không xác định khi container trống.",
        "correct": "Kiểm tra .empty() trước khi truy cập."
      }
    ],
    "keyTakeaways": [
      "Một lớp cũng có thể kế thừa từ nhiều lớp cơ sở, dùng danh sách phân tách dấu phẩy:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_inheritance_multiple.asp"
  },
  {
    "id": "cpp-inheritance-access",
    "slug": "inheritance-access",
    "title": "Kế thừa và Access Specifiers",
    "titleEn": "C++ Inheritance and Access Specifiers",
    "num": 108,
    "chapter": "11 · OOP & Kế thừa",
    "topic": "OOP",
    "difficulty": "intermediate",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-inheritance-multiple"
    ],
    "description": "Bạn đã học ở chương Access Specifiers rằng C++ có ba specifier.",
    "objectives": [
      "Nắm được: Kế thừa và access specifier trong C++.",
      "Trình bày được: Bộ chỉ định truy cập.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Bạn đã học ở chương Access Specifiers rằng C++ có ba specifier. Cho đến nay ta mới chỉ dùng public (thành viên lớp truy cập được từ bên ngoài) và private (chỉ truy cập được bên trong lớp). Specifier thứ ba, protected, giống private nhưng cũng truy cập được trong lớp kế thừa:"
    },
    "sections": [
      "Bộ chỉ định truy cập"
    ],
    "syntax": [
      {
        "code": "// Base class\nclass Employee {\n  protected: // Protected access specifier\n    int salary;\n};\n\n// Derived class\nclass Programmer: public Employee {\n  public:\n    int bonus;\n    void setSalary(int s) {\n      salary = s;\n    }\n    int getSalary() {\n      return salary;\n    }\n};\n\nint main() {\n  Programmer myObj;\n  myObj.setSalary(50000);\n  myObj.bonus = 15000;\n  cout << \"Salary: \" << myObj.getSalary() << \"\\n\";\n  cout << \"Bonus: \" << myObj.bonus << \"\\n\";\n  return 0;\n}",
        "explanation": "Specifier thứ ba, protected, giống private nhưng cũng truy cập được trong lớp kế thừa:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\n// Base class\nclass Employee {\n  protected: // Protected access specifier\n    int salary;\n};\n\n// Derived class\nclass Programmer: public Employee {\n  public:\n    int bonus;\n    void setSalary(int s) {\n      salary = s;\n    }\n    int getSalary() {\n      return salary;\n    }\n};\n\nint main() {\n  Programmer myObj;\n  myObj.setSalary(50000);\n  myObj.bonus = 15000;\n  cout << \"Salary: \" << myObj.getSalary() << \"\\n\";\n  cout << \"Bonus: \" << myObj.bonus << \"\\n\";\n  return 0;\n}",
        "output": "Salary: 50000\nBonus: 15000",
        "explanation": "Specifier thứ ba, protected, giống private nhưng cũng truy cập được trong lớp kế thừa:"
      }
    ],
    "tables": [],
    "useCases": [
      "Mô hình thực thể: sinh viên, xe, nhân vật game.",
      "Mở rộng tính năng qua kế thừa, đa hình."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Viết if (x = 5) thay vì if (x == 5).",
        "why": "Dấu = là gán, == mới là so sánh; gán trong if luôn cho kết quả true.",
        "correct": "if (x == 5) { ... }"
      },
      {
        "wrong": "Quên constructor khởi tạo các member quan trọng.",
        "why": "Đối tượng có thể ở trạng thái rác (giá trị chưa xác định).",
        "correct": "Luôn có constructor đặt giá trị khởi tạo an toàn."
      }
    ],
    "keyTakeaways": [
      "Bạn đã học ở chương Access Specifiers rằng C++ có ba specifier.",
      "Cho đến nay ta mới chỉ dùng public (thành viên lớp truy cập được từ bên ngoài) và private (chỉ truy cập được bên trong l ớp).…",
      "Specifier thứ ba, protected, giống private nhưng cũng truy cập được trong lớp kế thừa:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_inheritance_access.asp"
  },
  {
    "id": "cpp-polymorphism",
    "slug": "polymorphism",
    "title": "Tính đa hình (Polymorphism)",
    "titleEn": "C++ Polymorphism",
    "num": 109,
    "chapter": "11 · OOP & Kế thừa",
    "topic": "OOP",
    "difficulty": "intermediate",
    "estimatedTime": 11,
    "prerequisites": [
      "cpp-inheritance-access"
    ],
    "description": "Đa hình (Polymorphism) nghĩa là \"nhiều hình thái\", xảy ra khi nhiều lớp liên quan với nhau qua kế thừa.",
    "objectives": [
      "Nắm được: Đa hình C++.",
      "Trình bày được: Sự đa hình; Ví dụ.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Đa hình (Polymorphism) nghĩa là \"nhiều hình thái\", xảy ra khi nhiều lớp liên quan với nhau qua kế thừa. Như đã nêu ở chương trước; kế thừa cho phép ta thừa hưởng thuộc tính và phương thức từ lớp khác. Đa hình dùng những phương thức đó để làm các việc khác nhau. Ví dụ, hãy tưởng tượng lớp cơ sở Animal có phương thức makeSound(). Các lớp dẫn xuất của Animal có thể là Pigs, Cats, Dogs, Birds, v.v. Đó là tính đa hình - cùng một hành động (kêu) nhưng mỗi con vật một kiểu: Nhớ từ chương Kế thừa rằng ta dùng ký hiệu : để kế thừa từ một lớp. Giờ ta tạo đối tượng Pig và Dog và ghi đè phương thức animalSound(): - Hữu ích cho việc tái sử dụng code: dùng lại thuộc tính và phương thức của lớp có sẵn khi tạo lớp mới."
    },
    "sections": [
      "Sự đa hình",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "// Base class\nclass Animal {\n  public:\n    void animalSound() {\n      cout << \"The animal makes a sound \\n\";\n    }\n};\n\n// Derived class\n class Pig : public Animal {\n  public:\n    void animalSound() {\n      cout << \"The pig says: wee wee \\n\";\n    }\n};\n\n// Derived class\nclass Dog : public Animal {\n  public:\n    void animalSound() {\n      cout << \"The dog says: bow wow \\n\";\n    }\n };",
        "explanation": "Đó là tính đa hình - cùng một hành động (kêu) nhưng mỗi con vật một kiểu:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nclass Animal {\n  public:\n    void animalSound() {\n      cout << \"The animal makes a sound \\n\";\n    }\n};\n class Pig : public Animal {\n  public:\n    void animalSound() {\n      cout << \"The pig says: wee wee \\n\";\n    }\n};\nclass Dog : public Animal {\n  public:\n    void animalSound() {\n      cout << \"The dog says: bow wow \\n\";\n    }\n };\n\nint main() {\n  // Base class\n\n  // Derived class\n\n  // Derived class\n  return 0;\n}\n",
        "output": "",
        "explanation": "Đó là tính đa hình - cùng một hành động (kêu) nhưng mỗi con vật một kiểu:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\n// Base class\nclass Animal {\n  public:\n    void animalSound() {\n      cout << \"The animal makes a sound \\n\";\n    }\n};\n\n// Derived class\n class Pig : public Animal {\n  public:\n    void animalSound() {\n      cout << \"The pig says: wee wee \\n\";\n    }\n};\n\n// Derived class\nclass Dog : public Animal {\n  public:\n    void animalSound() {\n      cout << \"The dog says: bow wow \\n\";\n    }\n };\n\nint main() {\n  Animal myAnimal;\n  Pig myPig;\n  Dog myDog;\n\n  myAnimal.animalSound();\n  myPig.animalSound();\n  myDog.animalSound();\n  return 0;\n}",
        "output": "The animal makes a sound \nThe pig says: wee wee \nThe dog says: bow wow ",
        "explanation": "Giờ ta tạo đối tượng Pig và Dog và ghi đè phương thức animalSound():"
      }
    ],
    "tables": [],
    "useCases": [
      "Mô hình thực thể: sinh viên, xe, nhân vật game.",
      "Mở rộng tính năng qua kế thừa, đa hình."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Quên constructor khởi tạo các member quan trọng.",
        "why": "Đối tượng có thể ở trạng thái rác (giá trị chưa xác định).",
        "correct": "Luôn có constructor đặt giá trị khởi tạo an toàn."
      }
    ],
    "keyTakeaways": [
      "Đa hình (Polymorphism) nghĩa là \"nhiều hình thái\", xảy ra khi nhiều lớp liên quan với nhau qua kế thừa.",
      "Như đã nêu ở chương trước; kế thừa cho phép ta thừa hưởng thuộc tính và phương thức từ lớp khác. Đa hình dùng những phươ ng thức đó để làm các việc khác nhau.…",
      "Ví dụ, hãy tưởng tượng lớp cơ sở Animal có phương thức makeSound(). Các lớp dẫn xuất của Animal có thể là Pigs, Cats, Do gs, Birds, v.v.…",
      "Đó là tính đa hình - cùng một hành động (kêu) nhưng mỗi con vật một kiểu:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_polymorphism.asp"
  },
  {
    "id": "cpp-virtual-functions",
    "slug": "virtual-functions",
    "title": "Hàm ảo và từ khóa override (Virtual Functions)",
    "titleEn": "C++ Virtual Functions",
    "num": 110,
    "chapter": "11 · OOP & Kế thừa",
    "topic": "OOP",
    "difficulty": "intermediate",
    "estimatedTime": 11,
    "prerequisites": [
      "cpp-polymorphism"
    ],
    "description": "Hàm ảo là phương thức của lớp cơ sở, có thể được ghi đè trong lớp dẫn xuất.",
    "objectives": [
      "Nắm được: Hàm ảo trong C++.",
      "Trình bày được: Chức năng ảo C++; Tại sao dùng hàm ảo?; Ví dụ (dùng từ khóa virtual).",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Hàm ảo là phương thức của lớp cơ sở, có thể được ghi đè trong lớp dẫn xuất. Hàm ảo là phần cốt lõi của tính đa hình trong C++. Chúng cho phép các đối tượng khác nhau phản hồi khác nhau trước cùng một lời gọi. Không có virtual, C++ quyết định hàm nào được gọi dựa trên kiểu con trỏ, không phải kiểu đối tượng thật. Với virtual, nó kiểm tra đối tượng thật mà con trỏ đang trỏ tới. Hoặc nói đơn giản hơn: Không có virtual thì hàm cơ sở chạy, dù đối tượng thuộc lớp con. Có virtual thì phiên bản của lớp con chạy, đúng như mong đợi. Bây giờ đã chạy đúng! Vì sound() là virtual, lời gọi dùng hàm của đối tượng thật chứ không chỉ theo kiểu con trỏ. Bạn có thể thắc mắc vì sao ta dùng -> trong các ví dụ trên. Toán tử -> dùng để truy cập thành viên (hàm, biến) thông qua con trỏ. Đó là cách viết tắt của (*con_trỏ).thành_viên: Mẹo: nếu dùng con trỏ tới đối tượng, hãy dùng -> để truy cập thành viên."
    },
    "sections": [
      "Chức năng ảo C++",
      "Tại sao dùng hàm ảo?",
      "Ví dụ (dùng từ khóa virtual)",
      "Toán tử -> trong C++"
    ],
    "syntax": [
      {
        "code": "class Animal {\n   public:\n     virtual void sound() {\n       cout << \"Animal sound\\n\";\n     }\n };\n\n  class Dog : public Animal {\n   public:\n     void sound() override {\n       cout << \"Dog barks\\n\";\n     }\n };\n\n  int main() {\n   Animal* a;\n   Dog d;\n   a = &d;\n   a->sound();  // Outputs: Dog barks\n   return 0;\n }",
        "explanation": "Hoặc nói đơn giản hơn: Không có virtual thì hàm cơ sở chạy, dù đối tượng thuộc lớp con. Có virtual thì phiên bản của lớp con chạy, đúng như mong đợi."
      }
    ],
    "examples": [
      {
        "title": "Ví dụ (dùng từ khóa virtual)",
        "code": "#include <iostream>\nusing namespace std;\nclass Animal {\n   public:\n     virtual void sound() {\n       cout << \"Animal sound\\n\";\n     }\n };\n\n  class Dog : public Animal {\n   public:\n     void sound() override {\n       cout << \"Dog barks\\n\";\n     }\n };\n\n  int main() {\n   Animal* a;\n   Dog d;\n   a = &d;\n   a->sound();  // Outputs: Dog barks\n   return 0;\n }",
        "output": "Dog barks",
        "explanation": "Hoặc nói đơn giản hơn: Không có virtual thì hàm cơ sở chạy, dù đối tượng thuộc lớp con. Có virtual thì phiên bản của lớp con chạy, đúng như mong đợi."
      },
      {
        "title": "Toán tử -> trong C++",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\nclass Animal {\n  public:\n    void sound() { cout << \"Animal sound\"; }\n};\n\nint main() {\n  Animal* a = new Animal();\n  a->sound();\n  delete a;\n  return 0;\n}\n",
        "output": "Animal sound",
        "explanation": "Đó là cách viết tắt của (*con_trỏ).thành_viên:",
        "input": ""
      }
    ],
    "tables": [],
    "useCases": [
      "Mô hình thực thể: sinh viên, xe, nhân vật game.",
      "Mở rộng tính năng qua kế thừa, đa hình."
    ],
    "notes": [
      "Mẹo: nếu dùng con trỏ tới đối tượng, hãy dùng -> để truy cập thành viên."
    ],
    "commonMistakes": [
      {
        "wrong": "Dùng con trỏ chưa khởi tạo hoặc đã delete.",
        "why": "Trỏ vào vùng nhớ rác gây crash hoặc dữ liệu sai khó tìm.",
        "correct": "Khởi tạo nullptr, kiểm tra trước khi dereference, set nullptr sau delete."
      },
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      }
    ],
    "keyTakeaways": [
      "Hàm ảo là phương thức của lớp cơ sở, có thể được ghi đè trong lớp dẫn xuất.",
      "Hàm ảo là phần cốt lõi của tính đa hình trong C++. Chúng cho phép các đối tượng khác nhau phản hồi khác nhau trước cùng  một lời gọi.…",
      "Không có virtual, C++ quyết định hàm nào được gọi dựa trên kiểu con trỏ, không phải kiểu đối tượng thật.",
      "Với virtual, nó kiểm tra đối tượng thật mà con trỏ đang trỏ tới."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_virtual_functions.asp"
  },
  {
    "id": "cpp-templates",
    "slug": "templates",
    "title": "Mẫu hàm và mẫu lớp (Templates)",
    "titleEn": "C++ Templates",
    "num": 111,
    "chapter": "12 · Templates, File & Xử lý lỗi",
    "topic": "STL & Files",
    "difficulty": "intermediate",
    "estimatedTime": 17,
    "prerequisites": [],
    "description": "Template cho phép viết hàm hoặc lớp dùng được với nhiều kiểu dữ liệu.",
    "objectives": [
      "Nắm được: Mẫu C++.",
      "Trình bày được: Mẫu C++; Mẫu hàm C++; Ví dụ.",
      "Chạy và sửa được 4 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Template cho phép viết hàm hoặc lớp dùng được với nhiều kiểu dữ liệu. Chúng giúp tránh lặp code và làm chương trình linh hoạt hơn. Bạn có thể tạo hàm template bằng từ khóa template: Ở ví dụ trên, add<int>(5, 3) báo trình biên dịch dùng int cho T, còn add<double>(2.5, 1.5) báo dùng double. Bạn cũng có thể dùng template để tạo lớp dùng với mọi kiểu dữ liệu: Ví dụ dưới đây định nghĩa lớp template Box có thể lưu và hiển thị giá trị mọi kiểu dữ liệu, rồi tạo một hộp cho int và một hộp cho string: Ví dụ này định nghĩa lớp template Pair lưu hai giá trị khác kiểu và hiển thị chúng, rồi tạo một cặp cho tên và tuổi, một cặp cho ID và điểm: Mẫu cho phép bạn: Lưu ý: template phải được định nghĩa trong cùng tệp sử dụng (thường là tệp .h)."
    },
    "sections": [
      "Mẫu C++",
      "Mẫu hàm C++",
      "Ví dụ",
      "Mẫu lớp C++",
      "Cú pháp",
      "Tại sao nên sử dụng mẫu?"
    ],
    "syntax": [
      {
        "code": "template <typename T>\n T add(T a, T b) {\n   return a + b;\n }\n\n int main() {\n   cout << add<int>(5, 3) << \"\\n\";\n   cout << add<double>(2.5, 1.5) << \"\\n\";\n   return 0;\n }",
        "explanation": "Chạy thử và tự sửa code để cảm nhận cách nó hoạt động."
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\ntemplate <typename T>\n T add(T a, T b) {\n   return a + b;\n }\n\n int main() {\n   cout << add<int>(5, 3) << \"\\n\";\n   cout << add<double>(2.5, 1.5) << \"\\n\";\n   return 0;\n }",
        "output": "8\n4",
        "explanation": "Chạy thử và tự sửa code để cảm nhận cách nó hoạt động."
      },
      {
        "title": "Cú pháp",
        "code": "#include <iostream>\nusing namespace std;\ntemplate <typename T>\nclass ClassName {\n  // members and methods using T\n};\n\nint main() {\n    cout << \"Xem vi du trong bai hoc\";\n  return 0;\n}\n",
        "output": "Xem vi du trong bai hoc",
        "explanation": "Bạn cũng có thể dùng template để tạo lớp dùng với mọi kiểu dữ liệu:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\ntemplate <typename T>\n class Box {\n   public:\n     T value;\n     Box(T v) {\n       value = v;\n     }\n     void show() {\n       cout << \"Value: \" << value << \"\\n\";\n     }\n };\n\n int main() {\n   Box<int> intBox(50);\n   Box<string> strBox(\"Hello\");\n\n   intBox.show();\n   strBox.show();\n   return 0;\n }",
        "output": "Value: 50\nValue: Hello",
        "explanation": "Ví dụ dưới đây định nghĩa lớp template Box có thể lưu và hiển thị giá trị mọi kiểu dữ liệu, rồi tạo một hộp cho int và một hộp cho string:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\ntemplate <typename T1, typename T2>\nclass Pair {\n  public:\n    T1 first;\n    T2 second;\n\n    Pair(T1 a, T2 b) {\n      first = a;\n      second = b;\n    }\n\n    void display() {\n      cout << \"First: \" << first << \", Second: \" << second << \"\\n\";\n    }\n};\n\nint main() {\n  Pair<string, int> person(\"John\", 30);\n  Pair<int, double> score(51, 9.5);\n\n  person.display();\n  score.display();\n\n  return 0;\n}",
        "output": "First: John, Second: 30\nFirst: 51, Second: 9.5",
        "explanation": "Ví dụ này định nghĩa lớp template Pair lưu hai giá trị khác kiểu và hiển thị chúng, rồi tạo một cặp cho tên và tuổi, một cặp cho ID và điểm:"
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ dữ liệu hiệu quả bằng vector/map/set.",
      "Đọc ghi cấu hình, log, file dữ liệu."
    ],
    "notes": [
      "Lưu ý: template phải được định nghĩa trong cùng tệp sử dụng (thường là tệp .h)."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      },
      {
        "wrong": "Quên #include <string> khi dùng std::string.",
        "why": "string không phải kiểu dựng sẵn — thiếu header sẽ không biên dịch.",
        "correct": "#include <string> rồi mới dùng string."
      }
    ],
    "keyTakeaways": [
      "Template cho phép viết hàm hoặc lớp dùng được với nhiều kiểu dữ liệu.",
      "Chúng giúp tránh lặp code và làm chương trình linh hoạt hơn.",
      "Bạn có thể tạo hàm template bằng từ khóa template:",
      "Ở ví dụ trên, add<int>(5, 3) báo trình biên dịch dùng int cho T, còn add<double>(2.5, 1.5) báo dùng double."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_templates.asp"
  },
  {
    "id": "cpp-files",
    "slug": "files",
    "title": "Làm việc với File trong C++ (File I/O)",
    "titleEn": "C++ Files",
    "num": 112,
    "chapter": "12 · Templates, File & Xử lý lỗi",
    "topic": "STL & Files",
    "difficulty": "intermediate",
    "estimatedTime": 14,
    "prerequisites": [
      "cpp-templates"
    ],
    "description": "Thư viện fstream cho phép chúng ta làm việc với tệp.",
    "objectives": [
      "Nắm được: Tệp C++.",
      "Trình bày được: Tệp C++; Ví dụ; Tạo và ghi vào tệp.",
      "Chạy và sửa được 3 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Thư viện fstream cho phép chúng ta làm việc với tệp. Để dùng thư viện fstream, include cả <iostream> VÀ <fstream>: Thư viện fstream gồm ba lớp dùng để tạo, ghi hoặc đọc tệp: Để tạo tệp, dùng lớp ofstream hoặc fstream và chỉ định tên tệp. Để ghi vào tệp, dùng toán tử chèn ( << ). Đó là thực hành tốt và có thể dọn vùng nhớ không cần thiết. Để đọc từ tệp, dùng lớp ifstream hoặc fstream cùng tên tệp. Lưu ý rằng ta cũng dùng vòng lặp while cùng hàm getline() (thuộc lớp ifstream) để đọc tệp từng dòng và in nội dung tệp: Tham chiếu đầy đủ các lớp và hàm <fstream>: xem C++ fstream Reference."
    },
    "sections": [
      "Tệp C++",
      "Ví dụ",
      "Tạo và ghi vào tệp",
      "Đọc tệp",
      "Tham chiếu <fstream> đầy đủ"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\n#include <fstream>",
        "explanation": "Để dùng thư viện fstream, include cả <iostream> VÀ <fstream>:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    cout << \"Xem vi du trong bai hoc\";\n  return 0;\n}\n",
        "output": "Xem vi du trong bai hoc",
        "explanation": "Để dùng thư viện fstream, include cả <iostream> VÀ <fstream>:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <fstream>\nusing namespace std;\n\n int main() {\n  // Create and open a text file\n  ofstream MyFile(\"filename.txt\");\n\n  // Write to the file\n  MyFile << \"Files can be tricky, but it is fun enough!\";\n\n  // Close the file\n  MyFile.close();\n}",
        "output": "",
        "explanation": "Để ghi vào tệp, dùng toán tử chèn ( << )."
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <fstream>\nusing namespace std;\nint main() {\n  // Create a text string, which is used to output the text file\n  string myText;\n\n  // Read from the text file\n  ifstream MyReadFile(\"filename.txt\");\n\n  // Use a while loop together with the getline() function to read the file line by line\n  while (getline (MyReadFile, myText)) {\n    // Output the text from the file\n    cout << myText;\n   }\n\n  // Close the file\n  MyReadFile.close();\n  return 0;\n}\n",
        "output": "Files can be tricky, but it is fun enough!",
        "explanation": "Lưu ý rằng ta cũng dùng vòng lặp while cùng hàm getline() (thuộc lớp ifstream) để đọc tệp từng dòng và in nội dung tệp:"
      }
    ],
    "tables": [
      {
        "title": "Ví dụ",
        "header": [
          "Class",
          "Mô tả"
        ],
        "rows": [
          [
            "ofstream",
            "Tạo và ghi vào tệp"
          ],
          [
            "ifstream",
            "Đọc từ các tệp"
          ],
          [
            "fstream",
            "Kết hợp ofstream và ifstream: tạo, đọc và ghi tệp"
          ]
        ]
      }
    ],
    "useCases": [
      "Lưu trữ dữ liệu hiệu quả bằng vector/map/set.",
      "Đọc ghi cấu hình, log, file dữ liệu."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Viết if (x = 5) thay vì if (x == 5).",
        "why": "Dấu = là gán, == mới là so sánh; gán trong if luôn cho kết quả true.",
        "correct": "if (x == 5) { ... }"
      },
      {
        "wrong": "Vòng lặp while không có câu lệnh làm thay đổi điều kiện.",
        "why": "Điều kiện không bao giờ sai → lặp vô hạn.",
        "correct": "Đảm bảo biến đếm/điều kiện thay đổi trong thân vòng lặp."
      }
    ],
    "keyTakeaways": [
      "Thư viện fstream cho phép chúng ta làm việc với tệp.",
      "Để dùng thư viện fstream, include cả <iostream> VÀ <fstream>:",
      "Thư viện fstream gồm ba lớp dùng để tạo, ghi hoặc đọc tệp:",
      "Để tạo tệp, dùng lớp ofstream hoặc fstream và chỉ định tên tệp."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_files.asp"
  },
  {
    "id": "cpp-date",
    "slug": "date",
    "title": "Xử lý Ngày và Giờ (Date and Time)",
    "titleEn": "C++ Date and Time",
    "num": 113,
    "chapter": "12 · Templates, File & Xử lý lỗi",
    "topic": "STL & Files",
    "difficulty": "intermediate",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-files"
    ],
    "description": "Thư viện <ctime> cho phép chúng ta làm việc với ngày giờ.",
    "objectives": [
      "Nắm được: Ngày và giờ C++.",
      "Trình bày được: Ngày và giờ; Hiển thị ngày và giờ hiện tại; Ví dụ.",
      "Chạy và sửa được 6 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Thư viện <ctime> cho phép chúng ta làm việc với ngày giờ. Để dùng nó, bạn phải import tệp header <ctime>: Thư viện <ctime> có nhiều hàm để đo ngày và giờ. Hàm time() cho ta timestamp biểu diễn ngày giờ hiện tại. Có thể dùng ctime() để hiển thị ngày giờ mà timestamp biểu diễn: Hiển thị ngày hiện tại: Hàm time() ghi timestamp vào vị trí bộ nhớ do tham số chỉ định, đồng thời cũng trả về giá trị timestamp. Cách thay thế để dùng time() là truyền con trỏ NULL và dùng giá trị trả về. Có hai kiểu dữ liệu lưu ngày giờ: time_t cho timestamp và struct tm cho cấu trúc datetime. Timestamp biểu diễn một thời điểm dưới dạng một số duy nhất, giúp máy tính dễ tính toán hơn. Cấu trúc datetime là cấu trúc biểu diễn các thành phần ngày giờ khác nhau dưới dạng thành viên. Điều này giúp việc chỉ định ngày dễ dàng hơn. Luôn nhớ cách các thành phần ngày giờ được biểu diễn: Hàm time() chỉ có thể tạo timestamp cho ngày hiện tại, nhưng chúng ta có thể tạo timestamp cho bất kỳ ngày nào bằng hàm mktime(). Hàm mktime() chuyển cấu trúc datetime thành timestamp. Tạo timestamp bằng hàm mktime(): Lưu ý: mktime() cần các thành viên sau có giá trị: tm_year, tm_mon, tm_mday, tm_hour, tm_min, tm_sec và tm_isdst. Hàm mktime() cũng điền các thành viên tm_wday và tm_yday của cấu trúc datetime với giá trị đúng, hoàn thiện cấu trúc và cho datetime hợp lệ. Ví dụ dùng để tìm thứ trong tuần của một ngày cho trước: Tìm thứ trong tuần của một ngày cho trước: Hàm localtime() và gmtime() chuyển timestamp thành cấu trúc datetime. Hàm localtime() trả về con trỏ tới cấu trúc biểu diễn thời gian theo múi giờ của máy tính. Hàm gmtime() trả về con trỏ tới cấu trúc biểu diễn thời gian theo múi GMT. Các hàm này trả về con trỏ tới cấu trúc datetime. Để chắc giá trị không đổi bất ngờ, hãy sao chép nó bằng cách giải tham con trỏ. Lấy cấu trúc datetime và xuất giờ hiện tại: Cho đến nay ta dùng ctime() để hiển thị ngày chứa trong timestamp. Để hiển thị ngày từ cấu trúc datetime, dùng hàm asctime(). Hiển thị ngày từ cấu trúc datetime: Lưu ý: asctime() không sửa ngày sai. Ví dụ đặt ngày trong tháng là 32 thì nó vẫn hiển thị 32. Hiệu chỉnh ngày trước khi hiển thị: Hàm ctime() và asctime() cho phép hiển thị ngày nhưng không chọn được cách hiển thị. Để chọn cách hiển thị ngày, dùng hàm strftime(). Biểu diễn ngày hiện tại theo nhiều cách: Hàm strftime() định dạng ngày và ghi dưới dạng chuỗi kiểu C vào mảng char. Hàm có bốn tham số: Bảng sau liệt kê một số định dạng hữu ích. Xem danh sách đầy đủ hơn ở trang tham chiếu strftime(). Có hai hàm khác nhau dùng để đo chênh lệch thời gian. Hàm difftime() đo số giây trôi qua giữa hai timestamp khác nhau. Hữu ích khi đo chênh lệch thời gian giữa các ngày. Đo khoảng thời gian giữa hai timestamp Hàm clock() hữu ích để đo các khoảng thời gian ngắn trong khi chương trình chạy. Nó chính xác hơn hàm difftime(). Mỗi lần gọi hàm clock trả về một loại timestamp đặc biệt đo bằng tick (đơn vị thời gian phụ thuộc cách thư viện được cài đặt) với kiểu dữ liệu clock_t. Để đo chênh lệch thời gian, lưu timestamp tại hai thời điểm khác nhau rồi trừ chúng. Đo thời gian chạy của chương trình: Lưu ý: hãy ép kiểu giá trị sang float hoặc double trước khi chia, nếu không sẽ là phép chia số nguyên và phần thập phân bị cắt mất. Tham chiếu đầy đủ các hàm <ctime>: xem C++ ctime Reference."
    },
    "sections": [
      "Ngày và giờ",
      "Hiển thị ngày và giờ hiện tại",
      "Ví dụ",
      "Hai cách dùng hàm time()",
      "Kiểu Dữ Liệu",
      "Tạo dấu thời gian",
      "Tạo cấu trúc ngày giờ",
      "Ngày hiển thị",
      "Thời gian đo",
      "Tham chiếu <ctime> đầy đủ"
    ],
    "syntax": [
      {
        "code": "#include <ctime> // Import the ctime library",
        "explanation": "Để dùng nó, bạn phải import tệp header <ctime>:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <ctime> // Import the ctime library\n#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Xem vi du trong bai hoc\";\n  return 0;\n}\n",
        "output": "Xem vi du trong bai hoc",
        "explanation": "Để dùng nó, bạn phải import tệp header <ctime>:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <ctime>\nusing namespace std;\nint main() {\n  // Get the timestamp for the current date and time\n  time_t timestamp;\n  time(&timestamp);\n\n  // Display the date and time represented by the timestamp\n  cout << ctime(&timestamp);\n  return 0;\n}\n",
        "output": "Sun Sep 20 16:19:03 2026",
        "explanation": "Hiển thị ngày hiện tại:"
      },
      {
        "title": "Hai cách dùng hàm time()",
        "code": "#include <ctime>\nusing namespace std;\nint main() {\n  time_t timestamp = time(NULL);\n  return 0;\n}\n",
        "output": "",
        "explanation": "Cách thay thế để dùng time() là truyền con trỏ NULL và dùng giá trị trả về."
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <ctime>\nusing namespace std;\nstruct tm datetime;\n\nint main() {\n  time_t timestamp;\n\n  datetime.tm_year = 2023 - 1900; // Number of years since 1900\n  datetime.tm_mon = 12 - 1; // Number of months since January\n  datetime.tm_mday = 17;\n  datetime.tm_hour = 12;\n  datetime.tm_min = 30;\n  datetime.tm_sec = 1;\n  // Daylight Savings must be specified\n  // -1 uses the computer's timezone setting\n  datetime.tm_isdst = -1;\n\n  timestamp = mktime(&datetime);\n\n  cout << ctime(&timestamp);\n  return 0;\n}\n",
        "output": "Sun Dec 17 12:30:01 2023",
        "explanation": "Tạo timestamp bằng hàm mktime():"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <ctime>\nusing namespace std;\nstruct tm datetime;\n\nint main() {\n  // Create the datetime structure and use mktime to fill in the missing members\n  datetime.tm_year = 2023 - 1900; // Number of years since 1900\n  datetime.tm_mon = 12 - 1; // Number of months since January\n  datetime.tm_mday = 17;\n  datetime.tm_hour = 0; datetime.tm_min = 0; datetime.tm_sec = 0;\n  datetime.tm_isdst = -1;\n  mktime(&datetime);\n\n  string weekdays[] = {\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"};\n\n  cout << \"The date is on a \" << weekdays[datetime.tm_wday];\n  return 0;\n}\n",
        "output": "The date is on a Sunday",
        "explanation": "Tìm thứ trong tuần của một ngày cho trước:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <ctime>\n\nusing namespace std;\n\nint main() {\n  time_t timestamp = time(nullptr);\n  struct tm datetime = *localtime(&timestamp);\n  cout << datetime.tm_year + 1900;\n  return 0;\n}\n",
        "output": "2026",
        "explanation": "Lấy cấu trúc datetime và xuất giờ hiện tại:",
        "input": ""
      }
    ],
    "tables": [
      {
        "title": "Ví dụ",
        "header": [
          "Định dạng Bộ chỉ định",
          "Mô tả",
          "Ví dụ"
        ],
        "rows": [
          [
            "%a",
            "Dạng viết tắt của thứ trong tuần",
            "T6"
          ],
          [
            "%b",
            "Dạng viết tắt của tên tháng",
            "Tháng 12"
          ],
          [
            "%B",
            "Tên tháng đầy đủ",
            "Tháng 12"
          ],
          [
            "%d",
            "Ngày trong tháng có số 0 đứng trước",
            "09"
          ],
          [
            "%e",
            "Ngày trong tháng có khoảng trắng đệm",
            "9"
          ],
          [
            "%H",
            "Định dạng 24 giờ của giờ",
            "14"
          ],
          [
            "%I",
            "Định dạng 12 giờ của giờ",
            "02"
          ],
          [
            "%M",
            "Phút trong vòng một giờ",
            "30"
          ],
          [
            "%p",
            "AM or PM",
            "PM"
          ],
          [
            "%S",
            "Giây trong vòng một phút",
            "01"
          ],
          [
            "%y",
            "Biểu diễn năm 2 chữ số",
            "23"
          ],
          [
            "%Y",
            "Biểu diễn năm 4 chữ số",
            "2023"
          ]
        ]
      }
    ],
    "useCases": [
      "Lưu trữ dữ liệu hiệu quả bằng vector/map/set.",
      "Đọc ghi cấu hình, log, file dữ liệu."
    ],
    "notes": [
      "Lưu ý: mktime() cần các thành viên sau có giá trị: tm_year, tm_mon, tm_mday, tm_hour, tm_min, tm_sec và tm_isdst.",
      "Lưu ý: asctime() không sửa ngày sai. Ví dụ đặt ngày trong tháng là 32 thì nó vẫn hiển thị 32.",
      "Lưu ý: hãy ép kiểu giá trị sang float hoặc double trước khi chia, nếu không sẽ là phép chia số nguyên và phần thập phân bị cắt mất."
    ],
    "commonMistakes": [
      {
        "wrong": "Viết if (x = 5) thay vì if (x == 5).",
        "why": "Dấu = là gán, == mới là so sánh; gán trong if luôn cho kết quả true.",
        "correct": "if (x == 5) { ... }"
      },
      {
        "wrong": "Truy cập phần tử ngoài chỉ mục hợp lệ (ví dụ arr[5] cho mảng 5 phần tử).",
        "why": "Chỉ mục hợp lệ là 0..n-1; vượt biên là undefined behavior.",
        "correct": "Duyệt i từ 0 đến n-1."
      }
    ],
    "keyTakeaways": [
      "Thư viện <ctime> cho phép chúng ta làm việc với ngày giờ.",
      "Để dùng nó, bạn phải import tệp header <ctime>:",
      "Thư viện <ctime> có nhiều hàm để đo ngày và giờ.",
      "Hàm time() cho ta timestamp biểu diễn ngày giờ hiện tại. Có thể dùng ctime() để hiển thị ngày giờ mà timestamp biểu diễn…"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_date.asp"
  },
  {
    "id": "cpp-errors",
    "slug": "errors",
    "title": "Các loại lỗi thường gặp (C++ Errors)",
    "titleEn": "C++ Errors",
    "num": 114,
    "chapter": "12 · Templates, File & Xử lý lỗi",
    "topic": "STL & Files",
    "difficulty": "intermediate",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-date"
    ],
    "description": "Kể cả lập trình viên C++ giàu kinh nghiệm vẫn mắc lỗi. Quan trọng là biết phát hiện và sửa!",
    "objectives": [
      "Nắm được: Lỗi C++.",
      "Trình bày được: Lỗi; Các lỗi biên dịch thường gặp; Lỗi thời gian chạy phổ biến.",
      "Chạy và sửa được 5 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Kể cả lập trình viên C++ giàu kinh nghiệm vẫn mắc lỗi. Quan trọng là biết phát hiện và sửa! Các trang này bao phủ các lỗi phổ biến và mẹo gỡ lỗi hữu ích, giúp bạn hiểu sai ở đâu và sửa thế nào. Lỗi biên dịch là lỗi khiến chương trình không biên dịch được. 1) Thiếu dấu chấm phẩy: 2) Dùng biến chưa khai báo: 3) Sai kiểu (ví dụ gán chuỗi cho int): Lỗi runtime xảy ra khi chương trình biên dịch được nhưng chạy lỗi hoặc ra kết quả bất thường. 1) Chia cho 0: 2) Truy cập phần tử ngoài phạm vi mảng: 3) Dùng vùng nhớ đã giải phóng (con trỏ treo): Chương tiếp theo bạn sẽ học cách gỡ lỗi code - tìm và sửa bug/lỗi trong chương trình."
    },
    "sections": [
      "Lỗi",
      "Các lỗi biên dịch thường gặp",
      "Lỗi thời gian chạy phổ biến",
      "Thói quen tốt để tránh lỗi"
    ],
    "syntax": [
      {
        "code": "cout << myVar;",
        "explanation": "2) Dùng biến chưa khai báo:"
      }
    ],
    "examples": [
      {
        "title": "Các lỗi biên dịch thường gặp",
        "code": "cout << myVar;",
        "output": "",
        "explanation": "2) Dùng biến chưa khai báo:",
        "runnable": false
      },
      {
        "title": "Các lỗi biên dịch thường gặp",
        "code": "int x = \"Hello\";",
        "output": "",
        "explanation": "3) Sai kiểu (ví dụ gán chuỗi cho int):",
        "runnable": false
      },
      {
        "title": "Lỗi thời gian chạy phổ biến",
        "code": "int a = 10;\n   int b = 0;\n   int result = a / b;  // not possible\n   cout << result;",
        "output": "",
        "explanation": "1) Chia cho 0:",
        "runnable": false
      },
      {
        "title": "Lỗi thời gian chạy phổ biến",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int numbers[3] = {1, 2, 3};\n     cout << numbers[8];  // element does not exist\n  return 0;\n}\n",
        "output": "32758",
        "explanation": "2) Truy cập phần tử ngoài phạm vi mảng:"
      },
      {
        "title": "Lỗi thời gian chạy phổ biến",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int* ptr = new int(10);\n     delete ptr;\n     cout << *ptr;  // invalid\n  return 0;\n}\n",
        "output": "-2091965200",
        "explanation": "3) Dùng vùng nhớ đã giải phóng (con trỏ treo):"
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ dữ liệu hiệu quả bằng vector/map/set.",
      "Đọc ghi cấu hình, log, file dữ liệu."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Truy cập phần tử ngoài chỉ mục hợp lệ (ví dụ arr[5] cho mảng 5 phần tử).",
        "why": "Chỉ mục hợp lệ là 0..n-1; vượt biên là undefined behavior.",
        "correct": "Duyệt i từ 0 đến n-1."
      },
      {
        "wrong": "Dùng con trỏ chưa khởi tạo hoặc đã delete.",
        "why": "Trỏ vào vùng nhớ rác gây crash hoặc dữ liệu sai khó tìm.",
        "correct": "Khởi tạo nullptr, kiểm tra trước khi dereference, set nullptr sau delete."
      }
    ],
    "keyTakeaways": [
      "Kể cả lập trình viên C++ giàu kinh nghiệm vẫn mắc lỗi. Quan trọng là biết phát hiện và sửa!",
      "Các trang này bao phủ các lỗi phổ biến và mẹo gỡ lỗi hữu ích, giúp bạn hiểu sai ở đâu và sửa thế nào.",
      "Lỗi biên dịch là lỗi khiến chương trình không biên dịch được.",
      "1) Thiếu dấu chấm phẩy:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_errors.asp"
  },
  {
    "id": "cpp-debugging",
    "slug": "debugging",
    "title": "Kỹ thuật gỡ lỗi (Debugging Techniques)",
    "titleEn": "C++ Debugging",
    "num": 115,
    "chapter": "12 · Templates, File & Xử lý lỗi",
    "topic": "STL & Files",
    "difficulty": "intermediate",
    "estimatedTime": 11,
    "prerequisites": [
      "cpp-errors"
    ],
    "description": "Gỡ lỗi là quá trình tìm và sửa lỗi (bug) trong chương trình.",
    "objectives": [
      "Nắm được: Gỡ lỗi C++.",
      "Trình bày được: Debug (Gỡ lỗi); 1. Gỡ lỗi in; 2. Kiểm tra giá trị biến.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Gỡ lỗi là quá trình tìm và sửa lỗi (bug) trong chương trình. Bug là lỗi khiến chương trình treo, chạy sai hoặc cho kết quả sai. Trước khi gỡ lỗi, hãy đảm bảo code gọn gàng và ngăn nắp: Code sạch thì dễ đọc - và dễ gỡ lỗi hơn! Các phần dưới đây giới thiệu một số kỹ thuật gỡ lỗi phổ biến. Dùng cout in giá trị tại các điểm khác nhau trong mã để xem lỗi ở đâu: Nếu không thấy \"After division\", chương trình đã lỗi tại x / y. In các biến để xem chúng có đúng như mong đợi: Đáng ra được 15? Nghĩa là logic đã sai: hãy thử x + y. IDE như Visual Studio, Code::Blocks và VS Code có trình gỡ lỗi cho phép bạn: Mẹo: Hãy bắt đầu với \"1. Print Debugging\". Trình biên dịch C++ và lỗi runtime thường cho biết sai ở đâu. Ví dụ: Giải pháp dễ: thêm dấu chấm phẩy còn thiếu! Gỡ lỗi là tìm và sửa lỗi trong code, còn xử lý ngoại lệ là cách đối phó lỗi khi chương trình đang chạy - và chạy mã cụ thể khi có sự cố. Tìm hiểu về xử lý ngoại lệ trong chương tiếp theo."
    },
    "sections": [
      "Debug (Gỡ lỗi)",
      "1. Gỡ lỗi in",
      "2. Kiểm tra giá trị biến",
      "3. Sử dụng công cụ gỡ lỗi",
      "4. Học từ thông báo lỗi",
      "Xử lý ngoại lệ"
    ],
    "syntax": [
      {
        "code": "int x = 10;\nint y = 0;\ncout << \"Before division\\n\"; // Debug output\n   int z = x / y; // Crashes!\ncout << \"After division\\n\"; // Never runs",
        "explanation": "Dùng cout in giá trị tại các điểm khác nhau trong mã để xem lỗi ở đâu:"
      }
    ],
    "examples": [
      {
        "title": "1. Gỡ lỗi in",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int x = 10;\n  int y = 0;\n  cout << \"Before division\\n\"; // Debug output\n     int z = x / y; // Crashes!\n  cout << \"After division\\n\"; // Never runs\n  return 0;\n}\n",
        "output": "Before division\nAfter division",
        "explanation": "Dùng cout in giá trị tại các điểm khác nhau trong mã để xem lỗi ở đâu:",
        "runnable": false
      },
      {
        "title": "2. Kiểm tra giá trị biến",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int x = 10;\n  int y = 5;\n  int result = x - y;\n  cout << \"Result: \" << result << \"\\n\"; // Result: 5\n  return 0;\n}\n",
        "output": "Result: 5",
        "explanation": "In các biến để xem chúng có đúng như mong đợi:"
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ dữ liệu hiệu quả bằng vector/map/set.",
      "Đọc ghi cấu hình, log, file dữ liệu."
    ],
    "notes": [
      "Mẹo: Hãy bắt đầu với \"1. Print Debugging\"."
    ],
    "commonMistakes": [
      {
        "wrong": "Bắt exception rồi bỏ qua không xử lý.",
        "why": "Lỗi bị nuốt, chương trình tiếp tục ở trạng thái sai.",
        "correct": "Catch rồi xử lý hoặc rethrow khi cần."
      }
    ],
    "keyTakeaways": [
      "Gỡ lỗi là quá trình tìm và sửa lỗi (bug) trong chương trình.",
      "Bug là lỗi khiến chương trình treo, chạy sai hoặc cho kết quả sai.",
      "Trước khi gỡ lỗi, hãy đảm bảo code gọn gàng và ngăn nắp:",
      "Code sạch thì dễ đọc - và dễ gỡ lỗi hơn!"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_debugging.asp"
  },
  {
    "id": "cpp-exceptions",
    "slug": "exceptions",
    "title": "Xử lý ngoại lệ (Exceptions: try, catch, throw)",
    "titleEn": "C++ Exceptions and Exception Handling",
    "num": 116,
    "chapter": "12 · Templates, File & Xử lý lỗi",
    "topic": "STL & Files",
    "difficulty": "intermediate",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-debugging"
    ],
    "description": "Như đã đề cập ở chương C++ Errors, nhiều loại lỗi có thể xảy ra khi chạy chương trình - như lỗi code, dữ liệu không hợp lệ, hoặc tình huống bất ngờ.",
    "objectives": [
      "Nắm được: Ngoại lệ và xử lý ngoại lệ trong C++.",
      "Trình bày được: Ngoại lệ; Xử lý ngoại lệ (try và catch); Ví dụ.",
      "Chạy và sửa được 5 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Như đã đề cập ở chương C++ Errors, nhiều loại lỗi có thể xảy ra khi chạy chương trình - như lỗi code, dữ liệu không hợp lệ, hoặc tình huống bất ngờ. Khi có lỗi, C++ thường dừng và sinh thông báo lỗi. Thuật ngữ chuyên môn: C++ sẽ ném ra một ngoại lệ (throw an error). Xử lý ngoại lệ cho phép bắt và xử lý lỗi lúc chạy - để chương trình không bị treo. Nó sử dụng ba từ khóa: Ở đây, chương trình ném ra ngoại lệ với giá trị 505, được bắt và xử lý trong khối catch. Ta có thể dùng xử lý ngoại lệ để kiểm tra tuổi đủ điều kiện chưa: Ta dùng khối try để kiểm thử một số mã: nếu biến age nhỏ hơn 18, ta ném ra ngoại lệ và xử lý nó trong khối catch. Trong khối catch, ta bắt lỗi và làm gì đó với nó. Câu lệnh catch nhận một tham số: trong ví dụ ta dùng biến int (myNum) (vì ta ném ngoại lệ kiểu int trong try block (age)), để xuất giá trị của age. Nếu không có lỗi (ví dụ age là 20 thay vì 15, tức lớn hơn 18), khối catch sẽ được bỏ qua: Bạn cũng có thể dùng từ khóa throw để xuất một số tham chiếu, như một mã lỗi tùy chỉnh để tổ chức (505 trong ví dụ của chúng ta): Nếu không biết kiểu throw dùng trong khối try, bạn có thể dùng cú pháp \"ba chấm\" (...) bên trong khối catch để xử lý mọi loại ngoại lệ:"
    },
    "sections": [
      "Ngoại lệ",
      "Xử lý ngoại lệ (try và catch)",
      "Ví dụ",
      "Ví dụ thực tế: kiểm tra tuổi",
      "Bắt mọi loại ngoại lệ (...)"
    ],
    "syntax": [
      {
        "code": "try {\n  // Code that may throw an exception\n  throw 505;\n }\ncatch (int errorCode) {\n  cout << \"Error occurred: \" << errorCode;\n}",
        "explanation": "Nó sử dụng ba từ khóa:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <exception>\nusing namespace std;\nint main() {\n  try {\n    // Code that may throw an exception\n    throw 505;\n   }\n  catch (int errorCode) {\n    cout << \"Error occurred: \" << errorCode;\n  }\n  return 0;\n}\n",
        "output": "Error occurred: 505",
        "explanation": "Nó sử dụng ba từ khóa:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  try {\n    int age = 15;\n    if (age >= 18) {\n      cout << \"Access granted - you are old enough.\";\n    } else {\n      throw (age);\n    }\n  }\n  catch (int myNum) {\n    cout << \"Access denied - You must be at least 18 years old.\\n\";\n    cout << \"Age is: \" << myNum;\n  }\n  return 0;\n}\n",
        "output": "Access denied - You must be at least 18 years old.\nAge is: 15",
        "explanation": "Ta có thể dùng xử lý ngoại lệ để kiểm tra tuổi đủ điều kiện chưa:"
      },
      {
        "title": "Ví dụ",
        "code": "int main() {\n  int age = 20;\n  return 0;\n}\n",
        "output": "",
        "explanation": "Nếu không có lỗi (ví dụ age là 20 thay vì 15, tức lớn hơn 18), khối catch sẽ được bỏ qua:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  try {\n    int age = 15;\n    if (age >= 18) {\n      cout << \"Access granted - you are old enough.\";\n    } else {\n      throw 505;\n    }\n  }\n  catch (int myNum) {\n    cout << \"Access denied - You must be at least 18 years old.\\n\";\n    cout << \"Error number: \" << myNum;\n  }\n  return 0;\n}\n",
        "output": "Access denied - You must be at least 18 years old.\nError number: 505",
        "explanation": "Bạn cũng có thể dùng từ khóa throw để xuất một số tham chiếu, như một mã lỗi tùy chỉnh để tổ chức (505 trong ví dụ của chúng ta):"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  try {\n    int age = 15;\n    if (age >= 18) {\n      cout << \"Access granted - you are old enough.\";\n    } else {\n      throw 505;\n    }\n  }\n  catch (...) {\n    cout << \"Access denied - You must be at least 18 years old.\\n\";\n  }\n  return 0;\n}\n",
        "output": "Access denied - You must be at least 18 years old.",
        "explanation": "Nếu không biết kiểu throw dùng trong khối try, bạn có thể dùng cú pháp \"ba chấm\" (...) bên trong khối catch để xử lý mọi loại ngoại lệ:"
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ dữ liệu hiệu quả bằng vector/map/set.",
      "Đọc ghi cấu hình, log, file dữ liệu."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Bắt exception rồi bỏ qua không xử lý.",
        "why": "Lỗi bị nuốt, chương trình tiếp tục ở trạng thái sai.",
        "correct": "Catch rồi xử lý hoặc rethrow khi cần."
      }
    ],
    "keyTakeaways": [
      "Như đã đề cập ở chương C++ Errors, nhiều loại lỗi có thể xảy ra khi chạy chương trình - như lỗi code, dữ liệu không hợp  lệ, hoặc tình huống bất ngờ.…",
      "Khi có lỗi, C++ thường dừng và sinh thông báo lỗi. Thuật ngữ chuyên môn: C++ sẽ ném ra một ngoại lệ (throw an error).",
      "Xử lý ngoại lệ cho phép bắt và xử lý lỗi lúc chạy - để chương trình không bị treo.",
      "Nó sử dụng ba từ khóa:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_exceptions.asp"
  },
  {
    "id": "cpp-input-validation",
    "slug": "input-validation",
    "title": "Kiểm tra tính hợp lệ dữ liệu nhập (Input Validation)",
    "titleEn": "C++ Input Validation",
    "num": 117,
    "chapter": "12 · Templates, File & Xử lý lỗi",
    "topic": "STL & Files",
    "difficulty": "intermediate",
    "estimatedTime": 14,
    "prerequisites": [
      "cpp-exceptions"
    ],
    "description": "Khi người dùng nhập dữ liệu, họ có thể gõ những gì không mong đợi. Kiểm dữ liệu nhập bảo đảm dữ liệu đúng trước khi chương trình tiếp tục.",
    "objectives": [
      "Nắm được: Kiểm dữ liệu nhập trong C++.",
      "Trình bày được: Kiểm tra dữ liệu đầu vào có hợp lệ; Xác thực đầu vào số nguyên; Xác thực phạm vi số.",
      "Chạy và sửa được 3 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Khi người dùng nhập dữ liệu, họ có thể gõ những gì không mong đợi. Kiểm dữ liệu nhập bảo đảm dữ liệu đúng trước khi chương trình tiếp tục. Không kiểm tra dữ liệu nhập, chương trình có thể lỗi hoặc chạy sai! Các ví dụ dưới đây cho thấy cách kiểm tra dữ liệu nhập hợp lệ. Đảm bảo người dùng nhập số. Nếu nhập khác (ví dụ ký tự), hãy hỏi lại: Ví dụ về kết quả: Kiểm tra số nằm trong khoảng cho phép (ví dụ 1 đến 5): Ví dụ về kết quả: Kiểm tra tên không được để trống: Ví dụ về kết quả: Mẹo: đọc thêm về đối tượng cin trong tham chiếu thư viện <iostream>."
    },
    "sections": [
      "Kiểm tra dữ liệu đầu vào có hợp lệ",
      "Xác thực đầu vào số nguyên",
      "Xác thực phạm vi số",
      "Xác thực nhập văn bản"
    ],
    "syntax": [
      {
        "code": "int number;\n cout << \"Enter a number: \";\n while (!(cin >> number)) {  // Keep asking until the user enters a valid number\n   cout << \"Invalid input. Try again: \";\n   cin.clear(); // Reset input errors\n   cin.ignore(10000, '\\n'); // Remove bad input\n }\n cout << \"You entered: \" << number;",
        "explanation": "Đảm bảo người dùng nhập số. Nếu nhập khác (ví dụ ký tự), hãy hỏi lại:"
      }
    ],
    "examples": [
      {
        "title": "Xác thực đầu vào số nguyên",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int number;\n   cout << \"Enter a number: \";\n   while (!(cin >> number)) {  // Keep asking until the user enters a valid number\n     cout << \"Invalid input. Try again: \";\n     cin.clear(); // Reset input errors\n     cin.ignore(10000, '\\n'); // Remove bad input\n   }\n   cout << \"You entered: \" << number;\n  return 0;\n}\n",
        "output": "",
        "explanation": "Đảm bảo người dùng nhập số. Nếu nhập khác (ví dụ ký tự), hãy hỏi lại:",
        "input": "5"
      },
      {
        "title": "Xác thực phạm vi số",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int number;\n   do {\n     cout << \"Choose a number between 1 and 5: \";\n     cin >> number;\n   } while (number < 1 || number> 5);  // Keep asking until the user enters a number between 1 and 5\n\n   cout << \"You chose: \" << number;\n  return 0;\n}\n",
        "output": "",
        "explanation": "Kiểm tra số nằm trong khoảng cho phép (ví dụ 1 đến 5):",
        "input": "5"
      },
      {
        "title": "Xác thực nhập văn bản",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n  string name;\n   do {\n     cout << \"Enter your name: \";\n     getline(cin, name);\n   } while (name.empty());  // Keep asking until the user enters something (name is not empty)\n\n   cout << \"Hello, \" << name;\n  return 0;\n}\n",
        "output": "",
        "explanation": "Kiểm tra tên không được để trống:",
        "input": "5"
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ dữ liệu hiệu quả bằng vector/map/set.",
      "Đọc ghi cấu hình, log, file dữ liệu."
    ],
    "notes": [
      "Mẹo: đọc thêm về đối tượng cin trong tham chiếu thư viện <iostream>."
    ],
    "commonMistakes": [
      {
        "wrong": "Bắt exception rồi bỏ qua không xử lý.",
        "why": "Lỗi bị nuốt, chương trình tiếp tục ở trạng thái sai.",
        "correct": "Catch rồi xử lý hoặc rethrow khi cần."
      },
      {
        "wrong": "Dùng nháy kép \"a\" thay vì nháy đơn 'a' cho ký tự.",
        "why": "\"a\" là chuỗi (char[]), 'a' mới là char.",
        "correct": "char c = 'a';"
      }
    ],
    "keyTakeaways": [
      "Khi người dùng nhập dữ liệu, họ có thể gõ những gì không mong đợi. Kiểm dữ liệu nhập bảo đảm dữ liệu đúng trước khi chươ ng trình tiếp tục.…",
      "Không kiểm tra dữ liệu nhập, chương trình có thể lỗi hoặc chạy sai!",
      "Các ví dụ dưới đây cho thấy cách kiểm tra dữ liệu nhập hợp lệ.",
      "Đảm bảo người dùng nhập số. Nếu nhập khác (ví dụ ký tự), hãy hỏi lại:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_input_validation.asp"
  },
  {
    "id": "cpp-data-structures",
    "slug": "data-structures",
    "title": "Thư viện chuẩn STL và cấu trúc dữ liệu (STL Overview)",
    "titleEn": "C++ Data Structures and STL",
    "num": 118,
    "chapter": "13 · STL & Containers",
    "topic": "STL & Files",
    "difficulty": "intermediate",
    "estimatedTime": 11,
    "prerequisites": [],
    "description": "Cấu trúc dữ liệu dùng để lưu và tổ chức dữ liệu. Mảng là một ví dụ, cho phép lưu nhiều phần tử trong một biến.",
    "objectives": [
      "Nắm được: Cấu trúc dữ liệu và STL trong C++.",
      "Trình bày được: Cấu trúc dữ liệu; Thư viện Template Chuẩn C++ (C++ STL); Ví dụ.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Cấu trúc dữ liệu dùng để lưu và tổ chức dữ liệu. Mảng là một ví dụ, cho phép lưu nhiều phần tử trong một biến. C++ còn nhiều cấu trúc dữ liệu khác, mỗi loại xử lý dữ liệu theo cách riêng. Chúng thuộc C++ STL - viết tắt của Standard Template Library. STL là thư viện gồm các cấu trúc dữ liệu và thuật toán để lưu trữ và thao tác dữ liệu hiệu quả. Nếu nói cấu trúc dữ liệu lưu dữ liệu, thì thuật toán dùng để giải các bài toán khác nhau, thường bằng cách tìm kiếm và thao tác trên các cấu trúc dữ liệu đó. Chọn đúng cấu trúc dữ liệu và thuật toán giúp chương trình chạy nhanh hơn, nhất là với dữ liệu lớn. Các cấu trúc dữ liệu phổ biến nhất là: Dùng cái nào tùy thuộc nhu cầu cụ thể của bạn. Điểm chung là bạn phải include tệp header tương ứng để dùng chúng: Ví dụ dùng vector, sau khi đã include thư viện <vector>: Các chương sau sẽ giải thích từng cấu trúc dữ liệu hoạt động và cách dùng. Các thành phần chính của STL gồm containers, iterators và algorithms, cùng quan hệ giữa chúng: Trong Khoa học Máy tính, cấu trúc dữ liệu và thuật toán song hành. Cấu trúc dữ liệu không đáng giá nếu không thể tìm kiếm hay thao tác hiệu quả bằng thuật toán, và thuật toán không đáng giá nếu không có cấu trúc dữ liệu để thao tác. Trong các chương sau, bạn sẽ thấy mọi thứ liên kết với nhau."
    },
    "sections": [
      "Cấu trúc dữ liệu",
      "Thư viện Template Chuẩn C++ (C++ STL)",
      "Ví dụ",
      "Các khái niệm chính của STL"
    ],
    "syntax": [
      {
        "code": "// Include the vector library\n#include <vector>\n\n// Include the list library\n#include <list>\n\n// Include the set library\n#include <set>\n\n// Include the map library\n#include <map>\n\n// Include the stack library\n#include <stack>\n\n// Include the queue library\n#include <queue>",
        "explanation": "Dùng cái nào tùy thuộc nhu cầu cụ thể của bạn. Điểm chung là bạn phải include tệp header tương ứng để dùng chúng:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <vector>\n#include <list>\n#include <set>\n#include <map>\n#include <stack>\n#include <queue>\nusing namespace std;\n\nint main() {\n  // Include the vector library\n\n  // Include the list library\n\n  // Include the set library\n\n  // Include the map library\n\n  // Include the stack library\n\n  // Include the queue library\n  return 0;\n}\n",
        "output": "",
        "explanation": "Dùng cái nào tùy thuộc nhu cầu cụ thể của bạn. Điểm chung là bạn phải include tệp header tương ứng để dùng chúng:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\nint main() {\n  // Create a vector called cars that will store strings\n  vector<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n\n  // Print vector elements\n     for (string car : cars) {\n    cout << car << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "Volvo\nBMW\nFord\nMazda",
        "explanation": "Ví dụ dùng vector, sau khi đã include thư viện <vector>:"
      }
    ],
    "tables": [
      {
        "title": "Thư viện Template Chuẩn C++ (C++ STL)",
        "header": [
          "Cấu trúc dữ liệu",
          "Mô tả"
        ],
        "rows": [
          [
            "Véc-tơ",
            "Lưu phần tử như mảng nhưng có thể đổi kích thước động. Việc thêm và xóa phầ"
          ],
          [
            "Danh sách",
            "Lưu các phần tử tuần tự, mỗi phần tử nối với phần tử kế tiếp. Việc thêm và xóa phầ"
          ],
          [
            "Chồng tầng",
            "Lưu phần tử theo thứ tự gọi là LIFO (vào sau ra trước), phần tử chỉ được thê"
          ],
          [
            "Hàng Đợi",
            "Lưu phần tử theo thứ tự gọi là FIFO (vào trước ra trước), các phần tử được thêm vào"
          ],
          [
            "Deque",
            "Lưu phần tử trong hàng đợi hai đầu, có thể thêm và xóa từ cả hai đầu. Phầ"
          ],
          [
            "Cài đặt",
            "Lưu các phần tử duy nhất. Không truy cập được theo chỉ mục."
          ],
          [
            "Bản Đồ",
            "Lưu phần tử theo cặp \"khóa/giá trị\". Truy cập theo khóa (không theo chỉ mục)."
          ]
        ]
      }
    ],
    "useCases": [
      "Lưu trữ dữ liệu hiệu quả bằng vector/map/set.",
      "Đọc ghi cấu hình, log, file dữ liệu."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Truy cập phần tử ngoài chỉ mục hợp lệ (ví dụ arr[5] cho mảng 5 phần tử).",
        "why": "Chỉ mục hợp lệ là 0..n-1; vượt biên là undefined behavior.",
        "correct": "Duyệt i từ 0 đến n-1."
      },
      {
        "wrong": "Không kiểm tra file mở thành công trước khi đọc/ghi.",
        "why": "Thao tác trên file mở thất bại âm thầm hoặc crash.",
        "correct": "if (myFile) { ... } hoặc if (!myFile.is_open()) return;"
      }
    ],
    "keyTakeaways": [
      "Cấu trúc dữ liệu dùng để lưu và tổ chức dữ liệu. Mảng là một ví dụ, cho phép lưu nhiều phần tử trong một biến.",
      "C++ còn nhiều cấu trúc dữ liệu khác, mỗi loại xử lý dữ liệu theo cách riêng.",
      "Chúng thuộc C++ STL - viết tắt của Standard Template Library.",
      "STL là thư viện gồm các cấu trúc dữ liệu và thuật toán để lưu trữ và thao tác dữ liệu hiệu quả."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_data_structures.asp"
  },
  {
    "id": "cpp-vectors",
    "slug": "vectors",
    "title": "std::vector trong C++",
    "titleEn": "C++ Vectors",
    "num": 119,
    "chapter": "13 · STL & Containers",
    "topic": "STL & Files",
    "difficulty": "intermediate",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-data-structures"
    ],
    "description": "Vector trong C++ giống như một mảng có thể thay đổi kích thước.",
    "objectives": [
      "Nắm được: Vectơ C++.",
      "Trình bày được: Vectơ C++; Tạo vectơ; Ví dụ.",
      "Chạy và sửa được 6 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Vector trong C++ giống như một mảng có thể thay đổi kích thước. Cả vector và mảng đều là cấu trúc dữ liệu lưu nhiều phần tử cùng kiểu. Khác biệt giữa mảng và vector: kích thước mảng không đổi được (không thêm/xóa phần tử). Còn vector có thể phình lên hoặc co lại tùy ý. Để dùng vector, phải include tệp header <vector>: Để tạo vector, dùng từ khóa vector, chỉ định kiểu giá trị trong cặp ngoặc nhọn <> rồi tên vector, như: vector<type> vectorName. Nếu muốn thêm phần tử ngay khi khai báo, hãy đặt chúng trong danh sách phân tách dấu phẩy, nằm trong ngoặc nhọn {}, giống như với mảng: Lưu ý: kiểu của vector (string trong ví dụ) không đổi được sau khi khai báo. Bạn truy cập phần tử vector bằng chỉ mục trong ngoặc vuông []. Vector cũng như mảng đánh số từ 0: [0] là phần tử đầu, [1] là phần tử thứ hai, v.v.: Một lợi ích của thư viện vector là nhiều hàm hữu ích. Ví dụ, truy cập phần tử đầu hoặc cuối vector bằng .front() và .back(): Để truy cập phần tử tại chỉ mục xác định, dùng hàm .at() và chỉ số mục: Lưu ý: .at() thường được ưa chuộng hơn ngoặc vuông [] vì nó cho biết khi có lỗi xảy ra. Ví dụ nếu phần tử ngoài phạm vi: Để đổi giá trị một phần tử cụ thể, hãy chỉ số mục của nó: Tuy nhiên, dùng hàm .at() an toàn hơn: Khác biệt lớn nhất giữa vector và mảng là vector có thể phát triển động, tức là có thể thêm hoặc xóa phần tử khỏi vector. Để thêm phần tử vào vector, dùng .push_back() - sẽ thêm một phần tử vào cuối vector: Bạn có thể thêm bao nhiêu phần tử cũng được: Để xóa phần tử khỏi vector, dùng .pop_back() - gỡ phần tử ở cuối vector: Lưu ý: phần tử thường chỉ thêm/xóa ở cuối vector. Cần thao tác cả hai đầu, dùng deque thay vector sẽ tốt hơn. Để biết vector có bao nhiêu phần tử, dùng hàm .size(): Cũng có hàm để biết vector có rỗng hay không. .empty() trả về 1 (true) nếu vector rỗng và 0 (false) nếu nó chứa một hoặc nhiều phần tử: Bạn lặp qua phần tử vector bằng for kết hợp hàm .size(): Bạn cũng có thể dùng for-each (giới thiệu từ C++11 năm 2011) - gọn và dễ đọc hơn: Mẹo: cũng có thể lặp qua vector bằng iterator - sẽ học thêm ở chương sau. Tham chiếu đầy đủ các hàm Vector: xem C++ Vector Reference."
    },
    "sections": [
      "Vectơ C++",
      "Tạo vectơ",
      "Ví dụ",
      "Truy cập vectơ",
      "Thay đổi một phần tử vectơ",
      "Thêm các phần tử vectơ",
      "Loại bỏ các phần tử vectơ",
      "kích thước vectơ",
      "Kiểm tra Vector có rỗng không",
      "Lặp qua một vectơ",
      "Tham chiếu Vector đầy đủ"
    ],
    "syntax": [
      {
        "code": "// Include the vector library\n#include <vector>",
        "explanation": "Để dùng vector, phải include tệp header <vector>:"
      }
    ],
    "examples": [
      {
        "title": "Vectơ C++",
        "code": "#include <vector>\nusing namespace std;\n\nint main() {\n  // Include the vector library\n  return 0;\n}\n",
        "output": "",
        "explanation": "Để dùng vector, phải include tệp header <vector>:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <string>\n#include <vector>\nusing namespace std;\nint main() {\n  // Create a vector called cars that will store strings\n  vector<string> cars;\n  return 0;\n}\n",
        "output": "",
        "explanation": "Để tạo vector, dùng từ khóa vector, chỉ định kiểu giá trị trong cặp ngoặc nhọn <> rồi tên vector, như: vector<type> vectorName."
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\nint main() {\n  // Create a vector called cars that will store strings\n  vector<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n\n  // Print vector elements\n     for (string car : cars) {\n    cout << car << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "Volvo\nBMW\nFord\nMazda",
        "explanation": "Nếu muốn thêm phần tử ngay khi khai báo, hãy đặt chúng trong danh sách phân tách dấu phẩy, nằm trong ngoặc nhọn {}, giống như với mảng:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\nint main() {\n  // Create a vector called cars that will store strings\n  vector<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n\n  // Get the first element\n     cout << cars[0];  // Outputs Volvo\n\n  // Get the second element\n     cout << cars[1];  // Outputs BMW\n  return 0;\n}\n",
        "output": "VolvoBMW",
        "explanation": "Vector cũng như mảng đánh số từ 0: [0] là phần tử đầu, [1] là phần tử thứ hai, v.v.:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\nint main() {\n  // Create a vector called cars that will store strings\n  vector<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n\n  // Get the first element\n     cout << cars.front();\n\n  // Get the last element\n     cout << cars.back();\n  return 0;\n}\n",
        "output": "VolvoMazda",
        "explanation": "Một lợi ích của thư viện vector là nhiều hàm hữu ích. Ví dụ, truy cập phần tử đầu hoặc cuối vector bằng .front() và .back():"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\nint main() {\n  // Create a vector called cars that will store strings\n  vector<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n\n  // Get the second element\n     cout << cars.at(1);\n\n  // Get the third element\n     cout << cars.at(2);\n  return 0;\n}\n",
        "output": "BMWFord",
        "explanation": "Để truy cập phần tử tại chỉ mục xác định, dùng hàm .at() và chỉ số mục:"
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ dữ liệu hiệu quả bằng vector/map/set.",
      "Đọc ghi cấu hình, log, file dữ liệu."
    ],
    "notes": [
      "Lưu ý: kiểu của vector (string trong ví dụ) không đổi được sau khi khai báo.",
      "Lưu ý: .at() thường được ưa chuộng hơn ngoặc vuông [] vì nó cho biết khi có lỗi xảy ra.",
      "Lưu ý: phần tử thường chỉ thêm/xóa ở cuối vector. Cần thao tác cả hai đầu, dùng deque thay vector sẽ tốt hơn.",
      "Mẹo: cũng có thể lặp qua vector bằng iterator - sẽ học thêm ở chương sau."
    ],
    "commonMistakes": [
      {
        "wrong": "Vòng lặp while không có câu lệnh làm thay đổi điều kiện.",
        "why": "Điều kiện không bao giờ sai → lặp vô hạn.",
        "correct": "Đảm bảo biến đếm/điều kiện thay đổi trong thân vòng lặp."
      },
      {
        "wrong": "Truy cập phần tử ngoài chỉ mục hợp lệ (ví dụ arr[5] cho mảng 5 phần tử).",
        "why": "Chỉ mục hợp lệ là 0..n-1; vượt biên là undefined behavior.",
        "correct": "Duyệt i từ 0 đến n-1."
      }
    ],
    "keyTakeaways": [
      "Vector trong C++ giống như một mảng có thể thay đổi kích thước.",
      "Cả vector và mảng đều là cấu trúc dữ liệu lưu nhiều phần tử cùng kiểu.",
      "Khác biệt giữa mảng và vector: kích thước mảng không đổi được (không thêm/xóa phần tử). Còn vector có thể phình lên hoặc  co lại tùy ý.…",
      "Để dùng vector, phải include tệp header <vector>:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_vectors.asp"
  },
  {
    "id": "cpp-list",
    "slug": "list",
    "title": "std::list trong C++",
    "titleEn": "C++ List",
    "num": 120,
    "chapter": "13 · STL & Containers",
    "topic": "STL & Files",
    "difficulty": "intermediate",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-vectors"
    ],
    "description": "List tương tự vector: lưu nhiều phần tử cùng kiểu và có thể tự tăng kích thước.",
    "objectives": [
      "Nắm được: Danh sách C++.",
      "Trình bày được: Danh sách C++; Ví dụ; Truy cập danh sách.",
      "Chạy và sửa được 6 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "List tương tự vector: lưu nhiều phần tử cùng kiểu và có thể tự tăng kích thước. Tuy nhiên, hai khác biệt lớn giữa list và vector là: Để dùng list, phải include tệp header <list>: // Include thư viện list #include <list> Tạo một List. Để tạo một list, dùng từ khóa list, và chỉ định kiểu giá trị nó nên lưu trong ngoặc nhọn <> rồi tên của list, như: list<type> listName. Nếu muốn thêm phần tử ngay khi khai báo, hãy đặt chúng trong danh sách phân tách dấu phẩy, nằm trong ngoặc nhọn {}: Lưu ý: kiểu của list (string trong ví dụ) không đổi được sau khi khai báo. Bạn không thể truy cập phần tử list bằng chỉ mục như mảng và vector. Tuy nhiên, bạn có thể truy cập phần tử đầu hoặc cuối bằng .front() và .back(): Bạn cũng có thể đổi giá trị phần tử đầu hoặc cuối bằng .front() và .back() Để thêm phần tử vào list, dùng .push_front() để chèn phần tử vào đầu danh sách và .push_back() để thêm phần tử ở cuối: Để xóa phần tử khỏi list, dùng .pop_front() để gỡ phần tử ở đầu danh sách và .pop_back() để gỡ phần tử ở cuối: Để biết list có bao nhiêu phần tử, dùng hàm .size(): Dùng hàm .empty() để biết list có rỗng hay không. .empty() trả về 1 (true) nếu list rỗng, ngược lại 0 (false): Không thể lặp qua phần tử list bằng vòng lặp for truyền thống kết hợp .size(), vì không thể truy cập phần tử list theo chỉ mục: Cách đơn giản nhất để lặp qua list là dùng for-each: Mẹo: cũng có thể lặp qua list bằng iterator - sẽ học thêm ở chương sau."
    },
    "sections": [
      "Danh sách C++",
      "Ví dụ",
      "Truy cập danh sách",
      "Thay đổi thành phần danh sách",
      "Thêm phần tử danh sách",
      "Xóa phần tử danh sách",
      "Kích thước danh sách",
      "Kiểm tra danh sách có rỗng không",
      "Lặp qua một danh sách"
    ],
    "syntax": [
      {
        "code": "// Create a list called cars that will store strings\nlist<string> cars;",
        "explanation": "Để dùng list, phải include tệp header <list>: // Include thư viện list #include <list> Tạo một List. Để tạo một list, dùng từ khóa list, và chỉ định kiểu giá trị nó nên lưu trong ngoặc nhọn <> rồi tên của list, như: list<type> listName."
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <string>\n#include <list>\nusing namespace std;\nint main() {\n  // Create a list called cars that will store strings\n  list<string> cars;\n  return 0;\n}\n",
        "output": "",
        "explanation": "Để dùng list, phải include tệp header <list>: // Include thư viện list #include <list> Tạo một List. Để tạo một list, dùng từ khóa list, và chỉ định kiểu giá trị nó nên lưu trong ngoặc nhọn <> rồi tên của list, như: list<type> listName."
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <list>\nusing namespace std;\nint main() {\n  // Create a list called cars that will store strings\n  list<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n\n  // Print list elements\n     for (string car : cars) {\n    cout << car << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "Volvo\nBMW\nFord\nMazda",
        "explanation": "Nếu muốn thêm phần tử ngay khi khai báo, hãy đặt chúng trong danh sách phân tách dấu phẩy, nằm trong ngoặc nhọn {}:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <list>\nusing namespace std;\nint main() {\n  // Create a list called cars that will store strings\n  list<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n\n  // Get the first element\n     cout << cars.front();  // Outputs Volvo\n\n  // Get the last element\n     cout << cars.back();  // Outputs Mazda\n  return 0;\n}\n",
        "output": "VolvoMazda",
        "explanation": "Tuy nhiên, bạn có thể truy cập phần tử đầu hoặc cuối bằng .front() và .back():"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <list>\nusing namespace std;\nint main() {\n  list<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n\n  // Change the value of the first element\n  cars.front() = \"Opel\";\n\n  // Change the value of the last element\n  cars.back() = \"Toyota\";\n\n  cout << cars.front(); // Now outputs Opel instead of Volvo\n  cout << cars.back();  // Now outputs Toyota instead of Mazda\n  return 0;\n}\n",
        "output": "OpelToyota",
        "explanation": "Bạn cũng có thể đổi giá trị phần tử đầu hoặc cuối bằng .front() và .back()"
      },
      {
        "title": "Ví dụ",
        "code": "#include <string>\n#include <list>\nusing namespace std;\nint main() {\n  list<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n\n  // Add an element at the beginning\n  cars.push_front(\"Tesla\");\n\n  // Add an element at the end\n  cars.push_back(\"VW\");\n  return 0;\n}\n",
        "output": "",
        "explanation": "Để thêm phần tử vào list, dùng .push_front() để chèn phần tử vào đầu danh sách và .push_back() để thêm phần tử ở cuối:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <string>\n#include <list>\nusing namespace std;\nint main() {\n  list<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n\n  // Remove the first element\n  cars.pop_front();\n\n  // Remove the last element\n  cars.pop_back();\n  return 0;\n}\n",
        "output": "",
        "explanation": "Để xóa phần tử khỏi list, dùng .pop_front() để gỡ phần tử ở đầu danh sách và .pop_back() để gỡ phần tử ở cuối:"
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ dữ liệu hiệu quả bằng vector/map/set.",
      "Đọc ghi cấu hình, log, file dữ liệu."
    ],
    "notes": [
      "Lưu ý: kiểu của list (string trong ví dụ) không đổi được sau khi khai báo.",
      "Mẹo: cũng có thể lặp qua list bằng iterator - sẽ học thêm ở chương sau."
    ],
    "commonMistakes": [
      {
        "wrong": "Vòng lặp while không có câu lệnh làm thay đổi điều kiện.",
        "why": "Điều kiện không bao giờ sai → lặp vô hạn.",
        "correct": "Đảm bảo biến đếm/điều kiện thay đổi trong thân vòng lặp."
      },
      {
        "wrong": "Truy cập phần tử ngoài chỉ mục hợp lệ (ví dụ arr[5] cho mảng 5 phần tử).",
        "why": "Chỉ mục hợp lệ là 0..n-1; vượt biên là undefined behavior.",
        "correct": "Duyệt i từ 0 đến n-1."
      }
    ],
    "keyTakeaways": [
      "List tương tự vector: lưu nhiều phần tử cùng kiểu và có thể tự tăng kích thước.",
      "Tuy nhiên, hai khác biệt lớn giữa list và vector là:",
      "Để dùng list, phải include tệp header <list>: // Include thư viện list #include <list> Tạo một List. Để tạo một list, dù…",
      "Nếu muốn thêm phần tử ngay khi khai báo, hãy đặt chúng trong danh sách phân tách dấu phẩy, nằm trong ngoặc nhọn {}:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_list.asp"
  },
  {
    "id": "cpp-stacks",
    "slug": "stacks",
    "title": "std::stack trong C++ (Ngăn xếp)",
    "titleEn": "C++ Stacks",
    "num": 121,
    "chapter": "13 · STL & Containers",
    "topic": "STL & Files",
    "difficulty": "intermediate",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-list"
    ],
    "description": "Stack lưu nhiều phần tử theo thứ tự gọi là LIFO.",
    "objectives": [
      "Nắm được: Ngăn xếp C++.",
      "Trình bày được: Ngăn xếp C++ (C++ Stack); Thêm phần tử; Ví dụ.",
      "Chạy và sửa được 6 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Stack lưu nhiều phần tử theo thứ tự gọi là LIFO. LIFO là viết tắt của Last In, First Out (vào sau, ra trước). Để hình dung LIFO, hãy nghĩ tới chồng bánh pancake, bánh được thêm và lấy ra từ trên cùng. Khác vector, phần tử stack không truy cập theo chỉ mục. Vì phần tử được thêm và xóa từ trên cùng, bạn chỉ truy cập được phần tử trên đỉnh stack. Để dùng stack, phải include tệp header <stack>: // Include thư viện stack #include <stack> Tạo một Stack. Để tạo một stack, dùng từ khóa stack, và chỉ định kiểu giá trị nó nên lưu trong ngoặc nhọn <> rồi tên của stack, như: stack<type> stackName. Lưu ý: kiểu của stack (string trong ví dụ) không đổi được sau khi khai báo. Lưu ý: không thể thêm phần tử vào stack ngay khi khai báo như với vector: Để thêm phần tử vào stack, dùng .push() sau khi khai báo stack: Stack sẽ trông như sau (nhớ rằng phần tử thêm cuối là phần tử trên cùng): Bạn không thể truy cập phần tử stack bằng chỉ mục như với mảng và vector. Trong stack, bạn chỉ truy cập được phần tử trên cùng, bằng hàm .top(): Bạn cũng có thể dùng .top để đổi giá trị phần tử trên cùng: Bạn có thể dùng hàm .pop() để gỡ phần tử khỏi stack. Thao tác này gỡ phần tử cuối cùng khỏi stack: Để biết stack có bao nhiêu phần tử, dùng hàm .size(): Dùng hàm .empty() để biết stack có rỗng hay không. .empty() trả về 1 (true) nếu stack rỗng, ngược lại 0 (false): Stack thường được nhắc cùng với Queue - cấu trúc dữ liệu tương tự mô tả ở trang tiếp theo."
    },
    "sections": [
      "Ngăn xếp C++ (C++ Stack)",
      "Thêm phần tử",
      "Ví dụ",
      "Truy cập các phần tử ngăn xếp",
      "Thay đổi phần tử trên cùng",
      "Xóa phần tử",
      "Lấy kích thước của Stack (ngăn xếp)",
      "Kiểm tra Stack có rỗng không",
      "Xếp chồng và hàng đợi"
    ],
    "syntax": [
      {
        "code": "// Create a stack of strings called cars\n   stack<string> cars;",
        "explanation": "Để dùng stack, phải include tệp header <stack>: // Include thư viện stack #include <stack> Tạo một Stack. Để tạo một stack, dùng từ khóa stack, và chỉ định kiểu giá trị nó nên lưu trong ngoặc nhọn <> rồi tên của stack, như: stack<type> stackName."
      }
    ],
    "examples": [
      {
        "title": "Ngăn xếp C++ (C++ Stack)",
        "code": "#include <string>\n#include <stack>\nusing namespace std;\nint main() {\n  // Create a stack of strings called cars\n     stack<string> cars;\n  return 0;\n}\n",
        "output": "",
        "explanation": "Để dùng stack, phải include tệp header <stack>: // Include thư viện stack #include <stack> Tạo một Stack. Để tạo một stack, dùng từ khóa stack, và chỉ định kiểu giá trị nó nên lưu trong ngoặc nhọn <> rồi tên của stack, như: stack<type> stackName."
      },
      {
        "title": "Ngăn xếp C++ (C++ Stack)",
        "code": "#include <iostream>\n#include <string>\n#include <stack>\n\nusing namespace std;\n\nint main() {\n  stack<string> cars;\n  cars.push(\"Volvo\");\n  cars.push(\"BMW\");\n  cars.push(\"Ford\");\n  cars.push(\"Mazda\");\n  cout << cars.top();\n  return 0;\n}\n",
        "output": "Mazda",
        "explanation": "Chạy thử và tự sửa code để cảm nhận cách nó hoạt động.",
        "input": ""
      },
      {
        "title": "Ví dụ",
        "code": "#include <string>\n#include <stack>\nusing namespace std;\nint main() {\n  // Create a stack of strings called cars\n  stack<string> cars;\n\n  // Add elements to the stack\n  cars.push(\"Volvo\");\n  cars.push(\"BMW\");\n     cars.push(\"Ford\");\n  cars.push(\"Mazda\");\n  return 0;\n}\n",
        "output": "",
        "explanation": "Để thêm phần tử vào stack, dùng .push() sau khi khai báo stack:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <stack>\n\nusing namespace std;\n\nint main() {\n  stack<string> cars;\n  cars.push(\"Volvo\");\n  cars.push(\"BMW\");\n  cars.push(\"Ford\");\n  cars.push(\"Mazda\");\n  cout << cars.top();\n  return 0;\n}\n",
        "output": "Mazda",
        "explanation": "Trong stack, bạn chỉ truy cập được phần tử trên cùng, bằng hàm .top():",
        "input": ""
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <stack>\n\nusing namespace std;\n\nint main() {\n  stack<string> cars;\n  cars.push(\"Volvo\");\n  cars.push(\"BMW\");\n  cars.push(\"Ford\");\n  cars.push(\"Mazda\");\n  cars.top() = \"Tesla\";\n  cout << cars.top();\n  return 0;\n}\n",
        "output": "Tesla",
        "explanation": "Bạn cũng có thể dùng .top để đổi giá trị phần tử trên cùng:",
        "input": ""
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <stack>\nusing namespace std;\nint main() {\n  // Create a stack of strings called cars\n  stack<string> cars;\n\n  // Add elements to the stack\n  cars.push(\"Volvo\");\n  cars.push(\"BMW\");\n     cars.push(\"Ford\");\n  cars.push(\"Mazda\");\n\n  // Remove the last added element (Mazda)\n  cars.pop();\n\n  // Access the top element (Now Ford)\n     cout << cars.top();\n  return 0;\n}\n",
        "output": "Ford",
        "explanation": "Thao tác này gỡ phần tử cuối cùng khỏi stack:"
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ dữ liệu hiệu quả bằng vector/map/set.",
      "Đọc ghi cấu hình, log, file dữ liệu."
    ],
    "notes": [
      "Lưu ý: kiểu của stack (string trong ví dụ) không đổi được sau khi khai báo.",
      "Lưu ý: không thể thêm phần tử vào stack ngay khi khai báo như với vector:"
    ],
    "commonMistakes": [
      {
        "wrong": "Viết if (x = 5) thay vì if (x == 5).",
        "why": "Dấu = là gán, == mới là so sánh; gán trong if luôn cho kết quả true.",
        "correct": "if (x == 5) { ... }"
      },
      {
        "wrong": "Truy cập phần tử ngoài chỉ mục hợp lệ (ví dụ arr[5] cho mảng 5 phần tử).",
        "why": "Chỉ mục hợp lệ là 0..n-1; vượt biên là undefined behavior.",
        "correct": "Duyệt i từ 0 đến n-1."
      }
    ],
    "keyTakeaways": [
      "Stack lưu nhiều phần tử theo thứ tự gọi là LIFO.",
      "LIFO là viết tắt của Last In, First Out (vào sau, ra trước). Để hình dung LIFO, hãy nghĩ tới chồng bánh pancake, bánh đư ợc thêm và lấy ra từ trên cùng.…",
      "Khác vector, phần tử stack không truy cập theo chỉ mục. Vì phần tử được thêm và xóa từ trên cùng, bạn chỉ truy cập được  phần tử trên đỉnh stack.…",
      "Để dùng stack, phải include tệp header <stack>: // Include thư viện stack #include <stack> Tạo một Stack. Để tạo một sta…"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_stacks.asp"
  },
  {
    "id": "cpp-queues",
    "slug": "queues",
    "title": "std::queue trong C++ (Hàng đợi)",
    "titleEn": "C++ Queues",
    "num": 122,
    "chapter": "13 · STL & Containers",
    "topic": "STL & Files",
    "difficulty": "intermediate",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-stacks"
    ],
    "description": "Queue lưu nhiều phần tử theo thứ tự gọi là FIFO.",
    "objectives": [
      "Nắm được: Hàng đợi C++.",
      "Trình bày được: Hàng đợi C++; Thêm phần tử; Ví dụ.",
      "Chạy và sửa được 6 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Queue lưu nhiều phần tử theo thứ tự gọi là FIFO. FIFO là viết tắt của First In, First Out (vào trước, ra trước). Hãy hình dung queue như người xếp hàng ở siêu thị. Khác vector, phần tử queue không truy cập theo chỉ mục. Vì queue thêm ở cuối và lấy ra ở đầu, bạn chỉ truy cập được phần tử ở đầu hoặc cuối. Để dùng queue, phải include tệp header <queue>: // Include thư viện queue #include <queue> Tạo một Queue. Để tạo một queue, dùng từ khóa queue, và chỉ định kiểu giá trị nó nên lưu trong ngoặc nhọn <> rồi tên của queue, như: queue<type> queueName. Lưu ý: kiểu của queue (string trong ví dụ) không đổi được sau khi khai báo. Lưu ý: không thể thêm phần tử vào queue ngay khi khai báo như với vector: Để thêm phần tử vào queue, dùng hàm .push() sau khi khai báo queue. Hàm .push() thêm một phần tử vào cuối hàng đợi: Hàng đợi (queue) sẽ trông như sau: Bạn không thể truy cập phần tử queue bằng chỉ mục như với mảng và vector. Trong queue, bạn chỉ truy cập được phần tử đầu hoặc cuối bằng .front() và .back(): Bạn cũng có thể dùng .front và .back để đổi giá trị phần tử đầu và cuối: Bạn có thể dùng hàm .pop() để gỡ phần tử khỏi queue. Thao tác này gỡ phần tử đầu (phần tử cũ nhất được thêm vào queue): Để biết queue có bao nhiêu phần tử, dùng hàm .size(): Dùng hàm .empty() để biết queue có rỗng hay không. .empty() trả về 1 (true) nếu queue rỗng, ngược lại 0 (false): Queue thường được nhắc cùng với Stack - cấu trúc dữ liệu tương tự mô tả ở trang trước."
    },
    "sections": [
      "Hàng đợi C++",
      "Thêm phần tử",
      "Ví dụ",
      "Truy cập các thành phần hàng đợi",
      "Thay đổi phần tử đầu và cuối",
      "Xóa phần tử",
      "Nhận kích thước của một hàng đợi",
      "Kiểm tra Queue có rỗng không",
      "Xếp chồng và hàng đợi"
    ],
    "syntax": [
      {
        "code": "// Create a queue of strings called cars\n   queue<string> cars;",
        "explanation": "Để dùng queue, phải include tệp header <queue>: // Include thư viện queue #include <queue> Tạo một Queue. Để tạo một queue, dùng từ khóa queue, và chỉ định kiểu giá trị nó nên lưu trong ngoặc nhọn <> rồi tên của queue, như: queue<type> queueName."
      }
    ],
    "examples": [
      {
        "title": "Hàng đợi C++",
        "code": "#include <string>\n#include <queue>\nusing namespace std;\nint main() {\n  // Create a queue of strings called cars\n     queue<string> cars;\n  return 0;\n}\n",
        "output": "",
        "explanation": "Để dùng queue, phải include tệp header <queue>: // Include thư viện queue #include <queue> Tạo một Queue. Để tạo một queue, dùng từ khóa queue, và chỉ định kiểu giá trị nó nên lưu trong ngoặc nhọn <> rồi tên của queue, như: queue<type> queueName."
      },
      {
        "title": "Hàng đợi C++",
        "code": "#include <iostream>\n#include <string>\n#include <queue>\n\nusing namespace std;\n\nint main() {\n  queue<string> cars;\n  cars.push(\"Volvo\");\n  cars.push(\"BMW\");\n  cars.push(\"Ford\");\n  cars.push(\"Mazda\");\n  cout << cars.front();\n  return 0;\n}\n",
        "output": "Volvo",
        "explanation": "Chạy thử và tự sửa code để cảm nhận cách nó hoạt động.",
        "input": ""
      },
      {
        "title": "Ví dụ",
        "code": "#include <string>\n#include <queue>\nusing namespace std;\nint main() {\n  // Create a queue of strings\n  queue<string> cars;\n\n  // Add elements to the queue\n  cars.push(\"Volvo\");\n  cars.push(\"BMW\");\n     cars.push(\"Ford\");\n  cars.push(\"Mazda\");\n  return 0;\n}\n",
        "output": "",
        "explanation": "Hàm .push() thêm một phần tử vào cuối hàng đợi:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <queue>\n\nusing namespace std;\n\nint main() {\n  queue<string> cars;\n  cars.push(\"Volvo\");\n  cars.push(\"BMW\");\n  cars.push(\"Ford\");\n  cars.push(\"Mazda\");\n  cout << cars.front() << \" \" << cars.back();\n  return 0;\n}\n",
        "output": "Volvo Mazda",
        "explanation": "Trong queue, bạn chỉ truy cập được phần tử đầu hoặc cuối bằng .front() và .back():",
        "input": ""
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <queue>\n\nusing namespace std;\n\nint main() {\n  queue<string> cars;\n  cars.push(\"Volvo\");\n  cars.push(\"BMW\");\n  cars.push(\"Ford\");\n  cars.push(\"Mazda\");\n  cars.front() = \"Tesla\";\n  cars.back() = \"VW\";\n  cout << cars.front() << \" \" << cars.back();\n  return 0;\n}\n",
        "output": "Tesla VW",
        "explanation": "Bạn cũng có thể dùng .front và .back để đổi giá trị phần tử đầu và cuối:",
        "input": ""
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <queue>\nusing namespace std;\nint main() {\n  // Create a queue of strings\n  queue<string> cars;\n\n  // Add elements to the queue\n  cars.push(\"Volvo\");\n  cars.push(\"BMW\");\n     cars.push(\"Ford\");\n  cars.push(\"Mazda\");\n\n  // Remove the front element (Volvo)\n  cars.pop();\n\n  // Access the front element (Now BMW)\n     cout << cars.front();\n  return 0;\n}\n",
        "output": "BMW",
        "explanation": "Thao tác này gỡ phần tử đầu (phần tử cũ nhất được thêm vào queue):"
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ dữ liệu hiệu quả bằng vector/map/set.",
      "Đọc ghi cấu hình, log, file dữ liệu."
    ],
    "notes": [
      "Lưu ý: kiểu của queue (string trong ví dụ) không đổi được sau khi khai báo.",
      "Lưu ý: không thể thêm phần tử vào queue ngay khi khai báo như với vector:"
    ],
    "commonMistakes": [
      {
        "wrong": "Viết if (x = 5) thay vì if (x == 5).",
        "why": "Dấu = là gán, == mới là so sánh; gán trong if luôn cho kết quả true.",
        "correct": "if (x == 5) { ... }"
      },
      {
        "wrong": "Truy cập phần tử ngoài chỉ mục hợp lệ (ví dụ arr[5] cho mảng 5 phần tử).",
        "why": "Chỉ mục hợp lệ là 0..n-1; vượt biên là undefined behavior.",
        "correct": "Duyệt i từ 0 đến n-1."
      }
    ],
    "keyTakeaways": [
      "Queue lưu nhiều phần tử theo thứ tự gọi là FIFO.",
      "FIFO là viết tắt của First In, First Out (vào trước, ra trước). Hãy hình dung queue như người xếp hàng ở siêu thị.",
      "Khác vector, phần tử queue không truy cập theo chỉ mục. Vì queue thêm ở cuối và lấy ra ở đầu, bạn chỉ truy cập được phần  tử ở đầu hoặc cuối.…",
      "Để dùng queue, phải include tệp header <queue>: // Include thư viện queue #include <queue> Tạo một Queue. Để tạo một que…"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_queues.asp"
  },
  {
    "id": "cpp-deque",
    "slug": "deque",
    "title": "std::deque trong C++ (Hàng đợi hai đầu)",
    "titleEn": "C++ Deque",
    "num": 123,
    "chapter": "13 · STL & Containers",
    "topic": "STL & Files",
    "difficulty": "intermediate",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-queues"
    ],
    "description": "Ở trang trước, bạn đã học rằng phần tử trong queue được thêm ở cuối và xóa ở đầu. Tuy nhiên, deque (hàng đợi hai đầu) linh hoạt hơn, vì phần tử có thể được thêm và xóa từ cả hai đầu (đầu và cuối).",
    "objectives": [
      "Nắm được: Hàng đợi hai đầu C++.",
      "Trình bày được: Hàng đợi hai đầu C++ (C++ Deque); Ví dụ; Truy cập Deque.",
      "Chạy và sửa được 6 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Ở trang trước, bạn đã học rằng phần tử trong queue được thêm ở cuối và xóa ở đầu. Tuy nhiên, deque (hàng đợi hai đầu) linh hoạt hơn, vì phần tử có thể được thêm và xóa từ cả hai đầu (đầu và cuối). Để dùng deque, phải include tệp header <deque>: // Include thư viện deque #include <deque> Tạo một Deque. Để tạo một deque, dùng từ khóa deque, và chỉ định kiểu giá trị nó nên lưu trong ngoặc nhọn <> rồi tên của deque, như: deque<type> dequeName. Nếu muốn thêm phần tử ngay khi khai báo, hãy đặt chúng trong danh sách phân tách dấu phẩy, nằm trong ngoặc nhọn {}: Lưu ý: kiểu của deque (string trong ví dụ) không đổi được sau khi khai báo. Bạn truy cập phần tử deque bằng chỉ mục trong ngoặc vuông []. Deque đánh số từ 0: [0] là phần tử đầu, [1] là phần tử thứ hai, v.v.: Bạn cũng có thể truy cập phần tử đầu hoặc cuối của deque bằng .front() và .back(): Để truy cập phần tử tại chỉ mục xác định, dùng hàm .at() và chỉ số mục: Lưu ý: .at() thường được ưa chuộng hơn ngoặc vuông [] vì nó báo lỗi nếu phần tử ngoài phạm vi: Để đổi giá trị một phần tử cụ thể, hãy chỉ số mục của nó: Tuy nhiên, dùng hàm .at() an toàn hơn: Để thêm phần tử vào deque, dùng .push_front() để chèn phần tử vào đầu và .push_back() để thêm phần tử ở cuối: Để xóa phần tử khỏi deque, dùng .pop_front() để gỡ phần tử ở đầu và .pop_back() để gỡ phần tử ở cuối: Để biết deque có bao nhiêu phần tử, dùng hàm .size(): Dùng hàm .empty() để biết deque có rỗng hay không. .empty() trả về 1 (true) nếu deque rỗng, ngược lại 0 (false): Bạn lặp qua phần tử deque bằng for kết hợp hàm .size(): Bạn cũng có thể dùng for-each (giới thiệu từ C++11 năm 2011) - gọn và dễ đọc hơn: Mẹo: cũng có thể lặp qua deque bằng iterator - sẽ học thêm ở chương sau."
    },
    "sections": [
      "Hàng đợi hai đầu C++ (C++ Deque)",
      "Ví dụ",
      "Truy cập Deque",
      "Thay đổi một phần tử Deque",
      "Thêm các phần tử Deque",
      "Xóa các phần tử Deque",
      "Kích thước hóa đơn",
      "Kiểm tra Deque có rỗng không",
      "Vòng lặp thông qua một Deque"
    ],
    "syntax": [
      {
        "code": "// Create a deque called cars that will store strings\n   deque<string> cars;",
        "explanation": "Để dùng deque, phải include tệp header <deque>: // Include thư viện deque #include <deque> Tạo một Deque. Để tạo một deque, dùng từ khóa deque, và chỉ định kiểu giá trị nó nên lưu trong ngoặc nhọn <> rồi tên của deque, như: deque<type> dequeName."
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <string>\n#include <deque>\nusing namespace std;\nint main() {\n  // Create a deque called cars that will store strings\n     deque<string> cars;\n  return 0;\n}\n",
        "output": "",
        "explanation": "Để dùng deque, phải include tệp header <deque>: // Include thư viện deque #include <deque> Tạo một Deque. Để tạo một deque, dùng từ khóa deque, và chỉ định kiểu giá trị nó nên lưu trong ngoặc nhọn <> rồi tên của deque, như: deque<type> dequeName."
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <deque>\nusing namespace std;\nint main() {\n  // Create a deque called cars that will store strings\n     deque<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n\n  // Print deque elements\n     for (string car : cars) {\n    cout << car << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "Volvo\nBMW\nFord\nMazda",
        "explanation": "Nếu muốn thêm phần tử ngay khi khai báo, hãy đặt chúng trong danh sách phân tách dấu phẩy, nằm trong ngoặc nhọn {}:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <deque>\nusing namespace std;\nint main() {\n  // Create a deque called cars that will store strings\n     deque<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n\n  // Get the first element\n     cout << cars[0];  // Outputs Volvo\n\n  // Get the second element\n     cout << cars[1];  // Outputs BMW\n  return 0;\n}\n",
        "output": "VolvoBMW",
        "explanation": "Deque đánh số từ 0: [0] là phần tử đầu, [1] là phần tử thứ hai, v.v.:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <deque>\nusing namespace std;\nint main() {\n  // Create a deque called cars that will store strings\n     deque<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n\n  // Get the first element\n     cout << cars.front();\n\n  // Get the last element\n     cout << cars.back();\n  return 0;\n}\n",
        "output": "VolvoMazda",
        "explanation": "Bạn cũng có thể truy cập phần tử đầu hoặc cuối của deque bằng .front() và .back():"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <deque>\nusing namespace std;\nint main() {\n  // Create a deque called cars that will store strings\n  deque<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n\n  // Get the second element\n     cout << cars.at(1);\n\n  // Get the third element\n     cout << cars.at(2);\n  return 0;\n}\n",
        "output": "BMWFord",
        "explanation": "Để truy cập phần tử tại chỉ mục xác định, dùng hàm .at() và chỉ số mục:"
      },
      {
        "title": "Ví dụ",
        "code": "// Create a deque called cars that will store strings\ndeque<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n\n// Try to access an element that does not exist (will throw an exception)\ncout << cars.at(6);",
        "output": "",
        "explanation": "Chạy thử và tự sửa code để cảm nhận cách nó hoạt động.",
        "runnable": false
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ dữ liệu hiệu quả bằng vector/map/set.",
      "Đọc ghi cấu hình, log, file dữ liệu."
    ],
    "notes": [
      "Lưu ý: kiểu của deque (string trong ví dụ) không đổi được sau khi khai báo.",
      "Lưu ý: .at() thường được ưa chuộng hơn ngoặc vuông [] vì nó báo lỗi nếu phần tử ngoài phạm vi:",
      "Mẹo: cũng có thể lặp qua deque bằng iterator - sẽ học thêm ở chương sau."
    ],
    "commonMistakes": [
      {
        "wrong": "Vòng lặp while không có câu lệnh làm thay đổi điều kiện.",
        "why": "Điều kiện không bao giờ sai → lặp vô hạn.",
        "correct": "Đảm bảo biến đếm/điều kiện thay đổi trong thân vòng lặp."
      },
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      }
    ],
    "keyTakeaways": [
      "Ở trang trước, bạn đã học rằng phần tử trong queue được thêm ở cuối và xóa ở đầu. Tuy nhiên, deque (hàng đợi hai đầu) li…",
      "Để dùng deque, phải include tệp header <deque>: // Include thư viện deque #include <deque> Tạo một Deque. Để tạo một deq…",
      "Nếu muốn thêm phần tử ngay khi khai báo, hãy đặt chúng trong danh sách phân tách dấu phẩy, nằm trong ngoặc nhọn {}:",
      "Lưu ý: kiểu của deque (string trong ví dụ) không đổi được sau khi khai báo."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_deque.asp"
  },
  {
    "id": "cpp-sets",
    "slug": "sets",
    "title": "std::set trong C++ (Tập hợp)",
    "titleEn": "C++ Sets",
    "num": 124,
    "chapter": "13 · STL & Containers",
    "topic": "STL & Files",
    "difficulty": "intermediate",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-deque"
    ],
    "description": "Set lưu các phần tử duy nhất, trong đó chúng:",
    "objectives": [
      "Nắm được: Bộ C++.",
      "Trình bày được: Bộ C++; Ví dụ; Sắp xếp Set theo thứ tự giảm dần.",
      "Chạy và sửa được 6 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Set lưu các phần tử duy nhất, trong đó chúng: Để dùng set, phải include tệp header <set>: // Include thư viện set #include <set> Tạo một Set. Để tạo một set, dùng từ khóa set, và chỉ định kiểu giá trị nó nên lưu trong ngoặc nhọn <> rồi tên của set, như: set<type> setName. Nếu muốn thêm phần tử ngay khi khai báo, hãy đặt chúng trong danh sách phân tách dấu phẩy, nằm trong ngoặc nhọn {}: Đầu ra sẽ là: Như kết quả trên cho thấy, các phần tử trong set được tự động sắp xếp. Trong trường hợp này là theo bảng chữ cái vì ta làm việc với chuỗi. Nếu lưu số nguyên vào set, giá trị trả về được sắp theo số: Đầu ra sẽ là: Lưu ý: kiểu của set (ví dụ string và int ở trên) không đổi được sau khi khai báo. Mặc định, phần tử trong set được sắp tăng dần. Muốn đảo thứ tự, dùng functor greater<type> trong cặp ngoặc nhọn, như sau: Đầu ra sẽ là: Lưu ý: kiểu chỉ định trong greater<type> phải khớp kiểu phần tử trong set (int trong ví dụ). Phần tử trong set là duy nhất, không được trùng hay bằng nhau. Ví dụ, nếu thêm \"BMW\" hai lần vào set, phần tử trùng sẽ bị bỏ qua: Đầu ra sẽ là: Để thêm phần tử vào set, bạn có thể dùng hàm .insert(): Để xóa phần tử cụ thể khỏi set, dùng hàm .erase(): Để xóa mọi phần tử khỏi set, dùng hàm .clear(): Để biết set có bao nhiêu phần tử, dùng hàm .size(): Dùng hàm .empty() để biết set có rỗng hay không. .empty() trả về 1 (true) nếu set rỗng, ngược lại 0 (false): Bạn có thể lặp qua set bằng vòng lặp for-each: Mẹo: cũng có thể lặp qua set bằng iterator - sẽ học thêm ở chương sau."
    },
    "sections": [
      "Bộ C++",
      "Ví dụ",
      "Sắp xếp Set theo thứ tự giảm dần",
      "Các yếu tố độc đáo",
      "Thêm phần tử",
      "Xóa phần tử",
      "Tìm kích thước của một bộ",
      "Kiểm tra xem một Tập hợp có trống không",
      "Lặp lại thông qua một tập hợp"
    ],
    "syntax": [
      {
        "code": "// Create a set called cars that will store strings\n   set<string> cars;",
        "explanation": "Để dùng set, phải include tệp header <set>: // Include thư viện set #include <set> Tạo một Set. Để tạo một set, dùng từ khóa set, và chỉ định kiểu giá trị nó nên lưu trong ngoặc nhọn <> rồi tên của set, như: set<type> setName."
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <string>\n#include <set>\nusing namespace std;\nint main() {\n  // Create a set called cars that will store strings\n     set<string> cars;\n  return 0;\n}\n",
        "output": "",
        "explanation": "Để dùng set, phải include tệp header <set>: // Include thư viện set #include <set> Tạo một Set. Để tạo một set, dùng từ khóa set, và chỉ định kiểu giá trị nó nên lưu trong ngoặc nhọn <> rồi tên của set, như: set<type> setName."
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <set>\nusing namespace std;\nint main() {\n  // Create a set called cars that will store strings\n     set<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n\n  // Print set elements\n     for (string car : cars) {\n    cout << car << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "BMW\nFord\nMazda\nVolvo",
        "explanation": "Nếu muốn thêm phần tử ngay khi khai báo, hãy đặt chúng trong danh sách phân tách dấu phẩy, nằm trong ngoặc nhọn {}:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <set>\nusing namespace std;\nint main() {\n  // Create a set called numbers that will store integers\n     set<int> numbers = {1, 7, 3, 2, 5, 9};\n\n  // Print set elements\n     for (int num : numbers) {\n    cout << num << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "1\n2\n3\n5\n7\n9",
        "explanation": "Nếu lưu số nguyên vào set, giá trị trả về được sắp theo số:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <set>\nusing namespace std;\nint main() {\n  // Sort elements in a set in descending order\n     set<int, greater<int>> numbers = {1, 7, 3, 2, 5, 9};\n  // Print the elements\n     for (int num : numbers) {\n    cout << num << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "9\n7\n5\n3\n2\n1",
        "explanation": "Mặc định, phần tử trong set được sắp tăng dần. Muốn đảo thứ tự, dùng functor greater<type> trong cặp ngoặc nhọn, như sau:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <set>\nusing namespace std;\nint main() {\n  set<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"BMW\", \"Mazda\"};\n\n  // Print set elements\n     for (string car : cars) {\n    cout << car << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "BMW\nFord\nMazda\nVolvo",
        "explanation": "Ví dụ, nếu thêm \"BMW\" hai lần vào set, phần tử trùng sẽ bị bỏ qua:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <string>\n#include <set>\nusing namespace std;\nint main() {\n  set<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n\n  // Add new elements\n  cars.insert(\"Tesla\");\n  cars.insert(\"VW\");\n  cars.insert(\"Toyota\");\n  cars.insert(\"Audi\");\n  return 0;\n}\n",
        "output": "",
        "explanation": "Để thêm phần tử vào set, bạn có thể dùng hàm .insert():"
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ dữ liệu hiệu quả bằng vector/map/set.",
      "Đọc ghi cấu hình, log, file dữ liệu."
    ],
    "notes": [
      "Lưu ý: kiểu của set (ví dụ string và int ở trên) không đổi được sau khi khai báo.",
      "Lưu ý: kiểu chỉ định trong greater<type> phải khớp kiểu phần tử trong set (int trong ví dụ).",
      "Mẹo: cũng có thể lặp qua set bằng iterator - sẽ học thêm ở chương sau."
    ],
    "commonMistakes": [
      {
        "wrong": "Vòng lặp while không có câu lệnh làm thay đổi điều kiện.",
        "why": "Điều kiện không bao giờ sai → lặp vô hạn.",
        "correct": "Đảm bảo biến đếm/điều kiện thay đổi trong thân vòng lặp."
      },
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      }
    ],
    "keyTakeaways": [
      "Set lưu các phần tử duy nhất, trong đó chúng:",
      "Để dùng set, phải include tệp header <set>: // Include thư viện set #include <set> Tạo một Set. Để tạo một set, dùng từ…",
      "Nếu muốn thêm phần tử ngay khi khai báo, hãy đặt chúng trong danh sách phân tách dấu phẩy, nằm trong ngoặc nhọn {}:",
      "Đầu ra sẽ là:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_sets.asp"
  },
  {
    "id": "cpp-maps",
    "slug": "maps",
    "title": "std::map trong C++ (Bảng ánh xạ Key-Value)",
    "titleEn": "C++ Maps",
    "num": 125,
    "chapter": "13 · STL & Containers",
    "topic": "STL & Files",
    "difficulty": "intermediate",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-sets"
    ],
    "description": "Map lưu phần tử theo cặp \"khóa/giá trị\".",
    "objectives": [
      "Nắm được: Bản đồ C++.",
      "Trình bày được: C) BẢN ĐỒ; Ví dụ; Truy cập bản đồ.",
      "Chạy và sửa được 6 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Map lưu phần tử theo cặp \"khóa/giá trị\". Các yếu tố trong bản đồ là: Để dùng map, phải include tệp header <map>: // Include thư viện map #include <map> Tạo một Map. Để tạo một map, dùng từ khóa map, và chỉ định kiểu của cả khóa lẫn giá trị nó nên lưu trong ngoặc nhọn <>. Cuối cùng, chỉ định tên của map, như: map<keytype, valuetype> mapName: Nếu muốn thêm phần tử ngay khi khai báo, hãy đặt chúng trong danh sách phân tách dấu phẩy, nằm trong ngoặc nhọn {}: Bạn không thể truy cập phần tử map bằng chỉ mục như với mảng và vector. Thay vào đó, bạn truy cập phần tử map bằng khóa trong ngoặc vuông []: Bạn cũng có thể truy cập phần tử bằng hàm .at(): Lưu ý: .at() thường được ưa chuộng hơn ngoặc vuông [] vì nó báo lỗi nếu phần tử không tồn tại: Bạn cũng có thể đổi giá trị ứng với một khóa: Tuy nhiên, dùng hàm .at() an toàn hơn: Để thêm phần tử vào map, có thể dùng ngoặc vuông []: Nhưng bạn cũng có thể dùng hàm .insert(): Map không được có phần tử trùng khóa (key). Ví dụ, nếu thêm \"Jenny\" hai lần vào map, chỉ giữ lại bản đầu tiên: Tóm lại: giá trị có thể trùng, nhưng khóa phải duy nhất. Để xóa phần tử cụ thể khỏi map, dùng hàm .erase(): Để xóa mọi phần tử khỏi map, dùng hàm .clear(): Để biết map có bao nhiêu phần tử, dùng hàm .size(): Dùng hàm .empty() để biết map có rỗng hay không. .empty() trả về 1 (true) nếu map rỗng, ngược lại 0 (false): Lưu ý: cũng có thể kiểm tra một phần tử cụ thể tồn tại bằng .count( key ). Hàm trả về 1 (true) nếu phần tử tồn tại, ngược lại 0 (false): Bạn có thể lặp qua map bằng for-each. Tuy nhiên, có vài điều cần lưu ý: Đầu ra sẽ là: Nếu muốn đảo thứ tự, hãy dùng functor greater<type> trong cặp ngoặc nhọn, như sau: Đầu ra sẽ là: Mẹo: cũng có thể lặp qua map bằng iterator - sẽ học thêm ở chương tiếp theo."
    },
    "sections": [
      "C) BẢN ĐỒ",
      "Ví dụ",
      "Truy cập bản đồ",
      "Thay đổi giá trị",
      "Thêm phần tử",
      "Các phần tử có các khóa bằng nhau",
      "Xóa phần tử",
      "Tìm kích thước của bản đồ",
      "Kiểm tra xem Bản đồ có trống không",
      "Lặp qua bản đồ"
    ],
    "syntax": [
      {
        "code": "// Create a map that will store the name and age of different people\n   map<string, int> people = { {\"John\", 32}, {\"Adele\", 45}, {\"Bo\", 29} };",
        "explanation": "Nếu muốn thêm phần tử ngay khi khai báo, hãy đặt chúng trong danh sách phân tách dấu phẩy, nằm trong ngoặc nhọn {}:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <string>\n#include <map>\nusing namespace std;\nint main() {\n  // Create a map that will store the name and age of different people\n     map<string, int> people = { {\"John\", 32}, {\"Adele\", 45}, {\"Bo\", 29} };\n  return 0;\n}\n",
        "output": "",
        "explanation": "Nếu muốn thêm phần tử ngay khi khai báo, hãy đặt chúng trong danh sách phân tách dấu phẩy, nằm trong ngoặc nhọn {}:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <map>\nusing namespace std;\nint main() {\n  // Create a map that will store the name and age of different people\n     map<string, int> people = { {\"John\", 32}, {\"Adele\", 45}, {\"Bo\", 29} };\n\n     // Get the value associated with the key \"John\"\n  cout << \"John is: \" << people[\"John\"] << \"\\n\";\n\n  // Get the value associated with the key \"Adele\"\n  cout << \"Adele is: \" << people[\"Adele\"] << \"\\n\";\n  return 0;\n}\n",
        "output": "John is: 32\nAdele is: 45",
        "explanation": "Thay vào đó, bạn truy cập phần tử map bằng khóa trong ngoặc vuông []:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <map>\nusing namespace std;\nint main() {\n  // Create a map that will store the name and age of different people\n     map<string, int> people = { {\"John\", 32}, {\"Adele\", 45}, {\"Bo\", 29} };\n\n   // Get the value associated with the key \"Adele\"\n  cout << \"Adele is: \" <<   people.at(\"Adele\") << \"\\n\";\n\n  // Get the value associated with the key \"Bo\"\n  cout << \"Bo is: \" << people.at(\"Bo\") << \"\\n\";\n  return 0;\n}\n",
        "output": "Adele is: 45\nBo is: 29",
        "explanation": "Bạn cũng có thể truy cập phần tử bằng hàm .at():"
      },
      {
        "title": "Ví dụ",
        "code": "// Create a map that will store the name and age of different people\n   map<string, int> people = { {\"John\", 32}, {\"Adele\", 45}, {\"Bo\", 29} };\n\n// Try to access an element that does not exist (will throw an exception)\ncout << people.at(\"Jenny\");",
        "output": "",
        "explanation": "Chạy thử và tự sửa code để cảm nhận cách nó hoạt động.",
        "runnable": false
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <map>\nusing namespace std;\nint main() {\n  map<string, int> people = { {\"John\", 32}, {\"Adele\", 45}, {\"Bo\", 29} };\n\n     // Change John's value to 50 instead of 32\n  people[\"John\"] = 50;\n\n     cout << \"John is: \" << people[\"John\"];  // Now outputs John is: 50\n  return 0;\n}\n",
        "output": "John is: 50",
        "explanation": "Bạn cũng có thể đổi giá trị ứng với một khóa:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <map>\nusing namespace std;\nint main() {\n  map<string, int> people = { {\"John\", 32}, {\"Adele\", 45}, {\"Bo\", 29} };\n\n     // Change John's value to 50 instead of 32\n  people.at(\"John\") = 50;\n\n     cout << \"John is: \" << people.at(\"John\");  // Now outputs John is: 50\n  return 0;\n}\n",
        "output": "John is: 50",
        "explanation": "Tuy nhiên, dùng hàm .at() an toàn hơn:"
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ dữ liệu hiệu quả bằng vector/map/set.",
      "Đọc ghi cấu hình, log, file dữ liệu."
    ],
    "notes": [
      "Lưu ý: .at() thường được ưa chuộng hơn ngoặc vuông [] vì nó báo lỗi nếu phần tử không tồn tại:",
      "Lưu ý: cũng có thể kiểm tra một phần tử cụ thể tồn tại bằng .count( key ).",
      "Mẹo: cũng có thể lặp qua map bằng iterator - sẽ học thêm ở chương tiếp theo."
    ],
    "commonMistakes": [
      {
        "wrong": "Vòng lặp while không có câu lệnh làm thay đổi điều kiện.",
        "why": "Điều kiện không bao giờ sai → lặp vô hạn.",
        "correct": "Đảm bảo biến đếm/điều kiện thay đổi trong thân vòng lặp."
      },
      {
        "wrong": "Truy cập phần tử ngoài chỉ mục hợp lệ (ví dụ arr[5] cho mảng 5 phần tử).",
        "why": "Chỉ mục hợp lệ là 0..n-1; vượt biên là undefined behavior.",
        "correct": "Duyệt i từ 0 đến n-1."
      }
    ],
    "keyTakeaways": [
      "Map lưu phần tử theo cặp \"khóa/giá trị\".",
      "Các yếu tố trong bản đồ là:",
      "Để dùng map, phải include tệp header <map>: // Include thư viện map #include <map> Tạo một Map. Để tạo một map, dùng từ…",
      "Nếu muốn thêm phần tử ngay khi khai báo, hãy đặt chúng trong danh sách phân tách dấu phẩy, nằm trong ngoặc nhọn {}:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_maps.asp"
  },
  {
    "id": "cpp-iterators",
    "slug": "iterators",
    "title": "std::iterator trong C++ (Bộ lặp)",
    "titleEn": "C++ Iterators",
    "num": 126,
    "chapter": "13 · STL & Containers",
    "topic": "STL & Files",
    "difficulty": "intermediate",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-maps"
    ],
    "description": "Iterator dùng để truy cập và lặp qua phần tử của cấu trúc dữ liệu (vector, set, v.v.) bằng cách \"trỏ\" vào chúng.",
    "objectives": [
      "Nắm được: Bộ lặp C++.",
      "Trình bày được: Bộ lặp C++; Ví dụ; begin() và end() là gì?.",
      "Chạy và sửa được 6 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Iterator dùng để truy cập và lặp qua phần tử của cấu trúc dữ liệu (vector, set, v.v.) bằng cách \"trỏ\" vào chúng. Nó gọi là \"iterator\" vì \"iterating\" là thuật ngữ kỹ thuật chỉ việc lặp. Để lặp qua vector, xem ví dụ sau: Lưu ý: kiểu của iterator phải khớp kiểu cấu trúc dữ liệu nó duyệt qua (string trong ví dụ) begin() và end() là hàm thuộc về cấu trúc dữ liệu như vector và list. Chúng không thuộc về bản thân iterator. Để hiểu chúng hoạt động, ta tiếp tục dùng vector làm ví dụ: begin() trỏ đến phần tử đầu của vector (chỉ mục 0, là \"Volvo\"): Để trỏ tới phần tử thứ hai (BMW), viết cars.begin() + 1: Và tất nhiên, điều đó cũng có nghĩa là bạn có thể trỏ tới phần tử thứ ba bằng cars.begin() + 2: end() trỏ tới vị trí ngay sau phần tử cuối của vector (nghĩa là không trỏ vào phần tử thật, mà báo hiệu đây là cuối vector). Vậy để dùng end() trỏ tới phần tử cuối của vector cars (Mazda), dùng cars.end() - 1: Tại sao chúng ta nói \"điểm\"? Iterator giống như \"con trỏ\" ở chỗ chúng \"trỏ\" vào các phần tử của cấu trúc dữ liệu thay vì trả về giá trị từ chúng. Chúng chỉ đến một vị trí cụ thể, cung cấp cách truy cập và sửa giá trị khi cần, mà không tạo bản sao. Từ C++11 trở đi, bạn có thể dùng auto thay vì khai báo tường minh kiểu của iterator. Từ khóa auto cho phép trình biên dịch tự động xác định đúng kiểu dữ liệu, giúp mã đơn giản và dễ đọc hơn: để thế cho cái này Bạn có thể viết đơn giản như sau: Ở ví dụ trên, trình biên dịch biết kiểu của it dựa vào kiểu trả về của cars.begin(), tức vector<string>::iterator. Từ khóa auto cũng hoạt động trong vòng lặp for: Bạn có thể dùng for-each chỉ để lặp qua phần tử của cấu trúc dữ liệu: Khi chỉ đọc phần tử và không cần sửa, for-each đơn giản và gọn hơn iterator nhiều. Tuy nhiên, khi cần thêm, sửa hoặc xóa phần tử trong lúc lặp, lặp theo thứ tự ngược, hoặc bỏ qua phần tử, hãy dùng iterator: Để lặp theo thứ tự đảo ngược, dùng rbegin() và rend() thay cho begin() và end(): Iterator rất tốt cho tái sử dụng code vì bạn dùng cùng cú pháp để lặp qua vector, list, deque, set và map: Các ví dụ trên cho thấy cách lặp qua những cấu trúc dữ liệu hỗ trợ iterator (vector, list, deque, map và set hỗ trợ; stack và queue thì không). Một tính năng quan trọng khác của iterator là dùng với các hàm thuật toán như sort() và find() (trong thư viện <algorithm>) để sắp xếp và tìm phần tử trong cấu trúc dữ liệu. Ví dụ, hàm sort() nhận các iterator (thường do begin() và end() trả về) làm tham số để sắp xếp phần tử trong cấu trúc dữ liệu từ đầu đến cuối. Ví dụ này các phần tử được sắp theo bảng chữ cái vì chúng là chuỗi: Còn ví dụ này, các phần tử được sắp theo số vì chúng là số nguyên: Để đảo thứ tự, dùng rbegin() và rend() thay cho begin() và end():"
    },
    "sections": [
      "Bộ lặp C++",
      "Ví dụ",
      "begin() và end() là gì?",
      "Bắt đầu Ví dụ",
      "Ví dụ kết thúc",
      "Từ khóa tự động",
      "Vòng lặp For-Each so với Iterator",
      "Lặp lại theo chiều ngược lại",
      "Lặp qua các cấu trúc dữ liệu khác",
      "Ví dụ về bản đồ",
      "Thuật toán"
    ],
    "syntax": [
      {
        "code": "// Create a vector called cars that will store strings\nvector<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n\n// Create a vector iterator called it\n   vector<string>::iterator it;\n\n// Loop through the vector with the iterator\n   for (it = cars.begin(); it != cars.end(); ++it) {\n  cout << *it << \"\\n\";\n}",
        "explanation": "Để lặp qua vector, xem ví dụ sau:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\nint main() {\n  // Create a vector called cars that will store strings\n  vector<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n\n  // Create a vector iterator called it\n     vector<string>::iterator it;\n\n  // Loop through the vector with the iterator\n     for (it = cars.begin(); it != cars.end(); ++it) {\n    cout << *it << \"\\n\";\n  }\n  return 0;\n}\n",
        "output": "Volvo\nBMW\nFord\nMazda",
        "explanation": "Để lặp qua vector, xem ví dụ sau:"
      },
      {
        "title": "begin() và end() là gì?",
        "code": "#include <string>\n#include <vector>\nusing namespace std;\nint main() {\n  vector<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n\n  vector<string>::iterator it;\n  return 0;\n}\n",
        "output": "",
        "explanation": "Để hiểu chúng hoạt động, ta tiếp tục dùng vector làm ví dụ:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <vector>\n\nusing namespace std;\n\nint main() {\n  vector<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n  vector<string>::iterator it;\n  it = cars.begin();\n  cout << *it;\n  return 0;\n}\n",
        "output": "Volvo",
        "explanation": "begin() trỏ đến phần tử đầu của vector (chỉ mục 0, là \"Volvo\"):",
        "input": ""
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <vector>\n\nusing namespace std;\n\nint main() {\n  vector<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n  vector<string>::iterator it;\n  it = cars.begin() + 1;\n  cout << *it;\n  return 0;\n}\n",
        "output": "BMW",
        "explanation": "Để trỏ tới phần tử thứ hai (BMW), viết cars.begin() + 1:",
        "input": ""
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <vector>\n\nusing namespace std;\n\nint main() {\n  vector<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n  vector<string>::iterator it;\n  it = cars.begin() + 2;\n  cout << *it;\n  return 0;\n}\n",
        "output": "Ford",
        "explanation": "Và tất nhiên, điều đó cũng có nghĩa là bạn có thể trỏ tới phần tử thứ ba bằng cars.begin() + 2:",
        "input": ""
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n#include <vector>\n\nusing namespace std;\n\nint main() {\n  vector<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n  vector<string>::iterator it;\n  it = cars.end() - 1;\n  cout << *it;\n  return 0;\n}\n",
        "output": "Mazda",
        "explanation": "Vậy để dùng end() trỏ tới phần tử cuối của vector cars (Mazda), dùng cars.end() - 1:",
        "input": ""
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ dữ liệu hiệu quả bằng vector/map/set.",
      "Đọc ghi cấu hình, log, file dữ liệu."
    ],
    "notes": [
      "Lưu ý: kiểu của iterator phải khớp kiểu cấu trúc dữ liệu nó duyệt qua (string trong ví dụ)"
    ],
    "commonMistakes": [
      {
        "wrong": "Vòng lặp while không có câu lệnh làm thay đổi điều kiện.",
        "why": "Điều kiện không bao giờ sai → lặp vô hạn.",
        "correct": "Đảm bảo biến đếm/điều kiện thay đổi trong thân vòng lặp."
      },
      {
        "wrong": "Dùng con trỏ chưa khởi tạo hoặc đã delete.",
        "why": "Trỏ vào vùng nhớ rác gây crash hoặc dữ liệu sai khó tìm.",
        "correct": "Khởi tạo nullptr, kiểm tra trước khi dereference, set nullptr sau delete."
      }
    ],
    "keyTakeaways": [
      "Iterator dùng để truy cập và lặp qua phần tử của cấu trúc dữ liệu (vector, set, v.v.) bằng cách \"trỏ\" vào chúng.",
      "Nó gọi là \"iterator\" vì \"iterating\" là thuật ngữ kỹ thuật chỉ việc lặp.",
      "Để lặp qua vector, xem ví dụ sau:",
      "Lưu ý: kiểu của iterator phải khớp kiểu cấu trúc dữ liệu nó duyệt qua (string trong ví dụ)"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_iterators.asp"
  },
  {
    "id": "cpp-algorithms",
    "slug": "algorithms",
    "title": "Thuật toán STL (STL Algorithms)",
    "titleEn": "C++ Algorithms",
    "num": 127,
    "chapter": "13 · STL & Containers",
    "topic": "STL & Files",
    "difficulty": "intermediate",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-iterators"
    ],
    "description": "Ở các chương trước, bạn đã biết cấu trúc dữ liệu (vector, list, v.v.) dùng để lưu và tổ chức dữ liệu.",
    "objectives": [
      "Nắm được: Thuật toán C++.",
      "Trình bày được: Thuật toán C++; Thuật toán phân loại; Ví dụ.",
      "Chạy và sửa được 6 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Ở các chương trước, bạn đã biết cấu trúc dữ liệu (vector, list, v.v.) dùng để lưu và tổ chức dữ liệu. Thuật toán giải quyết vấn đề bằng cách sắp xếp, tìm kiếm và thao tác cấu trúc dữ liệu. Thư viện <algorithm> cung cấp nhiều hàm hữu ích để làm các việc này với iterator. Để dùng các hàm này, phải include tệp header <algorithm>: Để sắp xếp phần tử trong cấu trúc dữ liệu, dùng hàm sort(). Hàm sort() nhận các iterator (thường là iterator đầu từ begin() trả về và iterator cuối từ end() trả về) làm tham số: Mặc định, các phần tử được sắp xếp theo thứ tự tăng dần. Ở ví dụ trên, các phần tử được sắp theo bảng chữ cái vì chúng là chuỗi. Nếu là vector số nguyên, chúng sẽ được sắp theo giá trị số: Để đảo thứ tự, dùng rbegin() và rend() thay cho begin() và end(): Để chỉ sắp xếp một số phần tử, bạn có thể viết: Để tìm phần tử cụ thể trong vector, dùng hàm find(). Hàm nhận ba tham số: start_iterator, end_iterator, value - trong đó value là giá trị cần tìm: Tìm số 3 trong \"numbers\": Để tìm phần tử đầu tiên lớn hơn một giá trị cụ thể, dùng hàm upper_bound(): Tìm giá trị đầu tiên lớn hơn 5 trong \"numbers\": upper_bound() thường dùng cho cấu trúc đã sắp xếp. Vì vậy ta sắp xếp vector trước trong ví dụ trên. Để tìm phần tử nhỏ nhất trong vector, dùng hàm min_element(): Để tìm phần tử lớn nhất, dùng hàm max_element(): Để sao chép phần tử từ vector này sang vector khác, dùng hàm copy(): Sao chép phần tử từ vector này sang vector khác: Để lấp đầy mọi phần tử vector bằng một giá trị, dùng hàm fill(): Điền giá trị 35 cho mọi phần tử của vector numbers: Tham chiếu đầy đủ các hàm algorithm: xem C++ Algorithm Reference."
    },
    "sections": [
      "Thuật toán C++",
      "Thuật toán phân loại",
      "Ví dụ",
      "Tìm kiếm thuật toán",
      "Sửa đổi thuật toán",
      "Tham chiếu Algorithm đầy đủ"
    ],
    "syntax": [
      {
        "code": "// Include the algorithm library\n#include <algorithm>",
        "explanation": "Để dùng các hàm này, phải include tệp header <algorithm>:"
      }
    ],
    "examples": [
      {
        "title": "Thuật toán C++",
        "code": "#include <algorithm>\n\nint main() {\n  // Include the algorithm library\n  return 0;\n}\n",
        "output": "",
        "explanation": "Để dùng các hàm này, phải include tệp header <algorithm>:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <string>\n#include <vector>\n#include <algorithm>\nusing namespace std;\nint main() {\n  // Create a vector called cars that will store strings\n  vector<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};\n\n  // Sort cars alphabetically\n  sort(cars.begin(), cars.end());\n  return 0;\n}\n",
        "output": "",
        "explanation": "Hàm sort() nhận các iterator (thường là iterator đầu từ begin() trả về và iterator cuối từ end() trả về) làm tham số:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <vector>\n#include <algorithm>\nusing namespace std;\nint main() {\n  // Create a vector called numbers that will store integers\n  vector<int> numbers = {1, 7, 3, 5, 9, 2};\n\n  // Sort numbers numerically\n  sort(numbers.begin(), numbers.end());\n  return 0;\n}\n",
        "output": "",
        "explanation": "Nếu là vector số nguyên, chúng sẽ được sắp theo giá trị số:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <vector>\n#include <algorithm>\nusing namespace std;\nint main() {\n  // Create a vector called numbers that will store integers\n  vector<int> numbers = {1, 7, 3, 5, 9, 2};\n\n  // Sort numbers numerically in reverse order\n  sort(numbers.rbegin(), numbers.rend());\n  return 0;\n}\n",
        "output": "",
        "explanation": "Để đảo thứ tự, dùng rbegin() và rend() thay cho begin() và end():"
      },
      {
        "title": "Ví dụ",
        "code": "#include <vector>\n#include <algorithm>\nusing namespace std;\nint main() {\n  // Create a vector called numbers that will store integers\n  vector<int> numbers = {1, 7, 3, 5, 9, 2};\n\n  // Sort numbers numerically, starting from the fourth element (only sort 5, 9, and 2)\n  sort(numbers.begin() + 3, numbers.end());\n  return 0;\n}\n",
        "output": "",
        "explanation": "Để chỉ sắp xếp một số phần tử, bạn có thể viết:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n\nusing namespace std;\n\nint main() {\n  vector<int> nums = {1, 7, 3, 5, 9, 2};\n  auto it = find(nums.begin(), nums.end(), 3);\n  if (it != nums.end()) cout << \"Tim thay 3 tai vi tri \" << (it - nums.begin());\n  return 0;\n}\n",
        "output": "Tim thay 3 tai vi tri 2",
        "explanation": "Tìm số 3 trong \"numbers\":",
        "input": ""
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ dữ liệu hiệu quả bằng vector/map/set.",
      "Đọc ghi cấu hình, log, file dữ liệu."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      },
      {
        "wrong": "Quên #include <string> khi dùng std::string.",
        "why": "string không phải kiểu dựng sẵn — thiếu header sẽ không biên dịch.",
        "correct": "#include <string> rồi mới dùng string."
      }
    ],
    "keyTakeaways": [
      "Ở các chương trước, bạn đã biết cấu trúc dữ liệu (vector, list, v.v.) dùng để lưu và tổ chức dữ liệu.",
      "Thuật toán giải quyết vấn đề bằng cách sắp xếp, tìm kiếm và thao tác cấu trúc dữ liệu.",
      "Thư viện <algorithm> cung cấp nhiều hàm hữu ích để làm các việc này với iterator.",
      "Để dùng các hàm này, phải include tệp header <algorithm>:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_algorithms.asp"
  },
  {
    "id": "cpp-namespaces",
    "slug": "namespaces",
    "title": "Không gian tên (Namespaces)",
    "titleEn": "C++ Namespaces",
    "num": 128,
    "chapter": "13 · STL & Containers",
    "topic": "STL & Files",
    "difficulty": "intermediate",
    "estimatedTime": 17,
    "prerequisites": [
      "cpp-algorithms"
    ],
    "description": "Namespace là cách gom các đoạn mã liên quan dưới một tên. Nó giúp tránh xung đột tên khi code lớn dần hoặc khi dùng mã từ nhiều nguồn.",
    "objectives": [
      "Nắm được: Không gian tên C++.",
      "Trình bày được: Miền tên; Ví dụ về Không gian tên Cơ bản; Từ khóa using namespace.",
      "Chạy và sửa được 4 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Namespace là cách gom các đoạn mã liên quan dưới một tên. Nó giúp tránh xung đột tên khi code lớn dần hoặc khi dùng mã từ nhiều nguồn. Hãy nghĩ namespace như một thư mục: bạn có thể đặt biến x trong hai thư mục khác nhau mà không đụng độ. Ở đây ta khai báo biến x trong namespace tên MyNamespace: Ta dùng MyNamespace::x để truy cập biến trong namespace. Nếu không muốn viết tên namespace mỗi lần truy cập biến, hãy dùng từ khóa using: Tuy nhiên, hãy cẩn thận: trong chương trình lớn, dùng using namespace có thể gây xung đột tên. Thường nên dùng tên đầy đủ như MyNamespace::x. Trong C++, những thứ như cout, cin, endl thuộc Standard Library. Tất cả những thứ này thuộc về một namespace tên std, viết tắt của standard. Nghĩa là thông thường bạn phải viết std::cout, std::cin, cứ tiếp tục như vậy. Để code ngắn hơn, thêm: using namespace std; Cách này cho phép dùng cout, cin và endl mà không cần viết std:: mỗi lần. Bạn phải gõ std:: trước cout. Bây giờ bạn có thể dùng cout mà không cần viết std:: mỗi lần. Với chương trình nhỏ và khi học, dùng using namespace std là ổn. Nhưng trong dự án lớn, nên viết std:: trước mỗi mục. Điều này tránh xung đột nếu các thư viện khác nhau có hàm hoặc biến trùng tên. Tóm lại: using namespace std; hữu ích cho người mới, nhưng hãy thận trọng trong chương trình lớn."
    },
    "sections": [
      "Miền tên",
      "Ví dụ về Không gian tên Cơ bản",
      "Từ khóa using namespace",
      "Không gian tên std",
      "Bạn có nên luôn sử dụng nó không?"
    ],
    "syntax": [
      {
        "code": "namespace MyNamespace {\n   int x = 42;\n }\n\n  int main() {\n   cout << MyNamespace::x;\n   return 0;\n }",
        "explanation": "Ở đây ta khai báo biến x trong namespace tên MyNamespace:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ về Không gian tên Cơ bản",
        "code": "#include <iostream>\nusing namespace std;\nnamespace MyNamespace {\n   int x = 42;\n }\n\n  int main() {\n   cout << MyNamespace::x;\n   return 0;\n }",
        "output": "42",
        "explanation": "Ở đây ta khai báo biến x trong namespace tên MyNamespace:"
      },
      {
        "title": "Từ khóa using namespace",
        "code": "#include <iostream>\nusing namespace std;\nnamespace MyNamespace {\n  int x = 42;\n}\n\nusing namespace MyNamespace;\n\nint main() {\n  cout << x;  // No need to write MyNamespace::x\n  return 0;\n}",
        "output": "42",
        "explanation": "Nếu không muốn viết tên namespace mỗi lần truy cập biến, hãy dùng từ khóa using:"
      },
      {
        "title": "Không gian tên std",
        "code": "#include <iostream>\n\n int main() {\n   std::cout << \"Hello World!\\n\";\n   return 0;\n }",
        "output": "Hello World!",
        "explanation": "Để code ngắn hơn, thêm: using namespace std; Cách này cho phép dùng cout, cin và endl mà không cần viết std:: mỗi lần."
      },
      {
        "title": "Không gian tên std",
        "code": "#include <iostream>\n using namespace std;\n\n int main() {\n   cout << \"Hello World!\\n\";\n   return 0;\n }",
        "output": "Hello World!",
        "explanation": "Bạn phải gõ std:: trước cout."
      }
    ],
    "tables": [],
    "useCases": [
      "Lưu trữ dữ liệu hiệu quả bằng vector/map/set.",
      "Đọc ghi cấu hình, log, file dữ liệu."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      }
    ],
    "keyTakeaways": [
      "Namespace là cách gom các đoạn mã liên quan dưới một tên. Nó giúp tránh xung đột tên khi code lớn dần hoặc khi dùng mã t ừ nhiều nguồn.…",
      "Hãy nghĩ namespace như một thư mục: bạn có thể đặt biến x trong hai thư mục khác nhau mà không đụng độ.",
      "Ở đây ta khai báo biến x trong namespace tên MyNamespace:",
      "Ta dùng MyNamespace::x để truy cập biến trong namespace."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_namespaces.asp"
  },
  {
    "id": "cpp-projects",
    "slug": "projects",
    "title": "Dự án và ứng dụng thực hành C++ (Projects)",
    "titleEn": "C++ Projects and Practical Applications",
    "num": 129,
    "chapter": "14 · Dự án & Chứng chỉ",
    "topic": "Modern C++",
    "difficulty": "intermediate",
    "estimatedTime": 8,
    "prerequisites": [],
    "description": "Học cách áp dụng kiến thức C++ vào dự án thực tế.",
    "objectives": [
      "Nắm được: Dự án và ứng dụng thực hành trong C++.",
      "Trình bày được: Dự án và ứng dụng thực hành; Tại sao nên xây dựng dự án?; Ví dụ về dự án.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Học cách áp dụng kiến thức C++ vào dự án thực tế. Trong phần này, ta sẽ xây dựng các ứng dụng nhỏ bằng những tính năng đã học suốt hướng dẫn. Dự án là phần thiết yếu khi học C++. Hãy bắt đầu nhỏ và thêm dần tính năng: Mẹo: càng thực hành nhiều, bạn càng hiểu sâu. Một vài dự án C++ thú vị có thể là: Hãy tạo chương trình tính điểm trung bình từ nhiều kết quả của học sinh. Chương trình yêu cầu người dùng nhập từ 1 đến 5 điểm và tính điểm trung bình. Sau đó hiển thị giá trị trung bình và xếp hạng chữ cái tương ứng (A đến F): Sản phẩm mẫu Khái niệm sử dụng: vòng lặp, hàm, điều kiện, xử lý nhập và logic cơ bản. Hãy tự làm dự án. Ví dụ, viết chương trình mà: Mở CodeBlocks hoặc IDE C++ tương tự và tự thử nghiệm! Hãy bắt đầu nhỏ. Thêm từng tính năng một. Mẹo: chúng tôi cũng đã tổng hợp một bộ dự án đơn giản ở trang Real Life Examples."
    },
    "sections": [
      "Dự án và ứng dụng thực hành",
      "Tại sao nên xây dựng dự án?",
      "Ví dụ về dự án",
      "Dự án: tính điểm trung bình của học sinh",
      "Ví dụ",
      "Thử thách thực hành"
    ],
    "syntax": [
      {
        "code": "// This function returns a letter grade based on the average of a student\nchar gradeFunction(double avg) {\n  if (avg >= 90) return 'A';\n  else if (avg >= 80) return 'B';\n  else if (avg >= 70) return 'C';\n  else if (avg >= 60) return 'D';\n  else return 'F';\n}\n\nint main() {\n  int count; // Number of grades the user wants to enter\n  double sum = 0, grade; // Sum stores total grades, grade holds each input\n\n  // Ask the user to enter total grades between 1 to 5\n  cout << \"How many grades (1 to 5)? \";\n  cin >> count;\n\n  // Validate that count is between 1 and 5\n  if (count < 1 || count > 5) {\n    cout << \"Invalid number. You must enter between 1 and 5 grades.\\n\";\n    return 1;  // Exit\n  }\n\n  // Loop to collect each grade\n  for (int i = 1; i <= count; i++) {\n    cout << \"Enter grade \" << i << \": \";\n    cin >> grade;\n    sum += grade;\n  }\n\n  // Calculate the average score\n  double avg = sum / count;\n\n  // Display numeric average\n  cout << \"Average: \" << avg << \"\\n\";\n\n  // Display letter grade\n  cout << \"Letter grade: \" << gradeFunction(avg) << \"\\n\";\n\n  return 0;\n}",
        "explanation": "Chương trình yêu cầu người dùng nhập từ 1 đến 5 điểm và tính điểm trung bình. Sau đó hiển thị giá trị trung bình và xếp hạng chữ cái tương ứng (A đến F):"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\nchar gradeFunction(double avg) {\n  if (avg >= 90) return 'A';\n  else if (avg >= 80) return 'B';\n  else if (avg >= 70) return 'C';\n  else if (avg >= 60) return 'D';\n  else return 'F';\n}\n\nint main() {\n  int count;\n  double sum = 0, grade;\n\n  cout << \"How many grades (1 to 5)? \";\n  cin >> count;\n\n  if (count < 1 || count > 5) {\n    cout << \"Invalid number. You must enter between 1 and 5 grades.\\n\";\n    return 1;\n  }\n\n  for (int i = 1; i <= count; i++) {\n    cout << \"Enter grade \" << i << \": \";\n    cin >> grade;\n    sum += grade;\n  }\n\n  double avg = sum / count;\n  cout << \"Average: \" << avg << \"\\n\";\n  cout << \"Letter grade: \" << gradeFunction(avg) << \"\\n\";\n  return 0;\n}\n",
        "output": "How many grades (1 to 5)? Enter grade 1: Enter grade 2: Enter grade 3: Average: 80\nLetter grade: B",
        "explanation": "Chương trình yêu cầu người dùng nhập từ 1 đến 5 điểm và tính điểm trung bình. Sau đó hiển thị giá trị trung bình và xếp hạng chữ cái tương ứng (A đến F):",
        "input": "3 90 80 70"
      }
    ],
    "tables": [],
    "useCases": [
      "Viết code hiện đại an toàn hơn.",
      "Dự án C++ thực tế."
    ],
    "notes": [
      "Mẹo: càng thực hành nhiều, bạn càng hiểu sâu.",
      "Mẹo: chúng tôi cũng đã tổng hợp một bộ dự án đơn giản ở trang Real Life Examples."
    ],
    "commonMistakes": [
      {
        "wrong": "Viết if (x = 5) thay vì if (x == 5).",
        "why": "Dấu = là gán, == mới là so sánh; gán trong if luôn cho kết quả true.",
        "correct": "if (x == 5) { ... }"
      },
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      }
    ],
    "keyTakeaways": [
      "Học cách áp dụng kiến thức C++ vào dự án thực tế.",
      "Trong phần này, ta sẽ xây dựng các ứng dụng nhỏ bằng những tính năng đã học suốt hướng dẫn.",
      "Dự án là phần thiết yếu khi học C++. Hãy bắt đầu nhỏ và thêm dần tính năng:",
      "Mẹo: càng thực hành nhiều, bạn càng hiểu sâu."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_projects.asp"
  },
  {
    "id": "cpp-exam",
    "slug": "exam",
    "title": "Ôn tập kiến thức & Chứng chỉ C++",
    "titleEn": "C++ Certification",
    "num": 130,
    "chapter": "14 · Dự án & Chứng chỉ",
    "topic": "Modern C++",
    "difficulty": "intermediate",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-projects"
    ],
    "description": "Hãy chuẩn bị trực tuyến theo nhịp của bạn, thi khi sẵn sàng, và thêm một chứng chỉ đã xác minh vào CV, hồ sơ LinkedIn và portfolio.",
    "objectives": [
      "Nắm được: Chứng nhận C++.",
      "Trình bày được: Nền tảng học tập đáng tin cậy; Giá cả phải chăng và linh hoạt; Nhận chứng chỉ và chia sẻ nó.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Hãy chuẩn bị trực tuyến theo nhịp của bạn, thi khi sẵn sàng, và thêm một chứng chỉ đã xác minh vào CV, hồ sơ LinkedIn và portfolio. Thiết kế cho sinh viên, lập trình viên và chuyên gia muốn chứng minh kiến thức một cách thực tế. Mọi sinh viên hoặc người làm lĩnh vực kỹ thuật số đều có thể hưởng lợi từ việc chứng nhận kỹ năng. Chứng chỉ giúp thể hiện kiến thức với nhà tuyển dụng hiện tại hoặc tương lai, khách hàng và cộng sự trong thị trường ngày càng cạnh tranh. W3Schools có hơn hai thập kỷ kinh nghiệm dạy lập trình trực tuyến. Chứng chỉ của chúng tôi cung cấp cách thực tế và chuyên nghiệp để thể hiện kỹ năng ở định dạng dễ xác minh và chia sẻ. Học phí chỉ bằng một phần nhỏ so với giáo dục truyền thống. Bạn có thể tự ôn theo lịch của mình và thi khi sẵn sàng. Mỗi chứng chỉ kèm liên kết xác minh duy nhất, có thể chia sẻ với nhà tuyển dụng và khách hàng. Tải chứng chỉ về để khoe, và xác thực bằng liên kết hoặc mã QR duy nhất. Xem cách trình bày trong ví dụ này. Có câu hỏi? Gửi email: sales@w3schools.com Nhận chứng chỉ thể hiện cam kết nâng cao kỹ năng của bạn. Bạn có thể thêm chứng chỉ vào CV, hồ sơ, LinkedIn và các nền tảng nghề nghiệp khác. Nó hỗ trợ phát triển nghề nghiệp bằng cách giúp bạn thể hiện kiến thức khi xin việc, làm tự do hoặc nhận dự án lớn. Nhận chứng chỉ thể hiện sự chủ động, giúp xây dựng uy tín và trình bày kiến thức HTML một cách chuyên nghiệp. Bạn là nhà giáo dục, quản lý hoặc chủ doanh nghiệp tìm khóa học/chứng chỉ cho nhóm? chúng ta hợp tác với trường học, doanh nghiệp và tổ chức toàn cầu. Gửi email cho chúng tôi: sales@w3schools.com"
    },
    "sections": [
      "Nền tảng học tập đáng tin cậy",
      "Giá cả phải chăng và linh hoạt",
      "Nhận chứng chỉ và chia sẻ nó",
      "Tổng quan về kỳ thi",
      "Tiến nhanh hơn trong sự nghiệp của bạn",
      "Ghi lại kỹ năng của bạn",
      "Bạn muốn thêm nhiều người dùng?"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Muc tieu du an: ap dung kien thuc C++ da hoc\";\n  return 0;\n}",
        "explanation": "Trang dự án/chứng chỉ: dùng khung này để bắt đầu ý tưởng của bạn."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Muc tieu du an: ap dung kien thuc C++ da hoc\";\n  return 0;\n}",
        "output": "Muc tieu du an: ap dung kien thuc C++ da hoc",
        "explanation": "Trang dự án/chứng chỉ: dùng khung này để bắt đầu ý tưởng của bạn."
      }
    ],
    "tables": [],
    "useCases": [
      "Viết code hiện đại an toàn hơn.",
      "Dự án C++ thực tế."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Bỏ qua kiểu dữ liệu hoặc header cần thiết.",
        "why": "Compiler không biết tên hoặc biểu thức có thể sai kiểu.",
        "correct": "Thêm header và chọn kiểu phù hợp trước khi biên dịch."
      }
    ],
    "keyTakeaways": [
      "Hãy chuẩn bị trực tuyến theo nhịp của bạn, thi khi sẵn sàng, và thêm một chứng chỉ đã xác minh vào CV, hồ sơ LinkedIn và  portfolio.…",
      "Thiết kế cho sinh viên, lập trình viên và chuyên gia muốn chứng minh kiến thức một cách thực tế.",
      "Mọi sinh viên hoặc người làm lĩnh vực kỹ thuật số đều có thể hưởng lợi từ việc chứng nhận kỹ năng.",
      "Chứng chỉ giúp thể hiện kiến thức với nhà tuyển dụng hiện tại hoặc tương lai, khách hàng và cộng sự trong thị trường ngà y càng cạnh tranh.…"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_exam.asp"
  },
  {
    "id": "cpp-howto-add-two-numbers",
    "slug": "howto-add-two-numbers",
    "title": "How-To: Cộng hai số trong C++",
    "titleEn": "C++ How To Add Two Numbers",
    "num": 131,
    "chapter": "15 · How-To & Tra cứu thư viện",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 11,
    "prerequisites": [],
    "description": "Học cách cộng hai số trong C++:",
    "objectives": [
      "Nắm được: Cách cộng hai số trong C++.",
      "Trình bày được: Thêm hai số; Cộng hai số với dữ liệu nhập.",
      "Chạy và sửa được 2 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Học cách cộng hai số trong C++: Ví dụ này, người dùng phải nhập hai số. Sau đó ta in tổng bằng cách cộng hai số:"
    },
    "sections": [
      "Thêm hai số",
      "Cộng hai số với dữ liệu nhập"
    ],
    "syntax": [
      {
        "code": "int x = 5;\nint y = 6;\nint sum = x + y;\ncout << sum;",
        "explanation": "Học cách cộng hai số trong C++:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int x = 5;\n  int y = 6;\n  int sum = x + y;\n  cout << sum;\n  return 0;\n}\n",
        "output": "11",
        "explanation": "Học cách cộng hai số trong C++:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int x, y;\n  int sum;\n  cout << \"Type a number: \";\n  cin >> x;\n  cout << \"Type another number: \";\n  cin >> y;\n  sum = x + y;\n  cout << \"Sum is: \" << sum;\n  return 0;\n}\n",
        "output": "",
        "explanation": "Ví dụ này, người dùng phải nhập hai số. Sau đó ta in tổng bằng cách cộng hai số:"
      }
    ],
    "tables": [],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Bỏ qua kiểu dữ liệu hoặc header cần thiết.",
        "why": "Compiler không biết tên hoặc biểu thức có thể sai kiểu.",
        "correct": "Thêm header và chọn kiểu phù hợp trước khi biên dịch."
      }
    ],
    "keyTakeaways": [
      "Học cách cộng hai số trong C++:",
      "Ví dụ này, người dùng phải nhập hai số. Sau đó ta in tổng bằng cách cộng hai số:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_howto_add_two_numbers.asp"
  },
  {
    "id": "cpp-howto-random-number",
    "slug": "howto-random-number",
    "title": "How-To: Tạo số ngẫu nhiên (Random Numbers)",
    "titleEn": "C++ How To Generate a Random Number",
    "num": 132,
    "chapter": "15 · How-To & Tra cứu thư viện",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 14,
    "prerequisites": [
      "cpp-howto-add-two-numbers"
    ],
    "description": "Bạn có thể dùng rand() (trong thư viện <cstdlib>) để sinh số ngẫu nhiên:",
    "objectives": [
      "Nắm được: Cách tạo số ngẫu nhiên trong C++.",
      "Trình bày được: Số ngẫu nhiên; Ví dụ.",
      "Chạy và sửa được 3 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Bạn có thể dùng rand() (trong thư viện <cstdlib>) để sinh số ngẫu nhiên: Để kiểm soát tốt hơn số ngẫu nhiên, ví dụ nếu chỉ muốn một số ngẫu nhiên trong khoảng 0 đến 100, bạn có thể dùng công thức sau: Lưu ý: các ví dụ trên chỉ xuất một số ngẫu nhiên. Chúng không ra số khác nhau mỗi lần chạy. Sẽ sinh số ngẫu nhiên từ 0 đến 10 mỗi lần chạy chương trình:"
    },
    "sections": [
      "Số ngẫu nhiên",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "cout << rand();",
        "explanation": "Bạn có thể dùng rand() (trong thư viện <cstdlib>) để sinh số ngẫu nhiên:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <random>\nusing namespace std;\nint main() {\n  cout << rand();\n  return 0;\n}\n",
        "output": "",
        "explanation": "Bạn có thể dùng rand() (trong thư viện <cstdlib>) để sinh số ngẫu nhiên:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <random>\nusing namespace std;\nint main() {\n  // Generate a random number between 0 and 100\n  int randomNum = rand() % 101;\n\n  cout << randomNum;\n  return 0;\n}\n",
        "output": "",
        "explanation": "Để kiểm soát tốt hơn số ngẫu nhiên, ví dụ nếu chỉ muốn một số ngẫu nhiên trong khoảng 0 đến 100, bạn có thể dùng công thức sau:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <random>\n#include <ctime>\nusing namespace std;\nint main() {\n  // Get a different random number each time the program runs\n  srand(time(0));\n\n  // Generate a random number between 0 and 100\n  int randomNum = rand() % 101;\n\n  cout << randomNum;\n  return 0;\n}\n",
        "output": "",
        "explanation": "Sẽ sinh số ngẫu nhiên từ 0 đến 10 mỗi lần chạy chương trình:"
      }
    ],
    "tables": [],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Lưu ý: các ví dụ trên chỉ xuất một số ngẫu nhiên. Chúng không ra số khác nhau mỗi lần chạy."
    ],
    "commonMistakes": [
      {
        "wrong": "Bỏ qua kiểu dữ liệu hoặc header cần thiết.",
        "why": "Compiler không biết tên hoặc biểu thức có thể sai kiểu.",
        "correct": "Thêm header và chọn kiểu phù hợp trước khi biên dịch."
      }
    ],
    "keyTakeaways": [
      "Bạn có thể dùng rand() (trong thư viện <cstdlib>) để sinh số ngẫu nhiên:",
      "Để kiểm soát tốt hơn số ngẫu nhiên, ví dụ nếu chỉ muốn một số ngẫu nhiên trong khoảng 0 đến 100, bạn có thể dùng công th ức sau…",
      "Lưu ý: các ví dụ trên chỉ xuất một số ngẫu nhiên. Chúng không ra số khác nhau mỗi lần chạy.",
      "Sẽ sinh số ngẫu nhiên từ 0 đến 10 mỗi lần chạy chương trình:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_howto_random_number.asp"
  },
  {
    "id": "cpp-ref-reference",
    "slug": "ref-reference",
    "title": "Tài liệu tra cứu C++ (C++ Reference)",
    "titleEn": "C++ Reference Documentation",
    "num": 133,
    "chapter": "15 · How-To & Tra cứu thư viện",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-howto-random-number"
    ],
    "description": "Phần này chứa tài liệu tham chiếu C++.",
    "objectives": [
      "Nắm được: Tài liệu tham chiếu C++.",
      "Trình bày được: Tham chiếu C++.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Phần này chứa tài liệu tham chiếu C++. Danh sách từ khóa C++ và thư viện phổ biến ở đây:"
    },
    "sections": [
      "Tham chiếu C++"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\n#include <cstdlib>\n#include <ctime>\nusing namespace std;\n\nint main() {\n  srand(time(0));\n  cout << rand() % 100;\n  return 0;\n}",
        "explanation": "Ví dụ How-To nhỏ gọn — đối chiếu với bảng tra cứu trong bài."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\n#include <cstdlib>\n#include <ctime>\n#include <random>\nusing namespace std;\n\nint main() {\n  srand(time(0));\n  cout << rand() % 100;\n  return 0;\n}",
        "output": "",
        "explanation": "Ví dụ How-To nhỏ gọn — đối chiếu với bảng tra cứu trong bài."
      }
    ],
    "tables": [],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Dùng phần tử front()/back()/top() khi container rỗng.",
        "why": "Hành vi không xác định khi container trống.",
        "correct": "Kiểm tra .empty() trước khi truy cập."
      }
    ],
    "keyTakeaways": [
      "Phần này chứa tài liệu tham chiếu C++.",
      "Danh sách từ khóa C++ và thư viện phổ biến ở đây:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_ref_reference.asp"
  },
  {
    "id": "cpp-ref-keywords",
    "slug": "ref-keywords",
    "title": "Bảng từ khóa C++ (Keywords Reference)",
    "titleEn": "C++ Keywords",
    "num": 134,
    "chapter": "15 · How-To & Tra cứu thư viện",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-ref-reference"
    ],
    "description": "Danh sách từ khóa hữu ích trong C++ ở bảng dưới đây.",
    "objectives": [
      "Nắm được: Từ khóa C++.",
      "Trình bày được: Từ khóa C++.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Danh sách từ khóa hữu ích trong C++ ở bảng dưới đây."
    },
    "sections": [
      "Từ khóa C++"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\n#include <cstdlib>\n#include <ctime>\nusing namespace std;\n\nint main() {\n  srand(time(0));\n  cout << rand() % 100;\n  return 0;\n}",
        "explanation": "Ví dụ How-To nhỏ gọn — đối chiếu với bảng tra cứu trong bài."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\n#include <cstdlib>\n#include <ctime>\n#include <random>\nusing namespace std;\n\nint main() {\n  srand(time(0));\n  cout << rand() % 100;\n  return 0;\n}",
        "output": "",
        "explanation": "Ví dụ How-To nhỏ gọn — đối chiếu với bảng tra cứu trong bài."
      }
    ],
    "tables": [
      {
        "title": "Từ khóa C++",
        "header": [
          "Từ khóa",
          "Mô tả"
        ],
        "rows": [
          [
            "và",
            "Cách viết thay thế cho toán tử logic &&"
          ],
          [
            "and_eq",
            "Cách viết thay thế cho toán tử gán &="
          ],
          [
            "tự động",
            "Tự động nhận diện kiểu của biến dựa trên giá trị bạn gán cho nó"
          ],
          [
            "bitand",
            "Cách viết thay thế cho toán tử bit &"
          ],
          [
            "bitor",
            "Một cách viết thay thế cho",
            "toán tử bitwise"
          ],
          [
            "bool",
            "Kiểu dữ liệu chỉ lưu giá trị true hoặc false"
          ],
          [
            "phá vỡ",
            "Thoát khỏi vòng lặp hoặc khối switch"
          ],
          [
            "...",
            "Đánh dấu một khối mã trong câu lệnh switch"
          ],
          [
            "bắt lấy, nắm lấy, tóm lấy, chộp lấy",
            "Bắt ngoại lệ sinh ra từ khối try"
          ],
          [
            "char",
            "Kiểu dữ liệu lưu được một ký tự duy nhất"
          ],
          [
            "hạng",
            "Định nghĩa một lớp"
          ],
          [
            "Khiếu nại.",
            "Cách viết thay thế cho toán tử bit ~"
          ],
          [
            "(thuộc) dây chằng",
            "Định nghĩa biến hoặc tham số là hằng số (không đổi) hoặc chỉ định phương thức lớp khô"
          ],
          [
            "tiếp tục, làm tiếp",
            "Chuyển sang vòng lặp tiếp theo"
          ],
          [
            "default",
            "Chỉ định khối mã mặc định trong câu lệnh switch"
          ],
          [
            "xóa",
            "Giải phóng bộ nhớ động"
          ],
          [
            "do",
            "Dùng cùng while để tạo vòng lặp do/while"
          ],
          [
            "double",
            "Kiểu dữ liệu thường 64 bit, lưu được số thập phân"
          ],
          [
            "khác, nữa; nếu không",
            "Được dùng trong câu lệnh điều kiện"
          ],
          [
            "ENUM",
            "Khai báo kiểu liệt kê"
          ],
          [
            "sai, nhầm, giả dối",
            "Giá trị boolean tương đương 0"
          ],
          [
            "float",
            "Kiểu dữ liệu thường 32 bit, lưu được số thập phân"
          ],
          [
            "cho",
            "Tạo một vòng lặp for"
          ],
          [
            "người bạn",
            "Chỉ định lớp và hàm được truy cập thành viên private và protected"
          ],
          [
            "ĐI ĐẾN",
            "Nhảy đến dòng mã được chỉ định bởi nhãn"
          ],
          [
            "if",
            "Tạo một câu lệnh điều kiện"
          ],
          [
            "int",
            "Kiểu dữ liệu thường 32 bit, lưu được số nguyên"
          ],
          [
            "dài, xa; lâu",
            "Đảm bảo số nguyên dài ít nhất 32 bit (dùng long long để đủ 64 bit)"
          ],
          [
            "Không gian tên",
            "Khai báo không gian tên"
          ],
          [
            "Cấp mới",
            "Dự trữ bộ nhớ động"
          ],
          [
            "không",
            "Cách viết thay thế cho toán tử logic !"
          ],
          [
            "not_eq",
            "Cách viết thay thế cho toán tử so sánh !="
          ],
          [
            "or",
            "Một cách viết thay thế cho phép logic",
            "TRÁI"
          ],
          [
            "or_eq",
            "Một cách viết thay thế cho",
            "= toán tử gán"
          ],
          [
            "riêng tư",
            "Access modifier chỉ cho phép truy cập thành viên trong lớp khai báo"
          ],
          [
            "được bảo vệ",
            "Access modifier cho phép truy cập thành viên trong lớp khai báo và các lớp dẫn xuất"
          ],
          [
            "công khai",
            "Access modifier cho phép truy cập thành viên từ mọi nơi"
          ],
          [
            "Trở lại",
            "Dùng để trả về giá trị từ hàm"
          ],
          [
            "ngắn, cụt",
            "Giảm kích thước số nguyên xuống 16 bit"
          ],
          [
            "đã ký",
            "Chỉ định int hoặc char biểu diễn cả giá trị dương và âm (đây là mặc định nê"
          ],
          [
            "sizeof",
            "Toán tử trả về lượng bộ nhớ mà biến hoặc kiểu dữ liệu chiếm"
          ],
          [
            "địa chỉ IP tĩnh",
            "Chỉ định thuộc tính hoặc phương thức thuộc về chính lớp thay vì các thể hiện của lớp"
          ],
          [
            "Cấu trúc",
            "Xác định một cấu trúc"
          ],
          [
            "switch",
            "Chọn một trong nhiều khối mã để thực thi"
          ],
          [
            "mẫu",
            "Khai báo lớp template hoặc hàm template"
          ],
          [
            "việc này",
            "Biến khả dụng bên trong phương thức và constructor của lớp, chứa con trỏ tới chí"
          ],
          [
            "vứt đi",
            "Tạo lỗi tùy chỉnh có thể được bắt bởi try...catch"
          ],
          [
            "đúng, thật",
            "Giá trị boolean tương đương 1"
          ],
          [
            "thử",
            "Tạo câu lệnh try...catch"
          ],
          [
            "typedef",
            "Định nghĩa một kiểu dữ liệu tùy chỉnh"
          ],
          [
            "không được ký tên",
            "Chỉ định int hoặc char chỉ biểu diễn giá trị dương, cho phép lưu các số"
          ],
          [
            "sử dụng",
            "Cho phép dùng biến và hàm của namespace mà không cần tiền tố namespace"
          ],
          [
            "virtual",
            "Chỉ định phương thức lớp là virtual (ảo)"
          ],
          [
            "vô giá trị",
            "Chỉ định hàm không trả về giá trị, hoặc con trỏ tới dữ liệu chưa xác định kiể"
          ],
          [
            "trong khi",
            "Tạo một vòng lặp while"
          ],
          [
            "XOR",
            "Cách viết thay thế cho toán tử bit ^"
          ],
          [
            "xor_eq",
            "Cách viết thay thế cho toán tử gán ^="
          ]
        ]
      }
    ],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Dùng phần tử front()/back()/top() khi container rỗng.",
        "why": "Hành vi không xác định khi container trống.",
        "correct": "Kiểm tra .empty() trước khi truy cập."
      }
    ],
    "keyTakeaways": [
      "Danh sách từ khóa hữu ích trong C++ ở bảng dưới đây."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_ref_keywords.asp"
  },
  {
    "id": "cpp-ref-iostream",
    "slug": "ref-iostream",
    "title": "Tra cứu thư viện <iostream>",
    "titleEn": "C++ iostream Library (Standard Input / Output Streams) Reference",
    "num": 135,
    "chapter": "15 · How-To & Tra cứu thư viện",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-ref-keywords"
    ],
    "description": "Thư viện <iostream> cung cấp đối tượng đọc dữ liệu nhập và xuất dữ liệu ra bảng điều khiển hoặc tệp.",
    "objectives": [
      "Nắm được: Tham chiếu thư viện iostream C++.",
      "Trình bày được: Đối tượng iostream C++.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Thư viện <iostream> cung cấp đối tượng đọc dữ liệu nhập và xuất dữ liệu ra bảng điều khiển hoặc tệp. Danh sách toàn bộ đối tượng iostream ở bảng dưới đây."
    },
    "sections": [
      "Đối tượng iostream C++"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\n#include <cstdlib>\n#include <ctime>\nusing namespace std;\n\nint main() {\n  srand(time(0));\n  cout << rand() % 100;\n  return 0;\n}",
        "explanation": "Ví dụ How-To nhỏ gọn — đối chiếu với bảng tra cứu trong bài."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\n#include <cstdlib>\n#include <ctime>\n#include <random>\nusing namespace std;\n\nint main() {\n  srand(time(0));\n  cout << rand() % 100;\n  return 0;\n}",
        "output": "",
        "explanation": "Ví dụ How-To nhỏ gọn — đối chiếu với bảng tra cứu trong bài."
      }
    ],
    "tables": [
      {
        "title": "Đối tượng iostream C++",
        "header": [
          "Đối tượng",
          "Mô tả"
        ],
        "rows": [
          [
            "cerr",
            "Luồng xuất cho thông báo lỗi"
          ],
          [
            "tắc nghẽn",
            "Luồng xuất để ghi log thông tin chương trình"
          ],
          [
            "CIN",
            "Luồng nhập mặc định đọc bàn phím từ bảng điều khiển"
          ],
          [
            "cout",
            "Luồng xuất mặc định ghi ra bảng điều khiển"
          ],
          [
            "wcerr",
            "Giống cerr nhưng xuất dữ liệu wide char (wchar_t) thay vì char"
          ],
          [
            "wclog",
            "Giống clog nhưng xuất dữ liệu wide char (wchar_t) thay vì char"
          ],
          [
            "wcin",
            "Giống cin nhưng coi mỗi ký tự nhập là wide char (wchar_t)"
          ],
          [
            "wcout",
            "Giống cout nhưng xuất dữ liệu wide char (wchar_t) thay vì char"
          ]
        ]
      }
    ],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Không kiểm tra file mở thành công trước khi đọc/ghi.",
        "why": "Thao tác trên file mở thất bại âm thầm hoặc crash.",
        "correct": "if (myFile) { ... } hoặc if (!myFile.is_open()) return;"
      },
      {
        "wrong": "Dùng phần tử front()/back()/top() khi container rỗng.",
        "why": "Hành vi không xác định khi container trống.",
        "correct": "Kiểm tra .empty() trước khi truy cập."
      }
    ],
    "keyTakeaways": [
      "Thư viện <iostream> cung cấp đối tượng đọc dữ liệu nhập và xuất dữ liệu ra bảng điều khiển hoặc tệp.",
      "Danh sách toàn bộ đối tượng iostream ở bảng dưới đây."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_ref_iostream.asp"
  },
  {
    "id": "cpp-ref-fstream",
    "slug": "ref-fstream",
    "title": "Tra cứu thư viện <fstream>",
    "titleEn": "C++ fstream Library (File Streams) Reference",
    "num": 136,
    "chapter": "15 · How-To & Tra cứu thư viện",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-ref-iostream"
    ],
    "description": "Thư viện <fstream> cung cấp các lớp đọc/ghi tệp hoặc luồng dữ liệu.",
    "objectives": [
      "Nắm được: Tham chiếu thư viện fstream C++.",
      "Trình bày được: Các lớp dòng C++.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Thư viện <fstream> cung cấp các lớp đọc/ghi tệp hoặc luồng dữ liệu. Danh sách các lớp fstream hữu ích ở bảng dưới đây. Tìm hiểu thêm về tệp trong Hướng dẫn C++ Files của chúng tôi."
    },
    "sections": [
      "Các lớp dòng C++"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\n#include <cstdlib>\n#include <ctime>\nusing namespace std;\n\nint main() {\n  srand(time(0));\n  cout << rand() % 100;\n  return 0;\n}",
        "explanation": "Ví dụ How-To nhỏ gọn — đối chiếu với bảng tra cứu trong bài."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\n#include <cstdlib>\n#include <ctime>\n#include <random>\nusing namespace std;\n\nint main() {\n  srand(time(0));\n  cout << rand() % 100;\n  return 0;\n}",
        "output": "",
        "explanation": "Ví dụ How-To nhỏ gọn — đối chiếu với bảng tra cứu trong bài."
      }
    ],
    "tables": [
      {
        "title": "Các lớp dòng C++",
        "header": [
          "Class",
          "Mô tả"
        ],
        "rows": [
          [
            "filebuf",
            "Lớp xử lý tệp mức thấp dùng nội bộ bởi các lớp fstream, ifstream và ofstream"
          ],
          [
            "fstream",
            "Một lớp có thể đọc và ghi tệp"
          ],
          [
            "ifstream",
            "Một lớp có thể đọc từ tệp"
          ],
          [
            "ofstream",
            "Một lớp có thể ghi vào tệp"
          ]
        ]
      }
    ],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Không kiểm tra file mở thành công trước khi đọc/ghi.",
        "why": "Thao tác trên file mở thất bại âm thầm hoặc crash.",
        "correct": "if (myFile) { ... } hoặc if (!myFile.is_open()) return;"
      },
      {
        "wrong": "Dùng phần tử front()/back()/top() khi container rỗng.",
        "why": "Hành vi không xác định khi container trống.",
        "correct": "Kiểm tra .empty() trước khi truy cập."
      }
    ],
    "keyTakeaways": [
      "Thư viện <fstream> cung cấp các lớp đọc/ghi tệp hoặc luồng dữ liệu.",
      "Danh sách các lớp fstream hữu ích ở bảng dưới đây.",
      "Tìm hiểu thêm về tệp trong Hướng dẫn C++ Files của chúng tôi."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_ref_fstream.asp"
  },
  {
    "id": "cpp-ref-math",
    "slug": "ref-math",
    "title": "Tra cứu thư viện <cmath>",
    "titleEn": "C++ cmath Library Reference (cmath functions)",
    "num": 137,
    "chapter": "15 · How-To & Tra cứu thư viện",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-ref-fstream"
    ],
    "description": "Thư viện <cmath> có nhiều hàm thực hiện phép toán trên số.",
    "objectives": [
      "Nắm được: Tham chiếu thư viện cmath của C++.",
      "Trình bày được: Hàm toán học C++.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Thư viện <cmath> có nhiều hàm thực hiện phép toán trên số. Danh sách toàn bộ hàm toán học ở bảng dưới đây: Tìm hiểu thêm về toán học trong Hướng dẫn C++ Math của chúng tôi."
    },
    "sections": [
      "Hàm toán học C++"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\n#include <cstdlib>\n#include <ctime>\nusing namespace std;\n\nint main() {\n  srand(time(0));\n  cout << rand() % 100;\n  return 0;\n}",
        "explanation": "Ví dụ How-To nhỏ gọn — đối chiếu với bảng tra cứu trong bài."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\n#include <cstdlib>\n#include <ctime>\n#include <random>\nusing namespace std;\n\nint main() {\n  srand(time(0));\n  cout << rand() % 100;\n  return 0;\n}",
        "output": "",
        "explanation": "Ví dụ How-To nhỏ gọn — đối chiếu với bảng tra cứu trong bài."
      }
    ],
    "tables": [
      {
        "title": "Hàm toán học C++",
        "header": [
          "Chức năng",
          "Mô tả"
        ],
        "rows": [
          [
            "abs(x)",
            "Trả về giá trị tuyệt đối của x"
          ],
          [
            "acos(x)",
            "Trả về acos của x, tính bằng radian"
          ],
          [
            "acosh(x)",
            "Trả về acos hyperbolic của x"
          ],
          [
            "asin(x)",
            "Trả về asin của x, tính bằng radian"
          ],
          [
            "asinh(x)",
            "Trả về asin hyperbolic của x"
          ],
          [
            "atan(x)",
            "Trả về atan của x dưới dạng giá trị từ -PI/2 đến PI/2 radian"
          ],
          [
            "atan2(y, x)",
            "Trả về góc theta khi chuyển tọa độ chữ nhật (x, y) sang tọa độ cực (r, theta)"
          ],
          [
            "atanh(x)",
            "Trả về atan hyperbolic của x"
          ],
          [
            "cbrt(x)",
            "Trả về căn bậc ba của x"
          ],
          [
            "trần(x)",
            "Trả về x được làm tròn lên số nguyên gần nhất"
          ],
          [
            "copysign(x, y)",
            "Trả về số thực x đầu tiên mang dấu của số thực y thứ hai"
          ],
          [
            "cos(x)",
            "Trả về cos của x (x tính bằng radian)"
          ],
          [
            "cosh(x)",
            "Trả về cos hyperbolic của x"
          ],
          [
            "điểm kinh nghiệm(x)",
            "Trả về giá trị của E mũ x"
          ],
          [
            "exp2(x)",
            "Trả về giá trị của 2 mũ x"
          ],
          [
            "expm1(x)",
            "Trả về e x -1"
          ],
          [
            "erf(x)",
            "Trả về giá trị hàm sai số (error function) tại x"
          ],
          [
            "erfc(x)",
            "Trả về giá trị hàm sai số bù tại x"
          ],
          [
            "fab(x)",
            "Trả về giá trị tuyệt đối của số thực x"
          ],
          [
            "fdim(x, y)",
            "Trả về hiệu dương giữa x và y"
          ],
          [
            "tầng(x)",
            "Trả về x được làm tròn xuống số nguyên gần nhất"
          ],
          [
            "fma(x, y, z)",
            "Trả về x*y+z mà không mất độ chính xác"
          ],
          [
            "fmax(x, y)",
            "Trả về giá trị lớn hơn trong hai số thực x và y"
          ],
          [
            "fmin(x, y)",
            "Trả về giá trị nhỏ hơn trong hai số thực x và y"
          ],
          [
            "fmod(x, y)",
            "Trả về phần dư số thực của phép x/y"
          ],
          [
            "frexp(x, y)",
            "Với x biểu diễn dạng m*2^n, trả về giá trị m (giữa 0.5 và 1.0) và ghi giá t"
          ],
          [
            "hạ thấp (x, y)",
            "Trả về sqrt(x^2 + y^2) mà không tràn/underflow trung gian"
          ],
          [
            "ilogb(x)",
            "Trả về phần nguyên của logarit cơ số số thực của x"
          ],
          [
            "ldexp(x, y)",
            "Trả về x*2 y"
          ],
          [
            "lgamma(x)",
            "Trả về logarit của giá trị tuyệt đối hàm gamma tại x"
          ],
          [
            "llrint(x)",
            "Làm tròn x đến số nguyên gần nhất và trả về dạng long long"
          ],
          [
            "llround(x)",
            "Làm tròn x đến số nguyên gần nhất và trả về dạng long long"
          ],
          [
            "log(x)",
            "Trả về logarit tự nhiên của x"
          ],
          [
            "log10(x)",
            "Trả về logarit cơ số 10 của x"
          ],
          [
            "log1p(x)",
            "Trả về logarit tự nhiên của x+1"
          ],
          [
            "log2(x)",
            "Trả về logarit cơ số 2 của giá trị tuyệt đối của x"
          ],
          [
            "logb(x)",
            "Trả về logarit cơ số số thực của giá trị tuyệt đối của x"
          ],
          [
            "lrint(x)",
            "Làm tròn x đến số nguyên gần nhất và trả về dạng long"
          ],
          [
            "vòng(x)",
            "Làm tròn x đến số nguyên gần nhất và trả về dạng long"
          ],
          [
            "modf(x, y)",
            "Trả về phần thập phân của x và ghi phần nguyên vào bộ nhớ tại con trỏ y"
          ],
          [
            "nan",
            "Trả về giá trị NaN (Not a Number)"
          ],
          [
            "nearbyint(x)",
            "Trả về x được làm tròn đến số nguyên gần nhất"
          ],
          [
            "tiếp theo (x, y)",
            "Trả về số thực gần x nhất theo hướng của y"
          ],
          [
            "bên cạnh (x, y)",
            "Trả về số thực gần x nhất theo hướng của y"
          ],
          [
            "pow(x, y)",
            "Trả về giá trị của x mũ y"
          ],
          [
            "số dư(x, y)",
            "Trả về phần dư của x/y làm tròn đến số nguyên gần nhất"
          ],
          [
            "remquo(x, y, z)",
            "Tính x/y làm tròn đến số nguyên gần nhất, ghi kết quả vào bộ nhớ tại con trỏ z và"
          ],
          [
            "rint(x)",
            "Trả về x được làm tròn đến số nguyên gần nhất"
          ],
          [
            "Bo Tròn Góc X:",
            "Trả về x được làm tròn đến số nguyên gần nhất"
          ],
          [
            "scalbln(x, y)",
            "Trả về x mũ y (y thường là 2)"
          ],
          [
            "tỷ lệ (x, y)",
            "Trả về x mũ y (y thường là 2)"
          ],
          [
            "tội lỗi(x)",
            "Trả về sin của x (x tính bằng radian)"
          ],
          [
            "sinh(x)",
            "Trả về sin hyperbolic của x"
          ],
          [
            "sqrt(x)",
            "Trả về căn bậc hai của x"
          ],
          [
            "tan(x)",
            "Trả về tan của x (x tính bằng radian)"
          ],
          [
            "tanh(x)",
            "Trả về tan hyperbolic của x"
          ],
          [
            "tgamma(x)",
            "Trả về giá trị hàm gamma tại x"
          ],
          [
            "trunc(x)",
            "Trả về phần nguyên của x"
          ]
        ]
      }
    ],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      },
      {
        "wrong": "Dùng phần tử front()/back()/top() khi container rỗng.",
        "why": "Hành vi không xác định khi container trống.",
        "correct": "Kiểm tra .empty() trước khi truy cập."
      }
    ],
    "keyTakeaways": [
      "Thư viện <cmath> có nhiều hàm thực hiện phép toán trên số.",
      "Danh sách toàn bộ hàm toán học ở bảng dưới đây:",
      "Tìm hiểu thêm về toán học trong Hướng dẫn C++ Math của chúng tôi."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_ref_math.asp"
  },
  {
    "id": "cpp-ref-string",
    "slug": "ref-string",
    "title": "Tra cứu thư viện <string>",
    "titleEn": "C++ string Library Reference (string functions)",
    "num": 138,
    "chapter": "15 · How-To & Tra cứu thư viện",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-ref-math"
    ],
    "description": "Thư viện <string> có nhiều hàm thao tác trên chuỗi.",
    "objectives": [
      "Nắm được: Tham chiếu thư viện string của C++.",
      "Trình bày được: Hàm chuỗi C++.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Thư viện <string> có nhiều hàm thao tác trên chuỗi. Danh sách toàn bộ hàm string ở bảng dưới đây. Tìm hiểu thêm về chuỗi trong Hướng dẫn C++ Strings của chúng tôi."
    },
    "sections": [
      "Hàm chuỗi C++"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\n#include <cstdlib>\n#include <ctime>\nusing namespace std;\n\nint main() {\n  srand(time(0));\n  cout << rand() % 100;\n  return 0;\n}",
        "explanation": "Ví dụ How-To nhỏ gọn — đối chiếu với bảng tra cứu trong bài."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\n#include <cstdlib>\n#include <ctime>\n#include <random>\nusing namespace std;\n\nint main() {\n  srand(time(0));\n  cout << rand() % 100;\n  return 0;\n}",
        "output": "",
        "explanation": "Ví dụ How-To nhỏ gọn — đối chiếu với bảng tra cứu trong bài."
      }
    ],
    "tables": [
      {
        "title": "Hàm chuỗi C++",
        "header": [
          "Chức năng",
          "Mô tả"
        ],
        "rows": [
          [
            "nối thêm",
            "Thêm ký tự hoặc chuỗi khác vào cuối chuỗi hiện tại"
          ],
          [
            "at()",
            "Trả về ký tự tại chỉ mục xác định, có kiểm tra biên"
          ],
          [
            "quay lại",
            "Truy cập ký tự cuối cùng của chuỗi"
          ],
          [
            "bắt đầu",
            "Trả về iterator trỏ đến ký tự đầu của chuỗi"
          ],
          [
            "c_str()",
            "Trả về chuỗi kiểu C kết thúc bằng null"
          ],
          [
            "thông thoáng",
            "Xóa mọi ký tự, làm chuỗi trở nên rỗng"
          ],
          [
            "so sánh, đối chiếu",
            "So sánh chuỗi với chuỗi khác và trả về kết quả"
          ],
          [
            "sao chép",
            "Sao chép ký tự của chuỗi vào mảng ký tự"
          ],
          [
            "dữ liệu",
            "Trả về con trỏ tới mảng ký tự nội bộ của chuỗi"
          ],
          [
            "trống, rỗng; uống, làm cạn",
            "Kiểm tra xem chuỗi có rỗng không"
          ],
          [
            "kết thúc",
            "Trả về iterator trỏ ngay sau ký tự cuối cùng"
          ],
          [
            "xóa",
            "Xóa một phần chuỗi theo vị trí và độ dài"
          ],
          [
            "Tìm",
            "Tìm lần xuất hiện đầu của ký tự hoặc chuỗi con"
          ],
          [
            "phía trước",
            "Truy cập ký tự đầu tiên của chuỗi"
          ],
          [
            "chèn vào, lồng vào",
            "Chèn ký tự hoặc chuỗi con vào vị trí xác định"
          ],
          [
            "chiều dài",
            "Trả về số ký tự của chuỗi"
          ],
          [
            "Diện tích tối đa",
            "Trả về số ký tự tối đa của chuỗi"
          ],
          [
            "nhà điều hành",
            "Trả về ký tự tại vị trí đã cho"
          ],
          [
            "pop_back()",
            "Xóa ký tự cuối khỏi chuỗi"
          ],
          [
            "push_back()",
            "Thêm một ký tự vào cuối chuỗi"
          ],
          [
            "thay thế",
            "Thay thế một phần chuỗi bằng nội dung mới"
          ],
          [
            "rfind()",
            "Tìm lần xuất hiện cuối của ký tự hoặc chuỗi con"
          ],
          [
            "Đổi Kích Thước",
            "Thay đổi độ dài chuỗi, cắt ngắn hoặc đệm thêm"
          ],
          [
            "kích thước",
            "Bí danh của length(); trả về độ dài chuỗi"
          ],
          [
            "substr()",
            "Trả về một phần chuỗi, bắt đầu tại chỉ mục và độ dài đã cho"
          ],
          [
            "hoán đổi",
            "Trao đổi nội dung của hai chuỗi"
          ]
        ]
      }
    ],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      },
      {
        "wrong": "Quên #include <string> khi dùng std::string.",
        "why": "string không phải kiểu dựng sẵn — thiếu header sẽ không biên dịch.",
        "correct": "#include <string> rồi mới dùng string."
      }
    ],
    "keyTakeaways": [
      "Thư viện <string> có nhiều hàm thao tác trên chuỗi.",
      "Danh sách toàn bộ hàm string ở bảng dưới đây.",
      "Tìm hiểu thêm về chuỗi trong Hướng dẫn C++ Strings của chúng tôi."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_ref_string.asp"
  },
  {
    "id": "cpp-ref-cstring",
    "slug": "ref-cstring",
    "title": "Tra cứu thư viện <cstring>",
    "titleEn": "C++ cstring Library Reference (cstring functions)",
    "num": 139,
    "chapter": "15 · How-To & Tra cứu thư viện",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-ref-string"
    ],
    "description": "Thư viện <cstring> có nhiều hàm thao tác trên mảng và chuỗi kiểu C.",
    "objectives": [
      "Nắm được: Tham chiếu thư viện cstring của C++.",
      "Trình bày được: Hàm C++ cstring.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Thư viện <cstring> có nhiều hàm thao tác trên mảng và chuỗi kiểu C. Lưu ý rằng chuỗi kiểu C khác chuỗi thường. Chuỗi kiểu C là mảng ký tự, tạo bằng kiểu char. Danh sách toàn bộ hàm cstring ở bảng dưới đây. Tìm hiểu thêm về chuỗi kiểu C trong Hướng dẫn C-Style Strings."
    },
    "sections": [
      "Hàm C++ cstring"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\n#include <cstdlib>\n#include <ctime>\nusing namespace std;\n\nint main() {\n  srand(time(0));\n  cout << rand() % 100;\n  return 0;\n}",
        "explanation": "Ví dụ How-To nhỏ gọn — đối chiếu với bảng tra cứu trong bài."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\n#include <cstdlib>\n#include <ctime>\n#include <random>\nusing namespace std;\n\nint main() {\n  srand(time(0));\n  cout << rand() % 100;\n  return 0;\n}",
        "output": "",
        "explanation": "Ví dụ How-To nhỏ gọn — đối chiếu với bảng tra cứu trong bài."
      }
    ],
    "tables": [
      {
        "title": "Hàm C++ cstring",
        "header": [
          "Chức năng",
          "Mô tả"
        ],
        "rows": [
          [
            "memchr()",
            "Trả về con trỏ tới lần xuất hiện đầu của giá trị trong khối nhớ"
          ],
          [
            "memcmp()",
            "So sánh hai khối nhớ để xác định khối nào biểu diễn giá trị số lớn hơn"
          ],
          [
            "memcpy()",
            "Sao chép dữ liệu từ khối nhớ này sang khối nhớ khác"
          ],
          [
            "memmove()",
            "Sao chép dữ liệu giữa hai khối nhớ, tính đến khả năng hai khối nhớ chồng lên nh"
          ],
          [
            "memset()",
            "Đặt mọi byte của khối nhớ cùng một giá trị"
          ],
          [
            "strcat()",
            "Nối một chuỗi kiểu C vào cuối chuỗi khác"
          ],
          [
            "strchr()",
            "Trả về con trỏ tới lần xuất hiện đầu của ký tự trong chuỗi kiểu C"
          ],
          [
            "strcmp()",
            "So sánh giá trị ASCII của ký tự trong hai chuỗi kiểu C để xác định chuỗi nào lớ"
          ],
          [
            "strcoll()",
            "So sánh giá trị theo locale của ký tự trong hai chuỗi kiểu C để xác định chuỗi nào"
          ],
          [
            "strcpy()",
            "Sao chép ký tự của chuỗi kiểu C vào bộ nhớ của chuỗi khác"
          ],
          [
            "strcspn()",
            "Trả về độ dài chuỗi kiểu C tính đến lần xuất hiện đầu của một trong các ký tự chỉ định"
          ],
          [
            "strerror()",
            "Trả về chuỗi kiểu C mô tả ý nghĩa mã lỗi"
          ],
          [
            "strlen()",
            "Trả về độ dài chuỗi kiểu C"
          ],
          [
            "strncat()",
            "Nối một số ký tự từ chuỗi kiểu C vào cuối một chuỗi khác"
          ],
          [
            "strncmp()",
            "So sánh giá trị ASCII của một số ký tự chỉ định trong hai chuỗi kiểu C để xác đị"
          ],
          [
            "strncpy()",
            "Sao chép một số ký tự từ chuỗi kiểu C này vào bộ nhớ của chuỗi khác"
          ],
          [
            "strpbrk()",
            "Trả về con trỏ tới vị trí đầu trong chuỗi kiểu C chứa một trong các ký tự chỉ đị"
          ],
          [
            "strrchr()",
            "Trả về con trỏ tới lần xuất hiện cuối của ký tự trong chuỗi kiểu C"
          ],
          [
            "strspn()",
            "Trả về độ dài chuỗi kiểu C tính đến ký tự đầu tiên không thuộc tập ký tự chỉ định"
          ],
          [
            "strstr()",
            "Trả về con trỏ tới lần xuất hiện đầu của chuỗi kiểu C trong chuỗi khác"
          ],
          [
            "strtok()",
            "Tách chuỗi thành các phần theo ký tự phân cách"
          ],
          [
            "strxfrm()",
            "Chuyển ký tự trong chuỗi kiểu C từ mã ASCII sang mã hóa của locale hiện hành"
          ]
        ]
      }
    ],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Truy cập phần tử ngoài chỉ mục hợp lệ (ví dụ arr[5] cho mảng 5 phần tử).",
        "why": "Chỉ mục hợp lệ là 0..n-1; vượt biên là undefined behavior.",
        "correct": "Duyệt i từ 0 đến n-1."
      },
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      }
    ],
    "keyTakeaways": [
      "Thư viện <cstring> có nhiều hàm thao tác trên mảng và chuỗi kiểu C.",
      "Lưu ý rằng chuỗi kiểu C khác chuỗi thường. Chuỗi kiểu C là mảng ký tự, tạo bằng kiểu char.",
      "Danh sách toàn bộ hàm cstring ở bảng dưới đây.",
      "Tìm hiểu thêm về chuỗi kiểu C trong Hướng dẫn C-Style Strings."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_ref_cstring.asp"
  },
  {
    "id": "cpp-ref-ctime",
    "slug": "ref-ctime",
    "title": "Tra cứu thư viện <ctime>",
    "titleEn": "C++ ctime Library Reference (ctime functions)",
    "num": 140,
    "chapter": "15 · How-To & Tra cứu thư viện",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-ref-cstring"
    ],
    "description": "Thư viện <ctime> có nhiều hàm cho phép đo ngày và giờ.",
    "objectives": [
      "Nắm được: Tham chiếu thư viện <ctime> của C++.",
      "Trình bày được: Chức năng C++ ctime.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Thư viện <ctime> có nhiều hàm cho phép đo ngày và giờ."
    },
    "sections": [
      "Chức năng C++ ctime"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\n#include <cstdlib>\n#include <ctime>\nusing namespace std;\n\nint main() {\n  srand(time(0));\n  cout << rand() % 100;\n  return 0;\n}",
        "explanation": "Ví dụ How-To nhỏ gọn — đối chiếu với bảng tra cứu trong bài."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\n#include <cstdlib>\n#include <ctime>\n#include <random>\nusing namespace std;\n\nint main() {\n  srand(time(0));\n  cout << rand() % 100;\n  return 0;\n}",
        "output": "",
        "explanation": "Ví dụ How-To nhỏ gọn — đối chiếu với bảng tra cứu trong bài."
      }
    ],
    "tables": [
      {
        "title": "Chức năng C++ ctime",
        "header": [
          "Chức năng",
          "Mô tả"
        ],
        "rows": [
          [
            "asctime()",
            "Trả về chuỗi kiểu C biểu diễn thời gian trong cấu trúc tm"
          ],
          [
            "đồng hồ",
            "Trả về số đo lượng thời gian đã trôi qua khi chương trình chạy"
          ],
          [
            "ctime()",
            "Trả về chuỗi kiểu C biểu diễn thời gian trong timestamp"
          ],
          [
            "difftime()",
            "Trả về khoảng thời gian giữa hai timestamp"
          ],
          [
            "gmtime()",
            "Chuyển timestamp thành cấu trúc tm biểu diễn giờ theo múi GMT"
          ],
          [
            "giờ địa phương()",
            "Chuyển timestamp thành cấu trúc tm theo múi giờ cục bộ của hệ thống"
          ],
          [
            "mktime()",
            "Chuyển cấu trúc tm thành timestamp"
          ],
          [
            "strftime()",
            "Ghi chuỗi kiểu C biểu diễn ngày giờ của cấu trúc tm với nhiều định dạng xử lý"
          ],
          [
            "Thời gian",
            "Trả về timestamp biểu thị thời điểm hiện tại"
          ]
        ]
      }
    ],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      }
    ],
    "keyTakeaways": [
      "Thư viện <ctime> có nhiều hàm cho phép đo ngày và giờ."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_ref_ctime.asp"
  },
  {
    "id": "cpp-ref-vector",
    "slug": "ref-vector",
    "title": "Tra cứu thư viện <vector>",
    "titleEn": "C++ vector Library Reference (vector functions)",
    "num": 141,
    "chapter": "15 · How-To & Tra cứu thư viện",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-ref-ctime"
    ],
    "description": "Thư viện <vector> có nhiều hàm thao tác trên vector.",
    "objectives": [
      "Nắm được: Tham chiếu thư viện vector của C++.",
      "Trình bày được: Thư viện vectơ C++.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Thư viện <vector> có nhiều hàm thao tác trên vector. Danh sách hàm vector phổ biến ở bảng dưới đây. Tìm hiểu thêm về vector trong Hướng dẫn C++ Vector của chúng tôi."
    },
    "sections": [
      "Thư viện vectơ C++"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\n#include <cstdlib>\n#include <ctime>\nusing namespace std;\n\nint main() {\n  srand(time(0));\n  cout << rand() % 100;\n  return 0;\n}",
        "explanation": "Ví dụ How-To nhỏ gọn — đối chiếu với bảng tra cứu trong bài."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\n#include <cstdlib>\n#include <ctime>\n#include <random>\nusing namespace std;\n\nint main() {\n  srand(time(0));\n  cout << rand() % 100;\n  return 0;\n}",
        "output": "",
        "explanation": "Ví dụ How-To nhỏ gọn — đối chiếu với bảng tra cứu trong bài."
      }
    ],
    "tables": [
      {
        "title": "Thư viện vectơ C++",
        "header": [
          "Chức năng",
          "Mô tả"
        ],
        "rows": [
          [
            "Gán",
            "Lấp đầy vector bằng nhiều giá trị"
          ],
          [
            "at()",
            "Trả về phần tử theo chỉ mục của vector"
          ],
          [
            "quay lại",
            "Trả về phần tử cuối của vector"
          ],
          [
            "bắt đầu",
            "Trả về iterator trỏ đến đầu vector"
          ],
          [
            "năng lực, khả năng tiếp thu, năng suất",
            "Trả về số phần tử mà vùng nhớ đã dành của vector chứa được"
          ],
          [
            "thông thoáng",
            "Xóa toàn bộ nội dung của vector"
          ],
          [
            "dữ liệu",
            "Trả về con trỏ tới khối nhớ chứa các phần tử của vector"
          ],
          [
            "trống, rỗng; uống, làm cạn",
            "Kiểm tra vector có rỗng hay không"
          ],
          [
            "kết thúc",
            "Trả về iterator trỏ đến cuối vector"
          ],
          [
            "xóa",
            "Xóa một số phần tử khỏi vector"
          ],
          [
            "phía trước",
            "Trả về phần tử đầu của vector"
          ],
          [
            "chèn vào, lồng vào",
            "Chèn một số phần tử vào vector"
          ],
          [
            "Diện tích tối đa",
            "Trả về số phần tử tối đa vector có thể có"
          ],
          [
            "pop_back()",
            "Xóa phần tử cuối của vector"
          ],
          [
            "push_back()",
            "Thêm một phần tử vào cuối vector"
          ],
          [
            "rbegin()",
            "Trả về reverse iterator trỏ đến phần tử cuối của vector"
          ],
          [
            "rend()",
            "Trả về reverse iterator trỏ ngay trước phần tử đầu của vector"
          ],
          [
            "Đặt trước",
            "Dành bộ nhớ cho vector"
          ],
          [
            "Đổi Kích Thước",
            "Thay đổi kích thước vector, thêm hoặc bớt phần tử khi cần"
          ],
          [
            "shrink_to_fit()",
            "Thu gọn vùng nhớ đã dành của vector vừa đủ cho số phần tử khi cần"
          ],
          [
            "kích thước",
            "Trả về số lượng phần tử của vector"
          ],
          [
            "hoán đổi",
            "Hoán đổi nội dung của hai vector"
          ]
        ]
      }
    ],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      },
      {
        "wrong": "Dùng phần tử front()/back()/top() khi container rỗng.",
        "why": "Hành vi không xác định khi container trống.",
        "correct": "Kiểm tra .empty() trước khi truy cập."
      }
    ],
    "keyTakeaways": [
      "Thư viện <vector> có nhiều hàm thao tác trên vector.",
      "Danh sách hàm vector phổ biến ở bảng dưới đây.",
      "Tìm hiểu thêm về vector trong Hướng dẫn C++ Vector của chúng tôi."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_ref_vector.asp"
  },
  {
    "id": "cpp-ref-algorithm",
    "slug": "ref-algorithm",
    "title": "Tra cứu thư viện <algorithm>",
    "titleEn": "C++ algorithm Library Reference (algorithm functions)",
    "num": 142,
    "chapter": "15 · How-To & Tra cứu thư viện",
    "topic": "Basics",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-ref-vector"
    ],
    "description": "Thư viện <algorithm> có nhiều hàm cho phép biến đổi dải dữ liệu trong cấu trúc dữ liệu.",
    "objectives": [
      "Nắm được: Tham chiếu thư viện algorithm của C++.",
      "Trình bày được: Thư viện thuật toán C++.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Thư viện <algorithm> có nhiều hàm cho phép biến đổi dải dữ liệu trong cấu trúc dữ liệu. Danh sách hàm hữu ích của thư viện algorithm ở dưới đây. Tìm hiểu thêm về thuật toán trong Hướng dẫn C++ Algorithm."
    },
    "sections": [
      "Thư viện thuật toán C++"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\n#include <cstdlib>\n#include <ctime>\nusing namespace std;\n\nint main() {\n  srand(time(0));\n  cout << rand() % 100;\n  return 0;\n}",
        "explanation": "Ví dụ How-To nhỏ gọn — đối chiếu với bảng tra cứu trong bài."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\n#include <cstdlib>\n#include <ctime>\n#include <random>\nusing namespace std;\n\nint main() {\n  srand(time(0));\n  cout << rand() % 100;\n  return 0;\n}",
        "output": "",
        "explanation": "Ví dụ How-To nhỏ gọn — đối chiếu với bảng tra cứu trong bài."
      }
    ],
    "tables": [
      {
        "title": "Thư viện thuật toán C++",
        "header": [
          "Chức năng",
          "Mô tả"
        ],
        "rows": [
          [
            "adjacent_find()",
            "Tìm cặp phần tử liên tiếp cùng giá trị trong dải dữ liệu"
          ],
          [
            "all_of()",
            "Kiểm tra mọi phần tử của dải dữ liệu có thỏa điều kiện"
          ],
          [
            "any_of()",
            "Kiểm tra có ít nhất một phần tử của dải dữ liệu thỏa điều kiện"
          ],
          [
            "Tìm kiếm nhị phân",
            "Thuật toán hiệu quả để tìm giá trị trong dải dữ liệu đã sắp xếp"
          ],
          [
            "sao chép",
            "Sao chép giá trị của dải dữ liệu sang dải khác"
          ],
          [
            "đếm",
            "Đếm số lần một giá trị xuất hiện trong dải dữ liệu"
          ],
          [
            "count_if()",
            "Đếm số phần tử của dải dữ liệu thỏa điều kiện"
          ],
          [
            "tô phủ kín",
            "Ghi một giá trị vào mọi phần tử của dải dữ liệu"
          ],
          [
            "Tìm",
            "Tìm phần tử đầu tiên có giá trị cho trước trong dải dữ liệu"
          ],
          [
            "find_first_of()",
            "Tìm phần tử đầu tiên khớp một trong nhiều giá trị cho trước trong dải dữ liệu"
          ],
          [
            "find_if()",
            "Tìm phần tử đầu tiên của dải dữ liệu thỏa điều kiện"
          ],
          [
            "find_if_not()",
            "Tìm phần tử đầu tiên KHÔNG thỏa điều kiện trong dải dữ liệu"
          ],
          [
            "Mỗi bức.",
            "Chạy một hàm trên mọi phần tử của dải dữ liệu"
          ],
          [
            "bao gồm",
            "Kiểm tra mọi giá trị của dải đã sắp xếp này có nằm trong dải sắp xếp kia"
          ],
          [
            "is_permutation()",
            "Kiểm tra dải dữ liệu này là hoán vị của dải kia"
          ],
          [
            "is_sorted()",
            "Kiểm tra một dải dữ liệu đã được sắp xếp chưa"
          ],
          [
            "is_sorted_until()",
            "Tìm vị trí trong dải dữ liệu mà tại đó các phần tử không còn được sắp xếp"
          ],
          [
            "cận dưới",
            "Tìm phần tử đầu tiên tại hoặc trên cận dưới cho trước trong dải đã sắp xếp"
          ],
          [
            "max_element()",
            "Tìm phần tử lớn nhất trong dải dữ liệu"
          ],
          [
            "Trộn",
            "Trộn giá trị của hai dải dữ liệu thành dải mới"
          ],
          [
            "min_element()",
            "Tìm phần tử nhỏ nhất trong dải dữ liệu"
          ],
          [
            "none_of()",
            "Kiểm tra không phần tử nào của dải dữ liệu thỏa điều kiện"
          ],
          [
            "random_shuffle()",
            "Sắp xếp lại ngẫu nhiên các phần tử của dải dữ liệu"
          ],
          [
            "thay thế",
            "Thay mọi lần xuất hiện của một giá trị trong dải dữ liệu bằng giá trị khác"
          ],
          [
            "replace_copy()",
            "Tạo bản sao dải dữ liệu với mọi lần xuất hiện của giá trị chỉ định được thay bằng giá trị khác"
          ],
          [
            "replace_copy_if()",
            "Tạo bản sao dải dữ liệu trong đó mọi giá trị thỏa điều kiện được thay bằng giá trị khác"
          ],
          [
            "replace_if()",
            "Thay mọi giá trị trong dải dữ liệu thỏa điều kiện bằng giá trị khác"
          ],
          [
            "đảo, ngược lại; điểu trái ngược, mặt trái",
            "Đảo thứ tự các phần tử trong dải dữ liệu"
          ],
          [
            "reverse_copy()",
            "Tạo bản sao dải dữ liệu với các phần tử đảo ngược"
          ],
          [
            "tìm kiếm",
            "Tìm một dãy giá trị cho trước trong dải dữ liệu"
          ],
          [
            "thứ, hạng loại; phân loại",
            "Sắp xếp dải dữ liệu theo thứ tự tăng dần"
          ],
          [
            "hoán đổi",
            "Hoán đổi giá trị của hai biến"
          ],
          [
            "swap_ranges()",
            "Hoán đổi giá trị của hai dải dữ liệu cùng kích thước"
          ],
          [
            "cận trên",
            "Tìm phần tử đầu tiên vượt cận trên cho trước trong dải đã sắp xếp"
          ]
        ]
      }
    ],
    "useCases": [
      "Nền tảng để đọc mọi ví dụ C++ sau này.",
      "Viết chương trình/console app đầu tiên."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Gọi hàm trước khi khai báo (không có prototype).",
        "why": "Compiler không biết chữ ký hàm → lỗi biên dịch.",
        "correct": "Khai báo prototype hoặc định nghĩa hàm trước nơi gọi."
      },
      {
        "wrong": "Dùng phần tử front()/back()/top() khi container rỗng.",
        "why": "Hành vi không xác định khi container trống.",
        "correct": "Kiểm tra .empty() trước khi truy cập."
      }
    ],
    "keyTakeaways": [
      "Thư viện <algorithm> có nhiều hàm cho phép biến đổi dải dữ liệu trong cấu trúc dữ liệu.",
      "Danh sách hàm hữu ích của thư viện algorithm ở dưới đây.",
      "Tìm hiểu thêm về thuật toán trong Hướng dẫn C++ Algorithm."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_ref_algorithm.asp"
  },
  {
    "id": "cpp-examples",
    "slug": "examples",
    "title": "Tổng hợp ví dụ C++ (C++ Examples)",
    "titleEn": "C++ Examples",
    "num": 143,
    "chapter": "16 · Thực hành tổng hợp",
    "topic": "Loops",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [],
    "description": "Ví dụ về C++: tài liệu tham khảo nhanh kèm ví dụ chạy được trong trình duyệt.",
    "objectives": [
      "Nắm được: Ví dụ về C++.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Ví dụ về C++: tài liệu tham khảo nhanh kèm ví dụ chạy được trong trình duyệt."
    },
    "sections": [],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  // Giai cac bai tap trong muc nay tai day\n  cout << \"San thuc hanh C++\";\n  return 0;\n}",
        "explanation": "Khung code chung cho trang thực hành/tổng hợp."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  // Giai cac bai tap trong muc nay tai day\n  cout << \"San thuc hanh C++\";\n  return 0;\n}",
        "output": "San thuc hanh C++",
        "explanation": "Khung code chung cho trang thực hành/tổng hợp."
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý tập hợp/mảng nhiều phần tử.",
      "Tự động hóa tác vụ lặp (đếm, in bảng, tính tổng)."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Bỏ qua kiểu dữ liệu hoặc header cần thiết.",
        "why": "Compiler không biết tên hoặc biểu thức có thể sai kiểu.",
        "correct": "Thêm header và chọn kiểu phù hợp trước khi biên dịch."
      }
    ],
    "keyTakeaways": [
      "Ví dụ về C++: tài liệu tham khảo nhanh kèm ví dụ chạy được trong trình duyệt."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_examples.asp"
  },
  {
    "id": "cpp-real-life-examples",
    "slug": "real-life-examples",
    "title": "Ví dụ ứng dụng thực tế (Real Life Examples)",
    "titleEn": "C++ Real Life Examples",
    "num": 144,
    "chapter": "16 · Thực hành tổng hợp",
    "topic": "Loops",
    "difficulty": "beginner",
    "estimatedTime": 20,
    "prerequisites": [
      "cpp-examples"
    ],
    "description": "Trang này liệt kê các ví dụ thực tế dùng trong dự án thật.",
    "objectives": [
      "Nắm được: Ví dụ thực tế trong C++.",
      "Trình bày được: Các ví dụ thực tế; Ví dụ.",
      "Chạy và sửa được 6 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Trang này liệt kê các ví dụ thực tế dùng trong dự án thật. Dùng biến để lưu dữ liệu khác nhau của một sinh viên: Tính diện tích hình chữ nhật (nhân chiều dài với chiều rộng): Dùng các kiểu dữ liệu khác nhau để tính và xuất tổng chi phí của nhiều mặt hàng: Hướng dẫn về biến và kiểu dữ liệu C++: xem Chương Variables và Chương Data Types. Dùng chuỗi tạo lời chào đơn giản: Hướng dẫn về chuỗi trong C++: xem Chương Strings. Xác định một người đủ tuổi bầu cử chưa: Hướng dẫn về boolean trong C++: xem Chương Booleans. Kiểm tra người dùng nhập đúng mã: Xác định một số là dương hay âm: Xác định một người đủ tuổi bầu cử chưa: Xác định một số là chẵn hay lẻ: Hướng dẫn về điều kiện trong C++: xem Chương If..Else. Dùng số thứ tự trong tuần để tính và in tên thứ: Hướng dẫn về switch trong C++: xem Chương Switch. Tạo chương trình \"đếm ngược\" đơn giản: Tạo chương trình chỉ in số chẵn từ 0 đến 10 (bao gồm 2 đầu): Dùng vòng lặp while để đảo ngược một số: Dùng while kết hợp if else để chơi game Yatzy: Hướng dẫn về vòng lặp while trong C++: xem Chương While Loops. Dùng vòng lặp for tạo chương trình đếm đến 100 theo chục: Dùng for để tạo chương trình chỉ in giá trị chẵn từ 0 đến 10: Dùng vòng lặp for tạo chương trình chỉ in số lẻ: Dùng vòng lặp for để in các lũy thừa của 2 đến 512: Dùng for để tạo chương trình in bảng cửu chương của một số cho trước (2 trong ví dụ này): Hướng dẫn về vòng lặp for trong C++: xem Chương For Loops. Tạo chương trình tính tuổi trung bình của nhiều người: Tạo chương trình tìm tuổi nhỏ nhất trong các tuổi: Hướng dẫn về mảng trong C++: xem Chương Arrays. Dùng cấu trúc lưu và xuất thông tin khác nhau về Cars: Hướng dẫn về struct trong C++: xem Chương Structures. Tạo chương trình đổi giá trị từ fahrenheit sang celsius: Tạo chương trình nhân đôi một số: Hướng dẫn về hàm trong C++: xem Chương Functions."
    },
    "sections": [
      "Các ví dụ thực tế",
      "Ví dụ"
    ],
    "syntax": [
      {
        "code": "// Student data\nint studentID = 15;\nint studentAge = 23;\nfloat studentFee = 75.25;\nchar studentGrade = 'B';\n\n// Print variables\n   cout << \"Student ID: \" << studentID << \"\\n\";\ncout << \"Student Age: \" << studentAge << \"\\n\";\ncout << \"Student Fee: \" << studentFee << \"\\n\";\ncout << \"Student Grade: \" << studentGrade << \"\\n\";",
        "explanation": "Dùng biến để lưu dữ liệu khác nhau của một sinh viên:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  // Student data\n  int studentID = 15;\n  int studentAge = 23;\n  float studentFee = 75.25;\n  char studentGrade = 'B';\n\n  // Print variables\n     cout << \"Student ID: \" << studentID << \"\\n\";\n  cout << \"Student Age: \" << studentAge << \"\\n\";\n  cout << \"Student Fee: \" << studentFee << \"\\n\";\n  cout << \"Student Grade: \" << studentGrade << \"\\n\";\n  return 0;\n}\n",
        "output": "Student ID: 15\nStudent Age: 23\nStudent Fee: 75.25\nStudent Grade: B",
        "explanation": "Dùng biến để lưu dữ liệu khác nhau của một sinh viên:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  // Create integer variables\n  int length = 4;\n  int width = 6;\n  int area;\n\n  // Calculate the area of a rectangle\n  area = length * width;\n\n  // Print the variables\n  cout << \"Length is: \" << length << \"\\n\";\n  cout << \"Width is: \" << width << \"\\n\";\n  cout << \"Area of the rectangle is: \" << area << \"\\n\";\n  return 0;\n}\n",
        "output": "Length is: 4\nWidth is: 6\nArea of the rectangle is: 24",
        "explanation": "Tính diện tích hình chữ nhật (nhân chiều dài với chiều rộng):"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  // Create variables of different data types\n  int items = 50;\n  double cost_per_item = 9.99;\n  double total_cost = items * cost_per_item;\n  char currency = '$';\n\n  // Print variables\n  cout << \"Number of items: \" << items << \"\\n\";\n  cout << \"Cost per item: \" << cost_per_item << \"\" << currency << \"\\n\";\n  cout << \"Total cost = \" << total_cost << \"\" << currency << \"\\n\";\n  return 0;\n}\n",
        "output": "Number of items: 50\nCost per item: 9.99$\nTotal cost = 499.5$",
        "explanation": "Dùng các kiểu dữ liệu khác nhau để tính và xuất tổng chi phí của nhiều mặt hàng:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main() {\n  string message = \"Good to see you, \";\n  string fname = \"John\";\n  cout << message + fname;\n  return 0;\n}\n",
        "output": "Good to see you, John",
        "explanation": "Dùng chuỗi tạo lời chào đơn giản:",
        "input": ""
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int myAge = 25;\n  int votingAge = 18;\n\n  cout << (myAge >= votingAge); // returns 1 (true), meaning 25 year olds are allowed to vote!\n  return 0;\n}\n",
        "output": "1",
        "explanation": "Xác định một người đủ tuổi bầu cử chưa:"
      },
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\nint main() {\n  int doorCode = 1337;\n\n  if (doorCode == 1337) {\n    cout << \"Correct code.\\nThe door is now open.\\n\";\n  } else {\n    cout << \"Wrong code.\\nThe door remains closed.\\n\";\n  }\n  return 0;\n}\n",
        "output": "Correct code.\nThe door is now open.",
        "explanation": "Kiểm tra người dùng nhập đúng mã:"
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý tập hợp/mảng nhiều phần tử.",
      "Tự động hóa tác vụ lặp (đếm, in bảng, tính tổng)."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Gán số 1/0 trực tiếp cho biến bool thay vì biểu thức so sánh.",
        "why": "bool nhận true/false; dùng nó cho điều kiện sẽ rõ ràng và an toàn hơn.",
        "correct": "Dùng biểu thức so sánh: bool isCoding = (x > 5);"
      },
      {
        "wrong": "Viết if (x = 5) thay vì if (x == 5).",
        "why": "Dấu = là gán, == mới là so sánh; gán trong if luôn cho kết quả true.",
        "correct": "if (x == 5) { ... }"
      }
    ],
    "keyTakeaways": [
      "Trang này liệt kê các ví dụ thực tế dùng trong dự án thật.",
      "Dùng biến để lưu dữ liệu khác nhau của một sinh viên:",
      "Tính diện tích hình chữ nhật (nhân chiều dài với chiều rộng):",
      "Dùng các kiểu dữ liệu khác nhau để tính và xuất tổng chi phí của nhiều mặt hàng:"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_real_life_examples.asp"
  },
  {
    "id": "cpp-compiler",
    "slug": "compiler",
    "title": "Trình biên dịch C++ trực tuyến (Online Compiler)",
    "titleEn": "C++ Online Compiler (Editor / Interpreter)",
    "num": 145,
    "chapter": "16 · Thực hành tổng hợp",
    "topic": "Loops",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-real-life-examples"
    ],
    "description": "Với trình biên dịch C++ trực tuyến, bạn sửa mã và xem kết quả ngay trên trình duyệt.",
    "objectives": [
      "Nắm được: Trình biên dịch C++ trực tuyến.",
      "Trình bày được: Trình biên dịch C++ (Trình soạn thảo).",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Với trình biên dịch C++ trực tuyến, bạn sửa mã và xem kết quả ngay trên trình duyệt. Nhấn nút \"Try it Yourself\" để xem nó hoạt động. Nếu chưa biết C++, hãy đọc Hướng dẫn C++ của chúng tôi từ đầu."
    },
    "sections": [
      "Trình biên dịch C++ (Trình soạn thảo)"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello World!\";\n  return 0;\n}",
        "explanation": "Với trình biên dịch C++ trực tuyến, bạn sửa mã và xem kết quả ngay trên trình duyệt."
      }
    ],
    "examples": [
      {
        "title": "Trình biên dịch C++ (Trình soạn thảo)",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello World!\";\n  return 0;\n}",
        "output": "Hello World!",
        "explanation": "Với trình biên dịch C++ trực tuyến, bạn sửa mã và xem kết quả ngay trên trình duyệt."
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý tập hợp/mảng nhiều phần tử.",
      "Tự động hóa tác vụ lặp (đếm, in bảng, tính tổng)."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Bắt exception rồi bỏ qua không xử lý.",
        "why": "Lỗi bị nuốt, chương trình tiếp tục ở trạng thái sai.",
        "correct": "Catch rồi xử lý hoặc rethrow khi cần."
      }
    ],
    "keyTakeaways": [
      "Với trình biên dịch C++ trực tuyến, bạn sửa mã và xem kết quả ngay trên trình duyệt.",
      "Nhấn nút \"Try it Yourself\" để xem nó hoạt động.",
      "Nếu chưa biết C++, hãy đọc Hướng dẫn C++ của chúng tôi từ đầu."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_compiler.asp"
  },
  {
    "id": "cpp-exercises",
    "slug": "exercises",
    "title": "Ngân hàng bài tập C++ (Exercises)",
    "titleEn": "C++ Exercises",
    "num": 146,
    "chapter": "16 · Thực hành tổng hợp",
    "topic": "Loops",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-compiler"
    ],
    "description": "Kiểm tra kỹ năng C++ với bài tập từ mọi danh mục:",
    "objectives": [
      "Nắm được: Bài tập C++.",
      "Trình bày được: Đăng nhập để theo dõi tiến độ học tập; Bài tập.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Kiểm tra kỹ năng C++ với bài tập từ mọi danh mục: Nếu chưa tham gia, hãy đăng ký trở thành W3Schooler và nhận điểm cho mỗi bài tập hoàn thành. Là người dùng W3Schools đã đăng nhập, bạn truy cập nhiều tính năng như trang web riêng, theo dõi tiến độ học, nhận lộ trình cá nhân hóa, và nhiều hơn nữa. Bài tập kết hợp \"trắc nghiệm\" và \"điền vào chỗ trống\". Mỗi danh mục có từ 3 đến 9 câu hỏi. Câu trả lời nằm ở chương hướng dẫn tương ứng. Nếu bị kẹt hoặc trả lời sai, bạn có thể thử lại hoặc bấm \"Show Answer\" để xem đáp án. Hãy hoàn thành khóa học lập trình của W3Schools, củng cố kiến thức và nhận chứng chỉ mà bạn có thể thêm vào CV, portfolio và hồ sơ LinkedIn."
    },
    "sections": [
      "Đăng nhập để theo dõi tiến độ học tập",
      "Bài tập"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  // Giai cac bai tap trong muc nay tai day\n  cout << \"San thuc hanh C++\";\n  return 0;\n}",
        "explanation": "Khung code chung cho trang thực hành/tổng hợp."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  // Giai cac bai tap trong muc nay tai day\n  cout << \"San thuc hanh C++\";\n  return 0;\n}",
        "output": "San thuc hanh C++",
        "explanation": "Khung code chung cho trang thực hành/tổng hợp."
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý tập hợp/mảng nhiều phần tử.",
      "Tự động hóa tác vụ lặp (đếm, in bảng, tính tổng)."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Bỏ qua kiểu dữ liệu hoặc header cần thiết.",
        "why": "Compiler không biết tên hoặc biểu thức có thể sai kiểu.",
        "correct": "Thêm header và chọn kiểu phù hợp trước khi biên dịch."
      }
    ],
    "keyTakeaways": [
      "Kiểm tra kỹ năng C++ với bài tập từ mọi danh mục:",
      "Nếu chưa tham gia, hãy đăng ký trở thành W3Schooler và nhận điểm cho mỗi bài tập hoàn thành.",
      "Là người dùng W3Schools đã đăng nhập, bạn truy cập nhiều tính năng như trang web riêng, theo dõi tiến độ học, nhận lộ tr ình cá nhân hóa, và nhiều hơn nữa.…",
      "Bài tập kết hợp \"trắc nghiệm\" và \"điền vào chỗ trống\"."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_exercises.asp"
  },
  {
    "id": "cpp-quiz",
    "slug": "quiz",
    "title": "Trắc nghiệm C++ (Quiz)",
    "titleEn": "C++ Quiz",
    "num": 147,
    "chapter": "16 · Thực hành tổng hợp",
    "topic": "Loops",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-exercises"
    ],
    "description": "Bạn có thể kiểm tra kỹ năng C++ bằng Trắc nghiệm của W3Schools.",
    "objectives": [
      "Nắm được: Bài kiểm tra C++.",
      "Trình bày được: Các bài kiểm tra.; Đếm điểm của bạn; Bắt đầu bài trắc nghiệm.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Bạn có thể kiểm tra kỹ năng C++ bằng Trắc nghiệm của W3Schools. Bài kiểm tra có 25 câu và không giới hạn thời gian. Bài kiểm tra không chính thức, chỉ là cách hay để xem bạn biết (hoặc chưa biết) bao nhiêu về C++. Bạn được 1 điểm cho mỗi câu đúng. Kết thúc Trắc nghiệm, tổng điểm sẽ hiển thị. Chúc may mắn! Bắt đầu bài kiểm tra C++ ❯ Nếu chưa biết C++, hãy đọc Hướng dẫn C++ của chúng tôi từ đầu. Hãy hoàn thành khóa học lập trình của W3Schools, củng cố kiến thức và nhận chứng chỉ mà bạn có thể thêm vào CV, portfolio và hồ sơ LinkedIn."
    },
    "sections": [
      "Các bài kiểm tra.",
      "Đếm điểm của bạn",
      "Bắt đầu bài trắc nghiệm"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  // Giai cac bai tap trong muc nay tai day\n  cout << \"San thuc hanh C++\";\n  return 0;\n}",
        "explanation": "Khung code chung cho trang thực hành/tổng hợp."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  // Giai cac bai tap trong muc nay tai day\n  cout << \"San thuc hanh C++\";\n  return 0;\n}",
        "output": "San thuc hanh C++",
        "explanation": "Khung code chung cho trang thực hành/tổng hợp."
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý tập hợp/mảng nhiều phần tử.",
      "Tự động hóa tác vụ lặp (đếm, in bảng, tính tổng)."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Bỏ qua kiểu dữ liệu hoặc header cần thiết.",
        "why": "Compiler không biết tên hoặc biểu thức có thể sai kiểu.",
        "correct": "Thêm header và chọn kiểu phù hợp trước khi biên dịch."
      }
    ],
    "keyTakeaways": [
      "Bạn có thể kiểm tra kỹ năng C++ bằng Trắc nghiệm của W3Schools.",
      "Bài kiểm tra có 25 câu và không giới hạn thời gian.",
      "Bài kiểm tra không chính thức, chỉ là cách hay để xem bạn biết (hoặc chưa biết) bao nhiêu về C++.",
      "Bạn được 1 điểm cho mỗi câu đúng. Kết thúc Trắc nghiệm, tổng điểm sẽ hiển thị."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_quiz.asp"
  },
  {
    "id": "cpp-challenges",
    "slug": "challenges",
    "title": "Thử thách lập trình C++ (Code Challenges)",
    "titleEn": "C++ Code Challenges",
    "num": 148,
    "chapter": "16 · Thực hành tổng hợp",
    "topic": "Loops",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-quiz"
    ],
    "description": "Kiểm tra kỹ năng C++ với thử thách code từ mọi danh mục:",
    "objectives": [
      "Nắm được: Thách thức về mã C++.",
      "Trình bày được: Giới thiệu về Thách thức về Mã.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Kiểm tra kỹ năng C++ với thử thách code từ mọi danh mục: Thử thách code là bài tập tương tác, nơi bạn viết mã C++ để đạt kết quả cụ thể. Mỗi thử thách đưa ra mục tiêu và cho bạn viết C++ thật. Hãy hoàn thành khóa học lập trình của W3Schools, củng cố kiến thức và nhận chứng chỉ mà bạn có thể thêm vào CV, portfolio và hồ sơ LinkedIn."
    },
    "sections": [
      "Giới thiệu về Thách thức về Mã"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  // Giai cac bai tap trong muc nay tai day\n  cout << \"San thuc hanh C++\";\n  return 0;\n}",
        "explanation": "Khung code chung cho trang thực hành/tổng hợp."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  // Giai cac bai tap trong muc nay tai day\n  cout << \"San thuc hanh C++\";\n  return 0;\n}",
        "output": "San thuc hanh C++",
        "explanation": "Khung code chung cho trang thực hành/tổng hợp."
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý tập hợp/mảng nhiều phần tử.",
      "Tự động hóa tác vụ lặp (đếm, in bảng, tính tổng)."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Bỏ qua kiểu dữ liệu hoặc header cần thiết.",
        "why": "Compiler không biết tên hoặc biểu thức có thể sai kiểu.",
        "correct": "Thêm header và chọn kiểu phù hợp trước khi biên dịch."
      }
    ],
    "keyTakeaways": [
      "Kiểm tra kỹ năng C++ với thử thách code từ mọi danh mục:",
      "Thử thách code là bài tập tương tác, nơi bạn viết mã C++ để đạt kết quả cụ thể.",
      "Mỗi thử thách đưa ra mục tiêu và cho bạn viết C++ thật.",
      "Hãy hoàn thành khóa học lập trình của W3Schools, củng cố kiến thức và nhận chứng chỉ mà bạn có thể thêm vào CV, portfoli o và hồ sơ LinkedIn.…"
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_challenges.asp"
  },
  {
    "id": "cpp-syllabus",
    "slug": "syllabus",
    "title": "Chương trình học C++ (Syllabus)",
    "titleEn": "C++ Syllabus (Curriculum)",
    "num": 149,
    "chapter": "16 · Thực hành tổng hợp",
    "topic": "Loops",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-challenges"
    ],
    "description": "Hướng dẫn C++ của W3Schools rất đầy đủ và thân thiện với người mới.",
    "objectives": [
      "Nắm được: Chương trình học C++.",
      "Trình bày được: Giới thiệu; Kết quả học tập; C++ liên quan đến những môn học nào?.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Hướng dẫn C++ của W3Schools rất đầy đủ và thân thiện với người mới. Nó sẽ cho bạn kiến thức nền tảng về C++. Nó được thiết kế cho người mới và không cần kinh nghiệm lập trình. Nội dung được biên soạn nhỏ gọn, đơn giản, dễ hiểu. Nội dung đã được kiểm chứng bởi hàng triệu người dùng. Nó được cập nhật và cải thiện thường xuyên. Đề cương chương trình học và thứ tự của nó được cấu trúc để bạn học C++ từng bước, từ giới thiệu đến tạo ứng dụng C++ đầu tiên. Bắt đầu với C++ » Lưu ý: Bạn là giáo viên dạy lập trình C++? W3Schools Academy là hộp công cụ có thể giúp bạn giảng dạy. Bắt đầu Trong hướng dẫn này, chúng tôi cung cấp nhiều hoạt động học C++ miễn phí: Bạn cũng có thể tạo tài khoản để theo dõi tiến độ. Là người dùng đã đăng nhập, bạn có các tính năng như: Bắt đầu C++ cũng như mọi ngôn ngữ, học tốt nhất qua thực hành trực tiếp với code. Dễ dàng thử code với trình soạn thảo \"Try it Yourself\". Ở đây bạn có thể sửa mã C++ và xem kết quả: W3Schools có chương trình chứng chỉ cuối khóa học. Bài thi C++ là bài kiểm tra tổng hợp chương trình học C++ của W3Schools. Sau khi đỗ, bạn nhận chứng chỉ \"Certified C++ Developer\". Có hai loại chứng chỉ khác nhau: Bài thi không thích ứng là đạt hoặc không đạt. Chứng chỉ adaptive được chấm theo năng lực; học sinh nhận xếp hạng từ intermediate, advanced đến professional. Mua chứng chỉ » Bạn muốn tìm hiểu cách dùng W3Schools Academy để dạy C++? Xem demo W3Schools Academy. Bạn sẽ thấy cách nó hoạt động và khám phá cách nó giúp việc dạy lập trình dễ dàng và hấp dẫn hơn. Xem bản demo »"
    },
    "sections": [
      "Giới thiệu",
      "Kết quả học tập",
      "C++ liên quan đến những môn học nào?",
      "Hoạt động",
      "Tổng quan về các Mô-đun",
      "Môi trường Sandbox và Lab",
      "Chứng nhận C++",
      "Bạn có phải là giáo viên không?"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello World!\";\n  return 0;\n}",
        "explanation": "Ở đây bạn có thể sửa mã C++ và xem kết quả:"
      }
    ],
    "examples": [
      {
        "title": "Ví dụ",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << \"Hello World!\";\n  return 0;\n}",
        "output": "Hello World!",
        "explanation": "Ở đây bạn có thể sửa mã C++ và xem kết quả:"
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý tập hợp/mảng nhiều phần tử.",
      "Tự động hóa tác vụ lặp (đếm, in bảng, tính tổng)."
    ],
    "notes": [
      "Lưu ý: Bạn là giáo viên dạy lập trình C++? W3Schools Academy là hộp công cụ có thể giúp bạn giảng dạy."
    ],
    "commonMistakes": [
      {
        "wrong": "Viết if (x = 5) thay vì if (x == 5).",
        "why": "Dấu = là gán, == mới là so sánh; gán trong if luôn cho kết quả true.",
        "correct": "if (x == 5) { ... }"
      },
      {
        "wrong": "Bắt exception rồi bỏ qua không xử lý.",
        "why": "Lỗi bị nuốt, chương trình tiếp tục ở trạng thái sai.",
        "correct": "Catch rồi xử lý hoặc rethrow khi cần."
      }
    ],
    "keyTakeaways": [
      "Hướng dẫn C++ của W3Schools rất đầy đủ và thân thiện với người mới.",
      "Nó sẽ cho bạn kiến thức nền tảng về C++.",
      "Nó được thiết kế cho người mới và không cần kinh nghiệm lập trình.",
      "Nội dung được biên soạn nhỏ gọn, đơn giản, dễ hiểu."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_syllabus.asp"
  },
  {
    "id": "cpp-study-plan",
    "slug": "study-plan",
    "title": "Lộ trình học C++ đề xuất (Study Plan)",
    "titleEn": "C++ Study Plan (Lesson Plan)",
    "num": 150,
    "chapter": "16 · Thực hành tổng hợp",
    "topic": "Loops",
    "difficulty": "beginner",
    "estimatedTime": 8,
    "prerequisites": [
      "cpp-syllabus"
    ],
    "description": "Kế hoạch học C++ giúp bạn dạy học sinh C++ từng bước.",
    "objectives": [
      "Nắm được: Kế hoạch học C++.",
      "Trình bày được: Giới thiệu; Học viện W3Schools; Tài liệu dành cho giáo viên.",
      "Chạy và sửa được 1 ví dụ code của bài."
    ],
    "concept": {
      "title": "Khái niệm",
      "content": "Kế hoạch học C++ giúp bạn dạy học sinh C++ từng bước. Lập kế hoạch học C++ rất dễ dàng. Bạn có thể dùng kế hoạch học tập có sẵn hoặc tự tùy chỉnh. Học sinh có trình độ khác nhau. Kế hoạch học tập có thể tùy biến để mọi người đều được thử thách. Tiết kiệm thời gian với tài liệu và kế hoạch học tập có sẵn cho giáo viên. Tổ chức lớp học dễ dàng với mốc thời gian từ giới thiệu C++ đến kỳ thi cuối khóa. Kế hoạch học tập này là tính năng của W3Schools Academy. W3Schools Academy là nền tảng có mọi thứ cần để dạy lập trình trong một chỗ. Nó cung cấp cho giáo viên một hộp công cụ giúp bạn thành công khi giảng dạy trên lớp. Cần có gói đăng ký hoạt động để dùng tính năng kế hoạch học tập. Tìm hiểu them » Academy còn cung cấp các tính năng khác như: Tải bản dùng thử miễn phí » W3Schools có mọi thứ bạn cần để dạy C++. Tài liệu huấn luyện C++ có sẵn để bạn đưa vào kế hoạch học tập: Với C++ Syllabus, học sinh của bạn sẽ bắt đầu với các kiến thức cơ bản, như hiểu biến, kiểu dữ liệu, và nhập/xuất đơn giản, rồi tiến tới chủ đề nâng cao, như lập trình hướng đối tượng, làm việc với lớp, và quản lý bộ nhớ dùng con trỏ. Mỗi chương có ví dụ, phần tự thử, bài tập, và trắc nghiệm để… Đọc thêm về Chương trình học C++. Các tính năng kế hoạch học tập giúp giáo viên và học sinh. Chúng giúp việc học dễ dàng, linh hoạt và vui. Tìm hiểu them » Bạn tự chọn mốc thời gian và nhịp độ học. Mỗi trường có yêu cầu khác nhau. Người muốn học nhanh như 5 tuần, người chọn 12 tuần hay hơn. Hoàn toàn tùy thuộc vào bạn. Ví dụ, kế hoạch học C++ 5 tuần có thể như sau: Hình ảnh kế hoạch học C++ mẫu: Bắt đầu với kế hoạch học C++ ngay hôm nay. Bắt đầu Bạn muốn tìm hiểu cách dùng W3Schools Academy để dạy lập trình C++? Xem demo W3Schools Academy. Bạn sẽ thấy cách nó hoạt động và khám phá cách nó giúp việc dạy lập trình dễ dàng và hấp dẫn hơn. Xem bản demo »"
    },
    "sections": [
      "Giới thiệu",
      "Học viện W3Schools",
      "Tài liệu dành cho giáo viên",
      "Giáo trình C++",
      "Tổng quan về kế hoạch học tập",
      "sự nghiên cứu mẫu",
      "Sẵn sàng bắt đầu?",
      "Bạn có phải là giáo viên không?"
    ],
    "syntax": [
      {
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  // Giai cac bai tap trong muc nay tai day\n  cout << \"San thuc hanh C++\";\n  return 0;\n}",
        "explanation": "Khung code chung cho trang thực hành/tổng hợp."
      }
    ],
    "examples": [
      {
        "title": "Khung thử nghiệm",
        "code": "#include <iostream>\nusing namespace std;\n\nint main() {\n  // Giai cac bai tap trong muc nay tai day\n  cout << \"San thuc hanh C++\";\n  return 0;\n}",
        "output": "San thuc hanh C++",
        "explanation": "Khung code chung cho trang thực hành/tổng hợp."
      }
    ],
    "tables": [],
    "useCases": [
      "Xử lý tập hợp/mảng nhiều phần tử.",
      "Tự động hóa tác vụ lặp (đếm, in bảng, tính tổng)."
    ],
    "notes": [
      "Ưu tiên code rõ ràng, kiểu dữ liệu phù hợp và thư viện chuẩn.",
      "Biên dịch với cảnh báo để phát hiện lỗi sớm."
    ],
    "commonMistakes": [
      {
        "wrong": "Dùng con trỏ chưa khởi tạo hoặc đã delete.",
        "why": "Trỏ vào vùng nhớ rác gây crash hoặc dữ liệu sai khó tìm.",
        "correct": "Khởi tạo nullptr, kiểm tra trước khi dereference, set nullptr sau delete."
      }
    ],
    "keyTakeaways": [
      "Kế hoạch học C++ giúp bạn dạy học sinh C++ từng bước.",
      "Lập kế hoạch học C++ rất dễ dàng.",
      "Bạn có thể dùng kế hoạch học tập có sẵn hoặc tự tùy chỉnh.",
      "Học sinh có trình độ khác nhau. Kế hoạch học tập có thể tùy biến để mọi người đều được thử thách."
    ],
    "exerciseIds": [],
    "quiz": [],
    "source": "https://www.w3schools.com/cpp/cpp_study_plan.asp"
  }
];
  function __quizHash(s) {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }
  function __firstSentence(t) {
    t = String(t || "").trim();
    const m = t.split(/(?<=[.!?])\s+/)[0] || t;
    return m.length > 150 ? m.slice(0, 147).trimEnd() + "\u2026" : m;
  }
  function __buildQuizzes(all, banks) {
    const sentences = all.map((x) => ({
      own: __firstSentence(x.concept && x.concept.content),
      ch: x.chapter,
    }));
    all.forEach((l, idx) => {
      const own = __firstSentence(l.concept && l.concept.content);
      const distractors = [];
      const seen = new Set([own]);
      let k = __quizHash(l.id + "|" + l.title);
      for (let step = 1; step < all.length && distractors.length < 3; step++) {
        const cand = sentences[(k + step * 37) % all.length];
        if (cand.ch !== l.chapter && cand.own && !seen.has(cand.own)) {
          distractors.push(cand.own);
          seen.add(cand.own);
        }
      }
      for (let r = 0; r < all.length && distractors.length < 3; r++) {
        const cand = sentences[r];
        if (cand.own && !seen.has(cand.own)) {
          distractors.push(cand.own);
          seen.add(cand.own);
        }
      }
      while (distractors.length < 3)
        distractors.push("Phương án " + (distractors.length + 1));
      const q1 = {
        question: 'Đâu là nội dung trọng tâm của bài "' + l.title + '"?',
        options: [own, distractors[0], distractors[1], distractors[2]],
        answer: 0,
        explanation: 'Bài "' + l.title + '" tập trung vào: ' + own,
      };
      const bank = banks[l.chapter] || [];
      const out = [q1];
      if (bank.length) out.push(bank[k % bank.length]);
      if (bank.length > 1)
        out.push(bank[(k + 1 + (idx % bank.length)) % bank.length]);
      l.quiz = out;
    });
  }
  __buildQuizzes(lessons, {
    "01 · C++ Cơ bản": [
      {
        question: "C++ chủ yếu kế thừa và mở rộng từ ngôn ngữ nào?",
        options: ["C", "Python", "Java", "Haskell"],
        answer: 0,
        explanation: "C++ bắt nguồn và mở rộng từ C.",
      },
      {
        question: "Đâu là điểm bắt đầu thực thi của chương trình C++?",
        options: ["main()", "printf()", "start()", "include()"],
        answer: 0,
        explanation: "Hàm main() là nơi chương trình bắt đầu chạy.",
      },
      {
        question: "Lệnh nào biên dịch chương trình C++ chuẩn C++20?",
        options: [
          "g++ -std=c++20 main.cpp",
          "gcc main.c",
          "python main.py",
          "node main.js",
        ],
        answer: 0,
        explanation: "g++ với -std=c++20 biên dịch mã C++.",
      },
    ],
    "02 · Biến & Kiểu dữ liệu": [
      {
        question: "Từ khoá nào tạo biến chỉ đọc sau khi khởi tạo?",
        options: ["const", "auto", "mutable", "inline"],
        answer: 0,
        explanation: "const ngăn gán lại sau khởi tạo.",
      },
      {
        question: "Kiểu nào thường dùng cho số thực chính xác cao?",
        options: ["double", "int", "char", "bool"],
        answer: 0,
        explanation: "double cho độ chính xác cao hơn float.",
      },
      {
        question: "static_cast dùng để làm gì?",
        options: [
          "Chuyển kiểu tường minh",
          "Gán con trỏ",
          "Khai báo hàm",
          "Xoá bộ nhớ",
        ],
        answer: 0,
        explanation: "static_cast biểu diễn chuyển đổi kiểu rõ ràng.",
      },
    ],
    "06 · Điều kiện & Switch": [
      {
        question:
          "Cấu trúc nào hợp khi so sánh một biến với nhiều giá trị cố định?",
        options: ["switch", "while", "for", "try"],
        answer: 0,
        explanation: "switch chọn nhánh theo các giá trị rời rạc.",
      },
      {
        question: "Nếu thiếu break trong một case, điều gì có thể xảy ra?",
        options: [
          "Rơi xuống case kế tiếp",
          "Lỗi biên dịch",
          "Vòng lặp vô hạn",
          "Tự thoát hàm",
        ],
        answer: 0,
        explanation: "Thiếu break gây fall-through.",
      },
      {
        question: "else if dùng khi nào?",
        options: [
          "Kiểm tra nhiều điều kiện theo thứ tự",
          "Khai báo biến",
          "Định nghĩa hàm",
          "Gộp file",
        ],
        answer: 0,
        explanation: "else if xét lần lượt các điều kiện.",
      },
    ],
    "04 · Chuỗi (Strings)": [
      {
        question: "std::string hơn char array ở điểm nào?",
        options: [
          "Tự quản lý bộ nhớ và kích thước",
          "Luôn nhanh hơn",
          "Không cần include",
          "Tự mã hoá",
        ],
        answer: 0,
        explanation: "std::string quản lý bộ nhớ an toàn hơn.",
      },
      {
        question: "Hàm nào của vector thêm phần tử vào cuối?",
        options: ["push_back", "pop_back", "erase", "size"],
        answer: 0,
        explanation: "push_back thêm ở cuối vector.",
      },
      {
        question: "Cách duyệt mọi phần tử vector gọn nhất?",
        options: ["for (auto& x : v)", "while(v)", "do-while", "switch"],
        answer: 0,
        explanation: "Range-based for là cách hiện đại.",
      },
    ],
    "13 · STL & Containers": [
      {
        question: "std::array hơn mảng C ở điểm nào?",
        options: [
          "Biết kích thước và dùng được với STL",
          "Nhanh hơn hẳn",
          "Không kiểu an toàn",
          "Không copy được",
        ],
        answer: 0,
        explanation: "std::array mang theo kích thước và hợp STL.",
      },
      {
        question: "std::deque nổi bật ở thao tác nào?",
        options: [
          "Thêm/xoá hiệu quả ở cả hai đầu",
          "Tìm nhị phân",
          "Sắp xếp nhanh nhất",
          "Gom key-value",
        ],
        answer: 0,
        explanation: "deque tối ưu push/pop hai đầu.",
      },
      {
        question: "std::list phù hợp khi nào?",
        options: [
          "Chèn/xoá nhiều ở giữa danh sách",
          "Truy cập index nhanh",
          "Cần vùng nhớ liên tục",
          "Cần sorted key",
        ],
        answer: 0,
        explanation: "list giữ ổn định khi chèn/xoá tại iterator.",
      },
      {
        question: "std::map giữ các phần tử theo thứ tự nào?",
        options: [
          "Theo key đã sắp xếp",
          "Theo thứ tự chèn",
          "Ngẫu nhiên",
          "Theo giá trị",
        ],
        answer: 0,
        explanation: "map sắp xếp theo key.",
      },
      {
        question: "Container nào cho phép trùng lặp và giữ thứ tự chèn?",
        options: ["vector", "set", "map", "unordered_set"],
        answer: 0,
        explanation: "vector giữ mọi phần tử theo thứ tự chèn.",
      },
      {
        question: "std::find trả gì khi không thấy phần tử?",
        options: ["Iterator end", "-1", "0", "nullptr"],
        answer: 0,
        explanation: "find trả end khi không có kết quả.",
      },
      {
        question: "std::sort yêu cầu iterator loại nào?",
        options: [
          "Random-access",
          "Mảng liên kết",
          "Chỉ bidirectional",
          "Chỉ input",
        ],
        answer: 0,
        explanation: "sort cần random-access iterator.",
      },
      {
        question: "std::max_element trả về gì?",
        options: [
          "Iterator tới phần tử lớn nhất",
          "Giá trị lớn nhất",
          "Chỉ số",
          "true/false",
        ],
        answer: 0,
        explanation: "Trả iterator, phải dereference để lấy giá trị.",
      },
      {
        question: "Iterator trở nên invalid khi nào?",
        options: [
          "Container reallocate",
          "Khi gọi size()",
          "Sau range-based for",
          "Không bao giờ",
        ],
        answer: 0,
        explanation: "Reallocation làm iterator cũ không hợp lệ.",
      },
    ],
    "10 · Hàm (Functions)": [
      {
        question: "Tham số const T& có lợi gì?",
        options: [
          "Tham chiếu không sao chép và không sửa được",
          "Luôn copy dữ liệu",
          "Chỉ nhận số nguyên",
          "Tạo biến toàn cục",
        ],
        answer: 0,
        explanation: "const T& tránh copy và bảo vệ dữ liệu gốc.",
      },
      {
        question: "Prototype hàm có tác dụng gì?",
        options: [
          "Khai báo chữ ký hàm trước khi dùng",
          "Định nghĩa biến",
          "Gộp header",
          "Tạo vòng lặp",
        ],
        answer: 0,
        explanation: "Prototype cho compiler biết chữ ký hàm.",
      },
      {
        question: "Hàm void khác gì?",
        options: [
          "Không trả về giá trị",
          "Không có tham số",
          "Luôn inline",
          "Không gọi được",
        ],
        answer: 0,
        explanation: "void nghĩa là không trả dữ liệu.",
      },
    ],
    "11 · OOP & Kế thừa": [
      {
        question: "Member của class mặc định có quyền truy cập gì?",
        options: ["private", "public", "protected", "static"],
        answer: 0,
        explanation: "Trong class member mặc định private.",
      },
      {
        question: "Constructor được gọi khi nào?",
        options: [
          "Khi object được tạo",
          "Khi xoá object",
          "Lúc biên dịch",
          "Khi thoát main",
        ],
        answer: 0,
        explanation: "Constructor khởi tạo object khi tạo.",
      },
      {
        question: "Hàm member const đảm bảo điều gì?",
        options: [
          "Không thay đổi trạng thái quan sát được",
          "Luôn inline",
          "Trả về void",
          "Chạy ở heap",
        ],
        answer: 0,
        explanation: "Const member không đổi đối tượng.",
      },
      {
        question: "Virtual dispatch diễn ra khi gọi hàm qua đâu?",
        options: [
          "Con trỏ hoặc tham chiếu tới base",
          "Object value",
          "Static_cast",
          "sizeof",
        ],
        answer: 0,
        explanation: "Gọi qua base reference/pointer mới dùng dispatch động.",
      },
      {
        question: "Từ khoá nào báo compiler kiểm tra hàm đã ghi đè đúng?",
        options: ["override", "virtual", "inline", "explicit"],
        answer: 0,
        explanation: "override phát hiện ghi đè sai chữ ký.",
      },
      {
        question: "Abstract class có đặc điểm gì?",
        options: [
          "Có ít nhất một pure virtual function",
          "Không có member",
          "Không kế thừa được",
          "Luôn là struct",
        ],
        answer: 0,
        explanation: "Abstract chứa pure virtual nên không khởi tạo trực tiếp.",
      },
    ],
    "09 · Struct, Enum, Tham chiếu & Con trỏ": [
      {
        question: "RAII quản lý tài nguyên thế nào?",
        options: [
          "Gắn tài nguyên vào lifetime object",
          "Giải phóng thủ công mọi nơi",
          "Dùng biến toàn cục",
          "Tắt exception",
        ],
        answer: 0,
        explanation: "RAII dùng destructor để tự giải phóng.",
      },
      {
        question: "std::unique_ptr biểu diễn điều gì?",
        options: [
          "Sở hữu duy nhất",
          "Sở hữu chia sẻ",
          "Không sở hữu",
          "Con trỏ thô",
        ],
        answer: 0,
        explanation: "unique_ptr sở hữu duy nhất, không copy.",
      },
      {
        question: "Hàm nào của unique_ptr nhả ownership?",
        options: ["release", "get", "reset", "size"],
        answer: 0,
        explanation: "release nhả quyền sở hữu mà không giải phóng.",
      },
      {
        question: "std::weak_ptr giải quyết vấn đề gì?",
        options: [
          "Vòng lặp tham chiếu; quan sát không sở hữu",
          "Tăng tốc heap",
          "Xoá exception",
          "Thay vector",
        ],
        answer: 0,
        explanation: "weak_ptr phá cycle và không giữ ownership.",
      },
      {
        question: "Sau std::move, trạng thái object nguồn là?",
        options: [
          "Hợp lệ nhưng giá trị không xác định",
          "Luôn như cũ",
          "Đã giải phóng",
          "Lỗi biên dịch",
        ],
        answer: 0,
        explanation: "Moved-from object phải còn hợp lệ.",
      },
      {
        question: "Smart pointer thay new/delete giúp gì?",
        options: [
          "Tự giải phóng tài nguyên",
          "Không cần include",
          "Nhanh hơn",
          "Bỏ constructor",
        ],
        answer: 0,
        explanation: "Smart pointer theo RAII tự giải phóng.",
      },
    ],
    "12 · Templates, File & Xử lý lỗi": [
      {
        question: "Lợi ích chính của function template?",
        options: [
          "Viết một lần dùng cho nhiều kiểu",
          "Luôn chạy nhanh hơn",
          "Không cần include",
          "Tạo class mới",
        ],
        answer: 0,
        explanation: "Template tái sử dụng logic cho nhiều kiểu.",
      },
      {
        question: "if constexpr khác if thường ở đâu?",
        options: [
          "Loại nhánh không phù hợp lúc biên dịch",
          "Chạy ở runtime",
          "Không cần điều kiện",
          "Chỉ với int",
        ],
        answer: 0,
        explanation: "if constexpr quyết định tại compile time.",
      },
      {
        question: "Concept (C++20) dùng để làm gì?",
        options: [
          "Ràng buộc tham số template",
          "Khai báo biến",
          "Gộp hàm",
          "Tạo macro",
        ],
        answer: 0,
        explanation: "Concept ràng buộc kiểu và làm lỗi dễ đọc hơn.",
      },
      {
        question: "Hàm nào của filesystem lấy phần mở rộng đường dẫn?",
        options: ["extension()", "stem()", "parent_path()", "filename()"],
        answer: 0,
        explanation: "extension() trả phần đuôi của path.",
      },
      {
        question: "Trước khi đọc/ghi cần kiểm tra gì ở ofstream?",
        options: ["Tệp mở thành công", "Tên biến", "Kiểu dữ liệu", "Dòng lệnh"],
        answer: 0,
        explanation: "Phải kiểm tra tệp mở hợp lệ.",
      },
      {
        question: "Tách module trong project nhằm mục tiêu gì?",
        options: [
          "Dễ bảo trì và tái sử dụng",
          "Tăng số file",
          "Làm chậm chương trình",
          "Bỏ header",
        ],
        answer: 0,
        explanation: "Tách module giúp gọn và dễ kiểm thử.",
      },
    ],
    "15 · How-To & Tra cứu thư viện": [
      {
        question: "std::optional thay cho cách làm nào?",
        options: [
          "Giá trị đặc biệt như -1 hoặc con trỏ null để 'không có'",
          "Vòng lặp",
          "Sắp xếp",
          "File I/O",
        ],
        answer: 0,
        explanation: "optional biểu diễn có/không có rõ ràng.",
      },
      {
        question: "Structured binding (C++17) giúp gì?",
        options: [
          "Tách pair/tuple thành biến có tên",
          "Tạo vòng lặp",
          "Định nghĩa hàm",
          "Gộp header",
        ],
        answer: 0,
        explanation: "auto [a,b]=entry đặt tên từng thành phần.",
      },
      {
        question: "std::string_view phù hợp khi nào?",
        options: [
          "Đọc chuỗi không sao chép trong lifetime hợp lệ",
          "Ghi đè chuỗi",
          "Lưu lâu dài",
          "Thay vector",
        ],
        answer: 0,
        explanation: "string_view là view không sở hữu dữ liệu.",
      },
    ],
    "14 · Dự án & Chứng chỉ": [
      {
        question: "Vì sao test từng chức năng trước khi ghép menu?",
        options: [
          "Phát hiện lỗi sớm, cô lập nguyên nhân",
          "Cho đẹp",
          "Giảm số hàm",
          "Bỏ validation",
        ],
        answer: 0,
        explanation: "Test nhỏ cô lập lỗi ở tầng đơn vị.",
      },
      {
        question: "Khi thiết kế class, ưu tiên hàng đầu là gì?",
        options: [
          "Giữ bất biến (invariant) rõ ràng",
          "Thêm nhiều hàm",
          "Dùng biến toàn cục",
          "Ẩn lỗi",
        ],
        answer: 0,
        explanation: "Class tốt bảo vệ bất biến dữ liệu.",
      },
      {
        question: "Ownership rõ ràng giúp tránh lỗi nào?",
        options: [
          "Leak và double free",
          "Tăng vòng lặp",
          "Giảm header",
          "Bỏ destructor",
        ],
        answer: 0,
        explanation: "Xác định owner tránh lỗi bộ nhớ phổ biến.",
      },
    ],
  });
  window.cppLessons = lessons;
})();
