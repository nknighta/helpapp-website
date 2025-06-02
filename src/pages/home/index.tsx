import styles from "../../styles/index.module.css";
import { useAuth } from "../../lib/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const { currentUser } = useAuth();
  const router = useRouter();

  const auth = getAuth();
  const [isStatus, setIsStatus] = useState("");
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    // クライアントサイドでのみnavigatorオブジェクトにアクセス
    setIsAndroid(/android/i.test(navigator.userAgent));
  }, []);

  const handleOpenApp = () => {
    if (isAndroid) {
      // アプリがインストールされていない場合のフォールバックも考慮すると良い
      window.location.href = "helpapp://map";

      // フォールバックの例 (タイムアウトを利用)
      setTimeout(() => {
        // もしアプリが開かなかったら（ページが遷移しなかったら）ストアに飛ばすなど
        // この方法は確実ではないため、UXを考慮して実装する
        if (!document.hidden) {
          // document.hiddenでアプリ遷移を検知できる場合がある
          // window.location.href = "https://play.google.com/store/apps/details?id=com.example.app";
          console.log("アプリが開かなかったか、インストールされていません。");
        }
      }, 2500);
    } else {
      setIsStatus("no-android");
    }
  };

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

  if (!currentUser) {
    router.push("/signin");
    return <div>Loading...</div>;
  }
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
                onClick={handleOpenApp}
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

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
