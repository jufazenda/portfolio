;('')
import { ReactNode } from 'react'

import { Montserrat } from 'next/font/google'
import Header from './Header'

interface LayoutProps {
  children: ReactNode
}


const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='font-bobby'>
      <Header />
      {children}
    </div>
  )
}
export default Layout
