import { GrNext } from 'react-icons/gr'
import { Col } from "antd"; 

const TimaModel = () => {
  return (
    <div className="max-w bg-white my-3">
    <div className="py-8">
      <p className="text-[32px] text-center font-thin">
        Mô hình hoạt động sàn Tima
      </p>
      <div className="max-w-[1200px] flex px-4 mx-auto">
        <Col span={5} className='flex justify-items-center content-center'>
          <div
            className="flex items-center gap-2 h-[120px] mb-2">
            <img
              src="https://tima.vn/Template1/images/steps/1.png"
              className="text-base h-full"
              alt=""
            />
          </div>
          <div
            className="my-6   flex items-start gap-2 ">
            <p className="text-[#f05d29] text-[16px] font-extrabold">1</p>
            <div className='w-[170px]'>
              <p className="text-[#f05d29] text-[16px] font-bold">
                {" "}
                Đăng ký vay
              </p>
              <p
                className="text-sm font-light">
                Hoàn tất điền thông tin trong 1 phút
              </p>
            </div>
          </div>
        </Col>
        <Col span={2} className='mt-10'>
          <GrNext
            className="text-7xl font-thin mt-18 ml-3 opacity-25"/>
        </Col>
        <Col span={4} className='flex justify-items-center content-center ml-5'>
          <div
            className="flex items-center justify-center gap-2 h-[120px] mb-2">
            <img
              src="https://tima.vn/Template1/images/steps/2.png"
              className="text-[16px] h-[110px]"
              alt=""
            />
          </div>
          <div
            className="mt-5 mb-2 flex items-start gap-2 w-[240px]">
            <p className="text-[#f05d29] text-[16px] font-extrabold">2</p>
            <div className='w-[170px]'>
              <p className="text-[#f05d29] text-[16px] font-bold">
                {" "}
                Kết nối
              </p>
              <p
                className="text-sm font-light">
                Ngay lập tức người cho vay sẽ nhận được đơn xin vay của bạn
              </p>
            </div>
          </div>
        </Col>
        <Col span={2} className='mt-10'>
          <GrNext
            className="text-7xl mt-18 ml-3 opacity-25"/>
        </Col>
        <Col span={4} className='flex justify-items-center content-center ml-5'>
          <div
            className="flex items-center justify-center gap-2 h-[110px] mb-2">
            <img
              src="https://tima.vn/Template1/images/steps/3.png"
              className="text-[16px] h-full"
              alt=""
            />
          </div>
          <div
            className="my-5 flex items-start gap-2 w-[240px]">
            <p className="text-[#f05d29] text-[16px] font-extrabold">3</p>
            <div className='w-[170px]'>
              <p className="text-[#f05d29] text-[16px] font-bold">
                {" "}
                Xét duyệt
              </p>
              <p
                className="text-sm font-light">
                Nhận kết quả nhanh chóng sau khi gửi hồ sơ{" "}
              </p>
            </div>
          </div>
        </Col>
        <Col span={2} className='mt-10'>
          <GrNext
            className="text-7xl mt-18 ml-3 opacity-25"/>
        </Col>

        <Col span={4} className='flex justify-items-center content-center ml-5'>
          <div
            className="flex justify-center items-center gap-2 h-[120px] mb-2">
            <img
              src="https://tima.vn/Template1/images/steps/4.png"
              className="text-[16px] h-[100px]"
              alt=""
            />
          </div>
          <div
            className="my-6   flex items-start gap-2 "
            style={{ width: 240 }}
          >
            <p className="text-[#f05d29] text-[16px] font-extrabold">4</p>
            <div style={{ width: 170 }}>
              <p className="text-[#f05d29] text-[16px] font-bold">
                {" "}
                Nhận tiền
              </p>
              <p
                className="text-sm font-light"
                style={{ whiteSpace: "normal", wordBreak: "break-word" }}
              >
                Tiền sẽ được chuyển vào tài khoản của bạn hoặc nhận tiền mặt
              </p>
            </div>
          </div>
        </Col>
      </div>
    </div>
  </div>
  )
}

export default TimaModel
