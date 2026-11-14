/**
 * ==============================================================================
 * DỮ LIỆU MỞ RỘNG — NĂM 1972 (data/1972/data_1972.js)
 * ==============================================================================
 * Quản lý toàn bộ dữ liệu năm 1972 cho cả 2 nửa trên Timeline:
 *   1. top: Nhánh TÌNH BÁO (id: '1972t') — 2 sự kiện (layout chia 2, có midImg & footnotes)
 *   2. bot: Nhánh NHÀ BÁO  (id: '1972b') — 1 sự kiện (layout 1 cột)
 * ==============================================================================
 */

window.EXTRA_DATA_1972 = {

    // ==========================================================================
    // 1. NHÁNH TÌNH BÁO — NỬA TRÊN (id: '1972t') — MẢNG CÓ 2 OBJECT (CHIA 2)
    // ==========================================================================
    top: [
        {
            id: '1972t',
            modalImg: 'assets/images/1971_1973/1972_TB1_QGPBaoVeThanhCo.jpg',
            modalImgAlt: 'Quân Giải phóng chiến đấu bảo vệ Thành cổ Quảng Trị năm 1972 (Nguồn: Báo Biên phòng)',
            modalImgAlt_ja: '1972年、クアンチ城塞を守るために戦う解放軍（出典：Bien phong紙）',
            caption: 'Quân Giải phóng chiến đấu bảo vệ Thành cổ Quảng Trị năm 1972 (Nguồn: Báo Biên phòng)',
            caption_ja: '1972年、クアンチ城塞を守るために戦う解放軍（出典：Bien phong紙）',

            title: 'Cuộc tiến công chiến dịch Xuân – Hè 1972',
            title_ja: '1972年春夏作戦の攻勢',
            date: 'Ngày 30/03/1972',
            date_ja: '1972年3月30日',

            text1: 'Ngày 30/3/1972, quân Giải phóng mở tiến công chiến dịch Xuân – Hè 1972⁽¹⁾ đánh vào các vùng Quảng Trị, Tây Nguyên và Đông Nam Bộ. Phía Mỹ và chính quyền Việt Nam Cộng hòa bị bất ngờ về thời điểm, quy mô và hướng tiến công chính.',
            text1_ja: '1972年3月30日、解放軍は1972年春夏作戦⁽¹⁾の攻勢を開始し、クアンチ、中部高原、東南部の各地域を攻撃した。アメリカ側とベトナム共和国政権にとって、その時期、規模、主な攻撃方向は予想外のものだった。',

            text2: 'Phạm Xuân Ẩn dùng thẻ nhà báo của tạp chí Time để tiếp cận Bộ Tổng Tham mưu quân Việt Nam Cộng hòa, trụ sở MACV của Đại tướng Creighton Abrams và các buổi họp báo Five O’Clock Follies (“Trò hề lúc 5 giờ”). Từ đó, Ẩn khai thác thông tin từ thực địa qua các cố vấn quân sự Mỹ.',
            text2_ja: 'ファム・スアン・アンは『タイム』誌の記者証を使い、ベトナム共和国軍の参謀本部、クレイトン・エイブラムス大将のMACV本部、そしてブリーフィング「ファイブ・オクロック・フォリーズ（5時の茶番）」に出入りした。そこから、アンはアメリカの軍事顧問たちを通じて現場の情報を引き出した。',

            text3: 'Ẩn cung cấp các phân tích về sự suy sụp của Quân đoàn II của quân Việt Nam Cộng hòa, kế hoạch điều động lực lượng Địa phương quân của Thiếu tướng Ngô Du (Tư lệnh Quân đoàn II) cùng mức tổn thất nặng của Binh chủng Nhảy dù và Thủy quân lục chiến. Những phân tích này cho thấy lực lượng đối phương bị dàn mỏng. Nhờ đó, quân Giải phóng đã kịp thời triển khai phương án phối hợp trên các chiến trường.',
            text3_ja: 'アンは、ベトナム共和国軍第II軍団の崩壊、ゴ・ズー少将（第II軍団司令官）による地方軍の動員計画、および空挺部隊と海兵隊の甚大な損失についての分析を提供した。これらの分析は、敵の兵力が分散して手薄になっていることを示していた。これにより、解放軍は各戦場における連携計画を迅速に実行に移した。',

            // ── ẢNH CHÈN GIỮA NỘI DUNG ──
            midImg3: {
                src: 'assets/images/1971_1973/1972_TB1_NuCuoi.jpg',
                alt: 'Bức ảnh nổi tiếng “Nụ cười chiến thắng” của quân Giải phóng ở Thành cổ Quảng Trị (Nguồn: Đoàn Công Tính)',
                alt_ja: 'クアンチ城塞での解放軍の有名な写真「勝利の笑顔」（出典：Doan Cong Tinh）',
                caption: 'Bức ảnh nổi tiếng “Nụ cười chiến thắng” của quân Giải phóng ở Thành cổ Quảng Trị (Nguồn: Đoàn Công Tính)',
                caption_ja: 'クアンチ城塞での解放軍の有名な写真「勝利の笑顔」（出典：Doan Cong Tinh）'
            },

            footnote: '1. Chiến dịch Xuân – Hè 1972 là một trong những chiến dịch quân sự lớn nhất của quân Giải phóng miền Nam và quân đội nhân dân Việt Nam trong cuộc kháng chiến chống Mỹ, cứu nước, diễn ra từ ngày 30/3/1972 đến đầu năm 1973.',
            footnote_ja: '1. 1972年春夏作戦は、抗米救国戦争における南ベトナム解放軍とベトナム人民軍の最大規模の軍事作戦の一つで、1972年3月30日から1973年初めまで行われた。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        },
        {
            id: '1972t',
            modalImg: 'assets/images/1971_1973/1972_TB2_B52ThaBom.jpg',
            modalImgAlt: 'Máy bay B-52 trút bom (Nguồn: Báo Quân đội nhân dân)',
            modalImgAlt_ja: '爆弾を投下するB-52爆撃機（出典：Quan doi nhan dan紙）',
            caption: 'Máy bay B-52 trút bom (Nguồn: Báo Quân đội nhân dân)',
            caption_ja: '爆弾を投下するB-52爆撃機（出典：Quan doi nhan dan紙）',

            title: 'Cảnh báo sớm chiến dịch Linebacker I',
            title_ja: 'ラインバッカーI作戦に関する早期警告',
            date: 'Năm 1972',
            date_ja: '1972年',

            text1: 'Năm 1972, khi đàm phán Paris ngưng trệ, Mỹ mở Chiến dịch Linebacker I⁽¹⁾ ném bom trở lại miền Bắc nhằm cứu vãn tình thế của quân Việt Nam Cộng hòa và tăng sức ép buộc phía cách mạng nhượng bộ trên bàn đàm phán.',
            text1_ja: '1972年、パリ交渉が停滞する中、アメリカはベトナム共和国軍の劣勢を挽回し、交渉の場で革命側に譲歩を迫る圧力を強めるため、北ベトナムへの爆撃を再開するラインバッカーI作戦⁽¹⁾を開始した。',

            // ── ẢNH CHÈN GIỮA NỘI DUNG ──
            midImg: {
                src: 'assets/images/1971_1973/1972_Line.jpg',
                alt: 'Lực lượng cách mạng chuẩn bị tên lửa phòng không để đánh trả máy bay Mỹ năm 1972 (Nguồn: Báo Quân đội nhân dân)',
                alt_ja: '1972年、アメリカ軍機を迎え撃つため防空ミサイルを準備する革命勢力（出典：Quan doi nhan dan紙）',
                caption: 'Lực lượng cách mạng chuẩn bị tên lửa phòng không để đánh trả máy bay Mỹ năm 1972 (Nguồn: Báo Quân đội nhân dân)',
                caption_ja: '1972年、アメリカ軍機を迎え撃つため防空ミサイルを準備する革命勢力（出典：Quan doi nhan dan紙）'
            },

            text2: 'Nhờ các mối liên hệ thân thiết trong CIO, Phạm Xuân Ẩn đã nắm được ý đồ quân sự của Mỹ.',
            text2_ja: 'CIO内部との親しいつながりを通じて、ファム・スアン・アンはアメリカの軍事的意図を把握した。',

            text3: 'Ẩn đã gửi báo cáo khẩn cảnh báo sớm việc Mỹ chuẩn bị dùng máy bay cường kích và bom dẫn đường laser đánh phá đường sá, cầu cống, đường sắt, căn cứ quân sự và kho bãi hậu cần ở miền Bắc.',
            text3_ja: 'アンは、アメリカが攻撃機とレーザー誘導爆弾を用いて北ベトナムの道路、橋梁、鉄道、軍事基地、補給倉庫を爆撃する準備を進めていることを早期に警告する緊急報告を送った。',

            text4: 'Nhờ những thông tin cảnh báo sớm này, hậu phương miền Bắc và lực lượng Phòng không - Không quân chủ động sơ tán, chuẩn bị phương án đối phó.',
            text4_ja: 'これらの早期警告の情報により、北ベトナムの後方と防空・空軍は事前に疎開を行い、対策を準備することができた。',

            footnote: '1. Chiến dịch Linebacker I là chiến dịch ném bom và phong tỏa bằng thủy lôi của Mỹ vào miền Bắc Việt Nam năm 1972.',
            footnote_ja: '1. ラインバッカーI作戦は、1972年にアメリカが北ベトナムに対して行った爆撃と機雷による封鎖の作戦である。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ],

    // ==========================================================================
    // 2. NHÁNH NHÀ BÁO — NỬA DƯỚI (id: '1972b') — MẢNG CÓ 1 OBJECT (LAYOUT 1 CỘT)
    // ==========================================================================
    bot: [
        {
            id: '1972b',
            modalImg: 'assets/images/1971_1973/1972_NB_PXAxRobert.jpg',
            modalImgAlt: 'Phạm Xuân Ẩn (người thứ hai từ bên trái) trao đổi với Robert Shaplen (người thứ ba từ bên trái) và những người bạn (Nguồn: nhiếp ảnh gia Richard Avedon )',
            modalImgAlt_ja: 'ファム・スアン・アン（左から2番目）が、ボブ・シャプレン（左から3番目）や友人たちと話している（出典：Richard Avedon）',
            caption: 'Phạm Xuân Ẩn (người thứ hai từ bên trái) trao đổi với Robert Shaplen (người thứ ba từ bên trái) và những người bạn (Nguồn: nhiếp ảnh gia Richard Avedon )',
            caption_ja: 'ファム・スアン・アン（左から2番目）が、ボブ・シャプレン（左から3番目）や友人たちと話している（出典：Richard Avedon）',

            title: 'Cuộc trao đổi với Robert (Bob) Shaplen (The New Yorker)',
            title_ja: 'ボブ・シャプレン（『ザ・ニューヨーカー』誌）との対話',
            date: 'Năm 1972',
            date_ja: '1972年',

            text1: 'Năm 1972, Phạm Xuân Ẩn trao đổi với Robert (Bob) Shaplen, phóng viên khu vực Viễn Đông của tạp chí The New Yorker từ năm 1962 đến năm 1978 và là một trong những người bạn làm báo của ông.',
            text1_ja: '1972年、ファム・スアン・アンは、1962年から1978年まで『ザ・ニューヨーカー』誌の極東特派員を務め、自身の記者仲間の一人でもあったボブ・シャプレンと意見を交わした。',

            text2: 'Ẩn cho rằng chính quyền Mỹ và Tổng thống Thiệu đã sai lầm khi cố nhấn mạnh sự tàn khốc của đợt tấn công năm 1972 để lên án quân Giải phóng. Theo ông, cách làm này “chỉ khiến cho nhân dân Mỹ thêm hoảng sợ và dồn Tổng thống Nixon đến bờ vực” ngay trước bầu cử Tổng thống Mỹ tháng 11/1972.',
            text2_ja: 'アンは、アメリカ政府とティエウ大統領が解放軍を非難するために1972年の攻勢の残虐さを強調しようとしたのは誤りだったと考えていた。アンによれば、このやり方は1972年11月のアメリカ大統領選挙の直前にあって、「アメリカ国民をいっそう恐怖に陥れ、ニクソン大統領を窮地に追い込むだけ」であった。',

            text3: 'Năm 1972, trên tạp chí The New Yorker, nhà báo Robert Shaplen đã công khai ca ngợi ông Phạm Xuân Ẩn là "người Việt làm báo chăm chỉ nhất và được nhiều người kính trọng nhất".',
            text3_ja: '1972年、記者のボブ・シャプレンは『ザ・ニューヨーカー』誌の紙面で、ファム・スアン・アンを「最も勤勉で、最も多くの人々から尊敬を集めるベトナム人記者」と公然と称賛した。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ]
};

// ==============================================================================
// TỰ ĐỘNG HÒA TRỘN DỮ LIỆU NĂM 1972 VÀO window.TIMELINE_DATA
// ==============================================================================
(function mergeExtraData1972() {
    function applyBranch(branchKey, defaultId) {
        if (!window.TIMELINE_DATA || !window.EXTRA_DATA_1972) return;
        const branchData = window.EXTRA_DATA_1972[branchKey];
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
                delete ev.imgs;
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
        applyBranch('top', '1972t');
        applyBranch('bot', '1972b');
    }

    if (window.TIMELINE_DATA) {
        doMerge();
    } else {
        document.addEventListener('DOMContentLoaded', doMerge);
    }
})();
