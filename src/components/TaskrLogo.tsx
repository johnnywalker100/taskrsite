
export function TaskrLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="mintGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7EDDA5" />
          <stop offset="100%" stopColor="#4CAF7D" />
        </linearGradient>
        <linearGradient id="badgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4CAF7D" />
          <stop offset="100%" stopColor="#3B9968" />
        </linearGradient>
      </defs>
      
      <rect
        x="8"
        y="8"
        width="84"
        height="84"
        rx="28"
        fill="url(#mintGradient)"
      />
      
      <path
        d="M28 38 L42 52 L72 28"
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      <circle
        cx="75"
        cy="75"
        r="20"
        fill="url(#badgeGradient)"
      />
      
      <path
        d="M67 75 L72 80 L83 68"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
