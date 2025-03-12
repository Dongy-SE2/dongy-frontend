export interface LiveInfo {
  id: number;
  title: string;
  product: string;
  startDate: string;
  endDate: string;
  status: string;
  link: string;
  image: string;
}

const liveBiddingItems: LiveInfo[] = [
  {
    id: 1,
    title: "ประมูลรองเท้าสนุกสุดคุ้ม x2",
    product: "รองเท้า",
    startDate: "21 กุมภาพันธ์ 2568 12.00 น.",
    endDate: "21 กุมภาพันธ์ 2568 13.00 น.",
    status: "สาธารณะ",
    link: "https://youtu.be/SEzKyFVaIyU",
    image: "/image/shoes.jpg",
  },
  {
    id: 2,
    title: "ประมูลรองเท้าสนุกสุดคุ้ม x3",
    product: "รองเท้า",
    startDate: "21 กุมภาพันธ์ 2568 14.00 น.",
    endDate: "21 กุมภาพันธ์ 2568 15.00 น.",
    status: "สาธารณะ",
    link: "https://youtu.be/SEzKyFVaIyU",
    image: "/image/shoes.jpg",
  },
  {
    id: 3,
    title: "ประมูลรองเท้าสนุกสุดคุ้ม x4",
    product: "รองเท้า",
    startDate: "21 กุมภาพันธ์ 2568 16.00 น.",
    endDate: "21 กุมภาพันธ์ 2568 17.00 น.",
    status: "สาธารณะ",
    link: "https://youtu.be/SEzKyFVaIyU",
    image: "/image/shoes.jpg",
  },
];

const getLive = (userId: string) => {
  return liveBiddingItems;
};

export default getLive;
