import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";

export default function Logo({
    children = "Intro Fair Exhibition & Conference Logo",
    width = 200
}) {
    const { lang } = useTranslation()
    return(
        <Link href="/" locale={lang}>
            <figure>
                <Image
                    className={`w-[${width.toString()}px] h-auto`}
                    src={require('@logo/intro.svg').default.src}
                    width={require('@logo/intro.svg').default.width}
                    height={require('@logo/intro.svg').default.height}
                    alt={children}
                />
            </figure>
        </Link>
    )
}