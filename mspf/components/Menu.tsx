import React from 'react'
import { NAV_BAR_LINKS } from '@/constants';
import Link from 'next/link';

const Menu = () => {
  return (
    <nav className='flex-col max-container absolute right-0 top-0 py-10 px-20 bg-zinc-700 cursor-pointer lg:hidden'>

        <ul className='h-full gap-12 lg:flex'>
            {NAV_BAR_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className='regular-16 text-white flexCenter 
                cursor-pointer pb-1.5 transition-all hover:font-bold py-10 '>
                    {link.label}
                </Link>
            ))}
        </ul>
    </nav>
  )
}

export default Menu