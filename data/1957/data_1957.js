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
            modalImgAlt: 'Tổng thống Dwight Eisenhower (ngoài cùng bên trái) đón Tổng thống VNCH Ngô Đình Diệm (thứ ba từ trái sang) tới thăm Washington năm 1957 (NARA)',
            modalImgAlt_ja: 'カリフォルニアのオレンジ・コースト・カレッジでジャーナリズムを学ぶファム・スアン・アン',
            caption: 'Tổng thống Dwight Eisenhower (ngoài cùng bên trái) đón Tổng thống VNCH Ngô Đình Diệm (thứ ba từ trái sang) tới thăm Washington năm 1957 (NARA)',
            caption_ja: 'ドワイト・アイゼンハワー米大統領（一番左）が1957年にワシントンを訪問した南ベトナムのゴ・ディン・ジエム大統領（左から3人目）を出迎える（NARA）',
            title: 'Nhiệm vụ du học báo chí tại Mỹ',
            title_ja: '記者という偽装の選択',
            date: 'Năm 1957',
            date_ja: '1957年',

            text1: 'Nhận thấy Mỹ sẽ thay thế Pháp tại Việt Nam, chỉ huy tình báo Mười Hương cùng các cấp lãnh đạo phía Việt Nam Dân chủ Cộng hòa đã vạch ra kế hoạch đưa Phạm Xuân Ẩn sang Mỹ du học nhằm nắm bắt tình hình nước Mỹ và tạo nền móng cho vỏ bọc tình báo chiến lược lâu dài.',
            text2: 'Cấp trên Mười Hương khuyên ông chọn ngành báo chí vì hai lý do chính. Thứ nhất, thời điểm đó Ẩn chưa có bằng tốt nghiệp trung học, trong khi ngành báo chí lúc ấy không bắt buộc phải có loại bằng cấp này. Quan trọng hơn Mười Hương cho rằng nghề báo có bình diện giao tiếp rộng nhất, tạo điều kiện thuận lợi cho công tác tình báo sau này.',

            text1_ja: '米国の対ベトナム介入の本格化を見据え、情報部門の最高幹部ムオイ・フオンとマイ・チー・トーは、ファム・スアン・アンを米国へ留学させる戦略的計画を立案しました。米国の内情と深層を把握し、恒久的な戦略諜報の足場を築くことが狙いでした。',
            text2_ja: 'ムオイ・フオンはアンにジャーナリズム専攻を強く勧めました。アンには当時高校卒業資格がなかったものの、当時のジャーナリズム学科は入学しやすく、何より新聞記者という職業こそが社会のあらゆる階層と最も広く接触できる最適な偽装であったためです。',

            // ── ẢNH CHÈN GIỮA text1 VÀ text2 ──
            midImg: {
                src: 'assets/images/1957_1959/1957_MuoiHuong.jpg',
                alt: 'Chân dung Mười Hương (Trần Quốc Hương) - Chỉ huy mạng lưới tình báo chiến lược chống Mỹ của phía VNDCCH (Nguồn: Tạp chí Văn hóa và Phát triển)',
                alt_ja: '1957年当時のオレンジ・コースト・カレッジ（カリフォルニア州コスタメサ）',
                caption: 'Chân dung Mười Hương (Trần Quốc Hương) - Chỉ huy mạng lưới tình báo chiến lược chống Mỹ của phía VNDCCH (Nguồn: Tạp chí Văn hóa và Phát triển)',
                caption_ja: 'カリフォルニア州コスタメサのオレンジ・コースト・カレッジ — ファム・スアン・アンがジャーナリズムを学んだ場所（1957–1959年）。',
            },

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ],

    // ==========================================================================
    // 2. NHÁNH NHÀ BÁO — NỬA DƯỚI (id: '1957b') — MẢNG CÓ 1 OBJECT
    // ==========================================================================
    bot: [
        {
            id: '1957b',
            // ── ẢNH TRONG POPUP CHI TIẾT (HERO BANNER KÈM CHÚ THÍCH) ──
            modalImg: 'assets/images/1957_1959/1957_TruongOCC.jpg',
            modalImgAlt: 'Trường cao đẳng Orange Coast College (OCC) - Nơi Phạm Xuân Ẩn theo học ngành báo chí (Nguồn: Julius Shulman, Getty Research Institute)',
            modalImgAlt_ja: '1957年当時のオレンジ・コースト・カレッジ（カリフォルニア州コスタメサ）',
            caption: 'Trường cao đẳng Orange Coast College (OCC) - Nơi Phạm Xuân Ẩn theo học ngành báo chí (Nguồn: Julius Shulman, Getty Research Institute)',
            caption_ja: '1957年秋、カリフォルニア州コスタメサにあるオレンジ・コースト・カレッジのキャンパス。',
            modalImgLabel: 'Trường cao đẳng Orange Coast College (OCC)',
            modalImgLabel_ja: 'オレンジ・コースト・カレッジのキャンパス (1957年)',


            // ── VĂN BẢN CHI TIẾT (TÁCH RIÊNG TỪNG FIELD ĐOẠN VĂN) ──
            title: 'Tân sinh viên Orange Coast College',
            title_ja: '渡米とカリフォルニア留学の始まり',
            date: 'Tháng 10/1957',
            date_ja: '1957年10月',

            text1: 'Tháng 10/1957, Phạm Xuân Ẩn đặt chân đến thành phố Costa Mesa, nhập học Trường Orange Coast College (OCC), bang California.  Ông trở thành người Việt Nam đầu tiên theo học ngành báo chí tại Quận Cam.',

            text1_ja: '1957年10月、ファム・スアン・アンは米国カリフォルニア州に到着し、コスタメサにあるオレンジ・コースト・カレッジ（OCC）でジャーナリズムの勉学を開始しました。',
            note: '',
            note_ja: '',
            src_ja: '出典: トーマス・バス; メレマ（ネブラスカ大学）'
        },
        {
            id: '1957b',
            // ── ẢNH TRONG POPUP CHI TIẾT (HERO BANNER KÈM CHÚ THÍCH) ──
            modalImg: 'assets/images/1957_1959/1957_PXADuocDangLenBaoNgayNhapHoc.jpg',
            modalImgAlt: 'Phạm Xuân Ẩn xuất hiện trên báo sinh viên The Barnacle (Nguồn: The Orange County)',
            modalImgAlt_ja: '1957年当時のオレンジ・コースト・カレッジ（カリフォルニア州コスタメサ）',
            caption: 'Phạm Xuân Ẩn xuất hiện trên báo sinh viên The Barnacle (Nguồn: The Orange County)',
            caption_ja: '1957年秋、カリフォルニア州コスタメサにあるオレンジ・コースト・カレッジのキャンパス。',
            modalImgLabel: 'Báo sinh viên The Barnacle',
            modalImgLabel_ja: '学生新聞 The Barnacle',

            // ── VĂN BẢN CHI TIẾT (TÁCH RIÊNG TỪNG FIELD ĐOẠN VĂN) ──
            title: 'Xuất hiện trên báo sinh viên The Barnacle',
            title_ja: '渡米とカリフォルニア留学の始まり',
            date: 'Tháng 10/1957',
            date_ja: '1957年10月',

            text1: 'Ngay trước Lễ Tạ ơn năm 1957, tờ báo của trường, The Barnacle, đã đăng bài giới thiệu việc Phạm Xuân Ẩn nhập học, kèm tấm ảnh ông ngồi bên cuốn từ điển tiếng Anh với chú thích: “Bạn nói điều đó như thế nào trong tiếng Anh?”. Đây là bài báo đầu tiên giới thiệu ông công khai với tư cách một sinh viên báo chí người Việt, và trở thành bước đầu của vỏ bọc tình báo mà ông duy trì về sau.',
            text1_ja: 'アンは現地の学術・学生社会に素早く溶け込み、米国の近代的ジャーナリズムの原則（客観性、情報源への鋭敏さ、取材手法、大手通信社の仕組み）を精力的に学びました。',
            note: '',
            note_ja: '',
            src_ja: '出典: トーマス・バス; メレマ（ネブラスカ大学）'
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
