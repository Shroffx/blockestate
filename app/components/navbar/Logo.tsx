'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();
    return (
        <Image 
        onClick={()=> router.push('/')}
        
        alt="Logo"
        className=" hidden md:block curson-pointer"
        width="70"
        height="70"
        src="/images/Logo.png"
        style={{ borderRadius: "90%" }}

        
        />
    );

}
export default Logo;