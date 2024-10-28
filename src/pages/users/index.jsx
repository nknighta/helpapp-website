import React from 'react';
import Layout from "../../components/layout";

// Configure Firebase.
function SignInScreen() {
    return (
        <div style={{
            textAlign: 'center',
            width: '100%',
        }}>

            <a href="/signin">
                Google でログインして登録
            </a>
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