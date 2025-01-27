import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

// Import the Vazirmatn font with desired subsets
const vazirmatn = Vazirmatn( { subsets: [ "latin", "arabic" ] } );

export const metadata: Metadata = {
  title: "BMS Co.",
  description: "هوشمندسازی برای همه",
};

export default function RootLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> )
{
  return (
    <html lang="en" dir="rtl">
      <body className={ vazirmatn.className }>
        { children }
      </body>
    </html>
  );
}
