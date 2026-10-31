/**
 * ==============================================================================
 * DỮ LIỆU MỞ RỘNG — NĂM 1968 (data/1968/data_1968.js)
 * ==============================================================================
 * Quản lý toàn bộ dữ liệu năm 1968 cho cả 2 nửa trên Timeline:
 *   1. top: Nhánh TÌNH BÁO (id: '1968t') — 2 sự kiện (layout chia 2, có footnote)
 *   2. bot: Nhánh NHÀ BÁO  (id: '1968b') — 1 sự kiện (layout 1 cột)
 * ==============================================================================
 */

window.EXTRA_DATA_1968 = {

    // ==========================================================================
    // 1. NHÁNH TÌNH BÁO — NỬA TRÊN (id: '1968t') — MẢNG CÓ 2 OBJECT (CHIA 2)
    // ==========================================================================
    top: [
        {
            id: '1968t',
            modalImg: 'assets/images/1964_1970/1968_TamHa.jpg',
            modalImgAlt: 'Tám Hà (Người đang hút thuốc) (Nguồn: VTC)',
            modalImgAlt_ja: 'タム・ハー（煙草を吸っている人物）（VTC）',
            caption: 'Tám Hà (Người đang hút thuốc) (Nguồn: VTC)',
            caption_ja: 'タム・ハー（煙草を吸っている人物）（VTC）',

            title: '15 phút sao chụp hồ sơ thẩm vấn Tám Hà cứu nguy cho lực lượng Giải phóng',
            title_ja: 'わずか15分のタム・ハー尋問調書複写と解放軍の危機回避',
            date: 'Tháng 05/1968',
            date_ja: '1968年5月',

            text1: 'Tháng 05/1968, Thượng tá Tám Hà (Trần Văn Đắc, Chính ủy cấp cao) phản bội và khai báo toàn bộ kế hoạch tác chiến đợt 2 Mậu Thân. Bấy giờ Ông Tư Cang đã nhận được lệnh của Hà Nội phải khẩn trương điều tra xem Tám Hà đã để lộ tin gì cho địch bởi lẽ Tám Hà là một sĩ quan cấp cao và là chính ủy lên biết khá nhiều về chiến lược của họ. Nếu như bị lộ ra các thông tin quan trọng thì sẽ đánh mất đi tính bất ngờ của cuộc tấn công Mậu Thân đợt 2 vào tháng 5 năm 1968 và khiến nó thất bại. Nhận chỉ thị khẩn từ Tư Cang, Phạm Xuân Ẩn lái xe chở Tư Cang ra Gia Định, sở chỉ Quân Việt Nam Cộng Hòa, mượn nguyên bản hồ sơ thẩm vấn Tám Hà, sao chụp lại và trả lại chỉ trong vòng 15 phút.',
            text1_ja: '1968年5月、上佐（上級大佐）タム・ハー（チャン・ヴァン・ダック、高級政治委員）が寝返り、テト攻勢第2波作戦計画の全貌を敵に供述。ハノイからトゥー・カンに対し、高級将校であるタム・ハーが何を漏らしたか緊急調査するよう厳命が下りました。重要情報が露見すれば第2波攻撃の奇襲性が失われ致命的な壊滅に陥る恐れがありました。トゥー・カンの緊急指令を受けたファム・スアン・アンは、彼を車に乗せてザーディンの南ベトナム軍司令所へ急行。タム・ハーの尋問記録原本を借り出し、わずか15分で撮影・複写して原状通り返却しました。',

            text2: 'Tám Hà đã khai hết tất cả từ kế hoạch chiến dịch, chiến thuật, vũ khí sử dụng, chỗ giấu quân, giấu pháo, đạn dược, kể cả nơi đặt chỉ huy sở, khu. Trước tình hình đó, cấp lãnh đạo của Mặt trận Dân tộc Giải phóng miền Nam Việt Nam đã phải thay đổi toàn bộ kế hoạch chiến dịch và mở cuộc tiến công đợt hai với tổn thất ít nhất. Kết quả của cuộc tiến công này buộc quân Mỹ phải xuống thang chiến tranh và đến bàn thương lượng!.',
            text2_ja: 'タム・ハーは作戦計画、戦術、使用兵器、兵力隠蔽地、砲兵弾薬デポ、さらには指揮所位置に至るまで全てを自供していました。この急報を受け、南ベトナム解放民族戦線指導部は全作戦計画を即座に変更。損害を最小限に抑えて第2波攻撃を敢行し、米軍に戦争縮小とパリ和平交渉の席に着くことを余儀なくさせました。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        },
        {
            id: '1968t',
            modalImg: 'assets/images/1964_1970/1968_RC.jpg',
            modalImgAlt: 'Công ty Rand Corporation (Nguồn: Cool Caesar)',
            modalImgAlt_ja: 'ランド研究所（Cool Caesar）',
            caption: 'Công ty Rand Corporation (Nguồn: Cool Caesar)',
            caption_ja: 'ランド研究所（Cool Caesar）',

            title: 'Bóc gỡ 3 nhóm nghiên cứu chiến lược Mỹ và thu thập dự thảo Kế hoạch "Việt Nam hóa chiến tranh"',
            title_ja: '米戦略研究グループの動向解読と「戦争のベトナム化」草案の収集',
            date: 'Sau Tết Mậu Thân 1968',
            date_ja: '1968年テト攻勢後',

            text1: 'Sau Mậu Thân, Mỹ đưa 3 nhóm nghiên cứu chiến lược sang Sài Gòn (nhóm Đại tá Donald Marshall, nhóm Giáo sư Guy Pauker - Rand Corporation: Tập đoàn nghiên cứu tư vấn chiến lược hàng đầu của Mỹ, nhóm Giáo sư Herman Kahn - Hudson Institute: Tập đoàn tư vấn chính sách chiến lược của Mỹ). Phạm Xuân Ẩn thảo luận trực tiếp trọn 1 ngày với Guy Pauker, thu thập toàn bộ nội dung dự thảo Kế hoạch "Việt Nam hóa chiến tranh" (*) (Kế hoạch AB144) gửi về Hà Nội. Điều này đã giúp phe Mặt trận Dân tộc Giải phóng miền Nam Việt Nam nắm được hướng đi tiếp theo của Mỹ sau chiến dịch Mậu Thân.',
            text1_ja: 'テト攻勢後、米国は3つの戦略研究チーム（ドナルド・マーシャル大佐チーム、ランド研究所のガイ・パウカー教授チーム、ハドソン研究所のハーマン・カーン教授チーム）をサイゴンに派遣。ファム・スアン・アンはガイ・パウカーと丸1日直接対話し、米国の「戦争のベトナム化」計画草案（*）（作戦計画AB144）の全貌を入手してハノイへ送達しました。これにより解放民族戦線はテト後の米国の次の一手を完璧に掌握しました。',

            footnote: '(*) Kế hoạch "Việt Nam hóa chiến tranh": Là kế hoạch "Dùng người Việt đánh người Việt" nhằm rút dần quân Mỹ nhưng vẫn giữ được miền Nam Việt Nam trong tầm ảnh hưởng của Mỹ.',
            footnote_ja: '(*) 「戦争のベトナム化」計画：米軍地上部隊を段階的に撤退させつつ、米国の影響力下に南ベトナムを維持するため「ベトナム人同士を戦わせる」政策。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ],

    // ==========================================================================
    // 2. NHÁNH NHÀ BÁO — NỬA DƯỚI (id: '1968b') — MẢNG CÓ 1 OBJECT (LAYOUT 1 CỘT)
    // ==========================================================================
    bot: [
        {
            id: '1968b',
            modalImg: 'assets/images/1964_1970/1968_4V.jpg',
            modalImgAlt: 'Chiếc xe Renault 4v được Phạm Xuân Ẩn dùng trong suốt thời chiến (Nguồn: ZingVN)',
            modalImgAlt_ja: '戦時中にファム・スアン・アンが愛用したルノー4CV（KienThuc）',
            caption: 'Chiếc xe Renault 4v được Phạm Xuân Ẩn dùng trong suốt thời chiến (Nguồn: ZingVN)',
            caption_ja: '戦時中にファム・スアン・アンが愛用したルノー4CV（KienThuc）',

            title: 'Trực tiếp tác nghiệp báo chí trong thời gian Tết Mậu Thân',
            title_ja: 'テト攻勢の渦中における最前線報道取材',
            date: 'Tết Mậu Thân 1968',
            date_ja: '1968年テト攻勢',

            text1: 'Bắt đầu từ 2 giờ 48 phút 31/01/1968, khi cuộc Tổng tấn công bùng nổ đồng loạt tại Sài Gòn, cuối buổi sáng cùng ngày, ông chở ông Tư Cang đi đếm thi hài những chiến sĩ đã ngã xuống trong cuộc tiến công. Phạm Xuân Ẩn chấp hành lệnh ở lại nội đô vào những ngày Tết Mậu Thân. Dưới danh nghĩa phóng viên thường trú tuần báo Mỹ Time, ông lái chiếc xe Renault 4CV chở Đại tá Nguyễn Bé, cố vấn Mỹ và đồng nghiệp đi khắp các điểm nóng (Dinh Độc Lập, Tòa Đại sứ Mỹ, Hàng Xanh, Bộ Tổng tham mưu).',
            text1_ja: '1968年1月31日午前2時48分、サイゴン市内で一斉に総攻撃が勃発。同日午前遅く、彼はトゥー・カンを車に乗せて進攻で倒れた戦士たちの遺体を数えに回りました。ファム・スアン・アンはテト攻勢期間中も市内に踏みとどまる指令を厳守。米週刊誌『TIME』常駐特派員の身分で愛車ルノー4CVを駆り、グエン・ベー大佐、米軍顧問、同僚記者らを乗せて激戦地（独立宮殿、米大使館、ハンサン、総参謀部）を縦横に駆け巡り取材しました。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ]
};

// ==============================================================================
// TỰ ĐỘNG HÒA TRỘN DỮ LIỆU NĂM 1968 VÀO window.TIMELINE_DATA
// ==============================================================================
(function mergeExtraData1968() {
    function applyBranch(branchKey, defaultId) {
        if (!window.TIMELINE_DATA || !window.EXTRA_DATA_1968) return;
        const branchData = window.EXTRA_DATA_1968[branchKey];
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
        applyBranch('top', '1968t');
        applyBranch('bot', '1968b');
    }

    if (window.TIMELINE_DATA) {
        doMerge();
    } else {
        document.addEventListener('DOMContentLoaded', doMerge);
    }
})();
