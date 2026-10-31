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
            modalImgAlt: 'Quân Việt Nam Cộng Hòa xây dựng công sự chuẩn bị cho chiến dịch Lam Sơn 719 (Nguồn: Corbis)',
            modalImgAlt_ja: 'ラムソン719作戦に向け陣地構築を進める南ベトナム軍（Corbis）',
            caption: 'Quân Việt Nam Cộng Hòa xây dựng công sự chuẩn bị cho chiến dịch Lam Sơn 719 (Nguồn: Corbis)',
            caption_ja: 'ラムソン719作戦に向け陣地構築を進める南ベトナム軍（Corbis）',

            title: 'Thu thập trọn vẹn kế hoạch tác chiến Chiến dịch Lam Sơn 719',
            title_ja: 'ラムソン719作戦計画の完全収集と迎撃準備',
            date: 'Tháng 1/1971',
            date_ja: '1971年1月',

            text1: 'Từ tháng 11/1970, Quân Việt Nam Cộng hòa lên kế hoạch cho Chiến dịch Lam Sơn 719(*), một cuộc tấn công sang Nam Lào. Mục tiêu là cắt đứt Đường mòn Hồ Chí Minh, hệ thống đường miền Bắc dùng để chuyển quân và hàng vào miền Nam.',
            text1_ja: '1970年11月以降、南ベトナム軍はラオス南部への大規模侵攻作戦「ラムソン719」（*）を策定。北部から南部へ兵力や物資を補給する生命線「ホーチミン・ルート」の完全遮断を企図していました。',

            text2: 'Tháng 1/1971, Phạm Xuân Ẩn nhận được tin từ các đầu mối trong Quân Việt Nam Cộng hòa về cuộc tấn công xuyên biên giới đang được chuẩn bị, trong đó quan hệ gần gũi với Phủ Đặc ủy Trung ương Tình báo (CIO) cho ông biết cả đặc nhiệm không vận của Lục quân lẫn cố vấn Mỹ cùng tham gia.',
            text2_ja: '1971年1月、ファム・スアン・アンは南ベトナム軍内部の情報筋から国境越え大作戦の準備情報をキャッチ。中央情報局（CIO）との緊密なパイプを通じ、米陸軍空中機動部隊や米軍事顧問団が作戦に直接参加することまで突き止めました。',

            text3: 'Khi báo cáo đã sẵn sàng gửi cho quân Giải phóng, Ẩn đi bộ dọc một đường phố theo kế hoạch đã định. Bà Nguyễn Thị Ba (liên lạc duy nhất giữa Phạm Xuân Ẩn và tổ chức cách mạng) bê khay đồ trang sức giả rồi giả bộ làm đổ xuống đường. Ẩn dừng lại giúp bà nhặt lên, và nhân tiện chuyển bản báo cáo cho bà. Cuối cùng, bản báo cáo được đưa tới quân Giải Phóng, và công tác chuẩn bị phòng thủ đối phó với Lam Sơn 719 được tiến hành.',
            text3_ja: '極秘報告書が完成すると、アンは綿密な計画通りにサイゴンの通りを歩きました。専属秘密連絡員であるグエン・ティ・バー（B3）が偽の装飾品を載せたトレイを抱えて歩き、わざとアンの前で落としました。アンは立ち止まって拾い集める手助けをするふりをして、報告書を素早く彼女へ手渡しました。報告は直ちに解放軍へ届き、ラムソン719作戦に対する万全の迎撃態勢が敷かれました。',

            // ── ẢNH CHÈN GIỮA NỘI DUNG ──
            midImg3: {
                src: 'assets/images/1971_1973/1971_TB_NTB.jpg',
                alt: 'Bà Nguyễn Thị Ba (Nguồn: TTXVN)',
                alt_ja: '連絡員グエン・ティ・バー（ベトナム通信社）',
                caption: 'Bà Nguyễn Thị Ba (Nguồn: TTXVN)',
                caption_ja: '連絡員グエン・ティ・バー（ベトナム通信社）'
            },

            text4: 'Tin tức của Phạm Xuân Ẩn đã góp phần làm thất bại hoàn toàn chiến dịch sang Lào năm 1971 của Quân Việt Nam Cộng hòa. Chiến dịch này khiến Quân Việt Nam Cộng hòa bị thương vong 8.000 người, 108 trực thăng bị mất, 618 chiếc khác hư hại và 150 xe tăng bị phá hủy.',
            text4_ja: 'ファム・スアン・アンの先見情報は、1971年の南ベトナム軍によるラオス侵攻作戦を完全な大敗北へと追い込む決定打となりました。この作戦で南ベトナム軍は死傷者8,000人以上、ヘリコプター108機喪失、618機損傷、戦車150両破壊という壊滅的打撃を被りました。',

            midImg4: {
                src: 'assets/images/1971_1973/1971_TB_ThuMayBay.jpg',
                alt: 'Máy bay trực thăng, xe thiết giáp của Quân Việt Nam Cộng hòa bị diệt ở Bản Đông trong chiến dịch Đường 9 - Nam Lào (Nguồn: QĐNDVN)',
                alt_ja: '国道9号線・ラオス南部作戦のバンドンで撃破された南ベトナム軍のヘリコプターと装甲車（ベトナム人民軍新聞）',
                caption: 'Máy bay trực thăng, xe thiết giáp của Quân Việt Nam Cộng hòa bị diệt ở Bản Đông trong chiến dịch Đường 9 - Nam Lào (Nguồn: QĐNDVN)',
                caption_ja: '国道9号線・ラオス南部作戦のバンドンで撃破された南ベトナム軍のヘリコプターと装甲車（ベトナム人民軍新聞）'
            },

            footnote: '(*) Chiến dịch Lam Sơn 719 là cuộc hành quân quân sự lớn của quân Việt Nam Cộng hòa, được Mỹ yểm trợ mạnh bằng không quân và pháo binh, diễn ra tại Đường 9 – Nam Lào từ ngày 8/2 đến 23/3/1971.',
            footnote_ja: '(*) ラムソン719作戦：米軍の強力な航空・砲兵支援を受けた南ベトナム軍が、1971年2月8日から3月23日にかけて国道9号線およびラオス南部で展開した大規模侵攻作戦。',

            note: '',
            note_ja: '',
            src: '',
            src_ja: ''
        },
        {
            id: '1971t',
            modalImg: 'assets/images/1971_1973/1971_TB2_BauCu.jpg',
            modalImgAlt: 'Nguyễn Văn Thiệu (người đang phát biểu) và Nguyễn Cao Kỳ (hàng thứ hai bên phải) (Nguồn: United States Information Agency)',
            modalImgAlt_ja: '演説するグエン・ヴァン・ティウとグエン・カオ・キ（後列右）（米情報局）',
            caption: 'Nguyễn Văn Thiệu (người đang phát biểu) và Nguyễn Cao Kỳ (hàng thứ hai bên phải) (Nguồn: United States Information Agency)',
            caption_ja: '演説するグエン・ヴァン・ティウとグエン・カオ・キ（後列右）（米情報局）',

            title: 'Nắm bắt và báo cáo thông tin "Ý đồ của Mỹ xung quanh cuộc bầu cử Tổng thống Việt Nam Cộng hòa 1971"',
            title_ja: '1971年南ベトナム大統領選挙をめぐる米国の意図の解読と報告',
            date: 'Tháng 10/1971',
            date_ja: '1971年10月',

            text1: 'Năm 1971, sau bốn năm cầm quyền, Tổng thống Việt Nam Cộng hòa Nguyễn Văn Thiệu đã củng cố địa vị đến mức không còn có thể tổ chức một cuộc bầu cử thực sự tự do. Hai đối thủ chính khi ấy của Thiệu là Phó Tổng thống Nguyễn Cao Kỳ và tướng Dương Văn Minh. Mỹ muốn Kỳ ra tranh cử để cuộc bầu cử trông dân chủ hơn, nhưng Kỳ từ chối vì cho rằng Thiệu sẽ không để mình thắng.',
            text1_ja: '1971年、執権4年を経たグエン・ヴァン・ティウ大統領は独裁的基盤を固め、真の自由選挙を行う余地はなくなっていました。対抗馬として有力だったのは副大統領グエン・カオ・キとズオン・ヴァン・ミン将軍でした。米国は民主的外観を保つためキの出馬を望みましたが、キはティウ陣営が勝利を許さないと見抜いて出馬を拒否しました。',

            text2: 'Còn đối với tướng Minh, tháng 10/1971, ông đã gặp và tham khảo ý kiến Phạm Xuân Ẩn về việc ra tranh cử. Ẩn đánh giá Mỹ đã chọn Thiệu từ trước và chỉ muốn dùng ông Minh để tạo tính hợp pháp cho cuộc bầu cử, đồng thời khuyên ông Minh rút lui để giữ uy tín cá nhân.',
            text2_ja: '一方ミン将軍は1971年10月、出馬についてファム・スアン・アンに意見を求めました。アンは「米国は初めからティウ支持を決めており、ミン将軍は選挙を合法的に見せるための飾りに過ぎない」と情勢を分析し、将軍個人の名声を保つためにも出馬辞退を強く進言しました。',

            // ── ẢNH CHÈN GIỮA NỘI DUNG ──
            midImg: {
                src: 'assets/images/1971_1973/1971_TB2_DVM.jpg',
                alt: 'Dương Văn Minh (Nguồn: Báo Dân Việt)',
                alt_ja: 'ズオン・ヴァン・ミン（ダンヴィエット紙）',
                caption: 'Dương Văn Minh (Nguồn: Báo Dân Việt)',
                caption_ja: 'ズオン・ヴァン・ミン（ダンヴィエット紙）'
            },

            text3: 'Nghe theo phân tích của Ẩn, tướng Dương Văn Minh đã rút lui khiến cuộc bầu cử ngày 3/10/1971 chỉ còn một ứng cử viên là Thiệu, với 94% số phiếu.',
            text3_ja: 'アンの助言を受け入れたズオン・ヴァン・ミン将軍が出馬を取り下げたため、1971年10月3日の大統領選はティウ単独候補となり、ティウが94%の得票率で「当選」する結果となりました。',

            text4: 'Kết quả này làm giảm uy tín Chính quyền Việt Nam Cộng hòa trong dư luận quốc tế và Mỹ, tạo cơ sở để Quân Giải Phóng thúc đẩy các phong trào đấu tranh chính trị ở đô thị.',
            text4_ja: 'この茶番劇により南ベトナム政権の正統性は国際世論および米国内で失墜。解放勢力が都市部における政治闘争や反戦運動を一段と拡大する絶好の足がかりを築きました。',

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
