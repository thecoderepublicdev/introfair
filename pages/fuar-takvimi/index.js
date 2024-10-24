import Layout from "pages/_layout";
import Exhibitions from '@data/Exhibitions';
import useExtractYears from "hooks/useExtractYears";
import Container from "@components/shared/Container";
import ExhibitionList from "@components/exhibition/List";
import useTranslation from "next-translate/useTranslation";


export default function Page() {
    const { t } = useTranslation('exhibition-calendar');
    const exhibitionYears = useExtractYears(Exhibitions);

    return(
        <Layout>
            <section className="min-h-[400px] grid place-content-center place-items-center">
                <Container flex flexCol>
                    <h1 className="text-brand-primary-500 font-black font-outfit text-center text-7xl">
                        {t('masthead.title')}
                    </h1>
                    <p className="text-center">
                        {t('masthead.description')}
                    </p>
                </Container>
            </section>
            <Container>
                <div className="grid gap-8">
                    {exhibitionYears.map((year, index) => <ExhibitionList key={index} year={year}/>)}
                </div>
            </Container>
        </Layout> 
    )
}