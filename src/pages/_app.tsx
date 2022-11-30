import "styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { store, wrapper } from "shared/redux/store";

function App({ Component, pageProps }: AppProps) {
  const Layout =
    (Component as any).layout ||
    (({ children }: { children: React.FC }) => children);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default wrapper.withRedux(App);
