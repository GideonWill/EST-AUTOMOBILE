/* Ferrari-style prancing horse SVG logo */
export const FerrariLogo = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="4" fill="#CC0000"/>
    <text x="50" y="28" textAnchor="middle" fill="#f5c518" fontSize="9" fontFamily="serif" fontWeight="bold">FERRARI</text>
    {/* Prancing horse simplified */}
    <path d="M50 35 C48 32 44 30 43 28 C42 26 43 24 45 24 C47 24 48 26 48 28 C48 24 50 22 52 22 C54 22 55 24 54 26 C53 28 51 30 50 35Z" fill="#f5c518"/>
    <path d="M46 35 L44 45 L48 44 L50 50 L52 44 L56 45 L54 35 Z" fill="#f5c518"/>
    <path d="M44 45 L40 52 L46 50 Z" fill="#f5c518"/>
    <path d="M56 45 L60 52 L54 50 Z" fill="#f5c518"/>
    <text x="50" y="72" textAnchor="middle" fill="#f5c518" fontSize="7" fontFamily="serif" letterSpacing="2">SCUDERIA</text>
    <rect x="20" y="76" width="60" height="1.5" fill="#f5c518" opacity="0.5"/>
  </svg>
)

/* Lamborghini-style bull SVG logo */
export const LamborghiniLogo = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="0" fill="#1a1a1a" stroke="#f5c518" strokeWidth="2"/>
    <text x="50" y="18" textAnchor="middle" fill="#f5c518" fontSize="6" fontFamily="sans-serif" fontWeight="bold" letterSpacing="2">AUTOMOBILI</text>
    {/* Bull silhouette simplified */}
    <path d="M35 40 C33 38 30 36 30 34 C30 31 33 30 35 32 L38 28 L40 30 L42 27 L44 30 C46 28 48 28 50 30 C52 28 54 28 56 30 L58 27 L60 30 L62 28 L65 32 C67 30 70 31 70 34 C70 36 67 38 65 40 C66 43 66 48 64 52 L60 55 L55 53 L50 56 L45 53 L40 55 L36 52 C34 48 34 43 35 40Z" fill="#f5c518"/>
    <text x="50" y="72" textAnchor="middle" fill="#f5c518" fontSize="7" fontFamily="sans-serif" fontWeight="bold" letterSpacing="1">LAMBORGHINI</text>
  </svg>
)

/* Porsche shield SVG logo */
export const PorscheLogo = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Shield outline */}
    <path d="M50 5 L90 20 L90 70 C90 95 50 115 50 115 C50 115 10 95 10 70 L10 20 Z" fill="#1a1a1a" stroke="#aaaaaa" strokeWidth="2"/>
    {/* Top section */}
    <path d="M50 5 L90 20 L90 62 L50 62 Z" fill="#CC0000"/>
    <path d="M10 20 L50 20 L50 62 L10 62 Z" fill="#CC0000"/>
    {/* Centre bars */}
    <rect x="38" y="5" width="24" height="57" fill="#1a1a1a"/>
    <rect x="10" y="35" width="80" height="27" fill="#1a1a1a"/>
    {/* Horse */}
    <path d="M50 18 C49 16 47 15 46 13 C47 12 49 13 50 15 C51 13 53 12 54 13 C53 15 51 16 50 18Z" fill="#aaaaaa"/>
    <path d="M48 18 L46 26 L50 24 L54 26 L52 18Z" fill="#aaaaaa"/>
    <text x="50" y="82" textAnchor="middle" fill="#aaaaaa" fontSize="6" fontFamily="sans-serif" fontWeight="bold" letterSpacing="2">PORSCHE</text>
  </svg>
)

/* BMW roundel SVG */
export const BMWLogo = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#1a1a1a" stroke="#0066b1" strokeWidth="2"/>
    <circle cx="50" cy="50" r="36" fill="white"/>
    <path d="M50 14 A36 36 0 0 1 86 50 L50 50 Z" fill="#0066b1"/>
    <path d="M50 86 A36 36 0 0 1 14 50 L50 50 Z" fill="#0066b1"/>
    <circle cx="50" cy="50" r="12" fill="#1a1a1a"/>
    <circle cx="50" cy="50" r="36" fill="none" stroke="#aaaaaa" strokeWidth="4"/>
    <text x="50" y="54" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" fontWeight="bold">BMW</text>
  </svg>
)

/* Mercedes star SVG */
export const MercedesLogo = ({ size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#1a1a1a" stroke="#c0c0c0" strokeWidth="2"/>
    <circle cx="50" cy="50" r="36" fill="none" stroke="#c0c0c0" strokeWidth="1.5"/>
    {/* 3-pointed star */}
    <path d="M50 14 L54 46 L86 50 L54 54 L50 86 L46 54 L14 50 L46 46 Z" fill="#c0c0c0"/>
    <circle cx="50" cy="50" r="6" fill="#1a1a1a" stroke="#c0c0c0" strokeWidth="1"/>
  </svg>
)

/* Aston Martin wings SVG */
export const AstonMartinLogo = ({ size = 64 }) => (
  <svg width={size * 2} height={size * 0.6} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="60" rx="4" fill="#004f3f"/>
    {/* Left wing */}
    <path d="M20 30 C30 20 45 18 60 22 L65 30 L60 38 C45 42 30 40 20 30Z" fill="#c0a020" opacity="0.9"/>
    {/* Right wing */}
    <path d="M180 30 C170 20 155 18 140 22 L135 30 L140 38 C155 42 170 40 180 30Z" fill="#c0a020" opacity="0.9"/>
    {/* Centre badge */}
    <rect x="75" y="8" width="50" height="44" rx="2" fill="#004f3f" stroke="#c0a020" strokeWidth="1.5"/>
    <text x="100" y="26" textAnchor="middle" fill="#c0a020" fontSize="7" fontFamily="serif" fontWeight="bold">ASTON</text>
    <text x="100" y="36" textAnchor="middle" fill="#c0a020" fontSize="7" fontFamily="serif" fontWeight="bold">MARTIN</text>
    <line x1="82" y1="30" x2="118" y2="30" stroke="#c0a020" strokeWidth="0.5" opacity="0.5"/>
  </svg>
)

export const BRAND_LOGOS = { FerrariLogo, LamborghiniLogo, PorscheLogo, BMWLogo, MercedesLogo, AstonMartinLogo }
