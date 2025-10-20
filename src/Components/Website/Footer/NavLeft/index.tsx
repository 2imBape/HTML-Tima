import { BsFacebook } from "react-icons/bs";
import { FaCaretDown, FaCaretRight, FaPinterest } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { Col } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavLeft = () => {
  const [openKey, setOpenKey] = useState(null);

  const toggle = (key: any) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };
  return (
    <Col span={8} className="!pl-[10px] !pr-[-10px]">
      {/*---------------------- CÁC CƠ SỞ TỈNH THÀNH --------------------------*/}

      {/*---------------------- HÀ NỘI --------------------------*/}
      <div className="w-[320px] px-[6px] mb-4">
        <div
          onClick={() => toggle("hanoi")}
          className="flex items-center justify-between cursor-pointer border-b border-black hover:text-[#f05d29]"
        >
          <div className="ml-[-6px] text-[13px] flex items-center">
            <LuDot />
            DANH SÁCH PGD HÀ NỘI
          </div>
          {openKey === "hanoi" ? (
            <FaCaretDown className="text-[#ed522e] mr-[-5px]" />
          ) : (
            <FaCaretRight className="text-[#ed522e] mr-[-5px]" />
          )}
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            openKey === "hanoi"
              ? "max-h-[500px] opacity-100 pt-3"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex w-[322px] pl-2">
            <div className="relative flex w-[166px] pl-[8px] px-[7px] ">
              <IoLocationSharp
                size={12}
                className="absolute left-[-10px] text-[#f05d29]"
              />
              <div className="pr-[12px]">
                <Link
                  to=""
                  className="!text-black text-[13px] hover:!text-[#eb3f17]"
                >
                  960 ĐƯỜNG LÁNG - P. LÁNG THƯỢNG - Q. ĐỐNG ĐA
                </Link>
                <br />
                <div className="text-[11px]">
                  Hotline:{" "}
                  <span className="hover:text-[#eb3f17] cursor-pointer">
                    1900 633 688
                  </span>
                </div>
              </div>
            </div>

            <div className="relative flex w-[166px] pl-[16px] px-[7px]">
              <IoLocationSharp
                size={12}
                className="absolute left-[-2px] text-[#f05d29]"
              />
              <div className="pr-[12px]">
                <Link
                  to=""
                  className="!text-black text-[13px] hover:!text-[#eb3f17]"
                >
                  958 TRƯƠNG ĐỊNH - P. ĐỊNH CÔNG - Q. HOÀNG MAI
                </Link>
                <br />
                <div className="text-[11px]">
                  Hotline:{" "}
                  <span className="hover:text-[#eb3f17] cursor-pointer">
                    1900 633 688
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*---------------------- HỒ CHÍ MINH --------------------------*/}
      <div className="w-[320px] px-[6px] mb-4">
        <div
          onClick={() => toggle("hcm")}
          className="flex items-center justify-between cursor-pointer border-b border-black hover:text-[#f05d29]"
        >
          <div className="ml-[-6px] text-[13px] flex items-center">
            <LuDot />
            DANH SÁCH PGD HỒ CHÍ MINH
          </div>
          {openKey == "hcm" ? (
            <FaCaretDown className="text-[#ed522e] mr-[-5px]" />
          ) : (
            <FaCaretRight className="text-[#ed522e] mr-[-5px]" />
          )}
        </div>
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            openKey == "hcm"
              ? "max-h-[500px] opacity-100 pt-3"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex w-[322px] pl-2">
            <div className="relative flex w-[166px] pl-[8px] px-[7px] ">
              <IoLocationSharp
                size={12}
                className="absolute left-[-10px] text-[#f05d29] "
              />
              <div className="pr-[12px]">
                <Link
                  to=""
                  className="!text-black text-[13px] hover:!text-[#eb3f17]"
                >
                  519A TÂN KỲ TÂN QUÝ - Q. TÂN PHÚ
                </Link>
                <br />
                <div className="text-[11px]">
                  Hotline:{" "}
                  <span className="hover:text-[#eb3f17] cursor-pointer">
                    1900 633 688
                  </span>
                </div>
              </div>
            </div>
            <div className="relative flex w-[166px] pl-[16px] px-[7px]">
              <IoLocationSharp
                size={12}
                className="absolute left-[-2px] text-[#f05d29] "
              />
              <div className="pr-[12px]">
                <Link
                  to=""
                  className="!text-black text-[13px] hover:!text-[#eb3f17]"
                >
                  273 PHAN HUY ÍCH - PHƯỜNG 14 - Q. GÒ VẤP
                </Link>
                <br />
                <div className="text-[11px]">
                  Hotline:{" "}
                  <span className="hover:text-[#eb3f17] cursor-pointer">
                    1900 633 688
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*---------------------- BẮC NINH --------------------------*/}
      <div className="w-[320px] px-[6px] mb-4">
        <div
          onClick={() => toggle("bacninh")}
          className="flex items-center justify-between cursor-pointer border-b border-black hover:text-[#f05d29]"
        >
          <div className="ml-[-6px] text-[13px] flex items-center">
            <LuDot />
            DANH SÁCH PGD BẮC NINH
          </div>
          {openKey === "bacninh" ? (
            <FaCaretDown className="text-[#ed522e] mr-[-5px]" />
          ) : (
            <FaCaretRight className="text-[#ed522e] mr-[-5px]" />
          )}
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            openKey === "bacninh"
              ? "max-h-[500px] opacity-100 pt-3"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex w-[322px] pl-2">
            <div className="relative flex w-[166px] pl-[8px] px-[7px] ">
              <IoLocationSharp
                size={12}
                className="absolute left-[-10px] text-[#f05d29]"
              />
              <div className="pr-[12px]">
                <Link
                  to=""
                  className="!text-black text-[13px] hover:!text-[#eb3f17]"
                >
                  SỐ 556 NGUYỄN TRÃI, PHƯỜNG VÕ CƯỜNG, TP BẮC NINH
                </Link>
                <br />
                <div className="text-[11px]">
                  Hotline:{" "}
                  <span className="hover:text-[#eb3f17] cursor-pointer">
                    1900 633 688
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*----------------------- HẢI DƯƠNG ----------------------- */}
      <div className="w-[320px] px-[6px] mb-4">
        <div
          onClick={() => toggle("haiduong")}
          className="flex items-center justify-between cursor-pointer border-b border-black hover:text-[#f05d29]"
        >
          <div className="ml-[-6px] text-[13px] flex items-center">
            <LuDot />
            DANH SÁCH PGD HẢI DƯƠNG
          </div>
          {openKey === "haiduong" ? (
            <FaCaretDown className="text-[#ed522e] mr-[-5px]" />
          ) : (
            <FaCaretRight className="text-[#ed522e] mr-[-5px]" />
          )}
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            openKey === "haiduong"
              ? "max-h-[500px] opacity-100 pt-3"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex w-[322px] pl-2">
            <div className="relative flex w-[150px] pl-[8px] px-[7px] ">
              <IoLocationSharp
                size={12}
                className="absolute left-[-10px] text-[#f05d29]"
              />
              <div className="pr-[12px]">
                <Link
                  to=""
                  className="!text-black text-[13px] hover:!text-[#eb3f17]"
                >
                  SỐ 5 HỒNG QUANG, P. NGUYỄN TRÃI. TP. HẢI DƯƠNG
                </Link>
                <br />
                <div className="text-[11px]">
                  Hotline:{" "}
                  <span className="hover:text-[#eb3f17] cursor-pointer">
                    1900 633 688
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------- VĨNH PHÚC ----------------------- */}
      <div className="w-[320px] px-[6px] mb-4">
        <div
          onClick={() => toggle("vinhphuc")}
          className="flex items-center justify-between cursor-pointer border-b border-black hover:text-[#f05d29]"
        >
          <div className="ml-[-6px] text-[13px] flex items-center">
            <LuDot />
            DANH SÁCH PGD VĨNH PHÚC
          </div>
          {openKey === "vinhphuc" ? (
            <FaCaretDown className="text-[#ed522e] mr-[-5px]" />
          ) : (
            <FaCaretRight className="text-[#ed522e] mr-[-5px]" />
          )}
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            openKey === "vinhphuc"
              ? "max-h-[500px] opacity-100 pt-3"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex w-[322px] pl-2">
            <div className="relative flex w-[166px] pl-[8px] px-[7px] ">
              <IoLocationSharp
                size={12}
                className="absolute left-[-10px] text-[#f05d29]"
              />
              <div className="pr-[12px]">
                <Link
                  to=""
                  className="!text-black text-[13px] hover:!text-[#eb3f17]"
                >
                  SỐ 6B, ĐƯỜNG PHẠM VĂN ĐỒNG, P. TÍCH SƠN, TP. VĨNH YÊN, VĨNH
                  PHÚC
                </Link>
                <br />
                <div className="text-[11px]">
                  Hotline:{" "}
                  <span className="hover:text-[#eb3f17] cursor-pointer">
                    1900 633 688
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*------------------------ BẮC GIANG ----------------------- */}
      <div className="w-[320px] px-[6px] mb-4">
        <div
          onClick={() => toggle("bacgiang")}
          className="flex items-center justify-between cursor-pointer border-b border-black hover:text-[#f05d29]"
        >
          <div className="ml-[-6px] text-[13px] flex items-center">
            <LuDot />
            DANH SÁCH PGD BẮC GIANG
          </div>
          {openKey === "bacgiang" ? (
            <FaCaretDown className="text-[#ed522e] mr-[-5px]" />
          ) : (
            <FaCaretRight className="text-[#ed522e] mr-[-5px]" />
          )}
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            openKey === "bacgiang"
              ? "max-h-[500px] opacity-100 pt-3"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex w-[322px] pl-2">
            <div className="relative flex w-[150px] pl-[8px] px-[7px] ">
              <IoLocationSharp
                size={12}
                className="absolute left-[-10px] text-[#f05d29]"
              />
              <div className="pr-[12px]">
                <Link
                  to=""
                  className="!text-black text-[13px] hover:!text-[#eb3f17]"
                >
                  SỐ 30, ĐƯỜNG HOÀNG VĂN THỤ, PHƯỜNG HOÀNG VĂN THỤ, TP. BẮC
                  GIANG
                </Link>
                <br />
                <div className="text-[11px]">
                  Hotline:{" "}
                  <span className="hover:text-[#eb3f17] cursor-pointer">
                    1900 633 688
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------- NGHỆ AN ----------------------- */}
      <div className="w-[320px] px-[6px] mb-4">
        <div
          onClick={() => toggle("nghean")}
          className="flex items-center justify-between cursor-pointer border-b border-black hover:text-[#f05d29]"
        >
          <div className="ml-[-6px] text-[13px] flex items-center">
            <LuDot />
            DANH SÁCH PGD NGHỆ AN
          </div>
          {openKey === "nghean" ? (
            <FaCaretDown className="text-[#ed522e] mr-[-5px]" />
          ) : (
            <FaCaretRight className="text-[#ed522e] mr-[-5px]" />
          )}
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            openKey === "nghean"
              ? "max-h-[500px] opacity-100 pt-3"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex w-[322px] pl-2">
            <div className="relative flex w-[150px] pl-[8px] px-[7px] ">
              <IoLocationSharp
                size={12}
                className="absolute left-[-10px] text-[#f05d29]"
              />
              <div className="pr-[12px]">
                <Link
                  to=""
                  className="!text-black text-[13px] hover:!text-[#eb3f17]"
                >
                  60A LÊ HỒNG PHONG, P. HƯNG BÌNH, TP. VINH, TỈNH NGHỆ AN
                </Link>
                <br />
                <div className="text-[11px]">
                  Hotline:{" "}
                  <span className="hover:text-[#eb3f17] cursor-pointer">
                    1900 633 688
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------- THANH HÓA ----------------------- */}
      <div className="w-[320px] px-[6px] mb-4">
        <div
          onClick={() => toggle("thanhhoa")}
          className="flex items-center justify-between cursor-pointer border-b border-black hover:text-[#f05d29]"
        >
          <div className="ml-[-6px] text-[13px] flex items-center">
            <LuDot />
            DANH SÁCH PGD THANH HÓA
          </div>
          {openKey === "thanhhoa" ? (
            <FaCaretDown className="text-[#ed522e] mr-[-5px]" />
          ) : (
            <FaCaretRight className="text-[#ed522e] mr-[-5px]" />
          )}
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            openKey === "thanhhoa"
              ? "max-h-[500px] opacity-100 pt-3"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex w-[322px] pl-2">
            <div className="relative flex w-[166px] pl-[8px] px-[7px] ">
              <IoLocationSharp
                size={12}
                className="absolute left-[-10px] text-[#f05d29]"
              />
              <div className="pr-[12px]">
                <Link
                  to=""
                  className="!text-black text-[13px] hover:!text-[#eb3f17]"
                >
                  753 BÀ TRIỆU, P. TRƯỜNG THI, TP. THANH HÓA, TỈNH THANH HÓA
                </Link>
                <br />
                <div className="text-[11px]">
                  Hotline:{" "}
                  <span className="hover:text-[#eb3f17] cursor-pointer">
                    1900 633 688
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------- ĐỒNG NAI ----------------------- */}
      <div className="w-[320px] px-[6px] mb-4">
        <div
          onClick={() => toggle("dongnai")}
          className="flex items-center justify-between cursor-pointer border-b border-black hover:text-[#f05d29]"
        >
          <div className="ml-[-6px] text-[13px] flex items-center">
            <LuDot />
            DANH SÁCH PGD ĐỒNG NAI
          </div>
          {openKey === "dongnai" ? (
            <FaCaretDown className="text-[#ed522e] mr-[-5px]" />
          ) : (
            <FaCaretRight className="text-[#ed522e] mr-[-5px]" />
          )}
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            openKey === "dongnai"
              ? "max-h-[500px] opacity-100 pt-3"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex w-[322px] pl-2">
            <div className="relative flex w-[150px] pl-[8px] px-[7px] ">
              <IoLocationSharp
                size={12}
                className="absolute left-[-10px] text-[#f05d29]"
              />
              <div className="pr-[12px]">
                <Link
                  to=""
                  className="!text-black text-[13px] hover:!text-[#eb3f17]"
                >
                  SỐ 1909 ĐƯỜNG NGUYỄN ÁI QUỐC, KHU PHỐ 3, P. TÂN TIẾN, TP.BIÊN
                  HÒA, TỈNH ĐỒNG NAI
                </Link>
                <br />
                <div className="text-[11px]">
                  Hotline:{" "}
                  <span className="hover:text-[#eb3f17] cursor-pointer">
                    1900 633 688
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------- BÌNH DƯƠNG ----------------------- */}
      <div className="w-[320px] px-[6px] mb-4">
        <div
          onClick={() => toggle("binhduong")}
          className="flex items-center justify-between cursor-pointer border-b border-black hover:text-[#f05d29]"
        >
          <div className="ml-[-6px] text-[13px] flex items-center">
            <LuDot />
            DANH SÁCH PGD BÌNH DƯƠNG
          </div>
          {openKey === "binhduong" ? (
            <FaCaretDown className="text-[#ed522e] mr-[-5px]" />
          ) : (
            <FaCaretRight className="text-[#ed522e] mr-[-5px]" />
          )}
        </div>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            openKey === "binhduong"
              ? "max-h-[500px] opacity-100 pt-3"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex w-[322px] pl-2">
            <div className="relative flex w-[155px] pl-[8px] px-[7px] ">
              <IoLocationSharp
                size={12}
                className="absolute left-[-10px] text-[#f05d29]"
              />
              <div className="pr-[12px]">
                <Link
                  to=""
                  className="!text-black text-[13px] hover:!text-[#eb3f17]"
                >
                  SỐ 108 ĐƯỜNG GS01, KHU PHỐ TÂY B, P.ĐÔNG HÒA, TP. DĨ AN, TỈNH
                  BÌNH DƯƠNG
                </Link>
                <br />
                <div className="text-[11px]">
                  Hotline:{" "}
                  <span className="hover:text-[#eb3f17] cursor-pointer">
                    1900 633 688
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*---------------------- CÁC WEB CHÍNH THỨC --------------------------*/}
      <div>
        <div className="mb-[15px] ">
          <label className="text-base ml-[-5px] font-semibold cursor-defaul">
            Theo dõi chúng tôi
          </label>
        </div>
        <div className="flex ">
          <Link to={""} className="px-[15px]">
            <BsFacebook className="w-[50px] h-[50px] text-[#295396]" />
          </Link>
          <Link to={""} className="px-[15px]">
            <img
              src="https://cdn.tima.vn/img-web/icons/icon-youtube.png"
              className="w-[50px] h-[50px]"
              alt=""
            />
          </Link>
          <Link to={""} className="px-[15px]">
            <FaPinterest className="w-[50px] h-[50px] text-[red]" />
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default NavLeft;
