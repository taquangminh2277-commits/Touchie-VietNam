---
title: DESIGN.md - Touchie Vietnam Design System & Style Guide
status: final
created: 2026-10-13
updated: 2026-10-13
tokens:
  colors:
    primary:
      terracotta: "#C85A17"     # Cam đất / Cam cháy (Warm Orange Accent, CTA)
      terracotta_hover: "#AF4B0E"
    secondary:
      espresso: "#3D2B1F"       # Nâu hạt dẻ đậm (Text chính, Heading, Luxury contrast)
      mocha: "#6B5344"          # Nâu cà phê dịu (Text phụ, Border tinh tế)
    background:
      ivory: "#FAF7F2"          # Kem vani / Warm Paper (Nền chủ đạo)
      sand: "#F2EBE1"           # Cát mịn ấm (Card background, Section xen kẽ)
      cream_white: "#FFFFFF"    # Trắng sữa tinh khiết (Input, Container nổi)
    accent:
      amber: "#D9822B"          # Màu hổ phách nến (Glow, Rating stars)
      sage_green: "#7A8B7B"     # Xanh xô thơm nhẹ (Tag thảo mộc, Tự nhiên)
      soft_lavender: "#8E7C93"  # Tím oải hương nhạt (Highlight Orchid Veil)
      butter_gold: "#E5A93C"    # Vàng bơ béo dịu (Highlight Creamy Butter)
  typography:
    heading_font: "'Fraunces', 'Playfair Display', serif"     # Retro Warmth / Groovy elegance
    body_font: "'Plus Jakarta Sans', 'Inter', sans-serif"    # Hiện đại, cực kỳ dễ đọc trên Mobile
    font_sizes:
      hero: "2.75rem"     # 44px
      h1: "2.25rem"       # 36px
      h2: "1.75rem"       # 28px
      h3: "1.25rem"       # 20px
      body: "1rem"        # 16px
      small: "0.875rem"   # 14px
      caption: "0.75rem"  # 12px
  spacing:
    container_max_width: "1140px"
    mobile_padding: "16px"
    desktop_padding: "24px"
    section_gap: "64px"
  rounded:
    sm: "6px"
    md: "12px"
    lg: "20px"
    full: "9999px"
  elevation:
    card: "0 4px 20px -2px rgba(61, 43, 31, 0.06)"
    hover: "0 10px 25px -3px rgba(61, 43, 31, 0.12)"
    modal: "0 20px 30px -5px rgba(61, 43, 31, 0.2)"
---

# Design System & Style Guide: Touchie Vietnam

## 1. Brand & Style Identity
- **Định vị thẩm mỹ:** **Retro Warmth & Artisanal Chic** (Ấm áp hoài niệm thập niên 70s kết hợp chủ nghĩa tối giản hiện đại Scandinavian).
- **Cảm xúc mang lại (Emotional Vibe):** Bình yên, vỗ về giác quan, ấm áp, thơm dịu, gần gũi nhưng sang trọng và có gu riêng biệt.
- **Vật liệu đặc trưng (Visual Metaphors):** 
  - Hũ thủy tinh màu hổ phách nâu óng ánh (Amber glass).
  - Nắp nhôm đen tuyền vân khía sắc nét.
  - Nhãn giấy mỹ thuật hạt thô (Off-white textured paper) với phông chữ uốn lượn phong cách hoài niệm.
  - Lát cam vàng sấy khô mộc mạc và hoa khô tự nhiên.

---

## 2. Color Palette (Bảng màu chi tiết)

| Token Name | Hex Code | Vai trò ứng dụng |
| :--- | :--- | :--- |
| `background.ivory` | `#FAF7F2` | Màu nền chủ đạo toàn trang, tạo cảm giác êm dịu cho mắt |
| `background.sand` | `#F2EBE1` | Màu nền các khối Section xen kẽ, ô tính năng phụ |
| `secondary.espresso`| `#3D2B1F` | Màu chữ chính, tiêu đề H1/H2/H3, biểu tượng, đường viền nắp nến |
| `secondary.mocha` | `#6B5344` | Màu chữ phụ, mô tả tầng hương, chú thích thông số |
| `primary.terracotta`| `#C85A17` | Màu nhấn hành động (CTA), nút Thêm vào giỏ, nút Đặt mua |
| `accent.amber` | `#D9822B` | Màu ánh sáng ngọn lửa nến, sao đánh giá, tag "Best Seller" |
| `accent.sage_green` | `#7A8B7B` | Tag cam kết 100% sáp cọ đậu nành tự nhiên, an toàn sức khỏe |

---

## 3. Typography Hierarchy

- **Heading Display (Font serif cổ điển hoài niệm):**  
  Sử dụng Google Font `Fraunces` (hoặc `Playfair Display`) mang nét uốn lượn mềm mại, sang trọng, tương đồng với logo *Warm Orange* trên sản phẩm thật.
- **Body & Microcopy (Font sans-serif hiện đại):**  
  Sử dụng Google Font `Plus Jakarta Sans` với tỷ lệ x-height rộng, nét chữ sắc nét giúp đọc thông tin mùi hương và điền form đặt hàng trên điện thoại cực mượt mà.

---

## 4. UI Components Specification

### 4.1 Buttons (Nút bấm)
- **Primary Button (CTA):**
  - Background: `primary.terracotta` (`#C85A17`)
  - Text: `#FFFFFF`, Bold, font `Plus Jakarta Sans`
  - Bo góc: `rounded.full` (dạng viên thuốc tròn cổ điển) hoặc `rounded.lg` (20px)
  - Hover: Background `#AF4B0E`, shadow nhẹ ấm áp
- **Secondary / Ghost Button:**
  - Border: 1.5px solid `secondary.espresso` (`#3D2B1F`)
  - Background: Trong suốt (Transparent)
  - Text: `secondary.espresso`
  - Hover: Background `background.sand`

### 4.2 Product Scent Card (Thẻ sản phẩm mùi hương)
- Nền thẻ: `#FFFFFF` (nổi trên nền kem ivory)
- Viền thẻ: 1px viền mờ `rgba(61, 43, 31, 0.08)`
- Bo góc: 16px
- Đổ bóng: `0 4px 20px -2px rgba(61, 43, 31, 0.06)`
- Cấu trúc thẻ:
  1. Hình ảnh sản phẩm (Hũ nến trên nền ánh sáng ấm)
  2. Tag danh mục nhỏ: *Hương ngọt ngào / Hương ấm áp / Hương trầm tĩnh*
  3. Tên sản phẩm in đậm font Fraunces
  4. Thanh đo 3 nốt hương: *Hương đầu - Hương giữa - Hương cuối*
  5. Thông số con: ⏱️ 15h đốt liên tục • 🌿 Sáp thực vật • ⚖️ 100gr
  6. Nút chọn mua nhanh `[Thêm vào giỏ - 199.000đ]`

### 4.3 Interactive Mood Matcher (Bộ lọc tâm trạng)
- Khối chọn pill-badges tròn:
  - 🛋️ *"Thư giãn sau giờ làm"* (Active ➔ Highlight Warm Orange)
  - 🧁 *"Ngọt ngào êm dịu"* (Active ➔ Highlight Creamy Butter)
  - 🧘 *"Tập trung & Tĩnh tâm"* (Active ➔ Highlight Orchid Veil)

---

## 5. Do's and Don'ts (Nguyên tắc thiết kế)
- ✅ **DO:** Luôn duy trì khoảng cách trắng (whitespace) thoáng đãng, dùng hình ảnh có chiều sâu ánh sáng tự nhiên.
- ✅ **DO:** Viết hoa chữ cái đầu tiêu đề một cách thanh lịch, dùng từ ngữ gợi mở giác quan (*"ấm áp", "dịu êm", "chạm"*).
- ❌ **DON'T:** Không dùng màu đen tuyền (`#000000`) hay trắng tinh chói (`#FFFFFF`) làm nền — luôn ưu tiên màu nâu espresso và kem ivory.
- ❌ **DON'T:** Không dùng các hiệu ứng viền neon, màu xanh chói hoặc pop-up gây gián đoạn cảm xúc của người dùng.
