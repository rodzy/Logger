// import styles from "@styles/Home.module.css";
import Seo from '../components/seo'
import Panel from '../components/panel';

export default function Home() {
    return (
        <div>
            <Seo siteTitle="Next Auth" siteDescription="Auth with nextjs" />
            <Panel/>
        </div>
    );
}
