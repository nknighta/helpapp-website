import styles from '../styles/index.module.css';
import Layout from '../components/layout';
import Link from 'next/link';

export default function Index() {
    
    return (
        <>
            <div>
                <ul className={styles.linkscontainer}>
                    <li>
                        以下から利用開始    
                    </li>
                    <li>
                        <Link href="/signin">利用者の方へ</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

Index.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}