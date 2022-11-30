import "styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "shared/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  const Layout =
    (Component as any).layout ||
    (({ children }: { children: React.FC }) => children);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
