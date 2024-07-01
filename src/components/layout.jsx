import React from 'react';
import styles from '../styles/index.module.css';

function Layout({ children }) {
    return (
        <div className={styles.global_conteiner}>
            <header className={styles.header}>
                <div className={styles.apptitle}>
                    <>ヘルプアプリ</>
                </div>
                <a href='/'>ホーム</a>
            </header>
            {children}
            <footer className={styles.footer}>
                <p>サイトマップ</p>
            </footer>
        </div>
    )
}

export default Layout;