import "../styles/global.css";
import AuthProvider from "../lib/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>  
      {Component.getLayout ? Component.getLayout(<Component {...pageProps} />) : <Component {...pageProps} />}
    </AuthProvider>
  );
}
