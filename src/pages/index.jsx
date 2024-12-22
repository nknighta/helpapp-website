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
<<<<<<< HEAD
                        <Link href="/signin">利用者の方へ</Link>
=======
                        <a href="/signin">利用者登録(無償)</a>
>>>>>>> b135c5b821514521ada20edb974318d92aee787a
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