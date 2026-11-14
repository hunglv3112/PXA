/**
 * ==============================================================================
 * DỮ LIỆU MỞ RỘNG — NĂM 1971 (data/1971/data_1971.js)
 * ==============================================================================
 * Quản lý dữ liệu chi tiết năm 1971:
 *   - Nhánh TÌNH BÁO (id: '1971t'): 2 sự kiện (dạng mảng 2 object -> Modal chia đôi)
 *   - Nhánh NHÀ BÁO: Năm 1971 không có nhánh nhà báo (đã loại bỏ khỏi timeline)
 * ==============================================================================
 */

window.EXTRA_DATA_1971 = {

    // ==========================================================================
    // 1. NHÁNH TÌNH BÁO — NỬA TRÊN (id: '1971t') — MẢNG CÓ 2 OBJECT (CHIA 2)
    // ==========================================================================
    top: [
        {
            id: '1971t',
            modalImg: 'assets/images/1971_1973/1971_TB_ChuanBi.jpg',
            modalImgAlt: 'Quân Việt Nam Cộng hòa xây dựng công sự chuẩn bị cho chiến dịch Lam Sơn 719 (Nguồn: Corbis)',
            modalImgAlt_ja: 'ラムソン719作戦に向けて陣地を構築するベトナム共和国軍（出典：Corbis）',
            caption: 'Quân Việt Nam Cộng hòa xây dựng công sự chuẩn bị cho chiến dịch Lam Sơn 719 (Nguồn: Corbis)',
            caption_ja: 'ラムソン719作戦に向けて陣地を構築するベトナム共和国軍（出典：Corbis）',

            title: 'Thu thập kế hoạch tác chiến Chiến dịch Lam Sơn 719',
            title_ja: 'ラムソン719作戦の作戦計画の入手',
            date: 'Tháng 1/1971',
            date_ja: '1971年1月',

            text1: 'Từ tháng 11/1970, quân Việt Nam Cộng hòa lên kế hoạch cho Chiến dịch Lam Sơn 719⁽¹⁾, một cuộc tấn công sang Nam Lào. Mục tiêu của chiến dịch là cắt đứt Đường mòn Hồ Chí Minh, hệ thống đường mà miền Bắc dùng để chuyển quân và hàng hóa vào miền Nam.',
            text1_ja: '1970年11月から、ベトナム共和国軍は南ラオスへの攻撃であるラムソン719作戦⁽¹⁾の立案を開始した。この作戦の目的は、北部ベトナムが兵員と物資を南部ベトナムへ輸送するために使っていた道路網、ホーチミン・ルートを遮断することだった。',

            text2: 'Tháng 1/1971, Phạm Xuân Ẩn nhận được tin từ các đầu mối trong quân Việt Nam Cộng hòa về cuộc tấn công xuyên biên giới đang được chuẩn bị, trong đó quan hệ gần gũi với Phủ Đặc ủy Trung ương Tình báo (CIO-Central Intelligence Organization) cho ông biết cả đặc nhiệm không vận của Lục quân quân Việt Nam Cộng hòa và cố vấn Mỹ cùng tham gia.',
            text2_ja: '1971年1月、ファム・スアン・アンはベトナム共和国軍内の情報源から、準備が進められている国境を越えた攻撃に関する情報を得て、中でも中央情報特別委員府（Central Intelligence Organization、CIO）との親しい関係から、ベトナム共和国軍の陸軍の空輸任務部隊もアメリカの顧問も共に参加することを知った。',

            text3: 'Khi báo cáo đã sẵn sàng gửi cho quân Giải phóng, Ẩn đi bộ dọc một đường phố theo kế hoạch đã định. Bà Nguyễn Thị Ba (liên lạc duy nhất giữa Phạm Xuân Ẩn và phía cách mạng từ năm 1960-1975) bê khay đồ trang sức giả rồi giả bộ làm đổ xuống đường. Ẩn dừng lại giúp bà nhặt đồ lên và nhân lúc đó chuyển bản báo cáo cho bà. Cuối cùng, bản báo cáo được đưa tới quân Giải phóng và việc chuẩn bị phòng thủ trước Chiến dịch Lam Sơn 719 được tiến hành.',
            text3_ja: '解放軍に送る報告書の準備が整うと、アンはあらかじめ決めておいた計画どおりに、ある通りに沿って歩いた。グエン・ティ・バー（1960～1975年、ファム・スアン・アンと革命側の間の唯一の連絡係）は、イミテーションのアクセサリーを載せた盆を持ち、誤って路上に落としたふりをした。アンは立ち止まってバーが拾うのを手伝い、その隙に報告書をバーに渡した。最終的に、報告書は解放軍のもとに届けられ、ラムソン719作戦に備えた防御の準備が進められた。',

            // ── ẢNH CHÈN GIỮA NỘI DUNG ──
            midImg3: {
                src: 'assets/images/1971_1973/1971_TB_NTB.jpg',
                alt: 'Bà Nguyễn Thị Ba (Nguồn: TTXVN)',
                alt_ja: 'グエン・ティ・バー（出典：ベトナム通信社）',
                caption: 'Bà Nguyễn Thị Ba (Nguồn: TTXVN)',
                caption_ja: 'グエン・ティ・バー（出典：ベトナム通信社）'
            },

            text4: 'Những thông tin của Phạm Xuân Ẩn đã góp phần làm thất bại hoàn toàn Chiến dịch Lam Sơn 719 của quân Việt Nam Cộng hòa năm 1971. Chiến dịch này khiến quân Việt Nam Cộng hòa chịu thiệt hại 8.000 quân thương vong và 150 xe tăng bị phá hủy, đồng thời phía Mỹ cũng chịu tổn thất nặng nề với 108 trực thăng bị mất và 618 chiếc khác bị hư hại.',
            text4_ja: 'ファム・スアン・アンの情報は、ベトナム共和国軍による1971年のラムソン719作戦を完全な失敗に終わらせることに貢献した。この作戦で、ベトナム共和国軍は8,000人の死傷者と戦車150両の破壊という損害を出し、同時にアメリカ側もヘリコプター108機を失い、ほかに618機が損傷するという甚大な損失を受けた。',

            midImg4: {
                src: 'assets/images/1971_1973/1971_TB_ThuMayBay.jpg',
                alt: 'Máy bay trực thăng, xe thiết giáp của quân Việt Nam Cộng hòa bị diệt ở Bản Đông trong chiến dịch Đường 9 - Nam Lào (Nguồn: Báo Quân đội nhân dân)',
                alt_ja: '9号国道・南ラオス作戦中にバン・ドンで撃破されたベトナム共和国軍のヘリコプターと装甲車（出典：Quan doi nhan dan紙）',
                caption: 'Máy bay trực thăng, xe thiết giáp của quân Việt Nam Cộng hòa bị diệt ở Bản Đông trong chiến dịch Đường 9 - Nam Lào (Nguồn: Báo Quân đội nhân dân)',
                caption_ja: '9号国道・南ラオス作戦中にバン・ドンで撃破されたベトナム共和国軍のヘリコプターと装甲車（出典：Quan doi nhan dan紙）'
            },

            footnote: '1. Chiến dịch Lam Sơn 719 là cuộc hành quân quân sự lớn của quân Việt Nam Cộng hòa, được Mỹ yểm trợ mạnh bằng không quân và pháo binh, diễn ra tại Đường 9 – Nam Lào từ ngày 8/2 đến 23/3/1971.',
            footnote_ja: '1. ラムソン719作戦は、アメリカの空軍と砲兵による強力な支援を受けたベトナム共和国軍の大規模な軍事作戦で、1971年2月8日から3月23日まで9号国道・南ラオスで行われた。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        },
        {
            id: '1971t',
            modalImg: 'assets/images/1971_1973/1971_TB2_BauCu.jpg',
            modalImgAlt: 'Nguyễn Văn Thiệu (người đang phát biểu) và Nguyễn Cao Kỳ (hàng thứ hai, bên phải) (Nguồn: United States Information Agency)',
            modalImgAlt_ja: 'グエン・ヴァン・ティエウ（演説している人物）とグエン・カオ・キー（2列目右側）（出典：United States Information Agency）',
            caption: 'Nguyễn Văn Thiệu (người đang phát biểu) và Nguyễn Cao Kỳ (hàng thứ hai, bên phải) (Nguồn: United States Information Agency)',
            caption_ja: 'グエン・ヴァン・ティエウ（演説している人物）とグエン・カオ・キー（2列目右側）（出典：United States Information Agency）',

            title: 'Nắm bắt và báo cáo thông tin "Ý đồ của Mỹ xung quanh cuộc bầu cử Tổng thống Việt Nam Cộng hòa 1971"',
            title_ja: '「1971年のベトナム共和国大統領選をめぐるアメリカの意図」という情報の把握と報告',
            date: 'Tháng 10/1971',
            date_ja: '1971年10月',

            text1: 'Đến năm 1971, sau bốn năm làm Tổng thống Việt Nam Cộng hòa, Nguyễn Văn Thiệu đã nắm chắc quyền lực trong tay. Những đạo luật do ông ban hành khiến các ứng cử viên khác gần như không có cơ hội, và cuộc bầu cử năm đó khó có thể diễn ra một cách tự do. Hai đối thủ chính khi ấy của Thiệu là Phó Tổng thống Nguyễn Cao Kỳ và Tướng Dương Văn Minh. Mỹ muốn Kỳ ra tranh cử để cuộc bầu cử có vẻ dân chủ hơn, nhưng Kỳ rút lui vì cho rằng Thiệu sẽ không để mình thắng.',
            text1_ja: '1971年には、ベトナム共和国大統領として4年を経たグエン・ヴァン・ティエウが、権力を完全に掌握していた。ティエウが制定した法律によって他の候補者にはほとんど勝ち目がなく、その年の選挙が自由に行われることは難しかった。当時、ティエウの主な対立候補2人は、副大統領のグエン・カオ・キーとズオン・ヴァン・ミン将軍だった。アメリカは選挙をより民主的に見せるためにキーの出馬を望んでいたが、キーはティエウが自分を勝たせないだろうと考え、出馬を辞退した。',

            text2: 'Còn Tướng Minh, trước khi quyết định có ra tranh cử hay không, đã tìm gặp Phạm Xuân Ẩn để hỏi ý kiến. Ẩn nhận định Mỹ đã chọn Thiệu từ trước và chỉ muốn dùng Tướng Minh để tạo tính chính danh cho cuộc bầu cử, đồng thời khuyên ông rút lui để giữ uy tín cá nhân.',
            text2_ja: '一方、ミン将軍は出馬するかどうかを決める前に、ファム・スアン・アンを訪ねて参考意見を求めた。アンは、アメリカがすでにティエウを選んでおり、選挙に正当性を持たせるためにミン将軍を利用したいだけだと判断し、同時に個人の名声を守るため出馬を辞退するようミン将軍に勧めた。',

            // ── ẢNH CHÈN GIỮA NỘI DUNG ──
            midImg: {
                src: 'assets/images/1971_1973/1971_TB2_DVM.jpg',
                alt: 'Dương Văn Minh (Nguồn: Báo Dân Việt)',
                alt_ja: 'ズオン・ヴァン・ミン（出典：Dan Viet紙）',
                caption: 'Dương Văn Minh (Nguồn: Báo Dân Việt)',
                caption_ja: 'ズオン・ヴァン・ミン（出典：Dan Viet紙）'
            },

            text3: 'Nghe theo phân tích của Ẩn, Tướng Minh cũng rút lui, khiến cuộc bầu cử ngày 3/10/1971 chỉ còn một ứng cử viên là Thiệu, người tái đắc cử với 94% số phiếu.',
            text3_ja: 'アンの分析に従ってミン将軍も出馬を辞退したため、1971年10月3日の選挙の候補者はティエウ1人だけとなり、ティエウは94％の票を得て再選された。',

            text4: 'Kết quả này làm giảm uy tín của chính quyền Việt Nam Cộng hòa trong dư luận quốc tế và tại Mỹ, tạo cơ sở để phía cách mạng thúc đẩy các phong trào đấu tranh chính trị ở đô thị.',
            text4_ja: 'この結果は、国際世論およびアメリカの世論におけるベトナム共和国政権の威信を傷つけ、革命側が都市部で政治闘争運動を進めるための基盤をつくった。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        }
    ],

    // Năm 1971 không có nhánh nhà báo
    bot: []
};

// ==============================================================================
// TỰ ĐỘNG HÒA TRỘN DỮ LIỆU NĂM 1971 VÀO window.TIMELINE_DATA
// ==============================================================================
(function mergeExtraData1971() {
    function applyBranch(branchKey, defaultId) {
        if (!window.TIMELINE_DATA || !window.EXTRA_DATA_1971) return;
        const branchData = window.EXTRA_DATA_1971[branchKey];
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
        applyBranch('top', '1971t');
    }

    if (window.TIMELINE_DATA) {
        doMerge();
    } else {
        document.addEventListener('DOMContentLoaded', doMerge);
    }
})();
