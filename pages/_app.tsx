import CustomBrowserRouter from '@/router/CustomBrowserRouter';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps, ...props }: AppProps) {
  return (
    <CustomBrowserRouter asPath={props.router.asPath}>
      <Component {...pageProps} />
    </CustomBrowserRouter>
  );
}
