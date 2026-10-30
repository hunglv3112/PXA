/**
 * ==============================================================================
 * DỮ LIỆU MỞ RỘNG — NĂM 1972 (data/1972/data_1972.js)
 * ==============================================================================
 * Quản lý toàn bộ dữ liệu năm 1972 cho cả 2 nửa trên Timeline:
 *   1. top: Nhánh TÌNH BÁO (id: '1972t') — 2 sự kiện (layout chia 2, có midImg & footnotes)
 *   2. bot: Nhánh NHÀ BÁO  (id: '1972b') — 2 sự kiện (layout chia 2)
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
            modalImgAlt: 'Quân giải phóng chiến đấu bảo vệ Thành cổ Quảng Trị năm 1972 (Nguồn: Báo Biên phòng)',
            modalImgAlt_ja: '1972年、クアンチ古城防衛戦を戦う解放軍戦士たち（国境警備新聞）',
            caption: 'Quân giải phóng chiến đấu bảo vệ Thành cổ Quảng Trị năm 1972 (Nguồn: Báo Biên phòng)',
            caption_ja: '1972年、クアンチ古城防衛戦を戦う解放軍戦士たち（国境警備新聞）',

            title: 'Cuộc tiến công chiến lược Xuân – Hè 1972',
            title_ja: '1972年春夏戦略攻勢と敵軍配置の偵察分析',
            date: 'Ngày 30/03/1972',
            date_ja: '1972年3月30日',

            text1: 'Ngày 30/3/1972, Quân Giải phóng mở tiến công chiến dịch Xuân – Hè 1972(*) đánh vào các vùng Quảng Trị, Tây Nguyên và Đông Nam Bộ. Phía Mỹ và Chính quyền Việt Nam Cộng hòa bị bất ngờ về thời điểm, quy mô và hướng tiến công chính.',
            text1_ja: '1972年3月30日、解放軍はクアンチ、中部高原、東南部において「1972年春夏戦略攻勢」（*）を開始。米軍および南ベトナム政権は攻勢の開始時期、規模、主攻撃軸すべてにおいて完全に不意を突かれました。',

            text2: 'Phạm Xuân Ẩn dùng thẻ nhà báo Time để tiếp cận Bộ Tổng Tham mưu QĐVNCH, trụ sở MACV của Đại tướng Creighton Abrams và các buổi họp báo Five O’Clock Follies. Từ đó, ông khai thác tin tức thực địa từ các cố vấn quân sự Mỹ.',
            text2_ja: 'ファム・スアン・アンはタイム誌記者証を駆使して南ベトナム軍総参謀部、クレイトン・エイブラムス将軍のMACV本部、および毎日17時の公式記者会見「ファイブ・オクロック・フォリーズ」へ出入りし、米軍事顧問団から最前線の実態情報を巧みに聞き出しました。',

            text3: 'Ông cung cấp các phân tích về sự suy sụp của Quân đoàn II Quân Việt Nam Cộng hòa, kế hoạch điều động địa phương quân của Thiếu tướng Ngô Du (Tư lệnh Quân đoàn II), và mức tổn thất nặng của Binh chủng Nhảy dù và Thủy quân lục chiến. Các báo cáo này cho thấy lực lượng đối phương bị dàn mỏng. Nhờ đó, Bộ Chính trị và Quân ủy Trung ương đã kịp thời chỉ đạo phương án phối hợp trên các chiến trường.',
            text3_ja: '彼は南ベトナム第2軍団の士気崩壊、軍団長ゴー・ズー少将による地方部隊再編計画、さらには精鋭空挺部隊や海兵隊の甚大な損害状況を分析報告。敵戦力が広大な戦線で過度に薄まっている事実を浮き彫りにし、政治局と中央軍事委員会が各戦域間の有機的協調作戦を機敏に下すための決定打となりました。',

            // ── ẢNH CHÈN GIỮA NỘI DUNG ──
            midImg: {
                src: 'assets/images/1971_1973/1972_TB1_NuCuoi.jpg',
                alt: 'Bức ảnh nổi tiếng “Nụ cười chiến thắng” của quân Giải phóng dưới chân Thành cổ Quảng Trị (Nguồn: Đoàn Công Tính)',
                alt_ja: 'クアンチ古城の足元で撮影された解放軍の有名な「勝利の笑顔」（ドアン・コン・ティン撮影）',
                caption: 'Bức ảnh nổi tiếng “Nụ cười chiến thắng” của quân Giải phóng dưới chân Thành cổ Quảng Trị (Nguồn: Đoàn Công Tính)',
                caption_ja: 'クアンチ古城の足元で撮影された解放軍の有名な「勝利の笑顔」（ドアン・コン・ティン撮影）'
            },

            footnote: '(*) Chiến dịch Xuân - Hè 1972 là một trong những chiến dịch quân sự lớn nhất của Quân Giải phóng trong cuộc kháng chiến chống Mỹ, cứu nước kéo dài từ ngày 30/3/1972 đến đầu năm 1973.',
            footnote_ja: '(*) 1972年春夏戦役（グエン・フエ攻勢）：1972年3月30日から1973年初頭にかけて解放軍が展開した最大規模の戦略的攻勢の一つ。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        },
        {
            id: '1972t',
            modalImg: 'assets/images/1971_1973/1972_TB2_B52ThaBom.jpg',
            modalImgAlt: 'Máy bay b-52 trút bom (Nguồn: QĐNDVN)',
            modalImgAlt_ja: '爆弾を投下する米軍B-52戦略爆撃機（ベトナム人民軍新聞）',
            caption: 'Máy bay b-52 trút bom (Nguồn: QĐNDVN)',
            caption_ja: '爆弾を投下する米軍B-52戦略爆撃機（ベトナム人民軍新聞）',

            title: 'Cảnh báo sớm chiến dịch Linebacker I (*) và máy bay B-52 ra miền Bắc',
            title_ja: 'ラインバッカーI作戦とB-52北爆再開の早期警戒通報',
            date: 'Năm 1972',
            date_ja: '1972年',

            text1: 'Nhằm cứu vãn sự sụp đổ của Quân Việt Nam Cộng hòa và tăng sức ép buộc Quân Giải Phóng nhượng bộ trên bàn đàm phán Paris, Mỹ quyết định tạm dừng đàm phán, huy động tối đa hỏa lực không quân chiến lược mở Chiến dịch Linebacker I ném bom đánh phá trở lại miền Bắc.',
            text1_ja: '南ベトナム軍の壊滅を防ぎ、パリ和平交渉で解放軍に妥協を強いるため、米国は交渉を一時中断。戦略航空火力を最大限に結集して北ベトナムへの再空爆作戦「ラインバッカーI」（*）を発動しました。',

            text2: 'Phạm Xuân Ẩn đã tiếp cận, khai thác nhanh ý đồ quân sự thông qua các sĩ quan tham mưu cấp cao tại MACV và các mối liên hệ thân cận trong Phủ Đặc ủy Trung ương Tình báo (CIO) Sài Gòn.',
            text2_ja: 'ファム・スアン・アンはMACVの高級参謀将校やサイゴン中央情報局（CIO）内の腹心ルートを通じ、米軍の軍事作戦計画を迅速に察知・入手しました。',

            // ── ẢNH CHÈN GIỮA NỘI DUNG ──
            midImg: {
                src: 'assets/images/1971_1973/1972_BachMai.jpg',
                alt: 'Cảnh đổ nát tại Bệnh viện Bạch Mai sau khi bị B52 Mỹ dội bom, 22/12/1972 (Nguồn: Chu Chí Thành)',
                alt_ja: '1972年12月22日、米B-52の空爆を受け廃墟と化したバックマイ病院（チュ・チ・タイン撮影）',
                caption: 'Cảnh đổ nát tại Bệnh viện Bạch Mai sau khi bị B52 Mỹ dội bom, 22/12/1972 (Nguồn: Chu Chí Thành)',
                caption_ja: '1972年12月22日、米B-52の空爆を受け廃墟と化したバックマイ病院（チュ・チ・タイン撮影）'
            },

            text3: 'Ẩn đã gửi báo cáo khẩn cảnh báo sớm về việc Mỹ chuẩn bị dùng máy bay ném bom chiến lược B-52, bom thông minh dẫn đường laser và máy bay cường kích đánh phá ác liệt hệ thống cầu cống, kho tàng hậu cần, đường giao thông ở miền Bắc.',
            text3_ja: 'アンは、米国が戦略爆撃機B-52、レーザー誘導スマート爆弾、最新鋭攻撃機を投入し、北部の橋梁、兵站基地、交通網を壊滅させる作戦を準備している旨の緊急警報を急送しました。',

            text4: 'Tin tức giúp hậu phương miền Bắc và lực lượng Phòng không - Không quân chủ động sơ tán, chuẩn bị phương án đối phó.',
            text4_ja: 'この先見情報は、北ベトナムの後方基地および防空・空軍部隊が事前に住民疎開を完了させ、万全の迎撃態勢を構築する上で決定的な役割を果たしました。',

            footnote: '(*) Chiến dịch Linebacker I là chiến dịch ném bom và phong tỏa bằng thủy lôi của Mỹ vào miền Bắc Việt Nam năm 1972.',
            footnote_ja: '(*) ラインバッカーI作戦：1972年に米軍が北ベトナムに対して展開した大規模爆撃および機雷封鎖作戦。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ],

    // ==========================================================================
    // 2. NHÁNH NHÀ BÁO — NỬA DƯỚI (id: '1972b') — MẢNG CÓ 2 OBJECT (CHIA 2)
    // ==========================================================================
    bot: [
        {
            id: '1972b',
            modalImg: 'assets/images/1971_1973/1972_NB_PXAxRobert.jpg',
            modalImgAlt: 'Phạm Xuân Ẩn (người thứ hai từ bên trái) trao đổi với Robert Shaplen (người thứ ba từ bên trái) và những người bạn (Nguồn: Richard Avedon)',
            modalImgAlt_ja: 'ロバート・シャプレン（左から3人目）らと歓談するファム・スアン・アン（左から2人目）（リチャード・アヴェドン撮影）',
            caption: 'Phạm Xuân Ẩn (người thứ hai từ bên trái) trao đổi với Robert Shaplen (người thứ ba từ bên trái) và những người bạn (Nguồn: Richard Avedon)',
            caption_ja: 'ロバート・シャプレン（左から3人目）らと歓談するファム・スアン・アン（左から2人目）（リチャード・アヴェドン撮影）',

            title: 'Cuộc trao đổi đòn tâm lý với Robert Shaplen (The New Yorker)',
            title_ja: '『ニューヨーカー』誌ロバート・シャプレンとの心理戦',
            date: 'Năm 1972',
            date_ja: '1972年',

            text1: 'Năm 1972, Phạm Xuân Ẩn trao đổi với Robert Shaplen, cây bút lão thành của tạp chí The New Yorker, người được báo chí phương Tây coi là “tượng đài báo chí Mỹ tại Đông Nam Á”.',
            text1_ja: '1972年、ファム・スアン・アンは欧米報道界で「東南アジアにおける米報道界の生きた記念碑」と称された『ニューヨーカー』誌の重鎮記者ロバート・シャプレンと深い議論を交わしました。',

            text2: 'Ẩn cho rằng chính quyền Mỹ và Tổng thống Thiệu đã sai lầm khi cố nhấn mạnh sự tàn khốc của đợt tấn công để lên án quân Giải Phóng. Theo ông, cách làm này “chỉ khiến cho nhân dân Mỹ thêm hoảng sợ và dồn Tổng thống Nixon đến bờ vực” ngay trước bầu cử Tổng thống Mỹ tháng 11/1972.',
            text2_ja: 'アンは「米政権とティウ大統領が攻勢の凄惨さを針小棒大に強調して解放軍を非難しようとするのは重大な失策である。それは米国民の恐怖と反戦感情を煽り、1972年11月の大統領選を控えたニクソン大統領を破滅の淵に追い込むだけだ」と鋭く心理的急所を突きました。',

            text3: 'Ngay trong năm 1972, trên mặt báo tạp chí The New Yorker, nhà báo Robert Shaplen đã công khai ca ngợi ông Phạm Xuân Ẩn là "người Việt làm báo chăm chỉ nhất và được nhiều người kính trọng nhất".',
            text3_ja: '同年、シャプレンは『ニューヨーカー』誌上で、ファム・スアン・アンを「最も勤勉で、誰からも最も深く敬愛されているベトナム人ジャーナリスト」と公然と賞賛しました。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        },
        {
            id: '1972b',
            modalImg: 'assets/images/1971_1973/1972_NB_PXATrai.jpg',
            modalImgAlt: 'Phạm Xuân Ẩn (ngoài cùng bên trái) và các nhà báo đồng nghiệp quốc tế (Nguồn: Một người Việt trầm lặng - Trang 107)',
            modalImgAlt_ja: '国際特派員の同僚たちと並ぶファム・スアン・アン（一番左）（『物静かなるベトナム人』107頁）',
            caption: 'Phạm Xuân Ẩn (ngoài cùng bên trái) và các nhà báo đồng nghiệp quốc tế (Nguồn: Một người Việt trầm lặng - Trang 107)',
            caption_ja: '国際特派員の同僚たちと並ぶファム・スアン・アン（一番左）（『物静かなるベトナム人』107頁）',

            title: 'Dẫn đường cho nhà báo giới phương Tây tiếp cận thực tế',
            title_ja: '欧米報道陣をサイゴン近郊の前線実態へ案内',
            date: 'Tháng 11/1972',
            date_ja: '1972年11月',

            text1: 'Tháng 11/1972, giữa lúc đàm phán Paris của Henry Kissinger và Tổng thống Nguyễn Văn Thiệu rơi vào căng thẳng, Lộc "bẩy" (người môi giới tin tức) đã đề xuất và trực tiếp dẫn đường cho một nhóm nhà báo quốc tế ra vùng ven Sài Gòn lúc chập tối. Nhóm khảo sát gồm Jean-Claude Pomonti (Le Monde), Marcel Giuglaris (France Soir), Ron Moreau (Newsweek), Daniel Southerland (The Christian Science Monitor) cùng Cao Giao và Vượng. Chuyến đi giúp báo giới phương Tây chứng kiến thực tế sự hiện diện của lực lượng Giải phóng ngay sát cửa ngõ Sài Gòn.',
            text1_ja: '1972年11月、キッシンジャーとティウ大統領の協議が緊迫する中、情報仲介者のロク・バイが提案し、日没時にサイゴン近郊へ海外特派員団を直接案内しました。視察団にはジャン＝クロード・ポモンティ（ル・モンド）、マルセル・ジグラリス（フランス・ソワール）、ロン・モロー（ニューズウィーク）、ダニエル・サザーランド（クリスチャン・サイエンス・モニター）らが参加。欧米報道陣にサイゴンの門前にまで迫る解放軍の厳然たる実勢を直に見せつけました。',

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
