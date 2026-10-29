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
            modalImgAlt: 'Ông Nguyễn Xuân Mạnh (thứ hai, từ trái sang) và đồng đội trong một lần đến thăm gia đình Phạm Xuân Ẩn (ngoài cùng, bên phải) (Nguồn: QDNDVN)',
            modalImgAlt_ja: 'ファム・スアン・アンの家族を訪問するグエン・スアン・マン（左から2人目）と戦友たち（人民軍新聞）',
            caption: 'Ông Nguyễn Xuân Mạnh (thứ hai, từ trái sang) và đồng đội trong một lần đến thăm gia đình Phạm Xuân Ẩn (ngoài cùng, bên phải) (Nguồn: QDNDVN)',
            caption_ja: 'ファム・スアン・アンの家族を訪問するグエン・スアン・マン（左から2人目）と戦友たち（人民軍新聞）',

            title: 'Nối lại liên lạc với tổ chức tình báo cách mạng',
            title_ja: '革命情報組織との連絡再開',
            date: 'Năm 1960',
            date_ja: '1960年',

            text1: 'Sau khi trở về Việt Nam, Phạm Xuân Ẩn tạm thời chưa hoạt động tình báo mà chờ nối lại liên lạc với tổ chức. Thông qua những người quen biết ông, Nguyễn Xuân Mạnh (Mười Nho), cán bộ phụ trách công tác tình báo tại Sài Gòn - Gia Định, biết được ông đã về nước và báo cáo với Võ Văn Kiệt (Sáu Dân) cùng Cao Đăng Chiếm (Sáu Hoàng).',
            text1_ja: '帰国後、ファム・スアン・アンは組織との連絡再開を待ち、一時的に諜報活動を控えました。知人を通じてサイゴン・ザディン地区の情報担当幹部グエン・スアン・マン（ムオイ・ニョ）がアンの帰国を知り、ヴォー・ヴァン・キエット（サウ・ザン）およびカオ・ダン・チエム（サウ・ホアン）に報告しました。',

            // ── ẢNH CHÈN SAU ĐOẠN 1 ──
            midImg1: {
                src: 'assets/images/1960_1963/1960_TB_BaNguoiQuanTrong.jpg',
                alt: 'Ông Mười Nho - Nguyễn Xuân Mạnh (ngoài cùng bên trái) - Trưởng ban Đặc tình Đặc khu ủy Sài Gòn - Gia Định; Ông Sáu Dân - Võ Văn Kiệt (ở giữa) - Bí thư Khu ủy Sài Gòn - Gia Định; Ông Sáu Hoàng - Cao Đăng Chiếm (ngoài cùng bên phải) - Phó trưởng ban Bảo vệ an ninh Xứ ủy',
                alt_ja: '左：ムオイ・ニョ（サイゴン特区特情部長）、中央：サウ・ザン／ヴォー・ヴァン・キエット（区書記）、右：サウ・ホアン／カオ・ダン・チエム（治安部長）',
                caption: 'Ông Mười Nho - Nguyễn Xuân Mạnh (ngoài cùng bên trái) - Trưởng ban Đặc tình Đặc khu ủy Sài Gòn - Gia Định<br><br>Ông Sáu Dân - Võ Văn Kiệt (ở giữa) - Bí thư Khu ủy Sài Gòn - Gia Định<br><br>Ông Sáu Hoàng - Cao Đăng Chiếm (ngoài cùng bên phải) - Phó trưởng ban Bảo vệ an ninh Xứ ủy',
                caption_ja: 'ムオイ・ニョ（グエン・スアン・マン、左端）— サイゴン・ザディン特区特別情報部長<br><br>サウ・ザン（ヴォー・ヴァン・キエット、中央）— サイゴン・ザディン地区書記<br><br>サウ・ホアン（カオ・ダン・チエム、右端）— 地区治安防衛副部長'
            },

            text2: 'Cao Đăng Chiếm từng tham gia việc cử Phạm Xuân Ẩn sang Mỹ học báo chí năm 1957. Sau khi xác nhận thông tin, ông giao Nguyễn Xuân Mạnh tổ chức nối lại liên lạc với Phạm Xuân Ẩn. Nguyễn Thị Mỹ Nhung (Tám Thảo), một cán bộ tình báo từng quen biết ông, được phân công làm người liên lạc trực tiếp.',
            text2_ja: 'カオ・ダン・チエムは1957年にアンを米国留学へ派遣する決定に関わった人物でした。情報を確認した彼は、グエン・スアン・マンにアンとの連絡再開を指示。アンと面識のあった女性情報幹部グエン・ティ・ミー・ニュン（タム・タオ）が直接の連絡役に任命されました。',

            text3: 'Cuối năm 1960, Tám Thảo bí mật đưa Phạm Xuân Ẩn đến căn cứ Phú Hòa Đông, Củ Chi. Tại đây, ông gặp các cán bộ lãnh đạo và ở lại ba ngày để báo cáo về quá trình học tập tại Mỹ, tình hình chính trị - quân sự và những mâu thuẫn trong chính quyền Sài Gòn.',
            text3_ja: '1960年末、タム・タオはアンを極秘裏にクチのフーホアドン根拠地へ案内しました。アンは指導部と合流して3日間にわたり滞在し、米国での留学成果、政治・軍事情勢、サイゴン政権内部の深刻な矛盾について包括的な報告を行いました。',

            // ── ẢNH CHÈN SAU ĐOẠN 3 ──
            midImg3: {
                src: 'assets/images/1960_1963/1960_TB_TamThao.jpg',
                alt: 'Tám Thảo (Nguyễn Thị Mỹ Nhung) - Nữ giao liên cho Phạm Xuân Ẩn (Nguồn: QDNDVN)',
                alt_ja: 'タム・タオ（グエン・ティ・ミー・ニュン）— ファム・スアン・アン専属の女性連絡員（人民軍新聞）',
                caption: 'Tám Thảo (Nguyễn Thị Mỹ Nhung) - Nữ giao liên cho Phạm Xuân Ẩn (Nguồn: QDNDVN)',
                caption_ja: 'タム・タオ（グエン・ティ・ミー・ニュン）— ファム・スアン・アン専属の女性連絡員（人民軍新聞）'
            },

            text4: 'Phạm Xuân Ẩn được đánh giá là người có tầm cỡ chiến lược, lãnh đạo giao ông tận dụng vỏ bọc nhà báo chuyên nghiệp để tiếp cận các cơ quan đầu não Mỹ - Sài Gòn lấy tin. Tại đây, ông chính thức được trao bí danh huyền thoại X6 thuộc Cụm tình báo chiến lược (sau phát triển thành Cụm H63).',
            text4_ja: 'アンは戦略的価値を極めて高く評価され、プロの報道記者という偽装を活用して米軍・サイゴン政権の中枢機関へ接近し情報収集を行う任務を課されました。ここで彼は正式に伝説の暗号名「X6」を授与され、戦略情報班（後のH63諜報網）に編入されました。',

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
            modalImgAlt_ja: 'ロイター通信特派員時代のファム・スアン・アンの記者証（タインニエン紙）',
            caption: 'Thẻ nhà báo khi ông Ẩn làm phóng viên hãng thông tấn Reuters (Nguồn: Báo Thanh Niên)',
            caption_ja: 'ロイター通信特派員時代のファム・スアン・アンの記者証（タインニエン紙）',

            title: 'Bắt đầu làm việc tại hãng thông tấn Reuters',
            title_ja: 'ロイター通信での勤務開始',
            date: 'Năm 1960',
            date_ja: '1960年',

            text1: 'Sau khi trở về Việt Nam, Phạm Xuân Ẩn làm việc tại Việt Tấn Xã và có quan hệ tốt với Nguyễn Thái, Tổng Giám đốc cơ quan này.',
            text1_ja: 'ベトナム帰国後、ファム・スアン・アンはベトナム通信社（ベトタンサ）に勤務し、同社総局長のグエン・タイと親密な関係を築きました。',

            text2: 'Thời điểm đó, hãng thông tấn Reuters của Anh đang mở rộng hoạt động đưa tin tại Sài Gòn. Nguyễn Thái đã giới thiệu Phạm Xuân Ẩn cho Bruce Russell, đại diện Reuters, vì ông được đào tạo về báo chí tại Mỹ, sử dụng tiếng Anh thành thạo và am hiểu tình hình chính trị Việt Nam.',
            text2_ja: '当時、英ロイター通信はサイゴンでの特派活動を拡大していました。グエン・タイは、米国で正規のジャーナリズム教育を受け、流暢な英語力とベトナム政治への深い洞察を持つアンを、ロイター代表のブルース・ラッセルに推薦しました。',

            text3: 'Thời gian đầu làm việc tại Reuters, Phạm Xuân Ẩn đồng thời nhận lương từ Phủ Tổng thống, Việt Tấn Xã và Reuters. Để tránh những rắc rối có thể phát sinh khi làm việc cho nhiều cơ quan, ông đề nghị Trần Kim Tuyến cho thôi công tác tại Sở Nghiên cứu Chính trị và Việt Tấn Xã.',
            text3_ja: 'ロイターでの勤務初期、アンは大統領府、ベトタンサ、ロイターの3箇所から給与を受け取っていました。多重勤務による疑惑や不都合を避けるため、彼はチャン・キム・トゥエンに政治社会調査局およびベトタンサからの退職を申し出ました。',

            // ── ẢNH CHÈN SAU ĐOẠN 3 ──
            midImg3: {
                src: 'assets/images/1960_1963/1960_NB_DongNghiepPhuongTay.jpg',
                alt: 'Phạm Xuân Ẩn (thứ hai từ trái) cùng các đồng nghiệp phóng viên phương Tây (Nguồn: Điệp viên hoàn hảo - Trang 95)',
                alt_ja: '欧米の特派員仲間と語らうファム・スアン・アン（左から2人目）（『パーフェクト・スパイ』95頁）',
                caption: 'Phạm Xuân Ẩn (thứ hai từ trái) cùng các đồng nghiệp phóng viên phương Tây (Nguồn: Điệp viên hoàn hảo - Trang 95)',
                caption_ja: '欧米の特派員仲間と語らうファム・スアン・アン（左から2人目）（『パーフェクト・スパイ』95頁）'
            },

            text4: 'Việc này giúp Phạm Xuân Ẩn xây dựng hình ảnh một nhà báo không trực tiếp làm việc cho chính quyền Sài Gòn, qua đó tạo điều kiện thuận lợi hơn để tiếp xúc với các nhân vật thuộc nhiều phe phái chính trị, giới quân sự và các cơ quan tình báo nước ngoài.',
            text4_ja: 'これによりアンはサイゴン政権に直接属さない独立系記者の立場を確立し、諸派の政治家、軍首脳部、外国諜報機関の関係者とより自然かつ広範に接触できる理想的な環境を整えました。',

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
