import Headers from './Header'
import { Outlet } from 'react-router-dom'
import AppFooter from './Footer'
import BoxContact from '../../Components/Website/Footer/BoxContact'

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
      <BoxContact />
    </div>
  )
}

export default WebsiteLayout
