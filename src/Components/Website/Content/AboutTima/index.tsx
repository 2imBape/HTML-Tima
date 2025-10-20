import Slider from 'react-slick';

const AboutTima = () => {
    const media = [
        {
          id: 1,
          img: "https://tima.vn/Template1/images/brands/dantri.png",
        },
        {
          id: 2,
          img: "https://tima.vn/Template1/images/e27.png",
        },
        {
          id: 3,
          img: "https://tima.vn/Template1/images/brands/dealstreetasia.png",
        },
        {
          id: 4,
          img: "https://tima.vn/Template1/images/brands/techinasia.png",
        },
        {
          id: 5,
          img: "https://tima.vn/Template1/images/brands/vneconomictimes.png",
        },
        {
          id: 6,
          img: "https://tima.vn/Template1/images/brands/vietnamnet.png",
        },
        {
          id: 7,
          img: "https://tima.vn/Template1/images/brands/thanhnien.png",
        },
        {
          id: 8,
          img: "https://tima.vn/Template1/images/brands/cafebiz.png",
        },
        {
          id: 9,
          img: "https://tima.vn/Template1/images/brands/dautuonline.png",
        },
        {
          id: 10,
          img: "https://tima.vn/Template1/images/brands/ncdt.png",
        },
        {
          id: 11,
          img: "https://tima.vn/Template1/images/brands/24h.png",
        },
        {
          id: 12,
          img: "https://tima.vn/Template1/images/brands/ict-news.png",
        },
        {
          id: 13,
          img: "https://tima.vn/Template1/images/brands/vtc-news.png",
        },
        {
          id: 14,
          img: "https://tima.vn/Template1/images/brands/vne.jpg",
        },
        {
          id: 15,
          img: "https://tima.vn/Template1/images/brands/cafe.jpg",
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
    <div className="full-w bg-white mt-0 mb-5">
        <div className="container mx-auto px-4">
          <div className="text-center pt-8">
            <p className="text-[32px] font-thin">Báo chí nói về Tima</p>
          </div>
          <div className=" w-full pt-10 max-w-[1300px] mx-auto"> 
            <Slider {...settings3} className="px-10">
              {media.map((item) => (
                <div key={item.id}>
                  <div className="flex !items-center !w-[152px] mr-[52px] 
                  !h-[152px]">
                      <a href="" className="opacity-50 grayscale transition-all
                       duration-1000 ease-in-out hover:opacity-100 hover:grayscale-0">
                        <img
                          src={item.img}
                          alt=""
                          className='w-[151px] h-[151px] object-contain'
                          />
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

export default AboutTima
