import "./globals.css";

export const metadata = {
  title: "Tattoo",
  description: "Estúdio de tatuagem profissional com arte personalizada",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="pt-br" suppressHydrationWarning className="!scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
