/**
 * ==============================================================================
 * DỮ LIỆU MỞ RỘNG — NĂM 1961 (data/1961/data_1961.js)
 * ==============================================================================
 * Quản lý toàn bộ dữ liệu năm 1961 cho cả 2 nửa trên Timeline:
 *   1. top: Nhánh TÌNH BÁO (id: '1961t') — 2 sự kiện (layout chia 2)
 *   2. bot: Nhánh NHÀ BÁO  (id: '1961b') — 1 sự kiện (layout 1 cột)
 * ==============================================================================
 */

window.EXTRA_DATA_1961 = {

    // ==========================================================================
    // 1. NHÁNH TÌNH BÁO — NỬA TRÊN (id: '1961t') — MẢNG CÓ 2 OBJECT (CHIA 2)
    // ==========================================================================
    top: [
        {
            id: '1961t',
            modalImg: 'assets/images/1960_1963/1961_TB_MAAG.jpg',
            modalImgAlt: 'Cố vấn quân sự Mỹ thuộc MAAG tại miền Nam Việt Nam (Nguồn: TimeToast)',
            modalImgAlt_ja: '南ベトナムにおける米軍事援助顧問団（MAAG）の軍事顧問（TimeToast）',
            caption: 'Cố vấn quân sự Mỹ thuộc MAAG tại miền Nam Việt Nam (Nguồn: TimeToast)',
            caption_ja: '南ベトナムにおける米軍事援助顧問団（MAAG）の軍事顧問（TimeToast）',

            title: 'Thu thập tài liệu quân sự tối mật “Kỹ thuật và chiến thuật chống nổi dậy"',
            title_ja: '最高軍事機密文書「対反乱作戦の技術と戦術」の入手',
            date: 'Năm 1961',
            date_ja: '1961年',

            text1: 'Sau khi móc nối lại liên lạc tình báo, Phạm Xuân Ẩn đã gửi về căn cứ tài liệu quân sự mật “Kỹ thuật và chiến thuật chống nổi dậy” do Tướng Lionel McGarr, Chỉ huy trưởng MAAG, ban hành.',
            text1_ja: '情報網との連絡を再開した直後、ファム・スアン・アンは米軍事援助顧問団（MAAG）司令官ライオネル・マクガー少将が発令した機密軍事文書「対反乱作戦の技術と戦術」を根拠地に送達しました。',

            // ── ẢNH CHÈN SAU ĐOẠN 1 ──
            midImg1: {
                src: 'assets/images/1960_1963/1961_TB_Lionel.jpg',
                alt: 'Tướng Lionel C. McGarr - Chỉ huy trưởng MAAG (Nguồn: VeteranTributes)',
                alt_ja: 'ライオネル・C・マクガー少将 — MAAG司令官（VeteranTributes）',
                caption: 'Tướng Lionel C. McGarr - Chỉ huy trưởng MAAG (Nguồn: VeteranTributes)',
                caption_ja: 'ライオネル・C・マクガー少将 — MAAG司令官（VeteranTributes）'
            },

            text2: 'Tài liệu này cụ thể hóa kế hoạch “Chống nổi dậy” mà Hội đồng An ninh Quốc gia Mỹ phê duyệt ngày 29/4/1961, theo đó Mỹ tăng cường lực lượng cố vấn, đơn vị đặc biệt và viện trợ quân sự cho chính quyền Sài Gòn.',
            text2_ja: 'この文書は、1961年4月29日に米国家安全保障会議が承認した「対反乱計画」を具体化したもので、米軍事顧問団、特殊部隊の増強、サイゴン政権への軍事援助拡大を明記していました。',

            text3: 'Trần Kim Tuyến giao tài liệu cho Phạm Xuân Ẩn và nhờ ông nghiên cứu, tóm tắt và nhận xét để hiểu rõ hơn chiến lược quân sự mới của Mỹ. Trong quá trình thực hiện công việc này, ông chụp toàn bộ tài liệu thành 24 cuộn phim và chuyển ra căn cứ qua đường dây liên lạc mới thiết lập.',
            text3_ja: 'チャン・キム・トゥエンはこの機密文書をアンに手渡し、米国の新たな軍事戦略を把握するために研究・要約・批評を依頼しました。この作業の過程で、アンは文書全ページを24本のフィルムに密かに撮影し、新設された連絡ルートを通じて根拠地へ送達しました。',

            text4: 'Do khi đó còn thiếu kinh nghiệm về kỹ thuật chụp tài liệu, nên cả 24 cuộn phim ông gửi đều không đọc được. Khi biết tin, Phạm Xuân Ẩn tự đánh máy lại nội dung tài liệu và trực tiếp mang bản sao về căn cứ. Ông sử dụng giấy đi lại do Trần Kim Tuyến cấp để đi qua các trạm kiểm soát của chính quyền Sài Gòn.',
            text4_ja: 'しかし文書撮影技術の未熟さから、送付した24本のフィルムはすべて現像不能で判読できませんでした。知らせを受けたアンは直ちに全内容を自らタイプライターで打ち直し、複製本を直接根拠地へ運びました。彼はトゥエンから発給された特権通行証を使い、サイゴン政権の検問所を堂々と通過しました。',

            text5: 'Sau đó, ông tiếp tục hoàn thành việc dịch và tóm tắt tài liệu theo yêu cầu của Trần Kim Tuyến.',
            text5_ja: 'その後、彼はトゥエンの要求通り文書の翻訳と要約を完璧に仕上げて提出しました。',

            text6: 'Như vậy, Phạm Xuân Ẩn vừa thực hiện công việc được giao một cách công khai, vừa bí mật chuyển thông tin quân sự về cho tổ chức tình báo cách mạng.',
            text6_ja: 'このようにして、ファム・スアン・アンは依頼された職務を公然と遂行しながら、同時に極秘の軍事情報を革命情報組織へ確実に送り届けたのです。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        },
        {
            id: '1961t',
            modalImg: 'assets/images/1960_1963/1961_MLGapDiem.jpg',
            modalImgAlt: 'Maxwell Taylor gặp Tổng thống Ngô Đình Diệm tại Sài Gòn, 23/10/1961 (Nguồn: Fine Art Storehouse)',
            modalImgAlt_ja: 'サイゴンでゴ・ディン・ジエム大統領と会談するマクスウェル・テイラー将軍、1961年10月23日（Fine Art Storehouse）',
            caption: 'Maxwell Taylor gặp Tổng thống Ngô Đình Diệm tại Sài Gòn, 23/10/1961 (Nguồn: Fine Art Storehouse)',
            caption_ja: 'サイゴンでゴ・ディン・ジエム大統領と会談するマクスウェル・テイラー将軍、1961年10月23日（Fine Art Storehouse）',

            title: 'Thu thập thông tin về Kế hoạch Staley - Taylor',
            title_ja: 'ステイリー・テイラー計画に関する情報収集',
            date: 'Năm 1961',
            date_ja: '1961年',

            text1: 'Năm 1961, Mỹ và chính quyền Việt Nam Cộng hòa xây dựng Kế hoạch Staley - Taylor nhằm tăng cường khả năng quân sự và kiểm soát tình hình ở miền Nam Việt Nam. Kế hoạch gắn với các chuyến khảo sát của Eugene Staley và Maxwell Taylor, bao gồm những biện pháp như tăng cường cố vấn Mỹ, trang bị quân sự và xây dựng hệ thống ấp chiến lược.',
            text1_ja: '1961年、米国と南ベトナム政権は南部での軍事力強化と情勢統制を目指し「ステイリー・テイラー計画」を策定しました。ユージン・ステイリーとマクスウェル・テイラーの現地調査に基づくこの計画には、米軍事顧問の増派、近代兵器の供与、戦略村システムの構築が含まれていました。',

            text2: 'Thông qua những cuộc trao đổi với Eugene Staley trong quá trình làm việc tại Reuters, Phạm Xuân Ẩn nắm được một số định hướng của phía Mỹ trước khi kế hoạch được hoàn thiện thành văn bản.',
            text2_ja: 'ロイター特派員としての取材過程でユージン・ステイリーと交わした対話を通じて、ファム・スアン・アンは計画が文書化される前の段階で米国の基本方針をいち早く把握していました。',

            text3: 'Sau khi kế hoạch được soạn thảo, nội dung vẫn được giữ bí mật, đến mức Trần Kim Tuyến, người đứng đầu Sở Nghiên cứu Chính trị, cũng chưa có bản kế hoạch. Phạm Xuân Ẩn gợi ý Trần Kim Tuyến yêu cầu Giáo sư Vũ Quốc Thúc, một chuyên gia kinh tế tham gia soạn thảo, cung cấp tài liệu để nghiên cứu và trình lên Ngô Đình Nhu.',
            text3_ja: '起草完了後も計画は最高機密とされ、政治社会調査局長のチャン・キム・トゥエンすら入手できていませんでした。アンはトゥエンに対し、起草に関わった経済学者ヴー・クオック・トゥック教授に資料提出を求め、研究の上でゴ・ディン・ヌーへ上申するよう進言しました。',

            text4: 'Phạm Xuân Ẩn dự đoán Trần Kim Tuyến sẽ giao lại tài liệu cho mình xem xét. Đúng như dự đoán, ông được giao đọc và nhận xét bản kế hoạch. Nhân cơ hội này, ông bí mật sao chụp tài liệu và chuyển về cơ quan chỉ huy tình báo tại Hà Nội trước khi kế hoạch được triển khai.',
            text4_ja: 'アンの読み通り、トゥエンは入手した計画書の精査と意見書作成をアンに委ねました。この好機を逃さず、アンは全文書を秘密裏に複写・撮影し、計画が実行に移される前にハノイの情報司令部へ急送しました。',

            text5: 'Để thực hiện Kế hoạch Staley - Taylor, Ngô Đình Nhu chỉ đạo xây dựng Kế hoạch Ấp chiến lược. Sau khi kế hoạch được phê duyệt, Ngô Đình Nhu giao Sở Nghiên cứu Chính trị dịch tài liệu sang tiếng Anh để cung cấp cho phía Mỹ. Trần Kim Tuyến tiếp tục giao công việc dịch thuật cho Phạm Xuân Ẩn. Trước khi dịch, ông bí mật sao chụp tài liệu và chuyển về cơ quan chỉ huy tình báo.',
            text5_ja: 'ステイリー・テイラー計画を実行するため、ゴ・ディン・ヌーは「戦略村計画」の策定を直接指導。承認後、ヌーは米側へ提供するため政治社会調査局に英訳を指示しました。トゥエンはこの翻訳業務を再びアンに一任。アンは翻訳作業の前に文書を極秘複写し、情報司令部へと送達しました。',

            // ── ẢNH CHÈN SAU ĐOẠN 5 ──
            midImg5: {
                src: 'assets/images/1960_1963/1961_NgoDinhNhu.jpg',
                alt: 'Ngô Đình Nhu (đứng thứ ba từ trái sang) tại lễ khánh thành ấp chiến lược ở Củ Chi, ngày 3/3/1962 (Nguồn: Harry S. Truman Presidential Library & Museum)',
                alt_ja: 'クチの戦略村落成式におけるゴ・ディン・ヌー（左から3人目）、1962年3月3日（トルーマン大統領図書館）',
                caption: 'Ngô Đình Nhu (đứng thứ ba từ trái sang) tại lễ khánh thành ấp chiến lược ở Củ Chi, ngày 3/3/1962 (Nguồn: Harry S. Truman Presidential Library & Museum)',
                caption_ja: 'クチの戦略村落成式におけるゴ・ディン・ヌー（左から3人目）、1962年3月3日（トルーマン大統領図書館）'
            },

            text6: 'Bản dịch của Phạm Xuân Ẩn sau đó được phía Mỹ đánh giá cao. Ông tiếp tục được giao dịch tài liệu về Kế hoạch Ấp chiến đấu, nhờ đó có thêm cơ hội tiếp cận và sao chụp những thông tin quân sự quan trọng.',
            text6_ja: 'アンによる英訳は米側から絶賛されました。その後も「戦闘村計画」に関する重要文書の翻訳を任されたことで、彼はさらに多くの重要軍事機密に接触し複写する特権的機会を得ることとなりました。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ],

    // ==========================================================================
    // 2. NHÁNH NHÀ BÁO — NỬA DƯỚI (id: '1961b') — MẢNG CÓ 1 OBJECT (LAYOUT 1 CỘT)
    // ==========================================================================
    bot: [
        {
            id: '1961b',
            modalImg: 'assets/images/1960_1963/1961_NB_AnPham.jpg',
            modalImgAlt: 'Ấn phẩm Viet Nam\'s Strategic Hamlets (1963) - Tài liệu đương thời về Ấp chiến lược (Nguồn: WikimediaCommons)',
            modalImgAlt_ja: '出版物「ベトナムの戦略村」（1963年）— 戦略村に関する当時の資料（WikimediaCommons）',
            caption: 'Ấn phẩm Viet Nam\'s Strategic Hamlets (1963) - Tài liệu đương thời về Ấp chiến lược (Nguồn: WikimediaCommons)',
            caption_ja: '出版物「ベトナムの戦略村」（1963年）— 戦略村に関する当時の資料（WikimediaCommons）',

            title: 'Lợi thế từ thân phận nhà báo của Reuters',
            title_ja: 'ロイター記者としての身分がもたらす優位性',
            date: 'Năm 1961',
            date_ja: '1961年',

            text1: 'Năm 1961, Phạm Xuân Ẩn tiếp tục làm việc tại hãng thông tấn Reuters ở Sài Gòn. Nhờ từng học báo chí tại Mỹ, sử dụng tiếng Anh thành thạo và am hiểu tình hình chính trị Việt Nam, ông có điều kiện tiếp xúc với nhiều nhân vật người Mỹ, trong đó có Eugene Staley, người tham gia xây dựng kế hoạch của Mỹ đối với miền Nam Việt Nam.',
            text1_ja: '1961年、ファム・スアン・アンはサイゴンのロイター通信で特派活動を継続しました。米国留学経験、卓越した英語力、ベトナム情勢への深い理解により、彼は南ベトナム計画の立案者ユージン・ステイリーをはじめとする米要人と親密に接触できる恵まれた立場にありました。',

            text2: 'Trong thời gian kế hoạch đang được thảo luận, Staley nhiều lần trao đổi với Phạm Xuân Ẩn để tìm hiểu phản ứng của giới chính trị Sài Gòn. Staley cũng muốn ông viết bài trên Reuters theo hướng có lợi cho phía Mỹ.',
            text2_ja: '計画の検討期間中、ステイリーはサイゴン政界の反応を探るためアンと頻繁に意見を交わし、米側に有利な論調の記事をロイターに執筆するようアンに求めました。',

            text3: 'Những cuộc trao đổi này cho thấy công việc báo chí đã tạo điều kiện để Phạm Xuân Ẩn tiếp cận thông tin từ những người tham gia hoạch định chính sách của Mỹ.',
            text3_ja: 'これらの対話は、報道記者という職務が米国の政策決定中枢に直接関与する人物から一次情報を引き出す上で、いかに決定的な武器であったかを物語っています。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ]
};

// ==============================================================================
// TỰ ĐỘNG HÒA TRỘN DỮ LIỆU NĂM 1961 VÀO window.TIMELINE_DATA
// ==============================================================================
(function mergeExtraData1961() {
    function applyBranch(branchKey, defaultId) {
        if (!window.TIMELINE_DATA || !window.EXTRA_DATA_1961) return;
        const branchData = window.EXTRA_DATA_1961[branchKey];
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
        applyBranch('top', '1961t');
        applyBranch('bot', '1961b');
    }

    if (window.TIMELINE_DATA) {
        doMerge();
    } else {
        document.addEventListener('DOMContentLoaded', doMerge);
    }
})();
