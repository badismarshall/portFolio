'use client'
import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavItems = () => {
  const pathname = usePathname()
  return (
    <ul className='md:justify-between flex w-full items-start gap-5 md:flex-row'>
      {
      headerLinks.map((link) => {
          const isActive = pathname === link.route
            return (
              <li key={link.route} className={`
                  ${isActive && 'text-purple-500'} flex justify-center p-meduim-16 whitespace-nowrap`}>
                  <Link 
                      href={link.route}
                  >
                      {link.label}
                  </Link>
              </li>
            )
      })}
    </ul>
  )
}

export default NavItems