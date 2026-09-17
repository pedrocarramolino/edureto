import Link from "next/link";

export default function PrivacidadPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
      <Link href="/" className="font-heading text-lg font-bold text-primary">
        EduReto
      </Link>
      <h1 className="mt-4 font-heading text-3xl font-bold text-slate-900">Política de privacidad</h1>
      <p className="mt-1 text-sm text-slate-400">Última actualización: {new Date().toLocaleDateString("es-ES")}</p>

      <div className="mt-8 space-y-6 text-slate-700">
        <section className="space-y-2">
          <h2 className="font-heading text-lg font-semibold text-slate-900">1. Qué datos tratamos</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Datos de la cuenta: correo electrónico y contraseña (esta última nunca la vemos: la gestiona Firebase Authentication).</li>
            <li>Datos del alumno: nombre, edad, curso y avatar.</li>
            <li>Datos de progreso: actividades realizadas, aciertos, rachas, puntos y habilidades reforzadas.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-lg font-semibold text-slate-900">2. Para qué los usamos</h2>
          <p>
            Solo para hacer funcionar la plataforma: identificar a cada alumno, adaptar sus
            actividades y mostrar su progreso al profesor responsable. No usamos estos datos con
            fines publicitarios ni los vendemos a terceros.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-lg font-semibold text-slate-900">3. Menores de edad</h2>
          <p>
            EduReto está pensado para usarse con menores bajo la supervisión de un adulto
            responsable (profesor, madre, padre o tutor legal). Cuando el usuario tenga menos de 14
            años, el registro y la aceptación de esta política debe hacerlos ese adulto en su
            nombre, conforme a la normativa española de protección de datos (RGPD y LOPDGDD).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-lg font-semibold text-slate-900">4. Dónde se almacenan</h2>
          <p>
            Los datos se guardan en Firebase (Google Cloud), que actúa como encargado del
            tratamiento. Aplicamos reglas de acceso para que cada persona solo pueda ver sus propios
            datos.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-lg font-semibold text-slate-900">5. Tus derechos</h2>
          <p>
            Puedes pedir en cualquier momento acceder, corregir o borrar los datos de una cuenta
            escribiendo a la dirección de contacto indicada en la plataforma.
          </p>
        </section>
      </div>
    </main>
  );
}
