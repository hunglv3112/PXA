/**
 * ==============================================================================
 * DỮ LIỆU TÀI LIỆU THAM KHẢO & NGUỒN TRÍCH DẪN (data/references-data.js)
 * ==============================================================================
 * Cấu trúc dữ liệu nguồn mẫu (VI / JA) dùng cho khung hiển thị Tài liệu tham khảo.
 * Khi có nội dung thực tế, bạn chỉ cần thay thế các mục mẫu trong này hoặc bổ sung
 * nguồn cho từng sự kiện/chương tương ứng.
 */

window.REFERENCES_DATA = {
  // Dữ liệu nguồn mẫu mặc định (hiển thị giống mẫu giao diện thiết kế)
  defaultSources: {
    vi: [
      {
        id: 1,
        author: "National Archives and Records Administration",
        title: "Tên tư liệu ảnh mẫu",
        source: "Cơ sở dữ liệu NARA, mã tư liệu mẫu",
        year: "1957",
        tag: "nguồn mẫu",
        url: ""
      },
      {
        id: 2,
        author: "T. G. Mẫu",
        title: "Tên sách mẫu",
        source: "Hà Nội, Việt Nam: Nhà xuất bản mẫu",
        year: "2000",
        pages: "tr. 10–15",
        tag: "nguồn mẫu",
        url: ""
      },
      {
        id: 3,
        author: "N. V. Mẫu",
        title: "Tên bài báo mẫu",
        source: "Tên tạp chí mẫu, tập 1, số 2",
        year: "2010",
        pages: "tr. 30–45",
        tag: "nguồn mẫu",
        url: ""
      },
      {
        id: 4,
        author: "L. T. Mẫu",
        title: "Phỏng vấn mẫu",
        source: "Kênh video mẫu",
        year: "2019",
        type: "Video",
        tag: "nguồn mẫu",
        url: ""
      }
    ],
    ja: [
      {
        id: 1,
        author: "米国国立公文書記録管理局 (NARA)",
        title: "歴史写真資料サンプル",
        source: "NARAアーカイブ、資料番号サンプル",
        year: "1957",
        tag: "サンプル出典",
        url: ""
      },
      {
        id: 2,
        author: "サンプル著者",
        title: "参考文献・書籍サンプル",
        source: "東京: サンプル出版社",
        year: "2000",
        pages: "pp. 10–15",
        tag: "サンプル出典",
        url: ""
      },
      {
        id: 3,
        author: "サンプル記者",
        title: "記事タイトルサンプル",
        source: "月刊歴史ジャーナル 第1巻 第2号",
        year: "2010",
        pages: "pp. 30–45",
        tag: "サンプル出典",
        url: ""
      },
      {
        id: 4,
        author: "インタビュー担当",
        title: "証言録画・インタビューサンプル",
        source: "ドキュメンタリー映像アーカイブ",
        year: "2019",
        type: "Video",
        tag: "サンプル出典",
        url: ""
      }
    ]
  },

  // Danh mục nguồn cho từng trang (hoặc từng mốc sự kiện cụ thể nếu có)
  pages: {
    intro: {
      title_vi: "Giới thiệu đề tài",
      title_ja: "テーマの紹介",
      all_vi: [
        {
          id: 1,
          author: "National Archives and Records Administration",
          title: "Tên tư liệu ảnh mẫu",
          source: "Cơ sở dữ liệu NARA, mã tư liệu mẫu",
          year: "1957",
          tag: "nguồn mẫu"
        },
        {
          id: 2,
          author: "T. G. Mẫu",
          title: "Tên sách mẫu",
          source: "Hà Nội, Việt Nam: Nhà xuất bản mẫu",
          year: "2000",
          pages: "tr. 10–15",
          tag: "nguồn mẫu"
        },
        {
          id: 3,
          author: "N. V. Mẫu",
          title: "Tên bài báo mẫu",
          source: "Tên tạp chí mẫu, tập 1, số 2",
          year: "2010",
          pages: "tr. 30–45",
          tag: "nguồn mẫu"
        },
        {
          id: 4,
          author: "L. T. Mẫu",
          title: "Phỏng vấn mẫu",
          source: "Kênh video mẫu",
          year: "2019",
          type: "Video",
          tag: "nguồn mẫu"
        }
      ],
      all_ja: [
        {
          id: 1,
          author: "米国国立公文書記録管理局 (NARA)",
          title: "歴史写真資料サンプル",
          source: "NARAアーカイブ、資料番号サンプル",
          year: "1957",
          tag: "サンプル出典"
        },
        {
          id: 2,
          author: "サンプル著者",
          title: "参考文献・書籍サンプル",
          source: "東京: サンプル出版社",
          year: "2000",
          pages: "pp. 10–15",
          tag: "サンプル出典"
        },
        {
          id: 3,
          author: "サンプル記者",
          title: "記事タイトルサンプル",
          source: "月刊歴史ジャーナル 第1巻 第2号",
          year: "2010",
          pages: "pp. 30–45",
          tag: "サンプル出典"
        },
        {
          id: 4,
          author: "インタビュー担当",
          title: "証言録画・インタビューサンプル",
          source: "ドキュメンタリー映像アーカイブ",
          year: "2019",
          type: "Video",
          tag: "サンプル出典"
        }
      ]
    },
    bio: {
      title_vi: "Tiểu sử Phạm Xuân Ẩn",
      title_ja: "ファム・スアン・アンの経歴",
      all_vi: [
        {
          id: 1,
          author: "National Archives and Records Administration",
          title: "Tên tư liệu ảnh mẫu",
          source: "Cơ sở dữ liệu NARA, mã tư liệu mẫu",
          year: "1957",
          tag: "nguồn mẫu"
        },
        {
          id: 2,
          author: "T. G. Mẫu",
          title: "Tên sách mẫu",
          source: "Hà Nội, Việt Nam: Nhà xuất bản mẫu",
          year: "2000",
          pages: "tr. 10–15",
          tag: "nguồn mẫu"
        },
        {
          id: 3,
          author: "N. V. Mẫu",
          title: "Tên bài báo mẫu",
          source: "Tên tạp chí mẫu, tập 1, số 2",
          year: "2010",
          pages: "tr. 30–45",
          tag: "nguồn mẫu"
        },
        {
          id: 4,
          author: "L. T. Mẫu",
          title: "Phỏng vấn mẫu",
          source: "Kênh video mẫu",
          year: "2019",
          type: "Video",
          tag: "nguồn mẫu"
        }
      ],
      all_ja: [
        {
          id: 1,
          author: "米国国立公文書記録管理局 (NARA)",
          title: "歴史写真資料サンプル",
          source: "NARAアーカイブ、資料番号サンプル",
          year: "1957",
          tag: "サンプル出典"
        },
        {
          id: 2,
          author: "サンプル著者",
          title: "参考文献・書籍サンプル",
          source: "東京: サンプル出版社",
          year: "2000",
          pages: "pp. 10–15",
          tag: "サンプル出典"
        },
        {
          id: 3,
          author: "サンプル記者",
          title: "記事タイトルサンプル",
          source: "月刊歴史ジャーナル 第1巻 第2号",
          year: "2010",
          pages: "pp. 30–45",
          tag: "サンプル出典"
        },
        {
          id: 4,
          author: "インタビュー担当",
          title: "証言録画・インタビューサンプル",
          source: "ドキュメンタリー映像アーカイブ",
          year: "2019",
          type: "Video",
          tag: "サンプル出典"
        }
      ]
    },
    context: {
      title_vi: "Bối cảnh lịch sử",
      title_ja: "歴史的背景",
      all_vi: [
        {
          id: 1,
          author: "National Archives and Records Administration",
          title: "Tên tư liệu ảnh mẫu",
          source: "Cơ sở dữ liệu NARA, mã tư liệu mẫu",
          year: "1957",
          tag: "nguồn mẫu"
        },
        {
          id: 2,
          author: "T. G. Mẫu",
          title: "Tên sách mẫu",
          source: "Hà Nội, Việt Nam: Nhà xuất bản mẫu",
          year: "2000",
          pages: "tr. 10–15",
          tag: "nguồn mẫu"
        },
        {
          id: 3,
          author: "N. V. Mẫu",
          title: "Tên bài báo mẫu",
          source: "Tên tạp chí mẫu, tập 1, số 2",
          year: "2010",
          pages: "tr. 30–45",
          tag: "nguồn mẫu"
        },
        {
          id: 4,
          author: "L. T. Mẫu",
          title: "Phỏng vấn mẫu",
          source: "Kênh video mẫu",
          year: "2019",
          type: "Video",
          tag: "nguồn mẫu"
        }
      ],
      all_ja: [
        {
          id: 1,
          author: "米国国立公文書記録管理局 (NARA)",
          title: "歴史写真資料サンプル",
          source: "NARAアーカイブ、資料番号サンプル",
          year: "1957",
          tag: "サンプル出典"
        },
        {
          id: 2,
          author: "サンプル著者",
          title: "参考文献・書籍サンプル",
          source: "東京: サンプル出版社",
          year: "2000",
          pages: "pp. 10–15",
          tag: "サンプル出典"
        },
        {
          id: 3,
          author: "サンプル記者",
          title: "記事タイトルサンプル",
          source: "月刊歴史ジャーナル 第1巻 第2号",
          year: "2010",
          pages: "pp. 30–45",
          tag: "サンプル出典"
        },
        {
          id: 4,
          author: "インタビュー担当",
          title: "証言録画・インタビューサンプル",
          source: "ドキュメンタリー映像アーカイブ",
          year: "2019",
          type: "Video",
          tag: "サンプル出典"
        }
      ]
    },
    timeline: {
      title_vi: "Dòng thời gian (1957–1976)",
      title_ja: "年表（1957～1976年）",
      all_vi: [
        {
          id: 1,
          author: "National Archives and Records Administration",
          title: "Tên tư liệu ảnh mẫu",
          source: "Cơ sở dữ liệu NARA, mã tư liệu mẫu",
          year: "1957",
          tag: "nguồn mẫu"
        },
        {
          id: 2,
          author: "T. G. Mẫu",
          title: "Tên sách mẫu",
          source: "Hà Nội, Việt Nam: Nhà xuất bản mẫu",
          year: "2000",
          pages: "tr. 10–15",
          tag: "nguồn mẫu"
        },
        {
          id: 3,
          author: "N. V. Mẫu",
          title: "Tên bài báo mẫu",
          source: "Tên tạp chí mẫu, tập 1, số 2",
          year: "2010",
          pages: "tr. 30–45",
          tag: "nguồn mẫu"
        },
        {
          id: 4,
          author: "L. T. Mẫu",
          title: "Phỏng vấn mẫu",
          source: "Kênh video mẫu",
          year: "2019",
          type: "Video",
          tag: "nguồn mẫu"
        }
      ],
      all_ja: [
        {
          id: 1,
          author: "米国国立公文書記録管理局 (NARA)",
          title: "歴史写真資料サンプル",
          source: "NARAアーカイブ、資料番号サンプル",
          year: "1957",
          tag: "サンプル出典"
        },
        {
          id: 2,
          author: "サンプル著者",
          title: "参考文献・書籍サンプル",
          source: "東京: サンプル出版社",
          year: "2000",
          pages: "pp. 10–15",
          tag: "サンプル出典"
        },
        {
          id: 3,
          author: "サンプル記者",
          title: "記事タイトルサンプル",
          source: "月刊歴史ジャーナル 第1巻 第2号",
          year: "2010",
          pages: "pp. 30–45",
          tag: "サンプル出典"
        },
        {
          id: 4,
          author: "インタビュー担当",
          title: "証言録画・インタビューサンプル",
          source: "ドキュメンタリー映像アーカイブ",
          year: "2019",
          type: "Video",
          tag: "サンプル出典"
        }
      ]
    },
    postwar: {
      title_vi: "Phòng lưu niệm Phạm Xuân Ẩn",
      title_ja: "諜報員ファム・スアン・アン記念館",
      all_vi: [
        {
          id: 1,
          author: "National Archives and Records Administration",
          title: "Tên tư liệu ảnh mẫu",
          source: "Cơ sở dữ liệu NARA, mã tư liệu mẫu",
          year: "1957",
          tag: "nguồn mẫu"
        },
        {
          id: 2,
          author: "T. G. Mẫu",
          title: "Tên sách mẫu",
          source: "Hà Nội, Việt Nam: Nhà xuất bản mẫu",
          year: "2000",
          pages: "tr. 10–15",
          tag: "nguồn mẫu"
        },
        {
          id: 3,
          author: "N. V. Mẫu",
          title: "Tên bài báo mẫu",
          source: "Tên tạp chí mẫu, tập 1, số 2",
          year: "2010",
          pages: "tr. 30–45",
          tag: "nguồn mẫu"
        },
        {
          id: 4,
          author: "L. T. Mẫu",
          title: "Phỏng vấn mẫu",
          source: "Kênh video mẫu",
          year: "2019",
          type: "Video",
          tag: "nguồn mẫu"
        }
      ],
      all_ja: [
        {
          id: 1,
          author: "米国国立公文書記録管理局 (NARA)",
          title: "歴史写真資料サンプル",
          source: "NARAアーカイブ、資料番号サンプル",
          year: "1957",
          tag: "サンプル出典"
        },
        {
          id: 2,
          author: "サンプル著者",
          title: "参考文献・書籍サンプル",
          source: "東京: サンプル出版社",
          year: "2000",
          pages: "pp. 10–15",
          tag: "サンプル出典"
        },
        {
          id: 3,
          author: "サンプル記者",
          title: "記事タイトルサンプル",
          source: "月刊歴史ジャーナル 第1巻 第2号",
          year: "2010",
          pages: "pp. 30–45",
          tag: "サンプル出典"
        },
        {
          id: 4,
          author: "インタビュー担当",
          title: "証言録画・インタビューサンプル",
          source: "ドキュメンタリー映像アーカイブ",
          year: "2019",
          type: "Video",
          tag: "サンプル出典"
        }
      ]
    }
  }
};
