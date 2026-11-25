import type { WeddingCopy } from "../data/weddingData";
import { MarigoldFlower, type FlowerTone } from "./MarigoldSvg";

const URLI_PETALS: [number, number, string, number][] = [
  [102, 72, "#d95070", -14],
  [130, 58, "#e6a622", 18],
  [172, 76, "#c95b6e", -10],
  [235, 64, "#d96b14", 22],
];

const URLI_FLOWERS: [number, number, number, FlowerTone][] = [
  [98, 52, 13, "gold"],
  [196, 40, 14, "orange"],
  [176, 48, 14, "orange"],
  [152, 66, 15, "orange"],
  [188, 76, 15, "gold"],
  [216, 72, 15, "orange"],
  [318, 52, 14, "orange"],
  [286, 62, 14, "gold"],
  [268, 46, 13, "rose"],
  [268, 66, 14, "rose"],
];

export function FooterSection({ copy }: { copy: WeddingCopy }) {
  return (
    <footer className="footer-section" aria-label="Footer">
      <svg className="urli-svg" viewBox="0 0 420 185" aria-hidden="true">
        <defs>
          <linearGradient id="brassRim" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f6e09a" />
            <stop offset="22%" stopColor="#c99532" />
            <stop offset="50%" stopColor="#e9c86d" />
            <stop offset="78%" stopColor="#a87620" />
            <stop offset="100%" stopColor="#6c4711" />
          </linearGradient>
          <linearGradient id="brassBody" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#caa048" />
            <stop offset="16%" stopColor="#f4dc91" />
            <stop offset="44%" stopColor="#c28e2f" />
            <stop offset="72%" stopColor="#9e6d1c" />
            <stop offset="90%" stopColor="#6e4710" />
            <stop offset="100%" stopColor="#8b5e19" />
          </linearGradient>
          <linearGradient id="brassFoot" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8d621c" />
            <stop offset="28%" stopColor="#edd079" />
            <stop offset="65%" stopColor="#a97824" />
            <stop offset="100%" stopColor="#6a4510" />
          </linearGradient>
          <radialGradient id="waterGrad" cx="48%" cy="38%" r="58%">
            <stop offset="0%" stopColor="#65624e" />
            <stop offset="55%" stopColor="#3f3c2e" />
            <stop offset="100%" stopColor="#27251b" />
          </radialGradient>
        </defs>

        <ellipse
          cx={210}
          cy={164}
          rx={135}
          ry={12}
          fill="#d8cbb3"
          opacity="0.72"
        />
        <path
          d="M168,128 L252,128 L272,158 Q210,170 148,158 Z"
          fill="url(#brassFoot)"
        />
        <path
          d="M40,56 C40,126 118,144 210,144 C302,144 380,126 380,56 Z"
          fill="url(#brassBody)"
        />
        <path
          d="M58,86 C100,124 320,124 362,86"
          fill="none"
          stroke="#f7e4a6"
          strokeWidth="2.2"
          opacity="0.48"
        />
        <ellipse cx={210} cy={56} rx={170} ry={44} fill="url(#brassRim)" />
        <ellipse cx={210} cy={58} rx={156} ry={37} fill="url(#waterGrad)" />
        <ellipse
          cx={145}
          cy={64}
          rx={56}
          ry={13}
          fill="none"
          stroke="#9e997e"
          strokeWidth="1"
          opacity="0.35"
        />
        <ellipse
          cx={268}
          cy={62}
          rx={46}
          ry={11}
          fill="none"
          stroke="#9e997e"
          strokeWidth="1"
          opacity="0.35"
        />

        <g>
          {URLI_PETALS.map(([x, y, fill, rot], i) => (
            <ellipse
              key={`petal-${i}`}
              cx={x}
              cy={y}
              rx={4.5}
              ry={2}
              fill={fill}
              transform={`rotate(${rot} ${x} ${y})`}
            />
          ))}
          {URLI_FLOWERS.map(([cx, cy, r, tone], i) => (
            <g key={`flower-${i}`} className="urli-flower">
              <ellipse
                cx={cx}
                cy={cy + r * 0.65}
                rx={r * 1.15}
                ry={r * 0.35}
                fill="none"
                stroke="#b7b093"
                strokeWidth="0.9"
                opacity="0.35"
              />
              <MarigoldFlower cx={cx} cy={cy} r={r} tone={tone} />
            </g>
          ))}
        </g>
      </svg>

      <p className="footer-credit">{copy.footerCredit}</p>
    </footer>
  );
}
