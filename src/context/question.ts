export interface IQuestion {
  id: string | number,
  question: string;
  options: string[];
  answer: string;
}

const QUESTION: IQuestion[] = [
  {
    id: "01",
    question: "ข้อใดต่อไปนี้คือชื่อเมืองหลวงของประเทศไทย?",
    options: ["เชียงใหม่", "กรุงเทพมหานคร", "ภูเก็ต", "นครราชสีมา"],
    answer: "กรุงเทพมหานคร",
  },
  {
    id: "02",
    question: "ข้อใดต่อไปนี้คือชื่อผลไม้ที่มีรสเปรี้ยว?",
    options: ["มะม่วง", "มะนาว", "กล้วย", "มะละกอ"],
    answer: "มะนาว",
  },
  {
    id: "03",
    question: "สัตว์ชนิดใดต่อไปนี้เป็นสัตว์เลี้ยงลูกด้วยนม?",
    options: ["นก", "ปลาฉลาม", "ช้าง", "จระเข้"],
    answer: "ช้าง",
  },
  {
    id: "04",
    question: "ข้อใดต่อไปนี้เป็นวิชาในกลุ่มวิทยาศาสตร์?",
    options: ["ประวัติศาสตร์", "ชีววิทยา", "ภาษาไทย", "ศิลปะ"],
    answer: "ชีววิทยา",
  },
  {
    id: "05",
    question: "ข้อใดคืออาหารไทยที่มีรสชาติเผ็ด?",
    options: ["ผัดไทย", "ส้มตำ", "ข้าวมันไก่", "แกงจืด"],
    answer: "ส้มตำ",
  },
  {
    id: "06",
    question: "สัตว์ชนิดใดต่อไปนี้สามารถบินได้?",
    options: ["ช้าง", "สุนัข", "นก", "แมว"],
    answer: "นก",
  },
  {
    id: "07",
    question: "ข้อใดต่อไปนี้คือชื่อของประเทศที่มีขนาดใหญ่ที่สุดในโลก?",
    options: ["จีน", "รัสเซีย", "สหรัฐอเมริกา", "แคนาดา"],
    answer: "รัสเซีย",
  },
  {
    id: "08",
    question:
      "ข้อใดต่อไปนี้คือชื่อของดาวเคราะห์ที่อยู่ใกล้ดวงอาทิตย์มากที่สุด?",
    options: ["โลก", "ดาวพุธ", "ดาวอังคาร", "ดาวศุกร์"],
    answer: "ดาวพุธ",
  },
  {
    id: "09",
    question: "ข้อใดต่อไปนี้คือชื่อของแม่น้ำที่ยาวที่สุดในโลก?",
    options: ["แม่น้ำไนล์", "แม่น้ำอเมซอน", "แม่น้ำแยงซี", "แม่น้ำมิสซิสซิปปี"],
    answer: "แม่น้ำไนล์",
  },
  {
    id: "10",
    question: "ข้อใดต่อไปนี้คือชื่อของสัตว์ที่ใหญ่ที่สุดในโลก?",
    options: ["ช้างแอฟริกา", "วาฬสีน้ำเงิน", "แรดขาว", "จระเข้"],
    answer: "วาฬสีน้ำเงิน",
  },
  {
    id: "11",
    question: "ข้อใดต่อไปนี้คือชื่อของพืชที่มีความสูงที่สุดในโลก?",
    options: ["ต้นยาง", "ต้นโอ๊ก", "ต้นเรดวู้ด", "ต้นสน"],
    answer: "ต้นเรดวู้ด",
  },
  {
    id: "12",
    question: "ข้อใดต่อไปนี้คือชื่อของภูเขาที่สูงที่สุดในโลก?",
    options: [
      "ภูเขาเอเวอเรสต์",
      "ภูเขาคิลิมันจาโร",
      "ภูเขาฟูจิ",
      "ภูเขาแอนดีส",
    ],
    answer: "ภูเขาเอเวอเรสต์",
  },
  {
    id: "13",
    question: "ข้อใดต่อไปนี้คือชื่อของทะเลสาบที่ใหญ่ที่สุดในโลก?",
    options: [
      "ทะเลสาบสุพีเรีย",
      "ทะเลสาบวิกตอเรีย",
      "ทะเลสาบแคสเปียน",
      "ทะเลสาบไบคาล",
    ],
    answer: "ทะเลสาบแคสเปียน",
  },
  {
    id: "14",
    question: "ข้อใดต่อไปนี้คือชื่อของทะเลทรายที่ใหญ่ที่สุดในโลก?",
    options: [
      "ทะเลทรายซาฮารา",
      "ทะเลทรายโกบี",
      "ทะเลทรายคาลาฮารี",
      "ทะเลทรายอาตากามา",
    ],
    answer: "ทะเลทรายซาฮารา",
  },
  {
    id: "15",
    question: "ข้อใดต่อไปนี้คือชื่อของเมืองที่มีประชากรมากที่สุดในโลก?",
    options: ["นิวยอร์ก", "โตเกียว", "ลอนดอน", "มุมไบ"],
    answer: "โตเกียว",
  },
  {
    id: "16",
    question: "ข้อใดต่อไปนี้คือชื่อของอาหารที่มีต้นกำเนิดจากอิตาลี?",
    options: ["ซูชิ", "ทาโก้", "พิซซ่า", "ปูผัดผงกะหรี่"],
    answer: "พิซซ่า",
  },
  {
    id: "17",
    question: "ข้อใดต่อไปนี้คือชื่อของเครื่องดนตรีที่มีสาย?",
    options: ["กีต้าร์", "กลอง", "ฟลุ๊ต", "แซกโซโฟน"],
    answer: "กีต้าร์",
  },
  {
    id: "18",
    question: "ข้อใดต่อไปนี้คือชื่อของหนังสือที่มาจากวรรณกรรมอังกฤษ?",
    options: [
      "ฮัมเบิลบี",
      "สงครามและสันติภาพ",
      "มิดซัมเมอร์ไนท์ดรีม",
      "ราชาธิราช",
    ],
    answer: "มิดซัมเมอร์ไนท์ดรีม",
  },
  {
    id: "19",
    question: "ข้อใดต่อไปนี้คือชื่อของกลุ่มดาวที่เป็นเครื่องหมายของราศีสิงห์?",
    options: [
      "กลุ่มดาวลีโอ",
      "กลุ่มดาวสกอร์เปีย",
      "กลุ่มดาวแคปริคอร์น",
      "กลุ่มดาวแทรีอัส",
    ],
    answer: "กลุ่มดาวลีโอ",
  },
  {
    id: "20",
    question:
      "ข้อใดต่อไปนี้คือชื่อขององค์การที่เกี่ยวข้องกับการศึกษาพื้นที่อวกาศ?",
    options: ["WHO", "UNESCO", "NASA", "IMF"],
    answer: "NASA",
  },
];

export default QUESTION
