/**
 * ==============================================================================
 * DỮ LIỆU MỞ RỘNG — NĂM 1965 (data/1965/data_1965.js)
 * ==============================================================================
 * Quản lý toàn bộ dữ liệu năm 1965 cho cả 2 nửa trên Timeline:
 *   1. top: Nhánh TÌNH BÁO (id: '1965t') — 1 sự kiện (layout 1 cột, có footnotes)
 *   2. bot: Nhánh NHÀ BÁO  (id: '1965b') — 2 sự kiện (layout chia 2)
 * ==============================================================================
 */

window.EXTRA_DATA_1965 = {

    // ==========================================================================
    // 1. NHÁNH TÌNH BÁO — NỬA TRÊN (id: '1965t') — 1 SỰ KIỆN (LAYOUT 1 CỘT)
    // ==========================================================================
    top: [
        {
            id: '1965t',
            modalImg: 'assets/images/1964_1970/1965_TB_LinhMyDoBo.jpg',
            modalImgAlt: 'Lính Mỹ đổ bộ xuống Ia Đrăng trong Chiến dịch Plei Me năm 1965 (Nguồn: Báo Quân đội nhân dân)',
            modalImgAlt_ja: '1965年、プレーメ作戦でイードランに降り立つアメリカ兵（出典：Quan doi nhan dan紙）',
            caption: 'Lính Mỹ đổ bộ xuống Ia Đrăng trong Chiến dịch Plei Me năm 1965 (Nguồn: Báo Quân đội nhân dân)',
            caption_ja: '1965年、プレーメ作戦でイードランに降り立つアメリカ兵（出典：Quan doi nhan dan紙）',

            title: 'Gửi Kế hoạch trận Ia Đrăng',
            title_ja: 'イードランの戦いに関する作戦計画の送付',
            date: 'Tháng 11/1965',
            date_ja: '1965年11月',

            text1: 'Trong đợt Mỹ đưa Sư đoàn 1 Kỵ binh⁽¹⁾ lên Tây Nguyên mở cuộc càn quét lớn, Phạm Xuân Ẩn đã hiểu rõ và gửi về căn cứ nguyên bản Kế hoạch tác chiến cùng các thông tin tình báo chiến thuật cho trận Ia Đrăng⁽²⁾ diễn ra vào tháng 11/1965.',
            text1_ja: 'アメリカが第1騎兵師団⁽¹⁾を中部高原に投入して大規模な掃討作戦を展開した際、ファム・スアン・アンは、1965年11月に行われたイアドランの戦い⁽²⁾に関する作戦計画の原版および戦術情報を把握し、根拠地へ送った。',

            text2: 'Tin tức mật này giúp quân Giải phóng chủ động thế trận, đánh thắng trận giao tranh quy mô lớn đầu tiên trực tiếp với quân chính quy Mỹ, giáng một đòn nặng nề vào chiến thuật "tìm diệt" của đối phương.',
            text2_ja: 'この機密情報により、解放軍は主体的に戦いを展開し、アメリカの正規軍との初めての大規模な直接交戦に勝利して、敵方の「索敵撃滅」戦術に大きな打撃を与えた。',

            // ── FOOTNOTES ──
            footnote: '1. Sư đoàn 1 Kỵ binh: Là một trong hai sư đoàn đầu tiên của Mỹ tại Việt Nam, với lực lượng chủ yếu là trực thăng.<br><br>2. Trận Ia Đrăng: Được coi là trận đánh lớn đầu tiên giữa quân Giải phóng và quân Mỹ.',
            footnote_ja: '1. 第1騎兵師団：ベトナムに展開した最初の二つのアメリカ軍師団の一つで、ヘリコプターを主力とする。<br><br>2. イアドランの戦い：解放軍とアメリカ軍の間で行われた最初の大規模な戦いとされる。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ],

    // ==========================================================================
    // 2. NHÁNH NHÀ BÁO — NỬA DƯỚI (id: '1965b') — MẢNG CÓ 2 OBJECT (CHIA 2)
    // ==========================================================================
    bot: [
        {
            id: '1965b',
            modalImg: 'assets/images/1964_1970/1965_NB_MACV.jpg',
            modalImgAlt: 'Thẻ nhà báo do MACV cấp cho Phạm Xuân Ẩn (Nguồn: Báo Thanh Niên)',
            modalImgAlt_ja: 'MACVがファム・スアン・アンに発給した記者証（出典：Thanh Nien紙）',
            caption: 'Thẻ nhà báo do MACV cấp cho Phạm Xuân Ẩn (Nguồn: Báo Thanh Niên)',
            caption_ja: 'MACVがファム・スアン・アンに発給した記者証（出典：Thanh Nien紙）',

            title: 'Được Bộ Chỉ huy MACV cấp Thẻ nhà báo chiến trường chính thức',
            title_ja: 'MACVによる正式な従軍記者証の発給',
            date: 'Ngày 11/06/1965',
            date_ja: '1965年6月11日',

            text1: 'Ngày 11/06/1965, MACV đã cấp Thẻ nhà báo chính thức cho Phạm Xuân Ẩn dưới danh nghĩa phóng viên đại diện cho báo The New York Herald Tribune. Đây chính là chìa khóa giúp ông Ẩn có thể tham gia các buổi giao ban chiến sự hằng ngày, và tự do đi lại khắp chiến sự với các phương tiện của Mỹ mà không bị nghi ngờ.',
            text1_ja: '1965年6月11日、MACVは『ニューヨーク・ヘラルド・トリビューン』紙の特派員の名義で、ファム・スアン・アンに正式な記者証を発給した。これこそが、アンが毎日の戦況ブリーフィングに参加し、疑われることなくアメリカの輸送手段で各地の戦場を自由に移動することを可能にした鍵であった。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        },
        {
            id: '1965b',
            modalImg: 'assets/images/1964_1970/1965_NB_FM.jpg',
            modalImgAlt: 'Frank McCulloch - Trưởng đại diện văn phòng Time tại Sài Gòn (Nguồn: AltaOnline)',
            modalImgAlt_ja: '『タイム』誌サイゴン支局長のフランク・マッカロック（出典：AltaOnline）',
            caption: 'Frank McCulloch - Trưởng đại diện văn phòng Time tại Sài Gòn (Nguồn: AltaOnline)',
            caption_ja: '『タイム』誌サイゴン支局長のフランク・マッカロック（出典：AltaOnline）',

            title: 'Gia nhập biên chế phóng viên thường trú bản địa của tạp chí Time',
            title_ja: '『タイム』誌サイゴン支局の現地記者としての正式雇用',
            date: 'Tháng 8/1965',
            date_ja: '1965年8月',

            text1: 'Tháng 8/1965, trưởng đại diện văn phòng Time tại Sài Gòn là Frank McCulloch chính thức ký hợp đồng tuyển dụng Phạm Xuân Ẩn làm phóng viên thường trú với mức lương 75 USD/tuần.',
            text1_ja: '1965年8月、『タイム』誌サイゴン支局長のフランク・マッカロックは、週75ドルの給与でファム・スアン・アンを支局記者として雇用する契約を正式に結んだ。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ]
};

// ==============================================================================
// TỰ ĐỘNG HÒA TRỘN DỮ LIỆU NĂM 1965 VÀO window.TIMELINE_DATA
// ==============================================================================
(function mergeExtraData1965() {
    function applyBranch(branchKey, defaultId) {
        if (!window.TIMELINE_DATA || !window.EXTRA_DATA_1965) return;
        const branchData = window.EXTRA_DATA_1965[branchKey];
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
        applyBranch('top', '1965t');
        applyBranch('bot', '1965b');
    }

    if (window.TIMELINE_DATA) {
        doMerge();
    } else {
        document.addEventListener('DOMContentLoaded', doMerge);
    }
})();
