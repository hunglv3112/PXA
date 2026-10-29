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
    const note = (lang === 'ja' && contentObj.note_ja != null) ? contentObj.note_ja : contentObj.note;
    const src = (lang === 'ja' && contentObj.src_ja) ? contentObj.src_ja : contentObj.src;

    mMeta.textContent = '';
    mMeta.hidden = true;
    mTitle.textContent = title || '';

    mText.innerHTML = '';

    // Thu thập các đoạn văn bản: hỗ trợ tách riêng từng field (text1, text2, text3...) hoặc dùng mảng text[]
    let paragraphs = [];
    let pIdx = 1;
    while (true) {
      const valJa = contentObj[`text${pIdx}_ja`] || contentObj[`text_${pIdx}_ja`] || contentObj[`p${pIdx}_ja`];
      const valVi = contentObj[`text${pIdx}`] || contentObj[`text_${pIdx}`] || contentObj[`p${pIdx}`];
      const chosen = (lang === 'ja' && valJa) ? valJa : (valVi || (lang === 'ja' ? valVi : ''));
      if (chosen && typeof chosen === 'string' && chosen.trim() !== '') {
        paragraphs.push(chosen);
        pIdx++;
      } else {
        if (contentObj[`text${pIdx + 1}`] || contentObj[`text${pIdx + 1}_ja`]) {
          pIdx++;
          continue;
        }
        break;
      }
    }

    if (paragraphs.length === 0) {
      const texts = (lang === 'ja' && contentObj.text_ja) ? contentObj.text_ja : contentObj.text;
      if (Array.isArray(texts)) {
        paragraphs = texts;
      } else if (typeof texts === 'string' && texts.trim() !== '') {
        paragraphs = [texts];
      }
    }

    paragraphs.forEach((paragraph, idx) => {
      if (!paragraph || typeof paragraph !== 'string') return;
      const p = document.createElement('p');
      p.textContent = paragraph;
      mText.appendChild(p);

      // Render ảnh chèn giữa văn bản nếu có (midImg sau text1, hoặc midImg2 sau text2...)
      const currentMid = (idx === 0 && contentObj.midImg) || contentObj[`midImg${idx + 1}`];
      if (currentMid) {
        const midSrc = currentMid.src || currentMid.img || '';
        if (midSrc) {
          const midAlt = (lang === 'ja' && currentMid.alt_ja) ? currentMid.alt_ja : (currentMid.alt || '');
          const midCap = (lang === 'ja' && currentMid.caption_ja) ? currentMid.caption_ja : (currentMid.caption || '');

          const figure = document.createElement('figure');
          figure.className = 'm-content-figure m-mid-figure';

          const isVideo = midSrc.toLowerCase().endsWith('.mp4') || currentMid.isVideo || currentMid.type === 'video';
          let mediaEl;
          if (isVideo) {
            mediaEl = document.createElement('video');
            mediaEl.src = midSrc;
            mediaEl.controls = true;
            mediaEl.playsInline = true;
            mediaEl.preload = 'metadata';
            mediaEl.className = 'm-content-img m-content-video';
          } else {
            mediaEl = document.createElement('img');
            mediaEl.src = midSrc;
            mediaEl.alt = midAlt || midCap || '';
            mediaEl.className = 'm-content-img';
            mediaEl.loading = 'lazy';
          }
          figure.appendChild(mediaEl);

          if (midCap) {
            const capEl = document.createElement('figcaption');
            capEl.className = 'm-content-caption';
            capEl.innerHTML = midCap;
            figure.appendChild(capEl);
          }

          mText.appendChild(figure);
        }
      }
    });

    // Render ảnh bên dưới văn bản nếu có (chỉ hiển thị nếu data của phần đó có khai báo)
    const rawBottom = contentObj.bottomImg || contentObj.bottomImgs || contentObj.contentImg;
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

    // Render footnote nếu có (như trang tiểu sử)
    const footnote = (lang === 'ja' && contentObj.footnote_ja) ? contentObj.footnote_ja : contentObj.footnote;
    if (footnote && footnote.trim() !== '') {
      const footnoteDiv = document.createElement('div');
      footnoteDiv.className = 'page-footnote m-page-footnote';
      footnoteDiv.innerHTML = footnote;
      mText.appendChild(footnoteDiv);
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
  // Render layout 2 cột trái - phải (dành cho sự kiện có > 1 object, giống 1975)
  // ─────────────────────────────────────────────────────────────────
  function renderSplitLayout(ev, items, lang, cfg) {
    sheet.classList.remove('sheet--single');
    mArt.classList.add('m-art--split');
    mArt.innerHTML = '';

    items.forEach((imgObj, i) => {
      const altText = (lang === 'ja' && (imgObj.alt_ja || imgObj.modalImgAlt_ja)) 
        ? (imgObj.alt_ja || imgObj.modalImgAlt_ja) 
        : (imgObj.alt || imgObj.modalImgAlt || '');
      const label = (lang === 'ja' && (imgObj.label_ja || imgObj.modalImgLabel_ja)) 
        ? (imgObj.label_ja || imgObj.modalImgLabel_ja) 
        : (imgObj.label || imgObj.modalImgLabel || '');

      const captionText = (lang === 'ja' && (imgObj.caption_ja || imgObj.modalImgAlt_ja || imgObj.modalImgLabel_ja)) 
        ? (imgObj.caption_ja || imgObj.modalImgAlt_ja || imgObj.modalImgLabel_ja) 
        : (imgObj.caption || imgObj.modalImgAlt || imgObj.modalImgLabel || '');

      const cell = document.createElement('div');
      cell.className = 'm-art-cell';
      cell.setAttribute('role', 'button');
      cell.setAttribute('tabindex', '0');
      cell.setAttribute('aria-label', label || altText);
      if (i === 0) cell.classList.add('m-art-cell--active');

      const imgWrap = document.createElement('div');
      imgWrap.className = 'm-art-cell-img-wrap';

      const img = document.createElement('img');
      const imgSrc = imgObj.img || imgObj.modalImg || imgObj.image || imgObj.cardImg || 
                     (imgObj.src && !imgObj.src.startsWith('Nguồn') && !imgObj.src.startsWith('出典') ? imgObj.src : '');
      img.src = imgSrc;
      img.alt = altText;
      img.loading = i === 0 ? 'eager' : 'lazy';
      img.className = 'art-photo';
      imgWrap.appendChild(img);

      cell.appendChild(imgWrap);

      if (captionText) {
        const capEl = document.createElement('figcaption');
        capEl.className = 'm-content-caption m-art-cell-caption';
        capEl.textContent = captionText;
        cell.appendChild(capEl);
      }

      mArt.appendChild(cell);

      // Click / Enter → chuyển nội dung panel phải
      function activate() {
        mArt.querySelectorAll('.m-art-cell').forEach(c => c.classList.remove('m-art-cell--active'));
        cell.classList.add('m-art-cell--active');
        renderRightPanel(imgObj, ev.yl, cfg, lang, ev);
      }

      cell.addEventListener('click', activate);
      cell.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
      });
    });

    // Mặc định hiển thị nội dung của ảnh đầu tiên
    renderRightPanel(items[0], ev.yl, cfg, lang, ev);
  }

  // ─────────────────────────────────────────────────────────────────
  // Render layout 1 cột: Ảnh sau đến Text (dành cho sự kiện có 1 object)
  // Không chia làm 2 phần trái phải nữa
  // ─────────────────────────────────────────────────────────────────
  function renderSingleLayout(ev, item, lang, cfg) {
    sheet.classList.add('sheet--single');
    mArt.classList.remove('m-art--split');
    mArt.innerHTML = '';

    // Tìm ảnh: ưu tiên modalImg -> img -> cardImg
    const imgSrc = item.modalImg || item.img || item.cardImg || 
                   (item.src && !item.src.startsWith('Nguồn') && !item.src.startsWith('出典') ? item.src : '') ||
                   ev.modalImg || ev.img || ev.cardImg || '';

    const altText = (lang === 'ja' && (item.modalImgAlt_ja || item.alt_ja)) 
      ? (item.modalImgAlt_ja || item.alt_ja) 
      : (item.modalImgAlt || item.alt || item.title || ev.title || '');

    // Lấy chú thích bên dưới ảnh: ưu tiên caption -> modalImgLabel -> label -> modalImgAlt
    const captionText = (lang === 'ja' && (item.caption_ja || item.modalImgLabel_ja || item.label_ja || item.modalImgAlt_ja)) 
      ? (item.caption_ja || item.modalImgLabel_ja || item.label_ja || item.modalImgAlt_ja) 
      : (item.caption || item.modalImgLabel || item.label || item.modalImgAlt || '');

    if (imgSrc) {
      mArt.style.display = '';
      const figure = document.createElement('figure');
      figure.className = 'm-hero-figure';

      const img = document.createElement('img');
      img.src = imgSrc;
      img.alt = altText;
      img.className = 'm-single-hero-img art-photo';
      img.loading = 'eager';
      figure.appendChild(img);

      if (captionText) {
        const figcap = document.createElement('figcaption');
        figcap.className = 'm-hero-caption';
        figcap.textContent = captionText;
        figure.appendChild(figcap);
      }

      mArt.appendChild(figure);
    } else {
      // Đồ họa SVG biểu trưng nếu không có file ảnh
      mArt.innerHTML = window.renderArt ? window.renderArt(ev, true) : '';
    }

    // Hiển thị nội dung văn bản bên dưới ảnh
    renderRightPanel(item, ev.yl, cfg, lang, ev);

    // Cuộn modal về đầu
    sheet.scrollTop = 0;
  }

  // ─────────────────────────────────────────────────────────────────
  // Cập nhật toàn bộ popup theo index
  // ─────────────────────────────────────────────────────────────────
  function renderModalContent(index) {
    const dataList = window.TIMELINE_DATA;
    if (!dataList || index < 0 || index >= dataList.length) return;

    // Dừng video đang phát nếu có
    const activeVideos = modal.querySelectorAll('video');
    activeVideos.forEach(v => {
      try { v.pause(); } catch (e) {}
    });

    currentIndex = index;
    const ev = dataList[index];
    const lang = window.getCurrentLang ? window.getCurrentLang() : 'vi';
    const evData = window.getEventData ? window.getEventData(ev, lang) : ev;
    const cfg = window.getAppConfig ? window.getAppConfig(lang) : (window.APP_CONFIG?.vi || {});

    // Nhánh UI (spy / press)
    sheet.dataset.side = ev.side;

    // Xác định danh sách đối tượng: kiểm tra ev.items hoặc ev.imgs
    const items = Array.isArray(ev.items) 
      ? ev.items 
      : (Array.isArray(ev.imgs) ? ev.imgs : null);

    if (items && items.length > 1) {
      // Dữ liệu có > 1 object: Chia 2 bên trái - phải (như năm 1975)
      renderSplitLayout(ev, items, lang, cfg);
    } else {
      // Dữ liệu là mảng có 1 object (hoặc dữ liệu đơn thông thường):
      // Thiết kế dạng 1 cột: Ảnh sau đến Text, không chia 2 phần trái phải
      const singleItem = (items && items.length === 1) ? items[0] : evData;
      renderSingleLayout(ev, singleItem, lang, cfg);
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
    const activeVideos = modal.querySelectorAll('video');
    activeVideos.forEach(v => {
      try { v.pause(); } catch (e) {}
    });
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
