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
    modalImgAlt: "Cha của Phạm Xuân Ẩn, ông Phạm Xuân Viễn qua đời ngày 24/9/1957 (Nguồn: Điệp viên hoàn hảo - Trang 126)",
    caption: "Cha của Phạm Xuân Ẩn, ông Phạm Xuân Viễn qua đời ngày 24/9/1957 (Nguồn: Điệp viên hoàn hảo - Trang 126)",

    // ── NỘI DUNG VĂN BẢN ──
    text1: "Ngày 24/9/1957, chỉ vài tuần trước chuyến du học Mỹ của Phạm Xuân Ẩn, cha ông qua đời sau thời gian dài mắc bệnh lao nặng. Là con trưởng, ông phải gánh vác trách nhiệm với gia đình và chịu tang cha trong ba năm theo truyền thống Việt Nam. Trước biến cố này, ông không nghĩ rằng ông sẽ có thể tiếp tục tới Mỹ để học.",
    text2: "Sau đó, Phạm Xuân Ẩn xin phép mẹ về chuyến đi khi vẫn đang trong thời gian chịu tang cha. Bà hết lòng ủng hộ con trai và cho rằng chỉ cần biết con đang cống hiến cho cách mạng là đủ.",
    text3: "Có được lời đảm bảo từ tổ chức và sự ủng hộ của mẹ, tối 10/10/1957, Phạm Xuân Ẩn nén lại nỗi đau mất cha để lên đường sang Mỹ.",

    note: "",
    // ==========================================================================
    // 2. TIẾNG NHẬT (JA - 日本語)
    // ==========================================================================
    tooltip_ja: "サイドストーリー (1957): クリックして読む",
    meta_ja: "サイドストーリー · 1957",
    title_ja: "アメリカ留学を前にした父の死",

    modalImg_ja: "assets/images/1957_1959/1959_ChaPXAQuaDoi.jpg",
    modalImgAlt_ja: "1957年9月24日に亡くなったファム・スアン・アンの父、ファム・スアン・ヴィエン（出典：『完璧なスパイ』126ページ）",
    caption_ja: "1957年9月24日に亡くなったファム・スアン・アンの父、ファム・スアン・ヴィエン（出典：『完璧なスパイ』126ページ）",

    text1_ja: "1957年9月24日、ファム・スアン・アンがアメリカ留学に出発するわずか数週間前に、父が重い結核を長く患った末に亡くなった。長男であったアンは、家族に対する責任を背負い、ベトナムの伝統に従って3年間父の喪に服さなければならなかった。この不幸に見舞われ、アメリカに渡って学業を続けられるとは思えなかった。",
    text2_ja: "その後、ファム・スアン・アンは、まだ父の喪に服している最中に、この渡航について母に許しを求めた。母は息子を心から支持し、息子が革命のために尽くしていると知っていれば、それだけで十分だと考えた。",
    text3_ja: "組織からの確約と母の支持を得て、1957年10月10日の夜、ファム・スアン・アンは父を失った悲しみをこらえ、アメリカへと旅立った。",

    note_ja: "",
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
    modalImgAlt: "Các cán bộ Cụm tình báo H63 (từ trái sang: Phạm Xuân Ẩn, Nguyễn Thị Ba, Nguyễn Văn Tàu (Tư Cang), Nguyễn Văn Minh) (Nguồn: Báo Quân đội nhân dân)",
    caption: "Các cán bộ Cụm tình báo H63 (từ trái sang: Phạm Xuân Ẩn, Nguyễn Thị Ba, Nguyễn Văn Tàu (Tư Cang), Nguyễn Văn Minh) (Nguồn: Báo Quân đội nhân dân)",

    // ── NỘI DUNG VĂN BẢN (KÈM ẢNH CHÈN GIỮA MID-IMG) ──
    text1: "Tháng 4/1962, xuất phát từ yêu cầu của cuộc chiến và nhằm bảo vệ Phạm Xuân Ẩn, khi đó mang bí danh Hai Trung, Quân ủy Trung ương và Ban Quân báo Miền (Bộ Tham mưu B2) tiếp nhận lực lượng từ Đặc khu ủy Sài Gòn - Gia Định để thành lập Cụm điệp báo A18, tiền thân của Cụm tình báo chiến lược H63. Ban đầu, ông Nguyễn Xuân Mạnh (Mười Nho) phụ trách cụm, sau đó Đại tá Nguyễn Văn Tàu (Tư Cang) làm Cụm trưởng.",

    text2: "Cụm đóng vai trò hậu phương cho Phạm Xuân Ẩn. Ông giấu những cuộn phim chụp thu nhỏ tài liệu mật trong các món ăn như nem chua, bánh xèo, bánh mì, rồi gửi từ nội đô Sài Gòn qua các giao liên như bà Nguyễn Thị Ba, bà Tám Thảo và bà Hai Ánh. Tài liệu sau đó được chuyển qua tuyến giao thông vũ trang ở Củ Chi (Phú Hòa Đông) về Trung ương Cục miền Nam⁽¹⁾ và Bộ Chính trị tại Hà Nội.",

    text3: "Trong suốt cuộc chiến, cụm có 45 thành viên thì 27 người hy sinh, như liệt sĩ Nguyễn Văn Bờ. Một số người bị tra tấn, như Thiếu tá Nguyễn Văn Thương (Hai Thương) bị cưa chân nhiều lần, nhưng theo các tài liệu về cụm, họ vẫn giữ kín thông tin về ông Ẩn và đường dây.",

    // ── ẢNH CHÈN SAU ĐOẠN 3 ──
    midImg3: {
      src: "assets/images/CCNL_1962/H63_TraTan.jpg",
      alt: "Thiếu tá Hai Thương - Người bị phía Mỹ và Việt Nam Cộng hòa bắt giữ, cưa chân tới 6 lần nhưng vẫn không khai một thông tin nào, khiến kẻ tra tấn phải thốt lên: \"Tao thua rồi, mày là sinh vật thép\" (Nguồn: Báo Dân Trí)",
      caption: "Thiếu tá Hai Thương - Người bị phía Mỹ và Việt Nam Cộng hòa bắt giữ, cưa chân tới 6 lần nhưng vẫn không khai một thông tin nào, khiến kẻ tra tấn phải thốt lên: \"Tao thua rồi, mày là sinh vật thép\" (Nguồn: Báo Dân Trí)"
    },

    text4: "Năm 1971, H63 được Nhà nước phong tặng danh hiệu Anh hùng Lực lượng Vũ trang Nhân dân⁽²⁾, là một trong những đơn vị tình báo đầu tiên nhận danh hiệu này trong thời chiến.",

    // ── ẢNH CUỐI BÀI ──
    bottomImg: {
      src: "assets/images/CCNL_1962/H63_AHLLVTND.jpg",
      alt: "Cụm tình báo H63 đón nhận danh hiệu Anh hùng Lực lượng Vũ trang Nhân dân vào năm 1971 (Nguồn: VOV)",
      caption: "Cụm tình báo H63 đón nhận danh hiệu Anh hùng Lực lượng Vũ trang Nhân dân vào năm 1971 (Nguồn: VOV)"
    },

    footnote: "1. Trung ương Cục miền Nam: Cơ quan đại diện Trung ương Đảng trực tiếp lãnh đạo phong trào cách mạng ở miền Nam trong thời chiến.<br><br>2. Danh hiệu Nhà nước Việt Nam trao tặng cho những tập thể, cá nhân trong lực lượng vũ trang lập công đặc biệt xuất sắc trong chiến đấu và bảo vệ Tổ quốc; đây là một trong những danh hiệu cao quý nhất của Việt Nam.",

    note: "",

    // ==========================================================================
    // 2. TIẾNG NHẬT (JA - 日本語)
    // ==========================================================================
    tooltip_ja: "サイドストーリー (1962): クリックして読む",
    meta_ja: "サイドストーリー · 1962",
    title_ja: "H63――ファム・スアン・アンを支えた諜報網",

    modalImg_ja: "assets/images/CCNL_1962/H63_GapLai.jpg",
    modalImgAlt_ja: "H63情報グループの幹部たち（左から：ファム・スアン・アン、グエン・ティ・バー、グエン・ヴァン・タウ（トゥー・カン）、グエン・ヴァン・ミン）（出典：Quan doi nhan dan紙）",
    caption_ja: "H63情報グループの幹部たち（左から：ファム・スアン・アン、グエン・ティ・バー、グエン・ヴァン・タウ（トゥー・カン）、グエン・ヴァン・ミン）（出典：Quan doi nhan dan紙）",

    text1_ja: "1962年4月、戦争の要請から、また当時ハイ・チュンの秘密名を持っていたファム・スアン・アンを守るため、中央軍事委員会と南部軍事情報部（B2参謀部）は、サイゴン・ザディン特別区党委員会から人員を受け入れ、戦略情報グループH63の前身となる諜報グループA18を設立した。\n\n当初はグエン・スアン・マイン（ムオイ・ニョー）がグループを担当し、その後グエン・ヴァン・タウ（トゥー・カン）大佐がグループ長となった。",

    text2_ja: "グループはファム・スアン・アンの後方支援の役割を担った。\n\nアンは機密資料を縮小撮影したフィルムを、ネムチュア〔豚肉を発酵させたベトナムの食品〕、バインセオ、バインミーなどの料理の中に隠し、グエン・ティ・バー、タム・タオ、ハイ・アインといった連絡係を通じて、サイゴン市内から送り出した。\n\n資料はその後、クチ（フーホアドン）の武装した要員による連絡ルートを経て、南部中央局⁽¹⁾とハノイの政治局へ送られた。",

    text3_ja: "戦争の間、グループの45人のメンバーのうち27人が犠牲となり、その中には烈士グエン・ヴァン・ボーもいた。\n\nグエン・ヴァン・トゥオン（ハイ・トゥオン）少佐のように何度も足を切断されるなど拷問を受けた者もいたが、グループに関する資料によれば、メンバーたちはアンと連絡網についての情報を秘匿し続けた。",

    midImg3_ja: {
      src: "assets/images/CCNL_1962/H63_TraTan.jpg",
      alt: "ハイ・トゥオン少佐――アメリカとベトナム共和国側に捕らえられ、6回にわたって足を切断されても一切自白せず、拷問した者に「俺の負けだ、お前は鋼鉄の生き物だ」と言わしめた人物（出典：Dan Tri紙）",
      caption: "ハイ・トゥオン少佐――アメリカとベトナム共和国側に捕らえられ、6回にわたって足を切断されても一切自白せず、拷問した者に「俺の負けだ、お前は鋼鉄の生き物だ」と言わしめた人物（出典：Dan Tri紙）"
    },

    text4_ja: "1971年、H63は国家から「人民武装勢力英雄」⁽²⁾の称号を授与され、戦時中にこの称号を受けた最初の諜報部隊の一つとなった。",

    bottomImg_ja: {
      src: "assets/images/CCNL_1962/H63_AHLLVTND.jpg",
      alt: "1971年、「人民武装勢力英雄」の称号を授与されたH63情報グループ（出典：VOV）",
      caption: "1971年、「人民武装勢力英雄」の称号を授与されたH63情報グループ（出典：VOV）"
    },

    footnote_ja: "1. 南部中央局：党中央を代表して、戦時中に南部の革命運動を直接指導した機関。<br><br>2. 「人民武装勢力英雄」：戦闘や祖国防衛で特に優れた功績を立てた軍・警察などの団体や個人に、ベトナム国家が贈る称号で、ベトナムで最も名誉ある称号の一つである。",

    note_ja: "",
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
    text1: "Cuối tháng 4/1975, Trần Kim Tuyến nán lại Sài Gòn vì bạn bè, người ủng hộ ông bị bắt hồi đầu tháng, ông không chịu đi khi họ chưa được thả. CIA xếp ông ưu tiên di tản. Nhưng ngày 29/4 người phụ trách chuyện di tản của Tuyến là William Kohlmann đã đi trước, còn Shaplen cũng không thể đưa được ông vào danh sách phóng viên được di tản, đành chỉ dặn: “Tới chỗ ông Ẩn đi!”",

    text2: "Lúc này Ẩn vẫn ở lại Sài Gòn vì còn mẹ già bệnh. Khi Tuyến đến văn phòng Time, Ẩn lái xe đưa Tuyến tới đại sứ quán nhưng đám đông quá dày khiến họ không thể lại gần, gọi điện khắp nơi cũng vô vọng.",

    // Ảnh trèo tường Đại sứ quán Mỹ chèn sau đoạn 2
    midImg2: {
      src: "assets/images/1974_1976/CCNL_1975_TreoTuong.jpg",
      alt: "Người dân cố gắng trèo qua bức tường cao 4,2 mét của Đại sứ quán Mỹ để tiếp cận trực thăng sơ tán (Nguồn: AP)",
      caption: "Người dân cố gắng trèo qua bức tường cao 4,2 mét của Đại sứ quán Mỹ để tiếp cận trực thăng sơ tán (Nguồn: AP)"
    },

    text3: "Khoảng 5 giờ chiều cùng ngày, phóng viên Dan Southerland (báo Christian Science Monitor) gọi tới hỏi thăm xem tình hình của Ẩn hiện tại ra sao. Ẩn liền nhờ anh liên lạc đại sứ quán, và Southerland báo đã nói chuyện với Tom Polgar (trưởng CIA tại Sài Gòn). Polgar nói không thể cử người đón, nhưng nếu Tuyến kịp tới số 22 đường Gia Long thì sẽ đưa tên vào danh sách di tản.",

    text4: "Ẩn vừa lái xe chở Tuyến tới nơi thì lúc này đội bảo vệ đang đóng cổng lại. Ẩn thắng gấp, nhảy ra khỏi xe và quát lớn: “Theo lệnh của Đại sứ, phải cho người này vào!” Người bảo vệ đáp lại rằng không ai được vào nữa, vì trực thăng sắp cất cánh.",

    text5: "Tình huống tưởng như vô vọng, nhưng ngay khi cánh cổng đang được kéo xuống, theo phản xạ, Ẩn dùng tay trái giữ cổng lại, tay phải đẩy Tuyến lọt qua khe cửa vào trong. Không còn thời gian để nói lời tạm biệt hay cảm ơn. “Chạy đi,” Ẩn chỉ kịp nói, nước mắt trào ra. Tuyến vừa khóc vừa kịp thốt lên: “Tôi sẽ không bao giờ quên.”",

    // Cảnh chen chúc lên trực thăng chèn sau đoạn 5
    midImg5: {
      src: "assets/images/1974_1976/CCNL_1975_ChenChuc.jpg",
      alt: "Cảnh chen chúc lên một trong những chuyến trực thăng rời Sài Gòn những ngày cuối tháng 4/1975 (Nguồn: Hugh Van Es)",
      caption: "Cảnh chen chúc lên một trong những chuyến trực thăng rời Sài Gòn những ngày cuối tháng 4/1975 (Nguồn: Hugh Van Es)"
    },

    text6: "Sau này Ẩn giải thích rằng đây là “hành động của trái tim”, cứu bác sĩ Tuyến vì ân nghĩa xưa. Đại tướng Mai Chí Thọ nhận xét hành động này là “Nhân Trí Dũng!” và đây cũng là đánh giá chung của cấp trên dành cho Ẩn.",

    note: "",

    // ==========================================================================
    // 2. TIẾNG NHẬT (JA - 日本語)
    // ==========================================================================
    tooltip_ja: "サイドストーリー (1975): クリックして読む",
    meta_ja: "サイドストーリー · 1975",
    title_ja: "すべてを顧みず、秘密警察の頭目チャン・キム・トゥエンを救出したファム・スアン・アン",

    modalImg_ja: "assets/images/1974_1976/CCNL_1975_PXAVaTTK.jpg",
    modalImgAlt_ja: "ファム・スアン・アン（左）とチャン・キム・トゥエン（右）",
    caption_ja: "ファム・スアン・アン（左）とチャン・キム・トゥエン（右）",

    text1_ja: "1975年4月末、チャン・キム・トゥエンは、月初めに友人や支持者が逮捕され、その人々が釈放されるまでは去ろうとしなかったため、サイゴンにとどまっていた。CIAはトゥエンを優先的な退避対象としていた。しかし、4月29日にはトゥエンの退避を担当していたウィリアム・コールマンが先に去ってしまい、ボブ・シャプレンもトゥエンを退避する記者の名簿に入れることができず、「アンのところへ行け！」と告げるしかなかった。",

    text2_ja: "このとき、アンは病気の老母がいたため、サイゴンに残っていた。トゥエンが『タイム』誌の支局を訪れると、アンは車でトゥエンを大使館まで送ったが、大使館は人々でごったがえしていて近づくことができず、あちこちに電話をかけても無駄だった。",

    midImg2_ja: {
      src: "assets/images/1974_1976/CCNL_1975_TreoTuong.jpg",
      alt: "アメリカ大使館の高さ4.2メートルの壁を乗り越え、退避用のヘリコプターに近づこうとする人々（出典：AP通信）",
      caption: "アメリカ大使館の高さ4.2メートルの壁を乗り越え、退避用のヘリコプターに近づこうとする人々（出典：AP通信）"
    },

    text3_ja: "同日午後5時ごろ、『クリスチャン・サイエンス・モニター』紙の記者ダン・サザーランドが電話をかけてきて、アンの今の状況を尋ねた。アンはすぐに大使館に連絡を取ってくれるよう頼み、サザーランドは、トム・ポルガー（CIAサイゴン支局長）と話をしたと伝えた。ポルガーは、迎えの人を出すことはできないが、トゥエンがザロン通り22番地にたどり着ければ退避者名簿に名前を載せると言った。",

    text4_ja: "アンが車でトゥエンを乗せて到着したちょうどそのとき、警備員たちは門を閉めようとしていた。アンは急ブレーキをかけて車から飛び降り、「大使の命令だ、この人を中に入れろ！」と大声で叫んだ。警備員は、ヘリコプターがまもなく飛び立つので、もう誰も中に入れないと答えた。",

    text5_ja: "状況は絶望的に思えたが、門が引き下ろされようとしたその瞬間、アンはとっさに左手で門を押さえ、右手でトゥエンを隙間から中へ押し込んだ。別れの言葉や礼を言う時間はなかった。「走れ」――アンはそれだけ言うのがやっとで、涙があふれ出た。トゥエンは泣きながら、かろうじて「決して忘れない」と口にした。",

    midImg5_ja: {
      src: "assets/images/1974_1976/CCNL_1975_ChenChuc.jpg",
      alt: "1975年4月末、サイゴンを離れるヘリコプターの一機に、押し合うように乗り込む人々（出典：Hugh Van Es）",
      caption: "1975年4月末、サイゴンを離れるヘリコプターの一機に、押し合うように乗り込む人々（出典：Hugh Van Es）"
    },

    text6_ja: "後にアンは、これは「心に従った行動」であり、昔の恩義に報いるためにトゥエン医師を救ったのだと説明した。マイ・チー・ト大将はこの行動を「仁・智・勇！」と評し、これは上官たちがアンに下した共通の評価でもあった。",

    note_ja: "",
  }
];
