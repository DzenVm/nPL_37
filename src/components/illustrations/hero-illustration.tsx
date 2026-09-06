export function HeroIllustration() {
  return (
    <svg
      className="illustration"
      viewBox="0 0 480 420"
      role="img"
      aria-labelledby="hero-illustration-title"
    >
      <title id="hero-illustration-title">
        Abstrakcyjna kompozycja symbolizująca wymianę zdań w rozmowie
      </title>
      <rect width="480" height="420" fill="#f0e9db" />
      <g opacity="0.9">
        <rect x="48" y="64" width="230" height="120" rx="26" fill="#faf6ef" stroke="#e2d8c3" strokeWidth="2" />
        <path d="M78 184 L78 214 L118 184 Z" fill="#faf6ef" stroke="#e2d8c3" strokeWidth="2" />
        <line x1="80" y1="102" x2="240" y2="102" stroke="#9c3d1c" strokeWidth="6" strokeLinecap="round" />
        <line x1="80" y1="128" x2="200" y2="128" stroke="#514a3d" strokeWidth="6" strokeLinecap="round" opacity="0.55" />
        <line x1="80" y1="154" x2="220" y2="154" stroke="#514a3d" strokeWidth="6" strokeLinecap="round" opacity="0.35" />
      </g>
      <g opacity="0.95">
        <rect x="210" y="220" width="220" height="132" rx="26" fill="#9c3d1c" />
        <path d="M410 352 L410 384 L370 352 Z" fill="#9c3d1c" />
        <line x1="238" y1="260" x2="360" y2="260" stroke="#faf6ef" strokeWidth="6" strokeLinecap="round" />
        <line x1="238" y1="286" x2="330" y2="286" stroke="#faf6ef" strokeWidth="6" strokeLinecap="round" opacity="0.75" />
        <line x1="238" y1="312" x2="392" y2="312" stroke="#faf6ef" strokeWidth="6" strokeLinecap="round" opacity="0.55" />
      </g>
      <g fill="#6a4a8a">
        <circle cx="330" cy="72" r="7" />
        <circle cx="356" cy="72" r="7" />
      </g>
      <g fill="#2f5a7a">
        <circle cx="120" cy="392" r="6" />
        <circle cx="142" cy="392" r="6" />
      </g>
    </svg>
  );
}
