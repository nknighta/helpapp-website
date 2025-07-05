import styles from "../../styles/index.module.css";
import { useAuth } from "../../lib/AuthContext";
import firebase from "../../lib/AuthContext";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


export default function SignInScreen() {
  // ログイン処理
  //const { currentUser } = useAuth();
  const 
  { currentUser, login, logout }: any = useAuth();
  const [isStatus, setIsStatus] = useState("");

  const router = useRouter();
  const opensitetype = router.query.send;
  useEffect(() => {
    opensitetype === "app"
      ? () => {
          router.push("helpapp://");
          setIsStatus("android");
        }
      : () => {
          setIsStatus("no-android");
        };
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        router.push("/signin");
      })
      .catch((error) => {
        // An error happened.
        console.error("Sign out error", error);
      });
  };
  const onAuthStateChanged = async (auth, user) => {
    if (user) {
      const idToken = await user.getIdToken();
      // このidTokenをFlutterに送る
      window.location.href = `helpapp://`;
    }
  };

  const auth = getAuth();
  if (currentUser) {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          {currentUser && (
            <div>
              <h2>{currentUser.displayName} さん、こんにちは！</h2>
              <p>
                {" "}
                <span>{currentUser.email}</span> でログイン中
              </p>

              {isStatus === "no-android" ? (
                <p className="text-red-500 mt-2">
                  Android端末でのみアプリを開くことができます。
                </p>
              ) : (
                <button
                  onClick={onAuthStateChanged.bind(null, auth, currentUser)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  アプリを開く
                </button>
              )}
              <button onClick={handleSignOut}>ログアウト</button>
            </div>
          )}
        </main>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <button
          onClick={login}
        >
          ログイン
        </button>
        {currentUser && <div>よみこみ</div>}
      </main>
    </div>
  );
}

SignInScreen.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
