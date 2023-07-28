import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {UserProvider} from "@auth0/nextjs-auth0/client"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
