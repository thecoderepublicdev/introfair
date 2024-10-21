import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useMobileDetect from 'use-mobile-detect-hook';
import Logo from "@components/shared/Logo";
import NavigationItem from "./NavigationItem";
import * as NavigationItems from '@data/Navigation'
import useTranslation from "next-translate/useTranslation";
import LanguageSwitch from "@components/shared/LanguageSwitch";
import Drawer from 'react-modern-drawer'
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Header() {
    const currentDevice = useMobileDetect();
    const router = useRouter();
    const { lang } = useTranslation();
    const [navigationItems, setNavigationItems] = useState([]);
    const [isMobileMenuOpen, setMobileMenuActiveStatus] = useState(false);

    useEffect(() => {
        setNavigationItems(NavigationItems.default.sort((a,b) => a.order - b.order))
    }, [navigationItems])



    return(
        <header className="px-[32px] md:px-[135px] lg:px-[135px] xl:px-[135px] 2xl:px-[135px] h-[120px] flex flex-row justify-between align-center items-center">
            <Logo width={currentDevice.isDesktop() ? 90 : 50}></Logo>
            {currentDevice.isDesktop() ? (
                <nav className="flex gap-[16px]">
                    {navigationItems.map((item, index) => (item.show && item.label[lang].length > 0 && item.link.length > 0) && (
                        <NavigationItem key={index} link={item.link}>
                            {item.label[lang]}
                        </NavigationItem> 
                    ))}
                    <LanguageSwitch/>
                </nav>
            ) : (
                <div className="flex gap-4">
                    <LanguageSwitch flagSize="w-10 h-10"/>
                    <button onClick={() => setMobileMenuActiveStatus(true)}>
                        <Bars3Icon className="size-8 text-black"/>
                    </button>
                    <Drawer
                        open={isMobileMenuOpen}
                        onClose={() => setMobileMenuActiveStatus(false)}
                        lockBackgroundScroll={true}
                        direction="right"
                        className="bg-red-600"
                    >
                        <nav className="grid gap-2">
                            {navigationItems.map((item, index) => (item.show && item.label[lang].length > 0 && item.link.length > 0) && (
                                <NavigationItem key={index} link={item.link}>
                                    {item.label[lang]}
                                </NavigationItem> 
                            ))}
                        </nav>
                    </Drawer>
                </div>
            )}
        </header>
    )
}