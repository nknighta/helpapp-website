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

SignInScreen.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}