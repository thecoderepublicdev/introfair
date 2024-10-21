import Container from "@components/shared/Container";
import classNames from "classnames";

export default function ServicesBox({
    thumbnail = "",
    title = "",
    summary = "",
    link = "",
    reverse = false
}) {
    return(
        <Container>
            <div className="grid items-center content-center align-center md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
                <picture className={classNames('w-full h-[240px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px] bg-gray-200 rounded-xl overflow-hidden', {
                    ["lg:order-last xl:order-last 2xl:order-last"]: reverse
                })}>
                    
                </picture>

                <div className="grid gap-[14px]">
                    <h2 className="text-4xl font-bold">{title}</h2>
                    <p className="text-gray-500 text-lg">{summary}</p>
                    <a className="rounded-full w-fit px-[48px] py-[16px] font-bold bg-[#0D76BA] text-white text-lg" href={link} title={title}>Detaylı Bilgi Edin</a>
                </div>
            </div>
        </Container>
    )
}