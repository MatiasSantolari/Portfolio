import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Import } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// El theme-color y el viewport ahora van en su propia constante según Next.js
export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Matías Santolari - Analista de Sistemas | BI | Desarrollador Backend",
  description: "Analista de Sistemas, Analista de BI & Desarrollador Backend especializado en .NET y Python. Enfocado en soluciones escalables, arquitectura limpia y optimización de procesos y estrategias.",
  keywords: [
    "Matías Santolari",
    "Desarrollador .NET",
    "Desarrollador Python",
    "Analista de Sistemas",
    "Ingenieria de Sistemas",
    "Portfolio",
    "Next.js",
    "TypeScript",
    "UTN",
    "Programador",
    ".NET 8",
    "C#",
    "Django",
    "REST API",
    "SQL Server",
    "Microservicios",
    "Business Intelligence",
    "Analisis de Datos",
    "DAX",
    "Power BI",
    "Power Query",
    "ETL",
    "Data Warehouse",
    "Star Schema",
    "Modelado de Datos",
    "NumPy",
    "Pandas",
    "SQLAlchemy",
    "Arquitectura Limpia",
    "Backend Developer",
    "Ingeniería de Software",
    "Tailwind CSS",
    "React",
    "Frontend para Backend",
    "UI/UX enfocado a Sistemas"
  ],
  authors: [{ name: "Matías Santolari" }],
  creator: "Matías Santolari",
  metadataBase: new URL("https://matiassantolari.github.io/Portfolio"),
  alternates: {
    canonical: "/Portfolio",
  },
  openGraph: {
    title: "Matías Santolari - Portfolio",
    description: "Explora el portfolio de Matías Santolari: proyectos de ingeniería de software, soluciones en .NET, Python, análisis de sistemas, datos y BI.",
    url: "https://matiassantolari.github.io/Portfolio",
    siteName: "Portfolio - Matías Santolari",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matías Santolari - Portfolio",
    description: "Desarrollador .NET / Python y Analista de Sistemas",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      {/* Eliminamos el <head> manual porque Next.js lo genera desde metadata/viewport */}
      <body
        className={`${inter.variable} font-sans antialiased`}
        style={{
          backgroundColor: 'var(--color-background)',
          color: 'var(--color-foreground)',
          fontFamily: 'var(--font-inter), system-ui, sans-serif',
          minHeight: '100vh' // Asegura que el fondo cubra toda la pantalla
        }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}