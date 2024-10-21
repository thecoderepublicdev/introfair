import { CalendarDaysIcon, GlobeAmericasIcon, MapPinIcon } from "@heroicons/react/24/solid";
import useCountryName from "hooks/useCountryName";
import useSlug from "hooks/useSlug";
import Link from "next/link";

export default function ExhibitionBox({
    name = 'Exhibition Name',
    description = 'Exhibition Description is goes here',
    date = '1-3 January 2024',
    location = 'İstanbul Fuar Merkezi',
    country = 'Türkiye'
}) {
    return(
        <div className="flex gap-4 flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row w-full bg-white/25 backdrop-blur-md transition-all ease-in-out rounded-xl">
            <div className="flex flex-initial flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-start md:items-center lg:items-center xl:items-center 2xl:items-center flex-grow gap-6">
                <picture className="inline-flex items-center justify-center min-w-[200px] min-h-[200px] bg-[#F5F5F5] rounded-xl">
                </picture>
                
                <div className="grid gap-4 w-full md:w-fit lg:w-fit xl:w-fit 2xl:w-fit">
                    <div>
                        <h3 className="text-3xl font-bold">{name}</h3>
                        <p>{description}</p>
                    </div>

                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between gap-4 md:gap-6 lg:gap-6 xl:gap-6 2xl:gap-6 md:items-center lg:items-center xl:items-center 2xl:items-center content-center text-gray-500">
                        <div className="flex items-center content-center gap-2">
                            <CalendarDaysIcon className="size-6 text-gray-500"/>
                            <label>{date}</label>
                        </div>
                        <div className="flex items-center content-center gap-2">
                            <MapPinIcon className="size-6 text-gray-500"/>
                            <label>{location}</label>
                        </div>
                        <div className="flex items-center content-center gap-2">
                            <GlobeAmericasIcon className="size-6 text-gray-500"/>
                            <label>{useCountryName(country)}</label>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex-none grid gap-4">
                <a className="rounded-full font-bold text-center p-4 bg-brand-primary-500 text-white">Katılımcı Ol</a>
                <a className="rounded-full font-bold text-center p-4 bg-brand-primary-200 text-brand-primary-500">Ziyaretçi Ol</a>
                <Link href={`/exhibition/${useSlug(name)}`} className="rounded-full font-bold text-center border-2 border-transparent hover:border-brand-primary-500 p-4 text-brand-primary-500">Detaylı Bilgi Edin</Link>
            </div>
        </div>
    )
}