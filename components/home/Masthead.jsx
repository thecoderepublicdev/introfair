import AnimatedText from "@components/animated/Text";
import Container from "@components/shared/Container";
import Link from "next/link";

export default function HomeMasthead() {
    return(
        <Container height="700px" flex flexCol justifyCenter itemsCenter>
            <div className="max-w-[800px] text-center">
                <h1 className="tracking-tighter	 text-5xl md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-8xl font-outfit font-bold text-brand-primary-700">Profesyonel Fuarlar, Başarılı Sonuçlar</h1>
            </div>
            <Link href="/fuar-takvimi" className="px-8 py-4 rounded-full border-2 border-brand-primary-600  text-brand-primary-600 hover:bg-brand-primary-200 font-bold text-center">
                Fuarları İncele
            </Link>
        </Container>
    )
}