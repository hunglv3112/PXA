/**
 * ==============================================================================
 * DỮ LIỆU MỞ RỘNG — NĂM 1969 (data/1969/data_1969.js)
 * ==============================================================================
 * Quản lý toàn bộ dữ liệu năm 1969 cho cả 2 nửa trên Timeline:
 *   1. top: Nhánh TÌNH BÁO (id: '1969t') — 1 sự kiện (layout 1 cột)
 *   2. bot: Nhánh NHÀ BÁO  (id: '1969b') — 1 sự kiện (layout 1 cột, có midImg)
 * ==============================================================================
 */

window.EXTRA_DATA_1969 = {

    // ==========================================================================
    // 1. NHÁNH TÌNH BÁO — NỬA TRÊN (id: '1969t') — 1 SỰ KIỆN (LAYOUT 1 CỘT)
    // ==========================================================================
    top: [
        {
            id: '1969t',
            modalImg: 'assets/images/1964_1970/1969_MidWay.jpg',
            modalImgAlt: 'Tổng thống Việt Nam Cộng hòa Nguyễn Văn Thiệu (bên trái) và Tổng thống Mỹ Nixon (bên phải) trong cuộc gặp trên đảo Midway ngày 8/6/1969 (Nguồn: Báo Dân Việt)',
            modalImgAlt_ja: '1969年6月8日、ミッドウェー島での会談中のベトナム共和国のグエン・ヴァン・ティエウ大統領（左）とアメリカのニクソン大統領（右）（出典：Dan Viet紙）',
            caption: 'Tổng thống Việt Nam Cộng hòa Nguyễn Văn Thiệu (bên trái) và Tổng thống Mỹ Nixon (bên phải) trong cuộc gặp trên đảo Midway ngày 8/6/1969 (Nguồn: Báo Dân Việt)',
            caption_ja: '1969年6月8日、ミッドウェー島での会談中のベトナム共和国のグエン・ヴァン・ティエウ大統領（左）とアメリカのニクソン大統領（右）（出典：Dan Viet紙）',

            title: 'Xác thực việc Mỹ chuyển sang sử dụng kế hoạch "Việt Nam hóa chiến tranh"',
            title_ja: 'アメリカの「戦争のベトナム化」計画への転換の確認',
            date: 'Tháng 6/1969',
            date_ja: '1969年6月',

            text1: 'Khi Tổng thống Mỹ Richard Nixon chính thức phê chuẩn Kế hoạch "Việt Nam hóa chiến tranh", Phạm Xuân Ẩn đã lấy được bản dự thảo kế hoạch này, tiến hành kiểm chứng công phu và gửi về Hà Nội trước khi Nixon gặp Nguyễn Văn Thiệu ở đảo Midway (tháng 6/1969) để thuyết minh đợt rút 25.000 quân Mỹ đầu tiên.',
            text1_ja: 'アメリカのリチャード・ニクソン大統領が「戦争のベトナム化」計画を正式に承認した際、ファム・スアン・アンはこの計画の草案を入手して念入りに検証し、ニクソンがミッドウェー島（1969年6月）でグエン・ヴァン・ティエウと会談してアメリカ軍2万5千人の最初の撤退について説明する前に、ハノイへ送った。',

            text2: 'Thông tin này đã giúp phía cách mạng chủ động nắm trước bước chuyển chiến lược của Mỹ từ "Chiến tranh cục bộ" sang "Việt Nam hóa chiến tranh", từ đó hình thành kế hoạch đối phó với Mỹ.',
            text2_ja: 'この情報により、革命側はアメリカが「局地戦争」から「戦争のベトナム化」へと戦略を転換することを主体的に前もって把握し、そこからアメリカへの対抗策を練ることができた。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ],

    // ==========================================================================
    // 2. NHÁNH NHÀ BÁO — NỬA DƯỚI (id: '1969b') — MẢNG CÓ 1 OBJECT (LAYOUT 1 CỘT, CÓ MIDIMG)
    // ==========================================================================
    bot: [
        {
            id: '1969b',
            modalImg: 'assets/images/1964_1970/1969_NgoiTrongVanPhongBaoTime.jpg',
            modalImgAlt: 'Phạm Xuân Ẩn ngồi trong văn phòng tạp chí Time (Nguồn: Nhà tưởng niệm nhà tình báo Phạm Xuân Ẩn)',
            modalImgAlt_ja: '『タイム』誌の支局にいるファム・スアン・アン（出典：諜報員ファム・スアン・アン記念館）',
            caption: 'Phạm Xuân Ẩn ngồi trong văn phòng tạp chí Time (Nguồn: Nhà tưởng niệm nhà tình báo Phạm Xuân Ẩn)',
            caption_ja: '『タイム』誌の支局にいるファム・スアン・アン（出典：諜報員ファム・スアン・アン記念館）',

            title: 'Người Việt đầu tiên trở thành nhà báo của Time',
            title_ja: '『タイム』誌の記者となった最初のベトナム人',
            date: 'Năm 1969',
            date_ja: '1969年',

            text1: 'Đầu năm 1969, Phạm Xuân Ẩn chính thức làm việc cho tạp chí Time của Mỹ tại Sài Gòn với mức lương 750 USD/tháng là người Việt đầu tiên được Time cho lên chức vụ này.',
            text1_ja: '1969年初め、ファム・スアン・アンは月給750ドルでアメリカの『タイム』誌のサイゴン支局で正式に勤務し始め、『タイム』誌でこのポストに就いた最初のベトナム人となった。',

            // ── ẢNH BÌA BÁO TIME THÁNG 9/1969 ──
            midImg: {
                src: 'assets/images/1964_1970/1969_HCM.jpg',
                alt: 'Bìa tạp chí Time số tháng 9 năm 1969 in hình Chủ tịch Hồ Chí Minh (Nguồn: Tạp chí Time)',
                alt_ja: 'ホー・チ・ミン主席の姿を表紙にした『タイム』誌1969年9月号（出典：『タイム』誌）',
                caption: 'Bìa tạp chí Time số tháng 9 năm 1969 in hình Chủ tịch Hồ Chí Minh (Nguồn: Tạp chí Time)',
                caption_ja: 'ホー・チ・ミン主席の姿を表紙にした『タイム』誌1969年9月号（出典：『タイム』誌）'
            },

            text2: 'Tháng 9 cùng năm, khi Chủ tịch Hồ Chí Minh qua đời, ông đã đúc kết được 4, 5 trang giấy và phân tích khách quan để nói về Chủ tịch Hồ Chí Minh. Và bài phân tích của ông đã được Time tổng hợp cùng nhiều bài phân tích khác để in ra cho độc giả.',
            text2_ja: '同年9月、ホー・チ・ミン主席が死去した際、アンはホー・チ・ミン主席について4～5ページの原稿に簡潔にまとめ、客観的に分析した。アンの分析記事は、他の多くの分析記事とともに『タイム』誌によってまとめられ、読者に向けて掲載された。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ]
};

// ==============================================================================
// TỰ ĐỘNG HÒA TRỘN DỮ LIỆU NĂM 1969 VÀO window.TIMELINE_DATA
// ==============================================================================
(function mergeExtraData1969() {
    function applyBranch(branchKey, defaultId) {
        if (!window.TIMELINE_DATA || !window.EXTRA_DATA_1969) return;
        const branchData = window.EXTRA_DATA_1969[branchKey];
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

        if (savedTitle !== undefined) ev.title = savedTitle;
        if (savedTitleJa !== undefined) ev.title_ja = savedTitleJa;
        if (savedCardImg !== undefined) ev.cardImg = savedCardImg;
        if (savedImg !== undefined) ev.img = savedImg;
    }

    function doMerge() {
        applyBranch('top', '1969t');
        applyBranch('bot', '1969b');
    }

    if (window.TIMELINE_DATA) {
        doMerge();
    } else {
        document.addEventListener('DOMContentLoaded', doMerge);
    }
})();
