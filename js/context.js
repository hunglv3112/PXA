/**
 * ==============================================================================
 * LOGIC ĐIỀU KHIỂN ĐIỀU HƯỚNG 4 MÀN HÌNH (js/context.js) — HỖ TRỢ SONG NGỮ
 * ==============================================================================
 * Luồng di chuyển liên hoàn:
 *   1. Bối cảnh lịch sử Việt Nam (#context)
 *          ↓ (Ấn Tiếp tục)
 *   2. Tiểu sử Thiếu tướng Phạm Xuân Ẩn (#bio)
 *          ↓ (Ấn Xem dòng thời gian)
 *   3. Dòng thời gian tương tác 2 nhánh (#timeline)
 *          ↓ (Ấn nút góc phải: Một Phạm Xuân Ẩn bình lặng sau chiến tranh)
 *   4. Cuộc đời hậu chiến thanh bình (#postwar)
 *
 * Hỗ trợ chuyển đổi ngôn ngữ (VI / JA) mượt mà và đồng bộ.
 */

document.addEventListener('DOMContentLoaded', () => {
  const contextScreen = document.getElementById('contextScreen');
  const bioScreen = document.getElementById('bioScreen');
  const timelineScreen = document.getElementById('timelineScreen');
  const postwarScreen = document.getElementById('postwarScreen');

  const btnBackToBio = document.getElementById('btnBackToBio');
  const btnToPostwar = document.getElementById('btnToPostwar');

  if (!contextScreen) return;

  // Cập nhật nhãn các nút điều hướng trên màn hình Timeline
  function updateTimelineNavButtons() {
    const lang = window.getCurrentLang ? window.getCurrentLang() : 'vi';
    const cfg = window.getAppConfig ? window.getAppConfig(lang) : {};

    if (btnBackToBio) {
      const textSpan = btnBackToBio.querySelector('span') || btnBackToBio;
      textSpan.textContent = cfg?.ui?.backToBio || (lang === 'ja' ? '‹ 人物伝へ戻る' : '‹ Tiểu sử Phạm Xuân Ẩn');
    }

    if (btnToPostwar) {
      const textSpan = btnToPostwar.querySelector('span') || btnToPostwar;
      textSpan.textContent = cfg?.ui?.toPostwar || (lang === 'ja' ? '戦後の穏やかなファム・スアン・アン ›' : 'Phòng lưu niệm Phạm Xuân Ẩn ›');
    }
  }

  // ============================================================================
  // 1. DỰNG NỘI DUNG MÀN HÌNH BỐI CẢNH LỊCH SỬ (Context Screen)
  // ============================================================================
  function renderContextContent() {
    const lang = window.getCurrentLang ? window.getCurrentLang() : 'vi';
    const contextData = window.getHistoricalContext
      ? window.getHistoricalContext(lang)
      : (window.HISTORICAL_CONTEXT?.[lang] || window.HISTORICAL_CONTEXT?.vi || {});

    const hero = contextData.hero || {};
    const quote = contextData.quote || {};
    const chapters = contextData.chapters || [];
    const cta = contextData.cta || {};

    const bgStyle = hero.bgImage ? `style="background-image: url('${hero.bgImage}')"` : '';

    let html = `
      <!-- Hero Banner Mở Đầu -->
      <header class="context-hero" ${bgStyle}>
        <div class="context-hero-content">
          ${hero.badge ? `<span class="context-hero-badge">${hero.badge}</span>` : ''}
          <h1>${hero.title || ''}</h1>
          <p class="context-hero-sub">${hero.subtitle || ''}</p>
        </div>
      </header>

      <main class="context-container">
        <!-- Khối Trích Dẫn -->
        ${quote.text ? `
          <blockquote class="context-quote-box">
            <p class="context-quote-text">${quote.text}</p>
            ${quote.author ? `<cite class="context-quote-author">${quote.author}</cite>` : ''}
          </blockquote>
        ` : ''}

        <!-- Danh Sách Các Giai Đoạn Lịch Sử -->
        <section class="context-chapters">
    `;

    chapters.forEach(ch => {
      html += `
        <article class="context-chapter-card" id="${ch.id || ''}">
          <div class="context-chapter-header">
            <span class="context-chapter-tag">${ch.tag || ''}</span>
            <span class="context-chapter-period">${ch.period || ''}</span>
          </div>

          <h2>${ch.title}</h2>
          ${ch.lead ? `<p class="context-chapter-lead">${ch.lead}</p>` : ''}

          ${ch.image ? `
            <div class="context-chapter-img-box">
              <img src="${ch.image}" alt="${ch.title}" class="context-chapter-img" loading="lazy" />
            </div>
          ` : ''}

          <div class="context-chapter-text">
            ${Array.isArray(ch.paragraphs) ? ch.paragraphs.map(p => `<p>${p}</p>`).join('') : ''}
          </div>
        </article>
      `;
    });

    html += `
        </section>

        <!-- Khối Nút Bấm Chuyển Sang Màn Hình Tiểu Sử -->
        <footer class="context-cta-wrap">
          <p class="context-cta-prompt">${cta.promptText || ''}</p>
          <button type="button" class="btn-enter-timeline" id="btnContextToBio">
            <span>${cta.buttonText || ''}</span>
          </button>
          ${cta.subText ? `<p class="context-cta-sub">${cta.subText}</p>` : ''}
        </footer>
      </main>
    `;

    contextScreen.innerHTML = html;

    // Gắn sự kiện click vào nút chuyển sang Tiểu sử
    const btnToBio = document.getElementById('btnContextToBio');
    if (btnToBio) {
      btnToBio.addEventListener('click', showBio);
    }
  }

  // ============================================================================
  // 2. DỰNG NỘI DUNG MÀN HÌNH TIỂU SỬ PHẠM XUÂN ẨN (Biography Screen)
  // Layout trình bày chuẩn theo trang bối cảnh lịch sử
  // ============================================================================
  function renderBioContent() {
    if (!bioScreen) return;
    const lang = window.getCurrentLang ? window.getCurrentLang() : 'vi';
    const cfg = window.getAppConfig ? window.getAppConfig(lang) : {};
    const bioData = window.BIO_DATA?.[lang] || window.BIO_DATA?.vi || {};

    const hero = bioData.hero || {};
    const quote = bioData.quote || {};
    const video = bioData.video || {};
    const chapters = bioData.chapters || [];
    const cta = bioData.cta || {};

    const bgStyle = hero.bgImage ? `style="background-image: url('${hero.bgImage}')"` : '';
    const backBtnText = cfg?.ui?.backToContext || (lang === 'ja' ? '‹ 歴史的背景へ戻る' : '‹ Bối cảnh lịch sử');

    let html = `
      <!-- Nút quay lại màn hình Bối cảnh lịch sử -->
      <button type="button" class="btn-back-to-context bio-back-to-context-btn" id="btnBioBackToContext" title="${backBtnText}">
        <span>${backBtnText}</span>
      </button>

      <!-- Hero Banner Mở Đầu Tiểu Sử -->
      <header class="context-hero" ${bgStyle}>
        <div class="context-hero-content">
          ${hero.badge ? `<span class="context-hero-badge">${hero.badge}</span>` : ''}
          <h1>${hero.title || ''}</h1>
          <p class="context-hero-sub">${hero.subtitle || ''}</p>
        </div>
      </header>

      <main class="context-container">
        <!-- Khối Trích Dẫn Phạm Xuân Ẩn -->
        ${quote.text ? `
          <blockquote class="context-quote-box">
            <p class="context-quote-text">${quote.text}</p>
            ${quote.author ? `<cite class="context-quote-author">${quote.author}</cite>` : ''}
          </blockquote>
        ` : ''}

        <!-- Khối Video Tư Liệu: Tiểu sử cuộc đời ông Phạm Xuân Ẩn -->
        ${video && video.src ? `
          <section class="bio-video-section" aria-label="Video tư liệu tiểu sử">
            <article class="context-chapter-card bio-video-card">
              <div class="context-chapter-header">
                <span class="context-chapter-tag">${video.tag || 'Tư liệu lịch sử'}</span>
                ${video.badge ? `<span class="bio-video-badge">${video.badge}</span>` : ''}
              </div>

              <h2 class="bio-video-title">${video.title || 'Tiểu sử cuộc đời ông Phạm Xuân Ẩn'}</h2>
              ${video.lead ? `<p class="context-chapter-lead">${video.lead}</p>` : ''}

              <div class="bio-video-player-box">
                <video class="bio-video-player" controls preload="metadata" playsinline poster="assets/images/context-saigon.jpg">
                  <source src="${video.src}" type="video/mp4">
                  ${video.fallbackSrc ? `<source src="${video.fallbackSrc}" type="video/mp4">` : ''}
                  Trình duyệt không hỗ trợ xem video trực tiếp.
                </video>
              </div>

              ${video.caption ? `
                <div class="bio-video-caption-wrap">
                  <span class="bio-video-caption-icon" aria-hidden="true">▶</span>
                  <p class="bio-video-caption">${video.caption}</p>
                </div>
              ` : ''}
            </article>
          </section>
        ` : ''}

        <!-- Danh Sách Các Giai Đoạn Cuộc Đời -->
        <section class="context-chapters">
    `;

    chapters.forEach(ch => {
      html += `
        <article class="context-chapter-card" id="${ch.id || ''}">
          <div class="context-chapter-header">
            <span class="context-chapter-tag">${ch.tag || ''}</span>
            <span class="context-chapter-period">${ch.period || ''}</span>
          </div>

          <h2>${ch.title}</h2>
          ${ch.lead ? `<p class="context-chapter-lead">${ch.lead}</p>` : ''}

          ${ch.image ? `
            <div class="context-chapter-img-box">
              <img src="${ch.image}" alt="${ch.title}" class="context-chapter-img" loading="lazy" />
            </div>
          ` : ''}

          <div class="context-chapter-text">
            ${Array.isArray(ch.paragraphs) ? ch.paragraphs.map(p => `<p>${p}</p>`).join('') : ''}
          </div>
        </article>
      `;
    });

    html += `
        </section>

        <!-- Khối Nút Bấm Chuyển Sang Màn Hình Dòng Thời Gian -->
        <footer class="context-cta-wrap">
          <p class="context-cta-prompt">${cta.promptText || ''}</p>
          <button type="button" class="btn-enter-timeline" id="btnBioEnterTimeline">
            <span>${cta.buttonText || ''}</span>
          </button>
          ${cta.subText ? `<p class="context-cta-sub">${cta.subText}</p>` : ''}
        </footer>
      </main>
    `;

    bioScreen.innerHTML = html;

    // Gắn sự kiện click quay lại Bối cảnh lịch sử
    const btnBack = document.getElementById('btnBioBackToContext');
    if (btnBack) {
      btnBack.addEventListener('click', showContext);
    }

    // Gắn sự kiện click chuyển sang Dòng thời gian (Timeline)
    const btnEnter = document.getElementById('btnBioEnterTimeline');
    if (btnEnter) {
      btnEnter.addEventListener('click', showTimeline);
    }
  }

  // ============================================================================
  // 3. DỰNG NỘI DUNG MÀN HÌNH HẬU CHIẾN (Postwar Screen)
  // Layout trình bày chuẩn theo trang tiểu sử & bối cảnh lịch sử
  // ============================================================================
  function renderPostwarContent() {
    if (!postwarScreen) return;
    const lang = window.getCurrentLang ? window.getCurrentLang() : 'vi';
    const cfg = window.getAppConfig ? window.getAppConfig(lang) : {};
    const postwarData = window.POSTWAR_DATA?.[lang] || window.POSTWAR_DATA?.vi || {};

    const hero = postwarData.hero || {};
    const quote = postwarData.quote || {};
    const chapters = postwarData.chapters || [];
    const cta = postwarData.cta || {};

    const bgStyle = hero.bgImage ? `style="background-image: url('${hero.bgImage}')"` : '';
    const backBtnText = cfg?.ui?.backToTimeline || (lang === 'ja' ? '‹ タイムラインへ戻る' : '‹ Dòng thời gian');

    let html = `
      <!-- Nút quay lại màn hình Dòng thời gian -->
      <button type="button" class="btn-back-to-context bio-back-to-context-btn" id="btnPostwarBackToTimeline" title="${backBtnText}">
        <span>${backBtnText}</span>
      </button>

      <!-- Hero Banner Mở Đầu Hậu Chiến -->
      <header class="context-hero" ${bgStyle}>
        <div class="context-hero-content">
          ${hero.badge ? `<span class="context-hero-badge">${hero.badge}</span>` : ''}
          <h1>${hero.title || ''}</h1>
          <p class="context-hero-sub">${hero.subtitle || ''}</p>
        </div>
      </header>

      <main class="context-container">
        <!-- Khối Trích Dẫn Triết Lý Hậu Chiến -->
        ${quote.text ? `
          <blockquote class="context-quote-box">
            <p class="context-quote-text">${quote.text}</p>
            ${quote.author ? `<cite class="context-quote-author">${quote.author}</cite>` : ''}
          </blockquote>
        ` : ''}

        <!-- Danh Sách Các Giai Đoạn Hậu Chiến -->
        <section class="context-chapters">
    `;

    chapters.forEach(ch => {
      html += `
        <article class="context-chapter-card" id="${ch.id || ''}">
          <div class="context-chapter-header">
            <span class="context-chapter-tag">${ch.tag || ''}</span>
            <span class="context-chapter-period">${ch.period || ''}</span>
          </div>

          <h2>${ch.title}</h2>
          ${ch.lead ? `<p class="context-chapter-lead">${ch.lead}</p>` : ''}

          ${ch.image ? `
            <div class="context-chapter-img-box">
              <img src="${ch.image}" alt="${ch.title}" class="context-chapter-img" loading="lazy" />
            </div>
          ` : ''}

          <div class="context-chapter-text">
            ${Array.isArray(ch.paragraphs) ? ch.paragraphs.map(p => `<p>${p}</p>`).join('') : ''}
          </div>
        </article>
      `;
    });

    html += `
        </section>

        <!-- Khối Nút Bấm Cuối Trang: Quay lại Dòng Thời Gian -->
        <footer class="context-cta-wrap">
          <p class="context-cta-prompt">${cta.promptText || ''}</p>
          <button type="button" class="btn-enter-timeline" id="btnPostwarEnterTimeline">
            <span>${cta.buttonText || ''}</span>
          </button>
          ${cta.subText ? `<p class="context-cta-sub">${cta.subText}</p>` : ''}
        </footer>
      </main>
    `;

    postwarScreen.innerHTML = html;

    // Gắn sự kiện click quay lại Timeline
    const btnBack = document.getElementById('btnPostwarBackToTimeline');
    if (btnBack) {
      btnBack.addEventListener('click', showTimeline);
    }

    const btnEnter = document.getElementById('btnPostwarEnterTimeline');
    if (btnEnter) {
      btnEnter.addEventListener('click', showTimeline);
    }
  }

  // Hàm tạm dừng video tiểu sử nếu người dùng chuyển màn hình
  function pauseBioVideos() {
    if (bioScreen) {
      const videos = bioScreen.querySelectorAll('video');
      videos.forEach(v => {
        try {
          if (!v.paused) v.pause();
        } catch (e) {}
      });
    }
  }

  // ============================================================================
  // 4. CÁC HÀM ĐIỀU HƯỚNG CHUYỂN 4 MÀN HÌNH
  // ============================================================================
  // 4.1. Hiển thị Màn hình 1: Lý do chọn đề tài → Bối cảnh lịch sử
  function showContext() {
    pauseBioVideos();
    window.location.href = 'intro.html';
  }

  // 4.2. Hiển thị Màn hình 2: Tiểu sử Phạm Xuân Ẩn (Hồ sơ mật)
  function showBio() {
    pauseBioVideos();
    window.location.href = 'bio.html';
  }

  // 4.3. Hiển thị Màn hình 3: Dòng thời gian (Timeline)
  function showTimeline() {
    pauseBioVideos();
    contextScreen.classList.add('hidden');
    if (bioScreen) bioScreen.classList.add('hidden');
    if (postwarScreen) postwarScreen.classList.add('hidden');

    if (timelineScreen) timelineScreen.classList.remove('hidden');

    window.location.hash = 'timeline';
    window.dispatchEvent(new Event('resize'));
  }

  // 4.4. Hiển thị Màn hình 4: Phòng lưu niệm Phạm Xuân Ẩn (Postwar)
  function showPostwar() {
    pauseBioVideos();
    window.location.href = 'postwar.html';
  }

  // Gắn sự kiện nút quay lại trên màn hình Timeline (quay lại Bio)
  if (btnBackToBio) {
    btnBackToBio.addEventListener('click', showBio);
  }

  // Gắn sự kiện nút chuyển sang Hậu chiến trên màn hình Timeline
  if (btnToPostwar) {
    btnToPostwar.addEventListener('click', showPostwar);
  }

  // Lắng nghe sự kiện hashchange của trình duyệt
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    if (hash === '#timeline') {
      showTimeline();
    } else if (hash === '#bio') {
      showBio();
    } else if (hash === '#postwar') {
      showPostwar();
    } else {
      showContext();
    }
  });

  // Tự động làm mới giao diện khi chuyển đổi ngôn ngữ
  window.addEventListener('languagechange', () => {
    renderContextContent();
    renderBioContent();
    renderPostwarContent();
    updateTimelineNavButtons();
  });

  // Kiểm tra URL hash ngay lập tức để chuyển màn hình tức thì, loại bỏ hoàn toàn độ trễ/chớp nháy
  const currentHash = window.location.hash;
  if (currentHash === '#timeline') {
    showTimeline();
  } else if (currentHash === '#bio') {
    showBio();
  } else if (currentHash === '#postwar') {
    showPostwar();
  } else {
    showContext();
  }

  // Khởi tạo nội dung sau khi trạng thái màn hình đã được xác lập
  renderContextContent();
  renderBioContent();
  renderPostwarContent();
  updateTimelineNavButtons();
});
