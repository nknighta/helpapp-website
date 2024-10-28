import Layout from '../../components/layout';
import React, { useState, useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react'
import { createClient } from '@supabase/supabase-js'
import { useUser } from '@supabase/auth-helpers-react';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default function Signin() {
    return (
        <div>
            <h1>Signin</h1>
            <SignInScreen />
        </div>
    );
}

Signin.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

function SignInScreen() {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const user = useUser();

    useEffect(() => {
      setIsSignedIn(!!user);
    }, [user]);

    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error(error.message);
        } else {
            console.log('User logged out');
            setIsSignedIn(false);
        }
    };

    if (!isSignedIn) {
        return (
            <div>
                <h1>My App</h1>
                <p>Please sign-in:</p>
                <Auth
                    supabaseClient={supabase}
                    providers={['google']}
                    onlyThirdPartyProviders
                    redirectTo="http://localhost:3000/signin"
                />
            </div>
        );
    }
    return (
        <div>
            <h1>My App</h1>
            <p>Welcome {user.email}! You are now signed-in!</p>
            <button onClick={handleSignOut}>Sign-out</button>
        </div>
    );
}