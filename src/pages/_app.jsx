import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createClient } from '@supabase/supabase-js'
import "../styles/global.css";

const supabaseUrl = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

function MyApp({ Component, pageProps }) {
  return (
    <SessionContextProvider supabaseClient={supabaseUrl}>
      {Component.getLayout ? Component.getLayout(<Component {...pageProps} />) : <Component {...pageProps} />}
    </SessionContextProvider>
  );
}

export default MyApp;