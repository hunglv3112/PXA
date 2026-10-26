/**
 * ==============================================================================
 * DỮ LIỆU MỞ RỘNG — NĂM 1975 (data/1975/data_1975.js)
 * ==============================================================================
 * Quản lý toàn bộ dữ liệu chi tiết năm 1975 cho 2 nhánh:
 *   1. top: Nhánh TÌNH BÁO (id: '1975t') — 1 sự kiện (layout 1 cột liền mạch)
 *   2. bot: Nhánh NHÀ BÁO  (id: '1975b') — 1 sự kiện (layout 1 cột liền mạch)
 * ==============================================================================
 */

window.EXTRA_DATA_1975 = {

    // ==========================================================================
    // 1. NHÁNH TÌNH BÁO — NỬA TRÊN (id: '1975t') — MẢNG CÓ 1 OBJECT (LAYOUT 1 CỘT)
    // ==========================================================================
    top: [
        {
            id: '1975t',
            modalImg: 'assets/images/1974_1976/1975_TB_N_DanhTayNguyen.jpg',
            modalImgAlt: 'Quân Giải phóng trong Chiến dịch Tây Nguyên - Mở đầu cho cuộc Tổng tiến công mùa Xuân năm 1975. (Nguồn: QDNDVN)',
            modalImgAlt_ja: '中部高原作戦でバンメトート空港を制圧する解放軍 — 1975年春季総攻勢の幕開け（ベトナム人民軍新聞）',
            caption: 'Quân Giải phóng trong Chiến dịch Tây Nguyên - Mở đầu cho cuộc Tổng tiến công mùa Xuân năm 1975. (Nguồn: QDNDVN)',
            caption_ja: '中部高原作戦でバンメトート空港を制圧する解放軍 — 1975年春季総攻勢の幕開け（ベトナム人民軍新聞）',
            title: 'Chiến dịch Tây Nguyên mở màn cho tháng Tư lịch sử',
            title_ja: '歴史的4月への幕開けとなった中部高原作戦',
            date: 'Tháng 3 – 4/1975',
            date_ja: '1975年3月～4月',

            text1: 'Cuối năm 1974, Thiệu họp kín tại Dinh Độc Lập, chủ quan cho rằng quân Giải phóng tổn thất nặng sau 1968 và 1972, chỉ đánh nổi các thị xã nhỏ, nên không tăng cường phòng thủ Tây Nguyên.',
            text1_ja: '1974年末、ティウ大統領は独立宮殿で秘密会議を開き、解放軍は1968年や1972年の大損害から小規模な町しか攻撃できないと主観的に判断し、中部高原の防衛を強化しませんでした。',

            text2: 'Phạm Xuân Ẩn đã nắm được thông tin từ cuộc họp này và báo cáo về. Tin này giúp quân Giải Phóng quyết mở Chiến dịch Tây Nguyên vào tháng 3/1975, lấy Buôn Ma Thuột làm đòn mở màn Tổng tiến công Mùa Xuân 1975.',
            text2_ja: 'ファム・スアン・アンはこの会議の情報を的確に把握して本国へ報告。この情報が決め手となり、解放軍は1975年3月に中部高原作戦を開始し、バンメトートを春季総攻勢の口火と決定しました。',

            text3: 'Đòn tiến công vào Buôn Mê Thuột của quân Giải phóng khiến chính quyền VNCH rơi vào thế choáng váng, mở đầu cho cuộc rút quân hỗn loạn khỏi Tây Nguyên. Sự thất bại của cuộc rút lui này khiến quân đội VNCH nhanh chóng suy yếu và tan rã, góp phần dẫn đến sự sụp đổ của chính quyền VNCH vào tháng 4/1975.',
            text3_ja: 'バンメトートへの電撃打撃はサイゴン政権を大混乱に陥れ、中部高原からの潰走を引き起こしました。この撤退の大失敗により南ベトナム軍は急速に瓦解し、1975年4月の政権崩壊へと直結しました。',

            // ── ẢNH CHÈN SAU text3 ──
            midImg3: {
                src: 'assets/images/1974_1976/1975_BoChay.jpg',
                alt: 'Chiến dịch Tây Nguyên làm sụp đổ phòng tuyến phòng thủ của QLVNCH - Quân VNCH rút chạy sau khi để thua trận (Nguồn: TTXVN)',
                alt_ja: '中部高原作戦で崩壊した防衛線 — 敗戦後に潰走する南ベトナム軍（ベトナム通信社）',
                caption: 'Chiến dịch Tây Nguyên làm sụp đổ phòng tuyến phòng thủ của QLVNCH - Quân VNCH rút chạy sau khi để thua trận (Nguồn: TTXVN)',
                caption_ja: '中部高原作戦で崩壊した防衛線 — 敗戦後に潰走する南ベトナム軍（ベトナム通信社）'
            },

            text4: 'Sau đó quân Giải Phóng liên tiếp mở các chiến dịch Huế - Đà Nẵng, chiến dịch Hồ Chí Minh, siết vòng vây quanh thủ đô của chính quyền Việt Nam Cộng hòa. Ngày 23/4, Thiệu tuyên bố từ chức Tổng thống và rời khỏi miền Nam. Đến ngày 28/4, quyền lực chuyển sang Dương Văn Minh khi Sài Gòn đã bị vây chặt.',
            text4_ja: 'その後、解放軍はフエ・ダナン作戦、ホーチミン作戦を電撃的に展開し、首都サイゴンへの包囲網を狭めました。4月23日にティウは大統領を辞任して出国。4月28日、サイゴンが完全包囲される中でズオン・ヴァン・ミンへ権力が委譲されました。',

            // ── VIDEO CHÈN SAU text4 ──
            midImg4: {
                src: 'assets/images/1974_1976/1975_HucDoCongCamCo.mp4',
                isVideo: true,
                alt: 'Xe tăng 843 và xe tăng 390 của quân Giải Phóng tiến vào Dinh Độc Lập',
                alt_ja: '独立宮殿へ突入する解放軍の戦車843号と390号',
                caption: 'Xe tăng 843 và xe tăng 390 của quân Giải Phóng lần lượt húc đổ cổng phụ và cổng chính, tiến vào Dinh Độc Lập. (Video tư liệu)',
                caption_ja: '解放軍の戦車843号と390号が独立宮殿の門を突破して突入（記録映像）'
            },

            text5: 'Trưa ngày 30/4, sau hàng loạt trận đánh quân Giải Phóng tiến vào Sài Gòn, xe tăng húc đổ cổng Dinh Độc Lập, Dương Văn Minh đầu hàng không điều kiện, lá cờ của quân Giải Phóng tung bay trên nóc dinh lúc 11h30, cuộc chiến cũng chính thức khép lại.',
            text5_ja: '4月30日正午、解放軍がサイゴンに進撃し、戦車が独立宮殿の門を破り、ズオン・ヴァン・ミンが無条件降伏。11時30分に解放軍の旗が屋上に掲げられ、戦争は正式に終結しました。',

            // ── ẢNH CHÈN SAU text5 ──
            midImg5: {
                src: 'assets/images/1974_1976/1975_DauHang.jpg',
                alt: 'Các cán bộ quân Giải phóng chờ ông Dương Văn Minh đọc tuyên bố đầu hàng vào trưa ngày 30/4/1975 (Nguồn: TTXVN)',
                alt_ja: '1975年4月30日正午、ズオン・ヴァン・ミン氏が無条件降伏を読み上げるのを見守る解放軍幹部たち（ベトナム通信社）',
                caption: 'Các cán bộ quân Giải phóng chờ ông Dương Văn Minh (mặc áo đen ngồi nhìn lên) đọc tuyên bố đầu hàng vào trưa ngày 30/4/1975. (Nguồn: TTXVN)',
                caption_ja: '1975年4月30日正午、ズオン・ヴァン・ミン氏（黒服）が無条件降伏を読み上げるのを見守る解放軍幹部たち（ベトナム通信社）'
            },

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ],

    // ==========================================================================
    // 2. NHÁNH NHÀ BÁO — NỬA DƯỚI (id: '1975b') — MẢNG CÓ 1 OBJECT (LAYOUT 1 CỘT)
    // ==========================================================================
    bot: [
        {
            id: '1975b',
            modalImg: 'assets/images/1974_1976/1975_NB_PXAHutThuocDoChinh.webp',
            modalImgAlt: 'Phạm Xuân Ẩn đứng trước tòa Đô chính Sài Gòn ngay trước khi quân Giải Phóng tiến vào Sài Gòn (Nguồn: Điệp viên hoàn hảo - Trang 281)',
            modalImgAlt_ja: 'サイゴン解放直前、サイゴン市庁舎前に立つファム・スアン・アン（出典：『パーフェクト・スパイ』281頁）',
            caption: 'Phạm Xuân Ẩn đứng trước tòa Đô chính Sài Gòn ngay trước khi quân Giải Phóng tiến vào Sài Gòn. Đây cũng là bức ảnh được Tạp chí TIME chọn đăng ngay trang nhất trên bản tin nội bộ F.Y.I. ngày 12/5/1975 để giới thiệu về người phóng viên duy nhất ở lại điều hành văn phòng Sài Gòn. (Nguồn: Điệp viên hoàn hảo - Trang 281)',
            caption_ja: 'サイゴン解放直前、サイゴン市庁舎前に立つファム・スアン・アン。タイム誌は1975年5月12日付の社内報F.Y.I.の表紙にこの写真を掲載し、サイゴン支局に一人留まり運営した唯一の記者として紹介した（出典：『パーフェクト・スパイ』281頁）',
            title: 'Bài báo cuối cùng của Phạm Xuân Ẩn viết cho TIME – “Cuộc chia tay cuối cùng nghiệt ngã”',
            title_ja: 'タイム誌への最後の寄稿「無情の最後の別れ」',
            date: 'Tháng 4 – 5/1975',
            date_ja: '1975年4月～5月',

            text1: 'Ngày 30/4/1975, khi toàn bộ phóng viên người Mỹ đã di tản, sợi dây liên lạc cuối cùng của tòa soạn Time tại New York với văn phòng Sài Gòn là một dòng điện báo ngắn gọn: "Đây, Phạm Xuân Ẩn đây. Tất cả các phóng viên người Mỹ đều đã di tản do tình hình khẩn cấp. Văn phòng của Time giờ do mình tôi, Phạm Xuân Ẩn điều hành." .',
            text1_ja: '1975年4月30日、すべての米国人記者が避難した後、ニューヨークのタイム本社とサイゴン支局を結ぶ最後の連絡線は、簡潔な電報一本でした。「こちらファム・スアン・アン。緊急事態につき米国人記者は全員脱出。タイム支局は現在、私ファム・スアン・アン一人が運営している」。',

            // ── ẢNH CHÈN SAU text1 ──
            midImg1: {
                src: 'assets/images/1974_1976/1975_NB_DiTan.webp',
                alt: 'Những công dân Mỹ cuối cùng, trong đó có một số nhà báo, tập trung để rời khỏi Sài Gòn. (Nguồn: Getty Images)',
                alt_ja: 'サイゴンを離れるため集まる最後の米国市民とジャーナリストたち（Getty Images）',
                caption: 'Những công dân Mỹ cuối cùng, trong đó có một số nhà báo, tập trung để rời khỏi Sài Gòn. (Nguồn: Getty Images)',
                caption_ja: 'サイゴンを離れるため集まる最後の米国市民とジャーナリストたち（Getty Images）'
            },

            text2: 'Cho đến ngày 12/5/1976 ông đã gửi bài viết cuối cùng về cho Time với tiêu đề "Cuộc chia tay cuối cùng nghiệt ngã"  miêu tả lại cảnh hỗn loạn của VNCH và Mỹ ngày 30/4/1975.',
            text2_ja: '1976年5月12日、彼はタイム誌へ「無情の最後の別れ」と題する最後の記事を送り、1975年4月30日の南ベトナム政権と米国の混乱を鮮烈に描写しました。',

            text3: 'Bài báo khép lại bằng một nhận định lịch sử đầy sâu sắc của Phạm Xuân Ẩn về sự kết thúc can thiệp của người Mỹ tại Việt Nam: "Có lẽ cần phải nói rằng, cuộc chia tay của người Mỹ đối với Việt Nam là chiến dịch duy nhất trong toàn bộ cuộc chiến mà họ hoàn toàn không mang theo ảo tưởng...".',
            text3_ja: '記事は、米国のベトナム介入終焉についての歴史的かつ深い洞察で締めくくられています。「言わねばならないのは、米国人のベトナムからの撤退こそが、この戦争全体を通じて彼らが何の幻想も抱かずに実行した唯一の作戦だったということだ……」。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ]
};

// ==============================================================================
// TỰ ĐỘNG HÒA TRỘN DỮ LIỆU NĂM 1975 VÀO window.TIMELINE_DATA
// ==============================================================================
(function mergeExtraData1975() {
    function applyBranch(branchKey, defaultId) {
        if (!window.TIMELINE_DATA || !window.EXTRA_DATA_1975) return;
        const branchData = window.EXTRA_DATA_1975[branchKey];
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
        applyBranch('top', '1975t');
        applyBranch('bot', '1975b');
    }

    if (window.TIMELINE_DATA) {
        doMerge();
    } else {
        document.addEventListener('DOMContentLoaded', doMerge);
    }
})();
