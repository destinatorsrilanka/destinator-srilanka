import type { Metadata } from "next";
import "./globals.css"; // Global styles import
import { Montserrat, Lora, Poppins } from "next/font/google";

// Define font variables
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
  weight: ["400", "500", "600", "700"], // ඔබගේ CSS හි තිබූ weights
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Destinator Sri Lanka",
  description: "Explore the beauty of Sri Lanka with us.",
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
      <body>{children}</body>
    </html>
  );
}
