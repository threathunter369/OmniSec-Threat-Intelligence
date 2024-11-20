import { ChakraProvider, createStandaloneToast, ColorModeScript } from '@chakra-ui/react';
import { AuthProvider } from '../contexts/AuthContext';
import type { AppProps } from 'next/app';
import theme from '../styles/theme';
import Layout from '../components/layout/Layout';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import ErrorBoundary from '../components/common/ErrorBoundary';
import { useEffect, useState } from 'react';
import '../styles/globals.css';

const { ToastContainer } = createStandaloneToast();

const paypalOptions = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
  currency: "USD",
  intent: "capture",
};

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme} resetCSS>
        <ErrorBoundary>
          <PayPalScriptProvider options={paypalOptions}>
            <AuthProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
              <ToastContainer />
            </AuthProvider>
          </PayPalScriptProvider>
        </ErrorBoundary>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
