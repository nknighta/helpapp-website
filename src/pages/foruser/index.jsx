import Layout from '../../components/layout'
import styles from '../../styles/index.module.css'
import { useQRCode } from 'next-qrcode'
import { useState } from 'react'
import { useRouter } from 'next/router';

export default function Index() {
    const { Canvas } = useQRCode();
    const router = useRouter();
    const [qrtext, setQRText] = useState('');
   
    return (
        <>
            <div className={styles.hucontent}>
                <h1>つかいかた</h1>
            </div>
        </>
    )
}


Index.getLayout = (children) => {
    return (
        <Layout>
            {children}
        </Layout>
    )
}