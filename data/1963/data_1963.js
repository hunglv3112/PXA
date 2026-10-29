/**
 * ==============================================================================
 * DỮ LIỆU MỞ RỘNG — NĂM 1963 (data/1963/data_1963.js)
 * ==============================================================================
 * Quản lý toàn bộ dữ liệu năm 1963 cho cả 2 nửa trên Timeline:
 *   1. top: Nhánh TÌNH BÁO (id: '1963t') — 1 sự kiện (layout 1 cột, có midImg)
 *   2. bot: Nhánh NHÀ BÁO  (id: '1963b') — 1 sự kiện (layout 1 cột, có midImg)
 * ==============================================================================
 */

window.EXTRA_DATA_1963 = {

    // ==========================================================================
    // 1. NHÁNH TÌNH BÁO — NỬA TRÊN (id: '1963t') — MẢNG CÓ 1 OBJECT (LAYOUT 1 CỘT)
    // ==========================================================================
    top: [
        {
            id: '1963t',
            modalImg: 'assets/images/1960_1963/1963_DaoChinh.jpg',
            modalImgAlt: 'Binh sĩ tham gia đảo chính tại Dinh Gia Long, 1/11/1963 (Nguồn: AP Photo)',
            modalImgAlt_ja: 'ザーロン宮殿でのクーデターに参加する兵士たち、1963年11月1日（AP通信）',
            caption: 'Binh sĩ tham gia đảo chính tại Dinh Gia Long, 1/11/1963 (Nguồn: AP Photo)',
            caption_ja: 'ザーロン宮殿でのクーデターに参加する兵士たち、1963年11月1日（AP通信）',

            title: 'Theo dõi cuộc đảo chính Ngô Đình Diệm và dự báo chiến lược của Mỹ',
            title_ja: 'ゴ・ディン・ジエム政変の追跡と米国の戦略的動向予測',
            date: 'Năm 1963',
            date_ja: '1963年',

            text1: 'Trong năm 1963, tình hình chính trị tại Sài Gòn lâm vào khủng hoảng sau cuộc đàn áp Phật giáo, mà đỉnh điểm là việc Hòa thượng Thích Quảng Đức tự thiêu ngày 11/6/1963. Mâu thuẫn giữa chính quyền Ngô Đình Diệm và phía Mỹ cũng ngày càng lớn. Tháng 6/1963, Mỹ cử Henry Cabot Lodge sang làm Đại sứ tại Sài Gòn, với nhiệm vụ gây áp lực loại bỏ ông Ngô Đình Nhu hoặc thay đổi chính quyền ông Diệm.',
            text1_ja: '1963年、仏教徒弾圧と6月11日のティック・クアン・ドック師の焼身抗議を機に、サイゴンの政情は未曾有の危機に陥りました。ジエム政権と米国の対立も決定的に悪化。同年6月、米国はヘンリー・カボット・ロッジを新大使として派遣し、ゴ・ディン・ヌーの排除またはジエム政権の刷新を迫りました。',

            // ── ẢNH CHÈN SAU ĐOẠN 1 ──
            midImg1: {
                src: 'assets/images/1960_1963/1963_ThichQuangDuc.jpg',
                alt: 'Hòa thượng Thích Quảng Đức tự thiêu giữa đại lộ Phan Đình Phùng - Lê Văn Duyệt (nay là đường Nguyễn Đình Chiểu - Cách Mạng Tháng 8, Quận 3, TP HCM) (Nguồn: HCMCPV)',
                alt_ja: 'サイゴン中心部で焼身抗議を行うティック・クアン・ドック師（HCMCPV）',
                caption: 'Hòa thượng Thích Quảng Đức tự thiêu giữa đại lộ Phan Đình Phùng - Lê Văn Duyệt (nay là đường Nguyễn Đình Chiểu - Cách Mạng Tháng 8, Quận 3, TP HCM) (Nguồn: HCMCPV)',
                caption_ja: 'サイゴン中心部で焼身抗議を行うティック・クアン・ドック師（HCMCPV）'
            },

            text2: 'Trong bối cảnh đó, ông Ẩn dựa vào mạng lưới quan hệ trong giới quân sự, mật vụ và ngoại giao để theo dõi các phe phái ở Sài Gòn và gửi nhiều báo cáo phân tích về cơ quan chỉ huy tình báo.',
            text2_ja: 'この激動の中、アンは軍部、秘密警察、外交筋にわたる重層的な人脈を駆使してサイゴン各派閥の動向を監視し、情勢分析レポートを情報司令部へ連続して送達しました。',

            // ── ẢNH CHÈN SAU ĐOẠN 2 ──
            midImg2: {
                src: 'assets/images/1960_1963/1963_XeTangDaoChinh.jpg',
                alt: 'Xe tăng và binh sĩ tại Dinh Gia Long trong cuộc đảo chính (Nguồn: ThinhVuongVN)',
                alt_ja: 'クーデターでザーロン宮殿を制圧する戦車と反乱軍兵士（ThinhVuongVN）',
                caption: 'Xe tăng và binh sĩ tại Dinh Gia Long trong cuộc đảo chính (Nguồn: ThinhVuongVN)',
                caption_ja: 'クーデターでザーロン宮殿を制圧する戦車と反乱軍兵士（ThinhVuongVN）'
            },

            text3: 'Ông Ẩn biết trước một ngày về cuộc đảo chính. Tuy nhiên, do lệch thời gian khớp nối với giao liên, ông không kịp gửi báo cáo khẩn về căn cứ trước khi tiếng súng nổ ngày 1/11/1963. Dù vậy, chuỗi báo cáo trước đó giúp lãnh đạo ở Hà Nội và miền Nam nắm được việc Mỹ đang chuẩn bị thay đổi chính quyền Sài Gòn, từ đó điều chỉnh chiến lược và chiến thuật trên chiến trường.',
            text3_ja: 'アンはクーデター決行の1日前に計画を察知していました。しかし連絡員との定時交信のずれにより、1963年11月1日に銃声が鳴り響く前に緊急報告を届けることは叶いませんでした。それでも一連の先行報告により、ハノイおよび南部指導部は米国による政権転覆の動きを正確に把握し、戦場での戦略・戦術を機敏に修正できました。',

            text4: 'Sau khi anh em ông Diệm và ông Nhu bị sát hại, một số ý kiến ở Hà Nội cho rằng Mỹ sẽ tìm cách rút khỏi Việt Nam hoặc thương lượng. Ông Ẩn báo cáo ngược lại rằng Mỹ sẽ không rút mà đang tiến sâu hơn vào cuộc chiến, và Hà Nội nên chuẩn bị cho một cuộc chiến tranh lớn. Nhận định này sau đó phù hợp với diễn biến thực tế khi Mỹ tăng cường can thiệp vào miền Nam Việt Nam.',
            text4_ja: 'ジエム・ヌー兄弟が暗殺された後、ハノイでは米国が撤退または和平交渉を模索するのではないかとの見方も浮上しました。しかしアンは「米国は決して撤退せず、むしろ戦争へさらに深く介入する。ハノイは大戦争への備えを急ぐべきだ」と断固として報告。この卓越した洞察は、その後の米軍直接介入の現実と完全に見事に一致しました。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ],

    // ==========================================================================
    // 2. NHÁNH NHÀ BÁO — NỬA DƯỚI (id: '1963b') — MẢNG CÓ 1 OBJECT (LAYOUT 1 CỘT)
    // ==========================================================================
    bot: [
        {
            id: '1963b',
            modalImg: 'assets/images/1960_1963/1963_NB_RoiTrucThang.jpg',
            modalImgAlt: 'Trực thăng của Mỹ bị bắn rơi trong trận Ấp Bắc (Nguồn: Điệp viên hoàn hảo - Trang 184)',
            modalImgAlt_ja: 'アプバクの戦いで撃墜された米軍ヘリコプター（『パーフェクト・スパイ』184頁）',
            caption: 'Trực thăng của Mỹ bị bắn rơi trong trận Ấp Bắc (Nguồn: Điệp viên hoàn hảo - Trang 184)',
            caption_ja: 'アプバクの戦いで撃墜された米軍ヘリコプター（『パーフェクト・スパイ』184頁）',

            title: 'Tác nghiệp tại hiện trường Ấp Bắc bằng trực thăng Mỹ',
            title_ja: '米軍ヘリでアプバク戦の最前線を取材',
            date: 'Năm 1963',
            date_ja: '1963年',

            text1: 'Ngày 2/1/1963, trận Ấp Bắc diễn ra tại Ấp Bắc, xã Tân Phú Trung, huyện Cai Lậy, Tiền Giang. Đây là một trong những trận đánh đáng chú ý của giai đoạn “Chiến tranh đặc biệt”, khi Quân Giải phóng đối đầu với quân đội Việt Nam Cộng hòa có cố vấn, trực thăng và xe thiết giáp Mỹ hỗ trợ.',
            text1_ja: '1963年1月2日、ティエンザン省カイライ県タンフうちゅう社アプバクで「アプバクの戦い」が勃発しました。これは米軍顧問、ヘリコプター、装甲車に支援された南ベトナム軍に対し、解放軍が対峙した「特別戦争」期における屈指の歴史的激戦でした。',

            text2: 'Trong giai đoạn 1961 đến 1962, Phạm Xuân Ẩn thu thập nhiều tài liệu về chiến lược “Chiến tranh đặc biệt”, gồm cách tổ chức lực lượng, vũ khí và phương thức tác chiến mới của Mỹ và quân đội Sài Gòn. Những thông tin này đóng góp vào việc phía Quân Giải phóng chuẩn bị cho các trận đánh thời kỳ này.',
            text2_ja: '1961年から1962年にかけて、ファム・スアン・アンは米軍とサイゴン軍の部隊編制、新兵器、新機動戦術など「特別戦争」戦略に関する膨大な機密文書を収集。これらの情報は、解放軍がこの時期の諸作戦に備える上で決定的な貢献を果たしました。',

            // ── ẢNH CHÈN SAU ĐOẠN 2 ──
            midImg2: {
                src: 'assets/images/1960_1963/1963_TieuDoan.jpg',
                alt: 'Chiến sĩ tiểu đoàn 514 quân Giải phóng tham gia đánh trận Ấp Bắc (Nguồn: Bảo tàng lịch sử)',
                alt_ja: 'アプバクの戦いに参加した解放軍第514大隊の兵士たち（歴史博物館）',
                caption: 'Chiến sĩ tiểu đoàn 514 quân Giải phóng tham gia đánh trận Ấp Bắc (Nguồn: Bảo tàng lịch sử)',
                caption_ja: 'アプバクの戦いに参加した解放軍第514大隊の兵士たち（歴史博物館）'
            },

            text3: 'Sau khi trận đánh kết thúc, ông cùng các nhà báo phương Tây đi trực thăng Mỹ đến hiện trường. Những đồng nghiệp đi cùng không biết rằng người phóng viên bên cạnh mình cũng là người hoạt động tình báo cho phía Quân Giải phóng.',
            text3_ja: '戦闘終結直後、アンは欧米の特派員たちとともに米軍ヘリコプターで激戦の現場へ急行し取材を行いました。同行した同僚記者たちは、隣にいるこの冷静な記者が、解放軍のために暗躍する敏腕戦略スパイであるとは夢にも思いませんでした。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ]
};

// ==============================================================================
// TỰ ĐỘNG HÒA TRỘN DỮ LIỆU NĂM 1963 VÀO window.TIMELINE_DATA
// ==============================================================================
(function mergeExtraData1963() {
    function applyBranch(branchKey, defaultId) {
        if (!window.TIMELINE_DATA || !window.EXTRA_DATA_1963) return;
        const branchData = window.EXTRA_DATA_1963[branchKey];
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

        if (savedTitle !== undefined) ev.title = savedTitle;
        if (savedTitleJa !== undefined) ev.title_ja = savedTitleJa;
        if (savedCardImg !== undefined) ev.cardImg = savedCardImg;
        if (savedImg !== undefined) ev.img = savedImg;
    }

    function doMerge() {
        applyBranch('top', '1963t');
        applyBranch('bot', '1963b');
    }

    if (window.TIMELINE_DATA) {
        doMerge();
    } else {
        document.addEventListener('DOMContentLoaded', doMerge);
    }
})();
