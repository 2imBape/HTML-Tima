import { ImPhone } from "react-icons/im";
import { MdPhoneIphone } from "react-icons/md";
import { Link } from "react-router-dom";

const SupportHeader = () => {
  return (
    <div className="support flex mt-[9px] ml-36">
      <Link className="!text-black hover:!text-[#ec4a25]" to={"/dkvay"}>
        Mua đơn vay
      </Link>
      <div>
        <hr className=" border-l-[1px] mx-5 border-[#e4e4e4] !h-[15px]" />
      </div>
      <Link className="!text-black hover:!text-[#ec4a25]" to="">
        Tra cứu
      </Link>
      <div>
        <hr className=" border-l-[1px] mx-5 border-[#e4e4e4] !h-[15px]" />
      </div>
      <Link className="!text-black hover:!text-[#ec4a25]" to="">
        Hỗ trợ
      </Link>
      <div>
        <hr className=" border-l-[1px] mx-5 border-[#e4e4e4] !h-[15px]" />
      </div>
      <Link className="!text-black hover:!text-[#ec4a25]" to="">
        Tuyển dụng
      </Link>
      <div>
        <hr className=" border-l-[1px] ml-5 mr-4 border-[#e4e4e4] !h-[15px]" />
      </div>
      <Link to="">
        <MdPhoneIphone className="text-[#b0b0b0] text-xl" />
      </Link>
      <div>
        <hr className=" border-l-[1px] mx-4 border-[#e4e4e4] !h-[15px]" />
      </div>
      <Link to="" className="flex">
        <ImPhone className="text-[#b0b0b0] mr-1 mt-1" />
        <b className="hover:!text-[#d63712] text-[#ef5121] text-[16px]">
          {" "}
          1900.633.688
        </b>
      </Link>
    </div>
  );
};

export default SupportHeader;
