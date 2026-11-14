/**
 * ==============================================================================
 * DỮ LIỆU MỞ RỘNG — NĂM 1964 (data/1964/data_1964.js)
 * ==============================================================================
 * Quản lý toàn bộ dữ liệu năm 1964 cho cả 2 nửa trên Timeline:
 *   1. top: Nhánh TÌNH BÁO (id: '1964t') — 1 sự kiện (layout 1 cột, có midImg & footnotes)
 *   2. bot: Nhánh NHÀ BÁO  (id: '1964b') — 2 sự kiện (layout chia 2)
 * ==============================================================================
 */

window.EXTRA_DATA_1964 = {

    // ==========================================================================
    // 1. NHÁNH TÌNH BÁO — NỬA TRÊN (id: '1964t') — 1 SỰ KIỆN (LAYOUT 1 CỘT)
    // ==========================================================================
    top: [
        {
            id: '1964t',
            modalImg: 'assets/images/1964_1970/1964_TB_MyDenDaNang.jpg',
            modalImgAlt: 'Hình ảnh quân Mỹ đặt chân đến Đà Nẵng vào tháng 3/1965 (Nguồn: USMC)',
            modalImgAlt_ja: '1965年3月、ダナンに上陸するアメリカ軍（出典：アメリカ海兵隊）',
            caption: 'Hình ảnh quân Mỹ đặt chân đến Đà Nẵng vào tháng 3/1965 (Nguồn: USMC)',
            caption_ja: '1965年3月、ダナンに上陸するアメリカ軍（出典：アメリカ海兵隊）',

            title: 'Thu thập các kế hoạch chiến lược và lập báo cáo dự báo bộ binh Mỹ vào miền Nam',
            title_ja: '戦略計画の収集およびアメリカ地上軍のベトナム南部投入予測報告書の作成',
            date: 'Năm 1964',
            date_ja: '1964年',

            text1: 'Trong năm 1964, Mỹ đẩy mạnh việc chuẩn bị các kế hoạch mở rộng hoạt động quân sự tại Việt Nam. Cùng thời gian này, Tướng William Westmoreland tiếp quản chức Tư lệnh MACV vào tháng 6/1964.',
            text1_ja: '1964年、アメリカはベトナムにおける軍事活動拡大に向けた計画の準備を加速させた。同時期の1964年6月、ウィリアム・ウェストモーランド将軍がMACV司令官に就任した。',

            // ── ẢNH CHÈN GIỮA NỘI DUNG ──
            midImg: {
                src: 'assets/images/1964_1970/1964_TB_WW.jpg',
                alt: 'Tướng Westmoreland nhận chức Tư lệnh MACV (Nguồn: Co Rentmeester/Time Life Staff)',
                alt_ja: 'ウェストモーランド将軍がMACV司令官に就任した（出典：Co Rentmeester/Time Life Staff）',
                caption: 'Tướng Westmoreland nhận chức Tư lệnh MACV (Nguồn: Co Rentmeester/Time Life Staff)',
                caption_ja: 'ウェストモーランド将軍がMACV司令官に就任した（出典：Co Rentmeester/Time Life Staff）'
            },

            text2: 'Trước bối cảnh này, nhờ uy tín nghề nghiệp và mối quan hệ với các quan chức cấp cao Mỹ và chính quyền Sài Gòn, Phạm Xuân Ẩn có điều kiện tiếp cận nhiều tài liệu quân sự quan trọng. Trong năm 1964, ông đã thu thập và bí mật gửi về căn cứ nguyên bản kế hoạch của Westmoreland⁽¹⁾, cùng kế hoạch bình định mới mang tên “Ấp tân sinh”⁽²⁾.',
            text2_ja: 'このような情勢の中で、ファム・スアン・アンは記者としての信用と、アメリカの高官およびサイゴン政権との関係により、多くの重要な軍事資料にアクセスすることができた。1964年、アンはウェストモーランド計画⁽¹⁾の原版と、「新生村」という名の新たな平定計画⁽²⁾を収集し、秘密裏に根拠地へ送った。',

            text3: 'Không chỉ có vậy, ông cũng biết rõ tình hình của Mỹ, và đã gửi lại nội dung của kế hoạch McNamara - Taylor⁽³⁾ do 2 người nghĩ ra sau sang Sài Gòn khảo sát thực địa, rồi qua phân tích nguồn tin của MACV và CIA, Phạm Xuân Ẩn khẳng định dứt khoát trong báo cáo gửi về cấp trên: Mỹ chắc chắn sẽ đưa quân chủ lực, bộ binh trực tiếp tham chiến ở miền Nam.',
            text3_ja: 'それだけでなく、アンはアメリカ側の状況も熟知しており、マクナマラとテイラーがサイゴンでの現地視察の後に立案したマクナマラ・テイラー計画⁽³⁾の内容を送り、さらにMACVとCIAの情報源を分析した上で、上層部への報告書の中で、アメリカは必ず主力軍と地上軍をベトナム南部で直接参戦させると断言した。',

            text4: 'Nhờ vậy, quân Giải phóng chủ động chuyển hướng chiến lược từ sớm, chuẩn bị lực lượng đón đánh đòn khi Thủy quân lục chiến Mỹ đổ bộ Đà Nẵng tháng 3/1965.',
            text4_ja: 'これにより、解放軍は早くから主体的に戦略を転換し、1965年3月にアメリカ海兵隊がダナンに上陸した際に迎え撃つための兵力を準備した。',

            // ── FOOTNOTES ──
            footnote: '1. Kế hoạch của Westmoreland: Là chiến thuật "tìm và diệt", sử dụng tối đa hỏa lực không quân, pháo binh và lực lượng bộ binh viễn chinh Mỹ mở các cuộc hành quân quy mô lớn nhằm tiêu diệt cơ quan đầu não của quân Giải phóng.<br><br>2. Kế hoạch Ấp tân sinh: Là cách gọi mới của "Ấp chiến lược".<br><br>3. Kế hoạch McNamara - Taylor: Là kế hoạch tăng cường sự chỉ huy trực tiếp của cố vấn Mỹ; tăng viện trợ quân sự và quân số quân Việt Nam Cộng hòa; đẩy mạnh các chiến dịch bình định nông thôn (đặc biệt khu vực quanh Sài Gòn); và dùng không quân đánh phá miền Bắc và Lào.',
            footnote_ja: '1. ウェストモーランド計画：「索敵撃滅」戦術を用い、空軍・砲兵の火力とアメリカ遠征地上軍を最大限に活用して大規模な作戦を展開し、解放軍の中枢機関を壊滅させることを目的とした計画である。<br><br>2. 新生村計画：「戦略村」の新たな呼び名である。<br><br>3. マクナマラ・テイラー計画：アメリカの顧問による直接指揮の強化、ベトナム共和国軍への軍事援助および兵力の増強、農村平定作戦（特にサイゴン周辺地域）の推進、ならびに空軍による北ベトナムおよびラオスへの爆撃を内容とする計画である。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ],

    // ==========================================================================
    // 2. NHÁNH NHÀ BÁO — NỬA DƯỚI (id: '1964b') — MẢNG CÓ 2 OBJECT (CHIA 2)
    // ==========================================================================
    bot: [
        {
            id: '1964b',
            modalImg: 'assets/images/1964_1970/1964_NB_PXAThuVuiChoiChim.jpg',
            modalImgAlt: 'Phạm Xuân Ẩn và thú vui nuôi chim (Nguồn: Báo Quân đội nhân dân)',
            modalImgAlt_ja: 'ファム・スアン・アンと鳥を飼う楽しみ（出典：Quan doi nhan dan紙）',
            caption: 'Phạm Xuân Ẩn và thú vui nuôi chim (Nguồn: Báo Quân đội nhân dân)',
            caption_ja: 'ファム・スアン・アンと鳥を飼う楽しみ（出典：Quan doi nhan dan紙）',

            title: 'Sự cố tại hãng tin Reuters và quyết định thôi việc',
            title_ja: 'ロイター通信でのトラブルと退職の決断',
            date: 'Ngày 27/08/1964',
            date_ja: '1964年8月27日',

            text1: 'Ngày 27/08/1964, Phạm Xuân Ẩn đi tác nghiệp theo dõi sự kiện cho Reuters và trở về tòa soạn muộn. Do bị Trưởng đại diện Nick Turner quát mắng bất công và yêu cầu dẹp lồng chim trên bàn làm việc, ông đã kiên quyết nộp đơn xin nghỉ việc tại Reuters sau gần 4 năm gắn bó (1960-1964).',
            text1_ja: '1964年8月27日、ファム・スアン・アンはロイター通信のために出来事の取材に出かけ、支局に戻るのが遅れた。支局長のニック・ターナーから不当に叱りつけられ、机の上の鳥かごを片付けるよう要求されたため、アンは4年近く（1960～1964年）勤めたロイター通信に断固として辞表を提出した。',

            text2: 'Việc chia tay báo chí Anh là bước chuyển chiến lược chủ động. Ông nhận thấy khi Mỹ chuẩn bị đưa quân trực tiếp vào Việt Nam, tư cách nhà báo Mỹ sẽ giúp ông dễ dàng tiếp cận các cơ quan đầu não chỉ huy Mỹ (MACV) và giới tướng lĩnh Sài Gòn hơn nhiều so với một hãng tin Anh.',
            text2_ja: 'イギリスの報道機関を離れたことは、主体的な戦略的転換であった。アンは、アメリカがベトナムに直接軍を投入する準備をする中で、アメリカの記者という立場であれば、イギリスの通信社にいるよりもはるかに容易に、アメリカ軍の指揮中枢であるMACVやベトナム共和国軍の将官たちにアクセスできると認識していた。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        },
        {
            id: '1964b',
            modalImg: 'assets/images/1964_1970/1964_NB_DongNghiep.jpg',
            modalImgAlt: 'Phạm Xuân Ẩn (ngoài cùng bên trái) chụp cùng nhà báo Beverly Deepe (ngoài cùng bên phải) và các đồng nghiệp tại văn phòng The New York Herald Tribune tại Sài Gòn (Nguồn: Phạm Xuân Ẩn: Tên người như cuộc đời - Trang 234)',
            modalImgAlt_ja: 'サイゴンの『ニューヨーク・ヘラルド・トリビューン』紙のオフィスにて、ビバリー・ディープ記者（右端）ら同僚とともに写るファム・スアン・アン（左端）（出典：『ファム・スアン・アン――名前のとおりに生きた男』ベトナム語版234ページ）',
            caption: 'Phạm Xuân Ẩn (ngoài cùng bên trái) chụp cùng nhà báo Beverly Deepe (ngoài cùng bên phải) và các đồng nghiệp tại văn phòng The New York Herald Tribune tại Sài Gòn (Nguồn: Phạm Xuân Ẩn: Tên người như cuộc đời - Trang 234)',
            caption_ja: 'サイゴンの『ニューヨーク・ヘラルド・トリビューン』紙のオフィスにて、ビバリー・ディープ記者（右端）ら同僚とともに写るファム・スアン・アン（左端）（出典：『ファム・スアン・アン――名前のとおりに生きた男』ベトナム語版234ページ）',

            title: 'Làm cộng tác viên cho báo Mỹ The New York Herald Tribune',
            title_ja: 'アメリカの『ニューヨーク・ヘラルド・トリビューン』紙の通信員としての活動',
            date: 'Ngày 29/10/1964',
            date_ja: '1964年10月29日',

            text1: 'Ngày 29/10/1964, Phạm Xuân Ẩn chính thức nhận Giấy xác nhận nhân viên của báo Mỹ The New York Herald Tribune do Richard C. Wald ký, hợp tác chặt chẽ với nữ phóng viên Beverly Deepe.',
            text1_ja: '1964年10月29日、ファム・スアン・アンはリチャード・C・ウォルドが署名したアメリカの『ニューヨーク・ヘラルド・トリビューン』紙の在籍証明書を正式に受け取り、女性記者のビバリー・ディープと緊密に協力した。',

            text2: 'Sự đồng hành của nữ nhà báo Beverly Deepe giúp ông có thể tự do lái xe chở bà đi tác nghiệp tại các vùng chiến sự diễn ra nhiều như Đà Nẵng (8/1965) và Hậu Nghĩa (tỉnh cũ, nay thuộc Long An và TP. Hồ Chí Minh) (1/1966) mà không bị an ninh kiểm soát.',
            text2_ja: '女性記者ビバリー・ディープの同行により、アンは公安の検問を受けることなく、ディープを車に乗せて自由に運転し、ダナン（1965年8月）やハウギア（旧省名。現在のロンアン省とホーチミン市の一部）（1966年1月）など、戦闘が多く繰り広げられていた地域へ取材に出かけることができた。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ]
};

// ==============================================================================
// TỰ ĐỘNG HÒA TRỘN DỮ LIỆU NĂM 1964 VÀO window.TIMELINE_DATA
// ==============================================================================
(function mergeExtraData1964() {
    function applyBranch(branchKey, defaultId) {
        if (!window.TIMELINE_DATA || !window.EXTRA_DATA_1964) return;
        const branchData = window.EXTRA_DATA_1964[branchKey];
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
        applyBranch('top', '1964t');
        applyBranch('bot', '1964b');
    }

    if (window.TIMELINE_DATA) {
        doMerge();
    } else {
        document.addEventListener('DOMContentLoaded', doMerge);
    }
})();
