/**
 * ==============================================================================
 * DỮ LIỆU CUỘC ĐỜI HẬU CHIẾN: MỘT PHẠM XUÂN ẨN BÌNH LẶNG (data/postwar-data.js)
 * ==============================================================================
 * Trình bày theo layout trang biên khảo bối cảnh / tiểu sử:
 * - Hero banner (ảnh, badge, tiêu đề, mô tả mở đầu)
 * - Quote box (danh ngôn của Phạm Xuân Ẩn sau chiến tranh)
 * - Danh sách các chương / giai đoạn cuộc đời sau 1975
 * - Khối kêu gọi hành động CTA quay lại Timeline hoặc về đầu trang
 * Hỗ trợ 2 ngôn ngữ: Tiếng Việt (VI) và Tiếng Nhật (JA).
 */

window.POSTWAR_DATA = {
  // ============================================================================
  // 1. TIẾNG VIỆT (VI)
  // ============================================================================
  vi: {
    hero: {
      badge: "HẬU CHIẾN & NHỮNG NĂM THÁNG BÌNH LẶNG (1975 – 2006)",
      title: "Một Phạm Xuân Ẩn bình lặng sau chiến tranh",
      subtitle: "Rời xa ánh đèn nghiệp vụ và những bản tin rực lửa, người tình báo huyền thoại chọn một cuộc đời thanh bạch, an nhiên bên bạn bè, đàn chim, chú chó và những hoài niệm không bao giờ phai nhạt.",
      bgImage: "assets/images/context-saigon.jpg"
    },

    quote: {
      text: "“Sau chiến tranh, điều tôi mong muốn nhất không phải là huân chương hay bổng lộc, mà là nhìn thấy đất nước yên bình, nhân dân được ấm no, và bạn bè từ cả hai phía chiến tuyến có thể ngồi lại với nhau uống một tách trà mà không còn hận thù.”",
      author: "— Thiếu tướng, Nhà báo Phạm Xuân Ẩn"
    },

    chapters: [
      {
        id: "postwar-peace",
        period: "1975 – 1976",
        tag: "Khép lại cuộc chiến",
        title: "Ở lại Sài Gòn và chữ 'Nghĩa' trọn vẹn",
        image: "assets/images/pxa-avatar.jpg",
        lead: "Một quyết định sinh tử và phẩm cách cao đẹp vượt lên trên mọi hận thù.",
        paragraphs: [
          "Trưa ngày 30 tháng 4 năm 1975, khi chiếc xe tăng giải phóng húc đổ cánh cổng Dinh Độc Lập, Phạm Xuân Ẩn vẫn điềm tĩnh có mặt tại Sài Gòn. Ông kiên quyết không di tản theo người Mỹ dù đã được dành sẵn suất vé đặc biệt cùng gia đình.",
          "Trước đó chỉ vài giờ, bằng sự mưu trí và ân tình cá nhân sâu sắc, ông đã cứu sống bác sĩ Trần Kim Tuyến (người từng đứng đầu Cơ quan Mật vụ Phủ Tổng thống Sài Gòn) lên chuyến trực thăng di tản cuối cùng trên nóc tòa nhà số 22 Gia Long. Đối với ông, nhiệm vụ cách mạng phải hoàn thành tuyệt đối, nhưng tình người và chữ 'Nghĩa' đối với một con người sa cơ lỡ vận không bao giờ được phép phản bội.",
          "Năm 1976, Nhà nước chính thức phong tặng ông danh hiệu cao quý Anh hùng Lực lượng Vũ trang Nhân dân. Khi danh tính điệp viên X6 được hé lộ, cả thế giới phương Tây lẫn giới tình báo quốc tế đều sững sờ thán phục trước một kỳ tích chưa từng có."
        ]
      },
      {
        id: "postwar-life",
        period: "Thập niên 1980",
        tag: "Đời sống thanh bần",
        title: "Căn nhà nhỏ, bầy thú cưng và niềm vui điền viên",
        image: "",
        lead: "Xa rời quyền lực và bổng lộc, ông tìm niềm an lạc trong sự thanh tịnh thường nhật.",
        paragraphs: [
          "Sau ngày non sông liền một dải, dù được phong quân hàm cấp tướng và giữ vị trí đặc biệt, Phạm Xuân Ẩn từ chối mọi đặc quyền đặc lợi hay biệt thự xa hoa. Ông chọn sống đạm bạc, khiêm nhường trong căn nhà quen thuộc ở đường Hồng Thập Tự (nay là đường Nguyễn Thị Minh Khai, Quận 3, TP. Hồ Chí Minh).",
          "Thú vui lớn nhất của vị tướng tình báo thời bình là chăm sóc những chú chó trung thành (giống German Shepherd và chó săn) cùng những lồng chim sẻ, chào mào ríu rít trước hiên nhà. Ông từng hóm hỉnh tâm sự: 'Động vật chân thành và không bao giờ biết phản bội con người'.",
          "Trải qua những năm tháng bao cấp khó khăn, ông cùng vợ con lặng lẽ chia sẻ nhọc nhằn với nhân dân lao động, giữ trọn cốt cách thanh cao của một người lính Cụ Hồ và một nhà báo uyên bác, khiêm nhường."
        ]
      },
      {
        id: "postwar-bridge",
        period: "Thập niên 1990",
        tag: "Hàn gắn & Hòa giải",
        title: "Cầu nối vô hình hàn gắn bang giao Việt – Mỹ",
        image: "assets/images/sample-journalist.jpg",
        lead: "Điểm hẹn của các học giả, nhà báo quốc tế và những cựu chiến binh bên kia bờ đại dương.",
        paragraphs: [
          "Khi Việt Nam và Hoa Kỳ bước vào tiến trình bình thường hóa quan hệ ngoại giao, phòng khách nhỏ đầy ắp sách báo của Phạm Xuân Ẩn trở thành điểm dừng chân không thể thiếu của các nhà báo cộm cán quốc tế, các sử gia (như David Halberstam, Neil Sheehan, Morley Safer, Thomas Bass, Larry Berman) và các cựu chiến binh Mỹ.",
          "Họ tìm đến ông không chỉ để giải mã những bí mật chiến tranh, mà trên hết là vì lòng kính trọng trước một trí tuệ sắc sảo, sự chân thành và tình bạn thủy chung không hề thay đổi theo thời cuộc.",
          "Bằng cái nhìn khách quan, sâu sắc và tính nhân văn cao cả, ông đã giúp nhiều thế hệ người Mỹ thấu hiểu được cội rễ lòng yêu nước của người Việt Nam, đóng vai trò như một đại sứ văn hóa âm thầm hàn gắn những vết thương chiến tranh giữa hai dân tộc."
        ]
      },
      {
        id: "postwar-farewell",
        period: "20/09/2006",
        tag: "Huyền thoại bất tử",
        title: "Một nụ cười thanh thản đi vào cõi vĩnh hằng",
        image: "",
        lead: "Khép lại một đời người phi thường, để lại sự kính phục trọn vẹn từ cả hai chiến tuyến.",
        paragraphs: [
          "Sáng ngày 20 tháng 9 năm 2006, Thiếu tướng Phạm Xuân Ẩn trút hơi thở cuối cùng tại Viện Quân y 175 (TP. Hồ Chí Minh), hưởng thọ 79 tuổi.",
          "Tại tang lễ trang nghiêm của ông, bên cạnh những vòng hoa của các nhà lãnh đạo Đảng, Nhà nước và Quân đội nhân dân Việt Nam, còn có những lời chia buồn sâu sắc từ các đồng nghiệp quốc tế tại tạp chí Time, Reuters và các ký giả khắp năm châu.",
          "Phạm Xuân Ẩn ra đi trong sự thanh thản tuyệt đối của một tâm hồn đã dâng hiến trọn vẹn cho độc lập dân tộc, đồng thời giữ trọn phẩm giá, chữ tín và tình thương yêu con người giữa dòng chảy bão táp của lịch sử."
        ]
      }
    ],

    cta: {
      promptText: "Hành trình hai nửa một đời người huyền thoại khép lại trong thanh thản",
      buttonText: "‹ Quay lại Dòng Thời Gian Song Hành",
      subText: "Xem lại trục thời gian 2 nhánh Tình báo & Nhà báo (1957 – 1976)"
    }
  },

  // ============================================================================
  // 2. TIẾNG NHẬT (JA - 日本語)
  // ============================================================================
  ja: {
    hero: {
      badge: "戦後と穏やかな日々 (1975 – 2006)",
      title: "戦後の穏やかなファム・スアン・アン",
      subtitle: "任務の重圧と最前線の硝煙を離れ、伝説のスパイは友と愛犬、小鳥たちに囲まれた清貧で穏やかな余生を選びました。",
      bgImage: "assets/images/context-saigon.jpg"
    },

    quote: {
      text: "「戦後、私が最も望んだのは勲章でも富でもなく、国に平和が訪れ、人々が豊かになり、かつて戦火を交えた両陣営の友人たちが一杯の茶を酌み交わしながら語り合える日だった。」",
      author: "— ファム・スアン・アン少将 / ジャーナリスト"
    },

    chapters: [
      {
        id: "postwar-peace",
        period: "1975年 – 1976年",
        tag: "戦争の終結",
        title: "サイゴン残留と貫き通した「義」の心",
        image: "assets/images/pxa-avatar.jpg",
        lead: "生死の決断と、敵味方の垣根を越えた人間性の勝利。",
        paragraphs: [
          "1975年4月30日正午、解放軍の戦車が大統領府の門を突き破ったとき、アンはサイゴンに留まり続けました。彼は米国行きの特別脱出枠を拒否し、祖国に留まる道を選びました。",
          "そのわずか数時間前、アンは自らの機知と情義によって、旧敵である南ベトナム秘密警察長官チャン・キム・トゥエン医師をシアタービルの屋上から最終脱出ヘリに乗せて救出しました。革命の任務には一歩も引かず忠実でありながら、窮地に陥った友人を見捨てない——これこそがアンの真骨頂でした。",
          "1976年、彼はベトナム国家最高位の「人民武装力量英雄」称号を授与されました。真の正体が公表されたとき、西側諸国と米国の情報関係者は、この前代未聞の偉業に言葉を失いました。"
        ]
      },
      {
        id: "postwar-life",
        period: "1980年代",
        tag: "清貧の暮らし",
        title: "小さな家屋、愛犬と鳥たちとの静かな日々",
        image: "",
        lead: "権力と特権を遠ざけ、日常の平穏に真の幸福を見出す。",
        paragraphs: [
          "祖国統一後、軍の将軍に任命されながらも、アンは一切の特権や豪華な邸宅の提供を辞退しました。彼はホーチミン市ホンタップトゥー通り（現グエン・ティ・ミン・カイ通り）の馴染みの質素な家で暮らし続けました。",
          "平時の彼の最大の楽しみは、忠実なシェパードや猟犬たちの世話をし、軒先に吊るした鳥かごの小鳥たちのさえずりに耳を傾けることでした。彼は微笑みながらこう語りました。「動物たちはどこまでも正直で、決して人を裏切らない。」",
          "配給制の困難な時代にも、彼は庶民と同じ苦難を分かち合い、謙虚で高潔な知識人の気品を生涯保ち続けました。"
        ]
      },
      {
        id: "postwar-bridge",
        period: "1990年代",
        tag: "和解の架け橋",
        title: "越米関係を静かに結んだ見えざる架け橋",
        image: "assets/images/sample-journalist.jpg",
        lead: "各国の特派員、歴史家、退役軍人たちが集う知のサロン。",
        paragraphs: [
          "ベトナムと米国の国交正常化が進む中、アンの書斎はタイム誌の旧友たちをはじめ、多くの国際的ジャーナリストや歴史家（デイヴィッド・ハルバースタム、ニール・シーハン、トーマス・バス、ラリー・バーマンら）の巡礼地となりました。",
          "彼らが訪れたのは、単に戦争の機密を知るためだけでなく、何よりもアンの鋭い知性、真摯な人柄、そして時代が変わっても色褪せない不変の友情に惹かれたからでした。",
          "公正で温かい眼差しを通じて、彼は多くのアメリカ人にベトナム人の祖国愛の本質を理解させ、両国民の心の傷を癒やす民間大使の役割を静かに果たしました。"
        ]
      },
      {
        id: "postwar-farewell",
        period: "2006年9月20日",
        tag: "永遠の伝説",
        title: "穏やかな微笑みとともに、永遠の眠りへ",
        image: "",
        lead: "波乱に満ちた生涯の幕引きと、両陣営から寄せられた惜しみない敬意。",
        paragraphs: [
          "2006年9月20日の朝、ファム・スアン・アン少将はホーチミン市の第175軍病院にて、享年79歳で静かに息を引き取りました。",
          "彼の厳粛な葬儀には、ベトナム党・国家・軍の指導者たちからの花輪とともに、タイム誌、ロイター通信をはじめ世界中の国際ジャーナリストたちから深い哀悼の言葉が寄せられました。",
          "民族の独立にすべてを捧げながらも、人間としての品格と信義、愛を最後まで貫き通した伝説の男は、完璧な心の平安のうちに旅立ちました。"
        ]
      }
    ],

    cta: {
      promptText: "波乱に満ちた二重の生涯は、静かな平安のうちに幕を閉じました",
      buttonText: "‹ 二重軸タイムラインへ戻る",
      subText: "諜報員とジャーナリストの並行年表（1957年 – 1976年）を再確認"
    }
  }
};
