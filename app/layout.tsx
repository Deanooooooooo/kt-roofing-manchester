import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://deanooooooooo.github.io/kt-roofing-manchester"),
  title: "KT Roofing | Manchester Roofers",
  description:
    "Manchester roofing help for tiling, slating, leadwork, chimneys, flat roofs, fascias and guttering.",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "KT Roofing | Manchester Roofers",
    description:
      "Tiling, slating, leadwork, chimney revamps, flat roofs, fascias and guttering in Manchester.",
    url: "https://deanooooooooo.github.io/kt-roofing-manchester/",
    images: ["/assets/hero-roof-manchester.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "KT Roofing | Manchester Roofers",
    description:
      "Manchester roofing services covering tiles, slates, leadwork, flat roofs and guttering.",
    images: ["/assets/hero-roof-manchester.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
