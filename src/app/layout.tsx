import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Lora, Poppins } from "next/font/google";
import PreLoader from "@/components/PreLoader"; // PreLoader එක ඇති තැන නිවැරදිව දෙන්න

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Destinator",
  description: "Explore the beauty of Sri Lanka with us.",
  icons: {
    icon: "/image/Logo2.png", // ඔබේ ලොගෝ එකේ path එක මෙතැනට දෙන්න
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${lora.variable} ${poppins.variable}`}
    >
      <body className="antialiased">
        <PreLoader />
        {children}
      </body>
    </html>
  );
}
