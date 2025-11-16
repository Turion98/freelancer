import type { ReactNode } from "react";

export const metadata = {
  title: "Freelancer Landing",
  description: "AI UX flow integrációs portfólió",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="hu">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
