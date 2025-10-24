
import { Route, Routes } from 'react-router-dom'
import WebsiteLayout from './Layouts/Website'
import Home from './Pages/Website/Home/Home'
import Need1Loan from './Pages/Website/Need1Loan'
import LoanInformation from './Pages/Website/LoanApplication/LoanApplication'
import LoanReigister from './Pages/Website/LoanRegister/LoanReigister'


function App() {
 
  return (
    <Routes>
      <Route path='' element={<WebsiteLayout />}>
        <>
          <Route index element={<Home />} />
        </>
      </Route>
      <Route path='Vay-tien-online' element={<Need1Loan />}/>
      <Route path='dkvay' element={<LoanInformation />} />
      <Route path='ttin-dki' element={<LoanReigister />} />
    </Routes>
  )
}

export default App
