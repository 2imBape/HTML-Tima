import Headers from './Header'
import { Outlet } from 'react-router-dom'
import AppFooter from './Footer'

const WebsiteLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Headers />
        <Outlet />
      <AppFooter />
      <div>
          <a href="#" style={{position: 'fixed', right: 15, bottom: 260, display: 'block', zIndex: 1000}}>
            <img src="https://cdn.tima.vn/img-web/icons/popup_cam_giay_to_o_to.png" alt="" width= '90'/>
          </a>
          <a href="" style={{position: 'fixed', right: 35, bottom: 210, display: 'block', zIndex: 1000}}>
            <img src="https://cdn.tima.vn/img-web/icons/icon_web_phone.png" alt="" width= '45'/>
          </a>
          <a href="" style={{position: 'fixed', right: 38, bottom: 165, display: 'block', zIndex: 1000}}>
            <img src="https://cdn.tima.vn/img-web/icons/icon_web_facebook.png" alt="" width= '37'/>
          </a>
          <a href="" style={{position: 'fixed', right: 30, bottom: 110, display: 'block', zIndex: 1000}}>
            <img src="https://cdn.tima.vn/img-web/icons/icon_web_zalo.png" alt="" width= '45'/>
          </a>
      </div>
    </div>
  )
}

export default WebsiteLayout
