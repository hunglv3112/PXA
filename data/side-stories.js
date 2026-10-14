/**
 * ==============================================================================
 * DANH SÁCH CÁC CÂU CHUYỆN BÊN LỀ (data/side-stories.js) — HỖ TRỢ 2 NGÔN NGỮ
 * ==============================================================================
 * Chứa các mẩu chuyện bên lề trên đường kẻ trục giữa 1957 và 1959.
 * Hỗ trợ song ngữ Tiếng Việt và Tiếng Nhật.
 */

window.AXIS_STORIES = [
  {
    id: "story-1957-1959",
    afterYear: 1957,
    nextYear: 1959,
    avatar: "assets/images/pxa-avatar.jpg",

    // ==========================================================================
    // TIẾNG VIỆT
    // ==========================================================================
    tooltip: "Chuyện bên lề (1957 – 1959): Bấm để đọc",
    title: "Những câu chuyện ngoài lề (1957 – 1959)",
    subtitle: "Thời kỳ du học Mỹ & Chuyến độc hành xuyên lục địa",
    timeBadge: "California · 1957 – 1959",
    stories: [
      {
        title: "1. Chuyến độc hành xuyên nước Mỹ trên chiếc xe hơi cũ",
        tag: "Kỷ niệm khó quên",
        paragraphs: [
          "Sau khi tốt nghiệp Orange Coast College vào năm 1959, thay vì đáp máy bay về nước ngay, Phạm Xuân Ẩn đã mua lại một chiếc ô tô cũ với giá rẻ và tự mình cầm lái vượt hàng ngàn dặm xuyên qua nước Mỹ.",
          "Trong suốt hành trình cô độc ấy, ông ghé qua các thị trấn hẻo lánh, trò chuyện với đủ mọi tầng lớp: từ công nhân sửa xe, chủ quán ăn ven đường đến những người cựu binh. Ông muốn thấu hiểu tâm can người Mỹ bình dân từ đời thực sâu sắc nhất, chứ không chỉ qua trang sách giảng đường."
        ]
      },
      {
        title: "2. Lời dặn của cấp trên: 'Học cách người Mỹ tư duy'",
        tag: "Nhiệm vụ bí mật",
        paragraphs: [
          "Trước khi lên đường sang Mỹ, đồng chí Trần Quốc Hương (Mười Hương) đã dặn dò Phạm Xuân Ẩn một nguyên tắc sống còn: 'Sang đó không phải để tuyên truyền hay thu thập tin tức vội vã, mà nhiệm vụ lớn nhất là học cách người Mỹ suy nghĩ, cách báo chí Mỹ vận hành và cách chính quyền Mỹ ra quyết định'.",
          "Chính sự thấu hiểu tường tận tâm lý và logic biện chứng của người Mỹ đã giúp những bản báo cáo phân tích chiến lược của ông sau này đạt độ chuẩn xác đến kinh ngạc, khiến cả Nhà Trắng lẫn tướng lĩnh Lầu Năm Góc cũng phải dựa vào bài viết của ông để tham khảo."
        ]
      },
      {
        title: "3. Tình bạn chân thành với các giáo sư & bạn học Mỹ",
        tag: "Đời sống sinh viên",
        paragraphs: [
          "Tại trường Orange Coast, Phạm Xuân Ẩn nhanh chóng chiếm trọn cảm tình của bạn bè và các giáo sư bản địa nhờ tính cách hào sảng, chân thành và khiếu hài hước đặc trưng Nam Bộ.",
          "Nhiều bạn học cùng khóa sau này trở thành những ký giả, biên tập viên danh tiếng tại các tòa soạn lớn của Hoa Kỳ. Tình bạn trong sáng từ thời sinh viên đã vô tình tạo nên một mạng lưới quan hệ quốc tế uy tín, giúp vỏ bọc nhà báo của ông sau này vô cùng vững chắc."
        ]
      },
      {
        title: "4. Tình yêu đặc biệt với loài chó và chim săn",
        tag: "Thú vui tao nhã",
        paragraphs: [
          "Ít ai biết rằng Phạm Xuân Ẩn có niềm đam mê đặc biệt với việc nuôi dạy chim săn và chó cảnh. Ngay cả khi về nước hoạt động giữa sào huyệt đối phương, ông luôn có một chú chó béc-giê trung thành đi cùng trên chiếc xe Renault quen thuộc.",
          "Sở thích này không chỉ giúp ông thư giãn tâm lý trước những áp lực ngàn cân của công việc điệp báo, mà còn là chiếc cầu nối tuyệt vời để bắt chuyện, làm thân với các quan chức và cố vấn quân sự Mỹ."
        ]
      }
    ],

    // ==========================================================================
    // TIẾNG NHẬT (JA - 日本語)
    // ==========================================================================
    tooltip_ja: "サイドストーリー (1957 – 1959): クリックして読む",
    title_ja: "知られざるサイドストーリー (1957 – 1959)",
    subtitle_ja: "米国留学時代と大陸横断ドライブの一人旅",
    timeBadge_ja: "カリフォルニア · 1957 – 1959",
    stories_ja: [
      {
        title: "1. 中古車でのアメリカ大陸横断一人旅",
        tag: "忘れ得ぬ思い出",
        paragraphs: [
          "1959年にオレンジ・コースト・カレッジを卒業したアンは、すぐに帰国する代わりに安価な中古車を購入し、自らハンドルを握って数千マイルに及ぶアメリカ大陸横断ドライブへと出発しました。",
          "この孤独な旅路で、彼は小さな町に立ち寄り、整備工、街道沿いのダイナーの店主、復員軍人など、あらゆる階層の庶民と語り合いました。教科書ではなく、生のアメリカ社会の深層を理解したかったのです。"
        ]
      },
      {
        title: "2. 指導者の教え：「アメリカ人の思考法を学べ」",
        tag: "極秘任務",
        paragraphs: [
          "渡米前、情報指導者のトラン・クオック・フオン（ムオイ・フオン）はアンにこう告げました。「現地へ行くのは宣伝や目先の情報収集のためではない。最大任務は、アメリカ人がどのように考え、メディアがどう動き、政府がどう決断を下すかを徹底的に学ぶことだ」。",
          "この深い心理的・論理的理解こそが、後の彼の戦略分析報告に驚異的な正確さをもたらし、ホワイトハウスや国防総省の高官たちまでもが彼の書いた記事を参照する理由となりました。"
        ]
      },
      {
        title: "3. アメリカの教授や学友たちとの真摯な友情",
        tag: "学生時代",
        paragraphs: [
          "オレンジ・コースト・カレッジで、アンはその温厚で率直な人柄と南部ベトナム特有のユーモアセンスにより、教授や学友たちから絶大な人気を集めました。",
          "同窓生たちの多くは後に全米主要メディアの著名記者や編集者となり、大学時代に培われた純粋な友情は、サイゴン帰国後の彼のジャーナリストとしての強固な基盤となりました。"
        ]
      },
      {
        title: "4. 愛犬と猟鳥への特別な情熱",
        tag: "風雅な趣味",
        paragraphs: [
          "アンが無類の愛犬家であり、猟鳥の飼育にも熱中していたことは広く知られています。敵陣の只中で活動していた頃も、愛車のルノーには常に忠実なシェパード犬が同乗していました。",
          "この趣味は諜報任務の重圧から心を解き放つだけでなく、米軍将校や顧問たちと打ち解け、親交を深めるための絶好のきっかけともなりました。"
        ]
      }
    ]
  }
];
