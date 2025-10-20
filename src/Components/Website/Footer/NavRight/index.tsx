import { Col } from "antd";

const NavRight = () => {
  return (
    <Col span={7} className="cursor-default">
      <div className="flex">
        <div className="px-4">
          <label className="text-[gray] !text-[13px]">Tima Care</label> <br />
          <img
            className="!w-[125px] mt-2"
            src="https://cdn.tima.vn/img-web/qr-code/Tima-care.png"
            alt="htro"
          />
        </div>
        <div className="px-4">
          <label className="text-[gray] !text-[13px]">Tima Leader</label>
          <img
            className="w-[125px] mt-2"
            src="https://cdn.tima.vn/img-web/qr-code/Tima-lender.png"
            alt="lanhdao"
          />
        </div>
      </div>
      <div className="px-4 pt-[30px]">
        <div className="mb-3">
          <label className="text-[gray] text-base">Bảo mật bởi VSEC</label>
        </div>
        <img src="https://cdn.tima.vn/img-web/icons/vsec.png" alt="vsec" />
      </div>
    </Col>
  );
};

export default NavRight;
