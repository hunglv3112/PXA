================================================================================
THƯ MỤC CHỨA HÌNH ẢNH DỰ ÁN (assets/images/)
================================================================================

1. CÁCH THAY ẢNH CHO CÁC SỰ KIỆN:
----------------------------------
- Bước 1: Sao chép file ảnh của bạn vào thư mục này (ví dụ: "anh-1927.jpg", "time-1965.png",...).
- Bước 2: Mở tệp `data/timeline-data.js`.
- Bước 3: Tìm đến sự kiện bạn muốn đổi ảnh và cập nhật thuộc tính `img`:
  
  Ví dụ:
  {
    id: "1927",
    ...
    img: "assets/images/anh-1927.jpg",  // <-- Điền đường dẫn ảnh tại đây
    ...
  }

- Lưu ý: Nếu bạn để `img: ""` (chuỗi rỗng), hệ thống sẽ tự động vẽ một bìa đồ họa vector
  nghệ thuật với biểu tượng `icon` và năm của sự kiện đó.

2. ĐỊNH DẠNG VÀ TỶ LỆ ẢNH KHUYẾN NGHỊ:
-------------------------------------
- Định dạng: .jpg, .jpeg, .png, .webp
- Tỷ lệ hiển thị tối ưu: 16:10 hoặc 3:2 (ví dụ: 600x375px hoặc 800x500px)
- Dung lượng tối ưu: dưới 300KB mỗi ảnh để trang web tải nhanh và mượt mà nhất.
