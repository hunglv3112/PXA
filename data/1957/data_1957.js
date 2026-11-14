/**
 * ==============================================================================
 * DỮ LIỆU MỞ RỘNG — NĂM 1957 (data/1957/data_1957.js)
 * ==============================================================================
 * Quản lý toàn bộ dữ liệu năm 1957 cho cả 2 nửa trên Timeline:
 *   1. top: Nhánh TÌNH BÁO (id: '1957t') — Nửa trên (Dạng MẢNG các object)
 *   2. bot: Nhánh NHÀ BÁO  (id: '1957b') — Nửa dưới (Dạng MẢNG các object)
 *
 * QUY TẮC HIỂN THỊ MODAL:
 *   - Nếu mảng có ĐÚNG 1 OBJECT: Modal hiển thị dạng 1 cột liền mạch
 *     (ảnh hero ở trên -> text nội dung ở dưới, không chia 2 bên trái phải).
 *   - Nếu mảng có > 1 OBJECT: Modal chia 2 bên trái - phải (giống năm 1975).
 * ==============================================================================
 */

window.EXTRA_DATA_1957 = {

    // ==========================================================================
    // 1. NHÁNH TÌNH BÁO — NỬA TRÊN (id: '1957t') — MẢNG CÓ 1 OBJECT
    // ==========================================================================
    top: [
        {
            id: '1957t',
            // ── ẢNH TRONG POPUP CHI TIẾT (HERO BANNER KÈM CHÚ THÍCH) ──
            modalImg: 'assets/images/1957_1959/1957_TNgoai_NgoDinhDiemToiThamMy.jpg',
            modalImgAlt: 'Tổng thống Mỹ Dwight Eisenhower (ngoài cùng bên trái) đón Tổng thống Việt Nam Cộng hòa Ngô Đình Diệm (thứ ba từ trái sang) tới thăm Washington năm 1957 (Nguồn: NARA)',
            modalImgAlt_ja: '1957年、ワシントンを訪れたベトナム共和国のゴー・ディン・ジェム大統領（左から3番目）を出迎えるアメリカのドワイト・アイゼンハワー大統領（一番左）（出典：NARA）',
            caption: 'Tổng thống Mỹ Dwight Eisenhower (ngoài cùng bên trái) đón Tổng thống Việt Nam Cộng hòa Ngô Đình Diệm (thứ ba từ trái sang) tới thăm Washington năm 1957 (Nguồn: NARA)',
            caption_ja: '1957年、ワシントンを訪れたベトナム共和国のゴー・ディン・ジェム大統領（左から3番目）を出迎えるアメリカのドワイト・アイゼンハワー大統領（一番左）（出典：NARA）',
            title: 'Nhiệm vụ du học báo chí tại Mỹ',
            title_ja: 'アメリカでのジャーナリズム留学という任務',
            date: 'Năm 1957',
            date_ja: '1957年',

            text1: 'Nhận thấy Mỹ sẽ thay thế Pháp tại Việt Nam, chỉ huy tình báo Mười Hương cùng các cấp lãnh đạo phía Việt Nam Dân chủ Cộng hòa đã vạch ra kế hoạch đưa Phạm Xuân Ẩn sang Mỹ du học nhằm nắm bắt tình hình nước Mỹ và tạo nền móng cho vỏ bọc tình báo chiến lược lâu dài.',
            text2: 'Cấp trên Mười Hương khuyên ông chọn ngành báo chí vì hai lý do chính. Thứ nhất, thời điểm đó Ẩn chưa có bằng tốt nghiệp trung học, trong khi ngành báo chí lúc ấy không bắt buộc phải có loại bằng cấp này. Quan trọng hơn, Mười Hương cho rằng nghề báo có bình diện giao tiếp rộng nhất, tạo điều kiện thuận lợi cho công tác tình báo sau này.',

            text1_ja: 'アメリカがベトナムにおいてフランスに取って代わると見て、諜報指揮官のムオイ・フオンとベトナム民主共和国側の指導部は、アメリカの情勢を把握し、長期にわたる戦略情報活動の隠れ蓑の基盤を築くため、ファム・スアン・アンをアメリカに留学させる計画を立てた。',
            text2_ja: '上官のムオイ・フオンは、主に二つの理由から、アンにジャーナリズムを専攻するよう勧めた。\n\n第一に、当時アンは高校の卒業資格を持っていなかったが、ジャーナリズムの分野ではその資格が必須ではなかったことである。\n\nさらに重要なこととして、ムオイ・フオンは、記者という職業は交友関係が最も広く、後の諜報活動に有利な条件をもたらすと考えていた。',

            // ── ẢNH CHÈN GIỮA text1 VÀ text2 ──
            midImg: {
                src: 'assets/images/1957_1959/1957_MuoiHuong.jpg',
                alt: 'Chân dung Mười Hương (Trần Quốc Hương) - Chỉ huy mạng lưới tình báo chiến lược chống Mỹ của phía Việt Nam Dân chủ Cộng hòa (Nguồn: Tạp chí Văn hóa và Phát triển)',
                alt_ja: 'ムオイ・フオン（チャン・クォック・フオン）の肖像――ベトナム民主共和国側の抗米戦略情報網の指揮官（出典：Van hoa va Phat trien誌）',
                caption: 'Chân dung Mười Hương (Trần Quốc Hương) - Chỉ huy mạng lưới tình báo chiến lược chống Mỹ của phía Việt Nam Dân chủ Cộng hòa (Nguồn: Tạp chí Văn hóa và Phát triển)',
                caption_ja: 'ムオイ・フオン（チャン・クォック・フオン）の肖像――ベトナム民主共和国側の抗米戦略情報網の指揮官（出典：Van hoa va Phat trien誌）',
            },

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ],

    // ==========================================================================
    // 2. NHÁNH NHÀ BÁO — NỬA DƯỚI (id: '1957b') — MẢNG CÓ 2 OBJECT
    // ==========================================================================
    bot: [
        {
            id: '1957b',
            // ── ẢNH TRONG POPUP CHI TIẾT (HERO BANNER KÈM CHÚ THÍCH) ──
            modalImg: 'assets/images/1957_1959/1957_TruongOCC.jpg',
            modalImgAlt: 'Trường cao đẳng Orange Coast College (OCC) - Nơi Phạm Xuân Ẩn theo học ngành báo chí từ năm 1957 đến năm 1959 (Nguồn: Julius Shulman, Getty Research Institute)',
            modalImgAlt_ja: 'オレンジコーストカレッジ（OCC）――1957～1959年にファム・スアン・アンがジャーナリズムを学んだ学校（出典：Julius Shulman, Getty Research Institute）',
            caption: 'Trường cao đẳng Orange Coast College (OCC) - Nơi Phạm Xuân Ẩn theo học ngành báo chí từ năm 1957 đến năm 1959 (Nguồn: Julius Shulman, Getty Research Institute)',
            caption_ja: 'オレンジコーストカレッジ（OCC）――1957～1959年にファム・スアン・アンがジャーナリズムを学んだ学校（出典：Julius Shulman, Getty Research Institute）',
            modalImgLabel: 'Trường cao đẳng Orange Coast College (OCC)',
            modalImgLabel_ja: 'オレンジコーストカレッジ（OCC）',

            // ── VĂN BẢN CHI TIẾT (TÁCH RIÊNG TỪNG FIELD ĐOẠN VĂN) ──
            title: 'Tân sinh viên trường Orange Coast College',
            title_ja: 'オレンジコーストカレッジ（Orange Coast College）の新入生',
            date: 'Tháng 10/1957',
            date_ja: '1957年10月',

            text1: 'Tháng 10/1957, Phạm Xuân Ẩn đặt chân đến thành phố Costa Mesa, nhập học Trường Orange Coast College (OCC), bang California. Ông trở thành người Việt Nam đầu tiên theo học ngành báo chí tại Quận Cam.',

            text1_ja: '1957年10月、ファム・スアン・アンはカリフォルニア州コスタメサ市に降り立ち、オレンジコーストカレッジ（Orange Coast College、OCC）に入学した。アンは、オレンジ郡でジャーナリズムを学んだ最初のベトナム人となった。',
            note: '',
            note_ja: '',
        },
        {
            id: '1957b',
            // ── ẢNH TRONG POPUP CHI TIẾT (HERO BANNER KÈM CHÚ THÍCH) ──
            modalImg: 'assets/images/1957_1959/1957_PXADuocDangLenBaoNgayNhapHoc.jpg',
            modalImgAlt: 'Phạm Xuân Ẩn xuất hiện trên báo sinh viên The Barnacle (Nguồn: The Orange County Register)',
            modalImgAlt_ja: '学生新聞『バーナクル』に掲載されたファム・スアン・アン（出典：The Orange County Register）',
            caption: 'Phạm Xuân Ẩn xuất hiện trên báo sinh viên The Barnacle (Nguồn: The Orange County Register)',
            caption_ja: '学生新聞『バーナクル』に掲載されたファム・スアン・アン（出典：The Orange County Register）',
            modalImgLabel: 'Báo sinh viên The Barnacle',
            modalImgLabel_ja: '学生新聞『バーナクル』',

            // ── VĂN BẢN CHI TIẾT (TÁCH RIÊNG TỪNG FIELD ĐOẠN VĂN) ──
            title: 'Xuất hiện trên báo sinh viên The Barnacle',
            title_ja: '学生新聞『バーナクル』への登場',
            date: 'Tháng 10/1957',
            date_ja: '1957年10月',

            text1: 'Ngay trước Lễ Tạ ơn năm 1957, tờ báo của trường, The Barnacle, đã đăng bài giới thiệu việc Phạm Xuân Ẩn nhập học, kèm tấm ảnh ông ngồi bên cuốn từ điển tiếng Anh với chú thích: “Bạn nói điều đó như thế nào trong tiếng Anh?”. Đây là bài báo đầu tiên giới thiệu ông công khai với tư cách một sinh viên báo chí người Việt, và trở thành bước đầu của vỏ bọc tình báo mà ông duy trì về sau.',
            text1_ja: '1957年の感謝祭の直前、学生新聞『バーナクル（The Barnacle、フジツボ）』は、ファム・スアン・アンの入学を紹介する記事を掲載し、英語の辞書のそばに座るアンの写真に「それは英語で何と言うの？」というキャプションを添えた。\n\nこれは、アンをベトナム人のジャーナリズム専攻の学生として公に紹介した最初の記事であり、その後長く保ち続けることになる諜報の隠れ蓑の第一歩となった。',
            note: '',
            note_ja: '',
        }
    ]
};

// ==============================================================================
// TỰ ĐỘNG HÒA TRỘN DỮ LIỆU NĂM 1957 VÀO window.TIMELINE_DATA
// Quy tắc: timeline-data.js quyết định ảnh đại diện ngoài thẻ (cardImg / img)
// data_1957.js chỉ mở rộng nội dung chi tiết cho popup modal
// ==============================================================================
(function mergeExtraData1957() {
    function applyBranch(branchKey, defaultId) {
        if (!window.TIMELINE_DATA || !window.EXTRA_DATA_1957) return;
        const branchData = window.EXTRA_DATA_1957[branchKey];
        if (!branchData) return;

        let targetId = defaultId;

        if (Array.isArray(branchData)) {
            if (branchData.length > 0 && branchData[0].id) {
                targetId = branchData[0].id;
            }
        } else if (typeof branchData === 'object' && branchData.id) {
            targetId = branchData.id;
        }

        const ev = window.TIMELINE_DATA.find(e => e.id === targetId);
        if (!ev) return;

        // Lưu giữ thông tin đại diện ngoài ô thẻ Timeline từ timeline-data.js
        const savedTitle = ev.title;
        const savedTitleJa = ev.title_ja;
        const savedCardImg = ev.cardImg;
        const savedImg = ev.img;

        if (Array.isArray(branchData)) {
            ev.items = branchData;
            ev.bottomImg = branchData[0].bottomImg || null;
            if (branchData.length === 1) {
                Object.assign(ev, branchData[0]);
                ev.items = branchData;
            } else if (branchData.length > 1) {
                Object.assign(ev, branchData[0]);
                ev.items = branchData;
                ev.imgs = branchData;
            }
        } else {
            Object.assign(ev, branchData);
            if (branchData.imgs) ev.imgs = branchData.imgs;
        }

        // Luôn bảo toàn tên đại diện (title) và ảnh ngoài từ timeline-data.js
        if (savedTitle !== undefined) ev.title = savedTitle;
        if (savedTitleJa !== undefined) ev.title_ja = savedTitleJa;
        if (savedCardImg !== undefined) ev.cardImg = savedCardImg;
        if (savedImg !== undefined) ev.img = savedImg;
    }

    function doMerge() {
        applyBranch('top', '1957t');
        applyBranch('bot', '1957b');
    }

    if (window.TIMELINE_DATA) {
        doMerge();
    } else {
        document.addEventListener('DOMContentLoaded', doMerge);
    }
})();
