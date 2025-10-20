import { Col } from "antd";
import { useState } from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { Link } from "react-router-dom";

const NavCenter = () => {
  const [openKey, setOpenKey] = useState(null);

  const toggle = (key: any) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };
  return (
    <Col span={8} className="!px-[10px]">
      {/*---------------------- HỘI SỞ --------------------------*/}
      <div className="w-[320px] px-[6px] mb-4">
        <div
          onClick={() => toggle("hoiso")}
          className="flex items-center justify-between cursor-pointer border-b border-black hover:text-[#f05d29]"
        >
          <div className="ml-[-6px] text-[13px] flex items-center">
            <LuDot />
            HỘI SỞ
          </div>
          {openKey === "hoiso" ? (
            <FaCaretDown className="text-[#ed522e] mr-[-5px]" />
          ) : (
            <FaCaretRight className="text-[#ed522e] mr-[-5px]" />
          )}
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            openKey === "hoiso"
              ? "max-h-[500px] opacity-100 pt-3"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex w-[322px] pl-2">
            <div className="relative flex pl-[10px] px-[7px] ">
              <IoLocationSharp
                size={12}
                className="absolute left-[-8px] text-[#f05d29]"
              />
              <div className="pr-[12px]">
                <Link
                  to=""
                  className="!text-black text-[13px] hover:!text-[#eb3f17]"
                >
                  SỐ 5, NGUYỄN THỊ DUỆ, YÊN HÒA, CẦU GIẤY, HÀ NỘI
                </Link>
                <br />
                <br />
                <div className="text-[11px]">
                  Giấy CN ĐKDN số 0107333139 được cấp bởi Sở kế hoạch và Đầu tư
                  TP. Hà Nội
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*---------------------- VĂN PHÒNG ĐẠI DIỆN MIỀN NAM ------------------------*/}
      <div className="w-[320px] px-[6px] mb-4">
        <div
          onClick={() => toggle("vanphongmiennam")}
          className="flex items-center justify-between cursor-pointer border-b border-black hover:text-[#f05d29]"
        >
          <div className="ml-[-6px] text-[13px] flex items-center">
            <LuDot />
            VP ĐẠI DIỆN MIỀN NAM
          </div>
          {openKey === "vanphongmiennam" ? (
            <FaCaretDown className="text-[#ed522e] mr-[-5px]" />
          ) : (
            <FaCaretRight className="text-[#ed522e] mr-[-5px]" />
          )}
        </div>
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            openKey === "vanphongmiennam"
              ? "max-h-[500px] opacity-100 pt-3"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex w-[322px] pl-2">
            <div className="relative flex pl-[8px] px-[7px] ">
              <IoLocationSharp
                size={12}
                className="absolute left-[-10px] text-[#f05d29]"
              />
              <div className="pr-[12px]">
                <Link
                  to=""
                  className="!text-black text-[13px] hover:!text-[#eb3f17]"
                >
                  519 TÂN KỲ TÂN QUÝ, PHƯỜNG TÂN QUÝ, QUẬN TÂN PHÚ, TP. HỒ CHÍ
                  MINH
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*---------------------- HỖ TRỢ KHÁCH HÀNG --------------------------*/}
      <div className="w-[320px] px-[6px] mb-4">
        <div
          onClick={() => toggle("support")}
          className="flex items-center justify-between cursor-pointer border-b border-black hover:text-[#f05d29]"
        >
          <div className="ml-[-6px] text-[13px] flex items-center">
            <LuDot />
            HỖ TRỢ KHÁCH HÀNG
          </div>
          {openKey === "support" ? (
            <FaCaretDown className="text-[#ed522e] mr-[-5px]" />
          ) : (
            <FaCaretRight className="text-[#ed522e] mr-[-5px]" />
          )}
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            openKey === "support"
              ? "max-h-[500px] opacity-100 pt-3"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="relative px-[15px] flex flex-col">
            <Link to="" className="!text-black mb-2 hover:!text-[#eb3f17]">
              Hotline: 1900 633 688
            </Link>
            <Link to="" className="!text-black mb-2 hover:!text-[#eb3f17]">
              FAQ: Câu hỏi thường gặp
            </Link>
            <Link to="" className="!text-black mb-2 hover:!text-[#eb3f17]">
              Support: support@tima.vn
            </Link>
            <Link to="" className="!text-black mb-2 hover:!text-[#eb3f17]">
              Facebook: tima.vn
            </Link>
          </div>
        </div>
      </div>

      {/*---------------------- GIẢI THƯỞNG --------------------------*/}
      <div className=" px-5 pt-5 w-[320px]">
        <div className="mb-2 text-base">
          <label className="text-[gray]">Giải thưởng</label>
        </div>
        <div className="flex items-center pt-3 w-[320px]">
          <div className="px-[-15px] w-40">
            <img
              src="https://cdn.tima.vn/img-web/icons/vinasa.png"
              alt="vinasa"
            />
          </div>
          <div>
            <img
              src="https://cdn.tima.vn/img-web/icons/saokhue.png"
              alt="cup"
            />
          </div>
        </div>
      </div>
    </Col>
  );
};

export default NavCenter;
