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
            modalImgAlt_ja: 'ベトナム南部のアメリカ軍事援助顧問団（MAAG）に所属するアメリカの軍事顧問（出典：TimeToast）',
            caption: 'Cố vấn quân sự Mỹ thuộc MAAG tại miền Nam Việt Nam (Nguồn: TimeToast)',
            caption_ja: 'ベトナム南部のアメリカ軍事援助顧問団（MAAG）に所属するアメリカの軍事顧問（出典：TimeToast）',

            title: 'Thu thập tài liệu quân sự tối mật "Kỹ thuật và chiến thuật chống nổi dậy"',
            title_ja: '極秘軍事資料「対反乱作戦の技術と戦術」の収集',
            date: 'Năm 1961',
            date_ja: '1961年',

            text1: 'Sau khi móc nối lại liên lạc tình báo, Phạm Xuân Ẩn đã gửi về căn cứ tài liệu quân sự mật "Kỹ thuật và chiến thuật chống nổi dậy" do Tướng Lionel McGarr, Chỉ huy trưởng MAAG, ban hành.',
            text1_ja: '諜報活動の連絡が再開された後、ファム・スアン・アンは、MAAG司令官ライオネル・マクガー将軍が発出した機密軍事資料「対反乱作戦の技術と戦術」を根拠地へ送った。',

            // ── ẢNH CHÈN SAU ĐOẠN 1 ──
            midImg1: {
                src: 'assets/images/1960_1963/1961_TB_Lionel.jpg',
                alt: 'Tướng Lionel C. McGarr - Chỉ huy trưởng MAAG (Nguồn: VeteranTributes)',
                alt_ja: 'ライオネル・C・マクガー将軍――アメリカ軍事援助顧問団（MAAG）司令官（出典：VeteranTributes）',
                caption: 'Tướng Lionel C. McGarr - Chỉ huy trưởng MAAG (Nguồn: VeteranTributes)',
                caption_ja: 'ライオネル・C・マクガー将軍――アメリカ軍事援助顧問団（MAAG）司令官（出典：VeteranTributes）'
            },

            text2: 'Tài liệu này cụ thể hóa kế hoạch "Chống nổi dậy" mà Hội đồng An ninh Quốc gia Mỹ phê duyệt ngày 29/4/1961, theo đó Mỹ tăng cường lực lượng cố vấn, đơn vị đặc biệt và viện trợ quân sự cho chính quyền Sài Gòn.',
            text2_ja: 'この資料は、1961年4月29日にアメリカ国家安全保障会議（NSC）が承認した「対反乱」計画を具体化したものであり、これによりアメリカはサイゴン政権に対し、顧問団、特殊部隊、軍事援助を増強した。',

            text3: 'Trần Kim Tuyến giao tài liệu cho Phạm Xuân Ẩn và nhờ ông nghiên cứu, tóm tắt và nhận xét để hiểu rõ hơn chiến lược quân sự mới của Mỹ. Trong quá trình thực hiện công việc này, ông chụp toàn bộ tài liệu thành 24 cuộn phim và chuyển ra căn cứ qua đường dây liên lạc mới thiết lập.',
            text3_ja: 'チャン・キム・トゥエンはこの資料をファム・スアン・アンに渡し、アメリカの新たな軍事戦略をよりよく理解するため、研究し、要約し、所見を述べるよう頼んだ。\n\nこの作業を行う過程で、アンは資料のすべてを24本のフィルムに撮影し、新たに築かれた連絡網を通じて根拠地へ送った。',

            text4: 'Do khi đó còn thiếu kinh nghiệm về kỹ thuật chụp tài liệu, nên cả 24 cuộn phim ông gửi đều không đọc được. Khi biết tin, Phạm Xuân Ẩn tự đánh máy lại nội dung tài liệu và trực tiếp mang bản sao về căn cứ. Ông sử dụng giấy đi lại do Trần Kim Tuyến cấp để đi qua các trạm kiểm soát của chính quyền Sài Gòn.',
            text4_ja: '当時はまだ資料撮影の技術に関する経験が不足していたため、アンが送った24本のフィルムはすべて判読できなかった。\n\nそのことを知ると、ファム・スアン・アンは自ら資料の内容をタイプし直し、その写しを直接根拠地へ持って行った。\n\nアンはチャン・キム・トゥエンが発行した通行証を使って、サイゴン政権の検問所を通過した。',

            text5: 'Sau đó, ông tiếp tục hoàn thành việc dịch và tóm tắt tài liệu theo yêu cầu của Trần Kim Tuyến.',
            text5_ja: 'その後、アンはチャン・キム・トゥエンの求めに応じて、資料の翻訳と要約を引き続き仕上げた。',

            text6: 'Như vậy, Phạm Xuân Ẩn vừa thực hiện công việc được giao một cách công khai, vừa bí mật chuyển thông tin quân sự về cho tổ chức tình báo cách mạng.',
            text6_ja: 'このように、ファム・スアン・アンは与えられた仕事を公然とこなしながら、革命側の諜報組織へ軍事情報をひそかに送っていた。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        },
        {
            id: '1961t',
            modalImg: 'assets/images/1960_1963/1961_MLGapDiem.jpg',
            modalImgAlt: 'Maxwell Taylor gặp Tổng thống Ngô Đình Diệm tại Sài Gòn, 23/10/1961 (Nguồn: Fine Art Storehouse)',
            modalImgAlt_ja: '1961年10月23日、サイゴンでゴー・ディン・ジェム大統領と会うマクスウェル・テイラー（出典：Fine Art Storehouse）',
            caption: 'Maxwell Taylor gặp Tổng thống Ngô Đình Diệm tại Sài Gòn, 23/10/1961 (Nguồn: Fine Art Storehouse)',
            caption_ja: '1961年10月23日、サイゴンでゴー・ディン・ジェム大統領と会うマクスウェル・テイラー（出典：Fine Art Storehouse）',

            title: 'Thu thập thông tin về Kế hoạch Staley - Taylor',
            title_ja: 'ステイリー・テイラー計画に関する情報の収集',
            date: 'Năm 1961',
            date_ja: '1961年',

            text1: 'Năm 1961, Mỹ và chính quyền Việt Nam Cộng hòa xây dựng Kế hoạch Staley - Taylor nhằm tăng cường khả năng quân sự và kiểm soát tình hình ở miền Nam Việt Nam. Kế hoạch gắn với các chuyến khảo sát của Eugene Staley⁽¹⁾ và Maxwell Taylor⁽²⁾, bao gồm những biện pháp như tăng cường cố vấn Mỹ, trang bị quân sự và xây dựng hệ thống ấp chiến lược⁽³⁾.',
            text1_ja: '1961年、アメリカとベトナム共和国政権は、ベトナム南部における軍事力を強化し、情勢を掌握するため、ステイリー・テイラー計画を策定した。\n\nこの計画はユージン・ステイリー⁽¹⁾とマクスウェル・テイラー⁽²⁾の視察と結びついたもので、アメリカの顧問の増強、軍事装備、戦略村⁽³⁾の建設といった措置を含んでいた。',

            text2: 'Thông qua những cuộc trao đổi với Eugene Staley trong quá trình làm việc tại Reuters, Phạm Xuân Ẩn nắm được một số định hướng của phía Mỹ trước khi kế hoạch được hoàn thiện thành văn bản.',
            text2_ja: 'ロイター通信で働いていた間にユージン・ステイリーと意見を交わしたことを通じて、ファム・スアン・アンは、計画が文書としてまとめられる前に、アメリカ側のいくつかの方針を把握していた。',

            text3: 'Sau khi kế hoạch được soạn thảo, nội dung vẫn được giữ bí mật, đến mức Trần Kim Tuyến, người đứng đầu Sở Nghiên cứu Chính trị và Xã hội, cũng chưa có bản kế hoạch. Phạm Xuân Ẩn gợi ý Trần Kim Tuyến yêu cầu Giáo sư Vũ Quốc Thúc, một chuyên gia kinh tế tham gia soạn thảo, cung cấp tài liệu để nghiên cứu và trình lên Ngô Đình Nhu⁽⁴⁾.',
            text3_ja: '計画が起草された後もその内容は秘密にされており、政治・社会研究局の局長であるチャン・キム・トゥエンでさえ、まだ計画書を持っていなかった。\n\nファム・スアン・アンはチャン・キム・トゥエンに、起草に参加した経済専門家のヴー・コック・トゥック教授に対し、研究してゴー・ディン・ニュー⁽⁴⁾に提出するための資料を提供するよう求めてはどうかと勧めた。',

            text4: 'Phạm Xuân Ẩn dự đoán Trần Kim Tuyến sẽ giao lại tài liệu cho mình xem xét. Đúng như dự đoán, ông được giao đọc và nhận xét bản kế hoạch. Nhân cơ hội này, ông bí mật sao chụp tài liệu và chuyển về cơ quan chỉ huy tình báo tại Hà Nội trước khi kế hoạch được triển khai.',
            text4_ja: 'ファム・スアン・アンは、チャン・キム・トゥエンがその資料を自分に回して検討させるだろうと予想していた。\n\n予想どおり、アンは計画書を読んで所見を述べる仕事を任された。\n\nこの機会を利用して、アンは計画が実施される前に資料をひそかに複写し、ハノイの諜報司令部へ送った。',

            text5: 'Để thực hiện Kế hoạch Staley - Taylor, Ngô Đình Nhu chỉ đạo xây dựng Kế hoạch Ấp chiến lược. Sau khi kế hoạch được phê duyệt, Ngô Đình Nhu giao Sở Nghiên cứu Chính trị và Xã hội dịch tài liệu sang tiếng Anh để cung cấp cho phía Mỹ. Trần Kim Tuyến tiếp tục giao công việc dịch thuật cho Phạm Xuân Ẩn. Trước khi dịch, ông bí mật sao chụp tài liệu và chuyển về cơ quan chỉ huy tình báo.',
            text5_ja: 'ステイリー・テイラー計画を実行するため、ゴー・ディン・ニューは戦略村計画の策定を指示した。\n\n計画が承認された後、ゴー・ディン・ニューは、アメリカ側に提供するため、資料を英語に翻訳するよう政治・社会研究局に命じた。\n\nチャン・キム・トゥエンは、この翻訳の仕事も引き続きファム・スアン・アンに任せた。\n\n翻訳する前に、アンは資料をひそかに複写し、諜報司令部へ送った。',

            // ── ẢNH CHÈN SAU ĐOẠN 5 ──
            midImg5: {
                src: 'assets/images/1960_1963/1961_NgoDinhNhu.jpg',
                alt: 'Ngô Đình Nhu (đứng thứ ba từ trái sang) tại lễ khánh thành ấp chiến lược ở Củ Chi, ngày 3/3/1962 (Nguồn: Harry S. Truman Presidential Library & Museum)',
                alt_ja: '1962年3月3日、クチの戦略村の落成式に出席したゴー・ディン・ニュー（左から3番目）（出典：Harry S. Truman Presidential Library & Museum）',
                caption: 'Ngô Đình Nhu (đứng thứ ba từ trái sang) tại lễ khánh thành ấp chiến lược ở Củ Chi, ngày 3/3/1962 (Nguồn: Harry S. Truman Presidential Library & Museum)',
                caption_ja: '1962年3月3日、クチの戦略村の落成式に出席したゴー・ディン・ニュー（左から3番目）（出典：Harry S. Truman Presidential Library & Museum）'
            },

            text6: 'Bản dịch của Phạm Xuân Ẩn sau đó được phía Mỹ đánh giá cao. Ông tiếp tục được giao dịch tài liệu về Kế hoạch Ấp chiến đấu, nhờ đó có thêm cơ hội tiếp cận và sao chụp những thông tin quân sự quan trọng.',
            text6_ja: 'その後、ファム・スアン・アンの翻訳はアメリカ側から高く評価された。\n\nアンは引き続き戦闘村計画に関する資料の翻訳も任され、それによって重要な軍事情報に接し、複写する機会がさらに増えた。',

            footnote: '1. Eugene Staley: Nhà kinh tế học người Mỹ. Năm 1961, ông cùng Maxwell Taylor đề ra Kế hoạch Staley - Taylor.<br><br>2. Maxwell Taylor: Tướng Mỹ, người cùng đề ra Kế hoạch Staley - Taylor. Sau đó, ông giữ chức Chủ tịch Hội đồng Tham mưu trưởng Liên quân Mỹ (1962-1964), rồi làm Đại sứ Mỹ tại Việt Nam (1964-1965).<br><br>3. Ấp chiến lược: Kế hoạch của chính quyền Việt Nam Cộng hòa bắt đầu từ năm 1961, dồn dân nông thôn vào các làng mới được quân sự hóa để kiểm soát và đối phó với lực lượng cách mạng.<br><br>4. Ngô Đình Nhu: Em trai Tổng thống Ngô Đình Diệm. Ông đứng đầu lực lượng mật vụ và chỉ đạo việc đàn áp phe chống Diệm.',
            footnote_ja: '1. ユージン・ステイリー：アメリカの経済学者。1961年、マクスウェル・テイラーとともにステイリー・テイラー計画を立案した。<br><br>2. マクスウェル・テイラー：ステイリー・テイラー計画を共同で立案したアメリカの将軍。のちにアメリカ統合参謀本部議長（1962～64年）を経て、駐ベトナム大使（1964～65年）となった。<br><br>3. 戦略村：1961年に始まったベトナム共和国政権の計画で、農民を軍事基地化した新しい村に囲い込み、革命勢力側に対抗させようとした。<br><br>4. ゴー・ディン・ニュー：ゴー・ディン・ジェム大統領の弟。秘密警察の長として反ジェム派の弾圧を主導した。',

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
            modalImgAlt: 'Ấn phẩm Viet Nam’s Strategic Hamlets (1963) - Tài liệu đương thời về Ấp chiến lược (Nguồn: WikimediaCommons)',
            modalImgAlt_ja: '刊行物『Viet Nam’s Strategic Hamlets』（1963年）――戦略村に関する当時の資料（出典：WikimediaCommons）',
            caption: 'Ấn phẩm Viet Nam’s Strategic Hamlets (1963) - Tài liệu đương thời về Ấp chiến lược (Nguồn: WikimediaCommons)',
            caption_ja: '刊行物『Viet Nam’s Strategic Hamlets』（1963年）――戦略村に関する当時の資料（出典：WikimediaCommons）',

            title: 'Lợi thế từ thân phận nhà báo của Reuters',
            title_ja: 'ロイター通信の記者という身分がもたらした利点',
            date: 'Năm 1961',
            date_ja: '1961年',

            text1: 'Năm 1961, Phạm Xuân Ẩn tiếp tục làm việc tại hãng thông tấn Reuters ở Sài Gòn. Nhờ từng học báo chí tại Mỹ, sử dụng tiếng Anh thành thạo và am hiểu tình hình chính trị Việt Nam, ông có điều kiện tiếp xúc với nhiều nhân vật người Mỹ, trong đó có Eugene Staley, người tham gia xây dựng kế hoạch của Mỹ đối với miền Nam Việt Nam.',
            text1_ja: '1961年、ファム・スアン・アンは引き続きサイゴンのロイター通信で働いた。\n\nアメリカでジャーナリズムを学んだ経験があり、英語に堪能で、ベトナムの政治情勢に精通していたため、アンは多くのアメリカ人と接触することができ、その中にはベトナム南部に対するアメリカの計画の策定に関わったユージン・ステイリーもいた。',

            text2: 'Trong thời gian kế hoạch đang được thảo luận, Staley nhiều lần trao đổi với Phạm Xuân Ẩn để tìm hiểu phản ứng của giới chính trị Sài Gòn. Staley cũng muốn ông viết bài cho Reuters theo hướng có lợi cho phía Mỹ.',
            text2_ja: '計画が議論されていた間、ステイリーはサイゴンの政界の反応を探るため、何度もファム・スアン・アンと意見を交わした。\n\nステイリーはまた、アンにアメリカ側に有利な方向でロイター通信に記事を書いてほしいと望んでいた。',

            text3: 'Những cuộc trao đổi này cho thấy công việc báo chí đã tạo điều kiện để Phạm Xuân Ẩn tiếp cận thông tin từ những người tham gia hoạch định chính sách của Mỹ.',
            text3_ja: 'これらのやり取りは、記者の仕事によって、ファム・スアン・アンがアメリカの政策立案に関わる人々から情報を得られるようになったことを示している。',

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
