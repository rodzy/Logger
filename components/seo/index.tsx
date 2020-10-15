import Head from "next/head";

interface Props{
    siteTitle: string;
    siteDescription: string;
}

const Seo: React.FC<Props> = ({siteTitle,siteDescription}) => {
    return (
        <Head>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription}/>
        </Head>
    )
}

export default Seo;