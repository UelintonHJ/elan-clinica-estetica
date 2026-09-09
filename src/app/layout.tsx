import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/ui/MotionProvider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Élan Clínica Estética",
  description: "Tratamentos estéticos personalizados para quem busca cuidado, precisão e naturalidade.",

  openGraph: {
    title: "Élan Clínica Estética",
    description:
      "Cuidado estético personalizado com precisão e naturalidade.",
      type: "website",
  },
};

export default function RootLayout({ children, }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
    >
      <body className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
