import type { PropsWithChildren, ReactElement } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "#/styles/tailwind.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rich Text Editor"
};

const Layout = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <html>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
};

export default Layout;