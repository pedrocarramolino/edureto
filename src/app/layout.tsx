import type { Metadata } from "next";
import { poppins, inter, baloo2, nunito } from "@/lib/fonts";
import { AuthProvider } from "@/lib/auth/AuthProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "EduReto",
  description: "Plataforma educativa con retos, juegos y seguimiento personalizado.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${inter.variable} ${baloo2.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-slate-50 font-body text-slate-900">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
