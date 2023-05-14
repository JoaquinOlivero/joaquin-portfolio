import Navbar from '../components/Navbar/Navbar'
import Home from '../components/Home/Home'
import SideNavbar from '../components/Navbar/SideNavbar'
import Footer from '../components/Footer/Footer'
import PersonalLinks from '../components/PersonalLinks/PersonalLinks'

export default function Index() {
  return (
    <div>
      <Navbar />
      <SideNavbar />
      <PersonalLinks />
      <Home />
      <Footer />
    </div>
  )
}
