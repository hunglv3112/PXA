/**
 * ==============================================================================
 * BỘ BIỂU TƯỢNG VECTOR & BỘ XỬ LÝ HÌNH ẢNH (js/icons.js)
 * ==============================================================================
 * Cung cấp các biểu tượng SVG vector đồ họa và hàm sinh hình ảnh/bìa thẻ.
 * Hỗ trợ cả 2 chế độ:
 * 1. Chế độ dùng ảnh thật (nếu có trường img trong timeline-data.js)
 * 2. Chế độ vẽ vector đồ họa trừu tượng (nếu để trống img)
 */

window.ICON_SVGS = {
  // Mầm non cách mạng
  seed: '<path d="M50 80V46M50 58Q33 56 28 38Q47 38 50 58M50 52Q66 50 72 32Q54 32 50 52"/>',
  // Chìa khóa / Mật mã
  key: '<circle cx="34" cy="50" r="12"/><path d="M46 50H84M72 50V62M82 50V58"/>',
  // Tài liệu mật / Hồ sơ
  doc: '<rect x="29" y="18" width="42" height="60" rx="2"/><path d="M37 34H63M37 44H63M37 54H55"/>',
  // Mũ cử nhân / Du học
  cap: '<path d="M50 30L88 46L50 62L12 46Z"/><path d="M28 54V68Q50 80 72 68V54"/>',
  // Máy bay / Xuất ngoại / Hồi hương
  plane: '<path d="M14 48L86 20L62 80L48 58Z"/><path d="M48 58L86 20"/>',
  // Máy telex / Tin nhanh báo chí
  ticker: '<path d="M36 44V30H64V44M20 72H80M28 72V44H72V72M36 54H64M36 62H56"/>',
  // Mực đen bảo mật / Redacted
  redact: '<rect x="24" y="30" width="52" height="9" fill="currentColor"/><rect x="24" y="46" width="34" height="9"/><rect x="24" y="62" width="44" height="9" fill="currentColor"/>',
  // Tạp chí / Báo in Time
  mag: '<rect x="30" y="18" width="40" height="60" rx="2"/><path d="M30 34H70M38 46H62M38 54H62M38 62H54"/>',
  // Con mắt quan sát / Điểm nghe tình báo
  eye: '<path d="M12 50Q50 18 88 50Q50 82 12 50Z"/><circle cx="50" cy="50" r="11"/>',
  // Bức điện telex / Thư tín
  mail: '<rect x="20" y="30" width="60" height="40" rx="2"/><path d="M20 32L50 54L80 32"/>',
  // Mái nhà / Đất nước ở lại
  house: '<path d="M20 52L50 26L80 52M29 47V76H71V47"/>',
  // Ngôi sao Anh hùng
  star: '<polygon points="50,18 58,40 82,40 63,54 70,78 50,63 30,78 37,54 18,40 42,40"/>',
  // Vòng tròn sinh mệnh / Luân hồi
  rings: '<circle cx="50" cy="50" r="10"/><circle cx="50" cy="50" r="22"/><circle cx="50" cy="50" r="34"/>',
  // Máy ảnh phóng viên
  camera: '<path d="M22 36H32L36 30H64L68 36H78C82 36 85 39 85 43V75C85 79 82 82 78 82H22C18 82 15 79 15 75V43C15 39 18 36 22 36Z"/><circle cx="50" cy="58" r="14"/>',
  // Huân chương
  award: '<circle cx="50" cy="42" r="16"/><path d="M38 54L30 82L50 72L70 82L62 54"/>',
  // Sách / Nhật ký
  book: '<path d="M20 28C32 24 45 28 50 34C55 28 68 24 80 28V76C68 72 55 76 50 82C45 76 32 72 20 76Z"/><line x1="50" y1="34" x2="50" y2="82"/>'
};

/**
 * Hàm sinh khối HTML hiển thị ảnh hoặc biểu tượng nghệ thuật vector
 * @param {Object} ev - Dữ liệu của sự kiện
 * @param {Boolean} isModal - Có phải đang render cho popup modal hay không
 * @returns {String} HTML string
 */
window.renderArt = function(ev, isModal = false) {
  // Ưu tiên chọn ảnh tương ứng theo ngữ cảnh:
  // - Nếu là modal: ưu tiên ev.modalImg || ev.leftImg || ev.img
  // - Nếu là thẻ ngoài timeline: ưu tiên ev.cardImg || ev.img
  const targetImg = isModal
    ? (ev.modalImg || ev.leftImg || ev.img)
    : (ev.cardImg || ev.img);

  // Nếu có ảnh thật
  if (targetImg && targetImg.trim() !== '') {
    const safeTitle = (ev.title || '').replace(/"/g, '&quot;');
    const safeSide = ev.side === 'bot' ? 'bot' : 'top';
    const safeIcon = (ev.icon || 'rings').replace(/[^a-zA-Z0-9_-]/g, '');
    const safeYl = (ev.yl || '').replace(/'/g, "\\'");
    return `
      <div class="art-img-box ${isModal ? 'art-img-modal' : ''}">
        <img src="${targetImg}" alt="${safeTitle}" loading="lazy" class="art-photo"
          onerror="this.onerror=null; this.parentElement.innerHTML=window.renderVectorArt('${safeSide}', '${safeIcon}', '${safeYl}', ${isModal});"
        />
      </div>
    `;
  }

  return window.renderVectorArt(ev.side, ev.icon, ev.yl, isModal);
};

/**
 * Hàm vẽ khối nghệ thuật vector với gradient, icon và nhãn năm
 */
window.renderVectorArt = function(side, iconName, yearLabel, isModal = false) {
  const isBot = side === 'bot';
  const sideClass = isBot ? 'art-bot' : 'art-top';
  const iconSvg = window.ICON_SVGS[iconName] || window.ICON_SVGS.rings;
  const label = yearLabel || '';
  
  // Vệt highlight vàng đặc trưng phong cách báo chí ở nhánh dưới
  const highlightBar = isBot 
    ? `<rect x="8" y="112" width="${label.length * 17 + 18}" height="32" fill="var(--hl, #ebcb45)" opacity="0.95"/>` 
    : '';

  return `
    <div class="art ${sideClass} ${isModal ? 'art-modal' : ''}">
      <svg viewBox="0 0 240 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        ${highlightBar}
        <g class="ic" transform="translate(120 12) scale(1.1)">
          ${iconSvg}
        </g>
        <text x="16" y="136">${label}</text>
      </svg>
    </div>
  `;
};
