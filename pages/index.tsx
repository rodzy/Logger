import Head from "next/head";
import styles from "@styles/Home.module.css";
import Seo from '../components/seo'

export default function Home() {
    return (
        <div>
            <Seo siteTitle="Next Auth" siteDescription="Auth with nextjs" />
        </div>
    );
}
