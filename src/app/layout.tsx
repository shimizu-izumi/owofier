import "@/styles/globals.css";

import { Nunito } from "next/font/google";
import Providers from "@/components/Providers";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "OwOfier",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`font-nunito ${nunito.variable}`}>
        <Providers>
          <main className="flex min-h-screen flex-col items-center justify-center">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
