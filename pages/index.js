import { useEffect, useState } from "react";
import HomeMasthead from "@components/home/Masthead";
import Layout from "./_layout";
import * as Services from '@data/Services';
import ServicesBox from "@components/home/ServicesBox";
import useTranslation from 'next-translate/useTranslation'
import Container from "@components/shared/Container";

export default function Home() {
  const { t, lang } = useTranslation();
  const [servicesList, setServices] = useState([]);

  useEffect(() => {
    setServices(Services.default)
  }, [servicesList])

  return(
    <Layout>
      <HomeMasthead/>
      <Container>
        {servicesList.map((service, index) => (
          <ServicesBox
            key={index}
            reverse={(index % 2 !== 0)}
            title={service.title[lang]}
            summary={service.summary[lang]}
          />
        ))}
      </Container>
    </Layout>
  )
}