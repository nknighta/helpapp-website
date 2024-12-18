import React from 'react';
import Layout from "../../components/layout";
import Link from 'next/link';

// Configure Firebase.
function SignInScreen() {
    return (
        <div style={{
            textAlign: 'center',
            width: '100%',
        }}>

            <Link href="/signin">
                Google でログインして登録
            </Link>
        </div>
    );
}


export default SignInScreen

SignInScreen.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}