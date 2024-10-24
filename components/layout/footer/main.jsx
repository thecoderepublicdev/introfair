import Container from "@components/shared/Container";
import FooterLink from "./FooterLink";
import Services from "@data/Services";
import useTranslation from "next-translate/useTranslation";

export default function Footer() {
    const { t, lang } = useTranslation('footer');

    return(
        <footer className="py-[50px] bg-gray-100">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
                    <div className="grid gap-4">
                        <label className="font-bold font-manrope text-2xl">Kurumsal</label>
                        <ul className="grid gap-2">
                            <li>
                                <FooterLink link="#">Hakkımızda</FooterLink>
                                <FooterLink link="#">İnsan Kaynakları</FooterLink>
                                <FooterLink link="#">İletişim</FooterLink>
                            </li>
                        </ul>
                    </div>
                    <div className="grid gap-4">
                        <label className="font-bold font-manrope text-2xl">Fuarlar</label>
                        <ul className="grid gap-2">
                            <li>
                                <FooterLink link="#">Kazakistan Fuarları</FooterLink>
                                <FooterLink link="#">Özbekistan Fuarları</FooterLink>
                                <FooterLink link="#">Rusya Fuarları</FooterLink>
                            </li>
                        </ul>
                    </div>
                    <div className="grid gap-4">
                        <label className="font-bold font-manrope text-2xl">Hizmetlerimiz</label>
                        {Services.map((service, index) => (
                            <FooterLink key={index} link="#">{service.title[lang]}</FooterLink>
                        ))}
                    </div>
                    <div className="grid gap-4">
                        <label className="font-bold font-manrope text-2xl">İletişim</label>
                    </div>
                </div>
            </Container>
        </footer>
    )
}