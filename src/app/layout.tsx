import type { Component } from "#/utils/react";
import type { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "#/styles/tailwind.css";
import "#/styles/code-highlight.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rich Text Editor"
};

const Layout: Component<PropsWithChildren> = ({ children }) => {
  return (
    <html>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
};

export default Layout;