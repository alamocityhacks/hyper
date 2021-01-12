import '../styles/globals.css';
import { ToastProvider } from '@magiclabs/ui';

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
}

export default MyApp;
