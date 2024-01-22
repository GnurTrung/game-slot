import { ApplicationProvider } from "@/context/useApplication";
import "./globals.css";

const title = "Xaitama";
const desc = "Xaitama";
const img = "/assets/images/main_coin.png";

export const metadata = {
  title: title,
  description: desc,
  keywords: ["Xaitama", "coin", "not"],
  openGraph: {
    title: title,
    description: desc,
    images: img,
  },
  twitter: {
    card: "summary",
    site: "",
    // url: "https://chewchew.wtf/",
    title: title,
    description: desc,
    creator: "@Xaitama",
    images: {
      url: img,
      alt: "Xaitama Logo",
    },
  },
  /* robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }, */
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ApplicationProvider>
        <body>{children}</body>
      </ApplicationProvider>
    </html>
  );
}
