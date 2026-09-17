import Image from "next/image";

const sizes = {
  sm: 28,
  md: 36,
  lg: 96,
  xl: 140,
} as const;

export function Logo({
  size = "md",
  withWordmark = true,
  className = "",
}: {
  size?: keyof typeof sizes;
  withWordmark?: boolean;
  className?: string;
}) {
  const px = sizes[size];
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/logo.png"
        alt="EduReto"
        width={px}
        height={px}
        priority={size === "lg" || size === "xl"}
        className="rounded-lg"
      />
      {withWordmark && (
        <span className="font-heading text-xl font-bold text-primary">EduReto</span>
      )}
    </span>
  );
}
