import { Link } from "react-router-dom";

const NavFooter = () => {
  return (
    <div className="nav-footer">
      <ul className="flex mb-0">
        <li>
          <Link
            className="hover:!text-[#ec4a25] text-[grey] text-[14px] mr-[30px]"
            to={""}
          >
            Trang chủ
          </Link>
        </li>
        <li>
          <Link
            className="hover:!text-[#ec4a25] text-[grey] text-[14px] mr-[30px]"
            to={""}
          >
            Cần vay
          </Link>
        </li>
        <li>
          <Link
            className="hover:!text-[#ec4a25] text-[grey] text-[14px] mr-[30px]"
            to={""}
          >
            Cho vay
          </Link>
        </li>
        <li>
          <Link
            className="hover:!text-[#ec4a25] text-[grey] text-[14px] mr-[30px]"
            to={""}
          >
            Về Tima
          </Link>
        </li>
        <li>
          <Link
            className="hover:!text-[#ec4a25] text-[grey] text-[14px] mr-[30px]"
            to={""}
          >
            Kiến thức vay
          </Link>
        </li>
        <li>
          <Link
            className="hover:!text-[#ec4a25] text-[grey] text-[14px] mr-[30px]"
            to={""}
          >
            Hỗ trợ
          </Link>
        </li>
        <li>
          <Link
            className="hover:!text-[#ec4a25] text-[grey] text-[14px] mr-[30px]"
            to={""}
          >
            Những câu hỏi thường gặp
          </Link>
        </li>
        <li>
          <Link
            className="hover:!text-[#ec4a25] text-[grey] text-[14px]"
            to={""}
          >
            Điều kiện và điều khoản
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavFooter;
