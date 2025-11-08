# Hướng dẫn sử dụng tính năng Chat

## Tính năng đã hoàn thành

### 1. Chat với người bán
- Click nút "Chat" ở góc phải màn hình để mở danh sách cuộc hội thoại
- Click vào một cuộc hội thoại để bắt đầu chat
- Từ trang chi tiết sản phẩm, click "Chat với người bán" để chat trực tiếp

### 2. Auto-reply thông minh
Hệ thống sẽ tự động trả lời khi bạn hỏi về:
- Giá sản phẩm: "giá", "bao nhiêu"
- Giao hàng: "ship", "giao hàng", "vận chuyển"
- Tồn kho: "còn hàng", "còn không"
- Bảo hành: "bảo hành"
- Chào hỏi: "chào", "hello", "hi"
- Cảm ơn: "cảm ơn", "thanks"

### 3. Lưu trữ
- Tất cả tin nhắn được lưu trong localStorage
- Dữ liệu vẫn còn khi reload trang

## Cách test chức năng

### Test 1: Chat từ nút floating
1. Reload trang
2. Nhìn góc phải dưới màn hình, sẽ thấy nút "Chat" màu xanh
3. Click vào nút Chat
4. Sẽ thấy 1 cuộc hội thoại demo với Xiaomi Official Store
5. Click vào cuộc hội thoại đó
6. Gõ tin nhắn thử như: "Giá bao nhiêu?", "Còn hàng không?"
7. Hệ thống sẽ tự động reply sau 2-5 giây

### Test 2: Chat từ trang sản phẩm
1. Vào trang chi tiết bất kỳ sản phẩm nào
2. Scroll xuống phần thông tin sản phẩm
3. Click nút "Chat với người bán" (nút màu xanh nhạt với icon chat)
4. Cửa sổ chat sẽ mở với người bán của sản phẩm đó
5. Bắt đầu chat

### Test 3: Nhiều cuộc hội thoại
1. Chat với người bán từ sản phẩm A
2. Đóng chat, chuyển sang sản phẩm B (brand khác)
3. Chat với người bán của sản phẩm B
4. Click nút Chat ở góc màn hình
5. Sẽ thấy 2 cuộc hội thoại riêng biệt

## Các tính năng nổi bật

✅ Badge đỏ hiển thị số tin nhắn chưa đọc
✅ Trạng thái online/offline của người bán
✅ Tin nhắn được nhóm theo ngày
✅ Scroll tự động đến tin nhắn mới nhất
✅ Enter để gửi tin nhắn
✅ Responsive hoàn toàn trên mobile
✅ Animation mượt mà

## Lưu ý

- Warning "Fast refresh" trong ChatContext.tsx không ảnh hưởng đến chức năng
- Demo conversation sẽ tự động load nếu chưa có data trong localStorage
- Có thể xóa localStorage để reset về trạng thái ban đầu

## API tương lai (có thể mở rộng)

Hiện tại chat đang dùng localStorage + auto-reply. Để kết nối backend:
1. Thay thế auto-reply bằng API call
2. Dùng WebSocket cho real-time chat
3. Update function `sendMessage` trong ChatContext.tsx
