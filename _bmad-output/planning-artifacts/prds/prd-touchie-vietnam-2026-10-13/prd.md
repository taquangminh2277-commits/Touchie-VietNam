---
title: PRD Touchie Vietnam - E-Commerce Landing Page
created: 2026-10-13
updated: 2026-10-13
status: draft
---

# PRD: Touchie Vietnam - E-Commerce Landing Page

## 0. Document Purpose
Tài liệu PRD này đặc tả toàn bộ yêu cầu sản phẩm, hành trình khách hàng (User Journey) và các yêu cầu chức năng (FR)/phi chức năng (NFR) cho Landing Page bán hàng của thương hiệu nến thơm thủ công **Touchie Vietnam**. Tài liệu làm kim chỉ nam cho thiết kế UX/UI (`bmad-ux`), kiến trúc hệ thống (`bmad-architecture`) và quá trình triển khai (`bmad-build`).

---

## 1. Vision & Định vị Thương hiệu
**Touchie Vietnam** là thương hiệu nến thơm thủ công (Artisanal Botanical Candles) mang phong cách **Retro Warmth / Cozy Vintage** kết hợp sự tinh tế hiện đại. 
- **Thông điệp cốt lõi:** *"Chạm vào bình yên sau một ngày dài"* — Mùi hương như một liệu pháp xúc giác và khứu giác vỗ về cảm xúc.
- **Dấu ấn sản phẩm:** Hũ thủy tinh màu hổ phách (Amber jar), nắp nhôm đen vân khía, nhãn dán phong cách thập niên 70s ấm áp, 100% sáp cọ & sáp đậu nành thực vật tự nhiên, bề mặt điểm xuyết lát cam sấy mộc và thảo mộc khô.
- **Mục tiêu của Landing Page:** Trở thành một **Digital Boutique** đậm chất thơ, giúp khách hàng "ngửi" thấy mùi hương qua hình ảnh và câu chuyện, đồng thời tối ưu chuyển đổi đặt hàng siêu tốc trong 30 giây (One-Step Checkout).

---

## 2. Target User & Hành trình Khách hàng

### 2.1 Jobs To Be Done (JTBD)
- **Cảm xúc / Trị liệu (Self-care):** *"Tôi muốn một không gian ấm cúng, thư giãn và thơm dịu sau giờ làm việc căng thẳng để tái tạo năng lượng."*
- **Quà tặng (Gifting):** *"Tôi muốn tìm một món quà tinh tế, đóng gói sang trọng, có gu để tặng sinh nhật/bạn bè/người yêu mà không cần đau đầu đắn đo."*
- **Trang trí / Phong cách sống (Lifestyle Decor):** *"Tôi muốn một món đồ trang trí góc bàn làm việc hoặc phòng ngủ mang hơi hướng vintage ấm áp."*

### 2.2 Key User Journeys (UJ)

#### UJ-1: Linh tìm nến thư giãn sau giờ làm và chốt đơn 1 bước
- **Persona:** Linh (24 tuổi, chuyên viên marketing tại TP.HCM, thường xuyên stress vì deadline).
- **Ngữ cảnh:** Lướt TikTok/Instagram vào buổi tối, thấy video nến thơm Warm Orange bập bùng với lát cam khô và nhạc lofi ấm áp. Nhấp vào link bio dẫn tới Landing Page Touchie Vietnam.
- **Hành trình:**
  1. Trang tải tức thì (<1 giây). Đập vào mắt là ảnh hũ nến ấm cúng và thông điệp *"Chạm vào bình yên"*.
  2. Linh kéo xuống mục **Bộ 3 Chữ Ký (The Signature Trio)**, bấm nghe/xem mô tả mùi *Warm Orange* (Cam chín & Gỗ thông).
  3. Sử dụng công cụ **Interactive Mood Matcher**, chọn trạng thái *"Muốn thư giãn nhẹ nhàng"* ➔ Hệ thống gợi ý *Warm Orange* hoặc *Creamy Butter*.
  4. Linh kéo xuống phần **Đặt Hàng Nhanh (Express Checkout)**: chọn 1 hũ Warm Orange, điền Tên + SĐT + Địa chỉ, chọn phương thức Quét mã VietQR.
  5. Màn hình hiển thị mã QR chuyển khoản chính xác số tiền. Linh quét app ngân hàng trong 10 giây và nhận thông báo đặt hàng thành công.

#### UJ-2: Hoàng chọn Set quà tặng sinh nhật bạn gái
- **Persona:** Hoàng (27 tuổi, kỹ sư, cần tìm quà tặng bạn gái tinh tế, đóng gói sẵn).
- **Hành trình:** 
  1. Hoàng vào web, thấy ngay banner giới thiệu **"The Signature Trio Giftbox - Trọn bộ 3 mùi hương trong hộp quà cao cấp"**.
  2. Xem ảnh unbox hộp quà sang trọng kèm thiệp viết tay và que diêm dài vintage.
  3. Bấm chọn `[Đặt Mua Hộp Quà 3 Mùi]`, điền thông tin và yêu cầu ghi chú lời chúc thiệp tặng. Hoàn tất đơn hàng nhanh chóng.

---

## 3. Glossary (Thuật ngữ chuẩn)

- **Touchie Vessel:** Hũ thủy tinh màu hổ phách 100gr, nắp nhôm đen, nhãn phong cách Retro Chubby.
- **Botanical Topping:** Lát cam vàng sấy khô và thảo mộc tự nhiên trang trí bề mặt sáp nến.
- **Plant-based Wax:** Hỗn hợp sáp cọ và sáp đậu nành 100% tự nhiên, không khói đen, không paraffin độc hại.
- **The Signature Trio:** Bộ 3 sản phẩm chủ lực đầu tiên:
  1. **Creamy Butter:** Hương bơ ngọt ngào, kem béo mịn màng.
  2. **Warm Orange:** Hương cam chín mọng ngọt mát, gỗ thông và hổ phách ấm áp.
  3. **Orchid Veil:** Hương hoa lan tím thanh thoát, gỗ đàn hương trầm lắng.
- **One-Step Checkout:** Form đặt hàng tích hợp sẵn ngay trên trang, không yêu cầu tạo tài khoản.

---

## 4. Yêu Cầu Chức Năng (Functional Requirements)

### 4.1 Visual Hero & Storytelling
- **FR-1:** Trang chủ phải có Hero Section hiển thị khẩu hiệu thương hiệu, hình ảnh lifestyle chất lượng cao của nến thơm, và CTA dẫn thẳng tới mua hàng hoặc khám phá bộ sưu tập.
- **FR-2:** Hiển thị phần triết lý chế tác (*Crafting Philosophy*): 100% sáp thực vật, bấc cotton an toàn, thời gian đốt 15 giờ liên tục, thân thiện sức khỏe & thú cưng.

### 4.2 The Signature Trio Showcase
- **FR-3:** Trình bày chi tiết 3 mùi hương (Creamy Butter, Warm Orange, Orchid Veil) với tab/carousel tương tác trực quan:
  - Tên sản phẩm, định lượng (100gr), thời gian đốt (15h).
  - Tầng hương chi tiết (Top, Heart, Base Notes).
  - Thước đo cảm xúc (Độ tỏa hương, Độ ngọt, Độ ấm).
  - Khuyến nghị không gian phù hợp (Phòng ngủ, Phòng khách, Bếp, Bàn làm việc).

### 4.3 Interactive Scent & Mood Matcher
- **FR-4:** Bộ lọc tâm trạng tương tác (Mini Quiz/Filter): Người dùng nhấp chọn tâm trạng mong muốn (*Thư giãn / Năng lượng / Tĩnh tâm / Ngọt ngào*) ➔ Giao diện highlight mùi hương phù hợp nhất kèm nút `[Chọn Mua]`.

### 4.4 Set Quà Tặng & Upsell Phụ Kiện (Giftbox & Add-ons)
- **FR-5:** Section riêng biệt giới thiệu **Hộp Quà Signature Trio** (Hộp cứng craft, ruy băng sang trọng, thiệp ghi lời chúc theo yêu cầu).
- **FR-6:** Tùy chọn mua kèm phụ kiện (Hộp diêm dài vintage, chuông dập lửa/kéo cắt bấc) ngay tại bước đặt hàng.

### 4.5 Express One-Step Checkout
- **FR-7:** Cho phép người dùng chọn gói sản phẩm trực tiếp:
  - Mua lẻ 1 hũ (cho phép chọn mùi).
  - Combo 2 hũ (tự phối mùi).
  - Trọn bộ 3 hũ Giftbox (đóng hộp quà).
- **FR-8:** Form thông tin đơn giản: Họ tên, Số điện thoại, Địa chỉ giao hàng, Ghi chú đơn hàng (viết thiệp).
- **FR-9:** Phương thức thanh toán linh hoạt:
  - Thanh toán khi nhận hàng (COD).
  - Chuyển khoản ngân hàng tự động qua mã **VietQR** (tích hợp sẵn số tài khoản, số tiền và nội dung chuyển khoản).
- **FR-10:** Xử lý đơn hàng: Gửi thông báo đơn hàng tức thì (Webhook về Google Sheets / Telegram bot / Email quản trị viên).

---

## 5. Yêu Cầu Phi Chức Năng (Non-Functional Requirements - NFR)

- **NFR-1 (Hiệu năng):** Thời gian tải trang lần đầu (First Contentful Paint) < 1.2s trên kết nối 4G di động. Điểm Google Lighthouse Mobile > 90.
- **NFR-2 (Mobile-First UI):** Thiết kế tối ưu 100% cho màn hình điện thoại (vì 85%+ lưu lượng truy cập từ mạng xã hội).
- **NFR-3 (Bảng màu & Thị giác):** Áp dụng bảng màu ấm cúng: Kem vani (`#FAF7F2`), Nâu trầm hạt dẻ (`#3D2B1F`), Cam đất (`#C85A17`), Be gỗ mộc (`#D4B996`). Typography phong cách Retro-modern.
- **NFR-4 (Bảo mật & Ổn định):** Dữ liệu đơn hàng không lộ công khai; form thanh toán bảo mật, chống spam đặt hàng ảo.

---

## 6. Phạm Vi Dự Án (MVP Scope)

### 6.1 Trong phạm vi (In Scope - MVP v1):
- Landing Page đơn (Single-page app) hoàn chỉnh từ Hero ➔ Showcase 3 mùi ➔ Mood Matcher ➔ Form đặt hàng 1 bước.
- Trình tạo mã VietQR tự động theo giá trị đơn hàng.
- Nút liên hệ nhanh qua Zalo & Facebook Messenger nổi góc màn hình.
- Đồng bộ đơn hàng về Google Sheets để chủ shop tiện quản lý và gọi điện xác nhận.

### 6.2 Ngoài phạm vi (Out of Scope - Để dành v2):
- Hệ thống tài khoản đăng nhập thành viên/tích điểm.
- Đa ngôn ngữ (chỉ tập trung tiếng Việt cho thị trường nội địa giai đoạn đầu).
- Tích hợp cổng thanh toán Visa/Mastercard quốc tế.
