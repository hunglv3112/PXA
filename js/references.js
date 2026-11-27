/**
 * ==============================================================================
 * LOGIC QUẢN LÝ TÀI LIỆU THAM KHẢO & NGUỒN (js/references.js) — HỖ TRỢ SONG NGỮ (VI / JA)
 * ==============================================================================
 * Cung cấp khung hiển thị trích dẫn tài liệu tham khảo:
 *  - Tự động dựng hộp thoại modal tra cứu nguồn
 *  - Bộ lọc tìm kiếm nhanh theo tác giả, tên, năm thời gian thực
 *  - Chuyển đổi giữa "Nguồn của bài đang đọc" và "Xem tất cả nguồn của trang"
 *  - Hỗ trợ nút tròn hình cuốn sách có thể ghim bên cạnh popup hoặc sticky bên trái ảnh
 */

(function () {
  'use strict';

  // SVG Biểu tượng cuốn sách mở (Open Book) màu vàng viền thanh lịch
  const BOOK_ICON_SVG = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
  `;

  // SVG Biểu tượng ổ khóa giải mã (Decoder Lock) màu vàng viền thanh lịch
  const DECODE_ICON_SVG = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      <circle cx="12" cy="16" r="1.2"></circle>
    </svg>
  `;

  // Từ điển ngôn ngữ cho giao diện khung nguồn & giải mã
  const I18N = {
    vi: {
      btnLabel: 'Nguồn',
      btnTitle: 'Xem tài liệu tham khảo & nguồn trích dẫn',
      modalTitle: 'Tài liệu tham khảo',
      tabCurrent: 'Nguồn của đoạn hiện tại',
      tabAll: 'Tất cả các nguồn',
      searchPlaceholder: 'Tìm theo tác giả, tên, năm',
      countSuffix: 'nguồn',
      emptyText: 'Không tìm thấy tài liệu phù hợp.',
      sampleTag: '[nguồn mẫu]'
    },
    ja: {
      btnLabel: '参考文献',
      btnTitle: '参考文献一覧を見る',
      modalTitle: '参考文献',
      tabCurrent: '現在の項目の出典',
      tabAll: 'すべての出典',
      searchPlaceholder: '著者名、文献名、年で検索',
      countSuffix: '件の出典',
      emptyText: '該当する参考文献が見つかりませんでした。',
      sampleTag: '[サンプル出典]'
    }
  };

  // Quản lý trạng thái hiện tại
  let currentLang = 'vi';
  let activeTab = 'current'; // 'current' | 'all'
  let currentSources = [];
  let allSources = [];
  let searchQuery = '';
  let activeEventId = null;

  // DOM Elements của hộp thoại tham khảo
  let modalEl = null;
  let dialogEl = null;
  let titleEl = null;
  let tabCurrentBtn = null;
  let tabAllBtn = null;
  let searchInput = null;
  let searchClearBtn = null;
  let countEl = null;
  let listEl = null;
  let emptyEl = null;
  let closeBtn = null;

  // DOM Elements của hộp thoại Giải mã (Decode modal)
  let decodeModalEl = null;
  let decodeDialogEl = null;
  let decodeBadgeEl = null;
  let decodeTitleEl = null;
  let decodeSubEl = null;
  let decodeBodyEl = null;
  let decodeCloseBtn = null;
  let currentDecodeOptions = null;

  // Lấy ngôn ngữ hiện hành
  function getLang() {
    if (typeof window.getCurrentLang === 'function') {
      return window.getCurrentLang();
    }
    try {
      const stored = localStorage.getItem('pxa_language');
      if (stored === 'ja' || stored === 'vi') return stored;
    } catch (e) { }
    const docLang = document.documentElement.lang;
    return docLang === 'ja' ? 'ja' : 'vi';
  }

  // Khởi tạo DOM Hộp thoại Modal "Tài liệu tham khảo"
  function initModalDOM() {
    if (document.getElementById('pxaRefModal')) {
      modalEl = document.getElementById('pxaRefModal');
      return;
    }

    const t = I18N[currentLang] || I18N.vi;

    const modal = document.createElement('div');
    modal.className = 'ref-modal';
    modal.id = 'pxaRefModal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'pxaRefTitle');

    modal.innerHTML = `
      <div class="ref-dialog" id="pxaRefDialog">
        <div class="ref-dialog-header">
          <div class="ref-dialog-title-wrap">
            <h2 class="ref-dialog-title" id="pxaRefTitle">${t.modalTitle}</h2>
          </div>
          <button type="button" class="ref-close-btn" id="pxaRefClose" aria-label="Đóng (Esc)" title="Đóng">×</button>
        </div>

        <div class="ref-search-wrap">
          <svg class="ref-search-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
          </svg>
          <input type="text" class="ref-search-input" id="pxaRefSearch" placeholder="${t.searchPlaceholder}" autocomplete="off" />
          <button type="button" class="ref-search-clear" id="pxaRefSearchClear" hidden title="Xóa">×</button>
        </div>

        <div class="ref-list-wrap">
          <ul class="ref-list" id="pxaRefList"></ul>
          <div class="ref-empty" id="pxaRefEmpty" hidden>
            <div class="ref-empty-icon">📖</div>
            <p>${t.emptyText}</p>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    modalEl = modal;
    dialogEl = modal.querySelector('#pxaRefDialog');
    titleEl = modal.querySelector('#pxaRefTitle');
    searchInput = modal.querySelector('#pxaRefSearch');
    searchClearBtn = modal.querySelector('#pxaRefSearchClear');
    listEl = modal.querySelector('#pxaRefList');
    emptyEl = modal.querySelector('#pxaRefEmpty');
    closeBtn = modal.querySelector('#pxaRefClose');

    // Gắn sự kiện đóng modal
    closeBtn.addEventListener('click', closeRefModal);
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeRefModal();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modalEl && modalEl.classList.contains('is-open')) {
        closeRefModal();
      }
    });

    // Tìm kiếm thời gian thực
    searchInput.addEventListener('input', function () {
      searchQuery = (this.value || '').trim().toLowerCase();
      searchClearBtn.hidden = !searchQuery;
      renderList();
    });

    searchClearBtn.addEventListener('click', function () {
      searchInput.value = '';
      searchQuery = '';
      searchClearBtn.hidden = true;
      searchInput.focus();
      renderList();
    });
  }

  // Định dạng dòng hiển thị cho từng nguồn tài liệu
  function formatCitationHtml(item, index) {
    const num = item.id || (index + 1);
    let html = '';

      if (item.text) {
        // Tự động chuyển đổi các đường link URL trong văn bản thành thẻ <a> có thể bấm mở trong tab mới
        const urlRegex = /(https?:\/\/[^\s\)\],<"']+)/g;
        const escapeText = text => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        let formatted = '';
        let offset = 0;
        for (const { start, end } of item.italics || []) {
          formatted += escapeText(item.text.slice(offset, start));
          formatted += '<i>' + escapeText(item.text.slice(start, end)) + '</i>';
          offset = end;
        }
        formatted += escapeText(item.text.slice(offset));
        html = formatted.replace(urlRegex, function (url) {
          return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="ref-link-url">${url}</a>`;
        });
      } else if (item.rawHtml) {
        html = item.rawHtml;
      } else {
        const parts = [];
        if (item.author) parts.push(`<strong>${item.author}</strong>`);
        if (item.title) parts.push(`“${item.title}”`);
        if (item.source) parts.push(`<em>${item.source}</em>`);
        if (item.year) parts.push(item.year);
        if (item.pages) parts.push(item.pages);
        if (item.type) parts.push(`[${item.type}]`);

        html = parts.join(', ');
        if (html && !html.endsWith('.')) html += '.';
        if (item.tag) {
          html += ` <span class="ref-tag">[${item.tag}]</span>`;
        }
        if (item.url) {
          html += ` <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="ref-link-url">${item.url}</a>`;
        }
      }

      return `
      <li class="ref-item" data-id="${num}">
        <span class="ref-num">[${num}]</span>
        <div class="ref-content">${html}</div>
      </li>
    `;
    }

    // Render danh sách nguồn đã lọc
    function renderList() {
      if (!listEl) return;
      const t = I18N[currentLang] || I18N.vi;

      // Lấy toàn bộ danh sách nguồn (ưu tiên dữ liệu 95 nguồn)
      let sourceList = window.REFERENCES_DATA?.all || window.REFERENCES_DATA?.items || allSources;
      if ((!sourceList || sourceList.length === 0) && window.REFERENCES_DATA?.defaultSources) {
        sourceList = window.REFERENCES_DATA.defaultSources[currentLang] || window.REFERENCES_DATA.defaultSources.vi;
      }
      if (!sourceList) sourceList = [];

      // Lọc theo từ khóa tìm kiếm (hỗ trợ tìm kiếm số thứ tự như 45, [45], hoặc từ khóa bất kỳ)
      let filtered = sourceList;
      if (searchQuery) {
        const q = searchQuery.trim().toLowerCase();
        const numMatch = q.match(/^\[?(\d+)\]?$/);
        const targetId = numMatch ? parseInt(numMatch[1], 10) : null;

        filtered = sourceList.filter(item => {
          const itemId = item.id;
          // Trùng ID hoặc ID chứa chuỗi số đang tìm
          if (targetId !== null && itemId === targetId) return true;
          if (itemId != null && String(itemId).includes(q)) return true;
          if (itemId != null && `[${itemId}]`.includes(q)) return true;

          // Tìm trong nội dung trích dẫn
          const text = [
            item.text || '',
            item.author || '',
            item.title || '',
            item.source || '',
            item.year || '',
            item.tag || '',
            item.url || '',
            item.rawHtml || ''
          ].join(' ').toLowerCase();

          return text.includes(q);
        });

        // Nếu tìm kiếm theo số cụ thể (ví dụ 45), ưu tiên xếp mục có đúng ID 45 lên đầu
        if (targetId !== null) {
          filtered.sort((a, b) => {
            if (a.id === targetId) return -1;
            if (b.id === targetId) return 1;
            return (a.id || 0) - (b.id || 0);
          });
        }
      }

        if (filtered.length === 0) {
          listEl.innerHTML = '';
          emptyEl.hidden = false;
        } else {
          emptyEl.hidden = true;
          listEl.innerHTML = filtered.map((item, idx) => formatCitationHtml(item, idx)).join('');
        }
      }

      // Mở hộp thoại Modal "Tài liệu tham khảo"
      function openRefModal(options = {}) {
        initModalDOM();
        currentLang = getLang();

        // Cập nhật câu chữ theo ngôn ngữ
        const t = I18N[currentLang] || I18N.vi;
          if (titleEl) titleEl.textContent = t.modalTitle;
          if (searchInput) searchInput.placeholder = t.searchPlaceholder;
          if (emptyEl) {
            const p = emptyEl.querySelector('p');
            if (p) p.textContent = t.emptyText;
          }

          // Thiết lập nguồn dữ liệu toàn bộ
          allSources = window.REFERENCES_DATA?.all || window.REFERENCES_DATA?.items || (window.REFERENCES_DATA?.defaultSources && (window.REFERENCES_DATA.defaultSources[currentLang] || window.REFERENCES_DATA.defaultSources.vi)) || [];

            // Reset tìm kiếm
            if (searchInput) {
              searchInput.value = '';
            }
            searchQuery = '';
            if (searchClearBtn) searchClearBtn.hidden = true;

            renderList();

            modalEl.classList.add('is-open');
            document.body.style.overflow = 'hidden';

            // Focus vào input tìm kiếm để người dùng có thể gõ ngay nếu muốn
            setTimeout(() => {
              if (searchInput) searchInput.focus();
            }, 150);
          }

          // Đóng hộp thoại Modal
          function closeRefModal() {
            if (!modalEl) return;
            modalEl.classList.remove('is-open');
            // Khôi phục lại scroll nếu không còn modal nào khác đang mở
            const anyModalOpen = document.querySelector('.modal:not([hidden]), .ref-modal.is-open');
            if (!anyModalOpen) {
              document.body.style.overflow = '';
            }
          }

          // Tạo phần tử nút bấm Nguồn (hình cuốn sách)
          function createTriggerButton(options = {}) {
            currentLang = getLang();
            const t = I18N[currentLang] || I18N.vi;

            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = `ref-trigger-btn ${options.className || ''}`.trim();
            btn.setAttribute('aria-label', options.label || t.btnTitle);
            btn.setAttribute('title', options.title || t.btnTitle);
            if (options.id) btn.id = options.id;
            if (options.eventId) btn.dataset.eventId = options.eventId;

            btn.innerHTML = `
      <div class="ref-btn-icon-circle">
        ${BOOK_ICON_SVG}
      </div>
      <span class="ref-btn-label">${options.label || t.btnLabel}</span>
    `;

            btn.addEventListener('click', function (e) {
              e.stopPropagation();
              openRefModal(options);
            });

            return btn;
          }

          // Tự động gắn nút Nguồn vào các popup modal timeline nếu có
          function bindToTimelineModals() {
            const sheet = document.getElementById('sheet');
            if (sheet && !document.getElementById('sheetRefBtn')) {
              const btn = createTriggerButton({
                id: 'sheetRefBtn',
                className: 'popup-side-ref-btn',
                pageKey: 'timeline'
              });
              sheet.parentElement.insertBefore(btn, sheet);
            }

            const storySheet = document.getElementById('storySheet');
            if (storySheet && !document.getElementById('storyRefBtn')) {
              const btn = createTriggerButton({
                id: 'storyRefBtn',
                className: 'popup-side-ref-btn',
                pageKey: 'timeline'
              });
              storySheet.parentElement.insertBefore(btn, storySheet);
            }
          }

          // Khởi tạo DOM Hộp thoại Modal "Giải mã tình báo" (Decode Modal)
          function initDecodeModalDOM() {
            if (document.getElementById('pxaDecodeModal')) {
              decodeModalEl = document.getElementById('pxaDecodeModal');
              return;
            }

            const t = I18N[currentLang] || I18N.vi;

            const modal = document.createElement('div');
            modal.className = 'decode-modal';
            modal.id = 'pxaDecodeModal';
            modal.setAttribute('role', 'dialog');
            modal.setAttribute('aria-modal', 'true');
            modal.setAttribute('aria-labelledby', 'pxaDecodeTitle');

            modal.innerHTML = `
      <div class="decode-dialog" id="pxaDecodeDialog">
        <div class="ref-dialog-header">
          <div class="ref-dialog-title-wrap">
            <span class="decode-dialog-badge" id="pxaDecodeBadge">${t.decodeBadge}</span>
            <h2 class="decode-dialog-title" id="pxaDecodeTitle">${t.decodeModalTitle}</h2>
            <p class="decode-dialog-sub" id="pxaDecodeSub">${t.decodeSub}</p>
          </div>
          <button type="button" class="ref-close-btn" id="pxaDecodeClose" aria-label="Đóng (Esc)" title="Đóng">×</button>
        </div>
        <div class="decode-body-wrap" id="pxaDecodeBody"></div>
      </div>
    `;

            document.body.appendChild(modal);

            decodeModalEl = modal;
            decodeDialogEl = modal.querySelector('#pxaDecodeDialog');
            decodeBadgeEl = modal.querySelector('#pxaDecodeBadge');
            decodeTitleEl = modal.querySelector('#pxaDecodeTitle');
            decodeSubEl = modal.querySelector('#pxaDecodeSub');
            decodeBodyEl = modal.querySelector('#pxaDecodeBody');
            decodeCloseBtn = modal.querySelector('#pxaDecodeClose');

            decodeCloseBtn.addEventListener('click', closeDecodeModal);
            modal.addEventListener('click', function (e) {
              if (e.target === modal) {
                closeDecodeModal();
              }
            });

            document.addEventListener('keydown', function (e) {
              if (e.key === 'Escape' && decodeModalEl && decodeModalEl.classList.contains('is-open')) {
                closeDecodeModal();
              }
            });
          }

          // Mở hộp thoại Modal "Giải mã tình báo"
          function openDecodeModal(options = {}) {
            initDecodeModalDOM();
            currentLang = getLang();
            currentDecodeOptions = options;
            const t = I18N[currentLang] || I18N.vi;
            const isJa = currentLang === 'ja';

            decodeBadgeEl.textContent = options.badge || t.decodeBadge;
            decodeTitleEl.textContent = options.modalTitle || t.decodeModalTitle;
            decodeSubEl.textContent = options.subTitle || t.decodeSub;

            let sec1Html = '';
            let sec2Html = '';
            let sec3Html = '';

            if (options.pageKey === 'postwar') {
              sec1Html = isJa
                ? '諜報員ファム・スアン・アンは、平和回復後もその生涯を通じて沈黙を守り続けました。生前に遺された16個の勲章、軍服、愛用のカメラやタイプライターは、沈黙の中に秘められた並外れた諜報キャリアを雄弁に物語っています。'
                : 'Thiếu tướng Phạm Xuân Ẩn sau ngày đất nước thống nhất vẫn giữ trọn sự khiêm nhường và kỷ luật nghiệp vụ. Phòng lưu niệm lưu giữ 16 tấm huân - huy chương cao quý, bộ quân phục, chiếc máy ảnh Minox và máy đánh chữ - những kỷ vật gắn liền với huyền thoại tình báo thế kỷ.';
              sec2Html = isJa
                ? '平時はタイム誌等の特派員として西側首脳と交友しつつ、重要軍事作戦計画をフィルムに収め、クチの秘密連絡網（H4ルート）を経由してハノイの最高司令部へ直接送り続けました。'
                : 'Trong suốt những năm tháng tác nghiệp báo chí, ông tiếp cận trực tiếp giới chức chóp bu MACV và CIA. Các tài liệu tối mật được thu nhỏ qua vi phim, gửi qua hộp thư mật và tuyến giao liên H4 của bà Ba Minh về Căn cứ Bến Cát an toàn tuyệt đối.';
              sec3Html = isJa
                ? '米軍の戦略文書や南ベトナム軍の配置情報など、彼のもたらした戦略情報はベトナム民主共和国軍の勝利に決定的貢献を果たしました。'
                : 'Những tin tức chiến lược về kế hoạch Ấp Bắc, Chiến tranh đặc biệt, Chiến tranh cục bộ và Kế hoạch phòng thủ Sài Gòn đã giúp Bộ Chính trị và Quân ủy Trung ương đưa ra những quyết sách mang tính bước ngoặt lịch sử.';
            } else if (options.eventData) {
              const ev = options.eventData;
              const evTitle = isJa ? (ev.title_ja || ev.title) : ev.title;
              sec1Html = isJa
                ? `【${evTitle}】の背景において、ファム・スアン・アンはジャーナリストの身分を最大限に活用し、米軍司令部（MACV）およびサイゴン政権内部の生きた機密情報を収集しました。`
                : `Trong bối cảnh 【${evTitle}】, Phạm Xuân Ẩn đã vận dụng linh hoạt vỏ bọc ký giả quốc tế để tiếp cận các cuộc họp báo, văn kiện quân sự chiến lược của Bộ Tư lệnh Viện trợ Quân sự Mỹ (MACV) và Phủ Tổng thống Việt Nam Cộng hòa.`;
              sec2Html = isJa
                ? '重要機密は専用の超小型カメラで撮影され、未現像フィルムの状態で春巻き（チャーゾー）や筒状菓子の中に隠され、連絡網H4を通じて即座に前線司令部へ搬送されました。'
                : 'Các tài liệu tối mật được chụp bằng máy ảnh Minox, cuộn phim giấu khéo léo trong các gói chả lụa hoặc giỏ thức ăn của bà Ba Minh, chuyển an toàn qua hàng chục trạm kiểm soát gắt gao của cảnh sát dã chiến.';
              sec3Html = isJa
                ? '分析された情報により、解放軍参謀本部は敵の作戦意図を先回りして把握し、的確な反撃作戦を指揮することが可能となりました。'
                : 'Nguồn tin tình báo chuẩn xác giúp Bộ Tổng tư lệnh Quân Giải phóng nắm trước ý đồ tác chiến của đối phương, chủ động đối phó và làm thất bại các chiến thuật quân sự quy mô lớn.';
            } else {
              sec1Html = isJa
                ? 'ファム・スアン・アンは米国のカリフォルニア州オレンジ・コースト・カレッジでジャーナリズムを専攻し、完璧なアメリカ英語とジャーナリズムの作法を体得。この唯一無二の経歴が、CIAや米軍高官からの絶対的信頼を得る礎となりました。'
                : 'Được đào tạo bài bản về báo chí tại Mỹ (Orange Coast College, California), Phạm Xuân Ẩn sở hữu phong thái, tư duy văn hóa Mỹ sắc sảo. Vỏ bọc hoàn hảo này giúp ông trở thành bạn tâm giao của các tướng lĩnh, trùm mật vụ CIA và các nhà báo hàng đầu thế giới.';
              sec2Html = isJa
                ? '連絡経路は極めて厳格に運用され、サイゴン市内のギヴラル・カフェ（Givral）やコンチネンタル・ホテルを拠点に情報収集を行い、愛犬を連れての情報伝達や暗号シグナルを活用しました。'
                : 'Mọi hoạt động đều tuân thủ nguyên tắc ngăn cách tuyệt đối. Cà phê Givral, khách sạn Continental là nơi ông thu thập tin tức. Mạng lưới giao liên H4 đảm bảo đường dây vận chuyển thông suốt suốt hàng chục năm không một lần bị lộ.';
              sec3Html = isJa
                ? '彼が送った数百件の報告書は、一文字も修正されることなく直接ホー・チ・ミン主席やボー・グエン・ザップ将軍の元に届けられ、国家の命運を左右する決断を支えました。'
                : 'Hàng trăm bản báo cáo chiến lược được gửi nguyên vẹn về căn cứ, được Đại tướng Võ Nguyên Giáp và Tổng Tư lệnh đánh giá là nguồn tin vô giá, chuẩn xác bậc nhất của cuộc kháng chiến.';
            }

            let extraBtnHtml = '';
            if (options.pageKey === 'postwar' && typeof window.openDecodeGame === 'function') {
              extraBtnHtml = `
        <div style="margin-top: 8px;">
          <button type="button" class="decode-action-btn" id="pxaOpenDecodeGameBtn">
            ${t.decodeGameBtn}
          </button>
        </div>
      `;
            }

            decodeBodyEl.innerHTML = `
      <div class="decode-card-section">
        <h3><span style="color:#ebcb45;">❖</span> ${t.decodeSec1}</h3>
        <p>${sec1Html}</p>
      </div>
      <div class="decode-card-section">
        <h3><span style="color:#ebcb45;">❖</span> ${t.decodeSec2}</h3>
        <p>${sec2Html}</p>
      </div>
      <div class="decode-card-section">
        <h3><span style="color:#ebcb45;">❖</span> ${t.decodeSec3}</h3>
        <p>${sec3Html}</p>
      </div>
      ${extraBtnHtml}
    `;

            const openGameBtn = decodeBodyEl.querySelector('#pxaOpenDecodeGameBtn');
            if (openGameBtn) {
              openGameBtn.onclick = function () {
                closeDecodeModal();
                if (typeof window.openDecodeGame === 'function') {
                  window.openDecodeGame(0, false);
                }
              };
            }

            decodeModalEl.classList.add('is-open');
            document.body.style.overflow = 'hidden';
          }

          // Đóng hộp thoại Modal "Giải mã tình báo"
          function closeDecodeModal() {
            if (!decodeModalEl) return;
            decodeModalEl.classList.remove('is-open');
            const anyModalOpen = document.querySelector('.modal:not([hidden]), .ref-modal.is-open, dialog[open]');
            if (!anyModalOpen) {
              document.body.style.overflow = '';
            }
          }

          // Cập nhật lại nhãn nút bấm khi người dùng đổi ngôn ngữ
          function updateI18nTexts() {
            currentLang = getLang();
            const t = I18N[currentLang] || I18N.vi;

            document.querySelectorAll('.ref-trigger-btn').forEach(btn => {
              const label = btn.querySelector('.ref-btn-label');
              if (label) label.textContent = t.btnLabel;
              btn.setAttribute('aria-label', t.btnTitle);
              btn.setAttribute('title', t.btnTitle);
            });

            if (modalEl && modalEl.classList.contains('is-open')) {
              if (titleEl) titleEl.textContent = t.modalTitle;
              if (searchInput) searchInput.placeholder = t.searchPlaceholder;
              renderList();
            }
          }

          window.addEventListener('languagechange', updateI18nTexts);

          // Định vị nút Nguồn nằm ngay bên cạnh khung popup cũ, không làm co giãn hay thay đổi kích thước khung popup
          function positionPopupRefBtn(btn, targetEl) {
            if (!btn || !targetEl) return;
            requestAnimationFrame(() => {
              const rect = targetEl.getBoundingClientRect();
              if (rect.width === 0 || rect.height === 0) return;

              btn.style.position = 'fixed';
              const leftMargin = rect.left;

              if (leftMargin >= 80) {
                // Có đủ khoảng trống bên trái popup: Đặt nút ở khoảng trống đó, cách mép popup một khoảng thoáng đẹp ~24px
                // Tâm nút đặt ở (rect.left - 54px) với transform translateX(-50%)
                const centerPos = Math.max(45, rect.left - 54);
                btn.style.left = centerPos + 'px';
                btn.style.transform = 'translateX(-50%)';
                btn.style.top = Math.max(80, Math.min(rect.top + 32, window.innerHeight - 130)) + 'px';
                btn.style.bottom = 'auto';
                btn.style.right = 'auto';
              } else {
                // Màn hình hẹp không đủ khoảng trống bên ngoài popup: Đặt nút góc dưới bên trái (bottom-left)
                // để tuyệt đối không đè lên menu ≡ ページ移動 ở góc trên bên trái và không che nội dung popup
                btn.style.left = '20px';
                btn.style.bottom = '24px';
                btn.style.top = 'auto';
                btn.style.right = 'auto';
                btn.style.transform = 'none';
              }
              btn.style.zIndex = '125';
            });
          }

          // Tự động căn chỉnh lại vị trí nút bên cạnh popup khi thay đổi kích thước màn hình
          window.addEventListener('resize', () => {
            const sheet = document.getElementById('sheet');
            const modal = document.getElementById('modal');
            const sheetRefBtn = document.getElementById('sheetRefBtn');
            if (modal && !modal.hidden && sheet && sheetRefBtn) {
              positionPopupRefBtn(sheetRefBtn, sheet);
            }

            const storySheet = document.getElementById('storySheet');
            const storyModal = document.getElementById('storyModal');
            const storyRefBtn = document.getElementById('storyRefBtn');
            if (storyModal && !storyModal.hidden && storySheet && storyRefBtn) {
              positionPopupRefBtn(storyRefBtn, storySheet);
            }

            const dlg = document.getElementById('dlg');
            const modalPostwar = document.getElementById('modalPostwar');
            const postwarDlgRefBtn = document.getElementById('postwarDlgRefBtn');
            if (modalPostwar && !modalPostwar.hidden && dlg && postwarDlgRefBtn) {
              positionPopupRefBtn(postwarDlgRefBtn, dlg);
            }
          });

          // Xuất API toàn cục
          window.ReferencesManager = {
            open: openRefModal,
            close: closeRefModal,
            openDecode: openDecodeModal,
            closeDecode: closeDecodeModal,
            createTriggerButton: createTriggerButton,
            positionPopupRefBtn: positionPopupRefBtn,
            BOOK_ICON_SVG: BOOK_ICON_SVG,
            DECODE_ICON_SVG: DECODE_ICON_SVG,
            bindToTimelineModals: bindToTimelineModals,
            setLanguage: function (lang) {
              currentLang = lang;
              updateI18nTexts();
            }
          };

          // Tự khởi chạy sau khi DOM sẵn sàng
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
              initModalDOM();
              bindToTimelineModals();
              updateI18nTexts();
            });
          } else {
            initModalDOM();
            bindToTimelineModals();
            updateI18nTexts();
          }

        }) ();
