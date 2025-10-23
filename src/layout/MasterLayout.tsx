
import { BottomNavbar } from './BottomNavbar'
import Footer from './Footer'
import { Header } from './Header'
import { MainNavbar } from './MainNavbar'


const MasterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>

      <Header />
      <MainNavbar />
      <BottomNavbar />
      <main>{children}</main>
      <Footer />
    </main>
  )
}

export default MasterLayout
