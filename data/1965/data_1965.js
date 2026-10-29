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
            modalImgAlt: 'Lính Mỹ đổ bộ xuống Ia Đrăng trong Chiến dịch Plei Me năm 1965 (Nguồn: QDNDVN)',
            modalImgAlt_ja: '1965年プレイメ作戦でイードラン渓谷に降下する米兵（ベトナム人民軍新聞）',
            caption: 'Lính Mỹ đổ bộ xuống Ia Đrăng trong Chiến dịch Plei Me năm 1965 (Nguồn: QDNDVN)',
            caption_ja: '1965年プレイメ作戦でイードラン渓谷に降下する米兵（ベトナム人民軍新聞）',

            title: 'Gửi Kế hoạch trận Ia Đrăng',
            title_ja: 'イードラン渓谷の戦闘作戦計画を送達',
            date: 'Tháng 11/1965',
            date_ja: '1965年11月',

            text1: 'Trong đợt Mỹ đưa Sư đoàn 1 Kỵ binh (*) lên Tây Nguyên mở cuộc càn quét lớn, Phạm Xuân Ẩn đã hiểu rõ và gửi về căn cứ nguyên bản Kế hoạch tác chiến cùng các thông tin tình báo chiến thuật cho trận Ia Đrăng (*) diễn ra vào tháng 11/1965.',
            text1_ja: '米軍が第1騎兵師団（*）を中部高原（タイグエン）に投入して大規模な掃討作戦を展開する中、ファム・スアン・アンは作戦の全容を的確に把握し、1965年11月のイードランの戦い（*）に関する作戦計画原本と戦術機密情報を基地へ急送しました。',

            text2: 'Tin tức mật này giúp Quân Giải phóng chủ động thế trận, đánh thắng trận giao tranh quy mô lớn đầu tiên trực tiếp với quân chính quy Mỹ, giáng một đòn nặng nề vào chiến thuật "tìm diệt" của đối phương.',
            text2_ja: 'この極秘情報は解放軍が事前に主導権を握る決定打となり、米正規軍との初の大規模直接交戦に勝利。米軍の「索敵撃滅（サーチ＆デストロイ）」戦術に甚大な打撃を与えました。',

            // ── FOOTNOTES ──
            footnote: '(*) Sư đoàn 1 Kỵ binh: Là sư đoàn đầu tiên của Mỹ tại Việt Nam, với lực lượng chủ yếu là trực thăng.<br><br>(*) Trận Ia Đrăng: Được coi là trận "đầu đánh Mỹ" của quân Giải phóng, qua đó chứng minh được quân Giải phóng hoàn toàn có khả năng đánh và thắng quân đội hiện đại bậc nhất của Mỹ trong chiến tranh trực thăng vận.',
            footnote_ja: '(*) 第1騎兵師団（空中機動）：ベトナムに初投入された米軍師団で、多数のヘリコプター機動力を主力とする。<br><br>(*) イードランの戦い：解放軍による対米軍の「初戦撃破」と位置づけられ、ヘリコプター空中機動を用いる米最新鋭部隊に対しても完全に互角以上に戦い勝利できることを実証した歴史的戦闘。',

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
            modalImgAlt: 'Ảnh thẻ nhà báo do MACV cấp cho Phạm Xuân Ẩn (Nguồn: Điệp viên hoàn hảo - Trang 190)',
            modalImgAlt_ja: 'MACVがファム・スアン・アンに発給した記者証（『完全なスパイ』190頁）',
            caption: 'Ảnh thẻ nhà báo do MACV cấp cho Phạm Xuân Ẩn (Nguồn: Điệp viên hoàn hảo - Trang 190)',
            caption_ja: 'MACVがファム・スアン・アンに発給した記者証（『完全なスパイ』190頁）',

            title: 'Được Bộ Chỉ huy MACV cấp Thẻ nhà báo chiến trường chính thức',
            title_ja: 'MACV司令部より公式従軍記者証を受給',
            date: 'Ngày 11/06/1965',
            date_ja: '1965年6月11日',

            text1: 'Ngày 11/06/1965, MACV đã cấp Thẻ nhà báo chính thức cho Phạm Xuân Ẩn dưới danh nghĩa phóng viên đại diện cho báo The New York Herald Tribune. Đây chính là chìa khóa giúp ông Ẩn có thể tham gia các buổi giao ban chiến sự hằng ngày, và tự do đi lại khắp chiến sự với các phương tiện của Mỹ mà không bị nghi ngờ.',
            text1_ja: '1965年6月11日、MACVはニューヨーク・ヘラルド・トリビューン特派員の身分を持つファム・スアン・アンに対し、正式な従軍記者証を発給しました。これによりアンは毎日の軍事定例ブリーフィングに出席可能となり、米軍の航空機や車両を使って最前線を何らの疑念も持たれずに自由に行き来する特権を手にしました。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        },
        {
            id: '1965b',
            modalImg: 'assets/images/1964_1970/1965_NB_FM.jpg',
            modalImgAlt: 'Frank Mculloch - Trưởng đại diện văn phòng Time tại Sài Gòn (Nguồn: AltaOnline)',
            modalImgAlt_ja: 'タイム誌サイゴン支局長フランク・マカロック（AltaOnline）',
            caption: 'Frank Mculloch - Trưởng đại diện văn phòng Time tại Sài Gòn (Nguồn: AltaOnline)',
            caption_ja: 'タイム誌サイゴン支局長フランク・マカロック（AltaOnline）',

            title: 'Gia nhập biên chế phóng viên thường trú bản địa của báo Times',
            title_ja: 'タイム誌の正規現地特派員として採用契約',
            date: 'Tháng 8/1965',
            date_ja: '1965年8月',

            text1: 'Tháng 8/1965, trưởng đại diện văn phòng Time tại Sài Gòn là Frank McCulloch chính thức ký hợp đồng tuyển dụng Phạm Xuân Ẩn làm phóng viên thường trú với mức lương 75 USD/tuần.',
            text1_ja: '1965年8月、タイム誌サイゴン支局長のフランク・マカロックは、ファム・スアン・アンを週給75ドルの正規常駐記者（ストリンガー／現地特派員）として正式に採用する契約を結びました。',

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
