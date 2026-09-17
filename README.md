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

## Firebase

`src/lib/firebase.ts` ya inicializa `auth` y `db`, pero necesita las credenciales del proyecto en
`.env.local` (copia `.env.local.example`). Ni el login ni el guardado de datos están conectados
todavía: las pantallas usan `src/data/*.ts` como fuente de datos temporal.

## Próximos pasos sugeridos

1. Conectar Firebase Auth (login profesora/alumno) y sustituir los datos de ejemplo por
   Firestore.
2. Persistir intentos de actividad (`ActivityAttempt`) y actualizar el estado de las habilidades
   automáticamente.
3. Generador de actividades con IA en `/dashboard/activities/new`.
