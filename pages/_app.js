import '../styles/globals.css';
import { ToastProvider } from '@magiclabs/ui';

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider position={'top-end'}>
      <Component {...pageProps} />
    </ToastProvider>
  );
}

export default MyApp;
