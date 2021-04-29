import SetHead from "../components/head/index";
import Footer from "../components/footer/index";
import Product from "../components/Product/index";

const DUMMY_MEETUPS = [
  {
    product_id: '1',
    product_name: 'ปลอกแฮนด์มอเตอร์ไซค์',
    image_path:
      'https://f.ptcdn.info/851/042/000/o7ihhfqatDSz48gSLB6-o.jpg',
    price: '700 ฿',
  },
  {
    product_id: '2',
    product_name: 'ไฟหน้า ZONIC',
    image_path:
      'https://ce.lnwfile.com/_/ce/_raw/v0/7e/i6.jpg',
    price: '450 ฿',
  },
  {
    product_id: '3',
    product_name: 'ล้อแมกซ์',
    image_path:
      'https://ce.lnwfile.com/_/ce/_raw/qq/i2/dl.jpg',
    price: '2000 ฿',
  },
  {
    product_id: '4',
    product_name: 'ป้ายทะเบียน',
    image_path:
      'https://ce.lnwfile.com/_/ce/_raw/o5/yl/0m.jpg',
    price: '100 ฿',
  },
  {
    product_id: '5',
    product_name: 'โช๊ค',
    image_path:
      'https://ce.lnwfile.com/_/ce/_raw/54/qp/g2.jpg',
    price: '1000 ฿',
  },
  {
    product_id: '6',
    product_name: 'แฮนด์แต่ง',
    image_path:
      'https://ce.lnwfile.com/_/ce/_raw/cs/r3/03.jpg',
    price: '1500 ฿',
  },
  {
    product_id: '7',
    product_name: 'สวิทช์กุญแจ',
    image_path:
      'https://ce.lnwfile.com/_/ce/_raw/ad/sb/dt.jpg',
    price: '700 ฿',
  },
  {
    product_id: '8',
    product_name: 'โซ่-สเตอร์เลส',
    image_path:
      'https://ce.lnwfile.com/_/ce/_raw/9d/5f/xe.jpg',
    price: '200 ฿',
  },
  {
    product_id: '9',
    product_name: 'กันร้อนท่อ',
    image_path:
      'https://ce.lnwfile.com/_/ce/_raw/ao/9i/qr.jpg',
    price: '1200 ฿',
  },
  {
    product_id: '10',
    product_name: 'ไฟเลี้ยวแต่ง LED',
    image_path:
      'https://ce.lnwfile.com/_/ce/_raw/hl/0d/k3.jpg',
    price: '200 ฿',
  },
];

export default function Home(props) {
  const { data } = props;
  return (
    <>
      <SetHead />
      <Product data={data} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      data: DUMMY_MEETUPS,
    },
  };
}
