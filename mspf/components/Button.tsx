"use client";

import Image from 'next/image';
import { useState } from 'react';


type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    animatedIcon?: string;
    variant: string;
    full?: boolean;
    page: string;
}



const Button = ({type, title, icon, animatedIcon, variant, full, page}: ButtonProps) => {
    const [animated, setAnimated] = useState(false);
    

    const handleClick = () => {
        window.open(page, "_blank");
    }

    return (
        <button onMouseEnter={ () => setAnimated(true)} onMouseLeave={() => setAnimated(false)} className={`bg-gray-10 flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`} 
            type={type}
            onClick={handleClick}
            >
            {icon && !animated && <Image src={icon} alt={title} width={24} height={24}/> }
            {animatedIcon && animated && <Image src={animatedIcon} alt={title} width={24} height={24} unoptimized/> }
        </button>
    )
}

export default Button