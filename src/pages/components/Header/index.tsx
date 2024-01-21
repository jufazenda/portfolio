import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => {
    setIsMenuOpen(true)
  }
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <header
      className={
        'bg-secondary text-sm flex py-8 px-16 justify-between items-center sticky top-0 z-20 text-white h-28 shadow-lg'
      }
    >
      <Link href={'/'}>
        <div className=' flex justify-between items-end'>
          <p className='text-3xl'> Ju Fazenda</p>
          <div className='w-24'>
            <Image
              src='/3.png'
              alt='Icone'
              width={80}
              height={80}
              priority
            />
          </div>
        </div>
      </Link>

      <button className='p-1 md:hidden' onClick={openMenu}>
        {/* <MenuOutlined className='w-10 h-10 fill-white' /> */}
      </button>
      <nav className='items-center hidden gap-12 text-xl md:flex '>
        <Link href={'/'} className='uppercase hover:text-primary '>
          Sobre
        </Link>
        <Link href={'/'} className=' uppercase hover:text-primary '>
          Experiências
        </Link>
        <Link href={'/'} className='mr-8 uppercase hover:text-primary '>
          Projetos
        </Link>
      </nav>
      {/* <Menu isVisible={isMenuOpen} onClose={closeMenu} /> */}
    </header>
  )
}

export default Header
