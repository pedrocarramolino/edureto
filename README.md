# EduReto

Plataforma educativa para clases de refuerzo: panel de profesora + zona de alumno con retos y
juegos reutilizables por asignatura.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS + Firebase (Auth/Firestore).

## Arrancar en local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estado actual (esqueleto)

Todo funciona con **datos de ejemplo** en `src/data/` (no hay backend conectado todavía):

- `/` — landing.
- `/dashboard` — panel de profesora: resumen, alumnos (`/dashboard/students`), ficha de alumno
  con habilidades y retos (`/dashboard/students/[id]`), biblioteca de actividades
  (`/dashboard/activities`) y formulario para crear una nueva (`/dashboard/activities/new`).
- `/student` — zona de alumno: inicio, mundos/asignaturas (`/student/subjects`), zona de juegos
  libre (`/student/games`), progreso (`/student/progress`) y el reproductor de actividades
  (`/student/play/[activityId]`).

### Motor de actividades

`src/types/index.ts` define un tipo `Activity` (unión discriminada) con 5 mecánicas reutilizables
para cualquier asignatura: `multiple_choice`, `drag_drop`, `build_answer`, `mission` (encadena
varias actividades) y `open_response`. `src/components/games/ActivityPlayer.tsx` decide qué
componente renderizar según `activity.type` — así no hace falta programar un juego nuevo por cada
asignatura o tema.

## Diseño

Dos modos sobre una misma marca (índigo `#4F46E5` = estructura, naranja `#EA580C` = reto/recompensa),
definidos como tokens en `src/app/globals.css` (`@theme`) y fuentes en `src/lib/fonts.ts`:

- **Aula** (panel de profesora): limpio y denso en información. Titulares en Poppins
  (`font-heading`), cuerpo en Inter, iconos de navegación en SVG (`@phosphor-icons/react`).
- **Mundo** (zona de alumno): claymorphism — bordes gruesos, radios grandes (`rounded-clay`),
  sombras "clay" y botones con efecto de pulsado. Titulares en Baloo 2 (`font-display`), cuerpo en
  Nunito (`font-playful`, aplicada en `src/app/student/layout.tsx`).
- Cada asignatura tiene su "mundo" con color e icono propios (`src/data/subjects.ts`), mostrados
  con el componente `WorldBadge` — es el elemento distintivo que se repite en tarjetas, nav y
  cabeceras.
- `Button` y `Card` tienen variantes `clay` para la zona de alumno; el resto de componentes usa el
  estilo por defecto (Aula).

## Firebase Auth (real, ya conectado)

El proyecto usa el Firebase real `edureto` (mismo que ya existía en la cuenta). `.env.local`
(no está en git) tiene las credenciales de la app web; `.env.local.example` documenta qué
variables hacen falta si hay que recrearlo en otra máquina.

- `src/lib/auth/AuthProvider.tsx` — contexto de auth: `user`, `role`, `signIn`, `signOutUser`.
  El rol (`profesora` | `alumno`) se lee del documento `users/{uid}` en Firestore.
- `/login` — único formulario de acceso (email + contraseña); tras entrar, `/redirigiendo`
  espera a que se resuelva el rol y manda a `/dashboard` o `/student`.
- `src/components/auth/RequireRole.tsx` protege ambos layouts: sin sesión → `/login`; con el
  rol equivocado → la zona que le corresponde.
- `firestore.rules` (sin desplegar todavía — pide confirmación antes de `firebase deploy`) limita
  `users/{uid}` a lectura del propio usuario; nada de escritura desde el cliente.

**No hay registro público** (no encaja con el caso de uso: son alumnos conocidos, no altas
abiertas). Para dar de alta una cuenta:

1. Firebase Console → Authentication → Users → Add user (email + contraseña).
2. Firestore → colección `users` → documento con ID = el UID de ese usuario → campo
   `role: "profesora"` o `role: "alumno"`.

Sin ese documento, cualquier cuenta se trata como `alumno` por defecto.

## Próximos pasos sugeridos

1. Desplegar `firestore.rules` y sustituir los datos de ejemplo (`src/data/*.ts`) por colecciones
   reales de Firestore (alumnos, actividades, retos, intentos).
2. Persistir intentos de actividad (`ActivityAttempt`) y actualizar el estado de las habilidades
   automáticamente.
3. Generador de actividades con IA en `/dashboard/activities/new`.
