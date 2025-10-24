import { Select } from "antd";
import { Option } from "antd/es/mentions";
import { FaAngleDoubleRight } from "react-icons/fa";

const HeaderNeed1Loan = () => {
  return (
    <div className="bg-[url(https://tima.vn/NewProduct/images/header-backgroud.png)] bg-[#ececf1] relative bg-cover float-left bg-no-repeat w-full min-h-screen">
      {/*----------------- LOGO ---------------- */}
      <div className="pt-5 w-[50%] flex justify-center">
        <a href="/">
          <img
            src="https://tima.vn/Template1/images/logo1.png"
            alt="Tima vay trong ngày"
            width={100}
          />
        </a>
      </div>
      <div className="w-full float-left my-15">
        <div
          className="w-[45%] float-left bg-[url(https://tima.vn/NewProduct/images/ANH_3.jpeg)] h-[510px]"
          style={{ backgroundSize: "100% 100%" }}
        >
          <div className="text-end pt-5 pr-15">
            <div className="mb-[7px]">
              <label className="text-[40px] text-[#333333] text-right !font-semibold leading-[50.6px]">
                Vay tiền nhanh Online
                <br />
                <span className="text-[32px] !font-bold leading-[40.48px] text-right text-[#ef592e]">
                  Lãi Suất 1,08%/tháng
                </span>
              </label>
            </div>
            <div className="w-full float-left mt-5">
              <div
                className="flex items-center w-[310px] px-3 py-[15px] float-end gap-[10px] rounded-[8px]
                                        text-[20px] shadow-[0_4px_9px_0_#0000000d] bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0.2)_100%)]"
              >
                <FaAngleDoubleRight className="text-[#ef592e] text-[20px] !font-black" />
                <span className="text-[#333333] text-[20px]">Hạn mức</span>
                <span className="text-[#ef592e] text-[20px]">
                  3 Triệu - 2 Tỷ
                </span>
              </div>

              <div className="w-full float-left mt-[10px]">
                <div
                  className="flex items-center w-[310px] px-3 py-[15px] float-end gap-[10px] rounded-[8px]
                                            text-[20px] shadow-[0_4px_9px_0_#0000000d] bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0.2)_100%)]"
                >
                  <FaAngleDoubleRight className="text-[#ef592e] text-[20px] !font-black" />
                  <span className="text-[#333333] text-[20px]">Kỳ hạn</span>
                  <span className="text-[#ef592e] text-[20px]">
                    3 - 36 Tháng
                  </span>
                </div>
              </div>

              <div className="w-full float-left mt-[10px]">
                <div
                  className="flex items-center w-[310px] px-3 py-[15px] float-end gap-[10px] rounded-[8px]
                                            text-[20px] shadow-[0_4px_9px_0_#0000000d] bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0.2)_100%)]"
                >
                  <FaAngleDoubleRight className="text-[#ef592e] text-[20px] !font-black" />
                  <span className="text-[#333333] text-[20px]">Nhận tiền</span>
                  <span className="text-[#ef592e] text-[20px]">
                    Chỉ trong 2 giờ
                  </span>
                </div>
              </div>

              <div className="w-full float-left mt-[10px]">
                <div
                  className="flex items-center w-[310px] px-3 py-[15px] float-end gap-[10px] rounded-[8px]
                                            text-[20px] shadow-[0_4px_9px_0_#0000000d] bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0.2)_100%)]"
                >
                  <FaAngleDoubleRight className="text-[#ef592e] text-[20px] !font-black" />
                  <span className="text-[#333333] text-[20px]">CIC</span>
                  <span className="text-[#ef592e] text-[20px]">
                    KHÔNG KIỂM TRA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[10%] float-left">&nbsp;</div>
        <div className="w-[45%] float-left h-[510px]">
          <div className="mt-5 w-[60%] float-left">
            <div className="mb-2 text-left leading-[40.48px] text-[32px] !font-semibold">
              <label>
                Bạn đang <span className="text-[#ef592e]">cần một khoản</span>{" "}
                vay?
              </label>
            </div>
            <div className="text-base font-light leading-[24px] mb-2 text-left text-[#828282]">
              <label className="mb-2">
                500,000+ người vay thành công, Tima không thu bất kỳ khoản tiền
                nào trước khi giải ngân.
              </label>
            </div>
            <form>
              <div className="w-full float-left">
                <div className="w-full float-left mt-[10px]">
                  <input
                    type="text"
                    className="block w-full px-5 py-[10.4px] text-base leading-[1.25] !text-[#495057] bg-[#ffffff33] border-[0.5px] border-[#bdbdbd] rounded-[8px]"
                    name=""
                    id=""
                    placeholder="Nhập họ và tên *"
                  />
                </div>

                <div className="w-full float-left mt-5">
                  <input
                    type="number"
                    className="block w-full px-5 py-[10.4px] text-base leading-[1.25] !text-[#495057] bg-[#ffffff33] border-[0.5px] border-[#bdbdbd] rounded-[8px]"
                    name=""
                    id=""
                    placeholder="Nhập số điện thoại *"
                  />
                </div>

                <div className="w-full float-left mt-5">
                  <Select
                    placeholder="Khu vực sống hiện tại *"
                    className="block w-full px-5 !h-11 py-[10.4px] text-base leading-[1.25] !text-[#495057] !bg-[#ffffff33] border-[0.5px] border-[#bdbdbd] rounded-[8px]"
                    aria-required
                  >
                    <Option value="Hà Nội">Hà Nội</Option>
                    <Option value="Hồ Chí Minh">Hồ Chí Minh</Option>
                    <Option value="Đà Nẵng">Đà Nẵng</Option>
                    <Option value="Hải Phòng">Hải Phòng</Option>
                    <Option value="Cần Thơ">Cần Thơ</Option>
                  </Select>
                </div>

                <div className="w-full float-left mt-5">
                  <Select
                    placeholder="Chọn gói vay *"
                    className="block w-full px-5 !h-11 py-[10.4px] text-base leading-[1.25] !text-[#495057] !bg-[#ffffff33] border-[0.5px] border-[#bdbdbd] rounded-[8px]"
                    aria-required
                  >
                    <Option value="Hồ Chí Minh">Vay đến 30 triệu</Option>
                    <Option value="Hà Nội">
                      Vay đến 2 tỷ bằng đăng ký/cavet ô tô
                    </Option>
                  </Select>
                </div>
                <div className="w-full float-left mt-5 flex items-center">
                  <input
                    type="checkbox"
                    className="size-5 !bg-[#ef592e]"
                    name=""
                    id=""
                  />
                  <label className="ml-4 text-base font-light leading-[24px] text-left">
                    Tôi đồng ý với{" "}
                    <a href="" className="text-[#ef592e] underline">
                      điều khoản và điều kiện
                    </a>{" "}
                    của Tima
                  </label>
                </div>

                <div className="w-full float-left mt-[30px]">
                  <button
                    type="submit"
                    className="group w-full text-center py-2 px-4 border border-transparent rounded-[40px] text-[18px] font-medium cursor-pointer 
                                !text-white leading-[22.77px] transition duration-500 ease-in-out"
                    style={{
                      background:
                        "linear-gradient(147.63deg, #FF8E4F 0%, #EF592E 100%)",
                    }}
                  >
                    <span className="inline-block transition-transform duration-500 ease-in-out group-hover:scale-110">
                      Đăng ký ngay
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNeed1Loan;
