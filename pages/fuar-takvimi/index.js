import Layout from "pages/_layout";
import * as Exhibitions from '@data/Exhibitions';
import { useEffect, useState } from "react";
import useExtractYears from "hooks/useExtractYears";
import Container from "@components/shared/Container";
import useFilterByYear from "hooks/useFilterByYear";
import IconBox from "@components/shared/IconBox";
import ExhibitionBox from "@components/shared/ExhibitionBox";
import useTranslation from "next-translate/useTranslation";


const ExhibitionList = ({year}) => {
    const { lang } = useTranslation()
    const list = useFilterByYear(Exhibitions.default, year)

    return(
        <div className="grid gap-4">
            {list.map((exhibition, index) => exhibition.isActive && (
                <ExhibitionBox
                    key={index}
                    logo={exhibition.logo}
                    name={exhibition.name}
                    date={exhibition.date}
                    country={exhibition.country}
                />
            ))}
        </div>
    )
}

export default function Page() {
    const [exhibitions, setExhibitions] = useState([]);
    const exhibitionYears = useExtractYears(exhibitions);

    useEffect(() => {
        setExhibitions(Exhibitions.default)
    }, [exhibitions]);


    return(
        <Layout>
            <section className="min-h-[400px] grid place-content-center place-items-center">
                <Container flex flexCol>
                    <h1 className="text-brand-primary-500 font-black font-outfit text-center text-7xl">Fuar Takvimi</h1>
                    <p className="text-center">Intro Fair Exhibition & Conference olarak gerçekleştirdiğimiz fuarları keşfedin.</p>
                </Container>
            </section>
            <Container>
                <div className="grid gap-8">
                    {exhibitionYears.map((year, index) => (
                        <div className="grid gap-4">
                            <IconBox
                                icon="calendar-days"
                                subtitle={`${year.length} fuar`}
                                title={`${year} Fuarları`}
                            />
                            <ExhibitionList year={year}/>
                        </div>
                    ))}
                </div>
            </Container>
        </Layout> 
    )
}