import Layout from '../../components/layout';
import React, { useState, useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react'
import { createClient } from '@supabase/supabase-js'
import { useUser } from '@supabase/auth-helpers-react';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default function Signin() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
        }}>
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
            <div style={{
                textAlign: 'center',
            }}>
                <h1>My App</h1>
                <p>ようこそ</p>
                <div style={{
                    padding: '10px',
                }}>
                    <span style={{
                        display: 'block',
                        width: '100px',
                        height: '100px',
                        background: `url(${user.user_metadata.avatar_url})`,
                        backgroundSize: 'cover',
                        borderRadius: '50%',
                        margin: '0 auto',
                    }}></span>
                </div>
                <div style={{
                    padding: '10px',
                }}>
                    <h2>{user.user_metadata.full_name} さん</h2>
                </div>
                <div
                    style={{
                        padding: '10px',
                    }}>
                    <button style={{
                        padding: '10px',
                        background: '#3420ff',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer',
                        borderRadius: '50px',
                        fontSize: '26px',

                    }}
                        onClick={() => {
                            window.open('helpapp://');
                        }}>
                            まちかどアプリを開く
                    </button>
                </div>
                <button
                    style={{
                        padding: '10px',
                        background: '#f0f0f0',
                        color: 'blue',
                        border: 'none',
                        cursor: 'pointer',
                        borderRadius: '50px',
                        fontSize: '20px',
                    }}
                    onClick={handleSignOut}>
                    Sign-out
                </button>
            </div>
        </div>
    );
}