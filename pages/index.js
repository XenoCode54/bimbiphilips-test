import Calender from '../component/calender';
import Info from '../component/info';
import Layout from '../component/layout';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <Layout className={styles.container}>
            <div className="flex flex-col md:flex-row px-14 py-4">
                <Calender />
                <Info />
            </div>
        </Layout>
    );
}
