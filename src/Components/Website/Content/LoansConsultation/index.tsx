import React from "react";

const LoansConsulation = () => {
  const image = [
    {
      id: 1,
      url: "https://rs.tima.vn/staticFile/img-news/2025/10/20251050_tima-hop-tac-vucar-2.jpg?w=286&h=165",
      title: "TIMA X VUCAR: MỞ RỘNG CƠ HỘI SỞ HỮU Ô TÔ CHO NGƯỜI VIỆT",
      desc: "Tima - nền tảng cho vay ngang hàng hàng đầu Việt Nam đã chính thức bắt tay hợp tác chiến lược với Vucar - Nên tảng mua bán xe cũ",
    },
    {
      id: 2,
      url: "https://rs.tima.vn/staticFile/img-news/2025/7/2025753_d41069d8-ccaf-481d-bc74-75b68d316186.jpg?w=286&h=165",
      title: "RA MẮT TIMA ONE - VAY ONLINE 100% CHỈ VỚI 1 CHẠM",
      desc: "TIMA - nền tảng tài chính số hàng đầu Việt Nam tự hào ra mắt sản phẩm đột phá: TIMA ONE, giải pháp vay tiền online 100% lần đầu tiên",
    },
    {
      id: 3,
      url: "https://rs.tima.vn/staticFile/img-news/2025/2/2025231_ads102252-02-1.jpeg?w=286&h=165",
      title: "ĐẦU XUÂN PHÁT LỘC - TIMA ƯU ĐÃI GIẢM SỐC 40% TỔNG LÃI PHÍ",
      desc: "Nhân dịp năm mới, từ ngày 12/2, Tima chính thức triển khai chiến dịch promotion đặc biệt, mang đến ưu đãi tài chính linh hoạt với",
    },
    {
      id: 4,
      url: "https://rs.tima.vn/staticFile/img-news/2023/9/2023922_15863640641004189433110148120044732009969113n.jpg?w=286&h=165",
      title: "TIMA RA MẮT MÔ HÌNH SÀN KẾT NỐI TÀI CHÍNH HOÀN TOÀN MỚI",
      desc: "Tima vừa cập nhật phiên bản Sàn kết nối tài chính hoàn toàn mới với nhiều ưu đãi tốt nhất từ trước đến nay dành cho cộng tác viên, tạo",
    },
  ];
  return (
    <div className="max-w-[1200px] mx-auto my-8 px-[15px]">
      <div className="bg-white rounded-lg border border-[#cdcdcd] p-[30px] px-[15px]">
        <div className="text-[32px] text-center font-bold mb-7">
          <p>Tư vấn Vay Tima</p>
        </div>
        <div className="flex">
          {image.map((item) => (
            <div key={item.id}>
              <div
                className="border border-[#eaeaea] mx-[15px] h-[306px] w-[255px] shadow-sm"
                style={{ overflow: "hidden" }}
              >
                <div className="border-t-5 border-[#ed522e] mb-4">
                  <a href="#" className="hover:opacity-70 hover:duration-500">
                    <img src={item.url} alt="" />
                  </a>
                </div>
                <div className="px-4 text-[14px]">
                  <div className="hover:text-[#eb3f17] mb-2">
                    <a href="#">{item.title}</a>
                  </div>
                  <p className="text-[#6f6f6f] mt-0 leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoansConsulation;
