import React from "react";
import { Link } from "react-router-dom";

const NavHeader = () => {
  const [activeNav, setActiveNav] = React.useState<string>("");

  const toggle = (key: any) => {
    setActiveNav((prev) => (prev === key ? null : key));
  };

  return (
    <div className="mr-22 ml-10 mt-[34px]">
      <ul className="flex justify-evenly items-center border border-[#d7d7d7]  rounded-t-sm mb-0">
        <li>
          <Link
            to=""
            onClick={() => toggle("trangchu")}
            className={`${
              activeNav === "trangchu"
                ? "!text-[#ed522e]"
                : "!text-black hover:!text-[#ed522e]"
            }`}
          >
            TRANG CHỦ
          </Link>
        </li>
        <hr className="border-r-[1px] border-[#d7d7d7] !h-[38px]" />
        <li>
          <Link
            to=""
            onClick={() => toggle("can1khoanvay")}
            className={`${
              activeNav === "can1khoanvay"
                ? "!text-[#ed522e]"
                : "!text-black hover:!text-[#ed522e]"
            }`}
          >
            CẦN MỘT KHOẢN VAY
          </Link>
        </li>
        <hr className="border-r-[1px] border-[#d7d7d7] !h-[38px]" />
        <li>
          <Link
            to=""
            onClick={() => toggle("nhadautu")}
            className={`${
              activeNav === "nhadautu"
                ? "!text-[#ed522e]"
                : "!text-black hover:!text-[#ed522e]"
            }`}
          >
            NHÀ ĐẦU TƯ
          </Link>
        </li>
        <hr className="border-r-[1px] border-[#d7d7d7] !h-[38px]" />
        <li>
          <Link
            to=""
            onClick={() => toggle("vetima")}
            className={`${
              activeNav === "vetima"
                ? "!text-[#ed522e]"
                : "!text-black hover:!text-[#ed522e]"
            }`}
          >
            VỀ TIMA
          </Link>
        </li>
        <hr className="border-r-[1px] border-[#d7d7d7] !h-[38px]" />
        <li>
          <Link
            to=""
            onClick={() => toggle("tintuc")}
            className={`${
              activeNav === "tintuc"
                ? "!text-[#ed522e]"
                : "!text-black hover:!text-[#ed522e]"
            }`}
          >
            TIN TỨC
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavHeader;
