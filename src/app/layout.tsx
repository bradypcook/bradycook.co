import type { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google';
import '@/app/globals.css'
import Script from "next/script";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: "Brady's Website",
  description: "Welcome to my website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "65f963bf269f47a1aafeda9b7921ae3a"}'
          strategy="afterInteractive"
        />
        {/** <!-- Cloudflare Web Analytics --><script type='module' src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "65f963bf269f47a1aafeda9b7921ae3a"}'></script><!-- End Cloudflare Web Analytics --> */}
      </head>
      <body
        className={`${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}