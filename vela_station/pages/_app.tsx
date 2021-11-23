import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SelectMenuContextProvider } from 'contexts/SelectMenuContext';

const VelaStationApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta charSet='utf-8' />
      <title>VelaStation</title>
    </Head>
    <SelectMenuContextProvider>
      <Component {...pageProps} />
    </SelectMenuContextProvider>
  </>
);

export default VelaStationApp;
