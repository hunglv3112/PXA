/**
 * ==============================================================================
 * DỮ LIỆU MỞ RỘNG — NĂM 1964 (data/1964/data_1964.js)
 * ==============================================================================
 * Quản lý toàn bộ dữ liệu năm 1964 cho cả 2 nửa trên Timeline:
 *   1. top: Nhánh TÌNH BÁO (id: '1964t') — 1 sự kiện (layout 1 cột, có midImg & footnotes)
 *   2. bot: Nhánh NHÀ BÁO  (id: '1964b') — 2 sự kiện (layout chia 2)
 * ==============================================================================
 */

window.EXTRA_DATA_1964 = {

    // ==========================================================================
    // 1. NHÁNH TÌNH BÁO — NỬA TRÊN (id: '1964t') — 1 SỰ KIỆN (LAYOUT 1 CỘT)
    // ==========================================================================
    top: [
        {
            id: '1964t',
            modalImg: 'assets/images/1964_1970/1964_TB_MyDenDaNang.jpg',
            modalImgAlt: 'Quân Mỹ đặt chân đến Đà Nẵng vào tháng 3/1965 (Nguồn: USMC)',
            modalImgAlt_ja: '1965年3月、ダナンに上陸した米軍（米海兵隊提供）',
            caption: 'Quân Mỹ đặt chân đến Đà Nẵng vào tháng 3/1965 (Nguồn: USMC)',
            caption_ja: '1965年3月、ダナンに上陸した米軍（米海兵隊提供）',

            title: 'Thu thập các kế hoạch chiến lược và dự báo bộ binh Mỹ vào miền Nam',
            title_ja: '米国の戦略計画収集と米地上軍の南部本格介入予測',
            date: 'Năm 1964',
            date_ja: '1964年',

            text1: 'Trong năm 1964, Mỹ đẩy mạnh việc chuẩn bị các kế hoạch mở rộng hoạt động quân sự tại Việt Nam. Cùng thời gian này, Tướng William Westmoreland tiếp quản chức Tư lệnh MACV vào tháng 6/1964.',
            text1_ja: '1964年、米国はベトナムでの軍事行動拡大に向けた各種計画の策定を急ピッチで進めました。同年6月にはウィリアム・ウェストモーランド将軍がMACV（米軍軍事援助司令部）司令官に着任しました。',

            // ── ẢNH CHÈN GIỮA NỘI DUNG ──
            midImg: {
                src: 'assets/images/1964_1970/1964_TB_WW.jpg',
                alt: 'Tướng Westermolend nhận chức Tư lệnh MACV (Nguồn: Co Rentmeester/Time Life Staff)',
                alt_ja: 'MACV司令官に着任したウェストモーランド将軍（Co Rentmeester/Time Life Staff提供）',
                caption: 'Tướng Westermolend nhận chức Tư lệnh MACV (Nguồn: Co Rentmeester/Time Life Staff)',
                caption_ja: 'MACV司令官に着任したウェストモーランド将軍（Co Rentmeester/Time Life Staff提供）'
            },

            text2: 'Nhờ uy tín nghề nghiệp và mối quan hệ với các quan chức cấp cao Mỹ và chính quyền Sài Gòn, Phạm Xuân Ẩn có điều kiện tiếp cận nhiều tài liệu quân sự quan trọng. Trong năm 1964, ông đã thu thập và bí mật gửi về căn cứ nguyên bản kế hoạch của Westmoreland (*), cùng kế hoạch bình định mới mang tên “Ấp tân sinh” (*).',
            text2_ja: '高い職業的信望と米政府・サイゴン政権高官との親密な関係を背景に、ファム・スアン・アンは数多くの極秘軍事文書に直接アクセスできました。1964年、彼はウェストモーランド計画（*）の原本と、『新生活部落（アプ・タン・シン）』（*）と名付けられた新たな平定計画を入手し、極秘裏に基地へ送達しました。',

            text3: 'Không chỉ có vậy, ông cũng biết rõ tình hình của Mỹ, và đã gửi lại nội dung của kế hoạch McNamara - Taylor (*) do McNamara và Taylor nghĩ ra sau sang Sài Gòn khảo sát thực địa, rồi qua phân tích nguồn tin của MACV và CIA, Phạm Xuân Ẩn khẳng định dứt khoát trong báo cáo gửi về cấp trên: Mỹ chắc chắn sẽ đưa quân chủ lực, bộ binh trực tiếp tham chiến ở miền Nam.',
            text3_ja: 'それだけでなく、彼は米国の意図を的確に見抜き、マクナマラ国防長官とテイラー将軍がサイゴン現地調査を経て策定した『マクナマラ・テイラー計画』（*）の全容も報告。さらにMACVとCIAからの情報源を総合的に分析した結果、アンは上層部への報告書で「米国は間違いなく正規軍・地上軍を南部へ直接投入し本格参戦する」と断固として結論づけました。',

            text4: 'Nhờ vậy, quân Giải phóng chủ động chuyển hướng chiến lược từ sớm, chuẩn bị lực lượng đón đánh đòn khi Thủy quân lục chiến Mỹ đổ bộ Đà Nẵng tháng 3/1965.',
            text4_ja: 'この決定的な先見情報のおかげで、解放軍は早期に戦略方針を転換し、1965年3月に米海兵隊がダナンに上陸した際にも、万全の態勢で迎え撃つ準備を整えることができました。',

            // ── FOOTNOTES ──
            footnote: '(*) Kế hoạch của Westmoreland: Là chiến thuật "tìm và diệt", sử dụng tối đa hỏa lực không quân, pháo binh và lực lượng bộ binh viễn chinh Mỹ mở các cuộc hành quân quy mô lớn nhằm tiêu diệt cơ quan đầu não của quân Giải Phóng.<br><br>(*) Kế hoạch Ấp Tân Sinh: Là cách gọi mới của "Ấp chiến lược", với mục tiêu vẫn là dồn dân, gom dân vào các khu tập trung do kiểm soát gắt gao nhằm chia cắt nhân dân với lực lượng cách mạng và củng cố bộ máy cai trị ở nông thôn.<br><br>(*) Kế hoạch McNamara - Taylor: Là kế hoạch tăng cường sự chỉ huy trực tiếp của cố vấn Mỹ; tăng viện trợ quân sự và quân số quân đội Sài Gòn; đẩy mạnh các chiến dịch bình định nông thôn (đặc biệt khu vực quanh Sài Gòn); và dùng không quân đánh phá miền Bắc và Lào.',
            footnote_ja: '(*) ウェストモーランド計画：航空火力・砲兵力・米遠征地上軍を最大限に投入して大規模作戦を展開し、解放軍の中枢部壊滅を狙う「索敵撃滅（サーチ＆デストロイ）」戦術。<br><br>(*) 新生活部落（アプ・タン・シン）計画：「戦略村」の新呼称であり、厳重な監視下で住民を強制収容し、民衆と革命勢力を分断して農村支配を固めることを目的とした。<br><br>(*) マクナマラ・テイラー計画：米軍事顧問の直接指揮強化、サイゴン軍への軍事援助・兵力増強、農村（特にサイゴン周辺）平定作戦の推進、および北ベトナムとラオスへの空爆を柱とする計画。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ],

    // ==========================================================================
    // 2. NHÁNH NHÀ BÁO — NỬA DƯỚI (id: '1964b') — MẢNG CÓ 2 OBJECT (CHIA 2)
    // ==========================================================================
    bot: [
        {
            id: '1964b',
            modalImg: 'assets/images/1964_1970/1964_NB_PXAThuVuiChoiChim.jpg',
            modalImgAlt: 'Phạm Xuân Ẩn và thú vui nuôi chim (Nguồn: QDNDVN)',
            modalImgAlt_ja: '小鳥を愛育するファム・スアン・アン（ベトナム人民軍新聞）',
            caption: 'Phạm Xuân Ẩn và thú vui nuôi chim (Nguồn: QDNDVN)',
            caption_ja: '小鳥を愛育するファム・スアン・アン（ベトナム人民軍新聞）',

            title: 'Quyết định chia tay Reuters và bước chuyển chiến lược',
            title_ja: 'ロイター退社と米メディアへの戦略的転換',
            date: 'Ngày 27/08/1964',
            date_ja: '1964年8月27日',

            text1: 'Ngày 27/08/1964, Phạm Xuân Ẩn đi tác nghiệp theo dõi sự kiện cho Reuters và trở về tòa soạn muộn. Do bị Trưởng đại diện Nick Turner quát mắng bất công và yêu cầu dẹp lồng chim trên bàn làm việc, ông đã kiên quyết nộp đơn xin nghỉ việc tại Reuters sau gần 4 năm gắn bó (1960-1964).',
            text1_ja: '1964年8月27日、ファム・スアン・アンはロイター通信の取材任務を終えて遅く支局に戻りました。支局長のニック・ターナーから理不尽な叱責を受け、デスク上の鳥かごを片付けるよう命じられたことを機に、彼は4年近く勤めたロイターへ毅然と辞表を提出しました（1960〜1964年）。',

            text2: 'Việc chia tay báo chí Anh là bước chuyển chiến lược chủ động. Ông nhận thấy khi Mỹ chuẩn bị đưa quân trực tiếp vào Việt Nam, tư cách nhà báo Mỹ sẽ giúp ông dễ dàng tiếp cận các cơ quan đầu não chỉ huy Mỹ (MACV) và giới tướng lĩnh Sài Gòn hơn nhiều so với một hãng tin Anh.',
            text2_ja: '英系メディアからの離脱は、極めて主体的かつ戦略的な決断でした。米国がベトナムへの直接派兵を目前にする中、米系メディア所属の記者という身分こそが、英系通信社よりもはるかに容易に米軍事援助司令部（MACV）の中枢やサイゴン軍高官へ接近できると見抜いていたのです。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        },
        {
            id: '1964b',
            modalImg: 'assets/images/1964_1970/1964_NB_DongNghiep.jpg',
            modalImgAlt: 'Phạm Xuân Ẩn (ngoài cùng bên trái) chụp cùng đồng nghiệp như nhà báo Beverly Deepe (ngoài cùng bên phải)… tại văn phòng The New York Herald Tribune tại Sài Gòn (Tên người như cuộc đời - Trang 234)',
            modalImgAlt_ja: 'サイゴンのニューヨーク・ヘラルド・トリビューン支局でビバリー・ディープ記者ら同僚と写るファム・スアン・アン（『名前のような人生』234頁）',
            caption: 'Phạm Xuân Ẩn (ngoài cùng bên trái) chụp cùng đồng nghiệp như nhà báo Beverly Deepe (ngoài cùng bên phải)… tại văn phòng The New York Herald Tribune tại Sài Gòn (Tên người như cuộc đời - Trang 234)',
            caption_ja: 'サイゴンのニューヨーク・ヘラルド・トリビューン支局でビバリー・ディープ記者ら同僚と写るファム・スアン・アン（『名前のような人生』234頁）',

            title: 'Hợp tác với The New York Herald Tribune và Beverly Deepe',
            title_ja: 'ニューヨーク・ヘラルド・トリビューンへの参加と戦場取材',
            date: 'Ngày 29/10/1964',
            date_ja: '1964年10月29日',

            text1: 'Ngày 29/10/1964, Phạm Xuân Ẩn chính thức nhận Giấy xác nhận nhân viên của báo Mỹ The New York Herald Tribune do Richard C. Wald ký, hợp tác chặt chẽ với nữ phóng viên Beverly Deepe.',
            text1_ja: '1964年10月29日、ファム・スアン・アンはリチャード・C・ウォルド署名の米紙『ニューヨーク・ヘラルド・トリビューン』正規職員証明書を正式に受理し、気鋭の女性特派員ビバリー・ディープと緊密な連携を開始しました。',

            text2: 'Sự đồng hành của nữ nhà báo Beverly Deepe giúp ông có thể tự do lái xe chở bà đi tác nghiệp tại các vùng chiến sự diễn ra nhiều như Đà Nẵng (8/1965) và Hậu Nghĩa (1/1966) mà không bị an ninh kiểm soát.',
            text2_ja: 'ビバリー・ディープ記者との同行取材により、アンは自ら車を運転してダナン（1965年8月）やハウギア（1966年1月）などの激戦地へ治安当局の厳しい検問を受けることなく自由に出動・取材することが可能となりました。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ]
};

// ==============================================================================
// TỰ ĐỘNG HÒA TRỘN DỮ LIỆU NĂM 1964 VÀO window.TIMELINE_DATA
// ==============================================================================
(function mergeExtraData1964() {
    function applyBranch(branchKey, defaultId) {
        if (!window.TIMELINE_DATA || !window.EXTRA_DATA_1964) return;
        const branchData = window.EXTRA_DATA_1964[branchKey];
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
        applyBranch('top', '1964t');
        applyBranch('bot', '1964b');
    }

    if (window.TIMELINE_DATA) {
        doMerge();
    } else {
        document.addEventListener('DOMContentLoaded', doMerge);
    }
})();
