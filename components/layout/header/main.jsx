import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Logo from "@components/shared/Logo";
import NavigationItem from "./NavigationItem";
import Navigations from "@data/Navigation";
import useTranslation from "next-translate/useTranslation";
import LanguageSwitch from "@components/shared/LanguageSwitch";
import Drawer from 'react-modern-drawer'
import { Bars3Icon } from "@heroicons/react/24/solid";
import { isMobile } from 'react-device-detect';


export default function Header() {
    const router = useRouter();
    const { lang } = useTranslation();
    const [navigationItems, setNavigationItems] = useState([]);
    const [isMobileMenuOpen, setMobileMenuActiveStatus] = useState(false);

    useEffect(() => {
        setNavigationItems(Navigations.sort((a,b) => a.order - b.order))
    }, [Navigations, navigationItems])

    return(
        <header className="px-[32px] md:px-[135px] lg:px-[135px] xl:px-[135px] 2xl:px-[135px] h-[120px] flex flex-row justify-between align-center items-center">
            <Logo width={!isMobile ? 90 : 50}></Logo>
            {!isMobile ? (
                <nav className="flex gap-[16px]">
                    {navigationItems.map((item, index) => item.show && (
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
                            {navigationItems.map((item, index) => item.show && (
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