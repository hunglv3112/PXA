/**
 * ==============================================================================
 * DỮ LIỆU MỞ RỘNG — NĂM 1974 (data/1974/data_1974.js)
 * ==============================================================================
 * Quản lý dữ liệu chi tiết năm 1974:
 *   - Nhánh TÌNH BÁO (id: '1974t'): 1 sự kiện duy nhất (dạng mảng 1 object -> Modal 1 cột)
 *   - Nhánh NHÀ BÁO: Năm 1974 không có nhà báo (đã loại bỏ khỏi timeline)
 * ==============================================================================
 */

window.EXTRA_DATA_1974 = {
    top: [
        {
            id: '1974t',
            modalImg: 'assets/images/1974_1976/1974_N_RichardNixon.jpg',
            modalImgAlt: 'Tổng thống Mỹ Richard Nixon phát biểu về chiến tranh Việt Nam (Nguồn: AFP)',
            modalImgAlt_ja: 'ベトナム戦争について演説するアメリカのリチャード・ニクソン大統領（出典：AFP通信）',
            caption: 'Tổng thống Mỹ Richard Nixon phát biểu về chiến tranh Việt Nam (Nguồn: AFP)',
            caption_ja: 'ベトナム戦争について演説するアメリカのリチャード・ニクソン大統領（出典：AFP通信）',
            title: 'Mỹ có can thiệp quân sự trở lại hay không?',
            title_ja: 'アメリカは再び軍事介入するのか',
            date: 'Cuối năm 1974',
            date_ja: '1974年末',

            text1: 'Cuối năm 1974, một cuộc họp giữa những lãnh đạo ở Hà Nội đặt câu hỏi sống còn rằng: Liệu Mỹ còn khả năng đưa quân trở lại miền Nam hay không, khi các cuộc tiến công quy mô lớn của quân Giải phóng có thể dẫn đến nguy cơ sụp đổ của Việt Nam Cộng hòa? Nhiệm vụ trả lời câu hỏi chiến lược này được giao cho Phạm Xuân Ẩn.',
            text1_ja: '1974年末、ハノイの指導者たちによる会議で、「解放軍の大規模な攻勢がベトナム共和国の崩壊の危機を招きかねないとき、アメリカには南部へ再び派兵する能力がまだあるのか」という死活にかかわる問いが提起された。この戦略的な問いに答えるという任務は、ファム・スアン・アンに与えられた。',

            // ── ẢNH CHÈN GIỮA text1 VÀ text2 ──
            midImg1: {
                src: 'assets/images/1974_1976/1974_HopCuoi1974.jpg',
                alt: 'Phía quân Giải phóng trong cuộc họp cuối năm 1974 (Nguồn: Báo Quân đội nhân dân)',
                alt_ja: '1974年末の会議に臨む解放軍側（出典：Quan doi nhan dan紙）',
                caption: 'Phía quân Giải phóng trong cuộc họp cuối năm 1974 (Nguồn: Báo Quân đội nhân dân)',
                caption_ja: '1974年末の会議に臨む解放軍側（出典：Quan doi nhan dan紙）'
            },

            text2: 'Trong thời gian này, Ẩn lấy được một báo cáo tuyệt mật của Ủy ban Nghiên cứu Chiến lược của chính quyền Việt Nam Cộng hòa gửi cho Nguyễn Văn Thiệu. Báo cáo chỉ rõ tình trạng sa sút của quân Việt Nam Cộng hòa cũng như Mỹ không thể can thiệp trở lại vì đã mất sự ủng hộ của người dân Mỹ. Hạm đội 7 của Mỹ sẽ không quay lại, máy bay B-52 không được tái triển khai và viện trợ tiếp tục bị cắt giảm.',
            text2_ja: 'この時期、アンは、ベトナム共和国政権の戦略研究委員会がグエン・ヴァン・ティエウに宛てた極秘報告書を入手した。報告書は、ベトナム共和国軍の衰えを浮き彫りにするとともに、アメリカは国民の支持を失ったため再び介入することはできないことも示していた。アメリカの第7艦隊は戻ってくることはなく、B-52爆撃機も再配備されず、援助は引き続き削減されるとしていた。',

            // ── ẢNH CHÈN GIỮA text2 VÀ text3 ──
            midImg2: {
                src: 'assets/images/1974_1976/1974_HamDoi7.jpg',
                alt: 'Hạm đội 7 của Mỹ sẽ không trở lại giúp Việt Nam Cộng hòa (Nguồn: US NAVY)',
                alt_ja: 'アメリカの第7艦隊は、ベトナム共和国を支援するために戻ってくることはない（出典：アメリカ海軍）',
                caption: 'Hạm đội 7 của Mỹ sẽ không trở lại giúp Việt Nam Cộng hòa (Nguồn: US NAVY)',
                caption_ja: 'アメリカの第7艦隊は、ベトナム共和国を支援するために戻ってくることはない（出典：アメリカ海軍）'
            },

            text3: 'Báo cáo cũng chỉ ra khu vực Buôn Ma Thuột là điểm yếu nhất và nếu quân Giải phóng chiếm được điểm này thì toàn bộ hệ thống phòng thủ của Việt Nam Cộng hòa sẽ sụp đổ.',
            text3_ja: '報告書はまた、ブオンマトート地域が最大の弱点であり、解放軍がここを占領すれば、ベトナム共和国の防衛体制全体が崩壊すると指摘していた。',

            text4: 'Cùng với đó quân Giải phóng cũng mở chiến dịch đánh chiếm tỉnh Phước Long để đo khả năng chịu đựng của quân Việt Nam Cộng hòa và phản ứng thực tế từ phía Mỹ.',
            text4_ja: 'それとともに、解放軍は、ベトナム共和国軍の持ちこたえる力とアメリカ側の実際の反応を測るため、フォックロン省を攻略する作戦も開始した。',

            text5: 'Từ báo cáo của Ẩn và thắng lợi trong trận Phước Long, những lo ngại của quân Giải phóng đã được giải tỏa, tạo quyết tâm mở cuộc Tổng tiến công và nổi dậy Mùa Xuân 1975⁽¹⁾.',
            text5_ja: 'アンの報告書とフォックロンの戦いでの勝利によって、解放軍の懸念は払拭され、1975年春の総進攻と蜂起⁽¹⁾を開始する決意につながった。',

            // ── FOOTNOTE VỚI ĐƯỜNG KẺ GẠCH NGANG Ở CUỐI ──
            footnote: '1. Tổng tiến công và nổi dậy Mùa Xuân 1975 là chiến dịch quyết định của quân Giải phóng nhằm đánh bại hoàn toàn quân Việt Nam Cộng hòa. Chiến dịch diễn ra từ ngày 4/3 đến 30/4/1975 qua ba chiến dịch lớn: Tây Nguyên, Huế - Đà Nẵng và Hồ Chí Minh, qua đó thống nhất hoàn toàn đất nước.',
            footnote_ja: '1. 1975年春の総進攻と蜂起は、ベトナム共和国軍を完全に打ち破るための、解放軍の決定的な作戦である。この作戦は1975年3月4日から4月30日にかけて、中部高原作戦、フエ・ダナン作戦、ホーチミン作戦という三つの大規模な作戦を経て展開され、これによって国土は完全に統一された。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ]
};

// ==============================================================================
// TỰ ĐỘNG HÒA TRỘN DỮ LIỆU NĂM 1974 VÀO window.TIMELINE_DATA
// ==============================================================================
(function mergeExtraData1974() {
    function applyBranch(branchKey, defaultId) {
        if (!window.TIMELINE_DATA || !window.EXTRA_DATA_1974) return;
        const branchData = window.EXTRA_DATA_1974[branchKey];
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
        applyBranch('top', '1974t');
    }

    if (window.TIMELINE_DATA) {
        doMerge();
    } else {
        document.addEventListener('DOMContentLoaded', doMerge);
    }
})();
