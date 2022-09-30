import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if(process.env.NEXT_PUBLIC_VERSION) {
      localStorage.setItem('version', process.env.NEXT_PUBLIC_VERSION);
    }
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
