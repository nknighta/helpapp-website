import styles from '../styles/index.module.css';
import Layout from '../components/layout';

export default function Index() {
    return (
        <>
            <div>
                <ul className={styles.linkscontainer}>
                    <li>
                        以下から利用開始
                    </li>
                    <li>
                        <a href="/users">利用者の方へ</a>
                    </li>
                    <li>
                        <a href="/forhelper">救護者の方へ</a>
                    </li>
                    <li>
                        <a href="#">協力事業者の方へ</a>
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