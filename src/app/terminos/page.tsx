import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export default function TerminosPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
      <Link href="/">
        <Logo size="sm" />
      </Link>
      <h1 className="mt-4 font-heading text-3xl font-bold text-slate-900">Términos de uso</h1>
      <p className="mt-1 text-sm text-slate-400">Última actualización: {new Date().toLocaleDateString("es-ES")}</p>

      <div className="mt-8 space-y-6 text-slate-700">
        <section className="space-y-2">
          <h2 className="font-heading text-lg font-semibold text-slate-900">1. Qué es EduReto</h2>
          <p>
            EduReto es una plataforma de refuerzo educativo con actividades, juegos y seguimiento
            de progreso, pensada para su uso en clases de apoyo escolar bajo la supervisión de un
            profesor o tutor.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-lg font-semibold text-slate-900">2. Cuentas y menores de edad</h2>
          <p>
            Para crear una cuenta hace falta un correo electrónico y una contraseña. Si quien va a
            usar la cuenta es menor de 14 años, debe registrarla un padre, madre, tutor legal o el
            profesor responsable en su nombre, y no el propio menor. Nos reservamos el derecho de
            suspender cuentas que incumplan esta condición.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-lg font-semibold text-slate-900">3. Uso del servicio</h2>
          <p>
            El servicio se ofrece para fines educativos. No está permitido usarlo para introducir
            contenido ofensivo, compartir cuentas entre distintas personas, ni intentar acceder a
            datos de otros alumnos o profesores.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-lg font-semibold text-slate-900">4. Disponibilidad</h2>
          <p>
            EduReto se ofrece &ldquo;tal cual&rdquo; y puede sufrir interrupciones, cambios o discontinuarse
            sin previo aviso mientras el servicio esté en desarrollo.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-lg font-semibold text-slate-900">5. Contacto</h2>
          <p>
            Para cualquier duda sobre estos términos, puedes escribirnos a la dirección de contacto
            indicada en la plataforma.
          </p>
        </section>
      </div>
    </main>
  );
}
