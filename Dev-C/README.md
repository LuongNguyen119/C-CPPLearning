# Dev-C — Môi trường code C/C++ giống Dev-C++

Một trình soạn thảo C/C++ chạy trên trình duyệt, sử dụng **Monaco Editor** (cùng engine với VS Code) và compiler server cục bộ (g++/gcc) như Dev-C++.

## Cấu trúc
```
Dev-C/
├── index.html          # Trình soạn thảo chính
├── launch_devc.bat     # Script khởi động (Windows)
└── README.md           # File này
```

## Yêu cầu
- **Python 3.8+** (đã cài trên máy bạn)
- **g++ (MinGW/MSYS2)** cho C++17/20
- **gcc** cho C11
- Các server compiler đã có sẵn trong project gốc:
  - `CPP/cpp_server.py` → port 8766 (C++)
  - `C/c_server.py`     → port 8765 (C)

## Cách chạy

### Windows (khuyên dùng)
Double-click vào `launch_devc.bat` — nó sẽ:
1. Khởi động 2 compiler server ngầm
2. Mở `index.html` trên trình duyệt mặc định

### Hoặc chạy thủ công
```bash
# Terminal 1 - C++ server
python ../CPP/cpp_server.py

# Terminal 2 - C server
python ../C/c_server.py

# Mở Dev-C/index.html trên trình duyệt
```

## Phím tắt (giống Dev-C++ / VS Code)
| Phím | Chức năng |
|------|-----------|
| **F9** | Biên dịch & Chạy (Compile & Run) |
| **Ctrl+N** | File mới |
| **Ctrl+O** | Mở file từ máy tính |
| **Ctrl+S** | Lưu file |
| **Ctrl+Shift+S** | Lưu dưới tên khác |
| **Ctrl+/** | Comment/uncomment dòng |
| **Alt+Up/Down** | Di chuyển dòng lên/xuống |
| **Alt+Shift+Up/Down** | Nhân bản dòng |
| **Ctrl+D** | Chọn từ tiếp theo giống nhau |
| **Ctrl+Shift+L** | Chọn tất cả từ giống nhau |
| **F12** | Go to Definition (trong file) |

## Lưu file
- File được lưu vào **localStorage** của trình duyệt (giữ lại sau khi tắt tab)
- Nút **Save As** cho phép đặt tên file `.c` hoặc `.cpp`
- Nút **Open** đọc file từ ổ cứng vào editor

## Chuyển đổi ngôn ngữ
- Dropdown **C / C++** trên toolbar: tự động chuyển syntax highlight và compiler tương ứng
- Mặc định mở file `.c` → C, `.cpp/.cc/.cxx` → C++

## Compiler backend
| Ngôn ngữ | Compiler | Chuẩn | Server |
|----------|----------|-------|--------|
| C++ | g++ | C++20 (`-std=c++20 -Wall -Wextra -pedantic`) | `http://127.0.0.1:8766/api` |
| C | gcc | C11 (`-std=c11 -Wall -Wextra -pedantic`) | `http://127.0.0.1:8765/api` |

Nếu compiler server không chạy, editor sẽ báo lỗi kết nối và hướng dẫn khởi động.

## Theme
- Mặc định: **Dark (VS Code Dark+)**
- Nút **Theme** trên toolbar chuyển sang Light mode

## Khác biệt với Dev-C++ gốc
| Dev-C++ | Dev-C (này) |
|---------|-------------|
| App native Windows | Chạy trên trình duyệt (HTML/JS) |
| Compiler g++ tích hợp sẵn | Dùng compiler server Python riêng biệt |
| Project file `.dev` | Lưu file riêng lẻ vào localStorage / disk |
| GDB debugger tích hợp | Chưa có debugger (chỉ compile + run) |

## Mở rộng
- Thêm language: chỉnh `index.html` → `langSel` + `getDefaultCode()`
- Thêm compiler flag: sửa `cpp_server.py` / `c_server.py`
- Thêm template: thêm case trong `getDefaultCode()`

## Licencia
Mã nguồn mở, dùng tự do cho học tập và phát triển.