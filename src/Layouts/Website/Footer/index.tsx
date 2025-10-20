import { Col, Row } from "antd";
import NavFooter from "../../../Components/Website/Footer/NavFooter";
import NavLeft from "../../../Components/Website/Footer/NavLeft";
import NavCenter from "../../../Components/Website/Footer/NavCenter";
import NavRight from "../../../Components/Website/Footer/NavRight";
const Footer = () => {
  return (
    <div className="max-w-300 mx-auto mt-2 px-[15px]">
      {/*----------------------NAV FOOTER--------------------------*/}
      <NavFooter />
      <hr className="mt-0 mb-5 border-t-[1px] border-[#e4e4e4] w-290" />
      <Row gutter={20}>
        <Col span={15} className="mb-5">
          <label className="text-base font-semibold cursor-defaul">
            Thông tin liên hệ
          </label>
        </Col>
        <Col span={2} className="mb-5">
          <label className="text-base ml-4 font-semibold cursor-default ">
            Tải App
          </label>
        </Col>
        <Col span={23} style={{ display: "flex" }}>
          {/*---------------------- NAV DƯỚI BÊN TRÁI --------------------------*/}
          <NavLeft />
          {/*---------------------- NAV DƯỚI Ở GIỮA --------------------------*/}
          <NavCenter />
          {/*---------------------- NAV DƯỚI BÊN PHẢI --------------------------*/}
          <NavRight />
        </Col>
      </Row>
      <div className="mb-0 text-gray-500 text-[13px]  text-center pt-5">
        <p className="">© 2017 Bản quyền thuộc về Tima</p>
      </div>
    </div>
  );
};

export default Footer;
