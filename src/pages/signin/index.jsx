import styles from '../../styles/index.module.css'
import { useAuth } from "../../lib/AuthContext";
import Layout from "../../components/layout";

export default function SignInScreen() {
  const { currentUser, login, logout } = useAuth()
  return (
    <div className={styles.container}>
      
      <main className={styles.main}>
        {!currentUser && <button onClick={login}>ログイン</button>}
        {currentUser &&
          <div>
            <h2>{currentUser.displayName} さん、こんにちは！</h2>
            <p> <span>{currentUser.email}</span> でログイン中</p>
            <button onClick={logout}>ログアウト</button>
          </div>}
      </main>
    </div>
  )
}

<<<<<<< HEAD
SignInScreen.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
=======
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
                <div className={{
                    width: 'auto',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <h2>ログインする</h2>
                </div>
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
>>>>>>> b135c5b821514521ada20edb974318d92aee787a
}