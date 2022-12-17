import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import "../styles/Global.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
