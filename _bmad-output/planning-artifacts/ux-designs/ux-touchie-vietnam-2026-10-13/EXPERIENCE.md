---
title: EXPERIENCE.md - Touchie Vietnam Information Architecture & Wireframes
status: final
created: 2026-10-13
updated: 2026-10-13
---

# EXPERIENCE: Touchie Vietnam Landing Page

## 1. Foundation & Platform Architecture
- **Form Factor:** Mobile-first Responsive Web (Thiết kế tối ưu từ màn hình 375px đến 1440px+).
- **Core Strategy:** Single-Page High-Conversion Funnel (Toàn bộ hành trình từ Khám phá ➔ Hiểu mùi hương ➔ Thử tâm trạng ➔ Đặt hàng diễn ra trên một trang liền mạch, không gián đoạn chuyển trang).

---

## 2. Wireframe Bố Cục Trang (Information Architecture & Page Layout)

```
+-------------------------------------------------------------------+
| [Sticky Top Header]                                               |
| Logo "Touchie Vietnam"            [Bộ sưu tập]  [Về chúng tôi]  [Mua ngay (CTA)] |
+-------------------------------------------------------------------+
| SECTION 1: HERO SECTION                                           |
| "Chạm vào bình yên sau một ngày dài"                              |
| Nến thơm thực vật thủ công - Hũ hổ phách ấm cúng                  |
| [Khám phá 3 Mùi Hương]        [Mua Combo Set 3 - Ưu đãi 499k]    |
| (Ảnh lớn: 3 Hũ nến hổ phách trên bàn gỗ mộc & ánh nắng chiều)     |
+-------------------------------------------------------------------+
| SECTION 2: BRAND PHILOSOPHY & BOTANICAL TRUST                     |
| 4 Trụ cột chất lượng:                                             |
| [100% Sáp Cọ & Đậu Nành]  [Khói Sạch An Toàn]  [15h Cháy Thơm]  [Cam Sấy Mộc] |
+-------------------------------------------------------------------+
| SECTION 3: THE SIGNATURE TRIO (3 MÙI HƯƠNG CHỦ LỰC)               |
| Tab chuyển đổi: [🍊 Warm Orange]  [🧁 Creamy Butter]  [🪻 Orchid Veil] |
| - Chi tiết từng nốt hương (Top / Heart / Base Notes)              |
| - Biểu đồ cảm xúc: Độ tỏa hương • Độ ngọt • Độ ấm                |
| - Không gian phù hợp: Phòng khách / Phòng ngủ / Bàn làm việc      |
| [Nút: Chọn Mua Mùi Này]                                           |
+-------------------------------------------------------------------+
| SECTION 4: INTERACTIVE MOOD MATCHER (QUẦY CHỌN HƯƠNG THEO TÂM TRẠNG)|
| "Hôm nay bạn cần gì nhất?"                                        |
| ( ) Cần giảm stress sau ngày dài   ➔ Gợi ý: Warm Orange          |
| ( ) Cần một giấc ngủ êm dịu ngọt   ➔ Gợi ý: Creamy Butter        |
| ( ) Cần không gian tĩnh lặng thiền ➔ Gợi ý: Orchid Veil           |
+-------------------------------------------------------------------+
| SECTION 5: THE GIFTBOX UNBOXING (SET QUÀ TẶNG TRỌN VẸN 3 MÙI)     |
| "Món quà tinh tế gửi trao người thương"                           |
| Hộp quà cứng sang trọng + 3 Hũ 100gr + Diêm dài + Thiệp viết tay  |
| Giá ưu đãi: 499.000đ (Freeship toàn quốc)                         |
| [Đặt Ngay Hộp Quà 3 Mùi]                                          |
+-------------------------------------------------------------------+
| SECTION 6: EXPRESS ONE-STEP CHECKOUT (FORM CHỐT ĐƠN 30 GIÂY)      |
| [BƯỚC 1: Chọn gói]                                                |
| ( ) 1 Hũ lẻ (199k)    ( ) Combo 2 hũ (359k)   (*) Set 3 hũ (499k) |
| [BƯỚC 2: Thông tin giao hàng]                                     |
| - Họ và tên                                                       |
| - Số điện thoại                                                   |
| - Địa chỉ nhận hàng                                               |
| - Lời chúc viết thiệp (nếu làm quà tặng)                          |
| [BƯỚC 3: Thanh toán]                                              |
| (*) Quét mã VietQR chuyển khoản nhanh      ( ) Trả tiền mặt (COD) |
| ---> Hiển thị mã QR VietQR kèm số tiền & nội dung tự động         |
| [XÁC NHẬN ĐẶT HÀNG NGAY]                                          |
+-------------------------------------------------------------------+
| FOOTER & SOCIAL LINKS                                             |
| Hotline / Zalo đặt hàng nhanh • Cam kết đổi trả 100% nếu vỡ hũ   |
+-------------------------------------------------------------------+
```

---

## 3. Interaction Primitives & State Patterns

### 3.1 Chuyển đổi mùi hương (Scent Tab Switch)
- **Tương tác:** Nhấp vào tên mùi hương hoặc vuốt nhẹ (Swipe) trên điện thoại.
- **Hiệu ứng:** Hình ảnh hũ nến mờ nhẹ (Fade-in 200ms) chuyển sang góc chụp của mùi đó, màu nền accent đổi nhẹ theo tông mùi (Cam đất cho Warm Orange, Vàng dịu cho Creamy Butter, Tím pastel cho Orchid Veil).

### 3.2 Bộ lọc tâm trạng (Mood Matcher Animation)
- Khi người dùng click chọn tâm trạng:
  - Thẻ kết quả phát sáng viền nhẹ màu hổ phách (`accent.amber`).
  - Tự động cuộn mượt (Smooth scroll) và highlight nút đặt hàng của mùi tương ứng.

### 3.3 Form Express Checkout thông minh
- **Tự động tính tiền:** Khi khách chuyển từ 1 hũ sang Combo 2 hũ hoặc Set 3 hũ, tổng tiền và ưu đãi Freeship tự động cập nhật ngay tức thì.
- **VietQR Modal:** Nếu chọn chuyển khoản, mã QR động tự động sinh kèm số tài khoản chủ shop, số tiền chính xác từng đồng và mã đơn hàng (VD: `TOUCHIE 0912345678`).

---

## 4. Accessibility (Hỗ trợ truy cập & Trải nghiệm)
- Độ tương phản chữ trên nền tối thiểu đạt chuẩn **WCAG AA (4.5:1)**: Chữ nâu espresso trên nền kem ivory đạt độ tương phản 9.2:1 (rất sắc nét và êm mắt).
- Vùng chạm (Touch Target) trên điện thoại cho tất cả các nút và ô chọn tối thiểu **48px x 48px**, đảm bảo bấm ngón tay dễ dàng không bao giờ bị trượt.
