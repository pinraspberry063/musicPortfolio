import Home from '../app/page';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_BAR_LINKS } from '@/constants';
import Button from './Button';

const NavBar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-3 '>
        <Link href="/">
            <Image src="/jc-guitar-2.png" alt="logo" width={200} height={75}/>
            
        </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
                {NAV_BAR_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className='regular-16 text-gray-50 flexCenter 
                    cursor-pointer pb-1.5 transition-all hover:font-bold py-10'>
                        {link.label}
                    </Link>
                ))}
        </ul>

        <div className='lg:flexCenter gap-2 hidden'>
            <Button 
                type='button'
                title='spotify'
                icon='/spotify.png'
                variant='btn_dark_gray'
                page='https://www.instagram.com/jordan.cobos/'

            />
            <Button 
                type='button'
                title='youtube'
                icon='/yt.png'
                variant='btn_dark_gray'
                page='https://www.instagram.com/jordan.cobos/'

            />
            <Button 
                type='button'
                title='instagram'
                icon='/insta.png'
                variant='btn_dark_gray'
                page='https://www.instagram.com/jordan.cobos/'

            />
            <Button 
                type='button'
                title='discord'
                icon='/discord.png'
                variant='btn_dark_gray'
                page='https://www.instagram.com/jordan.cobos/'

            />
        </div>


        <Image 
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            className='inline-block cursor-pointer lg:hidden'
        />

    </nav>
  )
}

export default NavBar