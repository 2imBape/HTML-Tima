import { Carousel } from "antd";
const image = [
  {
    id: 1,
    a: "",
    img: "https://tima.vn/Template1/banner/banner-3.jpg",
  },
  {
    id: 2,
    a: "https://onelink.to/sk8sym",
    img: "https://tima.vn/Template1/banner/banner-2.jpg",
  },
  {
    id: 3,
    a: "https://tima.vn/tin-tuc/tima-chinh-thuc-ky-hop-tac-voi-ngan-hang-cimb-viet-nam-3493.html",
    img: "https://cdn.tima.vn/img-web/banner/banner_CIMB.jpeg",
  },
  {
    id: 4,
    a: "https://tima.vn/vay-tien-online",
    img: "https://cdn.tima.vn/img-web/banner/banner-tet.png",
  },
  {
    id: 5,
    a: "https://tima.vn/vay-tien-online",
    img: "https://cdn.tima.vn/img-web/banner/banner-2.png",
  },
  {
    id: 6,
    a: "https://tima.vn/tin-tuc/canh-bao-lua-dao-trang-web-mao-danh-tima-danh-cap-thong-tin-khach-vay-2761.html",
    img: "https://cdn.tima.vn/img-web/banner/banner-6.jpeg",
  },
  {
    id: 7,
    a: "https://hoptac.tima.vn/",
    img: "https://cdn.tima.vn/img-web/banner/banner-4.png",
  },
];
const SliderWeb = () => {
  return (
    <div className="slider" style={{ width: "100%" }}>
      <Carousel
        autoplay
        effect="fade"
        speed={1100}
        draggable
        swipe
        dots={false}
      >
        {image.map((src) => (
          <div key={src.id}>
            <a href={src.a}>
              <img
                src={src.img}
                alt={`slide-${src.id}`}
                className="w-full h-[560px] object-cover block"
              />
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SliderWeb;
