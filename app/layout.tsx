import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import InteractiveBackground from "@/components/InteractiveBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Tyrell Haywood</title>
        <meta
          name="description"
          content="Tyrell Haywood — Creative software developer and computer science student passionate about building unique projects. Let’s share ideas!"
        />
        <link rel="icon" type="image/svg+xml" href="/logo-black.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="background">
        <InteractiveBackground />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
