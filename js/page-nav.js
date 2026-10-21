/**
 * ==============================================================================
 * BỘ QUẢN LÝ ĐIỀU HƯỚNG CHUYỂN TRANG DẠNG DROPDOWN (js/page-nav.js)
 * ==============================================================================
 */

(function initPageNavDropdown() {
  function setup() {
    const dropdown = document.getElementById('pageNavDropdown');
    const btn = document.getElementById('pageNavBtn');
    if (!dropdown || !btn) return;

    // Toggle menu khi bấm nút
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Đóng menu khi bấm ra ngoài
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    // Đóng menu khi bấm phím Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dropdown.classList.contains('open')) {
        dropdown.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
    });

    // Đóng dropdown khi chọn link
    dropdown.querySelectorAll('.page-nav-item').forEach(item => {
      item.addEventListener('click', () => {
        dropdown.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });

    // Cập nhật ngôn ngữ cho dropdown
    function updateNavLang() {
      const lang = (window.getCurrentLang && window.getCurrentLang()) ||
                   (document.documentElement.lang === 'ja' ? 'ja' : 'vi');

      const label = document.getElementById('pageNavLabel');
      const headerTitle = document.getElementById('pageNavHeaderTitle');

      if (label) {
        label.textContent = (lang === 'ja') ? 'ページ移動' : 'Chuyển trang';
      }
      if (headerTitle) {
        headerTitle.textContent = (lang === 'ja') ? 'ページ目次' : 'DANH MỤC TRANG';
      }

      dropdown.querySelectorAll('.page-nav-item-text').forEach(el => {
        const txt = el.getAttribute('data-' + lang);
        if (txt) el.textContent = txt;
      });

      dropdown.querySelectorAll('.page-nav-curr-tag').forEach(el => {
        const txt = el.getAttribute('data-' + lang);
        if (txt) el.textContent = txt;
      });
    }

    window.addEventListener('languagechange', updateNavLang);
    updateNavLang();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();
