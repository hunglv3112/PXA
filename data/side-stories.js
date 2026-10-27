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
    tooltip: "Chuyện bên lề (1957 – 1958): Bấm để đọc",
    meta: "Chuyện bên lề · 1957 – 1958",
    title: "Biến cố cha qua đời trước chuyến đi du học Mỹ",

    // ── ẢNH HERO BANNER ĐẦU POPUP (KÈM CHÚ THÍCH) ──
    modalImg: "assets/images/1957_1959/1959_ChaPXAQuaDoi.jpg",
    modalImgAlt: "Bàn thờ và di ảnh thân phụ của Phạm Xuân Ẩn",
    caption: "Bàn thờ và di ảnh thân phụ của Phạm Xuân Ẩn — biến cố đau thương diễn ra ngày 24/9/1957, chỉ vài tuần trước chuyến đi du học Mỹ.",

    // ── NỘI DUNG VĂN BẢN (KÈM ẢNH CHÈN GIỮA MID-IMG) ──
    text1: "Ngày 24/9/1957, chỉ vài tuần trước chuyến du học Mỹ của Phạm Xuân Ẩn, cha ông qua đời sau thời gian dài mắc bệnh lao nặng. Là con trưởng, ông phải gánh vác trách nhiệm với gia đình và chịu tang cha trong ba năm theo truyền thống Việt Nam. Trước biến cố này, ông không nghĩ rằng ông sẽ có thể tiếp tục tới Mỹ để học.",

    // Ảnh đồng chí Mười Hương chèn sau đoạn 1
    midImg: {
      src: "assets/images/1957_1959/1957_MuoiHuong.jpg",
      alt: "Đồng chí Mười Hương (Trần Quốc Hương)",
      caption: "Đồng chí Mười Hương (Trần Quốc Hương) — người chỉ huy trực tiếp đã trấn an và bảo đảm tổ chức cách mạng sẽ chăm lo vẹn toàn cho gia đình."
    },

    text2: "Người quyết định có hoãn nhiệm vụ này hay không là cấp trên trực tiếp của ông, Mười Hương. Nhận thấy không còn ai khác có thể đảm nhận nhiệm vụ này, Mười Hương trấn an ông rằng phía cách mạng sẽ lo cho gia đình ông.",

    text3: "Sau đó, Phạm Xuân Ẩn xin phép mẹ về chuyến đi khi vẫn đang trong thời gian chịu tang cha. Bà hết lòng ủng hộ con trai và cho rằng chỉ cần biết con đang cống hiến cho cách mạng là đủ.",

    text4: "Có được lời đảm bảo từ tổ chức và sự ủng hộ của mẹ, tối 10/10/1957, Phạm Xuân Ẩn nén lại nỗi đau mất cha để lên đường sang Mỹ.",

    // Ảnh tư liệu bổ sung bên dưới (Phi trường Tân Sơn Nhất)
    bottomImg: {
      src: "assets/images/1957_1959/1959_PhiTruongSanBayTanSanNhatTruoc1975.jpg",
      alt: "Phi trường Tân Sơn Nhất thập niên 1950",
      caption: "Phi trường Tân Sơn Nhất (Sài Gòn) thập niên 1950 — nơi Phạm Xuân Ẩn bước lên chuyến bay đêm 10/10/1957 lên đường sang Mỹ."
    },

    note: "",
    src: "Nguồn: Larry Berman (Điệp viên hoàn hảo); Thomas Bass (The Spy Who Loved Us)",

    // ==========================================================================
    // 2. TIẾNG NHẬT (JA - 日本語)
    // ==========================================================================
    tooltip_ja: "サイドストーリー (1957 – 1958): クリックして読む",
    meta_ja: "サイドストーリー · 1957 – 1958",
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
  }
];
