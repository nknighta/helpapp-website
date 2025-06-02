import styles from '../../styles/index.module.css'
import { useAuth } from "../../lib/AuthContext";
import Layout from "../../components/layout";
import { useRouter } from 'next/router';

export default function SignInScreen() {
  // ログイン処理
  const { currentUser, login } = useAuth();
  const router = useRouter();
  if(currentUser) {
    router.push('/home'); // Redirect to home if already logged in
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {!currentUser && <button onClick={login}>ログイン</button>}
        {currentUser &&
          <div>
            よみこみ
          </div>}
      </main>
    </div>
  )
}

SignInScreen.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}