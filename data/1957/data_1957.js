/**
 * ==============================================================================
 * DỮ LIỆU MỞ RỘNG — NĂM 1957 (data/1957/data_1957.js)
 * ==============================================================================
 * Quản lý toàn bộ dữ liệu năm 1957 cho cả 2 nửa trên Timeline:
 *   1. top: Nhánh TÌNH BÁO (id: '1957t') — Nửa trên
 *   2. bot: Nhánh NHÀ BÁO  (id: '1957b') — Nửa dưới
 *
 * CẤU TRÚC MỖI PHẦN:
 *   - cardImg: Ảnh hiển thị bên ngoài thẻ đại diện trên trục thời gian.
 *   - modalImg: Ảnh hiển thị ở cột bên trái trong popup xem chi tiết (Modal).
 *   - modalImgLabel: Nhãn chữ mờ đè phía dưới ảnh bên trái trong popup.
 *   - title, date, text: Tiêu đề, thời gian và các đoạn văn bản (Song ngữ VI & JA).
 *   - bottomImg: Khối ảnh minh họa nằm ở cột bên phải phía dưới văn bản,
 *     kèm chú thích (caption) song ngữ VI & JA.
 * ==============================================================================
 */

window.EXTRA_DATA_1957 = {

    // ==========================================================================
    // 1. NHÁNH TÌNH BÁO — NỬA TRÊN (id: '1957t')
    // ==========================================================================
    top: {
        id: '1957t',

        // ── ẢNH ĐẠI DIỆN NGOÀI THẺ TIMELINE ──
        // Đồng chí Trần Quốc Hương (Mười Hương) - người chỉ huy giao nhiệm vụ
        cardImg: 'assets/images/1957_1959/1957_MuoiHuong.jpg',
        img: 'assets/images/1957_1959/1957_MuoiHuong.jpg',

        // ── POPUP CHI TIẾT — CỘT BÊN TRÁI ──
        // Ảnh Phạm Xuân Ẩn trong giờ học báo chí tại California
        modalImg: 'assets/images/1957_1959/1957_PXAHocMonBaoChiTaiMy.webp',
        modalImgAlt: 'Phạm Xuân Ẩn trong giờ học báo chí tại Orange Coast College (California, Mỹ)',
        modalImgAlt_ja: 'カリフォルニアのオレンジ・コースト・カレッジでジャーナリズムを学ぶファム・スアン・アン',
        modalImgLabel: 'Phạm Xuân Ẩn học báo chí tại California (1957)',
        modalImgLabel_ja: 'カリフォルニアでのジャーナリズム学修 (1957年)',

        // ── POPUP CHI TIẾT — CỘT BÊN PHẢI (VĂN BẢN) ──
        title: 'Nhiệm vụ du học báo chí tại Mỹ',
        title_ja: '記者という偽装の選択',
        date: 'Năm 1957',
        date_ja: '1957年',

        text: [
            'Nhận thấy Mỹ sẽ thay thế Pháp tại Việt Nam, các chỉ huy tình báo Mười Hương và Mai Chí Thọ đã vạch ra kế hoạch đưa Phạm Xuân Ẩn sang Mỹ du học nhằm nắm bắt tình hình nước Mỹ và tạo nền móng cho vỏ bọc tình báo chiến lược lâu dài.',
            'Cấp trên Mười Hương khuyên ông chọn ngành báo chí vì hai lý do chính. Thứ nhất, thời điểm đó ông chưa có bằng tốt nghiệp trung học, trong khi ngành báo chí lúc ấy không bắt buộc phải có loại bằng cấp này. Quan trọng hơn là nghề báo có bình diện giao tiếp rộng nhất, tạo điều kiện thuận lợi cho công tác tình báo sau này.',
            'Dưới sự chỉ đạo chặt chẽ của tổ chức, một vỏ bọc lý lịch hoàn hảo đã được xây dựng công phu. Đến mùa thu năm 1957, Phạm Xuân Ẩn chính thức lên đường sang California, bắt đầu theo học ngành báo chí tại trường Orange Coast College (OCC).'
        ],
        text_ja: [
            '米国の対ベトナム介入の本格化を見据え、情報部門の最高幹部ムオイ・フオンとマイ・チー・トーは、ファム・スアン・アンを米国へ留学させる戦略的計画を立案しました。米国の内情と深層を把握し、恒久的な戦略諜報の足場を築くことが狙いでした。',
            'ムオイ・フオンはアンにジャーナリズム専攻を強く勧めました。アンには当時高校卒業資格がなかったものの、当時のジャーナリズム学科は入学しやすく、何より新聞記者という職業こそが社会のあらゆる階層と最も広く接触できる最適な偽装であったためです。',
            '周到に仕組まれた合法的経歴が用意され、1957年秋、若き工作員アンは太平洋を渡りカリフォルニアの地へと旅立ちました。'
        ],

        // ── POPUP CHI TIẾT — ẢNH DƯỚI VĂN BẢN (CỘT PHẢI) ──
        bottomImg: {
            src: 'assets/images/1957_1959/1957_PXADuocDangLenBaoNgayNhapHoc.webp',
            alt: 'Phạm Xuân Ẩn được đăng trên báo trường nhân ngày nhập học 1957',
            alt_ja: '1957年の入学時に学生新聞に掲載されたファム・スアン・アン',
            caption: 'Báo chí địa phương tại California đưa tin về sinh viên Phạm Xuân Ẩn nhân dịp nhập học tại trường Orange Coast College (1957).',
            caption_ja: '1957年、カリフォルニアのオレンジ・コースト・カレッジ入学時に地元紙に紹介されたアン。'
        },

        note: '',
        note_ja: '',
        src: 'Nguồn: Larry Berman ("Điệp viên hoàn hảo"); Tư liệu Báo Nhân Dân; Thomas Bass (The New Yorker)',
        src_ja: '出典: ラリー・バーマン『完璧なスパイ』; ニャンダーン紙; トーマス・バス'
    },

    // ==========================================================================
    // 2. NHÁNH NHÀ BÁO — NỬA DƯỚI (id: '1957b')
    // ==========================================================================
    bot: {
        id: '1957b',

        // ── ẢNH ĐẠI DIỆN NGOÀI THẺ TIMELINE ──
        // Trường Orange Coast College (OCC) nơi Phạm Xuân Ẩn theo học
        cardImg: 'assets/images/1957_1959/1957_TruongOCC.jpg',
        img: 'assets/images/1957_1959/1957_TruongOCC.jpg',

        // ── POPUP CHI TIẾT — CỘT BÊN TRÁI ──
        modalImg: 'assets/images/1957_1959/1957_TruongOCC.jpg',
        modalImgAlt: 'Trường Orange Coast College tại Costa Mesa, California năm 1957',
        modalImgAlt_ja: '1957年当時のオレンジ・コースト・カレッジ（カリフォルニア州コスタメサ）',
        modalImgLabel: 'Khuôn viên Orange Coast College (1957)',
        modalImgLabel_ja: 'オレンジ・コースト・カレッジのキャンパス (1957年)',

        // ── POPUP CHI TIẾT — CỘT BÊN PHẢI (VĂN BẢN) ──
        title: 'Khăn gói sang Mỹ du học',
        title_ja: '渡米とカリフォルニア留学の始まり',
        date: 'Tháng 10/1957',
        date_ja: '1957年10月',

        text: [
            'Tháng 10/1957, Phạm Xuân Ẩn chính thức đặt chân đến bang California (Hoa Kỳ), bắt đầu theo học ngành báo chí tại Orange Coast College (OCC) ở thành phố Costa Mesa.',
            'Tại đây, chàng thanh niên Việt Nam nhanh chóng hòa nhập với môi trường học thuật phương Tây. Ông bắt đầu tiếp cận những nguyên lý báo chí hiện đại của Mỹ: tính khách quan, sự nhạy bén với nguồn tin, phương pháp phỏng vấn và cách thức vận hành của các hãng thông tấn lớn.',
            'Chuyến đi này không chỉ mở đầu cho con đường trở thành một nhà báo quốc tế tài năng, mà còn là bước chuẩn bị vô giá giúp ông thấu hiểu sâu sắc tâm lý xã hội và văn hóa người Mỹ — điều cốt lõi làm nên bản lĩnh của ông sau này.'
        ],
        text_ja: [
            '1957年10月、ファム・スアン・アンは米国カリフォルニア州に到着し、コスタメサにあるオレンジ・コースト・カレッジ（OCC）でジャーナリズムの勉学を開始しました。',
            'アンは現地の学術・学生社会に素早く溶け込み、米国の近代的ジャーナリズムの原則（客観性、情報源への鋭敏さ、取材手法、大手通信社の仕組み）を精力的に学びました。',
            'この留学は、卓越した国際ジャーナリストへの道を切り拓いただけでなく、アメリカ人の心理と文化様式を肌感覚で深く体得するという、かけがえのない基盤を築くこととなりました。'
        ],

        // ── POPUP CHI TIẾT — ẢNH DƯỚI VĂN BẢN (CỘT PHẢI) ──
        bottomImg: {
            src: 'assets/images/1957_1959/1957_PXADuocDangLenBaoNgayNhapHoc.webp',
            alt: 'Báo chí trường Orange Coast College đưa tin về sinh viên Phạm Xuân Ẩn',
            alt_ja: 'OCCの学生新聞に紹介されたアン',
            caption: 'Tờ nhật báo trường ghi lại sự xuất hiện của du học sinh Việt Nam đầu tiên tại Orange Coast College vào mùa thu năm 1957.',
            caption_ja: '1957年秋、大学初のベトナム人留学生として地元学生新聞に紹介されたファム・スアン・アン。'
        },

        note: '',
        note_ja: '',
        src: 'Nguồn: Thomas Bass, The New Yorker (2005); Mellema (Đại học Nebraska–Lincoln)',
        src_ja: '出典: トーマス・バス; メレマ（ネブラスカ大学）'
    }
};

// ==============================================================================
// TỰ ĐỘNG HÒA TRỘN DỮ LIỆU NĂM 1957 VÀO window.TIMELINE_DATA
// ==============================================================================
(function mergeExtraData1957() {
    function doMerge() {
        if (!window.TIMELINE_DATA || !window.EXTRA_DATA_1957) return;

        const dataObj = window.EXTRA_DATA_1957;
        const items = [];

        if (dataObj.top) items.push(dataObj.top);
        if (dataObj.bot) items.push(dataObj.bot);
        if (Array.isArray(dataObj)) items.push(...dataObj);
        if (dataObj.id) items.push(dataObj);

        items.forEach(d => {
            if (!d || !d.id) return;
            const ev = window.TIMELINE_DATA.find(e => e.id === d.id);
            if (ev) {
                Object.assign(ev, d);
            }
        });
    }

    if (window.TIMELINE_DATA) {
        doMerge();
    } else {
        document.addEventListener('DOMContentLoaded', doMerge);
    }
})();
