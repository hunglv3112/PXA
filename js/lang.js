/**
 * ==============================================================================
 * BỘ QUẢN LÝ NGÔN NGỮ (js/lang.js) — CỐ ĐỊNH TIẾNG NHẬT (JA)
 * ==============================================================================
 */

(function () {
  const STORAGE_KEY = 'pxa_language';
  const currentLang = 'ja';

  try {
    localStorage.setItem(STORAGE_KEY, 'ja');
  } catch (e) { }

  if (typeof document !== 'undefined' && document.documentElement) {
    document.documentElement.lang = 'ja';
    document.documentElement.classList.add('lang-ja');
    document.documentElement.classList.remove('lang-vi');
  }

  /**
   * Lấy mã ngôn ngữ hiện tại (luôn trả về 'ja')
   */
  window.getCurrentLang = function () {
    return 'ja';
  };

  /**
   * Khóa cố định ngôn ngữ là Tiếng Nhật
   */
  window.setLanguage = function () {
    return 'ja';
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.lang = 'ja';
    document.documentElement.classList.add('lang-ja');
    // Xóa tất cả các nút bấm chuyển đổi ngôn ngữ nếu còn tồn tại trong DOM
    document.querySelectorAll('.lang-switcher, .m-postwar-lang').forEach(el => el.remove());
  });
})();
