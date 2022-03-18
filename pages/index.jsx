import Navbar from '../components/Navbar/Navbar'
import Home from '../components/Home/Home'
import SideNavbar from '../components/Navbar/SideNavbar'
import Footer from '../components/Footer/Footer'

export default function Index() {
  return (
    <div>
      <Navbar />
      <SideNavbar />
      <Home />
      <Footer />
    </div>
  )
}
