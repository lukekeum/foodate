import { Global } from '@emotion/react';
import GlobalCSS from '../lib/global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={GlobalCSS} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
