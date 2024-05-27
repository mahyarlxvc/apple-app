import localFont from "next/font/local"
import "../globals.css";
import { Providers } from "../../lib/redux/Providers";

const myFont = localFont({ src: '../../fonts/IRANSans/IRANSans.ttf' })

export const metadata = {
    title: "اموزشگاه اپل",
    description: "برترین در کشور",
};

export default async function RootLayout({ children }) {
    return (
        <Providers>
            <html lang="fa">
                <body className={myFont.className}>
                    <main>
                        {children}
                    </main>
                </body>
            </html>
        </Providers>
    );
}
