/**
 * ==============================================================================
 * DỮ LIỆU MỞ RỘNG — NĂM 1958 (data/1958/data_1958.js)
 * ==============================================================================
 * Quản lý toàn bộ dữ liệu năm 1958 cho cả 2 nửa trên Timeline:
 *   1. top: Nhánh TÌNH BÁO (id: '1958t') — Nửa trên (Dạng MẢNG các object)
 *   2. bot: Nhánh NHÀ BÁO  (id: '1958b') — Nửa dưới (Dạng MẢNG các object)
 *
 * QUY TẮC HIỂN THỊ MODAL:
 *   - Nếu mảng có ĐÚNG 1 OBJECT: Modal hiển thị dạng 1 cột liền mạch
 *     (ảnh hero ở trên -> text nội dung ở dưới, không chia 2 bên trái phải).
 *   - Nếu mảng có > 1 OBJECT: Modal chia 2 bên trái - phải (giống năm 1975).
 * ==============================================================================
 */

window.EXTRA_DATA_1958 = {

    // ==========================================================================
    // 1. NHÁNH TÌNH BÁO — NỬA TRÊN (id: '1958t') — MẢNG CÓ 1 OBJECT
    // ==========================================================================
    top: [
        {
            id: '1958t',
            // ── ẢNH TRONG POPUP CHI TIẾT (HERO BANNER KÈM CHÚ THÍCH) ──
            modalImg: 'assets/images/1957_1959/1958_Ngoai_MuoiHuongChupCungPXAVaNhieuNhaTinhBao.jpg',
            modalImgAlt: 'Mười Hương (hàng đầu, thứ ba từ bên trái sang) cùng các nhà tình báo Phạm Xuân Ẩn (hàng thứ hai, thứ ba từ bên trái sang), Vũ Ngọc Nhạ, Lê Hữu Thúy, Nguyễn Đức Trí... (Tuổi Trẻ)',
            modalImgAlt_ja: 'カリフォルニアのオレンジ・コースト・カレッジでジャーナリズムを学ぶファム・スアン・アン',
            caption: 'Mười Hương (hàng đầu, thứ ba từ bên trái sang) cùng các nhà tình báo Phạm Xuân Ẩn (hàng thứ hai, thứ ba từ bên trái sang), Vũ Ngọc Nhạ, Lê Hữu Thúy, Nguyễn Đức Trí... (Tuổi Trẻ)',
            title: 'Mất liên lạc với tổ chức sau khi Mười Hương bị bắt ',
            title_ja: '記者という偽装の選択',
            date: 'Năm 1958',
            date_ja: '1958年',

            text1: 'Đầu năm 1958, Phạm Xuân Ẩn nhận được một bức thư từ em trai là Phạm Xuân Đính, báo tin rằng ông Mười Hương cùng nhiều cán bộ tình báo chủ chốt đã bị chính quyền Ngô Đình Diệm bắt giữ.',
            text2: 'Sự việc này khiến đường dây liên lạc giữa ông và tổ chức bị cắt đứt hoàn toàn. Các lãnh đạo ở Hà Nội lo ngại không biết Ẩn có chịu trở về Việt Nam hay không khi ông nhận được tin tức này.',
            text3: 'Về phía mình, Ẩn lo rằng Mỹ sẽ phát hiện ra thân phận tình báo của ông. Vì vậy, ông đã học thêm tiếng Tây Ban Nha để dự phòng một lối thoát sang Cuba, từ đó tìm đường trở về nước tiếp tục chiến đấu.',

            text1_ja: '米国の対ベトナム介入の本格化を見据え、情報部門の最高幹部ムオイ・フオンとマイ・チー・トーは、ファム・スアン・アンを米国へ留学させる戦略的計画を立案しました。米国�',
            text2_ja: '米国の対ベトナム介入の本格化を見据え、情報部門の最高幹部ムオイ・フオンとマイ・チー・トーは、ファム・スアン・アンを米国へ留学させる戦略的計画を立案しました。米国�',
            text3_ja: '米国の対ベトナム介入の本格化を見据え、情報部門の最高幹部ムオイ・フオンとマイ・チー・トーは、ファム・スアン・アンを米国へ留学させる戦略的計画を立案しました。米国�',

            note: '',
            note_ja: '',
            src: '',
            src_ja: '',

            // ── VĂN BẢN CHI TIẾT (TÁCH RIÊNG TỪNG FIELD ĐOẠN VĂN) ──

            note: '',
            note_ja: '',
            src: 'Nguồn: Thomas Bass, The New Yorker (2005); Mellema (Đại học Nebraska–Lincoln)',
            src_ja: '出典: トーマス・バス; メレマ（ネブラスカ大学）'
        }
    ],
    bot: [
        {
            id: '1958b',
            // ── ẢNH TRONG POPUP CHI TIẾT (HERO BANNER KÈM CHÚ THÍCH) ──
            modalImg: 'assets/images/1957_1959/1958_PXAHocMonBaoChiTaiMy.jpg',
            modalImgAlt: 'Phạm Xuân Ẩn học môn báo chí tại trường OCC năm 1958 (Dân Trí)',
            modalImgAlt_ja: '1957年当時のオレンジ・コースト・カレッジ（カリフォルニア州コスタメサ）',

            // ── VĂN BẢN CHI TIẾT (TÁCH RIÊNG TỪNG FIELD ĐOẠN VĂN) ──
            title: 'Thành tích báo chí tại OCC',
            title_ja: '渡米とカリフォルニア留学の始まり',
            date: 'Tháng 10/1958',
            date_ja: '1958年10月',

            text1: 'Năm 1958 cũng là giai đoạn Phạm Xuân Ẩn tích lũy những kinh nghiệm đầu tiên cho nghề báo của ông sau này.',
            text2: 'Ông có những bài báo như “Thi tốt nghiệp - Vài điều về nỗi cực nhọc thi cử của sinh viên ở miền đất xa xôi”, đối chiếu không khí thi cử căng thẳng của học sinh Sài Gòn (mùa hoa phượng, uống trà đậm, cà phê để thức khuya) với không khí nhẹ nhàng tại OCC.',
            text3: 'Dưới sự dẫn dắt của chủ bút Lee Meyer và những đóng góp của Phạm Xuân Ẩn, tờ Barnacle được Hiệp hội Báo chí Học đường xếp hạng Nhất.',
            text4: 'Ông cũng được chọn là một trong 9 sinh viên dự Hội thảo các vấn đề thế giới tại Los Angeles, là đại biểu tại Diễn đàn Khu vực Long Beach, tham dự Hội nghị Báo chí tại Đại học Redlands và cùng đoàn đại biểu Barnacle dự Hội các Nhà xuất bản Quốc gia tiểu bang California tại San Francisco.',

            text1_ja: '1958年10月、ファム・スアン・アンは米国カリフォルニア州に到着し、コスタメサにあるオレンジ・コースト・カレッジ（OCC）でジャーナリズムの勉学を開始しました。',
            text2_ja: '1958年10月、ファム・スアン・アンは米国カリフォルニア州に到着し、コスタメサにあるオレンジ・コースト・カレッジ（OCC）でジャーナリズムの勉学を開始しました。',
            text3_ja: '1958年10月、ファム・スアン・アンは米国カリフォルニア州に到着し、コスタメサにあるオレンジ・コースト・カレッジ（OCC）でジャーナリズムの勉学を開始しました。',
            text4_ja: '1958年10月、ファム・スアン・アンは米国カリフォルニア州に到着し、コスタメサにあるオレンジ・コースト・カレッジ（OCC）でジャーナリズムの勉学を開始しました。',
            note: '',
            note_ja: '',
            src: 'Nguồn: Thomas Bass, The New Yorker (2005); Mellema (Đại học Nebraska–Lincoln)',
            src_ja: '出典: トーマス・バス; メレマ（ネブラスカ大学）'
        }
    ]
};

// ==============================================================================
// TỰ ĐỘNG HÒA TRỘN DỮ LIỆU NĂM 1958 VÀO window.TIMELINE_DATA
// Quy tắc: timeline-data.js quyết định ảnh đại diện ngoài thẻ (cardImg / img)
// data_1958.js chỉ mở rộng nội dung chi tiết cho popup modal
// ==============================================================================
(function mergeExtraData1958() {
    function applyBranch(branchKey, defaultId) {
        if (!window.TIMELINE_DATA || !window.EXTRA_DATA_1958) return;
        const branchData = window.EXTRA_DATA_1958[branchKey];
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
        applyBranch('top', '1958t');
        applyBranch('bot', '1958b');
    }

    if (window.TIMELINE_DATA) {
        doMerge();
    } else {
        document.addEventListener('DOMContentLoaded', doMerge);
    }
})();
