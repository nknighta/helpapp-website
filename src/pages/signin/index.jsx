import styles from '../../styles/index.module.css'
import {useAuth} from "../../lib/AuthContext";

export default function Home() {
    const {currentUser, login, logout} = useAuth()
    
      return (
        <div className={styles.container}>
          <main className={styles.main}>
              {!currentUser && <button onClick={login}>ログイン</button>}
              {currentUser &&
              <div>
                  <p> <span>{currentUser.email}</span> でログイン中</p>
                  <button onClick={logout}>ログアウト</button>
              </div>}
          </main>
        </div>
      )
    }