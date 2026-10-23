/**
 * ==============================================================================
 * TỆP CẤU HÌNH GIAO DIỆN CHÍNH (data/config.js) — HỖ TRỢ 2 NGÔN NGỮ (VI / JA)
 * ==============================================================================
 * Bạn có thể tự do chỉnh sửa tiêu đề trang, chữ hiển thị ở 2 lề (rails),
 * và toàn bộ nội dung cột giới thiệu đầu trang bằng cả Tiếng Việt và Tiếng Nhật.
 */

window.APP_CONFIG = {
  // ============================================================================
  // 1. TIẾNG VIỆT (VI)
  // ============================================================================
  vi: {
    pageTitle: "Phạm Xuân Ẩn — Hai nửa một đời người",

    // Nhãn chữ chạy dọc 2 bên lề trái (Top = Nửa trên, Bottom = Nửa dưới)
    rails: {
      top: {
        label: "Tình báo",
        subLabel: "Mật danh X6 · Điệp viên hoàn hảo"
      },
      bottom: {
        label: "Nhà báo",
        subLabel: "Ký giả Time & Reuters"
      }
    },

    // Nội dung cột mở đầu (Intro Column) ở góc trái timeline
    intro: {
      name: "Phạm Xuân Ẩn",
      years: "Một con người với hai số phận song hành",
      subtitle: "",
      descriptionTop: "Nửa trên là cuộc đời một nhà tình báo chiến lược lỗi lạc mang bí số X6, hoạt động trong lòng đối phương suốt hai thập kỷ.",
      descriptionBottom: "Nửa dưới là ký giả của Time và Reuters, thân với cả giới tướng lĩnh Sài Gòn - Mỹ lẫn báo chí quốc tế. Cả hai cùng vận hành trên một trục lịch sử.",
      guideText: "Kéo chuột ngang hoặc cuộn để khám phá. Bấm vào từng mốc để xem chi tiết."
    },

    // Cấu hình nhãn nút và chữ hệ thống
    ui: {
      prevMilestone: "‹ Mốc trước",
      nextMilestone: "Mốc sau ›",
      closeModal: "Đóng cửa sổ",
      scrollLeftAria: "Cuộn sang trái",
      scrollRightAria: "Cuộn sang phải",
      factCheckBadge: "Cần đối chiếu nguồn",
      backToContext: "‹ Bối cảnh lịch sử",
      backToBio: "‹ Tiểu sử Phạm Xuân Ẩn",
      enterBio: "Tiểu sử Phạm Xuân Ẩn ›",
      enterTimeline: "Xem Dòng Thời Gian ›",
      toPostwar: "Phòng lưu niệm Phạm Xuân Ẩn ›",
      backToTimeline: "‹ Dòng thời gian",
      storyBadge: "CHUYỆN BÊN LỀ"
    }
  },

  // ============================================================================
  // 2. TIẾNG NHẬT (JA - 日本語)
  // ============================================================================
  ja: {
    pageTitle: "ファム・スアン・アン — 二つの顔を持つ男",

    rails: {
      top: {
        label: "諜報員",
        subLabel: "暗号名 X6 · 完璧なスパイ"
      },
      bottom: {
        label: "記者",
        subLabel: "タイム誌 ＆ ロイター特派員"
      }
    },

    intro: {
      name: "ファム・スアン・アン",
      years: "1927 – 2006",
      subtitle: "二つの顔を生きた男",
      descriptionTop: "一人の男、二つの並行した運命。上半分はコードネームX6を持つ伝説的な戦略スパイの生涯。敵陣の深奥で20年間にわたり活動を続けました。",
      descriptionBottom: "下半分は「タイム」や「ロイター」の敏腕記者であり、米軍高官や国際特派員たちの親友。二つの人生は同一の歴史の軸上で交差しています。",
      guideText: "左右にドラッグまたはホイールでスクロール。カードをクリックして詳細を表示。黄色の点は確認が必要な記録。"
    },

    ui: {
      prevMilestone: "‹ 前の出来事",
      nextMilestone: "次の出来事 ›",
      closeModal: "閉じる",
      scrollLeftAria: "左へスクロール",
      scrollRightAria: "右へスクロール",
      factCheckBadge: "出典確認中",
      backToContext: "‹ 歴史的背景へ戻る",
      backToBio: "‹ 人物伝へ戻る",
      enterBio: "ファム・スアン・アン人物伝 ›",
      enterTimeline: "タイムラインを見る ›",
      toPostwar: "戦後の穏やかなファム・スアン・アン ›",
      backToTimeline: "‹ タイムラインへ戻る",
      storyBadge: "サイドストーリー"
    }
  }
};

// Cung cấp hàm lấy cấu hình theo ngôn ngữ hiện tại
window.getAppConfig = function (lang) {
  const l = lang || (window.getCurrentLang ? window.getCurrentLang() : 'vi');
  return window.APP_CONFIG[l] || window.APP_CONFIG.vi;
};
