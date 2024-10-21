import Container from "@components/shared/Container";
import Grid from "@components/shared/Grid";
import FooterLink from "./FooterLink";

export default function Footer() {
    return(
        <footer className="py-[50px] bg-gray-100">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
                    <div className="grid gap-4">
                        <label className="font-bold text-2xl">Kurumsal</label>
                        <ul className="grid gap-2">
                            <li>
                                <FooterLink link="#">Hakkımızda</FooterLink>
                                <FooterLink link="#">İnsan Kaynakları</FooterLink>
                                <FooterLink link="#">İletişim</FooterLink>
                            </li>
                        </ul>
                    </div>
                    <div className="grid gap-4">
                        <label className="font-bold text-2xl">Fuarlar</label>
                        <ul className="grid gap-2">
                            <li>
                                <FooterLink link="#"></FooterLink>
                                <FooterLink link="#">İnsan Kaynakları</FooterLink>
                                <FooterLink link="#">İletişim</FooterLink>
                            </li>
                        </ul>
                    </div>
                    <div className="grid gap-4">
                        <label className="font-bold text-2xl">Hizmetlerimiz</label>
                    </div>
                    <div className="grid gap-4">
                        <label className="font-bold text-2xl">İletişim</label>
                    </div>
                </div>
            </Container>
        </footer>
    )
}