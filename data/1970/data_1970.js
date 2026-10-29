/**
 * ==============================================================================
 * DỮ LIỆU MỞ RỘNG — NĂM 1970 (data/1970/data_1970.js)
 * ==============================================================================
 * Quản lý dữ liệu chi tiết năm 1970:
 *   - Nhánh TÌNH BÁO (id: '1970t'): 1 sự kiện duy nhất (dạng mảng 1 object -> Modal 1 cột)
 *   - Nhánh NHÀ BÁO: Năm 1970 không có nhánh nhà báo (đã loại bỏ khỏi timeline)
 * ==============================================================================
 */

window.EXTRA_DATA_1970 = {

    // ==========================================================================
    // 1. NHÁNH TÌNH BÁO — NỬA TRÊN (id: '1970t') — 1 SỰ KIỆN (LAYOUT 1 CỘT)
    // ==========================================================================
    top: [
        {
            id: '1970t',
            modalImg: 'assets/images/1964_1970/1970_Campuchia.jpg',
            modalImgAlt: 'Chiến dịch Campuchia (Nguồn: Getty Images)',
            modalImgAlt_ja: 'カンボジア作戦（Getty Images）',
            caption: 'Chiến dịch Campuchia (Nguồn: Getty Images)',
            caption_ja: 'カンボジア作戦（Getty Images）',

            title: 'Cảnh báo sớm cuộc tiến quân xâm lược Campuchia của Mỹ – Việt Nam Cộng hòa',
            title_ja: '米・南ベトナム軍によるカンボジア侵攻計画の早期警戒通報',
            date: 'Tháng 4/1970',
            date_ja: '1970年4月',

            text1: 'Tháng 4/1970, Mỹ và chính quyền Sài Gòn mở cuộc tấn công quy mô lớn xâm lược Campuchia nhằm càn quét, tiêu diệt các cơ quan đầu não kháng chiến. Phạm Xuân Ẩn đã thu thập thông tin tình báo và gửi báo cáo cảnh báo sớm về toàn bộ kế hoạch tấn công này cho quân Giải phóng.',
            text1_ja: '1970年4月、米国およびサイゴン政権はカンボジアへの大規模侵攻作戦を開始し、革命指導中枢の掃討・壊滅を企図しました。ファム・スアン・アンはこの進攻計画の全容を事前に察知・収集し、解放軍へ早期警戒報告を急送しました。',

            text2: 'Báo cáo cảnh báo sớm khẩn cấp của ông đã giúp Trung ương Cục miền Nam và các cơ quan đầu não của quân Giải phóng kịp thời chủ động rút lui an toàn về phía Tây, bảo toàn 100% lực lượng và bộ máy chỉ đạo.',
            text2_ja: '彼の緊急警戒報告により、南ベトナム中央基地および解放軍指導機関は速やかに西方へ安全に後退・避難することができ、指導幹部と主力部隊を100%無傷で温存することに成功しました。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ],

    // Năm 1970 không có nhánh nhà báo
    bot: []
};

// ==============================================================================
// TỰ ĐỘNG HÒA TRỘN DỮ LIỆU NĂM 1970 VÀO window.TIMELINE_DATA
// ==============================================================================
(function mergeExtraData1970() {
    function applyBranch(branchKey, defaultId) {
        if (!window.TIMELINE_DATA || !window.EXTRA_DATA_1970) return;
        const branchData = window.EXTRA_DATA_1970[branchKey];
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
        applyBranch('top', '1970t');
    }

    if (window.TIMELINE_DATA) {
        doMerge();
    } else {
        document.addEventListener('DOMContentLoaded', doMerge);
    }
})();
