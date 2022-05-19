import '../styles/globals.css'
import {NextPage} from "next";
import {AppProps} from "next/app";

type AppPropsPublic = AppProps & {
  Component: NextPage & { noLayout?: boolean }
  token: string
}

function MyApp({ Component, pageProps }: AppPropsPublic) {
  return <Component {...pageProps} />
}

export default MyApp
