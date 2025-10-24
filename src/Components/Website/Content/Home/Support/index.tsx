import { GiRotaryPhone } from 'react-icons/gi'
import { MdOutlineSupervisorAccount } from 'react-icons/md'
import { RiQuestionnaireLine } from 'react-icons/ri'

const Support = () => {
  return (
    <div className="max-w bg-[#ececf1] m-auto ml-[130px] mr-[130px] pl-[15px] pr-[15px]">
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img
                src="https://tima.vn/Template1/images/callcenter-g.png"
                alt="Tổng đài tư vấn miễn phí"
              />
              <span className="opacity-40">Tổng đài tư vấn</span>
            </div>
            <div>
              <a
                href="tel:1900633688"
                className="flex gap-4 items-center text-[34px] font-bold hover:text-[#f05d29]"
              >
                <GiRotaryPhone className="text-[#f05d29]" /> 1900 633 688
              </a>
            </div>
            <div className="flex flex-row">
              <a
                href=""
                className="flex gap-4 items-center hover:text-[#f05d29]"
              >
                <RiQuestionnaireLine className="text-[34px] text-[#f05d29]" />{" "}
                Câu hỏi thường gặp
              </a>
            </div>
            <div>
              <div>
                <a
                  href=""
                  className="flex gap-4 items-center hover:text-[#f05d29]"
                >
                  <MdOutlineSupervisorAccount className="text-[40px] text-[#f05d00]" />{" "}
                  Đăng ký
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Support
