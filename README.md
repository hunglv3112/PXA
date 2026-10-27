# Dự Án Trục Thời Gian Tương Tác Hai Nhánh (Dual-Axis Horizontal Timeline)

> Dự án giao diện dòng thời gian lịch sử tương tác hai nửa song song (Trục trên: Tình báo, Trục dưới: Nhà báo). Dự án được thiết kế chuyên nghiệp, module hóa toàn bộ thư mục để bạn có thể **thay thế chữ, hình ảnh, màu sắc và sự kiện** một cách nhanh chóng nhất.

---

## 📁 1. Cấu Trúc Thư Mục Dự Án

```text
PXA/
├── index.html               # File HTML chính của trang web
├── README.md                # Tài liệu hướng dẫn sử dụng chi tiết (tệp này)
│
├── data/                    # ✏️ KHU VỰC THAY ĐỔI DỮ LIỆU & NỘI DUNG CHỮ
│   ├── config.js            # Cấu hình tiêu đề web, tên 2 nhánh lề trái, cột giới thiệu Intro
│   ├── context-data.js      # 📜 Bối cảnh lịch sử Việt Nam 1945 - 1975 (màn hình đọc trước)
│   ├── timeline-data.js     # Danh sách toàn bộ các sự kiện lịch sử theo năm
│   └── side-stories.js      # 🌟 Danh sách các mẩu chuyện ngoài lề (icon trên đường kẻ giữa 1957 - 1959)
│
├── assets/                  # 🖼️ KHU VỰC CHỨA HÌNH ẢNH & TÀI NGUYÊN
│   └── images/              # Thư mục chứa ảnh minh họa cho các sự kiện
│       ├── README.txt       # Hướng dẫn kích thước và tỷ lệ ảnh chuẩn
│       ├── context-saigon.jpg   # Ảnh tư liệu Sài Gòn cho trang bối cảnh lịch sử
│       ├── context-division.jpg # Ảnh tư liệu Vĩ tuyến 17 cho trang bối cảnh lịch sử
│       ├── pxa-avatar.jpg   # Ảnh avatar nhỏ của Phạm Xuân Ẩn trên đường kẻ giữa
│       ├── sample-intel.jpg # Ảnh mẫu cho nhánh Tình báo
│       └── sample-journalist.jpg # Ảnh mẫu cho nhánh Nhà báo
│
├── css/                     # 🎨 KHU VỰC TÙY CHỈNH MÀU SẮC & GIAO DIỆN
│   ├── theme.css            # Bảng màu (palette), font chữ, biến kích thước
│   ├── context.css          # Giao diện trang Bối cảnh lịch sử mở đầu
│   ├── style.css            # Khung giao diện chính, thẻ card, thanh ray, modal
│   └── responsive.css       # Tương thích trên điện thoại di động & tablet
│
└── js/                      # ⚙️ MÃ NGUỒN LOGIC ĐIỀU KHIỂN
    ├── lang.js              # 🌐 Bộ điều khiển đa ngôn ngữ (VI / JA), lưu cài đặt người dùng
    ├── icons.js             # Bộ biểu tượng vector SVG và bộ render tranh vẽ
    ├── modal.js             # Logic hiển thị popup chi tiết (Next, Prev, Đóng)
    ├── context.js           # Logic hiển thị trang Bối cảnh lịch sử và chuyển sang Timeline
    └── app.js               # Logic dựng trục thời gian, cuộn ngang, kéo chuột
```

---

## ✏️ 2. Hướng Dẫn Thay Đổi Chữ & Nội Dung

### A. Đổi tiêu đề trang & tên 2 nhánh lề trái
Mở file `data/config.js`, bạn sẽ thấy các mục:
```javascript
window.APP_CONFIG = {
  // Đổi tên trang hiển thị trên tab trình duyệt
  pageTitle: "Phạm Xuân Ẩn — Hai nửa một đời người",

  // Đổi nhãn chữ chạy dọc 2 bên lề trái
  rails: {
    top: {
      label: "Tình báo",        // Đổi chữ nhánh trên
      subLabel: "Mật danh X6"
    },
    bottom: {
      label: "Nhà báo",         // Đổi chữ nhánh dưới
      subLabel: "Ký giả Time & Reuters"
    }
  },

  // Đổi nội dung cột mở đầu (Intro) ở đầu trục
  intro: {
    name: "Phạm Xuân Ẩn",
    years: "1927 – 2006",
    subtitle: "Hai nửa một đời người",
    descriptionTop: "Đoạn giới thiệu nửa trên...",
    descriptionBottom: "Đoạn giới thiệu nửa dưới...",
    guideText: "Hướng dẫn người xem..."
  }
};
```

### B. Thay đổi các sự kiện lịch sử (Thêm / Sửa / Xóa)
Mở file `data/timeline-data.js`. Mỗi sự kiện là một đối tượng có cấu trúc như sau:

```javascript
{
  id: "1960b",                             // Mã định danh duy nhất
  y: 1960,                                 // Năm (bằng số để nhóm các thẻ cùng năm)
  yl: "1960",                              // Nhãn năm hiển thị (chuỗi, vd: "1960", "~1965")
  side: "bot",                             // Vị trí: "top" (trên), "bot" (dưới), "mid" (ở giữa trục)
  icon: "ticker",                          // Tên biểu tượng (xem danh sách icon ở mục 4)
  img: "assets/images/anh-cua-ban.jpg",     // Đường dẫn ảnh (để "" nếu muốn dùng tranh vector)
  title: "Gia nhập hãng thông tấn Reuters", // Tiêu đề ngắn của sự kiện
  date: "1960",                            // Mốc thời gian chi tiết
  text: [                                  // Nội dung chi tiết từng đoạn văn
    "Đoạn văn thứ nhất...",
    "Đoạn văn thứ hai..."
  ],
  note: "",                                // Ghi chú đối chiếu (nếu có, sẽ hiện chấm vàng cảnh báo)
  src: "Nguồn: Wikipedia"                  // Nguồn tài liệu tham khảo
}
```

### C. Thay đổi các câu chuyện bên lề trên đường kẻ trục
Mở file `data/side-stories.js`. Bạn có thể thay đổi vị trí (trước/sau mốc năm), ảnh avatar nhỏ, tiêu đề và các câu chuyện theo layout 1 cột:
```javascript
{
  id: "story-1957",
  afterYear: 1957,                           // Nằm giữa 1957 và 1958 (hoặc beforeYear để nằm trước)
  avatar: "assets/images/pxa-avatar.jpg",    // Đường dẫn ảnh nhỏ của nhân vật
  tooltip: "Chuyện bên lề (1957 – 1958): Bấm để đọc",
  meta: "Chuyện bên lề · 1957 – 1958",
  title: "Biến cố cha qua đời trước chuyến đi du học Mỹ",
  modalImg: "assets/images/1957_1959/1959_ChaPXAQuaDoi.jpg",
  caption: "Bàn thờ và di ảnh thân phụ của Phạm Xuân Ẩn...",
  text1: "Đoạn văn 1...",
  midImg: { src: "assets/images/1957_1959/1957_MuoiHuong.jpg", caption: "..." },
  text2: "Đoạn văn 2...",
  bottomImg: { src: "assets/images/1957_1959/1959_PhiTruongSanBayTanSanNhatTruoc1975.jpg", caption: "..." }
}
```

### D. Thay đổi nội dung trang Bối Cảnh Lịch Sử Việt Nam (1945 – 1975)
Mở file `data/context-data.js`. Trang này hiển thị đầu tiên trước khi người xem ấn nút vào timeline:
- **`hero`**: Tiêu đề lớn, câu dẫn dắt, ảnh bìa nền (`bgImage: "assets/images/context-saigon.jpg"`).
- **`quote`**: Câu trích dẫn triết lý tình báo chiến lược.
- **`chapters`**: Các giai đoạn lịch sử (Giai đoạn 1: 1945-1954; Giai đoạn 2: 1954-1960; Giai đoạn 3: 1960-1975). Mỗi giai đoạn gồm tiêu đề, ảnh minh họa, đoạn dẫn và các đoạn văn.
- **`cta`**: Chữ hiển thị trên nút bấm lớn: `"Đọc về Phạm Xuân Ẩn — Xem Dòng Thời Gian ›"`.

---

## 🖼️ 3. Hướng Dẫn Thay Thế Hình Ảnh

1. **Thêm ảnh mới**:
   - Chép file ảnh của bạn vào thư mục `assets/images/` (ví dụ: `assets/images/my-photo.jpg`).
2. **Gán vào sự kiện**:
   - Mở `data/timeline-data.js`, tìm đến sự kiện cần gắn ảnh và cập nhật thuộc tính:
     ```javascript
     img: "assets/images/my-photo.jpg",
     ```
3. **Nếu không có ảnh**:
   - Chỉ cần để `img: ""` (chuỗi rỗng), hệ thống sẽ **tự động vẽ bìa đồ họa vector nghệ thuật** với icon và số năm tương ứng.
4. **Tỷ lệ ảnh khuyến nghị**:
   - Tỷ lệ: `16:10` hoặc `3:2` (ví dụ: 800×500 pixel).
   - Định dạng: `.jpg`, `.png`, hoặc `.webp`.

---

## 🎨 4. Hướng Dẫn Thay Đổi Màu Sắc & Giao Diện

Mở file `css/theme.css` để tùy chỉnh bảng màu:
- `--spy-bg`: Màu nền của nửa trên.
- `--spy-2`: Màu thẻ sự kiện nửa trên.
- `--spy-acc`: Màu đường que nối và điểm nhấn nhánh trên.
- `--press-bg`: Màu nền của nửa dưới (màu giấy báo).
- `--press-2`: Màu thẻ sự kiện nửa dưới.
- `--hl`: Màu dạ quang vàng bút nhớ dòng.
- `--axis`: Chiều cao trục thời gian ở giữa.
- `--col`: Chiều rộng mỗi cột năm (mặc định 300px).

---

## 🌐 5. Hướng Dẫn Tính Năng Song Ngữ (Tiếng Việt & Tiếng Nhật)

Dự án hỗ trợ chuyển đổi ngôn ngữ mượt mà giữa **Tiếng Việt (`vi`)** và **Tiếng Nhật (`ja`)**:
- **Nút chuyển đổi**: Nằm cố định ở góc trên bên phải màn hình (`[ VI / 日本語 ]`), có thể bấm chuyển đổi bất cứ lúc nào từ cả 2 màn hình.
- **Lưu trạng thái**: Tự động ghi nhớ lựa chọn ngôn ngữ của người xem qua `localStorage`.
- **Cách chỉnh sửa nội dung song ngữ**:
  1. Trong `data/config.js`: Chỉnh sửa mục `vi` và `ja` cho tiêu đề, nhãn thanh ray và cột Intro.
  2. Trong `data/context-data.js`: Chỉnh sửa mục `vi` và `ja` cho toàn bộ trang Bối cảnh lịch sử.
  3. Trong `data/timeline-data.js`: Mỗi sự kiện có các trường tiếng Việt (`title`, `date`, `text`, `src`) và các trường tiếng Nhật tương ứng (`title_ja`, `date_ja`, `text_ja`, `src_ja`).
  4. Trong `data/side-stories.js`: Chứa nội dung tiếng Việt và tiếng Nhật (`title_ja`, `stories_ja`...).

---

## 🌟 6. Danh Sách Biểu Tượng Vector Có Sẵn (`icon`)

Trong tệp `js/icons.js`, có sẵn các biểu tượng vector sắc nét:
- `seed`: Mầm non cách mạng
- `key`: Chìa khóa / Mật mã
- `doc`: Tài liệu mật / Hồ sơ
- `cap`: Mũ cử nhân / Du học
- `plane`: Máy bay / Xuất ngoại
- `ticker`: Máy telex / Tin báo chí
- `redact`: Mực đen bảo mật
- `mag`: Báo in / Tạp chí Time
- `eye`: Con mắt quan sát / Điểm nghe
- `mail`: Bức điện tín
- `house`: Mái nhà / Quê hương
- `star`: Ngôi sao chiến công
- `rings`: Vòng tròn sinh mệnh (Sinh/Mất)
- `camera`: Máy ảnh phóng viên
- `award`: Huân chương
- `book`: Sách / Hồi ký

---

## 🚀 7. Cách Chạy Dự Án

- **Cách 1 (Nhanh nhất)**: Nhấp đúp chuột trực tiếp vào file `index.html` trong File Explorer để mở trên bất kỳ trình duyệt nào (Chrome, Edge, Firefox, Cốc Cốc,...). Hoàn toàn không bị lỗi CORS vì dữ liệu được module hóa qua tệp `.js`.
- **Cách 2 (Live Server)**: Mở thư mục này trong Visual Studio Code và bấm **Go Live** (tiện ích Live Server).
- **Cách 3 (Node/Python)**:
  ```bash
  # Nếu dùng Python:
  python -m http.server 8080
  # Sau đó truy cập: http://localhost:8080
  ```

---

## ⌨️ 8. Phím Tắt Tiện Ích

- **Con lăn chuột**: Lăn chuột lên/xuống để cuộn ngang dòng thời gian.
- **Kéo chuột (Drag)**: Giữ chuột trái và kéo ngang như màn hình cảm ứng.
- **Phím `←` / `→` (hoặc `A` / `D`)**: Cuộn sang trái hoặc phải trên timeline; khi đang mở cửa sổ xem chi tiết, dùng để chuyển giữa các mốc sự kiện trước và sau.
- **Phím `Esc`**: Đóng cửa sổ xem chi tiết.
