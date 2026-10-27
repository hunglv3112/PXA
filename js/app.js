/**
 * ==============================================================================
 * ỨNG DỤNG DÒNG THỜI GIAN CHÍNH (js/app.js) — HỖ TRỢ SONG NGỮ (VI / JA)
 * ==============================================================================
 * Dựng trục thời gian hai nhánh từ data/timeline-data.js và data/config.js,
 * tự động cập nhật ngôn ngữ khi người dùng chuyển đổi giữa Tiếng Việt và Tiếng Nhật.
 */

document.addEventListener('DOMContentLoaded', () => {
  const dataList = window.TIMELINE_DATA || [];
  const track = document.getElementById('track');
  const scroller = document.getElementById('scroller');
  const railTopSpan = document.querySelector('.rail-top span');
  const railBotSpan = document.querySelector('.rail-bot span');
  const btnGoLeft = document.getElementById('goL');
  const btnGoRight = document.getElementById('goR');
  const progressBar = document.getElementById('progressBar');

  let currentOpenStoryId = null;

  // Tiện ích tạo DOM element nhanh
  function createEl(tag, className, innerHTML) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (innerHTML != null) el.innerHTML = innerHTML;
    return el;
  }

  function createTextEl(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    el.textContent = text;
    return el;
  }

  // 1. Cập nhật tiêu đề trang, thanh rail 2 bên và các nhãn điều khiển
  function applyConfigAndTexts() {
    const lang = window.getCurrentLang ? window.getCurrentLang() : 'vi';
    const config = window.getAppConfig ? window.getAppConfig(lang) : (window.APP_CONFIG?.vi || {});

    if (config.pageTitle) {
      document.title = config.pageTitle;
    }
    if (railTopSpan && config.rails?.top?.label) {
      railTopSpan.textContent = config.rails.top.label;
      if (config.rails.top.subLabel) railTopSpan.setAttribute('title', config.rails.top.subLabel);
    }
    if (railBotSpan && config.rails?.bottom?.label) {
      railBotSpan.textContent = config.rails.bottom.label;
      if (config.rails.bottom.subLabel) railBotSpan.setAttribute('title', config.rails.bottom.subLabel);
    }

    if (btnGoLeft && config.ui?.scrollLeftAria) {
      btnGoLeft.setAttribute('aria-label', config.ui.scrollLeftAria);
      btnGoLeft.setAttribute('title', `${config.ui.scrollLeftAria} (A / ←)`);
    }
    if (btnGoRight && config.ui?.scrollRightAria) {
      btnGoRight.setAttribute('aria-label', config.ui.scrollRightAria);
      btnGoRight.setAttribute('title', `${config.ui.scrollRightAria} (D / →)`);
    }
  }

  // 2. Dựng cột giới thiệu mở đầu (Intro Column)
  function renderIntroColumn() {
    const lang = window.getCurrentLang ? window.getCurrentLang() : 'vi';
    const config = window.getAppConfig ? window.getAppConfig(lang) : (window.APP_CONFIG?.vi || {});
    const introCfg = config.intro || {
      name: "Phạm Xuân Ẩn",
      years: "1927 – 2006",
      descriptionTop: "Một người, hai cuộc đời song hành.",
      descriptionBottom: "Cuộn chuột hoặc kéo ngang để khám phá."
    };

    const col = createEl('div', 'col intro');
    
    // Nửa trên Intro
    const up = createEl('div', 'up');
    const titleH1 = createTextEl('h1', 'intro-title', introCfg.name);
    const yrsP = createTextEl('p', 'yrs', introCfg.years);
    const subP = introCfg.subtitle ? createTextEl('p', 'intro-sub', introCfg.subtitle) : null;
    const descTop = createTextEl('p', 'intro-desc-top', introCfg.descriptionTop);
    
    up.appendChild(titleH1);
    up.appendChild(yrsP);
    if (subP) up.appendChild(subP);
    up.appendChild(descTop);

    // Điểm giao trục
    const ax = createEl('div', 'axis');

    // Nửa dưới Intro
    const down = createEl('div', 'down');
    const descBot = createTextEl('p', 'intro-desc-bot', introCfg.descriptionBottom);
    down.appendChild(descBot);

    if (introCfg.guideText) {
      const guide = createTextEl('p', 'intro-guide', introCfg.guideText);
      down.appendChild(guide);
    }

    col.appendChild(up);
    col.appendChild(ax);
    col.appendChild(down);
    track.appendChild(col);
  }

  // 3. Tạo thẻ sự kiện (Event Card) theo ngôn ngữ hiện tại
  function createCardElement(ev, index) {
    const lang = window.getCurrentLang ? window.getCurrentLang() : 'vi';
    const evData = window.getEventData ? window.getEventData(ev, lang) : ev;

    const slot = createEl('div', 'slot');
    const stem = createEl('span', 'stem');
    const card = createEl('button', `card card-${ev.side}`);
    card.type = 'button';
    card.dataset.idx = index;
    card.setAttribute('aria-label', `${ev.yl}: ${evData.title}`);

    // Bìa ảnh/vector
    const artWrap = createEl('span', 'art-wrap');
    artWrap.innerHTML = window.renderArt(ev, false);
    card.appendChild(artWrap);

    // Khối chữ tiêu đề (đã bỏ hiển thị thời gian nhỏ trên thẻ ngoài trục)
    const cap = createEl('span', 'cap');
    cap.appendChild(createTextEl('span', 'c-title', evData.title));
    card.appendChild(cap);



    if (ev.side === 'top') {
      slot.appendChild(card);
      slot.appendChild(stem);
    } else {
      slot.appendChild(stem);
      slot.appendChild(card);
    }

    return slot;
  }

  // 4. Nhóm sự kiện theo năm và dựng các cột Timeline
  function renderTimeline() {
    const lang = window.getCurrentLang ? window.getCurrentLang() : 'vi';
    renderIntroColumn();

    const groups = [];
    dataList.forEach((ev, i) => {
      ev._i = i;
      let lastGroup = groups[groups.length - 1];
      if (!lastGroup || lastGroup.y !== ev.y) {
        lastGroup = { y: ev.y, yl: ev.yl, events: [] };
        groups.push(lastGroup);
      }
      lastGroup.events.push(ev);
    });

    groups.forEach(group => {
      const col = createEl('div', 'col');
      const up = createEl('div', 'up');
      const ax = createEl('div', 'axis');
      const dn = createEl('div', 'down');

      const midEvent = group.events.find(e => e.side === 'mid');

      // Đưa các card vào nửa trên hoặc nửa dưới
      group.events.forEach(ev => {
        if (ev.side === 'top') {
          up.appendChild(createCardElement(ev, ev._i));
        } else if (ev.side === 'bot') {
          dn.appendChild(createCardElement(ev, ev._i));
        }
      });

      // Nếu có sự kiện mốc ở giữa (mid)
      if (midEvent) {
        const midData = window.getEventData ? window.getEventData(midEvent, lang) : midEvent;
        const midCap = createEl('button', 'midcap');
        midCap.type = 'button';
        midCap.dataset.idx = midEvent._i;
        midCap.appendChild(createTextEl('i', '', midData.title));
        midCap.appendChild(createTextEl('span', '', midData.date));
        up.appendChild(midCap);

        const pillBtn = createEl('button', 'pill pill-btn');
        pillBtn.type = 'button';
        pillBtn.dataset.idx = midEvent._i;
        pillBtn.setAttribute('aria-label', `${group.yl}: ${midData.title}`);
        pillBtn.appendChild(createTextEl('b', '', group.yl));
        ax.appendChild(pillBtn);
      } else {
        const pill = createEl('div', 'pill');
        pill.appendChild(createTextEl('b', '', group.yl));
        ax.appendChild(pill);
      }

      // Kiểm tra câu chuyện bên lề trên đường kẻ (hỗ trợ cả trước mốc năm và sau mốc năm)
      const storyList = window.AXIS_STORIES || [];
      storyList.forEach(s => {
        const isBefore = (s.beforeYear === group.y) || (s.targetYear === group.y && s.position === 'before');
        const isAfter = (s.afterYear === group.y) || (s.targetYear === group.y && s.position === 'after');
        if (!isBefore && !isAfter) return;

        const storyTooltip = (lang === 'ja' && s.tooltip_ja)
          ? s.tooltip_ja
          : s.tooltip;

        const storyBtn = createEl('button', `axis-story-btn ${isBefore ? 'is-before' : 'is-after'}`);
        storyBtn.type = 'button';
        storyBtn.dataset.storyId = s.id;
        storyBtn.setAttribute('aria-label', storyTooltip || 'Chuyện bên lề');

        const avatarImg = createEl('img', 'axis-story-avatar');
        avatarImg.src = s.avatar || 'assets/images/pxa-avatar.jpg';
        avatarImg.alt = 'Phạm Xuân Ẩn';
        avatarImg.loading = 'lazy';
        storyBtn.appendChild(avatarImg);

        const tooltip = createTextEl('span', 'axis-story-tooltip', storyTooltip || 'Chuyện bên lề');
        storyBtn.appendChild(tooltip);

        ax.appendChild(storyBtn);
      });

      col.appendChild(up);
      col.appendChild(ax);
      col.appendChild(dn);
      track.appendChild(col);
    });
  }

  // Khởi dựng Timeline
  function initTimeline() {
    track.innerHTML = '';
    applyConfigAndTexts();
    renderTimeline();
    updateProgressBar();
  }

  initTimeline();

  // ========================================================================
  // XỬ LÝ POPUP CHUYỆN BÊN LỀ (Side Stories Modal)
  // ========================================================================
  const storyModal = document.getElementById('storyModal');
  const storySheet = document.getElementById('storySheet');
  const smClose = document.getElementById('smClose');
  const smArt = document.getElementById('smArt');
  const smMeta = document.getElementById('smMeta');
  const smTitle = document.getElementById('sm-title');
  const smText = document.getElementById('smText');
  const smNote = document.getElementById('smNote');
  const smSrc = document.getElementById('smSrc');

  function openStoryModal(storyId) {
    const storyList = window.AXIS_STORIES || [];
    const storyData = storyList.find(s => s.id === storyId || s.aliasId === storyId) || storyList[0];
    if (!storyData || !storyModal) return;

    currentOpenStoryId = storyId;
    const lang = window.getCurrentLang ? window.getCurrentLang() : 'vi';

    const title = (lang === 'ja' && storyData.title_ja) ? storyData.title_ja : storyData.title;
    const meta = (lang === 'ja' && storyData.meta_ja) ? storyData.meta_ja : (storyData.meta || (lang === 'ja' ? 'サイドストーリー' : 'CHUYỆN BÊN LỀ'));
    const src = (lang === 'ja' && storyData.src_ja) ? storyData.src_ja : (storyData.src || '');

    const heroImg = (lang === 'ja' && (storyData.modalImg_ja || storyData.heroImg_ja))
      ? (storyData.modalImg_ja || storyData.heroImg_ja)
      : (storyData.modalImg || storyData.heroImg || '');

    const heroAlt = (lang === 'ja' && (storyData.modalImgAlt_ja || storyData.heroAlt_ja))
      ? (storyData.modalImgAlt_ja || storyData.heroAlt_ja)
      : (storyData.modalImgAlt || storyData.heroAlt || title || '');

    const heroCaption = (lang === 'ja' && (storyData.caption_ja || storyData.heroCaption_ja))
      ? (storyData.caption_ja || storyData.heroCaption_ja)
      : (storyData.caption || storyData.heroCaption || '');

    // 1. Render Hero Image
    if (smArt) {
      smArt.innerHTML = '';
      if (heroImg) {
        smArt.style.display = '';
        const figure = createEl('figure', 'm-hero-figure');
        const img = createEl('img', 'm-single-hero-img art-photo');
        img.src = heroImg;
        img.alt = heroAlt;
        img.loading = 'eager';
        figure.appendChild(img);

        if (heroCaption) {
          const figcap = createTextEl('figcaption', 'm-hero-caption', heroCaption);
          figure.appendChild(figcap);
        }
        smArt.appendChild(figure);
      } else {
        smArt.style.display = 'none';
      }
    }

    // 2. Render Header Meta & Title
    if (smMeta) {
      if (meta) {
        smMeta.textContent = meta;
        smMeta.hidden = false;
      } else {
        smMeta.hidden = true;
      }
    }
    if (smTitle) {
      smTitle.textContent = title || '';
    }

    // 3. Render Nội dung các đoạn văn & Ảnh chèn giữa / dưới
    if (smText) {
      smText.innerHTML = '';

      let paragraphs = [];
      let pIdx = 1;
      while (true) {
        const valJa = storyData[`text${pIdx}_ja`] || storyData[`p${pIdx}_ja`];
        const valVi = storyData[`text${pIdx}`] || storyData[`p${pIdx}`];
        const chosen = (lang === 'ja' && valJa) ? valJa : (valVi || (lang === 'ja' ? valVi : ''));
        if (chosen && typeof chosen === 'string' && chosen.trim() !== '') {
          paragraphs.push(chosen);
          pIdx++;
        } else {
          if (storyData[`text${pIdx + 1}`] || storyData[`text${pIdx + 1}_ja`]) {
            pIdx++;
            continue;
          }
          break;
        }
      }

      if (paragraphs.length === 0) {
        const pList = (lang === 'ja' && storyData.paragraphs_ja) ? storyData.paragraphs_ja : storyData.paragraphs;
        if (Array.isArray(pList)) {
          paragraphs = pList;
        }
      }

      paragraphs.forEach((pText, idx) => {
        if (!pText) return;
        const p = createTextEl('p', '', pText);
        smText.appendChild(p);

        // Ảnh chèn giữa văn bản: midImg (sau text1) hoặc midImg2...
        const currentMid = (idx === 0 && ((lang === 'ja' && storyData.midImg_ja) ? storyData.midImg_ja : storyData.midImg))
          || ((lang === 'ja' && storyData[`midImg${idx + 1}_ja`]) ? storyData[`midImg${idx + 1}_ja`] : storyData[`midImg${idx + 1}`]);

        if (currentMid) {
          const midSrc = currentMid.src || currentMid.img;
          if (midSrc) {
            const figure = createEl('figure', 'm-content-figure m-mid-figure');
            const img = createEl('img', 'm-content-img');
            img.src = midSrc;
            img.alt = ((lang === 'ja' && currentMid.alt_ja) ? currentMid.alt_ja : currentMid.alt) || '';
            img.loading = 'lazy';
            figure.appendChild(img);

            const midCap = (lang === 'ja' && currentMid.caption_ja) ? currentMid.caption_ja : currentMid.caption;
            if (midCap) {
              figure.appendChild(createTextEl('figcaption', 'm-content-caption', midCap));
            }
            smText.appendChild(figure);
          }
        }
      });

      // Ảnh bên dưới văn bản: bottomImg / extraImages
      const rawBottom = ((lang === 'ja' && storyData.bottomImg_ja) ? storyData.bottomImg_ja : storyData.bottomImg)
        || ((lang === 'ja' && storyData.extraImages_ja) ? storyData.extraImages_ja : storyData.extraImages);

      if (rawBottom) {
        const bottomList = Array.isArray(rawBottom) ? rawBottom : [rawBottom];
        const container = createEl('div', 'm-content-images');
        bottomList.forEach(item => {
          const imgSrc = typeof item === 'string' ? item : (item.src || item.img);
          if (!imgSrc) return;
          const figure = createEl('figure', 'm-content-figure');
          const img = createEl('img', 'm-content-img');
          img.src = imgSrc;
          img.alt = (typeof item === 'object' && ((lang === 'ja' && item.alt_ja) ? item.alt_ja : item.alt)) || '';
          img.loading = 'lazy';
          figure.appendChild(img);

          const cap = typeof item === 'object' ? ((lang === 'ja' && item.caption_ja) ? item.caption_ja : item.caption) : '';
          if (cap) {
            figure.appendChild(createTextEl('figcaption', 'm-content-caption', cap));
          }
          container.appendChild(figure);
        });
        if (container.children.length > 0) {
          smText.appendChild(container);
        }
      }
    }

    if (smNote) {
      const note = (lang === 'ja' && storyData.note_ja) ? storyData.note_ja : storyData.note;
      if (note && note.trim() !== '') {
        smNote.textContent = note;
        smNote.hidden = false;
      } else {
        smNote.hidden = true;
      }
    }

    if (smSrc) {
      smSrc.textContent = src || '';
    }

    if (storySheet) {
      storySheet.scrollTop = 0;
    }

    storyModal.hidden = false;
    document.body.classList.add('modal-open');
    if (smClose) smClose.focus();
  }

  function closeStoryModal() {
    if (!storyModal) return;
    storyModal.hidden = true;
    currentOpenStoryId = null;
    document.body.classList.remove('modal-open');
  }

  if (smClose) smClose.addEventListener('click', closeStoryModal);
  if (storyModal) {
    storyModal.addEventListener('click', (e) => {
      if (e.target === storyModal) closeStoryModal();
    });
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && storyModal && !storyModal.hidden) {
      closeStoryModal();
    }
  });

  // 5. Lắng nghe sự kiện chuyển ngôn ngữ để cập nhật lại timeline
  window.addEventListener('languagechange', () => {
    initTimeline();
    if (storyModal && !storyModal.hidden && currentOpenStoryId) {
      openStoryModal(currentOpenStoryId);
    }
  });

  // 6. Xử lý click trên Track: Mở modal sự kiện hoặc modal chuyện bên lề
  track.addEventListener('click', (e) => {
    if (isDraggingMoved) return;

    const storyTarget = e.target.closest('[data-story-id]');
    if (storyTarget) {
      openStoryModal(storyTarget.dataset.storyId);
      return;
    }

    const clickable = e.target.closest('[data-idx]');
    if (clickable) {
      const index = parseInt(clickable.dataset.idx, 10);
      if (!isNaN(index) && window.openModal) {
        window.openModal(index);
      }
    }
  });

  // 7. Xử lý cuộn ngang bằng con lăn chuột (Mouse Wheel)
  scroller.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      scroller.scrollLeft += e.deltaY;
      e.preventDefault();
      updateProgressBar();
    }
  }, { passive: false });

  // 8. Kéo rê chuột mượt mà (Drag to Scroll)
  let isPointerDown = false;
  let isDraggingMoved = false;
  let startX = 0;
  let startScrollLeft = 0;

  scroller.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    isPointerDown = true;
    isDraggingMoved = false;
    startX = e.clientX;
    startScrollLeft = scroller.scrollLeft;
  });

  window.addEventListener('pointermove', (e) => {
    if (!isPointerDown) return;
    const deltaX = e.clientX - startX;
    if (Math.abs(deltaX) > 6) {
      isDraggingMoved = true;
      scroller.classList.add('dragging');
    }
    if (isDraggingMoved) {
      scroller.scrollLeft = startScrollLeft - deltaX;
      updateProgressBar();
    }
  });

  window.addEventListener('pointerup', () => {
    isPointerDown = false;
    scroller.classList.remove('dragging');
    setTimeout(() => { isDraggingMoved = false; }, 50);
  });

  // 9. Nút điều hướng Cuộn Trái / Phải
  const getStepDistance = () => Math.round(scroller.clientWidth * 0.65);

  if (btnGoLeft) {
    btnGoLeft.onclick = () => {
      scroller.scrollBy({ left: -getStepDistance(), behavior: 'smooth' });
    };
  }
  if (btnGoRight) {
    btnGoRight.onclick = () => {
      scroller.scrollBy({ left: getStepDistance(), behavior: 'smooth' });
    };
  }

  // 10. Thanh tiến trình cuộn
  function updateProgressBar() {
    if (!progressBar) return;
    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    if (maxScroll <= 0) {
      progressBar.style.width = '0%';
      return;
    }
    const percent = Math.min(100, Math.max(0, (scroller.scrollLeft / maxScroll) * 100));
    progressBar.style.width = `${percent}%`;
  }

  scroller.addEventListener('scroll', updateProgressBar, { passive: true });
  window.addEventListener('resize', updateProgressBar);

  // 11. Phím tắt bàn phím
  document.addEventListener('keydown', (e) => {
    if (storyModal && !storyModal.hidden) {
      if (e.key === 'Escape') closeStoryModal();
      return;
    }

    const modal = document.getElementById('modal');
    if (modal && !modal.hidden) return;

    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
      scroller.scrollBy({ left: getStepDistance(), behavior: 'smooth' });
    } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
      scroller.scrollBy({ left: -getStepDistance(), behavior: 'smooth' });
    }
  });
});
