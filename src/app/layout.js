import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import HeaderSection from "@/components/HeaderSection";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "British Academy for Training & Development",
  description: "British Academy for Training & Development",
  keywords: "Next.js, Tailwind CSS, TypeScript",
  openGraph: {
    type: "website",
    locale: "en_US",
    site_name: "Create Next App",
    description: "Generated by create next app",
    url: "https://create-next-app.com",
    images: [
      {
        url: "/logobat.png",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
  },
    twitter: {
      site_name: "Create Next App",
      description: "Generated by create next app",
      url: "https://create-next-app.com",
      images: [
        {
          url: "/logobat.png",
          width: 800,
          height: 600,
          alt: "Og Image Alt",
        },
      ],
      card: "summary_large_image",
      creator: "British Acadmey"
    },
  }


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-black dark:text-white`}
      >
        <HeaderSection />

        {children}
        <Footer />
      </body>
    </html>
  );
}