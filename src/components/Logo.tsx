interface LogoProps {
  className?: string;
  color?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { width: 32, height: 32 },
  md: { width: 40, height: 40 },
  lg: { width: 56, height: 56 },
};

export default function Logo({
  className = "",
  color = "dark",
  size = "md",
}: LogoProps) {
  const { width, height } = sizes[size];
  const primary = color === "light" ? "#FFFFFF" : "#6B1D2A";
  const accent = "#D4A853";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Manyata Travels Logo"
    >
      {/* Background circle */}
      <circle cx="60" cy="60" r="58" fill={primary} stroke={accent} strokeWidth="3" />

      {/* Mountain peaks forming "M" shape */}
      <path
        d="M20 85 L40 45 L52 62 L60 35 L68 62 L80 45 L100 85"
        stroke={accent}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Snow caps on peaks */}
      <path
        d="M36 52 L40 45 L44 52"
        fill={accent}
        opacity="0.4"
      />
      <path
        d="M56 42 L60 35 L64 42"
        fill={accent}
        opacity="0.6"
      />
      <path
        d="M76 52 L80 45 L84 52"
        fill={accent}
        opacity="0.4"
      />

      {/* Sun/dot above center peak */}
      <circle cx="60" cy="24" r="4" fill={accent} />

      {/* Subtle horizon line */}
      <line x1="25" y1="85" x2="95" y2="85" stroke={accent} strokeWidth="2" opacity="0.3" />
    </svg>
  );
}
