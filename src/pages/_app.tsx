import type { AppProps } from 'next/app';
// @ts-ignore
import { ThemeProvider } from '@vimeo-ux/components';
import { theme } from '@vimeo-ux/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
