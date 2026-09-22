import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
/**
 * Con la conexión por defecto, en redes que filtran o intermedian el tráfico
 * (wifi de colegio, algunos routers, iPad tras un proxy) Firestore se queda
 * esperando sin dar error. Esta opción detecta ese caso y cambia a long
 * polling en lugar de colgarse.
 */
export const db = initializeFirestore(firebaseApp, {
  experimentalAutoDetectLongPolling: true,
});
