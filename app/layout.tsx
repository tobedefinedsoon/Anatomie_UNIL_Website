import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anatomie UNIL - Quiz d'anatomie musculaire",
  description: "Apprenez l'anatomie musculaire avec des quiz interactifs. Origine, terminaison, innervation et vascularisation des muscles du corps humain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
