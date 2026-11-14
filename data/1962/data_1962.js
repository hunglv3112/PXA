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
            modalImgAlt_ja: '1962年のベトナム共和国軍とアメリカのヘリコプター（出典：The60sat50）',
            caption: 'Quân Việt Nam Cộng hòa và trực thăng Mỹ năm 1962 (Nguồn: The60sat50)',
            caption_ja: '1962年のベトナム共和国軍とアメリカのヘリコプター（出典：The60sat50）',

            title: 'Thu thập thông tin liên quan đến Kế hoạch quân sự Harkins - McGarr',
            title_ja: 'ハーキンズ・マクガー軍事計画に関する情報の収集',
            date: 'Năm 1962',
            date_ja: '1962年',

            text1: 'Ngày 8/2/1962, Mỹ thành lập Bộ Tư lệnh Viện trợ Quân sự Mỹ tại Việt Nam (MACV) nhằm tăng cường chỉ huy và phối hợp hoạt động quân sự tại miền Nam Việt Nam.',
            text1_ja: '1962年2月8日、アメリカはベトナム南部における軍事活動の指揮と調整を強化するため、アメリカベトナム援助軍司令部（MACV）を設立した。',

            // ── ẢNH CHÈN SAU ĐOẠN 1 ──
            midImg1: {
                src: 'assets/images/1960_1963/1962_PH.jpg',
                alt: 'Paul Harkins khảo sát vùng đồng bằng Việt Nam ngày 14/4/1962 (Nguồn: Harry S. Truman Presidential Library & Museum)',
                alt_ja: '1962年4月14日、ベトナムのデルタ地帯を視察するポール・ハーキンズ（出典：Harry S. Truman Presidential Library & Museum）',
                caption: 'Paul Harkins khảo sát vùng đồng bằng Việt Nam ngày 14/4/1962 (Nguồn: Harry S. Truman Presidential Library & Museum)',
                caption_ja: '1962年4月14日、ベトナムのデルタ地帯を視察するポール・ハーキンズ（出典：Harry S. Truman Presidential Library & Museum）'
            },

            text2: 'Trong thời gian này, Tướng Paul Harkins⁽¹⁾ tiếp tục phát triển các biện pháp quân sự chống lực lượng cách mạng trên cơ sở những kế hoạch trước đó của Tướng Lionel McGarr.',
            text2_ja: 'この時期、ポール・ハーキンズ将軍⁽¹⁾は、ライオネル・マクガー将軍のそれ以前の計画をもとに、革命勢力に対する軍事的措置を引き続き発展させた。',

            // ── ẢNH CHÈN SAU ĐOẠN 2 ──
            midImg2: {
                src: 'assets/images/1960_1963/1962_LM.jpg',
                alt: 'Lionel McGarr chụp tại Việt Nam ngày 4/9/1960 (Nguồn: Harry S. Truman Presidential Library & Museum)',
                alt_ja: '1960年9月4日、ベトナムで撮影されたライオネル・マクガー（出典：Harry S. Truman Presidential Library & Museum）',
                caption: 'Lionel McGarr chụp tại Việt Nam ngày 4/9/1960 (Nguồn: Harry S. Truman Presidential Library & Museum)',
                caption_ja: '1960年9月4日、ベトナムで撮影されたライオネル・マクガー（出典：Harry S. Truman Presidential Library & Museum）'
            },

            text3: 'Các hoạt động quân sự tập trung vào việc tăng cường lực lượng, vũ khí và sử dụng những chiến thuật như "trực thăng vận" (dùng trực thăng để vận chuyển, đổ quân) và "thiết xa vận" (cho bộ binh ngồi trên xe tăng để cơ động).',
            text3_ja: '軍事活動は、兵力と兵器の増強、そして「ヘリボーン」戦術〔ヘリコプターを中心とした空中機動作戦〕や「タンクデサント」戦術〔歩兵を戦車の上に乗せ移動する作戦〕といった戦術の使用に重点が置かれた。',

            // ── ẢNH CHÈN SAU ĐOẠN 3 ──
            midImg3: {
                src: 'assets/images/1960_1963/1962_TrucThangVan.jpg',
                alt: 'Chiến thuật "trực thăng vận" của Mỹ trong trận Ấp Bắc (Nguồn: Báo Quân đội nhân dân)',
                alt_ja: 'アプバックの戦いにおけるアメリカの「ヘリボーン」戦術（出典：Quan doi nhan dan紙）',
                caption: 'Chiến thuật "trực thăng vận" của Mỹ trong trận Ấp Bắc (Nguồn: Báo Quân đội nhân dân)',
                caption_ja: 'アプバックの戦いにおけるアメリカの「ヘリボーン」戦術（出典：Quan doi nhan dan紙）'
            },

            text4: 'Thông qua mạng lưới quan hệ của mình, Phạm Xuân Ẩn thu thập và chuyển về cơ quan chỉ huy tình báo những thông tin liên quan đến tổ chức quân Việt Nam Cộng hòa, trang bị quân sự và phương thức tác chiến của Mỹ.',
            text4_ja: '自らの人脈を通じて、ファム・スアン・アンは、ベトナム共和国軍の編成、軍事装備、アメリカの戦闘方式に関する情報を収集し、諜報司令部へ送った。',

            text5: 'Về quân sự, các thông tin gồm việc tăng quân số và tổ chức lực lượng của quân Việt Nam Cộng hòa, các loại vũ khí và trang bị mới, cùng các chiến thuật mới như trực thăng vận và sử dụng xe thiết giáp M113.',
            text5_ja: '軍事面では、その情報には、ベトナム共和国軍の兵員の増加と兵力の編成、新型の兵器・装備、そして「ヘリボーン」戦術やM113装甲兵員輸送車の使用などの新たな戦術が含まれていた。',

            // ── ẢNH CHÈN SAU ĐOẠN 5 ──
            midImg5: {
                src: 'assets/images/1960_1963/1962_M113.jpg',
                alt: 'Xe thiết giáp chở quân M113 (Nguồn: Flickr)',
                alt_ja: 'M113装甲兵員輸送車（出典：Flickr）',
                caption: 'Xe thiết giáp chở quân M113 (Nguồn: Flickr)',
                caption_ja: 'M113装甲兵員輸送車（出典：Flickr）'
            },

            text6: 'Ngoài thông tin quân sự, ông còn theo dõi hoạt động tình báo của Mỹ, những bất đồng giữa phía Mỹ và chính quyền Ngô Đình Diệm, cùng các mâu thuẫn trong nội bộ chính quyền Sài Gòn.',
            text6_ja: '軍事情報のほか、アンはアメリカの諜報活動、アメリカ側とゴー・ディン・ジェム政権の間の意見の相違、そしてサイゴン政権内部の矛盾についても注視していた。',

            footnote: '1. Paul Harkins: Tướng Mỹ, Tư lệnh đầu tiên của MACV (nhiệm kỳ 1962–1964).',
            footnote_ja: '1. ポール・ハーキンズ：アメリカの将軍で、MACV初代司令官（在任1962～64年）。',

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
            modalImgAlt: 'Hai phóng viên Reuters Nick Turner (thứ ba từ phải sang) và Peter Smark (ngoài cùng bên phải) (Nguồn: Điệp viên hoàn hảo - Trang 162)',
            modalImgAlt_ja: 'ロイター通信の二人の記者、ニック・ターナー（右から3番目）とピーター・スマーク（右端）（出典：『完璧なスパイ』162ページ）',
            caption: 'Hai phóng viên Reuters Nick Turner (thứ ba từ phải sang) và Peter Smark (ngoài cùng bên phải) (Nguồn: Điệp viên hoàn hảo - Trang 162)',
            caption_ja: 'ロイター通信の二人の記者、ニック・ターナー（右から3番目）とピーター・スマーク（右端）（出典：『完璧なスパイ』162ページ）',

            title: 'Làm việc tại Reuters cùng Nick Turner',
            title_ja: 'ロイター通信でニック・ターナーとともに働く',
            date: 'Năm 1962',
            date_ja: '1962年',

            text1: 'Tháng 5/1962, Nick Turner, một nhà báo người New Zealand, thay Peter Smark phụ trách hoạt động của Reuters tại Sài Gòn.',
            text1_ja: '1962年5月、ニュージーランド人記者のニック・ターナーが、ピーター・スマークに代わってサイゴンにおけるロイター通信の業務の責任者となった。',

            text2: 'Phạm Xuân Ẩn tiếp tục làm việc tại Reuters và hỗ trợ Turner trong việc thu thập, dịch thuật và giải thích các thông tin liên quan đến tình hình Việt Nam.',
            text2_ja: 'ファム・スアン・アンは引き続きロイター通信で働き、ベトナム情勢に関する情報の収集、翻訳、解説においてターナーを補佐した。',

            text3: 'Nhờ khả năng sử dụng tiếng Anh, kiến thức về chính trị và mạng lưới quan hệ rộng, ông trở thành một người cộng tác quan trọng trong hoạt động đưa tin của Reuters.',
            text3_ja: '英語力、政治に関する知識、幅広い人脈により、アンはロイター通信の報道活動における重要な協力者となった。',

            text4: 'Turner đánh giá cao hiểu biết và khả năng phân tích của Phạm Xuân Ẩn. Ông thường dựa vào Phạm Xuân Ẩn để tìm hiểu các vấn đề chính trị và diễn biến chiến sự tại Việt Nam.',
            text4_ja: 'ターナーはファム・スアン・アンの知識と分析力を高く評価していた。ターナーは、ベトナムの政治問題や戦況の推移を理解するため、しばしばファム・スアン・アンを頼りにしていた。',

            text5: 'Công việc này tiếp tục giúp Phạm Xuân Ẩn duy trì các mối quan hệ với giới báo chí quốc tế và những người cung cấp thông tin tại Sài Gòn.',
            text5_ja: 'この仕事は、ファム・スアン・アンが国際的な報道関係者やサイゴンの情報提供者たちとの関係を維持するうえで、引き続き役立った。',

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
