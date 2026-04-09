import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KINETIC | High-Frequency Coffee Lab",
  description: "Radical roasts for those who never stop. Fueled by vibes, roasted in Victoria Island.",
  icons: {
    icon: "/lkc.png",
  },
};

import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/layout/PageTransition";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/ui/CartDrawer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { PulseFooter } from "@/components/layout/PulseFooter";
import { MainFooter } from "@/components/layout/MainFooter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans min-h-full flex flex-col antialiased bg-canvas text-ink`}
      >
        <CartProvider>
          <Navbar />
          <SmoothScroll>
            <main className="flex-grow flex flex-col min-h-screen">
              <PageTransition>
                {children}
              </PageTransition>
            </main>
          </SmoothScroll>
          <MainFooter />
          <PulseFooter />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
