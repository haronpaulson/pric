import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from "../components/Navigation";
import Books  from "./Books";

function MyApp({ Component, pageProps }: AppProps) {
  return  <Component {...pageProps} />
}

export default MyApp
