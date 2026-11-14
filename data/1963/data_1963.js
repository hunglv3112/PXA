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
            modalImgAlt_ja: '1963年11月1日、ザロン宮殿でクーデターに参加した兵士たち（出典：AP Photo）',
            caption: 'Binh sĩ tham gia đảo chính tại Dinh Gia Long, 1/11/1963 (Nguồn: AP Photo)',
            caption_ja: '1963年11月1日、ザロン宮殿でクーデターに参加した兵士たち（出典：AP Photo）',

            title: 'Theo dõi cuộc đảo chính Ngô Đình Diệm và dự báo chiến lược của Mỹ',
            title_ja: 'ゴー・ディン・ジェム政権打倒のクーデターの注視とアメリカの戦略の予測',
            date: 'Năm 1963',
            date_ja: '1963年',

            text1: 'Trong năm 1963, tình hình chính trị tại Sài Gòn lâm vào khủng hoảng sau cuộc đàn áp Phật giáo, mà đỉnh điểm là việc Hòa thượng Thích Quảng Đức tự thiêu ngày 11/6/1963. Mâu thuẫn giữa chính quyền Ngô Đình Diệm và phía Mỹ cũng ngày càng lớn. Tháng 6/1963, Mỹ cử Henry Cabot Lodge sang làm Đại sứ tại Sài Gòn, với nhiệm vụ gây áp lực loại bỏ ông Ngô Đình Nhu hoặc thay đổi chính quyền ông Diệm.',
            text1_ja: '1963年、サイゴンの政治情勢は仏教弾圧をきっかけに危機に陥り、1963年6月11日のティック・クアン・ドゥック和尚の焼身自殺でその頂点に達した。\n\nゴー・ディン・ジェム政権とアメリカ側との対立も、次第に深まっていった。\n\n1963年6月、アメリカは、ゴー・ディン・ニューの排除またはジェム政権の交代に向けて圧力をかける任務を持たせ、ヘンリー・キャボット・ロッジを駐サイゴン大使として送り込んだ。',

            // ── ẢNH CHÈN SAU ĐOẠN 1 ──
            midImg1: {
                src: 'assets/images/1960_1963/1963_ThichQuangDuc.jpg',
                alt: 'Hòa thượng Thích Quảng Đức tự thiêu giữa đại lộ Phan Đình Phùng - Lê Văn Duyệt (nay là đường Nguyễn Đình Chiểu - Cách Mạng Tháng 8, Quận 3, TP HCM) (Nguồn: HCMCPV)',
                alt_ja: 'ファン・ディン・フン通りとレ・ヴァン・ズエット通りの十字路（現ホーチミン市3区グエン・ディン・チエウ通りと八月革命通り）で焼身自殺するティック・クアン・ドゥック和尚（出典：HCMCPV）',
                caption: 'Hòa thượng Thích Quảng Đức tự thiêu giữa đại lộ Phan Đình Phùng - Lê Văn Duyệt (nay là đường Nguyễn Đình Chiểu - Cách Mạng Tháng 8, Quận 3, TP HCM) (Nguồn: HCMCPV)',
                caption_ja: 'ファン・ディン・フン通りとレ・ヴァン・ズエット通りの十字路（現ホーチミン市3区グエン・ディン・チエウ通りと八月革命通り）で焼身自殺するティック・クアン・ドゥック和尚（出典：HCMCPV）'
            },

            text2: 'Trong bối cảnh đó, Phạm Xuân Ẩn tận dụng các mối quan hệ trong giới quân sự, tình báo và ngoại giao để theo dõi tình hình chính trị tại Sài Gòn, đồng thời gửi những báo cáo phân tích về cơ quan chỉ huy tình báo.',
            text2_ja: 'このような情勢の中で、ファム・スアン・アンは軍、諜報、外交の各分野の人脈を活用してサイゴンの政治情勢を注視すると同時に、分析報告書を諜報司令部へ送った。',

            // ── ẢNH CHÈN SAU ĐOẠN 2 ──
            midImg2: {
                src: 'assets/images/1960_1963/1963_XeTangDaoChinh.jpg',
                alt: 'Xe tăng và binh sĩ tại Dinh Gia Long trong cuộc đảo chính (Nguồn: ThinhVuongVN)',
                alt_ja: 'クーデター中のザロン宮殿の戦車と兵士たち（出典：ThinhVuongVN）',
                caption: 'Xe tăng và binh sĩ tại Dinh Gia Long trong cuộc đảo chính (Nguồn: ThinhVuongVN)',
                caption_ja: 'クーデター中のザロン宮殿の戦車と兵士たち（出典：ThinhVuongVN）'
            },

            text3: 'Ông Ẩn biết trước cuộc đảo chính một ngày. Tuy nhiên, do lệch thời gian khớp nối với giao liên, ông không kịp gửi báo cáo khẩn về căn cứ trước khi tiếng súng nổ ngày 1/11/1963. Dù vậy, chuỗi báo cáo trước đó giúp lãnh đạo ở Hà Nội và miền Nam nắm được việc Mỹ đang chuẩn bị thay đổi chính quyền Sài Gòn, từ đó điều chỉnh chiến lược và chiến thuật trên chiến trường.',
            text3_ja: 'アンはクーデターについて1日前に知っていた。\n\nしかし、連絡係と落ち合う時間が合わなかったため、1963年11月1日に銃声が響く前に、緊急報告を根拠地へ送ることができなかった。\n\nそれでも、それまでの一連の報告によって、ハノイと南部の指導部はアメリカがサイゴン政権の交代を準備していることを把握し、戦場での戦略と戦術を調整することができた。',

            text4: 'Sau khi anh em ông Diệm và ông Nhu bị sát hại, một số ý kiến ở Hà Nội cho rằng Mỹ sẽ tìm cách rút khỏi Việt Nam hoặc thương lượng. Ông Ẩn báo cáo ngược lại rằng Mỹ sẽ không rút mà đang tiến sâu hơn vào cuộc chiến, và Hà Nội nên chuẩn bị cho một cuộc chiến tranh lớn. Nhận định này sau đó phù hợp với diễn biến thực tế khi Mỹ tăng cường can thiệp vào miền Nam Việt Nam.',
            text4_ja: 'ジェムとニューの兄弟が殺害された後、ハノイの一部では、アメリカはベトナムからの撤退か交渉の道を探るだろうという意見が出た。\n\nアンはそれとは逆に、アメリカは撤退せず、むしろ戦争にさらに深く入り込もうとしており、ハノイは大規模な戦争に備えるべきだと報告した。\n\nこの見方は、その後アメリカがベトナム南部への介入を強めたという実際の推移と合致した。',

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
            modalImgAlt_ja: 'アプバックの戦いで撃墜されたアメリカのヘリコプター（出典：『完璧なスパイ』184ページ）',
            caption: 'Trực thăng của Mỹ bị bắn rơi trong trận Ấp Bắc (Nguồn: Điệp viên hoàn hảo - Trang 184)',
            caption_ja: 'アプバックの戦いで撃墜されたアメリカのヘリコプター（出典：『完璧なスパイ』184ページ）',

            title: 'Tác nghiệp tại hiện trường Ấp Bắc bằng trực thăng Mỹ',
            title_ja: 'アメリカのヘリコプターによるアプバックの戦場での取材',
            date: 'Năm 1963',
            date_ja: '1963年',

            text1: 'Ngày 2/1/1963, trận Ấp Bắc diễn ra tại xã Tân Phú Trung, huyện Cai Lậy, Tiền Giang. Đây là một trong những trận đánh đáng chú ý của giai đoạn "Chiến tranh đặc biệt"⁽¹⁾, khi quân Giải phóng đối đầu với quân Việt Nam Cộng hòa có cố vấn, trực thăng và xe thiết giáp Mỹ hỗ trợ.',
            text1_ja: '1963年1月2日、ティエンザン省カイライ県タンフーチュン村でアプバックの戦いが起こった。\n\nこれは「特殊戦争」⁽¹⁾の段階における注目すべき戦いの一つで、解放軍は、アメリカの顧問、ヘリコプター、装甲車の支援を受けたベトナム共和国軍と対峙した。',

            text2: 'Trong giai đoạn 1961 đến 1962, Phạm Xuân Ẩn thu thập nhiều tài liệu về chiến lược "Chiến tranh đặc biệt", gồm cách tổ chức lực lượng, vũ khí và phương thức tác chiến mới của Mỹ và quân Việt Nam Cộng hòa. Những thông tin này đóng góp vào việc phía quân Giải phóng chuẩn bị cho các trận đánh thời kỳ này.',
            text2_ja: '1961年から1962年にかけて、ファム・スアン・アンは、アメリカとベトナム共和国軍の兵力編成、兵器、新たな戦闘方式を含む、「特殊戦争」戦略に関する多くの資料を収集した。\n\nこれらの情報は、この時期の戦いに向けた解放軍側の準備に貢献した。',

            // ── ẢNH CHÈN SAU ĐOẠN 2 ──
            midImg2: {
                src: 'assets/images/1960_1963/1963_TieuDoan.jpg',
                alt: 'Chiến sĩ tiểu đoàn 514 quân Giải phóng tham gia đánh trận Ấp Bắc (Nguồn: Bảo tàng Lịch sử)',
                alt_ja: 'アプバックの戦いに参加した解放軍第514大隊の兵士たち（出典：歴史博物館）',
                caption: 'Chiến sĩ tiểu đoàn 514 quân Giải phóng tham gia đánh trận Ấp Bắc (Nguồn: Bảo tàng Lịch sử)',
                caption_ja: 'アプバックの戦いに参加した解放軍第514大隊の兵士たち（出典：歴史博物館）'
            },

            text3: 'Sau khi trận đánh kết thúc, ông cùng các nhà báo phương Tây đi trực thăng Mỹ đến hiện trường. Những đồng nghiệp đi cùng không biết rằng người phóng viên bên cạnh mình cũng là người hoạt động tình báo cho phía quân Giải phóng.',
            text3_ja: '戦いが終わった後、アンは西側の記者たちとともにアメリカのヘリコプターで現場へ向かった。\n\n同行した同僚たちは、隣にいる記者が解放軍側のために諜報活動を行う人物でもあるとは知らなかった。',

            footnote: '1. Chiến tranh đặc biệt: Chiến lược chiến tranh của Mỹ ở miền Nam Việt Nam (1961–1965), chủ yếu sử dụng quân đội Việt Nam Cộng hòa dưới sự chỉ huy của cố vấn Mỹ, cùng vũ khí và phương tiện do Mỹ cung cấp.',
            footnote_ja: '1. 特殊戦争：1961～65年にベトナム南部でアメリカがとった戦争戦略で、アメリカ人軍事顧問の指揮のもと、アメリカが提供した兵器と装備を用いて、主にベトナム共和国軍に戦わせた。',

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
