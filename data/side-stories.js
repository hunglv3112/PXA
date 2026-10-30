/**
 * ==============================================================================
 * DANH SÁCH CÁC CÂU CHUYỆN BÊN LỀ (data/side-stories.js) — HỖ TRỢ 2 NGÔN NGỮ
 * ==============================================================================
 * Thiết kế đồng bộ cấu trúc với Timeline Modal (layout 1 cột như Tình báo & Nhà báo).
 * Phong cách màu: Đỏ mận cổ điển & Vàng ánh kim đặc trưng của Chuyện bên lề.
 */

window.AXIS_STORIES = [
  {
    id: "story-1957",
    aliasId: "story-1957-1959",
    afterYear: 1957,
    nextYear: 1958,
    position: "after",
    avatar: "assets/images/pxa-avatar.jpg",

    // ==========================================================================
    // 1. TIẾNG VIỆT (VI)
    // ==========================================================================
    tooltip: "Chuyện bên lề (1957): Bấm để đọc",
    meta: "Chuyện bên lề · 1957",
    title: "Biến cố cha qua đời trước chuyến đi du học Mỹ",

    // ── ẢNH HERO BANNER ĐẦU POPUP (KÈM CHÚ THÍCH) ──
    modalImg: "assets/images/1957_1959/1959_ChaPXAQuaDoi.jpg",
    modalImgAlt: "Bàn thờ và di ảnh thân phụ của Phạm Xuân Ẩn",
    caption: "Cha của Phạm Xuân Ẩn, ông Phạm Xuân Viễn qua đời ngày 24/9/1957 (Nguồn: Điệp Viên Hoàn Hảo - Trang 126)",

    // ── NỘI DUNG VĂN BẢN (KÈM ẢNH CHÈN GIỮA MID-IMG) ──
    text1: "Ngày 24/9/1957, chỉ vài tuần trước chuyến du học Mỹ của Phạm Xuân Ẩn, cha ông qua đời sau thời gian dài mắc bệnh lao nặng. Là con trưởng, ông phải gánh vác trách nhiệm với gia đình và chịu tang cha trong ba năm theo truyền thống Việt Nam. Trước biến cố này, ông không nghĩ rằng ông sẽ có thể tiếp tục tới Mỹ để học.",

    // Ảnh đồng chí Mười Hương chèn sau đoạn 1
    midImg: {
      src: "",
      alt: "Đồng chí Mười Hương (Trần Quốc Hương)",
      caption: "Đồng chí Mười Hương (Trần Quốc Hương) — người chỉ huy trực tiếp đã trấn an và bảo đảm tổ chức cách mạng sẽ chăm lo vẹn toàn cho gia đình."
    },

    text2: "Người quyết định có hoãn nhiệm vụ này hay không là cấp trên trực tiếp của ông, Mười Hương. Nhận thấy không còn ai khác có thể đảm nhận nhiệm vụ này, Mười Hương trấn an ông rằng phía cách mạng sẽ lo cho gia đình ông.",

    text3: "Sau đó, Phạm Xuân Ẩn xin phép mẹ về chuyến đi khi vẫn đang trong thời gian chịu tang cha. Bà hết lòng ủng hộ con trai và cho rằng chỉ cần biết con đang cống hiến cho cách mạng là đủ.",

    text4: "Có được lời đảm bảo từ tổ chức và sự ủng hộ của mẹ, tối 10/10/1957, Phạm Xuân Ẩn nén lại nỗi đau mất cha để lên đường sang Mỹ.",

    // Ảnh tư liệu bổ sung bên dưới (Phi trường Tân Sơn Nhất)
    bottomImg: {},

    note: "",
    // ==========================================================================
    // 2. TIẾNG NHẬT (JA - 日本語)
    // ==========================================================================
    tooltip_ja: "サイドストーリー (1957): クリックして読む",
    meta_ja: "サイドストーリー · 1957",
    title_ja: "渡米直前の父の逝去と重大な決断",

    modalImg_ja: "assets/images/1957_1959/1959_ChaPXAQuaDoi.jpg",
    modalImgAlt_ja: "ファム・スアン・アンの父の祭壇と遺影",
    caption_ja: "ファム・スアン・アンの父の祭壇と遺影――渡米留学をわずか数週間後に控えた1957年9月24日に起きた痛ましい悲報。",

    text1_ja: "1957年9月24日、渡米留学をわずか数週間後に控えたファム・スアン・アンの父が、長患いの重い結核のため逝去しました。長男であった彼は、家族を支え、ベトナムの伝統に従い3年間の喪に服す責任がありました。この予期せぬ悲劇に直面し、彼はもはや渡米を継続することは不可能だと考えました。",

    midImg_ja: {
      src: "assets/images/1957_1959/1957_MuoiHuong.jpg",
      alt: "同志ムオイ・フオン（チャン・クオック・フオン）",
      caption: "同志ムオイ・フオン（チャン・クオック・フオン）――革命組織が家族の面倒をすべて引き受けると約束し、彼を安心させた直属の指揮官。"
    },

    text2_ja: "任務を延期するかどうかの決定権を持っていたのは、彼の直属の上官であるムオイ・フオン（チャン・クオック・フオン）でした。アンに代わる人材は他にいないと判断したムオイ・フオンは、革命組織が家族の面倒を一切引き受けると伝え、彼を安心させました。",

    text3_ja: "その後、アンは父の喪中である身ながら、母に渡米の許しを請いました。母は息子の決断を心から支持し、「国と革命のために尽くしていると知るだけで十分です」と背中を押しました。",

    text4_ja: "組織からの保証と母の力強い支えを得て、1957年10月10日の夜、ファム・スアン・アンは父を失った深い悲しみを胸に秘め、アメリカへと旅立ちました。",

    bottomImg_ja: {
      src: "assets/images/1957_1959/1959_PhiTruongSanBayTanSanNhatTruoc1975.jpg",
      alt: "1950年代のタンソンニャット空港",
      caption: "1950年代当時のサイゴン・タンソンニャット空港――1957年10月10日夜、アンがアメリカへと飛び立った場所。"
    },

    note_ja: "",
    src_ja: "出典: ラリー・バーマン『パーフェクト・スパイ』; トーマス・バス"
  },
  {
    id: "story-1962",
    aliasId: "story-1962-1963",
    afterYear: 1962,
    nextYear: 1963,
    position: "after",
    avatar: "assets/images/pxa-avatar.jpg",

    // ==========================================================================
    // 1. TIẾNG VIỆT (VI)
    // ==========================================================================
    tooltip: "Chuyện bên lề (1962): Bấm để đọc",
    meta: "Chuyện bên lề · 1962",
    title: "H63 - Mạng lưới tình báo hỗ trợ cho Phạm Xuân Ẩn",

    // ── ẢNH HERO BANNER ĐẦU POPUP (KÈM CHÚ THÍCH) ──
    modalImg: "assets/images/CCNL_1962/H63_GapLai.jpg",
    modalImgAlt: "Các cán bộ Cụm tình báo H63 (từ trái sang: Phạm Xuân Ẩn, Nguyễn Thị Ba, Nguyễn Văn Tàu (Tư Cang), Nguyễn Văn Minh (Nguồn: QDNDVN)",
    caption: "Các cán bộ Cụm tình báo H63 (từ trái sang: Phạm Xuân Ẩn, Nguyễn Thị Ba, Nguyễn Văn Tàu (Tư Cang), Nguyễn Văn Minh (Nguồn: QDNDVN)",

    // ── NỘI DUNG VĂN BẢN (KÈM ẢNH CHÈN GIỮA MID-IMG) ──
    text1: "Tháng 4/1962, xuất phát từ yêu cầu của cuộc chiến và nhằm bảo vệ Phạm Xuân Ẩn, khi đó mang bí danh Hai Trung, Quân ủy Trung ương và Ban Quân báo Miền (Bộ Tham mưu B2) tiếp nhận lực lượng từ Ban Địch tình Đặc khu ủy Sài Gòn - Gia Định để thành lập Cụm điệp báo A18, tiền thân của Cụm tình báo chiến lược H63. Ban đầu, ông Nguyễn Xuân Mạnh (Mười Nho) phụ trách cụm, sau đó Đại tá Nguyễn Văn Tàu (Tư Cang) làm Cụm trưởng.",

    text2: "Cụm đóng vai trò hậu phương cho ông Ẩn. Ông ngụy trang các cuộn microfilm chứa tài liệu mật trong đồ ăn như nem chua, bánh xèo, ổ bánh mì, rồi gửi từ nội đô Sài Gòn qua các giao liên như bà Nguyễn Thị Ba, bà Tám Thảo và bà Hai Ánh. Tài liệu sau đó được chuyển qua tuyến giao thông vũ trang ở Củ Chi (Phú Hòa Đông) về Trung ương Cục và Bộ Chính trị tại Hà Nội.",

    text3: "Trong suốt cuộc chiến, cụm có 45 thành viên thì 27 người hy sinh, như liệt sĩ Nguyễn Văn Bờ. Một số người bị tra tấn, như Thiếu tá Nguyễn Văn Thương (Hai Thương) bị cưa chân nhiều lần, nhưng theo các tài liệu về cụm, họ vẫn giữ kín thông tin về ông Ẩn và đường dây.",

    // ── ẢNH CHÈN SAU ĐOẠN 3 ──
    midImg3: {
      src: "assets/images/CCNL_1962/H63_TraTan.jpg",
      alt: "Thiếu tá Hai Thương - Người bị phía Mỹ và Việt Nam Cộng hòa bắt giữ, cưa chân tới 6 lần nhưng vẫn không khai một thông tin nào (Nguồn: Báo Dân Trí)",
      caption: "Thiếu tá Hai Thương - Người bị phía Mỹ và Việt Nam Cộng hòa bắt giữ, cưa chân tới 6 lần nhưng vẫn không khai một thông tin nào, khiến kẻ tra tấn phải thốt lên: “Tao thua rồi, mày là sinh vật thép” (Nguồn: Báo Dân Trí)"
    },

    text4: "Năm 1971, H63 được Nhà nước phong tặng danh hiệu Anh hùng Lực lượng Vũ trang Nhân dân, là một trong những đơn vị tình báo đầu tiên nhận danh hiệu này trong thời chiến.",

    // ── ẢNH CUỐI BÀI ──
    bottomImg: {
      src: "assets/images/CCNL_1962/H63_AHLLVTND.jpg",
      alt: "Cụm tình báo H63 đón nhận danh hiệu Anh hùng lực lượng vũ trang nhân dân vào năm 1971 (Nguồn: VOV)",
      caption: "Cụm tình báo H63 đón nhận danh hiệu Anh hùng lực lượng vũ trang nhân dân vào năm 1971 (Nguồn: VOV)"
    },

    note: "",

    // ==========================================================================
    // 2. TIẾNG NHẬT (JA - 日本語)
    // ==========================================================================
    tooltip_ja: "サイドストーリー (1962): クリックして読む",
    meta_ja: "サイドストーリー · 1962",
    title_ja: "H63――ファム・スアン・アンを支えた伝説の戦略諜報網",

    modalImg_ja: "assets/images/CCNL_1962/H63_GapLai.jpg",
    modalImgAlt_ja: "H63戦略情報班の幹部たち（左から：ファム・スアン・アン、グエン・ティ・バ、グエン・ヴァン・タウ［トゥー・カン］、グエン・ヴァン・ミン）（人民軍新聞）",
    caption_ja: "H63戦略情報班の幹部たち（左から：ファム・スアン・アン、グエン・ティ・バ、グエン・ヴァン・タウ［トゥー・カン］、グエン・ヴァン・ミン）（人民軍新聞）",

    text1_ja: "1962年4月、激化する戦局の要請と当時「ハイ・チュン」の暗号名で活動していたファム・スアン・アンを厳重に防護するため、中央軍事委員会と南部軍事情報部はサイゴン・ザディン特区敵情部から戦力を引き継ぎ、戦略諜報網H63の前身であるA18諜報班を創設しました。当初はグエン・スアン・マン（ムオイ・ニョ）が指揮を執り、後にグエン・ヴァン・タウ大佐（トゥー・カン）が班長を務めました。",

    text2_ja: "H63班はアンの極めて強固な後方支援基盤として機能しました。アンはネムチュア（発酵豚肉ソーセージ）、バインセオ、フランスパンなどの食品の中に機密マイクロフィルムを精巧に隠匿し、グエン・ティ・バ、タム・タオ、ハイ・アインといった女性連絡員を通じてサイゴン中心部から搬出。文書はクチ（フーホアドン）の武装連絡路を経て南部中央機関およびハノイの政治局へと確実に送達されました。",

    text3_ja: "戦争期間を通じて、H63班の全45名の構成員のうち、グエン・ヴァン・ボー烈士をはじめとする27名が尊い命を捧げました。ハイ・トゥオン（グエン・ヴァン・トゥオン少佐）のように繰り返し足を切断される凄惨な拷問を受けながらも、すべての同志たちはアンの正体と通信網の秘密を死守し続けました。",

    midImg3_ja: {
      src: "assets/images/CCNL_1962/H63_TraTan.jpg",
      alt: "ハイ・トゥオン少佐――凄惨な拷問に屈しなかった鋼鉄の英雄（ダンチー紙）",
      caption: "ハイ・トゥオン少佐――米軍とサイゴン政権に捕らえられ6回も足を切断される凄惨な拷問を受けながらも沈黙を守り抜き、拷問官に「お前の勝ちだ、お前は鋼鉄の生物だ」と言わしめた英雄（ダンチー紙）"
    },

    text4_ja: "1971年、H63は国家から「人民武装力量英雄」の最高栄誉を授与され、戦時中にこの称号を獲得した最初の情報部隊の一つとなりました。",

    bottomImg_ja: {
      src: "assets/images/CCNL_1962/H63_AHLLVTND.jpg",
      alt: "1971年に人民武装力量英雄の称号を受賞したH63戦略情報班（VOV）",
      caption: "1971年に人民武装力量英雄の称号を受賞したH63戦略情報班（VOV）"
    },

    note_ja: "",
    src_ja: "出典: ベトナム人民軍新聞; VOV; ダンチー紙"
  },
  {
    id: "story-1975",
    aliasId: "story-1975-1976",
    afterYear: 1975,
    nextYear: 1976,
    position: "after",
    avatar: "assets/images/pxa-avatar.jpg",

    // ==========================================================================
    // 1. TIẾNG VIỆT (VI)
    // ==========================================================================
    tooltip: "Chuyện bên lề (1975): Bấm để đọc",
    meta: "Chuyện bên lề · 1975",
    title: "Bất chấp tất cả, Phạm Xuân Ẩn giải cứu trùm mật vụ Trần Kim Tuyến",

    // ── ẢNH HERO BANNER ĐẦU POPUP (KÈM CHÚ THÍCH) ──
    modalImg: "assets/images/1974_1976/CCNL_1975_PXAVaTTK.jpg",
    modalImgAlt: "Phạm Xuân Ẩn (bên trái) và Trần Kim Tuyến (bên phải)",
    caption: "Phạm Xuân Ẩn (bên trái) và Trần Kim Tuyến (bên phải)",

    // ── NỘI DUNG VĂN BẢN (KÈM ẢNH CHÈN GIỮA MID-IMG) ──
    text1: "Cuối tháng 4/1975, Trần Kim Tuyến nán lại Sài Gòn vì bạn bè, người ủng hộ ông bị bắt hồi đầu tháng, ông không chịu đi khi họ chưa được thả. CIA xếp ông ưu tiên di tản, nhưng ngày 29/4 người phụ trách là Kohlmann đã đi trước, còn Shaplen cũng không thể đưa được ông vào danh sách phóng viên được di tản, đành chỉ dặn: \"Tới chỗ ông Ẩn đi!\"",

    text2: "Tuyến đến văn phòng Time. Ẩn thì vẫn ở lại vì còn mẹ già bệnh (Time đã đưa vợ con ông đi). Ẩn lái xe đưa Tuyến tới đại sứ quán nhưng đám đông quá dày khiến họ không thể lại gần, gọi điện khắp nơi cũng vô vọng.",

    // Ảnh trèo tường Đại sứ quán Mỹ chèn sau đoạn 2
    midImg2: {
      src: "assets/images/1974_1976/CCNL_1975_TreoTuong.jpg",
      alt: "Người dân cố gắng trèo qua bức tường cao 4,2 mét của Đại sứ quán Mỹ để tiếp cận trực thăng sơ tán",
      caption: "Người dân cố gắng trèo qua bức tường cao 4,2 mét của Đại sứ quán Mỹ để tiếp cận trực thăng sơ tán. (Nguồn: AP)"
    },

    text3: "Khoảng 5 giờ chiều, phóng viên Dan Southerland (báo Christian Science Monitor) gọi tới. Ẩn nhờ anh liên lạc đại sứ quán, và Southerland báo đã gặp Tom Polgar (trưởng CIA tại Sài Gòn). Polgar nói không thể cử người đón, nhưng nếu Tuyến kịp tới thì sẽ đưa tên vào danh sách.",

    text4: "Ẩn vừa lái xe chở Tuyến tới nơi thì lúc này đội bảo vệ đang đóng cổng lại. Ẩn thắng gấp, nhảy ra khỏi xe và quát lớn: \"Theo lệnh của Đại sứ, phải cho người này vào!\" Người bảo vệ đáp lại rằng không ai được vào nữa, vì trực thăng sắp cất cánh.",

    text5: "Tình huống tưởng như vô vọng, nhưng ngay khi cánh cổng đang được kéo xuống, theo phản xạ, Ẩn dùng tay trái giữ cổng lại, tay phải đẩy Tuyến lọt qua khe cửa vào trong. Không còn thời gian để nói lời tạm biệt hay cảm ơn. \"Chạy đi,\" Ẩn chỉ kịp nói, nước mắt trào ra. Tuyến vừa khóc vừa kịp thốt lên: \"Tôi sẽ không bao giờ quên.\"",

    // Cảnh chen chúc lên trực thăng chèn sau đoạn 5
    midImg5: {
      src: "assets/images/1974_1976/CCNL_1975_ChenChuc.jpg",
      alt: "Cảnh chen chúc lên một trong những chuyến trực thăng rời Sài Gòn những ngày cuối tháng 4/1975",
      caption: "Cảnh chen chúc lên một trong những chuyến trực thăng rời Sài Gòn những ngày cuối tháng 4/1975 (Nguồn: Hugh Van Es)"
    },

    text6: "Sau này Ẩn giải thích rằng đây là \"hành động của trái tim\", cứu bác sĩ Tuyến vì ân nghĩa xưa. Đại tướng Mai Chí Thọ nhận xét hành động này là \"Nhân Trí Dũng!\" và đây cũng là đánh giá chung của cấp trên dành cho Ẩn.",

    note: "",
    src: "Nguồn: Larry Berman (Điệp viên hoàn hảo)",

    // ==========================================================================
    // 2. TIẾNG NHẬT (JA - 日本語)
    // ==========================================================================
    tooltip_ja: "サイドストーリー (1975): クリックして読む",
    meta_ja: "サイドストーリー · 1975",
    title_ja: "すべてを賭けて――ファム・スアン・アンによる秘密警察長官チャン・キム・トゥエン救出劇",

    modalImg_ja: "assets/images/1974_1976/CCNL_1975_PXAVaTTK.jpg",
    modalImgAlt_ja: "ファム・スアン・アン（左）とチャン・キム・トゥエン（右）",
    caption_ja: "ファム・スアン・アン（左）とチャン・キム・トゥエン（右）",

    text1_ja: "1975年4月下旬、チャン・キム・トゥエンは、月上旬に逮捕された友人や支持者たちが釈放されるまでサイゴンを離れないとして留まり続けていました。CIAは彼を優先避難対象に指定していましたが、4月29日には担当官コールマンが一足先に脱出し、シェイプリン記者も彼を記者避難名簿に載せることができず、「アンのところへ行け！」と告げることしかできませんでした。",

    text2_ja: "トゥエンはタイム誌のオフィスに駆け込みました。アンは病気の高齢の母がいたためサイゴンに残っていました（タイム誌はすでに彼の妻と子どもたちを避難させていました）。アンは車を走らせてトゥエンをアメリカ大使館へ送り届けようとしましたが、群衆が分厚く取り囲み近寄ることすらできず、方々に電話をかけても望みはありませんでした。",

    midImg2_ja: {
      src: "assets/images/1974_1976/CCNL_1975_TreoTuong.jpg",
      alt: "避難ヘリコプターに近づこうと米大使館の壁をよじ登る市民たち",
      caption: "避難ヘリコプターに近づこうと、高さ4.2メートルの米国大使館の壁をよじ登ろうとする市民たち。（出典: AP）"
    },

    text3_ja: "夕方5時頃、クリスチャン・サイエンス・モニター紙のダン・サウザーランド記者から電話が入りました。アンは大使館への連絡を依頼し、サウザーランドはサイゴンのCIA支局長トム・ポルガーと接触したと連絡してきました。ポルガーは迎えを出すことはできないが、トゥエンが自力で時間内にたどり着ければ名簿に加えると告げました。",

    text4_ja: "アンが車を飛ばしてトゥエンを連れて駆けつけたとき、警備隊はまさに門を閉めようとしているところでした。アンは急ブレーキをかけて車から飛び出し、「大使の命令だ、この人を通せ！」と大声で叫びました。警備員は、ヘリコプターがまもなく離陸するためもう誰も中には入れられないと告げました。",

    text5_ja: "もはや絶望的かと思われたその時、引き下げられようとする門に対し、アンは反射的に左手で門を押し留め、右手でトゥエンを隙間から中へと押し込みました。別れの言葉も感謝を伝える時間もありませんでした。「走れ！」とアンが叫ぶと、涙があふれ出しました。トゥエンも涙を流しながら「この恩は決して忘れない」と叫ぶのが精一杯でした。",

    midImg5_ja: {
      src: "assets/images/1974_1976/CCNL_1975_ChenChuc.jpg",
      alt: "1975年4月末、サイゴンを脱出するヘリコプターへ殺到する人々",
      caption: "1975年4月下旬、サイゴンを離れる避難ヘリコプターに殺到する光景（写真: ヒュー・ヴァン・エス）"
    },

    text6_ja: "後にアンは、これは過去の恩義に応えるための「心の命ずる行動」だったと説明しています。マイ・チー・トー大将はこの行動を「仁・智・勇」と称賛し、これが上層部によるアンへの共通の評価となりました。",

    note_ja: "",
    src_ja: "出典: ラリー・バーマン『パーフェクト・スパイ』"
  }
];
