import { AppProps } from 'next/app';
import { Roboto_Mono } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto_Mono({ subsets: ['latin'], weight: "400" });

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main className={roboto.className}>
            <Component {...pageProps} />
        </main>
    );
}