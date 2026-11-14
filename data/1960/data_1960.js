/**
 * ==============================================================================
 * DỮ LIỆU MỞ RỘNG — NĂM 1960 (data/1960/data_1960.js)
 * ==============================================================================
 * Quản lý toàn bộ dữ liệu năm 1960 cho cả 2 nửa trên Timeline:
 *   1. top: Nhánh TÌNH BÁO (id: '1960t') — 1 sự kiện (layout 1 cột, có nhiều midImg)
 *   2. bot: Nhánh NHÀ BÁO  (id: '1960b') — 1 sự kiện (layout 1 cột, có midImg)
 * ==============================================================================
 */

window.EXTRA_DATA_1960 = {

    // ==========================================================================
    // 1. NHÁNH TÌNH BÁO — NỬA TRÊN (id: '1960t') — MẢNG CÓ 1 OBJECT (LAYOUT 1 CỘT)
    // ==========================================================================
    top: [
        {
            id: '1960t',
            modalImg: 'assets/images/1960_1963/1960_TB_N_ThamNhaPXA.jpg',
            modalImgAlt: 'Ông Nguyễn Xuân Mạnh (thứ hai từ trái sang) và đồng đội trong một lần đến thăm gia đình Phạm Xuân Ẩn (ngoài cùng bên phải) (Nguồn: Báo Quân đội nhân dân)',
            modalImgAlt_ja: 'ファム・スアン・アン（右端）の家族を訪ねた際のグエン・スアン・マイン（左から2番目）と仲間たち（出典：Quan doi nhan dan紙）',
            caption: 'Ông Nguyễn Xuân Mạnh (thứ hai từ trái sang) và đồng đội trong một lần đến thăm gia đình Phạm Xuân Ẩn (ngoài cùng bên phải) (Nguồn: Báo Quân đội nhân dân)',
            caption_ja: 'ファム・スアン・アン（右端）の家族を訪ねた際のグエン・スアン・マイン（左から2番目）と仲間たち（出典：Quan doi nhan dan紙）',

            title: 'Nối lại liên lạc với tổ chức tình báo cách mạng',
            title_ja: '革命側の諜報組織との連絡の再開',
            date: 'Năm 1960',
            date_ja: '1960年',

            text1: 'Sau khi trở về Việt Nam, Phạm Xuân Ẩn tạm thời chưa hoạt động tình báo mà chờ nối lại liên lạc với tổ chức. Thông qua những người quen biết ông, Nguyễn Xuân Mạnh (Mười Nho), cán bộ phụ trách công tác tình báo tại Sài Gòn - Gia Định, biết được ông đã về nước và báo cáo với Võ Văn Kiệt (Sáu Dân)⁽¹⁾ cùng Cao Đăng Chiếm (Sáu Hoàng)⁽²⁾.',
            text1_ja: 'ベトナムに帰国した後、ファム・スアン・アンは当面は諜報活動を行わず、組織との連絡が再開されるのを待った。\n\nアンの知人たちを通じて、サイゴン・ザディンで諜報活動を担当していた幹部のグエン・スアン・マイン（ムオイ・ニョー）は、アンが帰国したことを知り、ヴォー・ヴァン・キエット（サウ・ザン）⁽¹⁾とカオ・ダン・チェム（サウ・ホアン）⁽²⁾に報告した。',

            // ── ẢNH CHÈN SAU ĐOẠN 1 ──
            midImg1: {
                src: 'assets/images/1960_1963/1960_TB_BaNguoiQuanTrong.jpg',
                alt: 'Ông Mười Nho - Nguyễn Xuân Mạnh (ngoài cùng bên trái) - Trưởng ban Đặc tình Đặc khu ủy Sài Gòn - Gia Định; Ông Sáu Dân - Võ Văn Kiệt (ở giữa) - Bí thư Khu ủy Sài Gòn - Gia Định; Ông Sáu Hoàng - Cao Đăng Chiếm (ngoài cùng bên phải) - Phó trưởng ban Bảo vệ an ninh Xứ ủy',
                alt_ja: 'ムオイ・ニョー――グエン・スアン・マイン（左端）――サイゴン・ザディン特別区党委員会特別諜報班長／サウ・ザン――ヴォー・ヴァン・キエット（中央）――サイゴン・ザディン地区党委員会書記／サウ・ホアン――カオ・ダン・チェム（右端）――南部党委員会治安保護班副班長',
                caption: 'Ông Mười Nho - Nguyễn Xuân Mạnh (ngoài cùng bên trái) - Trưởng ban Đặc tình Đặc khu ủy Sài Gòn - Gia Định<br><br>Ông Sáu Dân - Võ Văn Kiệt (ở giữa) - Bí thư Khu ủy Sài Gòn - Gia Định<br><br>Ông Sáu Hoàng - Cao Đăng Chiếm (ngoài cùng bên phải) - Phó trưởng ban Bảo vệ an ninh Xứ ủy',
                caption_ja: 'ムオイ・ニョー――グエン・スアン・マイン（左端）――サイゴン・ザディン特別区党委員会特別諜報班長<br><br>サウ・ザン――ヴォー・ヴァン・キエット（中央）――サイゴン・ザディン地区党委員会書記<br><br>サウ・ホアン――カオ・ダン・チェム（右端）――南部党委員会治安保護班副班長'
            },

            text2: 'Cao Đăng Chiếm từng tham gia việc cử Phạm Xuân Ẩn sang Mỹ học báo chí năm 1957. Sau khi xác nhận thông tin, ông giao Nguyễn Xuân Mạnh tổ chức nối lại liên lạc với Phạm Xuân Ẩn. Nguyễn Thị Mỹ Nhung (Tám Thảo), một cán bộ tình báo từng quen biết ông, được phân công làm người liên lạc trực tiếp.',
            text2_ja: 'カオ・ダン・チェムは、1957年にファム・スアン・アンをアメリカに派遣してジャーナリズムを学ばせることに関わった。\n\n情報を確認した後、カオ・ダン・チェムはグエン・スアン・マインにアンとの連絡の再開を手配するよう任せた。\n\nかつてアンと面識のあった諜報幹部のグエン・ティ・ミー・ニュン（タム・タオ）が、直接の連絡係に任命された。',

            text3: 'Cuối năm 1960, Tám Thảo bí mật đưa Phạm Xuân Ẩn đến căn cứ Phú Hòa Đông, Củ Chi. Tại đây, ông gặp các cán bộ lãnh đạo và ở lại ba ngày để báo cáo về quá trình học tập tại Mỹ, tình hình chính trị - quân sự và những mâu thuẫn trong chính quyền Sài Gòn (một tên gọi khác của phía Việt Nam Cộng hòa).',
            text3_ja: '1960年末、タム・タオはファム・スアン・アンを秘密裏にクチのフーホアドン根拠地へ連れて行った。\n\nアンはここで指導幹部たちと会い、3日間とどまって、アメリカでの学習の過程、政治・軍事情勢、サイゴン政権（ベトナム共和国側の別称）内部の矛盾について報告した。',

            // ── ẢNH CHÈN SAU ĐOẠN 3 ──
            midImg3: {
                src: 'assets/images/1960_1963/1960_TB_TamThao.jpg',
                alt: 'Tám Thảo (Nguyễn Thị Mỹ Nhung) - Nữ giao liên cho Phạm Xuân Ẩn trong giai đoạn đầu (Nguồn: Báo Quân đội nhân dân)',
                alt_ja: 'タム・タオ（グエン・ティ・ミー・ニュン）――初期のファム・スアン・アンの女性連絡員（出典：Quan doi nhan dan紙）',
                caption: 'Tám Thảo (Nguyễn Thị Mỹ Nhung) - Nữ giao liên cho Phạm Xuân Ẩn trong giai đoạn đầu (Nguồn: Báo Quân đội nhân dân)',
                caption_ja: 'タム・タオ（グエン・ティ・ミー・ニュン）――初期のファム・スアン・アンの女性連絡員（出典：Quan doi nhan dan紙）'
            },

            text4: 'Phạm Xuân Ẩn được đánh giá là người có tầm cỡ chiến lược và được lãnh đạo giao tận dụng vỏ bọc nhà báo chuyên nghiệp để tiếp cận các cơ quan đầu não Mỹ - Sài Gòn lấy tin. Tại đây, ông chính thức được trao bí danh huyền thoại X6 thuộc Cụm tình báo chiến lược (sau phát triển thành Cụm H63).',
            text4_ja: 'ファム・スアン・アンは戦略的な力量を持つ人物と評価され、指導部はアンに、プロの記者という隠れ蓑を活用してアメリカ・サイゴン政権の中枢機関に接近し、情報を得るよう任せた。\n\nアンはここで、戦略情報グループ（のちにH63情報グループに発展）に属する伝説的な秘密名「X6」を正式に授けられた。',

            footnote: '1. Võ Văn Kiệt (Sáu Dân): Sinh năm 1922 tại tỉnh Vĩnh Long. Trong kháng chiến chống Mỹ, ông là Bí thư Khu ủy Sài Gòn - Gia Định. Sau khi đất nước thống nhất, ông là Chủ tịch Ủy ban Nhân dân TP. Hồ Chí Minh đầu tiên và là Thủ tướng Việt Nam từ năm 1991 đến 1997.<br><br>2. Cao Đăng Chiếm (Sáu Hoàng): Ông phụ trách lĩnh vực công an ở miền Nam từ thời kháng chiến chống Pháp đến kháng chiến chống Mỹ. Sau này, ông là Ủy viên Trung ương Đảng và Thứ trưởng Bộ Nội vụ.',
            footnote_ja: '1. ヴォー・ヴァン・キエット（サウ・ザン）：1922年、ヴィンロン省に生まれる。抗米戦争中はサイゴン・ザディン地区党委員会書記であった。南北統一後は初代ホーチミン市人民委員会主席を務め、1991年から1997年までベトナム社会主義共和国首相を務めた。<br><br>2. カオ・ダン・チェム（サウ・ホアン）：抗仏戦争期から抗米戦争期にかけて南部で公安分野を担当した。のちに党中央委員、内務次官を務めた。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ],

    // ==========================================================================
    // 2. NHÁNH NHÀ BÁO — NỬA DƯỚI (id: '1960b') — MẢNG CÓ 1 OBJECT (LAYOUT 1 CỘT)
    // ==========================================================================
    bot: [
        {
            id: '1960b',
            modalImg: 'assets/images/1960_1963/1960_NB_Reuters.jpg',
            modalImgAlt: 'Thẻ nhà báo khi ông Ẩn làm phóng viên hãng thông tấn Reuters (Nguồn: Báo Thanh Niên)',
            modalImgAlt_ja: 'アンがロイター通信の記者だったころの記者証（出典：Thanh Nien紙）',
            caption: 'Thẻ nhà báo khi ông Ẩn làm phóng viên hãng thông tấn Reuters (Nguồn: Báo Thanh Niên)',
            caption_ja: 'アンがロイター通信の記者だったころの記者証（出典：Thanh Nien紙）',

            title: 'Bắt đầu làm việc tại hãng thông tấn Reuters',
            title_ja: 'ロイター通信での勤務開始',
            date: 'Năm 1960',
            date_ja: '1960年',

            text1: 'Sau khi trở về Việt Nam, Phạm Xuân Ẩn làm việc tại Việt Tấn Xã và có quan hệ tốt với Nguyễn Thái, Tổng Giám đốc cơ quan này.',
            text1_ja: 'ベトナムに帰国した後、ファム・スアン・アンはベトナム通信で働き、同社の社長グエン・タイと良好な関係にあった。',

            text2: 'Thời điểm đó, hãng thông tấn Reuters của Anh đang mở rộng hoạt động đưa tin tại Sài Gòn. Nguyễn Thái đã giới thiệu Phạm Xuân Ẩn cho Bruce Russell, đại diện Reuters, vì ông được đào tạo về báo chí tại Mỹ, sử dụng tiếng Anh thành thạo và am hiểu tình hình chính trị Việt Nam.',
            text2_ja: '当時、イギリスのロイター通信はサイゴンでの報道活動を拡大していた。\n\nアンがアメリカでジャーナリズムの教育を受け、英語に堪能で、ベトナムの政治情勢に精通していたことから、グエン・タイはロイター通信の代表ブルース・ラッセルにファム・スアン・アンを紹介した。',

            text3: 'Thời gian đầu làm việc tại Reuters, Phạm Xuân Ẩn đồng thời nhận lương từ Phủ Tổng thống, Việt Tấn Xã và Reuters. Để tránh những rắc rối có thể phát sinh khi làm việc cho nhiều cơ quan, ông đề nghị Trần Kim Tuyến cho thôi công tác tại Sở Nghiên cứu Chính trị và Xã hội cùng với Việt Tấn Xã.',
            text3_ja: 'ロイター通信で働き始めた当初、ファム・スアン・アンは大統領府、ベトナム通信、ロイター通信から同時に給与を受け取っていた。\n\n複数の機関で働くことで生じうる面倒を避けるため、アンはチャン・キム・トゥエンに、政治・社会研究局とベトナム通信での勤務をやめさせてほしいと申し出た。',

            // ── ẢNH CHÈN SAU ĐOẠN 3 ──
            midImg3: {
                src: 'assets/images/1960_1963/1960_NB_DongNghiepPhuongTay.jpg',
                alt: 'Phạm Xuân Ẩn (thứ hai từ trái sang) cùng các đồng nghiệp phóng viên phương Tây (Nguồn: Điệp viên hoàn hảo - Trang 95)',
                alt_ja: '西側の同僚記者たちとファム・スアン・アン（左から2番目）（出典：『完璧なスパイ』95ページ）',
                caption: 'Phạm Xuân Ẩn (thứ hai từ trái sang) cùng các đồng nghiệp phóng viên phương Tây (Nguồn: Điệp viên hoàn hảo - Trang 95)',
                caption_ja: '西側の同僚記者たちとファム・スアン・アン（左から2番目）（出典：『完璧なスパイ』95ページ）'
            },

            text4: 'Việc này giúp Phạm Xuân Ẩn xây dựng hình ảnh một nhà báo không trực tiếp làm việc cho chính quyền Sài Gòn, qua đó tạo điều kiện thuận lợi hơn để tiếp xúc với các nhân vật thuộc nhiều phe phái chính trị, giới quân sự và các cơ quan tình báo nước ngoài.',
            text4_ja: 'このことにより、ファム・スアン・アンはサイゴン政権のために直接働いてはいない記者というイメージを築くことができ、それによって、さまざまな政治派閥に属する人物、軍関係者、外国の諜報機関と接触しやすくなった。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ]
};

// ==============================================================================
// TỰ ĐỘNG HÒA TRỘN DỮ LIỆU NĂM 1960 VÀO window.TIMELINE_DATA
// ==============================================================================
(function mergeExtraData1960() {
    function applyBranch(branchKey, defaultId) {
        if (!window.TIMELINE_DATA || !window.EXTRA_DATA_1960) return;
        const branchData = window.EXTRA_DATA_1960[branchKey];
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
        applyBranch('top', '1960t');
        applyBranch('bot', '1960b');
    }

    if (window.TIMELINE_DATA) {
        doMerge();
    } else {
        document.addEventListener('DOMContentLoaded', doMerge);
    }
})();
