/**
 * Decorative backdrop for the student side: a warm cream base, soft colour
 * blobs and a faint dot grid. It sits behind everything and is invisible to
 * screen readers; cards stay white on top so text contrast is unaffected.
 */
export function PlayfulBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#fff7ed]" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(#4f46e5 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="animate-blob absolute -left-24 -top-24 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
      <div
        className="animate-blob absolute -right-20 top-32 h-72 w-72 rounded-full bg-accent/25 blur-3xl"
        style={{ animationDelay: "-6s", animationDuration: "22s" }}
      />
      <div
        className="animate-blob absolute bottom-[-6rem] left-1/3 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl"
        style={{ animationDelay: "-12s", animationDuration: "26s" }}
      />
      <div
        className="animate-blob absolute bottom-24 right-1/4 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl"
        style={{ animationDelay: "-3s", animationDuration: "20s" }}
      />
    </div>
  );
}
