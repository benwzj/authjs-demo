import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auth.js Demo App",
  description: "Auth.js Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-full min-h-screen w-full flex-col justify-between">
          <div className="mx-auto w-full max-w-3xl flex-auto px-4 py-4 sm:px-6 md:py-6">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
