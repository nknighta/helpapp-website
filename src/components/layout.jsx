import React from 'react';
import styles from '../styles/index.module.css';

function Layout({ children }) {
    return (
        <div>
            <div className={styles.apptitle}>
                <a href='/'>ヘルプアプリ</a>
            </div>
            {children}
            <footer>
                <p>サイトマップ</p>
            </footer>
        </div>
    )
}

export default Layout;