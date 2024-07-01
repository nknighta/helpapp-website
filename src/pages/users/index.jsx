// Import FirebaseAuth and firebase.
import React from 'react';
import 'firebase/compat/auth';
import Layout from "../../components/layout";

// Configure Firebase.
function SignInScreen() {
    return (
        <div style={{
            textAlign: 'center',
            width: '100%',
        }}>

            <a href="/signedIn">
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