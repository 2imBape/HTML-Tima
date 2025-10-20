
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './styles/global.css'
import LoanInformation from './pages/LoanApplication'
import LoanReigister from './pages/LoanReigister'
import WebsiteLayout from './Layouts/Website'

function App() {
 
  return (
    <Routes>
      <Route path='' element={<WebsiteLayout />}>
        <>
          <Route index element={<Home />} />
        </>
      </Route>
      <Route path='dkvay' element={<LoanInformation />} />
      <Route path='ttin-dki' element={<LoanReigister />} />
    </Routes>
  )
}

export default App
