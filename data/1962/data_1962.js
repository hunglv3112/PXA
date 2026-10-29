/**
 * ==============================================================================
 * DỮ LIỆU MỞ RỘNG — NĂM 1962 (data/1962/data_1962.js)
 * ==============================================================================
 * Quản lý toàn bộ dữ liệu năm 1962 cho cả 2 nửa trên Timeline:
 *   1. top: Nhánh TÌNH BÁO (id: '1962t') — 1 sự kiện (layout 1 cột, có nhiều midImg)
 *   2. bot: Nhánh NHÀ BÁO  (id: '1962b') — 1 sự kiện (layout 1 cột)
 * ==============================================================================
 */

window.EXTRA_DATA_1962 = {

    // ==========================================================================
    // 1. NHÁNH TÌNH BÁO — NỬA TRÊN (id: '1962t') — MẢNG CÓ 1 OBJECT (LAYOUT 1 CỘT)
    // ==========================================================================
    top: [
        {
            id: '1962t',
            modalImg: 'assets/images/1960_1963/1962_N_VNCHxMy.jpg',
            modalImgAlt: 'Quân Việt Nam Cộng hòa và trực thăng Mỹ năm 1962 (Nguồn: The60sat50)',
            modalImgAlt_ja: '南ベトナム軍と米軍ヘリコプター、1962年（The60sat50）',
            caption: 'Quân Việt Nam Cộng hòa và trực thăng Mỹ năm 1962 (Nguồn: The60sat50)',
            caption_ja: '南ベトナム軍と米軍ヘリコプター、1962年（The60sat50）',

            title: 'Thu thập Kế hoạch quân sự Harkins - McGarr',
            title_ja: 'ハーキンス・マクガー軍事計画の解読',
            date: 'Năm 1962',
            date_ja: '1962年',

            text1: 'Ngày 8/2/1962, Mỹ thành lập Bộ Tư lệnh Viện trợ Quân sự Mỹ tại Việt Nam (MACV) nhằm tăng cường chỉ huy và phối hợp hoạt động quân sự tại miền Nam Việt Nam.',
            text1_ja: '1962年2月8日、米国は南ベトナムにおける軍事作戦の統合指揮と連携を強化するため、米軍事援助司令部（MACV）を設立しました。',

            // ── ẢNH CHÈN SAU ĐOẠN 1 ──
            midImg1: {
                src: 'assets/images/1960_1963/1962_PH.jpg',
                alt: 'Paul Harkins khảo sát vùng đồng bằng Việt Nam ngày 14/4/1962 (Nguồn: Harry S. Truman Presidential Library & Museum)',
                alt_ja: 'メコンデルタ地帯を視察するポール・ハーキンス大将、1962年4月14日（トルーマン大統領図書館）',
                caption: 'Paul Harkins khảo sát vùng đồng bằng Việt Nam ngày 14/4/1962 (Nguồn: Harry S. Truman Presidential Library & Museum)',
                caption_ja: 'メコンデルタ地帯を視察するポール・ハーキンス大将、1962年4月14日（トルーマン大統領図書館）'
            },

            text2: 'Trong thời gian này, Tướng Paul Harkins tiếp tục phát triển các biện pháp quân sự chống lực lượng cách mạng trên cơ sở những kế hoạch trước đó của Tướng Lionel McGarr.',
            text2_ja: 'この時期、MACV初代司令官ポール・ハーキンス大将は、ライオネル・マクガー少将の以前の計画を基盤として、革命勢力に対する軍事的対抗措置を一段と強化・発展させました。',

            // ── ẢNH CHÈN SAU ĐOẠN 2 ──
            midImg2: {
                src: 'assets/images/1960_1963/1962_LM.jpg',
                alt: 'Lionel McGarr chụp tại Việt Nam ngày 4/9/1960 (Nguồn: Harry S. Truman Presidential Library & Museum)',
                alt_ja: 'ベトナム現地でのライオネル・マクガー少将、1960年9月4日（トルーマン大統領図書館）',
                caption: 'Lionel McGarr chụp tại Việt Nam ngày 4/9/1960 (Nguồn: Harry S. Truman Presidential Library & Museum)',
                caption_ja: 'ベトナム現地でのライオネル・マクガー少将、1960年9月4日（トルーマン大統領図書館）'
            },

            text3: 'Các hoạt động quân sự tập trung vào việc tăng cường lực lượng, vũ khí và sử dụng những chiến thuật như trực thăng vận và thiết xa vận. Đây là các phương thức tác chiến sử dụng trực thăng và xe thiết giáp để vận chuyển, hỗ trợ lực lượng trong các cuộc hành quân.',
            text3_ja: '軍事作戦は部隊規模と火力の増強、ならびに「ヘリコプター空輸戦術（ヘリボーン）」や「装甲車輸送戦術」の本格導入に集中しました。これらはヘリコプターと装甲兵員輸送車を用いて機動力を最大化し、迅速な強襲と展開を可能にする最新戦術でした。',

            // ── ẢNH CHÈN SAU ĐOẠN 3 ──
            midImg3: {
                src: 'assets/images/1960_1963/1962_TrucThangVan.jpg',
                alt: 'Chiến thuật "trực thăng vận" của Mỹ trong trận Ấp Bắc (Nguồn: QDND)',
                alt_ja: 'アプバクの戦いにおける米軍のヘリコプター空輸戦術（人民軍新聞）',
                caption: 'Chiến thuật "trực thăng vận" của Mỹ trong trận Ấp Bắc (Nguồn: QDND)',
                caption_ja: 'アプバクの戦いにおける米軍のヘリコプター空輸戦術（人民軍新聞）'
            },

            text4: 'Thông qua mạng lưới quan hệ của mình, Phạm Xuân Ẩn thu thập và chuyển về cơ quan chỉ huy tình báo những thông tin liên quan đến tổ chức quân đội Sài Gòn, trang bị quân sự và phương thức tác chiến của Mỹ.',
            text4_ja: '独自の幅広い人脈を通じて、ファム・スアン・アンはサイゴン軍の編制、最新装備、そして米軍の作戦ドクトリンに関する核心情報を綿密に収集し、情報司令部へと送達し続けました。',

            text5: 'Về quân sự, các thông tin gồm việc tăng quân số và tổ chức lực lượng của quân đội Sài Gòn, các loại vũ khí và trang bị mới, cùng các chiến thuật mới như trực thăng vận và thiết xa vận M113.',
            text5_ja: '軍事情報には、サイゴン軍の兵力増員や再編計画、新型兵器の配備状況、さらにはヘリボーン戦術やM113装甲兵員輸送車を活用した機動戦術の詳細が含まれていました。',

            // ── ẢNH CHÈN SAU ĐOẠN 5 ──
            midImg5: {
                src: 'assets/images/1960_1963/1962_M113.jpg',
                alt: 'Xe thiết giáp chở quân M113 (Nguồn: Flickr)',
                alt_ja: '装甲兵員輸送車 M113（Flickr）',
                caption: 'Xe thiết giáp chở quân M113 (Nguồn: Flickr)',
                caption_ja: '装甲兵員輸送車 M113（Flickr）'
            },

            text6: 'Ngoài thông tin quân sự, ông còn theo dõi hoạt động tình báo của Mỹ, những bất đồng giữa phía Mỹ và chính quyền Ngô Đình Diệm, cùng các mâu thuẫn trong nội bộ chính quyền Sài Gòn.',
            text6_ja: '軍事情報にとどまらず、彼は米情報機関の動向、米側とゴ・ディン・ジエム政権の間の軋轢、さらにはサイゴン政権内部の派閥対立についても鋭い分析を送り続けました。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ],

    // ==========================================================================
    // 2. NHÁNH NHÀ BÁO — NỬA DƯỚI (id: '1962b') — MẢNG CÓ 1 OBJECT (LAYOUT 1 CỘT)
    // ==========================================================================
    bot: [
        {
            id: '1962b',
            modalImg: 'assets/images/1960_1963/1962_NB_NickPeter.jpg',
            modalImgAlt: 'Hai phóng viên Reuters Nick Turner (thứ ba, bên phải sang) và Peter Smark (ngoài cùng bên phải) (Nguồn: Điệp Viên Hoàn Hảo - Trang 162)',
            modalImgAlt_ja: 'ロイター通信のニック・ターナー（右から3人目）とピーター・スマーク（一番右）（『パーフェクト・スパイ』162頁）',
            caption: 'Hai phóng viên Reuters Nick Turner (thứ ba, bên phải sang) và Peter Smark (ngoài cùng bên phải) (Nguồn: Điệp Viên Hoàn Hảo - Trang 162)',
            caption_ja: 'ロイター通信のニック・ターナー（右から3人目）とピーター・スマーク（一番右）（『パーフェクト・スパイ』162頁）',

            title: 'Hợp tác cùng các phóng viên quốc tế tại Reuters',
            title_ja: 'ロイター特派員としての国際報道連携',
            date: 'Năm 1962',
            date_ja: '1962年',

            text1: 'Tháng 5/1962, Nick Turner, một nhà báo người New Zealand, thay Peter Smark phụ trách hoạt động của Reuters tại Sài Gòn.',
            text1_ja: '1962年5月、ニュージーランド出身の敏腕記者ニック・ターナーがピーター・スマークの後任としてロイター・サイゴン支局長に着任しました。',

            text2: 'Phạm Xuân Ẩn tiếp tục làm việc tại Reuters và hỗ trợ Turner trong việc thu thập, dịch thuật và giải thích các thông tin liên quan đến tình hình Việt Nam.',
            text2_ja: 'ファム・スアン・アンはロイターでの勤務を継続し、ベトナム情勢に関する情報収集、翻訳、深層背景の解説においてターナーを全面的に支えました。',

            text3: 'Nhờ khả năng sử dụng tiếng Anh, kiến thức về chính trị và mạng lưới quan hệ rộng, ông trở thành một người cộng tác quan trọng trong hoạt động đưa tin của Reuters.',
            text3_ja: '完璧な英語運用能力、卓越した政治的洞察力、そして政財界・軍部に及ぶ広大な人脈により、アンはロイターの報道活動に欠かせない最重要スタッフとなりました。',

            text4: 'Turner đánh giá cao hiểu biết và khả năng phân tích của Phạm Xuân Ẩn. Ông thường dựa vào Phạm Xuân Ẩn để tìm hiểu các vấn đề chính trị và diễn biến chiến sự tại Việt Nam.',
            text4_ja: 'ターナーはアンの知識と分析力を絶賛し、ベトナムの複雑な政局や戦況の推移を正確に読み解くために、常にアンの見解に依存していました。',

            text5: 'Công việc này tiếp tục giúp Phạm Xuân Ẩn duy trì các mối quan hệ với giới báo chí quốc tế và những người cung cấp thông tin tại Sài Gòn.',
            text5_ja: 'この職務を通じて、ファム・スアン・アンは国際メディア界のトップ記者たちやサイゴンの重要情報源との緊密なパイプを強固に保ち続けました。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ]
};

// ==============================================================================
// TỰ ĐỘNG HÒA TRỘN DỮ LIỆU NĂM 1962 VÀO window.TIMELINE_DATA
// ==============================================================================
(function mergeExtraData1962() {
    function applyBranch(branchKey, defaultId) {
        if (!window.TIMELINE_DATA || !window.EXTRA_DATA_1962) return;
        const branchData = window.EXTRA_DATA_1962[branchKey];
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
        applyBranch('top', '1962t');
        applyBranch('bot', '1962b');
    }

    if (window.TIMELINE_DATA) {
        doMerge();
    } else {
        document.addEventListener('DOMContentLoaded', doMerge);
    }
})();
