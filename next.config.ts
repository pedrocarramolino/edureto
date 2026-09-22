import type { NextConfig } from "next";

/**
 * Vercel ya envía HSTS. Faltaban estas: impiden que la app se cargue dentro de
 * un iframe ajeno (clickjacking), que el navegador adivine tipos de fichero,
 * que se filtre la URL completa al salir a otro sitio y que una página pida
 * cámara, micrófono o ubicación. No se añade Content-Security-Policy porque
 * Next necesita nonces para sus scripts y una CSP mal puesta rompe la app;
 * merece su propia tarea.
 */
const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
