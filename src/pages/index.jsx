import styles from '../styles/index.module.css';
import Layout from '../components/layout';
import { useUser } from '@supabase/supabase-js';
import { useEffect } from 'react';

export default function Index() {
    const user = useUser();
    useEffect(() => {
        console.log(user);
    }, [user]);
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