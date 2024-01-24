import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import HireMe from "@/components/HireMe";
import Image from "next/image";


const Footer = () =>{
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-light-lg dark:text-light dark:border-light sm:text-base'>
            <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6 '>
                <span>{new Date().getFullYear()} &copy;All Rights Reserved.</span>
               <div className="flex items-center lg:py-2">
                   Build with <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span> by&nbsp;<Link href="/" className='underline
                   underline-offset-2 ' target={"_blank"}>Muhammad Muaz</Link></div>
                <Link href="/" target={"_blank"} className='underline
                   underline-offset-2 '>Say Asalam-u-alikum</Link>
            </Layout>

        </footer>
    )
}
export default Footer