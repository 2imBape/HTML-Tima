import React from 'react'
import Slider from 'react-slick';

const FundAndPartner = () => {
    const media = [
        {
          id: 1,
          img: "https://tima.vn/Template1/images/partner/Gcapital.jpg",
        },
        {
          id: 2,
          img: "https://tima.vn/Template1/images/logo-momo.png",
        },
        {
          id: 3,
          img: "https://tima.vn/Template1/images/partner/Donearn.jpg",
        },
        {
          id: 4,
          img: "https://tima.vn/Template1/images/partner/beltroadcap.svg",
        },
        {
          id: 5,
          img: "https://tima.vn/Template1/images/partner/viettinbank.jpg",
        },
        {
          id: 6,
          img: "https://tima.vn/Template1/images/partner/namabank.png",
        },
        {
          id: 7,
          img: "https://tima.vn/Template1/images/partner/baominhlogo.png",
        },
      ];
    
      const settings3 = {
        vertical: false,           
        verticalSwiping: false,    
        draggable: true,          
        swipeToSlide: true,       
        autoplay: true,            
        autoplaySpeed: 2500,                  
        speed: 600,               
        slidesToScroll: 1,         
        cssEase: "ease-in-out",   
        touchThreshold: 8,         
        arrows: false, 
        dots: false,
        infinite: true,
        swipe: true,
        slidesToShow: 5,
        touchThreadShowld: 10,
        responsive: [
          { breakpoint: 1200, settings: { slidesToShow: 6 } },
          { breakpoint: 900, settings: { slidesToShow: 4 } },
          { breakpoint: 600, settings: { slidesToShow: 2 } },
        ],
      };
  return (
    <div className="full-w bg-white mt-7 mb-5">
        <div className="container mx-auto px-4">
          <div className="text-center pt-8">
            <p className="text-[32px] font-thin">Quỹ đầu tư và đối tác</p>
          </div>
          <div className="w-full mt-6 max-w-[1300px] mx-auto">
            <Slider {...settings3} className="px-10">
              {media.map((item) => (
                <div key={item.id}>
                  <div className="flex !items-center !w-[170px] mr-[80px] !h-[170px]">
                    <a
                      href="#"
                      style={{
                        width: item.id === 7 ? "100px" : "170px",
                      }}
                    >
                      <img src={item.img} alt="" className="" />
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
  )
}

export default FundAndPartner
