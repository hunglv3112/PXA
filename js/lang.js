/**
 * ==============================================================================
 * BỘ QUẢN LÝ ĐA NGÔN NGỮ (js/lang.js) — VIỆT NAM (VI) & NHẬT BẢN (JA)
 * ==============================================================================
 * Quản lý ngôn ngữ hiện tại, lưu vào localStorage, cập nhật nút bấm chuyển đổi,
 * và phát sự kiện 'languagechange' để các màn hình tự động làm mới giao diện.
 */

(function () {
  const STORAGE_KEY = 'pxa_language';
  let currentLang = 'vi';

  // Khởi tạo từ bộ nhớ trình duyệt hoặc mặc định là Tiếng Việt
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'ja' || saved === 'vi') {
      currentLang = saved;
    }
  } catch (e) {
    currentLang = 'vi';
  }

  /**
   * Lấy mã ngôn ngữ hiện tại ('vi' hoặc 'ja')
   */
  window.getCurrentLang = function () {
    return currentLang;
  };

  /**
   * Đặt ngôn ngữ mới và thông báo cho toàn bộ ứng dụng
   */
  window.setLanguage = function (newLang) {
    if (newLang !== 'vi' && newLang !== 'ja') return;
    currentLang = newLang;

    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch (e) {}

    // Cập nhật thuộc tính lang cho thẻ html
    document.documentElement.lang = newLang;

    // Cập nhật trạng thái active trên các nút chọn ngôn ngữ
    updateSwitcherUI();

    // Cập nhật tiêu đề trang
    if (window.getAppConfig) {
      const cfg = window.getAppConfig(newLang);
      if (cfg && cfg.pageTitle) {
        document.title = cfg.pageTitle;
      }
    }

    // Phát sự kiện toàn cục để các màn hình tự re-render
    window.dispatchEvent(new CustomEvent('languagechange', {
      detail: { lang: newLang }
    }));
  };

  /**
   * Cập nhật giao diện nút bấm chuyển ngôn ngữ
   */
  function updateSwitcherUI() {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
      if (btn.dataset.lang === currentLang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
  }

  // Khởi tạo sự kiện click khi DOM sẵn sàng
  document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.lang = currentLang;
    updateSwitcherUI();

    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.lang-btn');
      if (btn && btn.dataset.lang) {
        window.setLanguage(btn.dataset.lang);
      }
    });
  });
})();
