'use client';
import Home from '../app/page';
import {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_BAR_LINKS } from '@/constants';
import Button from './Button';
import Menu from './Menu';


const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    //const [menuIcon, setMenuIcon] = useState( "menu.svg");

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    
    }
    
  return (
    <div className='flex flex-row w-full absolute px-20 top-5'>
        
        <nav className='flex items-center justify-between w-full'>
            
            <Link href="/">
                <img src="/JC-Guitar-Logo.png" alt="logo" width={200} height={75}/>
                
            </Link>
            {/* <ul className=' hidden h-full gap-12 lg:flex'>
                    {NAV_BAR_LINKS.map((link) => (
                        <Link href={link.href} key={link.key} className='text-4xl text-white flexCenter 
                        cursor-pointer pb-1.5 transition-all hover:font-bold py-10'>
                            {link.label}
                        </Link>
                    ))}
            </ul> */}

            <div className='lg:flexCenter gap-2 hidden'>
                <Button 
                    type='button'
                    title='spotify'
                    icon='/spotify.png'
                    animatedIcon='/spot_gray.gif'
                    variant='btn_light_gray'
                    page='https://open.spotify.com/'

                />
                <Button 
                    type='button'
                    title='youtube'
                    icon='/yt.png'
                    animatedIcon='/yt_gray.gif'
                    variant='btn_light_gray'
                    page='https://www.youtube.com/'

                />
                <Button 
                    type='button'
                    title='instagram'
                    icon='/insta.png'
                    animatedIcon='/insta_gray.gif'
                    variant='btn_light_gray'
                    page='https://www.instagram.com/jordan.cobos/'

                />
            </div>

            {menuOpen && <Menu/>}
            <div className='inline-block cursor-pointer absolute top-8 right-8 lg:hidden z-0' onClick={handleMenu}>
                
                <img 
                    src={(menuOpen)? "/close-no-bg.png" : "menu.svg"}
                    alt="menu"
                    width={32}
                    height={32}
                    
                   
                />
            </div>

        </nav>
    </div>
  )
}

export default NavBar