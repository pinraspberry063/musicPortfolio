"use client";

import Image from 'next/image';


type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
    page: string;
}



const Button = ({type, title, icon, variant, full, page}: ButtonProps) => {

    

    const handleClick = () => {
        window.open(page, "_blank");
    }

    return (
        <button className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`} 
            type={type}
            onClick={handleClick}
            >
            {icon && <Image src={icon} alt={title} width={24} height={24}/> }

        </button>
    )
}

export default Button