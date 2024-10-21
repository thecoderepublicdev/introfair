import AnimatedText from "@components/animated/Text";
import Container from "@components/shared/Container";
import Link from "next/link";

export default function HomeMasthead() {
    return(
        <Container height="700px" flex flexCol justifyCenter itemsCenter>
            <div className="max-w-[800px] text-center">
                <AnimatedText className="text-[90px] font-bold text-brand-primary-700">Profesyonel Fuarlar, Başarılı Sonuçlar</AnimatedText>
            </div>
            <Link href="/fuar-takvimi" className="px-8 py-4 rounded-full border-2 border-brand-primary-600  text-brand-primary-600 hover:bg-brand-primary-200 font-bold text-center">
                Fuarları İncele
            </Link>
        </Container>
    )
}