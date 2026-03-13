const BabyStarSvg = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="50" fill="hsl(42 100% 85%)" opacity="0.5" />
    <path
      d="M60 20L68 44H93L73 58L80 82L60 68L40 82L47 58L27 44H52L60 20Z"
      fill="hsl(42 100% 70%)"
      stroke="hsl(42 60% 50%)"
      strokeWidth="1.5"
    />
    <circle cx="50" cy="50" r="3" fill="hsl(340 82% 55%)" />
    <circle cx="70" cy="50" r="3" fill="hsl(340 82% 55%)" />
    <path d="M54 58 Q60 64 66 58" stroke="hsl(340 82% 55%)" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

const BabyHeartSvg = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M50 85C50 85 15 60 15 38C15 22 28 12 40 12C47 12 50 18 50 18C50 18 53 12 60 12C72 12 85 22 85 38C85 60 50 85 50 85Z"
      fill="hsl(340 60% 92%)"
      stroke="hsl(340 82% 55%)"
      strokeWidth="2"
    />
    <circle cx="40" cy="40" r="2.5" fill="hsl(340 82% 55%)" />
    <circle cx="60" cy="40" r="2.5" fill="hsl(340 82% 55%)" />
    <path d="M44 50 Q50 56 56 50" stroke="hsl(340 82% 55%)" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

const BabyBottleSvg = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="10" width="30" height="12" rx="4" fill="hsl(340 82% 55%)" />
    <rect x="20" y="22" width="40" height="80" rx="8" fill="hsl(340 60% 92%)" stroke="hsl(340 82% 55%)" strokeWidth="1.5" />
    <rect x="20" y="22" width="40" height="30" rx="8" fill="hsl(42 100% 90%)" opacity="0.6" />
    <line x1="28" y1="40" x2="52" y2="40" stroke="hsl(340 82% 55%)" strokeWidth="1" opacity="0.4" />
    <line x1="28" y1="50" x2="52" y2="50" stroke="hsl(340 82% 55%)" strokeWidth="1" opacity="0.4" />
    <line x1="28" y1="60" x2="52" y2="60" stroke="hsl(340 82% 55%)" strokeWidth="1" opacity="0.4" />
  </svg>
);

const BabyMoonSvg = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M70 15C55 15 42 28 42 45C42 62 55 75 70 75C60 85 40 85 28 73C16 61 16 41 28 29C40 17 58 15 70 15Z"
      fill="hsl(42 100% 85%)"
      stroke="hsl(42 60% 50%)"
      strokeWidth="1.5"
    />
    <circle cx="54" cy="42" r="2" fill="hsl(340 82% 55%)" />
    <circle cx="46" cy="42" r="2" fill="hsl(340 82% 55%)" />
    <path d="M47 48 Q50 52 53 48" stroke="hsl(340 82% 55%)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
);

export { BabyStarSvg, BabyHeartSvg, BabyBottleSvg, BabyMoonSvg };
