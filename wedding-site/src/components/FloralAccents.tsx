import type { SVGProps } from "react";
import { COUPLE, ENGAGEMENT_EVENT } from "../constants/engagement";

export const FloralCornerSprig = ({
  className,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 240 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    {/* Eucalyptus stems */}
    <path
      d="M16 14C62 42 104 82 146 138"
      stroke="var(--sage-medium)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M22 18C44 76 62 128 76 188"
      stroke="var(--sage-muted)"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M14 20C76 28 134 42 194 64"
      stroke="var(--sage-muted)"
      strokeWidth="1.6"
      strokeLinecap="round"
    />

    {/* Sage Leaves */}
    <ellipse
      cx="66"
      cy="54"
      rx="10"
      ry="18"
      transform="rotate(-40 66 54)"
      fill="var(--sage-muted)"
      fillOpacity="0.65"
    />
    <ellipse
      cx="96"
      cy="74"
      rx="9"
      ry="16"
      transform="rotate(25 96 74)"
      fill="var(--sage-medium)"
      fillOpacity="0.55"
    />
    <ellipse
      cx="118"
      cy="108"
      rx="10"
      ry="17"
      transform="rotate(-32 118 108)"
      fill="var(--sage-muted)"
      fillOpacity="0.6"
    />
    <ellipse
      cx="44"
      cy="92"
      rx="9"
      ry="15"
      transform="rotate(42 44 92)"
      fill="var(--sage-medium)"
      fillOpacity="0.55"
    />
    <ellipse
      cx="62"
      cy="138"
      rx="8"
      ry="15"
      transform="rotate(-52 62 138)"
      fill="var(--sage-muted)"
      fillOpacity="0.6"
    />
    <ellipse
      cx="118"
      cy="40"
      rx="9"
      ry="16"
      transform="rotate(68 118 40)"
      fill="var(--sage-muted)"
      fillOpacity="0.62"
    />
    <ellipse
      cx="160"
      cy="54"
      rx="8"
      ry="14"
      transform="rotate(55 160 54)"
      fill="var(--sage-medium)"
      fillOpacity="0.52"
    />

    {/* Main Pastel Pink Peony */}
    <g transform="translate(54 50)">
      <circle cx="0" cy="-14" r="14" fill="var(--pastel-pink)" fillOpacity="0.92" />
      <circle cx="13" cy="-4" r="14" fill="var(--pastel-pink)" fillOpacity="0.88" />
      <circle cx="8" cy="11" r="14" fill="var(--pastel-pink)" fillOpacity="0.92" />
      <circle cx="-9" cy="11" r="14" fill="var(--pastel-pink)" fillOpacity="0.88" />
      <circle cx="-13" cy="-4" r="14" fill="var(--pastel-pink)" fillOpacity="0.9" />
      <circle cx="0" cy="0" r="8" fill="var(--rose-peach-accent)" fillOpacity="0.7" />
      <circle cx="0" cy="0" r="3.5" fill="var(--bg-ivory)" />
    </g>

    {/* Pastel Peach Rose */}
    <g transform="translate(106 44) scale(0.75)">
      <circle cx="0" cy="-14" r="14" fill="var(--pastel-peach)" fillOpacity="0.95" />
      <circle cx="13" cy="-4" r="14" fill="var(--pastel-peach)" fillOpacity="0.9" />
      <circle cx="8" cy="11" r="14" fill="var(--pastel-peach)" fillOpacity="0.92" />
      <circle cx="-9" cy="11" r="14" fill="var(--pastel-peach)" fillOpacity="0.9" />
      <circle cx="-13" cy="-4" r="14" fill="var(--pastel-peach)" fillOpacity="0.95" />
      <circle cx="0" cy="0" r="7" fill="var(--rose-peach-accent)" fillOpacity="0.75" />
    </g>

    {/* Lower Pastel Peach Blossom */}
    <g transform="translate(46 112) scale(0.68)">
      <circle cx="0" cy="-13" r="13" fill="var(--pastel-peach)" fillOpacity="0.92" />
      <circle cx="12" cy="-4" r="13" fill="var(--pastel-peach)" fillOpacity="0.9" />
      <circle cx="8" cy="10" r="13" fill="var(--pastel-peach)" fillOpacity="0.92" />
      <circle cx="-8" cy="10" r="13" fill="var(--pastel-peach)" fillOpacity="0.9" />
      <circle cx="-12" cy="-4" r="13" fill="var(--pastel-peach)" fillOpacity="0.92" />
      <circle cx="0" cy="0" r="5.5" fill="var(--bg-ivory)" />
    </g>

    {/* Small Pastel Pink Bud */}
    <circle cx="144" cy="128" r="6" fill="var(--pastel-pink)" fillOpacity="0.88" />
    <circle cx="186" cy="64" r="5.5" fill="var(--pastel-pink)" fillOpacity="0.85" />
    <circle cx="75" cy="180" r="5" fill="var(--pastel-peach)" fillOpacity="0.88" />
  </svg>
);

export const FloralDivider = ({ className }: { className?: string }) => (
  <div className={className ? `floral-divider ${className}` : "floral-divider"}>
    <svg
      viewBox="0 0 120 36"
      width="108"
      height="32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left & Right Sage Leaves */}
      <path d="M8 18H44" stroke="var(--sage-muted)" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M76 18H112" stroke="var(--sage-muted)" strokeWidth="1.2" strokeLinecap="round" />
      <ellipse cx="32" cy="12" rx="7" ry="3.5" transform="rotate(-24 32 12)" fill="var(--sage-muted)" fillOpacity="0.72" />
      <ellipse cx="34" cy="24" rx="7" ry="3.5" transform="rotate(24 34 24)" fill="var(--sage-medium)" fillOpacity="0.58" />
      <ellipse cx="88" cy="12" rx="7" ry="3.5" transform="rotate(24 88 12)" fill="var(--sage-muted)" fillOpacity="0.72" />
      <ellipse cx="86" cy="24" rx="7" ry="3.5" transform="rotate(-24 86 24)" fill="var(--sage-medium)" fillOpacity="0.58" />

      {/* Center Pastel Flower */}
      <circle cx="60" cy="10" r="5.2" fill="var(--pastel-pink)" />
      <circle cx="67.5" cy="15.5" r="5.2" fill="var(--pastel-peach)" />
      <circle cx="64.5" cy="24.5" r="5.2" fill="var(--pastel-pink)" />
      <circle cx="55.5" cy="24.5" r="5.2" fill="var(--pastel-peach)" />
      <circle cx="52.5" cy="15.5" r="5.2" fill="var(--pastel-pink)" />
      <circle cx="60" cy="18" r="4" fill="var(--rose-peach-accent)" />
      <circle cx="60" cy="18" r="1.8" fill="var(--bg-ivory)" />
    </svg>
  </div>
);

export const FloralCrest = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 180 96"
    width="160"
    height="86"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Arching eucalyptus sprays */}
    <path
      d="M90 56C66 56 38 46 16 26"
      stroke="var(--sage-medium)"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M90 56C114 56 142 46 164 26"
      stroke="var(--sage-medium)"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <ellipse cx="52" cy="44" rx="6" ry="11" transform="rotate(-55 52 44)" fill="var(--sage-muted)" fillOpacity="0.72" />
    <ellipse cx="32" cy="36" rx="5.5" ry="10" transform="rotate(-35 32 36)" fill="var(--sage-medium)" fillOpacity="0.58" />
    <ellipse cx="44" cy="58" rx="5.5" ry="10" transform="rotate(62 44 58)" fill="var(--sage-muted)" fillOpacity="0.6" />
    <ellipse cx="128" cy="44" rx="6" ry="11" transform="rotate(55 128 44)" fill="var(--sage-muted)" fillOpacity="0.72" />
    <ellipse cx="148" cy="36" rx="5.5" ry="10" transform="rotate(35 148 36)" fill="var(--sage-medium)" fillOpacity="0.58" />
    <ellipse cx="136" cy="58" rx="5.5" ry="10" transform="rotate(-62 136 58)" fill="var(--sage-muted)" fillOpacity="0.6" />

    {/* Side Pastel Peach Blooms */}
    <g transform="translate(62 48) scale(0.85)">
      <circle cx="0" cy="-9" r="9" fill="var(--pastel-peach)" />
      <circle cx="8.5" cy="-3" r="9" fill="var(--pastel-peach)" />
      <circle cx="5.2" cy="7.5" r="9" fill="var(--pastel-peach)" />
      <circle cx="-5.2" cy="7.5" r="9" fill="var(--pastel-peach)" />
      <circle cx="-8.5" cy="-3" r="9" fill="var(--pastel-peach)" />
      <circle cx="0" cy="0" r="4.5" fill="var(--rose-peach-accent)" />
    </g>
    <g transform="translate(118 48) scale(0.85)">
      <circle cx="0" cy="-9" r="9" fill="var(--pastel-peach)" />
      <circle cx="8.5" cy="-3" r="9" fill="var(--pastel-peach)" />
      <circle cx="5.2" cy="7.5" r="9" fill="var(--pastel-peach)" />
      <circle cx="-5.2" cy="7.5" r="9" fill="var(--pastel-peach)" />
      <circle cx="-8.5" cy="-3" r="9" fill="var(--pastel-peach)" />
      <circle cx="0" cy="0" r="4.5" fill="var(--rose-peach-accent)" />
    </g>

    {/* Center Pastel Pink Peony */}
    <g transform="translate(90 42)">
      <circle cx="0" cy="-12" r="12" fill="var(--pastel-pink)" />
      <circle cx="11.5" cy="-4" r="12" fill="var(--pastel-pink)" />
      <circle cx="7" cy="9.5" r="12" fill="var(--pastel-pink)" />
      <circle cx="-7" cy="9.5" r="12" fill="var(--pastel-pink)" />
      <circle cx="-11.5" cy="-4" r="12" fill="var(--pastel-pink)" />
      <circle cx="0" cy="0" r="7" fill="var(--rose-peach-accent)" fillOpacity="0.82" />
      <circle cx="0" cy="0" r="3" fill="var(--bg-ivory)" />
    </g>

    {/* Accent Buds */}
    <circle cx="22" cy="24" r="4" fill="var(--pastel-pink)" />
    <circle cx="158" cy="24" r="4" fill="var(--pastel-pink)" />
  </svg>
);

export const FloralWatermarkBlossom = ({
  variant = "pink",
  className,
}: {
  variant?: "pink" | "peach";
  className?: string;
}) => {
  const petalColor =
    variant === "pink" ? "var(--pastel-pink)" : "var(--pastel-peach)";

  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="40" cy="18" rx="9" ry="15" fill={petalColor} />
      <ellipse
        cx="61"
        cy="33"
        rx="9"
        ry="15"
        transform="rotate(72 61 33)"
        fill={petalColor}
      />
      <ellipse
        cx="53"
        cy="58"
        rx="9"
        ry="15"
        transform="rotate(144 53 58)"
        fill={petalColor}
      />
      <ellipse
        cx="27"
        cy="58"
        rx="9"
        ry="15"
        transform="rotate(216 27 58)"
        fill={petalColor}
      />
      <ellipse
        cx="19"
        cy="33"
        rx="9"
        ry="15"
        transform="rotate(288 19 33)"
        fill={petalColor}
      />
      <circle cx="40" cy="40" r="6" fill="var(--sage-muted)" fillOpacity="0.45" />
    </svg>
  );
};

export const WaxSealSvg = ({
  className,
  idPrefix = "wax",
}: {
  className?: string;
  idPrefix?: string;
}) => {
  const rimId = `${idPrefix}-sealRim`;
  const bodyId = `${idPrefix}-sealBody`;
  const topArcId = `${idPrefix}-topArc`;
  const botArcId = `${idPrefix}-botArc`;

  return (
    <svg
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={rimId} cx="36%" cy="32%" r="72%">
          <stop offset="0%" stopColor="#FDECEE" />
          <stop offset="52%" stopColor="#F4C8C9" />
          <stop offset="100%" stopColor="#DBA4A6" />
        </radialGradient>
        <radialGradient id={bodyId} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FCE7E8" />
          <stop offset="52%" stopColor="#F4C8C9" />
          <stop offset="100%" stopColor="#E5B0B2" />
        </radialGradient>
        {/* Curved arc paths for crisp top & bottom seal text */}
        <path id={topArcId} d="M 53,90 A 37,37 0 0,1 127,90" />
        <path id={botArcId} d="M 46.5,90 A 43.5,43.5 0 0,0 133.5,90" />
      </defs>

      {/* Botanical wreath behind wax seal */}
      <path
        d="M90 10C46 10 10 45 10 90C10 135 46 170 90 170C134 170 170 135 170 90C170 45 134 10 90 10Z"
        stroke="var(--sage-medium)"
        strokeWidth="1.4"
        strokeOpacity="0.65"
      />
      <ellipse cx="18" cy="58" rx="5.5" ry="11.5" transform="rotate(24 18 58)" fill="var(--sage-muted)" fillOpacity="0.82" />
      <ellipse cx="12" cy="90" rx="5.5" ry="11.5" transform="rotate(-4 12 90)" fill="var(--sage-medium)" fillOpacity="0.72" />
      <ellipse cx="22" cy="124" rx="5.5" ry="11.5" transform="rotate(-34 22 124)" fill="var(--sage-muted)" fillOpacity="0.82" />
      <ellipse cx="162" cy="58" rx="5.5" ry="11.5" transform="rotate(-24 162 58)" fill="var(--sage-muted)" fillOpacity="0.82" />
      <ellipse cx="168" cy="90" rx="5.5" ry="11.5" transform="rotate(4 168 90)" fill="var(--sage-medium)" fillOpacity="0.72" />
      <ellipse cx="158" cy="124" rx="5.5" ry="11.5" transform="rotate(34 158 124)" fill="var(--sage-muted)" fillOpacity="0.82" />
      <circle cx="32" cy="34" r="8.5" fill="var(--pastel-pink)" />
      <circle cx="32" cy="34" r="3.5" fill="var(--rose-peach-accent)" />
      <circle cx="148" cy="34" r="8.5" fill="var(--pastel-peach)" />
      <circle cx="148" cy="34" r="3.5" fill="var(--rose-peach-accent)" />
      <circle cx="36" cy="146" r="8" fill="var(--pastel-peach)" />
      <circle cx="36" cy="146" r="3" fill="var(--rose-peach-accent)" />
      <circle cx="144" cy="146" r="8" fill="var(--pastel-pink)" />
      <circle cx="144" cy="146" r="3" fill="var(--rose-peach-accent)" />

      {/* Organic Pastel Pink Wax Seal (#F4C8C9) */}
      <circle cx="90" cy="94" r="63" fill="#3A4D3E" fillOpacity="0.14" />
      <path
        d="M90 26C113 25 131 33 144 47C154 59 158 74 156 90C158 109 151 127 137 140C124 152 107 156 90 154C72 156 55 151 42 139C29 126 23 108 25 90C23 71 29 54 43 41C56 29 73 25 90 26Z"
        fill={`url(#${rimId})`}
      />
      <circle cx="90" cy="90" r="53" fill="none" stroke="#CA8F91" strokeWidth="1.5" strokeOpacity="0.55" />
      <circle cx="90" cy="90" r="49.5" fill={`url(#${bodyId})`} stroke="#FFF6F6" strokeWidth="1.2" />
      <circle cx="90" cy="90" r="46.5" fill="none" stroke="#D8A0A2" strokeWidth="0.7" strokeOpacity="0.5" />

      {/* Curved Top Text */}
      <text
        fontFamily="var(--font-jakarta), sans-serif"
        fontSize="7.6"
        fontWeight="700"
        letterSpacing="1.8"
        textAnchor="middle"
        fill="#FFF6F6"
        fillOpacity="0.8"
        dy="0.7"
      >
        <textPath href={`#${topArcId}`} startOffset="50%">
          {ENGAGEMENT_EVENT.eventType}
        </textPath>
      </text>
      <text
        fontFamily="var(--font-jakarta), sans-serif"
        fontSize="7.6"
        fontWeight="700"
        letterSpacing="1.8"
        textAnchor="middle"
        fill="#2A3C2F"
      >
        <textPath href={`#${topArcId}`} startOffset="50%">
          {ENGAGEMENT_EVENT.eventType}
        </textPath>
      </text>

      {/* Center Monogram */}
      <text
        x="90"
        y="99.8"
        textAnchor="middle"
        fontFamily="var(--font-cormorant), Georgia, serif"
        fontStyle="italic"
        fontSize="30"
        fontWeight="700"
        letterSpacing="1.8"
        fill="#FFF6F6"
        fillOpacity="0.85"
      >
        {COUPLE.monogram}
      </text>
      <text
        x="90"
        y="98.8"
        textAnchor="middle"
        fontFamily="var(--font-cormorant), Georgia, serif"
        fontStyle="italic"
        fontSize="30"
        fontWeight="700"
        letterSpacing="1.8"
        fill="#2A3C2F"
      >
        {COUPLE.monogram}
      </text>

      {/* Curved Bottom Text */}
      <text
        fontFamily="var(--font-jakarta), sans-serif"
        fontSize="7.6"
        fontWeight="700"
        letterSpacing="1.7"
        textAnchor="middle"
        fill="#FFF6F6"
        fillOpacity="0.8"
        dy="0.7"
      >
        <textPath href={`#${botArcId}`} startOffset="50%">
          {ENGAGEMENT_EVENT.shortDate}
        </textPath>
      </text>
      <text
        fontFamily="var(--font-jakarta), sans-serif"
        fontSize="7.6"
        fontWeight="700"
        letterSpacing="1.7"
        textAnchor="middle"
        fill="#2A3C2F"
      >
        <textPath href={`#${botArcId}`} startOffset="50%">
          {ENGAGEMENT_EVENT.shortDate}
        </textPath>
      </text>
    </svg>
  );
};

