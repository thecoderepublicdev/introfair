import React from "react";
import { useRouter } from "next/router";
import { Manrope } from 'next/font/google';
import Footer from "@components/layout/footer/main";
import Header from "@components/layout/header/main";
import Head from "next/head";

const manrope = Manrope({subsets: ['latin']});

export default function Layout({children}) {
    const router = useRouter();
    console.log(router.asPath.includes('fuar-takvimi'))
    const showBackground = (router.asPath === '/' || router.asPath === '/fuar-takvimi' || router.asPath.includes('/fuar-takvimi'))
    
    return(
        <div className="relative overflow-hidden">
            <Head>
                <meta name="format-detection" content="telephone=no, date=no, email=no, address=no"/>
            </Head>
            {showBackground && (
                <React.Fragment>
                    <div className="absolute z-[-999] right-[-80px] rounded-full h-[348px] w-[348px] blur-[1200px] bg-[#0D76BA]"/>
                    <div className="absolute z-[-999] left-[-80px] rounded-full h-[348px] w-[348px] blur-[1200px] bg-[#F9A944]"/>
                </React.Fragment>
            )}
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}