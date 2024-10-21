import { useRouter } from "next/router";
import Layout from "pages/_layout";

export default function ExhibitionDetail() {
    const router = useRouter();

    console.log(router.asPath)
    return(
        <Layout>
            
        </Layout>
    )
}