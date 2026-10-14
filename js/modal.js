/**
 * ==============================================================================
 * LOGIC CỬA SỔ XEM CHI TIẾT (js/modal.js) — HỖ TRỢ SONG NGỮ (VI / JA)
 * ==============================================================================
 * Quản lý popup xem chi tiết mốc sự kiện, hỗ trợ hiển thị song ngữ động
 * và cập nhật tức thời khi người dùng chuyển đổi ngôn ngữ.
 *
 * Tính năng mới:
 *  - ev.imgs[]: 2 ảnh chia đôi dọc trong panel trái
 *  - Click vào ảnh → hiển thị nội dung riêng của ảnh đó ở panel phải
 *  - Ảnh đang active được viền highlight
 *  - Panel phải có scroll tự nhiên (overflow-y: auto)
 */

(function () {
  const modal = document.getElementById('modal');
  const sheet = document.getElementById('sheet');
  const mArt = document.getElementById('mArt');
  const mMeta = document.getElementById('mMeta');
  const mTitle = document.getElementById('m-title');
  const mText = document.getElementById('mText');
  const mNote = document.getElementById('mNote');
  const mSrc = document.getElementById('mSrc');
  const mPrev = document.getElementById('mPrev');
  const mNext = document.getElementById('mNext');
  const mClose = document.getElementById('mClose');

  let currentIndex = -1;
  let lastActiveElement = null;

  // ─────────────────────────────────────────────────────────────────
  // Hàm cập nhật panel phải với nội dung bất kỳ
  // ─────────────────────────────────────────────────────────────────
  // ─────────────────────────────────────────────────────────────────
  // Hàm cập nhật panel phải với nội dung bất kỳ
  // ─────────────────────────────────────────────────────────────────
  function renderRightPanel(contentObj, evYl, cfg, lang, rawEv) {
    const noteBadge = cfg?.ui?.factCheckBadge || (lang === 'ja' ? '出典確認中' : 'Cần đối chiếu nguồn');

    // Lấy field theo ngôn ngữ
    const title = (lang === 'ja' && contentObj.title_ja) ? contentObj.title_ja : contentObj.title;
    const date = (lang === 'ja' && contentObj.date_ja) ? contentObj.date_ja : contentObj.date;
    const texts = (lang === 'ja' && contentObj.text_ja) ? contentObj.text_ja : contentObj.text;
    const note = (lang === 'ja' && contentObj.note_ja != null) ? contentObj.note_ja : contentObj.note;
    const src = (lang === 'ja' && contentObj.src_ja) ? contentObj.src_ja : contentObj.src;

    mMeta.textContent = `${evYl}  ·  ${date || ''}`;
    mTitle.textContent = title || '';

    mText.innerHTML = '';
    if (Array.isArray(texts)) {
      texts.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        mText.appendChild(p);
      });
    }

    // Render ảnh bên dưới văn bản nếu có (hỗ trợ bottomImg, bottomImgs, contentImg)
    const rawBottom = contentObj.bottomImg || contentObj.bottomImgs || contentObj.contentImg ||
                      (rawEv && (rawEv.bottomImg || rawEv.bottomImgs || rawEv.contentImg));
    if (rawBottom) {
      const imgList = Array.isArray(rawBottom) ? rawBottom : [rawBottom];
      const container = document.createElement('div');
      container.className = 'm-content-images';

      imgList.forEach(item => {
        const imgSrc = typeof item === 'string' ? item : (item.src || item.img || '');
        if (!imgSrc) return;

        const alt = typeof item === 'object'
          ? ((lang === 'ja' && item.alt_ja) ? item.alt_ja : (item.alt || ''))
          : '';
        const caption = typeof item === 'object'
          ? ((lang === 'ja' && item.caption_ja) ? item.caption_ja : (item.caption || ''))
          : ((lang === 'ja' && (contentObj.bottomImgCaption_ja || (rawEv && rawEv.bottomImgCaption_ja)))
              ? (contentObj.bottomImgCaption_ja || (rawEv && rawEv.bottomImgCaption_ja))
              : (contentObj.bottomImgCaption || (rawEv && rawEv.bottomImgCaption) || ''));

        const figure = document.createElement('figure');
        figure.className = 'm-content-figure';

        const imgEl = document.createElement('img');
        imgEl.src = imgSrc;
        imgEl.alt = alt || caption || title || '';
        imgEl.className = 'm-content-img';
        imgEl.loading = 'lazy';

        figure.appendChild(imgEl);

        if (caption) {
          const capEl = document.createElement('figcaption');
          capEl.className = 'm-content-caption';
          capEl.textContent = caption;
          figure.appendChild(capEl);
        }

        container.appendChild(figure);
      });

      if (container.children.length > 0) {
        mText.appendChild(container);
      }
    }

    if (note && note.trim() !== '') {
      mNote.hidden = false;
      mNote.innerHTML = `<strong>⚠️ ${noteBadge}:</strong> ${note}`;
    } else {
      mNote.hidden = true;
      mNote.innerHTML = '';
    }

    mSrc.textContent = src || '';

    // Scroll panel phải về đầu khi chuyển nội dung
    const mBody = sheet.querySelector('.m-body');
    if (mBody) mBody.scrollTop = 0;
  }

  // ─────────────────────────────────────────────────────────────────
  // Render panel trái: 2 ảnh chia đôi dọc, click để chuyển nội dung
  // ─────────────────────────────────────────────────────────────────
  function renderSplitImages(ev, lang, cfg) {
    mArt.classList.add('m-art--split');
    mArt.innerHTML = '';

    ev.imgs.forEach((imgObj, i) => {
      const altText = (lang === 'ja' && imgObj.alt_ja) ? imgObj.alt_ja : (imgObj.alt || '');
      const label = (lang === 'ja' && imgObj.label_ja) ? imgObj.label_ja : (imgObj.label || '');

      const cell = document.createElement('div');
      cell.className = 'm-art-cell';
      cell.setAttribute('role', 'button');
      cell.setAttribute('tabindex', '0');
      cell.setAttribute('aria-label', label || altText);
      if (i === 0) cell.classList.add('m-art-cell--active');

      const img = document.createElement('img');
      const imgSrc = imgObj.img || imgObj.image || (imgObj.src && !imgObj.src.startsWith('Nguồn') && !imgObj.src.startsWith('出典') ? imgObj.src : '');
      img.src = imgSrc;
      img.alt = altText;
      img.loading = i === 0 ? 'eager' : 'lazy';
      img.className = 'art-photo';

      const overlay = document.createElement('div');
      overlay.className = 'm-art-label';
      overlay.textContent = label;

      cell.appendChild(img);
      cell.appendChild(overlay);
      mArt.appendChild(cell);

      // Click / Enter → chuyển nội dung panel phải
      function activate() {
        // Bỏ active khỏi tất cả cell
        mArt.querySelectorAll('.m-art-cell').forEach(c => c.classList.remove('m-art-cell--active'));
        cell.classList.add('m-art-cell--active');
        renderRightPanel(imgObj, ev.yl, cfg, lang, ev);
      }

      cell.addEventListener('click', activate);
      cell.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
      });
    });

    // Hiển thị nội dung của ảnh đầu tiên mặc định
    renderRightPanel(ev.imgs[0], ev.yl, cfg, lang, ev);
  }

  // ─────────────────────────────────────────────────────────────────
  // Cập nhật toàn bộ popup theo index
  // ─────────────────────────────────────────────────────────────────
  function renderModalContent(index) {
    const dataList = window.TIMELINE_DATA;
    if (!dataList || index < 0 || index >= dataList.length) return;

    currentIndex = index;
    const ev = dataList[index];
    const lang = window.getCurrentLang ? window.getCurrentLang() : 'vi';
    const evData = window.getEventData ? window.getEventData(ev, lang) : ev;
    const cfg = window.getAppConfig ? window.getAppConfig(lang) : (window.APP_CONFIG?.vi || {});

    // Nhánh UI (spy / press)
    sheet.dataset.side = ev.side;

    // Panel trái: 2 ảnh hoặc art đơn
    if (Array.isArray(ev.imgs) && ev.imgs.length >= 2) {
      renderSplitImages(ev, lang, cfg);
    } else {
      mArt.classList.remove('m-art--split');
      mArt.innerHTML = window.renderArt(ev, true);

      // Nếu có modalImgLabel thì thêm nhãn overlay cho ảnh bên trái
      const modalLabel = (lang === 'ja' && (ev.modalImgLabel_ja || evData.modalImgLabel_ja))
        ? (ev.modalImgLabel_ja || evData.modalImgLabel_ja)
        : (ev.modalImgLabel || evData.modalImgLabel);
      if (modalLabel) {
        const overlay = document.createElement('div');
        overlay.className = 'm-art-label';
        overlay.textContent = modalLabel;
        mArt.appendChild(overlay);
      }

      // Panel phải: nội dung thường kèm ảnh dưới nếu có
      renderRightPanel(evData, ev.yl, cfg, lang, ev);
    }

    // Nút Trước / Sau
    mPrev.disabled = index === 0;
    mNext.disabled = index === dataList.length - 1;

    if (cfg?.ui) {
      mPrev.textContent = cfg.ui.prevMilestone || '‹ Mốc trước';
      mNext.textContent = cfg.ui.nextMilestone || 'Mốc sau ›';
      if (mClose && cfg.ui.closeModal) {
        mClose.setAttribute('aria-label', cfg.ui.closeModal);
        mClose.setAttribute('title', `${cfg.ui.closeModal} (Esc)`);
      }
    }
  }

  // ─────────────────────────────────────────────────────────────────
  // Mở / đóng modal
  // ─────────────────────────────────────────────────────────────────
  window.openModal = function (index) {
    lastActiveElement = document.activeElement;
    renderModalContent(index);
    modal.hidden = false;
    document.body.classList.add('modal-open');
    if (mClose) mClose.focus();
  };

  window.closeModal = function () {
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  };

  // ─────────────────────────────────────────────────────────────────
  // Sự kiện
  // ─────────────────────────────────────────────────────────────────
  if (mClose) mClose.addEventListener('click', window.closeModal);

  modal.addEventListener('click', e => {
    if (e.target === modal) window.closeModal();
  });

  if (mPrev) {
    mPrev.addEventListener('click', () => {
      if (currentIndex > 0) renderModalContent(currentIndex - 1);
    });
  }

  if (mNext) {
    mNext.addEventListener('click', () => {
      if (currentIndex < window.TIMELINE_DATA.length - 1) {
        renderModalContent(currentIndex + 1);
      }
    });
  }

  // Làm mới khi đổi ngôn ngữ
  window.addEventListener('languagechange', () => {
    if (modal && !modal.hidden && currentIndex >= 0) {
      renderModalContent(currentIndex);
    }
  });

  // Bàn phím
  document.addEventListener('keydown', e => {
    if (modal.hidden) return;
    if (e.key === 'Escape') {
      window.closeModal();
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
      renderModalContent(currentIndex - 1);
    } else if (e.key === 'ArrowRight' && currentIndex < window.TIMELINE_DATA.length - 1) {
      renderModalContent(currentIndex + 1);
    } else if (e.key === 'Tab') {
      const focusable = modal.querySelectorAll('button:not([disabled]), [tabindex="0"]');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        last.focus(); e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === last) {
        first.focus(); e.preventDefault();
      }
    }
  });
})();
