/**
 * Una consulta que no responde nunca deja la pantalla en "Cargando…" para
 * siempre, porque ni `.then` ni `.catch` llegan a ejecutarse. Esto le pone un
 * límite: pasado ese tiempo la promesa falla y la pantalla puede reaccionar.
 */
export function withTimeout<T>(promise: Promise<T>, ms = 8000): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("La consulta ha tardado demasiado")), ms);
    promise
      .then(resolve, reject)
      .finally(() => clearTimeout(timer));
  });
}
