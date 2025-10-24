import { Col } from "antd";
import { HiMiniUserCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const InformationLoans = () => {
  const loanPackages = [
    {
      id: 1,
      name: "Anh tuyền",
      phone: "070****523",
      amount: "5,000,000 VNĐ",
      district: "Chương Mỹ",
      city: "Hà Nội",
      time: "12 tháng",
      date: "6:55  15/09/2025",
    },
    {
      id: 2,
      name: "Chị Hương",
      phone: "064****576",
      amount: "10,000,000 VNĐ",
      district: "Gia Lâm",
      city: "Hà Nội",
      time: "6 tháng",
      date: "8:30  14/09/2025",
    },
    {
      id: 3,
      name: "Anh Tuấn",
      phone: "098****123",
      amount: "20,000,000 VNĐ",
      district: "Hà Đông",
      city: "Hà Nội",
      time: "9 tháng",
      date: "9:15  13/09/2025",
    },
    {
      id: 4,
      name: "Chị Lan",
      phone: "091****456",
      amount: "15,000,000 VNĐ",
      district: "Phú Nhuận",
      city: "Hồ Chí Minh",
      time: "6 tháng",
      date: "10:00  12/09/2025",
    },
    {
      id: 5,
      name: "Anh Minh",
      phone: "093****789",
      amount: "25,000,000 VNĐ",
      district: "Quận 7",
      city: "Hồ Chí Minh",
      time: "12 tháng",
      date: "11:45  11/09/2025",
    },
    {
      id: 6,
      name: "Chị Hoa",
      phone: "085****321",
      amount: "30,000,000 VNĐ",
      district: "Cần Giờ",
      city: "Hồ Chí Minh",
      time: "18 tháng",
      date: "14:20  10/09/2025",
    },
    {
      id: 7,
      name: "Anh Long",
      phone: "077****654",
      amount: "50,000,000 VNĐ",
      district: "Thủ Đức",
      city: "Hồ Chí Minh",
      time: "12 tháng",
      date: "16:00  09/09/2025",
    },
    {
      id: 8,
      name: "Chị Mai",
      phone: "082****987",
      amount: "40,000,000 VNĐ",
      district: "Hải Châu",
      city: "Đà Nẵng",
      time: "9 tháng",
      date: "17:30  08/09/2025",
    },
    {
      id: 9,
      name: "Anh Hùng",
      phone: "090****159",
      amount: "60,000,000 VNĐ",
      district: "Ngũ Hành Sơn",
      city: "Đà Nẵng",
      time: "15 tháng",
      date: "19:00  07/09/2025",
    },
    {
      id: 10,
      name: "Chị Phương",
      phone: "088****753",
      amount: "70,000,000 VNĐ",
      district: "Thanh Khê",
      city: "Đà Nẵng",
      time: "18 tháng",
      date: "20:30  06/09/2025",
    },
    {
      id: 11,
      name: "Anh Sơn",
      phone: "086****852",
      amount: "80,000,000 VNĐ",
      district: "Ninh Kiều",
      city: "Cần Thơ",
      time: "12 tháng",
      date: "22:00  05/09/2025",
    },
    {
      id: 12,
      name: "Chị Hạnh",
      phone: "084****951",
      amount: "90,000,000 VNĐ",
      district: "Bình Thủy",
      city: "Cần Thơ",
      time: "24 tháng",
      date: "23:30  04/09/2025",
    },
    {
      id: 13,
      name: "Anh Dũng",
      phone: "079****357",
      amount: "100,000,000 VNĐ",
      district: "Ô Môn",
      city: "Cần Thơ",
      time: "36 tháng",
      date: "05:00  03/09/2025",
    },
    {
      id: 14,
      name: "Chị Trang",
      phone: "083****258",
      amount: "110,000,000 VNĐ",
      district: "Cái Răng",
      city: "Cần Thơ",
      time: "48 tháng",
      date: "06:30  02/09/2025",
    },
    {
      id: 15,
      name: "Anh Phát",
      phone: "081****654",
      amount: "120,000,000 VNĐ",
      district: "Hồng Bàng",
      city: "Hải Phòng",
      time: "12 tháng",
      date: "08:00  01/09/2025",
    },
  ];
  const settings2 = {
    vertical: true,            // 👈 trượt dọc
    verticalSwiping: true,     // 👈 vuốt dọc được
    draggable: true,           // 👈 kéo chuột được
    swipeToSlide: true,        // 👈 kéo đến đâu dừng ở đó (không cố định)
    infinite: true,            // lặp vô hạn
    autoplay: true,            // tự động chạy
    autoplaySpeed: 2500,       // tốc độ auto
    pauseOnHover: false,        // dừng khi hover
    speed: 600,                // tốc độ chuyển
    slidesToShow: 5,           // hiển thị 5 slide
    slidesToScroll: 1,         // chỉ cần 1, nhưng không cố định nhờ swipeToSlide
    cssEase: "ease-in-out",    // hiệu ứng mượt
    touchThreshold: 8,         // độ nhạy vuốt
    arrows: false, 
  };

  return (
    <div className="tm-list-dxv mb-5">
      <div className="max-w-[1200px] m-auto">
        <div className="rounded bg-white p-3 pt-4">
          <div className="row">
            <div className="col-main col-xl-12 border-right mb-6 mb-xl-0">
              <div className="tm-card">
                <div className="flex justify-between items-center my-4 mx-2">
                  <h2 className="text-lg uppercase !font-bold">
                    Danh sách đơn xin vay mới nhất
                  </h2>
                  <Link
                    to="/dkvay"
                    className="px-5 text-base text-white rounded-[10px] py-2 px-4 border
                     border-[#5cb85c] bg-[#5cb85c] hover:bg-[#449d44] hover:duration-500 hover:border-[#449d44]"
                  >
                    Mua đơn vay
                  </Link>
                </div>
                <hr className="my-0 border-t-[1px] border-[#e4e4e4]" />

                <div
                  className="relative ml-2 max-h-[544px] tm-table"
                  style={{ overflow: "hidden" }}
                >
                  <Slider
                      {...settings2}
                      className="px-2 [&>.slick-list]:!h-[600px] [&_.slick-slide]:!h-[110px] [&_.slick-track]:!flex [&_.slick-track]:!flex-col"
                    >
                      {loanPackages.map((loan, idx) => (
                        <div key={`loan-${loan.id}-${idx}`}>
                          <div className="flex">
                            <Col span={6}>
                              <div className="flex my-3 gap-3">
                                <HiMiniUserCircle className="text-5xl text-[#cdcdcd]" />
                                <div className="self-center">
                                  <div className="text-[17px] pb-1 font-semibold text-[#f05d29]">
                                    {loan.name}
                                  </div>
                                  <div className="text-[17px] opacity-40">
                                    {loan.phone}
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col span={4}>
                              <div className="flex justify-between">
                                <hr className="my-4 border-l-[1px] border-[#e4e4e4] !h-[70px]" />
                                <div className="items-center text-center my-3 leading-7">
                                  <div className="text-[17px]">
                                    {loan.district}
                                  </div>
                                  <hr className="mx-2 border-t-[1px] border-[#e4e4e4] w-[180px]" />
                                  <div className="text-[17px]">{loan.city}</div>
                                </div>
                                <hr className="my-4 border-r-[1px] border-[#e4e4e4] !h-[70px]" />
                              </div>
                            </Col>
                            <Col span={7}>
                              <div className="flex justify-between">
                                <div className=" text-center my-3 leading-7">
                                  <div className="text-[17px] text-[#f05d29]">
                                    {loan.amount}
                                  </div>
                                  <hr className="mx-3 border-t-[1px] border-[#e4e4e4] w-[350px]" />
                                  <div className="text-[17px]">
                                    Vay theo xe máy
                                  </div>
                                </div>
                                <hr className="my-4 border-r-[1px] border-[#e4e4e4] !h-[70px]" />
                              </div>
                            </Col>
                            <Col span={3}>
                              <div className="flex justify-between">
                                <div className="flex">
                                  <div className="text-[17px] opacity-30 ml-14 my-4 font-semibold">
                                    {loan.time}
                                  </div>
                                </div>
                                <hr className="my-4 border-r-[1px] border-[#e4e4e4] !h-[70px]" />
                              </div>
                            </Col>
                            <Col span={4}>
                              <div className="flex justify-center my-4">
                                <div className="text-[17px] font-semibold">
                                  {loan.date}
                                </div>
                              </div>
                            </Col>
                          </div>
                          <hr className="my-0 border-t-[1px] border-[#e4e4e4]" />
                        </div>
                      ))}
                    </Slider>
                </div>
                <hr className="my-0 border-t-[1px] border-[#e4e4e4]" />

                <div className="flex justify-between items-center my-4 mx-2">
                  <div>Chúng tôi có hàng nghìn đơn xin vay mỗi ngày</div>
                  <Link
                    to={"/ttin-dki"}
                    className="px-5 text-white rounded-[10px] py-3 px-6 text-base border border-transparent
                  bg-[#5cb85c] hover:bg-[#449d44] hover:duration-500 hover:border-[#449d44]"
                  >
                    Đăng ký vay ngay
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationLoans;
