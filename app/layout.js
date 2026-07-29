import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

// Inter, in de 3 gewichten die je gebruikt: Regular / Semi Bold / Bold
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Arek Verbakel — Mediavormgever",
  description:
    "Portfolio van Arek Verbakel, mediavormgever. Logo, branding, huisstijl, UX/UI en social content.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={inter.variable}>
      <body>
        <Header />
        <SmoothScroll>
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
