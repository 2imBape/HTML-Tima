import { Col } from "antd";
import { Link } from "react-router-dom";
import SupportHeader from "../../../Components/Website/Header/SupportHeader";
import NavHeader from "../../../Components/Website/Header/NavHeader";

const Header = () => {
  return (
    <div className="flex max-h-[103px]">
      <Col span={2}></Col>
      {/*---------------------- LOGO HEADER --------------------------*/}
      <Col span={8}>
        <Link to="/">
          <img
            src="https://tima.vn/Template1/images/logo1.png"
            alt="logo"
            className="m-4 ml-7"
          />
        </Link>
      </Col>
      <Col span={13}>
        {/*---------------------- SUPPORT HEADER --------------------------*/}
        <SupportHeader />
        {/*---------------------- NAV HEADER --------------------------*/}
        <NavHeader />
      </Col>
    </div>
  );
};

export default Header;
