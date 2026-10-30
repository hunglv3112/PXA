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
            modalImgAlt_ja: 'ベトナム戦争について演説するリチャード・ニクソン米大統領（AFP）',
            caption: 'Tổng thống Mỹ Richard Nixon phát biểu về chiến tranh Việt Nam (Nguồn: AFP)',
            caption_ja: 'ベトナム戦争について演説するリチャード・ニクソン米大統領（AFP）',
            title: 'Mỹ có can thiệp quân sự trở lại hay không?',
            title_ja: '米国の軍事再介入はあるのか？',
            date: 'Cuối năm 1974',
            date_ja: '1974年末',

            text1: 'Cuối năm 1974, một cuộc họp giữa những lãnh đạo ở Hà Nội đặt câu hỏi sống còn rằng: Liệu Mỹ còn khả năng đưa quân trở lại miền Nam hay không, khi các cuộc tiến công quy mô lớn của quân Giải phóng có thể dẫn đến nguy cơ sụp đổ của quân đội Sài Gòn? Nhiệm vụ nghiên cứu và trả lời câu hỏi chiến lược này được giao cho Phạm Xuân Ẩn.',
            text1_ja: '1974年末、ハノイの指導部による会議で「解放軍の大規模攻勢によりサイゴン軍が崩壊の危機に瀕した場合、米国には再び南部へ部隊を投入する能力が残されているか」という死活的な問いが投げかけられました。この戦略的問いの解明がファム・スアン・アンに託されました。',

            // ── ẢNH CHÈN GIỮA text1 VÀ text2 ──
            midImg1: {
                src: 'assets/images/1974_1976/1974_HopCuoi1974.jpg',
                alt: 'Phía quân Giải phóng trong cuộc họp cuối năm 1974 (Nguồn: QDNDVN)',
                alt_ja: '1974年末の会議における解放軍首脳部（ベトナム人民軍新聞）',
                caption: 'Phía quân Giải phóng trong cuộc họp cuối năm 1974 (Nguồn: QDNDVN)',
                caption_ja: '1974年末の会議における解放軍首脳部（ベトナム人民軍新聞）'
            },

            text2: 'Trong thời gian này, Ẩn lấy được một báo cáo tuyệt mật của Ủy ban Nghiên cứu Chiến lược chính quyền VNCH gửi cho Nguyễn Văn Thiệu. Báo cáo khẳng định quân Sài Gòn cạn kiệt tinh thần và vật chất. Mỹ không thể can thiệp trở lại vì mất lòng dân, hạm đội 7 không quay lại, B-52 không tái triển khai, viện trợ tiếp tục bị cắt giảm.',
            text2_ja: 'この時期、アンは南ベトナム政権の戦略研究委員会がグエン・ヴァン・ティウに提出した最高機密報告書を入手しました。報告書は、サイゴン軍の士気と物資が枯渇していることを明言。世論の反発により米国の再介入は不可能であり、第7艦隊は戻らず、B-52の再配備もなく、援助は削減され続けると指摘していました。',

            // ── ẢNH CHÈN GIỮA text2 VÀ text3 ──
            midImg2: {
                src: 'assets/images/1974_1976/1974_HamDoi7.jpg',
                alt: 'Hạm đội 7 hùng mạnh của Mỹ sẽ không trở lại giúp Việt Nam Cộng Hòa (Nguồn: US NAVY)',
                alt_ja: '強大な米第7艦隊が南ベトナム救援に戻ることはなかった（米海軍）',
                caption: 'Hạm đội 7 hùng mạnh của Mỹ sẽ không trở lại giúp Việt Nam Cộng Hòa (Nguồn: US NAVY)',
                caption_ja: '強大な米第7艦隊が南ベトナム救援に戻ることはなかった（米海軍）'
            },

            text3: 'Báo cáo cũng chỉ ra khu vực Buôn Mê Thuột là điểm yếu nhất và nếu quân Giải phóng chiếm được điểm này thì toàn bộ hệ thống phòng thủ của VNCH sẽ sụp đổ.',
            text3_ja: '報告書はまた、バンメトート地区が最大の弱点であり、解放軍がここを制圧すれば南ベトナムの全防衛システムが崩壊すると指摘していました。',

            text4: 'Cùng với đó quân Giải phóng cũng mở chiến dịch đánh chiếm tỉnh Phước Long như một đòn trắc nghiệm thực địa để đo khả năng chịu đựng của quân đội Sài Gòn và phản ứng thực tế từ phía Mỹ.',
            text4_ja: 'これとともに、解放軍はサイゴン軍の耐久力と米国の実際の反応を測る実地テストとしてフオックロン省制圧作戦を展開しました。',

            text5: 'Từ báo cáo của Ẩn và trận đánh Phước Long đã góp phần giải tỏa lo ngại của quân Giải phóng, "bật đèn xanh" cho lệnh mở cuộc Tổng tiến công và nổi dậy Mùa Xuân 1975 (*).',
            text5_ja: 'アンの報告とフオックロン戦の勝利は解放軍の懸念を完全に払拭し、1975年春季総攻勢・総蜂起の決行に「青信号」を灯すこととなりました(*)。',

            // ── FOOTNOTE VỚI ĐƯỜNG KẺ GẠCH NGANG Ở CUỐI ──
            footnote: '(*) Tổng tiến công và nổi dậy Mùa Xuân 1975 là chiến dịch quyết định của quân Giải phóng, diễn ra từ ngày 4/3 đến 30/4/1975 qua ba chiến dịch lớn: Tây Nguyên, Huế - Đà Nẵng và Hồ Chí Minh, qua đó thống nhất hoàn toàn đất nước.',
            footnote_ja: '(*) 1975年春季総攻勢・総蜂起は、1975年3月4日から4月30日にかけて中部高原、フエ・ダナン、ホーチミンの三大作戦を通じて展開され、祖国の完全統一を達成した解放軍の決定的な大戦役である。',

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
