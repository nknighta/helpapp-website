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
                        <a href="/signin">利用者登録(無償)</a>
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