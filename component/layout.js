import Container from './container';
import Meta from './meta';
import NavBar from './navbar';
import styles from '../styles/Home.module.css';

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Meta />
            <div>
                <Container>
                    <NavBar />
                </Container>
                <div className="border-t border-gray-500" />
                <Container>
                    <main>{children}</main>
                </Container>
            </div>
        </div>
    );
}
