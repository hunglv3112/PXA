/**
 * ==============================================================================
 * DỮ LIỆU MỞ RỘNG — NĂM 1958 (data/1958/data_1958.js)
 * ==============================================================================
 * Quản lý toàn bộ dữ liệu năm 1958 cho cả 2 nửa trên Timeline:
 *   1. top: Nhánh TÌNH BÁO (id: '1958t') — Nửa trên (Dạng MẢNG các object)
 *   2. bot: Nhánh NHÀ BÁO  (id: '1958b') — Nửa dưới (Dạng MẢNG các object)
 *
 * QUY TẮC HIỂN THỊ MODAL:
 *   - Nếu mảng có ĐÚNG 1 OBJECT: Modal hiển thị dạng 1 cột liền mạch
 *     (ảnh hero ở trên -> text nội dung ở dưới, không chia 2 bên trái phải).
 *   - Nếu mảng có > 1 OBJECT: Modal chia 2 bên trái - phải (giống năm 1975).
 * ==============================================================================
 */

window.EXTRA_DATA_1958 = {

    // ==========================================================================
    // 1. NHÁNH TÌNH BÁO — NỬA TRÊN (id: '1958t') — MẢNG CÓ 1 OBJECT
    // ==========================================================================
    top: [
        {
            id: '1958t',
            // ── ẢNH TRONG POPUP CHI TIẾT (HERO BANNER KÈM CHÚ THÍCH) ──
            modalImg: 'assets/images/1957_1959/1958_Ngoai_MuoiHuongChupCungPXAVaNhieuNhaTinhBao.jpg',
            modalImgAlt: 'Mười Hương (hàng đầu, thứ ba từ bên trái sang) chụp ảnh cùng Phạm Xuân Ẩn (hàng thứ hai, thứ ba từ bên trái sang) và các nhà tình báo khác (Nguồn: Báo Tuổi Trẻ)',
            modalImgAlt_ja: 'ファム・スアン・アン（2列目左から3番目）やほかの諜報員たちと写真に収まるムオイ・フオン（前列左から3番目）（出典：Tuoi Tre紙）',
            caption: 'Mười Hương (hàng đầu, thứ ba từ bên trái sang) chụp ảnh cùng Phạm Xuân Ẩn (hàng thứ hai, thứ ba từ bên trái sang) và các nhà tình báo khác (Nguồn: Báo Tuổi Trẻ)',
            caption_ja: 'ファム・スアン・アン（2列目左から3番目）やほかの諜報員たちと写真に収まるムオイ・フオン（前列左から3番目）（出典：Tuoi Tre紙）',
            title: 'Mất liên lạc với tổ chức sau khi Mười Hương bị bắt',
            title_ja: 'ムオイ・フオンの逮捕後、途絶えた組織との連絡',
            date: 'Năm 1958',
            date_ja: '1958年',

            text1: 'Đầu năm 1958, Phạm Xuân Ẩn nhận được một bức thư từ em trai là Phạm Xuân Đính, báo tin rằng ông Mười Hương cùng nhiều cán bộ tình báo chủ chốt đã bị chính quyền Ngô Đình Diệm bắt giữ.',
            text2: 'Sự việc này khiến đường dây liên lạc giữa ông và tổ chức bị cắt đứt hoàn toàn. Các lãnh đạo ở Hà Nội lo ngại không biết Ẩn có chịu trở về Việt Nam hay không khi ông nhận được tin tức này.',
            text3: 'Về phía mình, Ẩn lo rằng Mỹ sẽ phát hiện ra thân phận tình báo của ông. Vì vậy, ông đã học thêm tiếng Tây Ban Nha để dự phòng một lối thoát sang Cuba, từ đó tìm đường trở về nước tiếp tục chiến đấu.',

            text1_ja: '1958年初め、ファム・スアン・アンは弟のファム・スアン・ディンから、ムオイ・フオンと多くの主要な諜報幹部がゴー・ディン・ジェム政権に逮捕されたことを知らせる手紙を受け取った。',
            text2_ja: 'この出来事により、アンと組織との連絡経路は完全に断たれた。ハノイの指導部は、この知らせを受けたアンが、果たしてベトナムに帰国する気になるかどうかを危ぶんだ。',
            text3_ja: '一方、アン自身は、アメリカに諜報員としての正体を見破られることを恐れていた。そのため、万一に備えてキューバへの逃げ道を確保し、そこから帰国して戦い続けられるよう、スペイン語も学んだ。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ],
    bot: [
        {
            id: '1958b',
            // ── ẢNH TRONG POPUP CHI TIẾT (HERO BANNER KÈM CHÚ THÍCH) ──
            modalImg: 'assets/images/1957_1959/1958_PXAHocMonBaoChiTaiMy.jpg',
            modalImgAlt: 'Phạm Xuân Ẩn học môn báo chí tại trường OCC năm 1958 (Nguồn: Nhà tưởng niệm nhà tình báo Phạm Xuân Ẩn)',
            modalImgAlt_ja: 'OCCでジャーナリズムを学ぶファム・スアン・アン（1958年）（出典：諜報員ファム・スアン・アン記念館）',
            caption: 'Phạm Xuân Ẩn học môn báo chí tại trường OCC năm 1958 (Nguồn: Nhà tưởng niệm nhà tình báo Phạm Xuân Ẩn)',
            caption_ja: 'OCCでジャーナリズムを学ぶファム・スアン・アン（1958年）（出典：諜報員ファム・スアン・アン記念館）',

            // ── VĂN BẢN CHI TIẾT (TÁCH RIÊNG TỪNG FIELD ĐOẠN VĂN) ──
            title: 'Thành tích báo chí tại OCC',
            title_ja: 'OCCでのジャーナリズムの実績',
            date: 'Năm 1958',
            date_ja: '1958年',

            text1: 'Năm 1958 cũng là giai đoạn Phạm Xuân Ẩn tích lũy những kinh nghiệm đầu tiên cho nghề báo của ông sau này.',
            text2: 'Ông có những bài báo như “Thi tốt nghiệp - Vài điều về nỗi cực nhọc thi cử của sinh viên ở miền đất xa xôi”, đối chiếu không khí thi cử căng thẳng của học sinh Sài Gòn (mùa hoa phượng, uống trà đậm, cà phê để thức khuya) với không khí nhẹ nhàng tại OCC.',
            text3: 'Dưới sự dẫn dắt của chủ bút Lee Meyer và những đóng góp của Phạm Xuân Ẩn, tờ Barnacle được Hiệp hội Báo chí Học đường xếp hạng Nhất.',
            text4: 'Ông cũng được chọn là một trong 9 sinh viên dự Hội thảo các vấn đề thế giới tại Los Angeles, là một trong sáu đại biểu từ Câu lạc bộ Quốc tế của OCC tham dự Diễn đàn Khu vực Long Beach. Ẩn cũng dự một hội nghị báo chí tại Đại học Redlands và có mặt trong đoàn đại biểu của Barnacle dự Đại Hội các Nhà xuất bản quốc gia tiểu bang California ở San Francisco.',

            text1_ja: '1958年はまた、ファム・スアン・アンが、のちの記者としての仕事に向けて最初の経験を積んだ時期でもあった。',
            text2_ja: 'アンが書いた記事には「卒業試験――遠い地の学生たちの試験の苦労について」などがあり、サイゴンの生徒たちの張り詰めた試験の雰囲気（ホウオウボクの花の季節、夜更かしのために濃いお茶やコーヒーを飲むこと）を、OCCの穏やかな雰囲気と対比させた。',
            text3_ja: '編集長リー・マイヤーの指導とファム・スアン・アンの貢献により、『バーナクル』紙は学校新聞協会によって第1位に格付けされた。',
            text4_ja: 'アンはまた、ロサンゼルスで開かれた世界問題会議に参加する9人の学生の一人に選ばれ、OCCの国際クラブからロングビーチ地域フォーラムに参加する6人の代表の一人にもなった。\n\nアンはさらに、レッドランズ大学で開かれたジャーナリズム会議にも出席し、サンフランシスコで開催されたカリフォルニア州全国出版者大会に派遣された『バーナクル』紙の代表団にも加わった。',
            note: '',
            note_ja: '',
        }
    ]
};

// ==============================================================================
// TỰ ĐỘNG HÒA TRỘN DỮ LIỆU NĂM 1958 VÀO window.TIMELINE_DATA
// Quy tắc: timeline-data.js quyết định ảnh đại diện ngoài thẻ (cardImg / img)
// data_1958.js chỉ mở rộng nội dung chi tiết cho popup modal
// ==============================================================================
(function mergeExtraData1958() {
    function applyBranch(branchKey, defaultId) {
        if (!window.TIMELINE_DATA || !window.EXTRA_DATA_1958) return;
        const branchData = window.EXTRA_DATA_1958[branchKey];
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

        // Lưu giữ thông tin đại diện ngoài ô thẻ Timeline từ timeline-data.js
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

        // Luôn bảo toàn tên đại diện (title) và ảnh ngoài từ timeline-data.js
        if (savedTitle !== undefined) ev.title = savedTitle;
        if (savedTitleJa !== undefined) ev.title_ja = savedTitleJa;
        if (savedCardImg !== undefined) ev.cardImg = savedCardImg;
        if (savedImg !== undefined) ev.img = savedImg;
    }

    function doMerge() {
        applyBranch('top', '1958t');
        applyBranch('bot', '1958b');
    }

    if (window.TIMELINE_DATA) {
        doMerge();
    } else {
        document.addEventListener('DOMContentLoaded', doMerge);
    }
})();
