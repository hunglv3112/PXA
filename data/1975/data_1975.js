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
            modalImgAlt: 'Quân Giải phóng trong Chiến dịch Tây Nguyên - Mở đầu cho cuộc Tổng tiến công và nổi dậy Mùa Xuân 1975 (Nguồn: Báo Quân đội nhân dân)',
            modalImgAlt_ja: '中部高原作戦における解放軍――1975年春の総進攻と蜂起の幕開け（出典：Quan doi nhan dan紙）',
            caption: 'Quân Giải phóng trong Chiến dịch Tây Nguyên - Mở đầu cho cuộc Tổng tiến công và nổi dậy Mùa Xuân 1975 (Nguồn: Báo Quân đội nhân dân)',
            caption_ja: '中部高原作戦における解放軍――1975年春の総進攻と蜂起の幕開け（出典：Quan doi nhan dan紙）',
            title: 'Chiến dịch Tây Nguyên mở màn cho tháng Tư lịch sử',
            title_ja: '歴史的な4月の幕を開けた中部高原作戦',
            date: 'Tháng 3 – 4/1975',
            date_ja: '1975年3月～4月',

            text1: 'Cuối năm 1974, trong một cuộc họp kín tại Dinh Độc Lập, Thiệu chủ quan đánh giá rằng quân Giải phóng đã chịu tổn thất nặng nề sau các trận đánh năm 1968 và 1972, không còn đủ khả năng tấn công các mục tiêu lớn mà chỉ có thể đánh chiếm những thị xã nhỏ. Vì vậy, Thiệu không tăng cường phòng thủ Tây Nguyên.',
            text1_ja: '1974年末、独立宮殿での秘密会議で、ティエウは、解放軍が1968年と1972年の戦闘で甚大な損失を被っており、もはや大きな目標を攻撃する能力はなく、小規模な地方都市しか占領できないと高をくくった。そのため、ティエウは中部高原の防衛を強化しなかった。',

            text2: 'Phạm Xuân Ẩn đã nắm được thông tin từ cuộc họp này và báo cáo về. Tin này giúp quân Giải phóng quyết định mở Chiến dịch Tây Nguyên vào tháng 3/1975, lấy Buôn Ma Thuột làm đòn mở màn cuộc Tổng tiến công và nổi dậy Mùa Xuân 1975.',
            text2_ja: 'ファム・スアン・アンはこの会議の情報をつかみ、報告した。この情報によって、解放軍は1975年3月に中部高原作戦を開始することを決断し、ブオンマトートへの攻撃を1975年春の総進攻と蜂起の幕開けとした。',

            text3: 'Đòn tiến công vào Buôn Ma Thuột của quân Giải phóng khiến Việt Nam Cộng hòa rơi vào thế choáng váng, mở đầu cho cuộc rút quân hỗn loạn khỏi Tây Nguyên. Sự thất bại này khiến quân Việt Nam Cộng hòa nhanh chóng suy yếu và tan rã.',
            text3_ja: '解放軍のブオンマトートへの攻撃はベトナム共和国に大きな衝撃を与え、中部高原からの混乱した撤退の始まりとなった。この敗北により、ベトナム共和国軍は急速に弱体化し、崩壊していった。',

            // ── ẢNH CHÈN SAU text3 ──
            midImg3: {
                src: 'assets/images/1974_1976/1975_BoChay.jpg',
                alt: 'Quân Việt Nam Cộng hòa rút chạy sau khi để thua ở Chiến dịch Tây Nguyên (Nguồn: Thông tấn xã Việt Nam)',
                alt_ja: '中部高原作戦に敗れ、退却するベトナム共和国軍（出典：ベトナム通信社）',
                caption: 'Quân Việt Nam Cộng hòa rút chạy sau khi để thua ở Chiến dịch Tây Nguyên (Nguồn: Thông tấn xã Việt Nam)',
                caption_ja: '中部高原作戦に敗れ、退却するベトナム共和国軍（出典：ベトナム通信社）'
            },

            text4: 'Sau đó quân Giải phóng liên tiếp mở các chiến dịch Huế - Đà Nẵng, chiến dịch Hồ Chí Minh, siết chặt vòng vây quanh thủ đô của Việt Nam Cộng hòa. Ngày 21/4, Thiệu tuyên bố từ chức Tổng thống và bàn giao quyền lực cho Phó Tổng thống lúc bấy giờ là Trần Văn Hương. Đến đêm 25/4, Thiệu rời khỏi Việt Nam. Sau đó, vào ngày 28/4, quyền lực tiếp tục được chuyển giao cho Dương Văn Minh khi Sài Gòn đã bị bao vây chặt.',
            text4_ja: 'その後、解放軍はフエ・ダナン作戦とホーチミン作戦を次々と開始し、ベトナム共和国の首都への包囲網を狭めていった。4月21日、ティエウは大統領職の辞任を表明し、当時の副大統領チャン・ヴァン・フオンに権力を移譲した。4月25日夜、ティエウはベトナムを離れた。その後4月28日には、サイゴンがすでに完全に包囲されていた中で、権力はさらにズオン・ヴァン・ミンへと移譲された。',

            // ── VIDEO CHÈN SAU text4 ──
            midImg4: {
                src: 'assets/images/1974_1976/1975_HucDoCongCamCo.mp4',
                isVideo: true,
                alt: 'Quân Giải phóng trên đường tiến vào Dinh Độc Lập (Video tư liệu)',
                alt_ja: '独立宮殿へ進撃する解放軍（記録映像）',
                caption: 'Quân Giải phóng trên đường tiến vào Dinh Độc Lập (Video tư liệu)',
                caption_ja: '独立宮殿へ進撃する解放軍（記録映像）'
            },

            text5: 'Trưa ngày 30/4, sau hàng loạt trận đánh, quân Giải phóng tiến vào Sài Gòn, xe tăng húc đổ cổng Dinh Độc Lập, Dương Văn Minh đầu hàng không điều kiện, lá cờ của quân Giải phóng tung bay trên nóc dinh lúc 11h30, cuộc chiến cũng chính thức khép lại.',
            text5_ja: '4月30日昼、一連の戦闘を経て解放軍がサイゴン市内に進攻し、戦車が独立宮殿の門を突き破り、ズオン・ヴァン・ミンが無条件降伏し、11時30分に解放旗が宮殿の屋上に翻って、戦争は正式に終結した。',

            // ── ẢNH CHÈN SAU text5 ──
            midImg5: {
                src: 'assets/images/1974_1976/1975_DauHang.jpg',
                alt: 'Các cán bộ quân Giải phóng chờ Dương Văn Minh (mặc áo đen ngồi nhìn lên) đọc tuyên bố đầu hàng vào trưa ngày 30/4/1975 (Nguồn: TTXVN)',
                alt_ja: '1975年4月30日昼、ズオン・ヴァン・ミン（黒い服を着て座り、上を見ている人物）が降伏声明を読み上げるのを待つ解放軍の幹部たち（出典：ベトナム通信社）',
                caption: 'Các cán bộ quân Giải phóng chờ Dương Văn Minh (mặc áo đen ngồi nhìn lên) đọc tuyên bố đầu hàng vào trưa ngày 30/4/1975 (Nguồn: TTXVN)',
                caption_ja: '1975年4月30日昼、ズオン・ヴァン・ミン（黒い服を着て座り、上を見ている人物）が降伏声明を読み上げるのを待つ解放軍の幹部たち（出典：ベトナム通信社）'
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
            modalImg: 'assets/images/1974_1976/1975_NB_PXAHutThuocDoChinh.jpg',
            modalImgAlt: 'Phạm Xuân Ẩn đứng trước tòa Đô chính Sài Gòn ngay trước khi quân Giải phóng tiến vào (Nguồn: Điệp viên hoàn hảo - Trang 281)',
            modalImgAlt_ja: '解放軍が市内に進攻する直前、サイゴン市庁舎の前に立つファム・スアン・アン（出典：『完璧なスパイ』281ページ）',
            caption: 'Phạm Xuân Ẩn đứng trước tòa Đô chính Sài Gòn ngay trước khi quân Giải phóng tiến vào (Nguồn: Điệp viên hoàn hảo - Trang 281)',
            caption_ja: '解放軍が市内に進攻する直前、サイゴン市庁舎の前に立つファム・スアン・アン（出典：『完璧なスパイ』281ページ）',
            title: 'Bài báo cuối cùng của Phạm Xuân Ẩn viết cho Time – “Cuộc chia tay cuối cùng đầy nghiệt ngã”',
            title_ja: 'ファム・スアン・アンが『タイム』誌に書いた最後の記事――「残酷さに満ちた最後の別れ」',
            date: 'Tháng 4 – 5/1975',
            date_ja: '1975年4月～5月',

            text1: 'Ngày 30/4/1975, khi toàn bộ phóng viên người Mỹ đã di tản, một trong những bức điện cuối cùng mà văn phòng Time ở Sài Gòn gửi về trụ sở tại New York có nội dung: “Đây, Phạm Xuân Ẩn đây. Tất cả các phóng viên người Mỹ đều đã di tản do tình hình khẩn cấp. Văn phòng của Time giờ do mình tôi, Phạm Xuân Ẩn điều hành.”',
            text1_ja: '1975年4月30日、アメリカ人記者が全員退避した後、『タイム』誌サイゴン支局がニューヨークの本社に送った最後の電文の一つは、「こちらファム・スアン・アン。アメリカ人記者は緊急事態のため全員退避した。『タイム』誌の支局は今、私ファム・スアン・アン一人で運営している」というものだった。',

            // ── ẢNH CHÈN SAU text1 ──
            midImg1: {
                src: 'assets/images/1974_1976/1975_NB_DiTan.jpg',
                alt: 'Những công dân Mỹ cuối cùng, trong đó có một số nhà báo, đang rời khỏi Sài Gòn (Nguồn: Getty Images)',
                alt_ja: '一部の記者を含め、サイゴンを離れようとしている最後のアメリカ市民たち（出典：Getty Images）',
                caption: 'Những công dân Mỹ cuối cùng, trong đó có một số nhà báo, đang rời khỏi Sài Gòn (Nguồn: Getty Images)',
                caption_ja: '一部の記者を含め、サイゴンを離れようとしている最後のアメリカ市民たち（出典：Getty Images）'
            },

            text2: 'Sau đó Ẩn gửi bài báo cuối cùng về cho Time với tiêu đề “Cuộc chia tay cuối cùng đầy nghiệt ngã”, miêu tả lại cảnh hỗn loạn của Việt Nam Cộng hòa và Mỹ ngày 30/4/1975, được đăng trên số báo ra ngày 12/5/1975. Bài báo khép lại bằng một nhận định lịch sử đầy sâu sắc của Phạm Xuân Ẩn về sự kết thúc can thiệp của người Mỹ tại Việt Nam: “Có lẽ cần phải nói rằng, cuộc chia tay của người Mỹ đối với Việt Nam là chiến dịch duy nhất trong toàn bộ cuộc chiến mà họ hoàn toàn không mang theo ảo tưởng...”',
            text2_ja: 'その後、アンは、1975年4月30日のベトナム共和国とアメリカの混乱ぶりを描いた「残酷さに満ちた最後の別れ」と題する最後の記事を『タイム』誌に送り、この記事は1975年5月12日号に掲載された。記事は、「アメリカ人のベトナムとの別れは、戦争全体を通じて、彼らがまったく幻想を抱かずに遂行した唯一の作戦だったと言うべきかもしれない……」という、アメリカのベトナム介入の終わりについてのファム・スアン・アンの深い歴史的洞察で締めくくられている。',

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
