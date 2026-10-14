/**
 * ==============================================================================
 * DỮ LIỆU TIỂU SỬ PHẠM XUÂN ẨN (data/bio-data.js) — HỖ TRỢ SONG NGỮ (VI / JA)
 * ==============================================================================
 * Trình bày theo layout trang biên khảo bối cảnh lịch sử:
 * - Hero banner (ảnh, badge, tiêu đề, mô tả mở đầu)
 * - Quote box (danh ngôn của Phạm Xuân Ẩn)
 * - Danh sách các chương / giai đoạn cuộc đời (tag, period, lead, ảnh, văn bản)
 * - Khối kêu gọi hành động CTA chuyển sang Timeline
 */

window.BIO_DATA = {
  // ============================================================================
  // 1. TIẾNG VIỆT (VI)
  // ============================================================================
  vi: {
    hero: {
      badge: "TIỂU SỬ NHÂN VẬT (1927 – 2006)",
      title: "Thiếu tướng Phạm Xuân Ẩn",
      subtitle: "Một người — hai cuộc đời song hành trọn vẹn: Nhà báo quốc tế tài hoa và Điệp viên chiến lược hoàn hảo giữa tâm bão lịch sử.",
      bgImage: "assets/images/context-saigon.jpg"
    },

    quote: {
      text: "“Tôi không hề nói dối ai. Những bản phân tích chiến lược sâu sắc mà tôi bí mật gửi về cho Trung ương Cục cũng chính là bản chất sự thật mà tôi cung cấp cho các đồng nghiệp Mỹ tại tạp chí Time.”",
      author: "— Thiếu tướng, Nhà báo Phạm Xuân Ẩn (Hai Trung / X6)"
    },

    video: {
      tag: "Thước phim tư liệu",
      badge: "Video tư liệu",
      title: "Tiểu sử cuộc đời ông Phạm Xuân Ẩn",
      lead: "Thước phim tư liệu quý giá tái hiện chân dung, cuộc đời và hành trình hoạt động tình báo chiến lược huyền thoại của Thiếu tướng Phạm Xuân Ẩn.",
      src: "assets/videos/TieuSu.mp4",
      fallbackSrc: "videos/TieuSu.mp4",
      caption: "Tiểu sử cuộc đời ông Phạm Xuân Ẩn"
    },

    chapters: [
      {
        id: "bio-origins",
        period: "1927 – 1954",
        tag: "Thời niên thiếu & Giác ngộ",
        title: "Từ đất Biên Hòa đến ngọn cờ Cách mạng",
        image: "",
        lead: "Cội nguồn Nam Bộ và ngã rẽ dấn thân trọn đời vì độc lập tự do của Tổ quốc.",
        paragraphs: [
          "Phạm Xuân Ẩn sinh ngày 12/9/1927 tại xã Bình Trước, Biên Hòa (nay thuộc tỉnh Đồng Nai), tên khai sinh là Phạm Văn Thành. Về sau ông còn được biết đến với bí danh Trần Văn Trung, và người thân mật thường gọi là Hai Trung.",
          "Sinh trưởng trong một gia đình công chức trắc địa liêm khiết, từ thuở thiếu thời tại Cần Thơ, ông đã sớm chứng kiến nỗi lầm than của người dân mất nước. Mùa thu năm 1945, khi Cách mạng Tháng Tám bùng nổ, chàng thanh niên 18 tuổi quyết định rời ghế nhà trường, hăng hái tham gia tổ chức Thanh niên Tiền phong rồi gia nhập hàng ngũ Việt Minh đánh Pháp.",
          "Năm 1953, nhận thấy tài năng, sự nhạy bén và phẩm chất trung kiên đặc biệt ở ông, tổ chức đã chính thức kết nạp Phạm Xuân Ẩn vào Đảng Cộng sản Việt Nam — đặt nền móng cho sứ mệnh tình báo chiến lược xuyên thế kỷ."
        ]
      },
      {
        id: "bio-study",
        period: "1957 – 1959",
        tag: "Du học Mỹ & Vỏ bọc",
        title: "Vỏ bọc nhà báo và sứ mệnh 'Học cách người Mỹ tư duy'",
        image: "assets/images/sample-journalist.jpg",
        lead: "Nước cờ chiến lược chưa từng có của tình báo cách mạng Việt Nam.",
        paragraphs: [
          "Sau Hiệp định Genève 1954, nhận định đối thủ chiến lược mới của dân tộc sẽ là Hoa Kỳ, chỉ huy tình báo huyền thoại Trần Quốc Hương (Mười Hương) và lãnh đạo cấp cao đã đưa ra quyết định có một không hai: Cử Phạm Xuân Ẩn sang Mỹ học báo chí bài bản.",
          "Mục tiêu cốt tử được chỉ thị rõ: 'Không phải sang đó để tuyên truyền hay thu thập tin vặt, mà là học cách người Mỹ tư duy, cách chính quyền Mỹ ra quyết định và cách báo chí Mỹ vận hành'.",
          "Tại trường Orange Coast College (California), ông xuất sắc tốt nghiệp với bằng Associate of Arts, viết bài cho báo sinh viên The Barnacle, thực tập tại The Sacramento Bee và Văn phòng Liên Hợp Quốc. Trước khi về nước, ông tự lái xe xuyên nước Mỹ để cảm nhận trọn vẹn bề sâu xã hội này, xây dựng cho mình một vỏ bọc văn hóa không tì vết."
        ]
      },
      {
        id: "bio-undercover",
        period: "1960 – 1975",
        tag: "Đỉnh cao tình báo",
        title: "Mật danh X6 — Bậc thầy tình báo giữa chốn Sài Gòn rực lửa",
        image: "assets/images/sample-intel.jpg",
        lead: "Một con người làm rung chuyển những quyết sách chiến tranh của cả một siêu cường.",
        paragraphs: [
          "Hồi hương cuối năm 1959, Phạm Xuân Ẩn chính thức nhận mật danh X6, trực thuộc Cụm tình báo H63 Củ Chi. Ông đầu quân cho hãng Reuters, sau đó trở thành phóng viên chính thức (Staff Correspondent) của tuần báo Time — người Việt Nam duy nhất đạt được vị trí biên chế danh giá này.",
          "Quán cà phê Givral trên đường Tự Do trở thành 'tổng hành dinh' của ông. Với tài ngoại giao dí dỏm, kiến thức uyên bác và sự chân thành, ông kết thân từ tướng lĩnh Sài Gòn, các trùm CIA (Edward Lansdale, William Colby) đến giới ký giả quốc tế.",
          "Hàng ngàn bản tài liệu tuyệt mật, các bản phân tích quân sự từ chiến dịch Ấp Bắc (1963), Tổng tiến công Mậu Thân (1968), Đường 9 - Nam Lào (1971), cho đến dự báo bước ngoặt lịch sử: 'Mỹ đã rút quân thì sẽ không bao giờ quay lại' sau Hiệp định Paris 1973 — tất cả đều được ông gửi về chiến khu qua đường dây giao liên bí mật của bà Bảy Triều, góp phần định đoạt thắng lợi của cuộc kháng chiến."
        ]
      },
      {
        id: "bio-legacy",
        period: "1975 – 2006",
        tag: "Nhân cách & Huyền thoại",
        title: "Chữ 'Nghĩa' cao cả và cuộc đời thanh bạch",
        image: "assets/images/pxa-avatar.jpg",
        lead: "Vượt qua ranh giới thù — bạn bằng chiều sâu văn hóa và lòng nhân ái bao la.",
        paragraphs: [
          "Ngày 30/4/1975, khi Sài Gòn giải phóng, Phạm Xuân Ẩn kiên quyết ở lại mảnh đất quê hương. Một trong những hành động phi thường nhất của ông là đã vận dụng quan hệ để cứu bác sĩ Trần Kim Tuyến (cựu trùm mật vụ đối phương) lên chuyến trực thăng di tản cuối cùng — thể hiện trọn vẹn chữ 'Nghĩa' của một nhân cách lớn.",
          "Ngày 15/1/1976, Nhà nước phong tặng ông danh hiệu Anh hùng Lực lượng Vũ trang Nhân dân, sau đó phong quân hàm Thiếu tướng. Khi thân phận ông được công khai, các đồng nghiệp Mỹ tại Time và báo giới phương Tây đều bàng hoàng nhưng khâm phục tuyệt đối sự trung thực và tính chuyên nghiệp của ông.",
          "Những năm tháng sau chiến tranh, ông sống giản dị, khiêm nhường bên gia đình và những chú chó cưng tại TP. Hồ Chí Minh. Ngày 20/9/2006, ông thanh thản trút hơi thở cuối cùng, để lại một di sản bất tử về nghệ thuật tình báo và nhân cách cao đẹp của một người con Đất Việt."
        ]
      }
    ],

    cta: {
      promptText: "Khám phá chi tiết hai cuộc đời song hành qua từng năm tháng",
      buttonText: "Xem Dòng Thời Gian Song Hành (Timeline) ›",
      subText: "Trục thời gian tương tác 2 nhánh: Điệp viên & Nhà báo (1957 – 1976)"
    }
  },

  // ============================================================================
  // 2. TIẾNG NHẬT (JA - 日本語)
  // ============================================================================
  ja: {
    hero: {
      badge: "人物伝 (1927 – 2006)",
      title: "ファム・スアン・アン少将",
      subtitle: "並行する二つの生涯：類まれなる国際ジャーナリストにして、歴史の激流を操った完璧なる戦略諜報員。",
      bgImage: "assets/images/context-saigon.jpg"
    },

    quote: {
      text: "「私は誰にも嘘をついたことはない。私が密かにハノイの革命司令部へ送った鋭い戦略分析は、タイム誌の米国人同僚たちに提供した真実そのものだったからだ。」",
      author: "— ファム・スアン・アン少将 / 暗号名 X6（ハイ・チュン）"
    },

    video: {
      tag: "歴史的映像資料",
      badge: "ドキュメンタリー映像",
      title: "Tiểu sử cuộc đời ông Phạm Xuân Ẩn",
      lead: "ファム・スアン・アン少将の波乱に満ちた生涯、高潔な人格、そして伝説的な諜報活動の軌跡をたどる貴重な記録映像。",
      src: "assets/videos/TieuSu.mp4",
      fallbackSrc: "videos/TieuSu.mp4",
      caption: "Tiểu sử cuộc đời ông Phạm Xuân Ẩn"
    },

    chapters: [
      {
        id: "bio-origins",
        period: "1927 – 1954",
        tag: "青年期と志",
        title: "ドンナイの大地に生まれ、革命の道へ",
        image: "",
        lead: "南部ベトナムの清廉な家庭に生まれ、民族独立の理想に目覚める。",
        paragraphs: [
          "ファム・スアン・アンは1927年9月12日、ビエンホア（現ドンナイ省）に生まれました。本名はファム・ヴァン・タイン。後に秘密名トラン・ヴァン・チュン、愛称「ハイ・チュン」としても知られます。",
          "植民地支配下の人々の苦難を目撃した彼は、1945年の八月革命勃発とともに18歳で学校を離れ、前衛青年隊を経てベトミン抗仏戦線に身を投じました。",
          "1953年、その類まれな資質と忠誠心を評価され、共産党に正式入党。これが半世紀に及ぶ戦略諜報活動への決定的な第一歩となりました。"
        ]
      },
      {
        id: "bio-study",
        period: "1957 – 1959",
        tag: "米国留学と偽装",
        title: "記者という偽装と「米国の思考法」の習得",
        image: "assets/images/sample-journalist.jpg",
        lead: "ベトナム革命情報史における最も大胆な戦略的一手。",
        paragraphs: [
          "1954年のジュネーヴ協定後、米国の本格介入を予見した情報最高指導幹部ムオイ・フオンらは、前代未聞の決断を下しました。アンを米国へジャーナリズム留学させることでした。",
          "「些細な情報を盗むのではなく、アメリカ人の思考法、政策決定の論理、メディアの動かし方を学べ」という特命を受けました。",
          "カリフォルニア州オレンジ・コースト・カレッジで準学士号を取得し、サクラメント・ビー紙や国連でインターンを経験。帰国直前には全米横断ドライブを敢行し、完璧なジャーナリストの身分を確立しました。"
        ]
      },
      {
        id: "bio-undercover",
        period: "1960 – 1975",
        tag: "情報戦の頂点",
        title: "暗号名X6——硝煙立ち込めるサイゴンの魔術師",
        image: "assets/images/sample-intel.jpg",
        lead: "超大国の戦争政策を揺るがし続けた、唯一無二の存在。",
        paragraphs: [
          "1959年末に帰国後、コードネーム「X6」として伝説のクチH63諜報網に配属。ロイター通信を経て、米有力週刊誌『タイム』の正規特派員となりました。",
          "トゥードー通りの「カフェ・ジヴラール」を拠点に、将軍たちやCIA工作官（エドワード・ランスデール、ウィリアム・コルビー）、各国の名特派員たちと深い親交を結びました。",
          "アプバクの戦い（1963年）、テト攻勢（1968年）、ラオス侵攻（1971年）の事前察知から、1973年パリ協定後の「米軍再介入なし」の歴史的確信に至るまで、彼が送り続けた極秘文書はベトナム戦争の勝敗を決定づけました。"
        ]
      },
      {
        id: "bio-legacy",
        period: "1975 – 2006",
        tag: "高潔なる人道主義",
        title: "生涯をかけた「義」と歴史の証人",
        image: "assets/images/pxa-avatar.jpg",
        lead: "敵味方の垣根を越え、深い人間性と信義を全うした人生。",
        paragraphs: [
          "1975年4月30日のサイゴン解放時、アンは脱出せず祖国に留まりました。彼は最大の危機の中で、旧敵であった秘密警察長官チャン・キム・トゥエン医師を最後の脱出ヘリに乗せて命を救うという、義理人情の極致を示しました。",
          "1976年に国家最高位の「人民武装力量英雄」称号を授与され、後にベトナム人民軍少将に昇進。身分が公表された際、タイム誌をはじめとする西側のジャーナリストたちも、彼の誠実さとプロフェッショナリズムに心からの敬意を表しました。",
          "戦後はホーチミン市で愛犬たちと清貧かつ穏やかな余生を過ごし、2006年9月20日に79歳で永眠。その高潔な生涯は、伝説として今も語り継がれています。"
        ]
      }
    ],

    cta: {
      promptText: "並行する二つの生涯を詳細な年表で追体験する",
      buttonText: "二重軸タイムラインを見る ›",
      subText: "対話型タイムライン：諜報員とジャーナリスト（1957年 – 1976年）"
    }
  }
};
