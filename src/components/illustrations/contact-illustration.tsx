export function ContactIllustration() {
  return (
    <svg className="illustration" viewBox="0 0 480 320" role="img" aria-labelledby="contact-illustration-title">
      <title id="contact-illustration-title">Abstrakcyjna koperta z linią zagięcia, symbolizująca wysłanie zgłoszenia</title>
      <rect width="480" height="320" fill="#f0e9db" />
      <rect x="90" y="90" width="300" height="180" rx="18" fill="#faf6ef" stroke="#e2d8c3" strokeWidth="2" />
      <path d="M90 108 L240 210 L390 108" fill="none" stroke="#9c3d1c" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="240" cy="60" r="10" fill="#2f5a7a" />
      <path d="M240 78 L240 40" stroke="#2f5a7a" strokeWidth="4" strokeLinecap="round" />
      <path d="M225 52 L240 40 L255 52" fill="none" stroke="#2f5a7a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
