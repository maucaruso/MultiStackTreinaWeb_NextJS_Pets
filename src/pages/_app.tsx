import "../ui/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import theme from "../ui/themes/theme";
import { useRouter } from 'next/router';

import Header from '../ui/components/Header';
import HeaderAdmin from '../ui/components/HeaderAdmin';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  router.pathname

  return (
    <ThemeProvider theme={theme}>
      {router.pathname === '/' ? <Header /> : <HeaderAdmin />}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
