import React from 'react'
import { Header } from './Header'
import MainNavbar from './MainNavbar'
import BottomNavbar from './BottomNavbar'

const MasterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      <MainNavbar />
      <BottomNavbar />
      <main>{children}</main>
    </main>
  )
}

export default MasterLayout
