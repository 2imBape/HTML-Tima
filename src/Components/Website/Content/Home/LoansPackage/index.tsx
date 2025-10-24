import { Button } from "antd";
import React, { useRef } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";

const LoansPackage = () => {
  const sliderRef = useRef<Slider | null>(null);

  const loans = [
    {
      id: 1,
      title: "Vay trả góp",
      img: "https://tima.vn/Template1/images/product/newicon/vay-tra-gop-theo-ngay.svg",
    },
    {
      id: 2,
      title: "Vay theo đăng ký ô tô",
      img: "https://tima.vn/Template1/images/product/newicon/cam-oto-dang-ky-xe-oto.svg",
    },
    {
      id: 3,
      title: "Vay tiền mặt",
      img: "https://cdn.tima.vn/img-web/icons/icon-vay-tien-mat.png",
    },
    {
      id: 4,
      title: "Vay tín chấp",
      img: "https://tima.vn/Template1/images/product/newicon/vay-tin-chap-theo-luong.svg",
    },
    {
      id: 5,
      title: "Vay theo đăng ký xe máy",
      img: "https://tima.vn/Template1/images/product/newicon/vay-theo-dang-ky-xe-may.svg",
    },
  ];

  const slidesToShow = 8;

  const minNeeded = slidesToShow + 1;
  const totalSlides = Math.max(minNeeded, loans.length);
  // build array length = totalSlides (lặp vòng qua loans)
  const loansToShow = Array.from({ length: totalSlides }).map((_, idx) => {
    const item = loans[idx % loans.length];
    return { ...item, _uniq: `${item.id}-${idx}` }; // đảm bảo key unique
  });

  const settings = {
    vertical: false,            // 👈 trượt dọc
    verticalSwiping: false,     // 👈 vuốt dọc được
    draggable: true,           // 👈 kéo chuột được
    swipeToSlide: true,        // 👈 kéo đến đâu dừng ở đó (không cố định)
    infinite: true,            // lặp vô hạn
    autoplaySpeed: 2500,       // tốc độ auto
    pauseOnHover: false,       // dừng khi hover
    speed: 600,                // tốc độ chuyển
    slidesToScroll: 1,         // chỉ cần 1, nhưng không cố định nhờ swipeToSlide
    cssEase: "ease-in-out",    // hiệu ứng mượt
    touchThreshold: 8,         // độ nhạy vuốt
    arrows: false, 
    dots: false,
    slidesToShow: slidesToShow,
    autoplay: false,
    swipe: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 6 } },
      { breakpoint: 900, settings: { slidesToShow: 4 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
    ],
  };
  return (
    <div className="bg-white pt-8 mb-5">
      <p className=" text-center mb-6 text-[32px] font-thin">
        Các gói Vay online Tima
      </p>
      <div className="items-center gap-8">
        <div className="relative flex items-center w-full max-w-[1400px] mx-auto">
          <Button
            onClick={() => sliderRef.current?.slickPrev()}
            style={{ border: "none", background: "transparent" }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
          >
            <GrPrevious className="opacity-10 text-6xl" />
          </Button>

          <Slider {...settings} ref={sliderRef} className="">
            {loansToShow.map((loan) => (
              <div key={loan._uniq} className="w-[150px] h-[210px]">
                <div className="flex place-content-center mt-8 ">
                  <div className="border border-[#b0b0b0] w-[88px] h-[88px] rounded-full">
                    <img
                      src={loan.img}
                      alt={loan.title}
                      className="w-[86px] h-[86px] cursor-pointer hover:opacity-70"
                    />
                  </div>
                </div>
                <div className="flex justify-center mt-3">
                  <p className="text-sm hover:text-[#ec4a25] opacity-60 cursor-pointer w-[110px] text-center">
                    {loan.title}
                  </p>
                </div>
              </div>
            ))}
          </Slider>

          <Button
            onClick={() => sliderRef.current?.slickNext()}
            style={{ border: "none", background: "transparent" }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
          >
            <GrNext className="opacity-10 text-6xl" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoansPackage;
