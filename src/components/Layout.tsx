import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <div className='super-wrapper'>
        <Header/>
          <Outlet/>
      </div>
      <Footer/>
    </>
    
  )
}

export default Layout