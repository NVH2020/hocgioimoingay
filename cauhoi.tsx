export interface Question {
  id: number;
  content: string;
  options: string[];
  answer: number; // Index of the correct option (0-3)
}

export const QUESTION_BANK: Question[] = [
  {
  id: 1,
  content: "Tìm x, biết: $$2x + 5 = 15$$",
  options: ["x = 5", "x = 10", "x = 7.5", "x = 4"],
  answer: 0
},
{
  id: 2,
  content: "Giải phương trình: $$x^2 = 9$$",
  options: ["x = 3", "x = -3", "x = ±3", "x = 0"],
  answer: 2
},
{
  id: 3,
  content: "Giá trị của $$\\cos 60^\\circ$$ bằng:",
  options: ["$$\\frac{1}{2}$$", "$$\\frac{\\sqrt{3}}{2}$$", "1", "0"],
  answer: 0
},
{
  id: 4,
  content: "Đạo hàm của hàm số $$y = x^2$$ là:",
  options: ["$$y' = x$$", "$$y' = 2x$$", "$$y' = 2$$", "$$y' = x^2$$"],
  answer: 1
},
{
  id: 5,
  content: "Tập nghiệm của phương trình $$x^2 - 4 = 0$$ là:",
  options: ["{2}", "{-2}", "{-2; 2}", "∅"],
  answer: 2
},
{
  id: 6,
  content: "Công thức diện tích hình tròn là:",
  options: ["$$S=\\pi R^2$$", "$$S=2\\pi R$$", "$$S=R^2$$", "$$S=\\pi R$$"],
  answer: 0
},
{
  id: 7,
  content: "Số nào sau đây là số nguyên tố?",
  options: ["1", "4", "6", "7"],
  answer: 3
},
{
  id: 8,
  content: "Giá trị của $$2^3 \\cdot 2^2$$ bằng:",
  options: ["$$2^5$$", "$$2^6$$", "32", "16"],
  answer: 0
},
{
  id: 9,
  content: "Hàm số $$y = \\sin x$$ có chu kỳ là:",
  options: ["$$\\pi$$", "$$2\\pi$$", "$$\\frac{\\pi}{2}$$", "$$4\\pi$$"],
  answer: 1
},
{
  id: 10,
  content: "Căn bậc hai của 25 là:",
  options: ["5", "-5", "±5", "0"],
  answer: 2
},

/* ===== VẬT LÝ ===== */

{
  id: 11,
  content: "Công thức tính vận tốc là:",
  options: ["$$v=\\frac{s}{t}$$", "$$v=s.t$$", "$$v=\\frac{t}{s}$$", "$$v=s+t$$"],
  answer: 0
},
{
  id: 12,
  content: "Đơn vị của lực trong hệ SI là:",
  options: ["Jun", "Niutơn", "Oát", "Vôn"],
  answer: 1
},
{
  id: 13,
  content: "Công thức tính công cơ học là:",
  options: ["$$A=F.s$$", "$$A=m.g$$", "$$A=F/t$$", "$$A=F+ s$$"],
  answer: 0
},
{
  id: 14,
  content: "Vật rơi tự do có gia tốc xấp xỉ:",
  options: ["5 m/s²", "9.8 m/s²", "15 m/s²", "20 m/s²"],
  answer: 1
},
{
  id: 15,
  content: "Đơn vị của công suất là:",
  options: ["Jun", "Niutơn", "Oát", "Ampe"],
  answer: 2
},

/* ===== HÓA HỌC ===== */

{
  id: 16,
  content: "Công thức hóa học của nước là:",
  options: ["${{H}_{2}}O$", "$C{{O}_{2}}$", "NaCl", "${{O}_{2}}$"],
  answer: 0
},
{
  id: 17,
  content: "Nguyên tố có kí hiệu O là:",
  options: ["Oxi", "Ozon", "Vàng", "Bạc"],
  answer: 0
},
{
  id: 18,
  content: "Axit clohidric có công thức là:",
  options: ["HCl", "${{H}_{2}}S{{O}_{4}}$", "$HN{{O}_{3}}$", "NaOH"],
  answer: 0
},
{
  id: 19,
  content: "Kim loại dẫn điện tốt nhất trong các kim loại bên dưới là:",
  options: ["Sắt", "Nhôm", "Bạc", "Đồng"],
  answer: 2
},
{
  id: 20,
  content: "pH < 7 cho biết dung dịch là:",
  options: ["Trung tính", "Bazơ", "Axit", "Muối"],
  answer: 2
},

/* ===== VĂN HỌC ===== */

{
  id: 21,
  content: "Tác giả Truyện Kiều là:",
  options: ["Nguyễn Du", "Nam Cao", "Tố Hữu", "Xuân Diệu"],
  answer: 0
},
{
  id: 22,
  content: "Tác phẩm \"Lão Hạc\" thuộc thể loại:",
  options: ["Thơ", "Kịch", "Truyện ngắn", "Tiểu thuyết"],
  answer: 2
},
{
  id: 23,
  content: "Nhà thơ Xuân Diệu được mệnh danh là:",
  options: ["Nhà thơ mới", "Ông hoàng thơ tình", "Nhà thơ hiện thực", "Nhà thơ cách mạng"],
  answer: 1
},
{
  id: 24,
  content: "Văn học dân gian không bao gồm:",
  options: ["Ca dao", "Truyện cổ tích", "Tiểu thuyết", "Tục ngữ"],
  answer: 2
},
{
  id: 25,
  content: "Tác giả \"Chí Phèo\" là:",
  options: ["Nam Cao", "Ngô Tất Tố", "Vũ Trọng Phụng", "Nguyễn Công Hoan"],
  answer: 0
},

/* ===== ĐỊA LÝ ===== */

{
  id: 26,
  content: "Thủ đô của Việt Nam là:",
  options: ["Hà Nội", "Huế", "TP.HCM", "Đà Nẵng"],
  answer: 0
},
{
  id: 27,
  content: "Việt Nam thuộc châu lục nào?",
  options: ["Châu Âu", "Châu Á", "Châu Phi", "Châu Mỹ"],
  answer: 1
},
{
  id: 28,
  content: "Sông dài nhất Việt Nam là:",
  options: ["Sông Hồng", "Sông Đà", "Sông Mekong", "Sông Đồng Nai"],
  answer: 2
},
{
  id: 29,
  content: "Việt Nam có khí hậu:",
  options: ["Ôn đới", "Nhiệt đới gió mùa", "Hàn đới", "Hoang mạc"],
  answer: 1
},
{
  id: 30,
  content: "Biển Đông thuộc đại dương nào?",
  options: ["Đại Tây Dương", "Ấn Độ Dương", "Thái Bình Dương", "Bắc Băng Dương"],
  answer: 2
},
/* ===== TOÁN ===== */

{
  id: 31,
  content: "Giải phương trình: $$x^2 - 5x + 6 = 0$$",
  options: ["x = 2; 3", "x = -2; -3", "x = 1; 6", "x = 0; 6"],
  answer: 0
},
{
  id: 32,
  content: "Giá trị của $$\\sin 90^\\circ$$ là:",
  options: ["0", "1", "-1", "$$\\frac{1}{2}$$"],
  answer: 1
},
{
  id: 33,
  content: "Đạo hàm của $$y = 3x$$ là:",
  options: ["$$y'=3$$", "$$y'=x$$", "$$y'=3x$$", "$$y'=0$$"],
  answer: 0
},
{
  id: 34,
  content: "Hình lập phương có số mặt là:",
  options: ["4", "6", "8", "12"],
  answer: 1
},
{
  id: 35,
  content: "Giá trị của $$5!$$ bằng:",
  options: ["60", "100", "120", "240"],
  answer: 2
},
{
  id: 36,
  content: "Hàm số $$y = x^2$$ đạt GTNN tại:",
  options: ["x = 1", "x = -1", "x = 0", "x = 2"],
  answer: 2
},
{
  id: 37,
  content: "Giá trị của $$\\log_{10} 100$$ là:",
  options: ["1", "2", "10", "100"],
  answer: 1
},
{
  id: 38,
  content: "Số nghiệm của phương trình $$x^2 + 1 = 0$$ là:",
  options: ["0", "1", "2", "Vô số"],
  answer: 0
},
{
  id: 39,
  content: "Tổng các góc trong tam giác bằng:",
  options: ["90°", "180°", "270°", "360°"],
  answer: 1
},
{
  id: 40,
  content: "Công thức chu vi hình tròn là:",
  options: ["$$C=2\\pi R$$", "$$C=\\pi R^2$$", "$$C=R^2$$", "$$C=\\pi R$$"],
  answer: 0
},

/* ===== VẬT LÝ ===== */

{
  id: 41,
  content: "Đơn vị của khối lượng là:",
  options: ["m", "kg", "s", "N"],
  answer: 1
},
{
  id: 42,
  content: "Vật đang đứng yên có vận tốc bằng:",
  options: ["1 m/s", "0 m/s", "5 m/s", "Không xác định"],
  answer: 1
},
{
  id: 43,
  content: "Lực hút của Trái Đất gọi là:",
  options: ["Lực đàn hồi", "Trọng lực", "Lực ma sát", "Lực điện"],
  answer: 1
},
{
  id: 44,
  content: "Đơn vị của thời gian là:",
  options: ["m", "kg", "s", "A"],
  answer: 2
},
{
  id: 45,
  content: "Nhiệt độ đo bằng dụng cụ:",
  options: ["Cân", "Thước", "Nhiệt kế", "Lực kế"],
  answer: 2
},

/* ===== HÓA ===== */

{
  id: 46,
  content: "Nguyên tố H có tên là:",
  options: ["Hiđro", "Heli", "Oxi", "Nitơ"],
  answer: 0
},
{
  id: 47,
  content: "Kim loại có màu đỏ là:",
  options: ["Sắt", "Đồng", "Nhôm", "Bạc"],
  answer: 1
},
{
  id: 48,
  content: "Dung dịch bazơ làm quỳ tím:",
  options: ["Hóa đỏ", "Không đổi", "Hóa xanh", "Hóa vàng"],
  answer: 2
},
{
  id: 49,
  content: "NaCl là:",
  options: ["Axit", "Bazơ", "Muối", "Kim loại"],
  answer: 2
},
{
  id: 50,
  content: "Oxi duy trì sự:",
  options: ["Cháy", "Bay hơi", "Tan chảy", "Ngưng tụ"],
  answer: 0
},

/* ===== IQ ===== */

{
  id: 51,
  content: "Số tiếp theo: 2, 4, 8, 16, ?",
  options: ["18", "24", "32", "64"],
  answer: 2
},
{
  id: 52,
  content: "Con gì đập thì sống, không đập thì chết?",
  options: ["Con tim", "Con cá", "Con người", "Con muỗi"],
  answer: 0
},
{
  id: 53,
  content: "Cái gì luôn đi lên nhưng không bao giờ đi xuống?",
  options: ["Tuổi", "Nhiệt độ", "Giá tiền", "Núi"],
  answer: 0
},
{
  id: 54,
  content: "Một năm có bao nhiêu tháng?",
  options: ["10", "11", "12", "13"],
  answer: 2
},
{
  id: 55,
  content: "Số lớn nhất có 2 chữ số là:",
  options: ["98", "99", "100", "90"],
  answer: 1
},
{
  id: 56,
  content: "Số nguyên tố lớn nhất có 2 chữ số là:",
  options: ["98", "97", "93", "90"],
  answer: 1
},
{
  id: 57,
  content: "Căn bậc hai của 16 là: ",
  options: ["4", "-4 và 4", "-4", "không có"],
  answer: 1
},
{
  id: 58,
  content: "Số nguyên hàm của một hàm số liên tục là",
  options: ["0", "vô số", "1", "2"],
  answer: 1
},
{
  id: 59,
  content: "Đạo hàm của hàm số y = sin2x là",
  options: ["-cos2x", "2cos2x", "sin2x", "cos2x"],
  answer: 1
},
{
  id: 60,
  content: "Trung bình cộng của 2 số 100 và 200 bằng",
  options: ["100", "150", "300", "50"],
  answer: 1
},

/* ===== TOÁN (tiếp) ===== */

{
  id: 61,
  content: "Giải phương trình: $$3x - 7 = 2x + 5$$",
  options: ["x = 12", "x = -12", "x = 2", "x = 5"],
  answer: 0
},
{
  id: 62,
  content: "Giá trị của $$\\log_2 8$$ bằng:",
  options: ["2", "3", "4", "8"],
  answer: 1
},
{
  id: 63,
  content: "Nguyên hàm của $$f(x)=2x$$ là:",
  options: ["$$x^2 + C$$", "$$2x^2 + C$$", "$$x + C$$", "$$2 + C$$"],
  answer: 0
},
{
  id: 64,
  content: "Thể tích khối cầu bán kính R là:",
  options: ["$$4\\pi R^2$$", "$$\\frac{4}{3}\\pi R^3$$", "$$\\pi R^3$$", "$$2\\pi R$$"],
  answer: 1
},
{
  id: 65,
  content: "Tiệm cận ngang của hàm $$y=\\frac{2x+1}{x}$$ là:",
  options: ["y = 0", "y = 1", "y = 2", "x = 0"],
  answer: 2
},

/* ===== SINH HỌC ===== */

{
  id: 66,
  content: "Đơn vị cấu trúc và chức năng của cơ thể sống là:",
  options: ["Tế bào", "Mô", "Cơ quan", "Hệ cơ quan"],
  answer: 0
},
{
  id: 67,
  content: "Quá trình cây xanh chế tạo chất hữu cơ gọi là:",
  options: ["Hô hấp", "Quang hợp", "Thoát hơi nước", "Tiêu hóa"],
  answer: 1
},
{
  id: 68,
  content: "ADN có cấu trúc dạng:",
  options: ["Chuỗi đơn", "Xoắn kép", "Vòng tròn", "Mạch thẳng"],
  answer: 1
},
{
  id: 69,
  content: "Nhóm máu phổ biến nhất ở người là:",
  options: ["A", "B", "AB", "O"],
  answer: 3
},
{
  id: 70,
  content: "Cơ quan trao đổi khí của người là:",
  options: ["Tim", "Phổi", "Gan", "Thận"],
  answer: 1
},

/* ===== TIẾNG ANH ===== */

{
  id: 71,
  content: "Choose the correct answer: She ___ to school every day.",
  options: ["go", "goes", "going", "gone"],
  answer: 1
},
{
  id: 72,
  content: "Choose the correct answer: I ___ English for 5 years.",
  options: ["learn", "learned", "have learned", "learning"],
  answer: 2
},
{
  id: 73,
  content: "The opposite of \"big\" is:",
  options: ["large", "small", "tall", "wide"],
  answer: 1
},
{
  id: 74,
  content: "Choose the correct preposition: She is good ___ math.",
  options: ["in", "on", "at", "for"],
  answer: 2
},
{
  id: 75,
  content: "Plural form of \"child\" is:",
  options: ["childs", "children", "childes", "child"],
  answer: 1
},

/* ===== TIN HỌC ===== */

{
  id: 76,
  content: "CPU là viết tắt của:",
  options: [
    "Central Processing Unit",
    "Computer Personal Unit",
    "Central Program Unit",
    "Control Processing Unit"
  ],
  answer: 0
},
{
  id: 77,
  content: "Thiết bị nào sau đây là thiết bị xuất?",
  options: ["Chuột", "Bàn phím", "Màn hình", "Scanner"],
  answer: 2
},
{
  id: 78,
  content: "Hệ điều hành Windows thuộc loại:",
  options: ["Mã nguồn mở", "Hệ điều hành", "Phần mềm ứng dụng", "Ngôn ngữ lập trình"],
  answer: 1
},
{
  id: 79,
  content: "Đơn vị đo dung lượng bộ nhớ là:",
  options: ["Byte", "Watt", "Volt", "Hz"],
  answer: 0
},
{
  id: 80,
  content: "HTML dùng để:",
  options: [
    "Tạo trang web",
    "Xử lý dữ liệu",
    "Lập trình hệ thống",
    "Thiết kế đồ họa"
  ],
  answer: 0
},

/* ===== TRÍ TUỆ – IQ ===== */

{
  id: 81,
  content: "Số tiếp theo trong dãy: 1, 4, 9, 16, ?",
  options: ["20", "25", "30", "36"],
  answer: 1
},
{
  id: 82,
  content: "Cái gì càng lấy đi càng lớn?",
  options: ["Cái hố", "Cái túi", "Cái bóng", "Cái cây"],
  answer: 0
},
{
  id: 83,
  content: "Con gì buổi sáng đi 4 chân, trưa đi 2 chân, tối đi 3 chân?",
  options: ["Con người", "Con chó", "Con mèo", "Con khỉ"],
  answer: 0
},
{
  id: 84,
  content: "Nếu hôm nay là thứ Hai thì 3 ngày sau là:",
  options: ["Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu"],
  answer: 2
},
{
  id: 85,
  content: "Số nhỏ nhất có 3 chữ số là:",
  options: ["99", "100", "101", "111"],
  answer: 1
},
/* ===== VẬT LÝ ===== */

{
  id: 121,
  content: "Công thức tính áp suất là:",
  options: ["$$p=\\frac{F}{S}$$", "$$p=F.S$$", "$$p=\\frac{S}{F}$$", "$$p=F+S$$"],
  answer: 0
},
{
  id: 122,
  content: "Đơn vị của điện trở là:",
  options: ["Ampe", "Vôn", "Ôm", "Oát"],
  answer: 2
},
{
  id: 123,
  content: "Cường độ dòng điện được ký hiệu là:",
  options: ["U", "R", "I", "P"],
  answer: 2
},
{
  id: 124,
  content: "Định luật Ôm có công thức:",
  options: ["$$I=\\frac{U}{R}$$", "$$U=IR^2$$", "$$R=IU$$", "$$I=UR$$"],
  answer: 0
},
{
  id: 125,
  content: "Vật dẫn điện tốt nhất là:",
  options: ["Sắt", "Nhôm", "Đồng", "Bạc"],
  answer: 3
},

/* ===== HÓA HỌC ===== */

{
  id: 126,
  content: "Nguyên tố hóa học là tập hợp các nguyên tử có cùng:",
  options: ["Số khối", "Số proton", "Số nơtron", "Khối lượng"],
  answer: 1
},
{
  id: 127,
  content: "Số mol được tính theo công thức:",
  options: ["$$n=\\frac{m}{M}$$", "$$n=m.M$$", "$$n=\\frac{M}{m}$$", "$$n=m+M$$"],
  answer: 0
},
{
  id: 128,
  content: "Dung dịch có pH = 7 là:",
  options: ["Axit", "Bazơ", "Trung tính", "Muối"],
  answer: 2
},
{
  id: 129,
  content: "Kim loại nào sau đây nhẹ nhất?",
  options: ["Fe", "Al", "Na", "Cu"],
  answer: 2
},
{
  id: 130,
  content: "Chất xúc tác có vai trò:",
  options: [
    "Làm phản ứng nhanh hơn",
    "Làm phản ứng chậm lại",
    "Tăng sản phẩm",
    "Bị tiêu hao"
  ],
  answer: 0
},

/* ===== ĐỊA LÝ ===== */

{
  id: 131,
  content: "Dãy Hoàng Liên Sơn thuộc vùng:",
  options: [
    "Tây Bắc",
    "Đông Bắc",
    "Tây Nguyên",
    "Đồng bằng Bắc Bộ"
  ],
  answer: 0
},
{
  id: 132,
  content: "Việt Nam có đường bờ biển dài khoảng:",
  options: ["1000 km", "2000 km", "3260 km", "5000 km"],
  answer: 2
},
{
  id: 133,
  content: "Đồng bằng lớn nhất Việt Nam là:",
  options: [
    "Đồng bằng sông Hồng",
    "Đồng bằng sông Cửu Long",
    "Đồng bằng ven biển",
    "Đồng bằng duyên hải"
  ],
  answer: 1
},
{
  id: 134,
  content: "Khí hậu Việt Nam chịu ảnh hưởng chủ yếu của:",
  options: [
    "Gió mùa",
    "Gió Tây ôn đới",
    "Gió phơn",
    "Gió biển"
  ],
  answer: 0
},
{
  id: 135,
  content: "Tỉnh có diện tích lớn nhất Việt Nam là:",
  options: ["Nghệ An", "Thanh Hóa", "Gia Lai", "Lâm Đồng"],
  answer: 0
},

/* ===== VĂN HỌC ===== */

{
  id: 136,
  content: "Thơ mới Việt Nam phát triển mạnh trong giai đoạn:",
  options: [
    "1930–1945",
    "1945–1954",
    "1954–1975",
    "1975–2000"
  ],
  answer: 0
},
{
  id: 137,
  content: "Tác phẩm \"Tắt đèn\" phản ánh cuộc sống của:",
  options: [
    "Nông dân",
    "Công nhân",
    "Trí thức",
    "Tiểu tư sản"
  ],
  answer: 0
},
{
  id: 138,
  content: "Nhân vật chị Dậu xuất hiện trong tác phẩm:",
  options: [
    "Lão Hạc",
    "Chí Phèo",
    "Tắt đèn",
    "Sống mòn"
  ],
  answer: 2
},
{
  id: 139,
  content: "Nhà thơ Tố Hữu thuộc khuynh hướng:",
  options: [
    "Lãng mạn",
    "Hiện thực",
    "Cách mạng",
    "Tượng trưng"
  ],
  answer: 2
},
{
  id: 140,
  content: "Văn học hiện thực phê phán tập trung phản ánh:",
  options: [
    "Thiên nhiên",
    "Xã hội phong kiến",
    "Chiến tranh",
    "Đời sống công nghiệp"
  ],
  answer: 1
},

/* ===== TRÍ TUỆ – IQ ===== */

{
  id: 141,
  content: "Số tiếp theo trong dãy: 3, 6, 12, 24, ?",
  options: ["36", "42", "48", "60"],
  answer: 2
},
{
  id: 142,
  content: "Một cây bút và quyển vở giá 11.000đ, bút đắt hơn vở 9.000đ. Vở giá bao nhiêu?",
  options: ["1.000đ", "2.000đ", "3.000đ", "5.000đ"],
  answer: 0
},
{
  id: 143,
  content: "Nếu A là cha của B, B là cha của C thì A là gì của C?",
  options: ["Anh", "Bố", "Ông", "Chú"],
  answer: 2
},
{
  id: 144,
  content: "Hình nào có số cạnh nhiều nhất trong các hình sau?",
  options: ["Tam giác", "Tứ giác", "Ngũ giác", "Lục giác"],
  answer: 3
},
{
  id: 145,
  content: "Số La Mã của 50 là:",
  options: ["L", "C", "X", "V"],
  answer: 0
},
/* ===== TRÍ TUỆ – IQ (tiếp) ===== */

{
  id: 146,
  content: "Số tiếp theo trong dãy: 5, 10, 20, 40, ?",
  options: ["45", "60", "80", "100"],
  answer: 2
},
{
  id: 147,
  content: "Nếu hôm nay là thứ Sáu thì 10 ngày sau là:",
  options: ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm"],
  answer: 1
},
{
  id: 148,
  content: "Cái gì càng chia sẻ càng nhiều?",
  options: ["Tiền", "Kiến thức", "Bánh", "Nước"],
  answer: 1
},
{
  id: 149,
  content: "Số La Mã của 100 là:",
  options: ["L", "C", "D", "M"],
  answer: 1
},
{
  id: 150,
  content: "Một tá có bao nhiêu đơn vị?",
  options: ["10", "11", "12", "20"],
  answer: 2
},

/* ===== TOÁN (kết) ===== */

{
  id: 151,
  content: "Giải bất phương trình: $$x - 3 > 0$$",
  options: ["x > 3", "x < 3", "x = 3", "x ≥ 3"],
  answer: 0
},
{
  id: 152,
  content: "Giá trị của $$\\tan 45^\\circ$$ bằng:",
  options: ["0", "1", "$$\\sqrt{3}$$", "$$\\frac{1}{\\sqrt{3}}$$"],
  answer: 1
},
{
  id: 153,
  content: "Hệ số góc của đường thẳng $$y = 3x + 2$$ là:",
  options: ["2", "3", "-3", "1"],
  answer: 1
},
{
  id: 154,
  content: "Số nghiệm của phương trình $$x^2 = 0$$ là:",
  options: ["0", "1", "2", "Vô số"],
  answer: 1
},
{
  id: 155,
  content: "Giá trị của $$\\sqrt{49}$$ là:",
  options: ["7", "-7", "±7", "0"],
  answer: 0
},

/* ===== VẬT LÝ (kết) ===== */

{
  id: 156,
  content: "Công suất được tính bằng công thực hiện trong:",
  options: ["1 mét", "1 giây", "1 giờ", "1 phút"],
  answer: 1
},
{
  id: 157,
  content: "Thiết bị dùng để đo hiệu điện thế là:",
  options: ["Ampe kế", "Vôn kế", "Oát kế", "Ôm kế"],
  answer: 1
},
{
  id: 158,
  content: "Âm truyền được trong môi trường:",
  options: ["Chân không", "Rắn, lỏng, khí", "Chỉ trong nước", "Chỉ trong không khí"],
  answer: 1
},
{
  id: 159,
  content: "Nhiệt độ tăng thì thể tích chất khí:",
  options: ["Giảm", "Không đổi", "Tăng", "Bằng 0"],
  answer: 2
},
{
  id: 160,
  content: "Vận tốc ánh sáng xấp xỉ:",
  options: ["3×10^8 m/s", "3×10^6 m/s", "300 m/s", "1500 m/s"],
  answer: 0
},

/* ===== HÓA (kết) ===== */

{
  id: 161,
  content: "Số electron của nguyên tử trung hòa bằng:",
  options: ["Số proton", "Số nơtron", "Số khối", "Khối lượng"],
  answer: 0
},
{
  id: 162,
  content: "Chất nào sau đây là bazơ?",
  options: ["HCl", "NaOH", "CO2", "NaCl"],
  answer: 1
},
{
  id: 163,
  content: "Kim loại nào phản ứng mạnh với nước?",
  options: ["Cu", "Fe", "Na", "Ag"],
  answer: 2
},
{
  id: 164,
  content: "Dung dịch axit làm quỳ tím:",
  options: ["Hóa xanh", "Hóa đỏ", "Không đổi", "Hóa vàng"],
  answer: 1
},
{
  id: 165,
  content: "Phản ứng tỏa nhiệt là phản ứng:",
  options: ["Thu nhiệt", "Giải phóng nhiệt", "Không đổi nhiệt", "Làm lạnh"],
  answer: 1
},

/* ===== SINH (kết) ===== */

{
  id: 166,
  content: "Hệ thần kinh trung ương gồm:",
  options: ["Não và tủy sống", "Não và tim", "Não và phổi", "Não và gan"],
  answer: 0
},
{
  id: 167,
  content: "Trao đổi khí ở phổi diễn ra tại:",
  options: ["Phế nang", "Khí quản", "Phế quản", "Thanh quản"],
  answer: 0
},
{
  id: 168,
  content: "Máu đỏ tươi là do chứa nhiều:",
  options: ["CO2", "O2", "N2", "H2"],
  answer: 1
},
{
  id: 169,
  content: "Thực vật hấp thụ nước chủ yếu qua:",
  options: ["Lá", "Thân", "Rễ", "Hoa"],
  answer: 2
},
{
  id: 170,
  content: "Di truyền học nghiên cứu về:",
  options: ["Sinh trưởng", "Biến dị", "Di truyền và biến dị", "Tiến hóa"],
  answer: 2
},

/* ===== TIẾNG ANH (kết) ===== */

{
  id: 171,
  content: "Choose the correct answer: I ___ a book now.",
  options: ["read", "reads", "am reading", "reading"],
  answer: 2
},
{
  id: 172,
  content: "Past tense of \"go\" is:",
  options: ["goed", "went", "gone", "goes"],
  answer: 1
},
{
  id: 173,
  content: "Synonym of \"happy\" is:",
  options: ["sad", "angry", "glad", "tired"],
  answer: 2
},
{
  id: 174,
  content: "Choose correct: She is ___ than me.",
  options: ["tall", "taller", "tallest", "more tall"],
  answer: 1
},
{
  id: 175,
  content: "Plural of \"mouse\" is:",
  options: ["mouses", "mouse", "mice", "micess"],
  answer: 2
},

/* ===== TIN HỌC (kết) ===== */

{
  id: 176,
  content: "Phần mềm soạn thảo văn bản phổ biến là:",
  options: ["Excel", "PowerPoint", "Word", "Paint"],
  answer: 2
},
{
  id: 177,
  content: "Thiết bị lưu trữ dữ liệu là:",
  options: ["CPU", "RAM", "Ổ cứng", "Màn hình"],
  answer: 2
},
{
  id: 178,
  content: "Internet là:",
  options: [
    "Mạng máy tính toàn cầu",
    "Phần mềm",
    "Thiết bị phần cứng",
    "Hệ điều hành"
  ],
  answer: 0
},
{
  id: 179,
  content: "Ngôn ngữ dùng để tạo kiểu trang web là:",
  options: ["HTML", "CSS", "Java", "Python"],
  answer: 1
},
{
  id: 180,
  content: "Phím tắt sao chép là:",
  options: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
  answer: 1
},

/* ===== IQ (kết) ===== */

{
  id: 181,
  content: "Số lớn nhất có 3 chữ số là:",
  options: ["998", "999", "1000", "900"],
  answer: 1
},
{
  id: 182,
  content: "Cái gì không có chân nhưng vẫn chạy?",
  options: ["Xe", "Nước", "Đồng hồ", "Con sông"],
  answer: 3
},
{
  id: 183,
  content: "Nếu 1 + 1 = 10 (hệ nhị phân) thì 1 + 0 = ?",
  options: ["0", "1", "10", "11"],
  answer: 1
},
{
  id: 184,
  content: "Số nào chia hết cho 3?",
  options: ["14", "21", "25", "28"],
  answer: 1
},
{
  id: 185,
  content: "Hình vuông có mấy trục đối xứng trong cùng 1 mặt phẳng chứa hình vuông?",
  options: ["1", "2", "3", "4"],
  answer: 3
},
{
  id: 185,
  content: "Hình vuông có tất cả mấy trục đối xứng ?",
  options: ["1", "2", "4", "5"],
  answer: 3
},
  { id: 186, content: "Vị vua nào đã đặt quốc hiệu nước ta là Đại Cồ Việt?", options: ["Đinh Tiên Hoàng", "Lê Đại Hành", "Lý Thái Tổ", "Ngô Quyền"], answer: 0 },
  { id: 187, content: "Ai là người lãnh đạo cuộc khởi nghĩa Lam Sơn chống quân Minh?", options: ["Nguyễn Trãi", "Lê Lợi", "Trần Hưng Đạo", "Quang Trung"], answer: 1 },
  { id: 188, content: "Vị anh hùng dân tộc nào đã ba lần đại phá quân Nguyên Mông?", options: ["Trần Quang Khải", "Trần Khánh Dư", "Trần Hưng Đạo", "Trần Nhật Duật"], answer: 2 },
  { id: 189, content: "Ai là tác giả của 'Bình Ngô Đại Cáo'?", options: ["Lê Lợi", "Nguyễn Trãi", "Trần Nguyên Đãn", "Chu Văn An"], answer: 1 },
  { id: 190, content: "Nữ sĩ nào được mệnh danh là 'Bà chúa thơ Nôm'?", options: ["Đoàn Thị Điểm", "Bà Huyện Thanh Quan", "Hồ Xuân Hương", "Anh Thơ"], answer: 2 },
  { id: 191, content: "Vị vua nào nổi tiếng với chiến thắng Ngọc Hồi - Đống Đa?", options: ["Nguyễn Nhạc", "Nguyễn Huệ", "Nguyễn Ánh", "Lê Chiêu Thống"], answer: 1 },
  { id: 192, content: "Ai là người đọc bản Tuyên ngôn Độc lập tại Quảng trường Ba Đình năm 1945?", options: ["Võ Nguyên Giáp", "Phạm Văn Đồng", "Hồ Chí Minh", "Trường Chinh"], answer: 2 },
  { id: 193, content: "Vị Đại tướng đầu tiên của Quân đội Nhân dân Việt Nam là ai?", options: ["Văn Tiến Dũng", "Võ Nguyên Giáp", "Nguyễn Chí Thanh", "Chu Huy Mân"], answer: 1 },
  { id: 194, content: "Người anh hùng thiếu niên đã bóp nát quả cam vì không được dự bàn việc nước là ai?", options: ["Lý Tự Trọng", "Vừa A Dính", "Trần Quốc Toản", "Kim Đồng"], answer: 2 },
  { id: 195, content: "Ai là người thầy giáo được mệnh danh là 'Vạn thế sư biểu' của Việt Nam?", options: ["Nguyễn Bỉnh Khiêm", "Chu Văn An", "Lương Thế Vinh", "Lê Quý Đôn"], answer: 1 },
  { id: 196, content: "Nhà bác học nào nổi tiếng với câu nói 'Kiến thức là sức mạnh' và tác phẩm 'Vân đài loại ngữ'?", options: ["Phan Huy Chú", "Lê Quý Đôn", "Trương Vĩnh Ký", "Lương Thế Vinh"], answer: 1 },
  { id: 197, content: "Ai là vị Trạng nguyên được mệnh danh là 'Trạng Lường'?", options: ["Mạc Đĩnh Chi", "Nguyễn Hiền", "Lương Thế Vinh", "Phùng Khắc Khoan"], answer: 2 },
  { id: 198, content: "Ai là người khởi xướng phong trào Đông Du?", options: ["Phan Châu Trinh", "Phan Bội Châu", "Huỳnh Thúc Kháng", "Lương Văn Can"], answer: 1 },
  { id: 199, content: "Nữ tướng duy nhất trong lịch sử Việt Nam được công nhận ở thế kỷ 20 là ai?", options: ["Nguyễn Thị Định", "Nguyễn Thị Minh Khai", "Võ Thị Sáu", "Lê Thị Hồng Gấm"], answer: 0 },
  { id: 200, content: "Ai là tác giả của truyện Kiều?", options: ["Nguyễn Du", "Nguyễn Gia Thiều", "Đoàn Thị Điểm", "Tú Xương"], answer: 0 },
  { id: 201, content: "Vị vua nào cuối cùng của triều đại phong kiến Việt Nam?", options: ["Khải Định", "Thành Thái", "Bảo Đại", "Duy Tân"], answer: 2 },
  { id: 202, content: "Ai được mệnh danh là 'Thần Siêu' trong nhóm 'Thần Siêu, Thánh Quát'?", options: ["Nguyễn Văn Siêu", "Nguyễn Khuyến", "Cao Bá Quát", "Tú Xương"], answer: 0 },
  { id: 203, content: "Nữ anh hùng nào đã hy sinh tại Côn Đảo khi tuổi đời còn rất trẻ?", options: ["Nguyễn Thị Minh Khai", "Võ Thị Sáu", "Đặng Thùy Trâm", "Mẹ Suốt"], answer: 1 },
  { id: 204, content: "Nhạc sĩ nào là tác giả của bài Quốc ca Việt Nam (Tiến quân ca)?", options: ["Phạm Tuyên", "Văn Cao", "Trịnh Công Sơn", "Đỗ Nhuận"], answer: 1 },
  { id: 205, content: "Ai là người Việt Nam đầu tiên bay vào vũ trụ?", options: ["Phạm Tuân", "Nguyễn Tử Quảng", "Ngô Bảo Châu", "Lê Tự Quốc Thắng"], answer: 0 },
  { id: 206, content: "Giáo sư nào đã giành được huy chương Fields về toán học năm 2010?", options: ["Trần Đại Nghĩa", "Tôn Thất Tùng", "Ngô Bảo Châu", "Lương Định Của"], answer: 2 },
  { id: 207, content: "Ai được mệnh danh là 'Ông vua lốp' của Việt Nam?", options: ["Nguyễn Văn Chẩn", "Phạm Nhật Vượng", "Đặng Lê Nguyên Vũ", "Bầu Đức"], answer: 0 },
  { id: 208, content: "Họa sĩ nào là tác giả của bức tranh nổi tiếng 'Em Thúy'?", options: ["Bùi Xuân Phái", "Tô Ngọc Vân", "Trần Văn Cẩn", "Nguyễn Phan Chánh"], answer: 2 },
  { id: 209, content: "Ai là vị trạng nguyên trẻ tuổi nhất trong lịch sử Việt Nam (13 tuổi)?", options: ["Nguyễn Hiền", "Lương Thế Vinh", "Mạc Đĩnh Chi", "Lê Quý Đôn"], answer: 0 },
  { id: 210, content: "Lãnh đạo nào của Việt Nam nổi tiếng với chính sách Đổi mới năm 1986?", options: ["Lê Duẩn", "Nguyễn Văn Linh", "Đỗ Mười", "Lê Khả Phiêu"], answer: 1 },
  { id: 211, content: "Ai là 'cha đẻ' của ngành phẫu thuật gan Việt Nam?", options: ["Phạm Ngọc Thạch", "Tôn Thất Tùng", "Đặng Văn Ngữ", "Hồ Đắc Di"], answer: 1 },
  { id: 212, content: "Người anh hùng nào đã lấy thân mình lấp lỗ châu mai?", options: ["Cù Chính Lan", "Phan Đình Giót", "Tô Vĩnh Diện", "Bế Văn Đàn"], answer: 1 },
  { id: 213, content: "Ai là tác giả của bản 'Tuyên ngôn Độc lập' thứ hai - Nam quốc sơn hà?", options: ["Lý Thường Kiệt", "Trần Hưng Đạo", "Tô Hiến Thành", "Lý Công Uẩn"], answer: 0 },
  { id: 214, content: "Vị vua nào đã thực hiện cuộc dời đô từ Hoa Lư về Thăng Long?", options: ["Lý Thái Tông", "Lý Thái Tổ", "Lê Đại Hành", "Trần Thái Tông"], answer: 1 },
  { id: 215, content: "Ai là người đầu tiên giữ chức vụ Chủ tịch Quốc hội nước Việt Nam Dân chủ Cộng hòa?", options: ["Nguyễn Hữu Thọ", "Trường Chinh", "Nguyễn Phan Chánh", "Nguyễn Văn Tố"], answer: 3 },
  { id: 216, content: "Số tiếp theo của dãy 2, 4, 8, 16 là bao nhiêu?", options: ["24", "30", "32", "64"], answer: 2 },
  { id: 217, content: "Con gì sáng đi bằng 4 chân, trưa 2 chân, chiều 3 chân?", options: ["Con chó", "Con người", "Con khỉ", "Con mèo"], answer: 1 },
  { id: 218, content: "Nếu 1+4=5, 2+5=12, 3+6=21 thì 8+11=?", options: ["19", "40", "96", "117"], answer: 2 },
  { id: 219, content: "Tìm từ khác loại: Táo, Cam, Cà rốt, Chuối", options: ["Táo", "Cam", "Cà rốt", "Chuối"], answer: 2 },
  { id: 220, content: "Bố của Mary có 5 người con: Nana, Nene, Nini, Nono. Người thứ 5 tên là gì?", options: ["Nunu", "Mary", "Nyny", "Nene"], answer: 1 },
  { id: 221, content: "Một năm có bao nhiêu tháng có 28 ngày?", options: ["1 tháng", "6 tháng", "12 tháng", "0 tháng"], answer: 2 },
  { id: 222, content: "Sách đối với Đọc giống như Nhạc đối với...?", options: ["Hát", "Nghe", "Xem", "Viết"], answer: 1 },
  { id: 223, content: "Số nào lớn nhất? 0.5, 0.05, 0.55, 0.49", options: ["0.5", "0.05", "0.55", "0.49"], answer: 2 },
  { id: 224, content: "Nếu bạn vượt qua người thứ hai trong một cuộc đua, bạn đứng thứ mấy?", options: ["Thứ nhất", "Thứ nhì", "Thứ ba", "Bét"], answer: 1 },
  { id: 225, content: "Trong một gia đình có 7 người con trai, mỗi người con trai có 1 em gái. Hỏi gia đình có mấy con?", options: ["14", "8", "9", "15"], answer: 1 },
  { id: 226, content: "Từ nào không cùng nhóm: Bút chì, Bút bi, Cục tẩy, Bút mực", options: ["Bút chì", "Bút bi", "Cục tẩy", "Bút mực"], answer: 2 },
  { id: 227, content: "Kết quả của 10 + 10 * 0 + 10 là?", options: ["10", "20", "0", "30"], answer: 1 },
  { id: 228, content: "Tìm số thiếu: 1, 3, 6, 10, ...", options: ["13", "15", "18", "20"], answer: 1 },
  { id: 229, content: "Cái gì đen khi sạch và trắng khi bẩn?", options: ["Than", "Cái bảng", "Lốp xe", "Tóc"], answer: 1 },
  { id: 230, content: "Nếu tất cả cá đều bơi, và cá mập là cá, thì cá mập...?", options: ["Rất nguy hiểm", "Biết bơi", "Có vây", "Sống dưới biển"], answer: 1 },
  { id: 231, content: "Từ nào trái nghĩa với 'Thông minh'?", options: ["Chậm chạp", "Nhanh nhẹn", "Ngu dốt", "Lười biếng"], answer: 2 },
  { id: 232, content: "Kim giờ đồng hồ quay bao nhiêu độ trong 1 giờ?", options: ["360", "60", "30", "15"], answer: 2 },
  { id: 233, content: "Một gậy có 2 đầu, nửa gậy có mấy đầu?", options: ["1", "2", "0.5", "4"], answer: 1 },
  { id: 234, content: "Gấp một tờ giấy làm đôi 5 lần, ta được bao nhiêu lớp?", options: ["10", "25", "32", "64"], answer: 2 },
  { id: 235, content: "Số tiếp theo: 100, 95, 85, 70, ...", options: ["60", "55", "50", "45"], answer: 2 },
  { id: 236, content: "Nếu hôm qua là thứ Hai, thì 3 ngày sau ngày mai là thứ mấy?", options: ["Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"], answer: 2 },
  { id: 237, content: "Tìm số khác biệt: 11, 13, 15, 17", options: ["11", "13", "15", "17"], answer: 2 },
  { id: 238, content: "Con gì không có xương sống?", options: ["Cá voi", "Rắn", "Bạch tuộc", "Chim yến"], answer: 2 },
  { id: 239, content: "Một cân sắt và một cân bông, cái nào nặng hơn?", options: ["Sắt", "Bông", "Bằng nhau", "Không xác định"], answer: 2 },
  { id: 240, content: "Cái gì của bạn nhưng người khác dùng nhiều hơn bạn?", options: ["Tiền", "Tên", "Xe", "Điện thoại"], answer: 1 },
  { id: 241, content: "Có 3 quả táo, bạn lấy đi 2 quả. Bạn có mấy quả?", options: ["1", "2", "3", "0"], answer: 1 },
  { id: 242, content: "Bác sĩ đưa bạn 3 viên thuốc, dặn mỗi 30 phút uống 1 viên. Sau bao lâu bạn uống hết?", options: ["90 phút", "60 phút", "30 phút", "120 phút"], answer: 1 },
  { id: 243, content: "Một người đàn ông sống ở tầng 10, nhưng chỉ đi thang máy lên tầng 7 rồi đi bộ. Tại sao?", options: ["Thích tập thể dục", "Thang máy hỏng", "Ông ta bị lùn", "Tầng 7 có bạn"], answer: 2 },
  { id: 244, content: "Phép tính: 2 + 2 x 2 = ?", options: ["8", "6", "4", "2"], answer: 1 },
  { id: 245, content: "Chữ nào khác loại: A, E, I, B, O", options: ["A", "E", "B", "O"], answer: 2 },
  { id: 246, content: "Mẹ của Nam có 3 người con: Đỏ, Xanh và...?", options: ["Vàng", "Tím", "Nam", "Trắng"], answer: 2 },
  { id: 247, content: "Cái gì có miệng mà không nói, có giường mà không ngủ?", options: ["Con sông", "Cái hang", "Cái gối", "Cái nhà"], answer: 0 },
  { id: 248, content: "Số tiếp theo của dãy 1, 1, 2, 3, 5, 8, ...", options: ["10", "12", "13", "15"], answer: 2 },
  { id: 249, content: "Từ nào đúng chính tả?", options: ["Sát xảo", "Sắc sảo", "Xắc sảo", "Xắc xảo"], answer: 1 },
  { id: 250, content: "Nếu 3 con mèo bắt 3 con chuột trong 3 phút, thì 100 con mèo bắt 100 con chuột trong bao lâu?", options: ["100 phút", "1 phút", "3 phút", "33 phút"], answer: 2 },
  { id: 251, content: "Hình nào không cùng loại: Hình tròn, Hình vuông, Hình tam giác, Hình cầu", options: ["Hình tròn", "Hình vuông", "Hình tam giác", "Hình cầu"], answer: 3 },
  { id: 252, content: "Bàn tay có 5 ngón, 10 bàn tay có bao nhiêu ngón?", options: ["50", "100", "20", "10"], answer: 0 },
  { id: 253, content: "Quả gì 5 múi 4 khe?", options: ["Quả khế", "Quả mướp đắng", "Quả chanh", "Quả cam"], answer: 0 },
  { id: 254, content: "Nếu xoay ngược số 6, ta được số mấy?", options: ["9", "8", "0", "1"], answer: 0 },
  { id: 255, content: "Một rổ có 5 quả táo, chia cho 5 người sao cho mỗi người 1 quả nhưng trong rổ vẫn còn 1 quả?", options: ["Cắt quả táo", "Người cuối lấy cả rổ", "Táo giả", "Không thể"], answer: 1 },
  { id: 256, content: "Điền vào chỗ trống: Học đi đôi với...?", options: ["Hành", "Nghỉ", "Chơi", "Làm"], answer: 0 },
  { id: 257, content: "Vật nào cứng nhất trong các vật sau?", options: ["Sắt", "Thép", "Kim cương", "Đồng"], answer: 2 },
  { id: 258, content: "Số nào chia hết cho tất cả các số?", options: ["1", "0", "100", "Không có"], answer: 1 },
  { id: 259, content: "Tháng nào ngắn nhất trong năm?", options: ["Tháng 2", "Tháng 12", "Tháng 3", "Tháng 5"], answer: 0 },
  { id: 260, content: "Con đường nào dài nhất?", options: ["Đường bộ", "Đường đời", "Đường sắt", "Đường thủy"], answer: 1 },
  { id: 261, content: "Cái gì càng kéo càng ngắn?", options: ["Dây thun", "Sợi dây", "Điếu thuốc", "Cuộn chỉ"], answer: 2 },
  { id: 262, content: "Con gì đập thì sống, không đập thì chết?", options: ["Con tim", "Con cá", "Con muỗi", "Con gà"], answer: 0 },
  { id: 263, content: "Từ nào có 12 chữ 'M'?", options: ["Mười hai", "May mắn", "Mũm mĩm", "Mẹ"], answer: 0 },
  { id: 264, content: "Cái gì luôn đến mà không bao giờ tới?", options: ["Cái chết", "Ngày mai", "Mùa xuân", "Cơn mưa"], answer: 1 },
  { id: 265, content: "Nếu bạn có 1 que diêm và bước vào căn phòng có: đèn dầu, bếp củi, nến. Bạn đốt gì trước?", options: ["Đèn dầu", "Bếp củi", "Que diêm", "Cây nến"], answer: 2 },
  { id: 266, content: "Hành tinh nào được gọi là 'Hành tinh đỏ'?", options: ["Sao Kim", "Sao Thổ", "Sao Hỏa", "Sao Mộc"], answer: 2 },
  { id: 267, content: "Hành tinh nào lớn nhất trong Hệ Mặt Trời?", options: ["Sao Thổ", "Sao Hải Vương", "Sao Thiên Vương", "Sao Mộc"], answer: 3 },
  { id: 268, content: "Ngôi sao nào ở gần Trái Đất nhất?", options: ["Mặt Trời", "Sao Bắc Cực", "Sirius", "Proxima Centauri"], answer: 0 },
  { id: 269, content: "Ai là người đầu tiên đặt chân lên Mặt Trăng?", options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Michael Collins"], answer: 1 },
  { id: 270, content: "Hành tinh nào nóng nhất trong Hệ Mặt Trời?", options: ["Sao Thủy", "Sao Kim", "Sao Hỏa", "Mặt Trời"], answer: 1 },
  { id: 271, content: "Vành đai tiểu hành tinh nằm giữa hai hành tinh nào?", options: ["Trái Đất - Sao Hỏa", "Sao Hỏa - Sao Mộc", "Sao Mộc - Sao Thổ", "Sao Kim - Trái Đất"], answer: 1 },
  { id: 272, content: "Đơn vị đo khoảng cách trong vũ trụ (quãng đường ánh sáng đi trong 1 năm) là gì?", options: ["Đơn vị thiên văn", "Kilômét", "Năm ánh sáng", "Hải lý"], answer: 2 },
  { id: 273, content: "Dải Ngân hà của chúng ta có hình dạng gì?", options: ["Hình tròn", "Hình elip", "Hình vô định hình", "Hình xoắn ốc"], answer: 3 },
  { id: 274, content: "Hiện tượng một vùng không gian có lực hấp dẫn mạnh đến mức ánh sáng không thoát ra được là?", options: ["Siêu tân tinh", "Lỗ đen", "Tinh vân", "Hành tinh lùn"], answer: 1 },
  { id: 275, content: "Hành tinh nào có nhiều vệ tinh tự nhiên nhất (tính đến 2023)?", options: ["Sao Thổ", "Sao Mộc", "Sao Thiên Vương", "Sao Hải Vương"], answer: 0 },
  { id: 276, content: "Vệ tinh tự nhiên lớn nhất của Sao Mộc là?", options: ["Titan", "Europa", "Ganymede", "Io"], answer: 2 },
  { id: 277, content: "Khí nào chiếm thành phần chính của Mặt Trời?", options: ["Oxy", "Nitơ", "Cacbon", "Hydro"], answer: 3 },
  { id: 278, content: "Hành tinh nào quay quanh Mặt Trời nhanh nhất?", options: ["Sao Thủy", "Sao Kim", "Trái Đất", "Sao Hỏa"], answer: 0 },
  { id: 279, content: "Hành tinh nào có trục tự quay nằm ngang gần như song song với quỹ đạo?", options: ["Sao Thổ", "Sao Hải Vương", "Sao Thiên Vương", "Sao Mộc"], answer: 2 },
  { id: 280, content: "Kính thiên văn không gian nổi tiếng phóng năm 1990 là?", options: ["James Webb", "Hubble", "Kepler", "Spitzer"], answer: 1 },
  { id: 281, content: "Vệt sáng xuất hiện khi thiên thể nhỏ cháy rụi trong khí quyển gọi là?", options: ["Sao chổi", "Sao băng", "Thiên thạch", "Cực quang"], answer: 1 },
  { id: 282, content: "Núi lửa Olympus Mons cao nhất Hệ Mặt Trời nằm ở đâu?", options: ["Trái Đất", "Mặt Trăng", "Sao Kim", "Sao Hỏa"], answer: 3 },
  { id: 283, content: "Chu kỳ xuất hiện của Sao chổi Halley là bao nhiêu năm?", options: ["50 năm", "76 năm", "100 năm", "150 năm"], answer: 1 },
  { id: 284, content: "Vật thể nào bị giáng cấp xuống 'hành tinh lùn' vào năm 2006?", options: ["Sao Diêm Vương", "Sao Thiên Vương", "Ceres", "Eris"], answer: 0 },
  { id: 285, content: "Lực nào giữ các hành tinh quay quanh Mặt Trời?", options: ["Lực từ trường", "Lực ma sát", "Lực hấp dẫn", "Lực đẩy"], answer: 2 },
  { id: 286, content: "Hố đen ở trung tâm Dải Ngân hà có tên là gì?", options: ["M87*", "Sagittarius A*", "Cygnus X-1", "Andromeda"], answer: 1 },
  { id: 287, content: "Khí nào chiếm tỷ lệ cao nhất trong khí quyển Trái Đất?", options: ["Oxy", "Cacbonic", "Argon", "Nitơ"], answer: 3 },
  { id: 288, content: "Vệ tinh Titan thuộc về hành tinh nào?", options: ["Sao Thổ", "Sao Mộc", "Sao Thiên Vương", "Sao Hải Vương"], answer: 0 },
  { id: 289, content: "Sự kiện nổ tung của một ngôi sao cuối đời gọi là?", options: ["Big Bang", "Nhật thực", "Siêu tân tinh", "Mưa sao băng"], answer: 2 },
  { id: 290, content: "Tốc độ ánh sáng trong chân không xấp xỉ bao nhiêu?", options: ["30.000 km/s", "300.000 km/s", "1.000.000 km/s", "150.000 km/s"], answer: 1 },
  { id: 291, content: "Hành tinh nào có một ngày dài hơn một năm của nó?", options: ["Sao Thủy", "Sao Hỏa", "Sao Hải Vương", "Sao Kim"], answer: 3 },
  { id: 292, content: "Đám mây Oort là nguồn gốc của vật thể nào?", options: ["Hành tinh", "Sao chổi dài hạn", "Tiểu hành tinh", "Hố đen"], answer: 1 },
  { id: 293, content: "Hành tinh nào được tìm thấy bằng toán học trước khi quan sát thấy?", options: ["Sao Hải Vương", "Sao Thiên Vương", "Sao Diêm Vương", "Sao Thổ"], answer: 0 },
  { id: 294, content: "Hiện tượng Mặt Trăng đi vào vùng bóng tối của Trái Đất gọi là?", options: ["Nhật thực", "Thủy triều", "Nguyệt thực", "Siêu trăng"], answer: 2 },
  { id: 295, content: "Khoảng cách trung bình từ Trái Đất đến Mặt Trời là bao nhiêu?", options: ["100 triệu km", "150 triệu km", "200 triệu km", "384.000 km"], answer: 1 },
  { id: 296, content: "Con vật đầu tiên bay vào quỹ đạo Trái Đất (tàu Sputnik 2) là?", options: ["Chó Laika", "Khỉ Ham", "Mèo Felicette", "Chuột Albert"], answer: 0 },
  { id: 297, content: "Thuyết nào giải thích nguồn gốc vũ trụ từ một điểm cực nhỏ?", options: ["Thuyết tương đối", "Thuyết vạn vật", "Thuyết Big Bang", "Thuyết tiến hóa"], answer: 2 },
  { id: 298, content: "Hành tinh nào có mật độ thấp nhất (có thể nổi trên nước)?", options: ["Sao Mộc", "Sao Thiên Vương", "Sao Hải Vương", "Sao Thổ"], answer: 3 },
  { id: 299, content: "Vết đen trên Mặt Trời có nhiệt độ như thế nào so với xung quanh?", options: ["Nóng hơn", "Lạnh hơn", "Bằng nhau", "Đóng băng"], answer: 1 },
  { id: 300, content: "Hiện tượng ánh sáng ở vùng cực do gió Mặt Trời tạo ra là?", options: ["Cầu vồng", "Nhật quang", "Cực quang", "Sao băng"], answer: 2 },
  { id: 301, content: "Thiên hà xoắn ốc lớn gần Dải Ngân hà nhất là?", options: ["Andromeda", "Triangulum", "Sombrero", "Magellan"], answer: 0 },
  { id: 302, content: "Trong chân không vũ trụ, âm thanh truyền đi như thế nào?", options: ["Nhanh hơn", "Chậm hơn", "Không truyền được", "Chỉ truyền được tần số cao"], answer: 2 },
  { id: 303, content: "Hành tinh nào có màu xanh lam do khí mê-tan?", options: ["Sao Hỏa", "Sao Kim", "Sao Hải Vương", "Sao Mộc"], answer: 2 },
  { id: 304, content: "Trạm vũ trụ quốc tế (ISS) cách Trái Đất khoảng bao nhiêu?", options: ["100 km", "400 km", "1000 km", "36.000 km"], answer: 1 },
  { id: 305, content: "Vệ tinh tự nhiên duy nhất của Trái Đất là?", options: ["Mặt Trời", "Mặt Trăng", "Sao Kim", "Phobos"], answer: 1 },
  { id: 306, content: "Ngôi sao sáng nhất bầu trời đêm (không tính hành tinh) là?", options: ["Sirius", "Polaris", "Vega", "Betelgeuse"], answer: 0 },
  { id: 307, content: "Sứ mệnh nào đưa con người đầu tiên lên Mặt Trăng?", options: ["Apollo 1", "Apollo 8", "Apollo 11", "Apollo 13"], answer: 2 },
  { id: 308, content: "Vườn ươm sao (nơi sao sinh ra) được gọi là gì?", options: ["Hố đen", "Quasar", "Pulsar", "Tinh vân"], answer: 3 },
  { id: 309, content: "Mặt Trăng mất bao lâu để quay một vòng quanh Trái Đất?", options: ["24 giờ", "7 ngày", "27.3 ngày", "365 ngày"], answer: 2 },
  { id: 310, content: "Vật thể nào sau đây thực chất là một hành tinh (không phải sao)?", options: ["Sao Hôm", "Sao lùn trắng", "Sao lùn đỏ", "Sao Bắc Cực"], answer: 0 },
  { id: 311, content: "Năng lượng Mặt Trời tạo ra từ quá trình nào?", options: ["Đốt oxy", "Phân hạch", "Nhiệt hạch", "Hóa hợp"], answer: 2 },
  { id: 312, content: "Hành tinh nào nổi tiếng nhất với hệ thống vành đai rực rỡ?", options: ["Sao Mộc", "Sao Thổ", "Sao Thiên Vương", "Sao Hải Vương"], answer: 1 },
  { id: 313, content: "Ai là người đầu tiên bay vào không gian (1961)?", options: ["Neil Armstrong", "John Glenn", "Yuri Gagarin", "Phạm Tuân"], answer: 2 },
  { id: 314, content: "Mặt Trăng của hành tinh nào có hoạt động núi lửa mạnh nhất?", options: ["Trái Đất", "Sao Mộc (vệ tinh Io)", "Sao Thổ", "Sao Hải Vương"], answer: 1 },
  { id: 315, content: "Ranh giới giữa bầu khí quyển và vũ trụ (cao 100km) gọi là gì?", options: ["Đường Karman", "Tầng bình lưu", "Vành đai Van Allen", "Chân trời sự kiện"], answer: 0 }

];