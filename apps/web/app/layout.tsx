import { ReactNode } from "react";

import "./globals.css";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width" />
        <title>Plan. Train. Analyze. Workout tracker for building exercise habits — Somatik</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </head>

      <body>{children}</body>
    </html>
  );
};

export default Layout;
