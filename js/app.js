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
    const axisDecor = createEl('div', 'axis-intro-node');
    ax.appendChild(axisDecor);

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

    // Khối chữ tiêu đề và ngày tháng
    const cap = createEl('span', 'cap');
    cap.appendChild(createTextEl('span', 'c-title', evData.title));
    cap.appendChild(createTextEl('span', 'c-date', evData.date));
    card.appendChild(cap);

    // Nếu có ghi chú đối chiếu thì gắn chấm cảnh báo
    if (evData.note && evData.note.trim() !== '') {
      const dot = createEl('span', 'dot-note');
      dot.title = lang === 'ja' ? '出典確認中の記述あり' : 'Có ghi chú cần đối chiếu';
      card.appendChild(dot);
    }

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

      // Kiểm tra câu chuyện bên lề trên đường kẻ (ví dụ giữa 1957 và 1959)
      const storyList = window.AXIS_STORIES || [];
      const storyForThisYear = storyList.find(s => s.afterYear === group.y);
      if (storyForThisYear) {
        const storyTooltip = (lang === 'ja' && storyForThisYear.tooltip_ja)
          ? storyForThisYear.tooltip_ja
          : storyForThisYear.tooltip;

        const storyBtn = createEl('button', 'axis-story-btn');
        storyBtn.type = 'button';
        storyBtn.dataset.storyId = storyForThisYear.id;
        storyBtn.setAttribute('aria-label', storyTooltip || 'Chuyện bên lề');

        const avatarImg = createEl('img', 'axis-story-avatar');
        avatarImg.src = storyForThisYear.avatar || 'assets/images/pxa-avatar.jpg';
        avatarImg.alt = 'Phạm Xuân Ẩn';
        avatarImg.loading = 'lazy';
        storyBtn.appendChild(avatarImg);

        const tooltip = createTextEl('span', 'axis-story-tooltip', storyTooltip || 'Chuyện bên lề');
        storyBtn.appendChild(tooltip);

        ax.appendChild(storyBtn);
      }

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
  const smClose = document.getElementById('smClose');
  const smAvatar = document.getElementById('smAvatar');
  const smBadge = document.getElementById('smBadge');
  const smTitle = document.getElementById('sm-title');
  const smSubtitle = document.getElementById('smSubtitle');
  const smBody = document.getElementById('smBody');

  function openStoryModal(storyId) {
    const storyList = window.AXIS_STORIES || [];
    const storyData = storyList.find(s => s.id === storyId) || storyList[0];
    if (!storyData || !storyModal) return;

    currentOpenStoryId = storyId;
    const lang = window.getCurrentLang ? window.getCurrentLang() : 'vi';

    const title = (lang === 'ja' && storyData.title_ja) ? storyData.title_ja : storyData.title;
    const subtitle = (lang === 'ja' && storyData.subtitle_ja) ? storyData.subtitle_ja : storyData.subtitle;
    const timeBadge = (lang === 'ja' && storyData.timeBadge_ja) ? storyData.timeBadge_ja : storyData.timeBadge;
    const stories = (lang === 'ja' && storyData.stories_ja) ? storyData.stories_ja : storyData.stories;

    if (smAvatar) smAvatar.src = storyData.avatar || 'assets/images/pxa-avatar.jpg';
    if (smBadge) smBadge.textContent = timeBadge || (lang === 'ja' ? 'サイドストーリー' : 'CHUYỆN BÊN LỀ');
    if (smTitle) smTitle.textContent = title || '';
    if (smSubtitle) smSubtitle.textContent = subtitle || '';

    if (smBody) {
      smBody.innerHTML = '';
      if (Array.isArray(stories)) {
        stories.forEach(st => {
          const card = createEl('div', 'story-card');
          if (st.tag) {
            card.appendChild(createTextEl('span', 'story-card-tag', st.tag));
          }
          if (st.title) {
            card.appendChild(createTextEl('h3', '', st.title));
          }
          if (Array.isArray(st.paragraphs)) {
            st.paragraphs.forEach(pText => {
              card.appendChild(createTextEl('p', '', pText));
            });
          }
          smBody.appendChild(card);
        });
      }
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
