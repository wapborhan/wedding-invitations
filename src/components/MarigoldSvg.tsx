import type { ReactNode } from 'react';
import toranGarlandImg from '../assets/toran-garland.jpg';

export type FlowerTone = 'orange' | 'gold' | 'rose';
export type BouquetType = 'orange' | 'gold' | 'rose' | 'mixed';

const PALETTES: Record<FlowerTone, [string, string, string, string]> = {
  orange: ['#b84f08', '#d96b14', '#ee8b26', '#f6b23e'],
  gold: ['#b97c10', '#de9c1f', '#f0b936', '#fae078'],
  rose: ['#7d2838', '#a83d50', '#c95b6e', '#df8494'],
};

interface MarigoldFlowerProps {
  cx: number;
  cy: number;
  r: number;
  tone?: FlowerTone;
}

export function MarigoldFlower({
  cx,
  cy,
  r,
  tone = 'orange',
}: MarigoldFlowerProps) {
  const colors = PALETTES[tone];
  const outerPetals = 10;
  const innerPetals = 7;

  return (
    <g>
      {/* Deep base shadow */}
      <circle cx={cx} cy={cy} r={r * 0.96} fill={colors[0]} />

      {/* Outer ruffled petal ring */}
      {Array.from({ length: outerPetals }, (_, i) => {
        const deg = i * (360 / outerPetals) + ((cx * 7) % 18);
        const rad = (deg * Math.PI) / 180;
        const px = cx + Math.cos(rad) * (r * 0.48);
        const py = cy + Math.sin(rad) * (r * 0.48);
        return (
          <ellipse
            key={`o-${i}`}
            cx={px}
            cy={py}
            rx={r * 0.42}
            ry={r * 0.3}
            fill={colors[1]}
            transform={`rotate(${deg} ${px} ${py})`}
          />
        );
      })}

      {/* Middle bright petal ring */}
      {Array.from({ length: innerPetals }, (_, i) => {
        const deg = i * (360 / innerPetals) + 15;
        const rad = (deg * Math.PI) / 180;
        const px = cx + Math.cos(rad) * (r * 0.28);
        const py = cy + Math.sin(rad) * (r * 0.28);
        return (
          <ellipse
            key={`m-${i}`}
            cx={px}
            cy={py}
            rx={r * 0.34}
            ry={r * 0.25}
            fill={colors[2]}
            transform={`rotate(${deg} ${px} ${py})`}
          />
        );
      })}

      {/* Sunlit inner tuft */}
      <circle
        cx={cx - r * 0.08}
        cy={cy - r * 0.08}
        r={r * 0.36}
        fill={colors[2]}
      />
      <circle
        cx={cx - r * 0.12}
        cy={cy - r * 0.12}
        r={r * 0.2}
        fill={colors[3]}
      />
    </g>
  );
}

interface LeafPairProps {
  cx: number;
  cy: number;
  size: number;
}

export function LeafPair({ cx, cy, size }: LeafPairProps) {
  const leftX = cx - size * 0.55;
  const rightX = cx + size * 0.55;
  const y = cy + size * 0.2;

  return (
    <>
      <ellipse
        cx={leftX}
        cy={y}
        rx={size * 0.55}
        ry={size * 0.28}
        fill="#4a6d3c"
        transform={`rotate(-30 ${leftX} ${y})`}
      />
      <ellipse
        cx={rightX}
        cy={y}
        rx={size * 0.55}
        ry={size * 0.28}
        fill="#3d5e31"
        transform={`rotate(30 ${rightX} ${y})`}
      />
    </>
  );
}

export function HeroGarland() {
  const count = 34;
  const nodes: ReactNode[] = [];

  for (let i = 0; i <= count; i++) {
    const t = i / count;
    const x = 16 + t * 436;
    const sag = Math.sin(t * Math.PI) * 32;
    const y = 18 + sag;
    const isRose = i === 0 || i === count || i === 10 || i === 17 || i === 24;
    nodes.push(
      <MarigoldFlower
        key={`hero-${i}`}
        cx={x}
        cy={y}
        r={isRose ? 9.5 : 10.5}
        tone={isRose ? 'rose' : 'orange'}
      />,
    );
  }

  return (
    <svg className="hero-garland" viewBox="0 0 468 95" aria-hidden="true">
      {nodes}
      {[16, 452].map((x) => (
        <g key={`tassel-${x}`}>
          <MarigoldFlower cx={x} cy={31} r={9} tone="orange" />
          <MarigoldFlower cx={x} cy={43} r={8.5} tone="orange" />
          <LeafPair cx={x} cy={53} size={9} />
          <MarigoldFlower cx={x} cy={54} r={8} tone="rose" />
        </g>
      ))}
    </svg>
  );
}

export function ToranDivider() {
  return (
    <img
      src={toranGarlandImg}
      alt=""
      className="toran-divider toran-divider-img"
      aria-hidden="true"
    />
  );
}

const BOUQUET_CONFIGS: Record<BouquetType, FlowerTone[]> = {
  orange: ['orange', 'orange', 'orange', 'gold', 'orange', 'orange', 'rose'],
  gold: ['gold', 'gold', 'gold', 'orange', 'gold', 'gold', 'gold'],
  rose: ['rose', 'gold', 'rose', 'rose', 'gold', 'rose', 'rose'],
  mixed: ['orange', 'gold', 'rose', 'orange', 'gold', 'rose', 'gold'],
};

const BOUQUET_SPOTS: [number, number, number][] = [
  [34, 34, 11],
  [55, 22, 12],
  [76, 34, 11],
  [24, 44, 10],
  [45, 38, 12],
  [65, 38, 12],
  [86, 44, 10],
  [40, 50, 10],
  [55, 48, 11],
  [70, 50, 10],
];

export function BouquetSvg({ type }: { type: BouquetType }) {
  const tones = BOUQUET_CONFIGS[type];

  return (
    <svg className="bouquet-svg" viewBox="0 0 110 88" aria-hidden="true">
      <ellipse
        cx={34}
        cy={46}
        rx={22}
        ry={12}
        fill="#466939"
        transform="rotate(-28 34 46)"
      />
      <ellipse
        cx={76}
        cy={46}
        rx={22}
        ry={12}
        fill="#3c5c30"
        transform="rotate(28 76 46)"
      />
      <path
        d="M44,54 L50,82 M55,54 L55,84 M66,54 L60,82"
        stroke="#4d703e"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {BOUQUET_SPOTS.map(([x, y, r], i) => (
        <MarigoldFlower
          key={i}
          cx={x}
          cy={y}
          r={r}
          tone={tones[i % tones.length]}
        />
      ))}
      <path d="M42,67 Q55,64 68,67 L66,73 Q55,70 44,73 Z" fill="#c63c5d" />
      <ellipse
        cx={43}
        cy={69}
        rx={8}
        ry={4.5}
        fill="#d95070"
        transform="rotate(-18 43 69)"
      />
      <ellipse
        cx={67}
        cy={69}
        rx={8}
        ry={4.5}
        fill="#d95070"
        transform="rotate(18 67 69)"
      />
      <circle cx={55} cy={69} r={4} fill="#a82b4a" />
    </svg>
  );
}

export function EventSwagSvg() {
  const ropeYs = [30, 41, 52, 63];
  const swagCount = 30;

  return (
    <svg className="event-swag-svg" viewBox="0 0 460 74" aria-hidden="true">
      {[44, 416].map((rx) =>
        ropeYs.map((y) => (
          <MarigoldFlower
            key={`rope-${rx}-${y}`}
            cx={rx}
            cy={y}
            r={7.5}
            tone="gold"
          />
        )),
      )}
      {Array.from({ length: swagCount + 1 }, (_, i) => {
        const t = i / swagCount;
        const x = 14 + t * 432;
        const sag = Math.sin(t * Math.PI) * 24;
        const y = 14 + sag;
        const isRose = i === 1 || i === 11 || i === 20 || i === 29;
        return (
          <MarigoldFlower
            key={`swag-${i}`}
            cx={x}
            cy={y}
            r={isRose ? 8.5 : 9.5}
            tone={isRose ? 'rose' : 'orange'}
          />
        );
      })}
    </svg>
  );
}

export function EventFringeSvg() {
  const cols = 19;
  const topCount = 34;

  return (
    <svg className="event-fringe-svg" viewBox="0 0 440 52" aria-hidden="true">
      {Array.from({ length: cols }, (_, i) => {
        const x = 18 + (i / (cols - 1)) * 404;
        const centerDist = Math.abs(i - (cols - 1) / 2);
        const drops = centerDist < 3.5 ? 3 : centerDist < 6.5 ? 2 : 1;
        const tone: FlowerTone = i % 3 === 1 ? 'gold' : 'orange';
        const tipY = 11 + (drops + 1) * 9.5 - 2;

        return (
          <g key={`fringe-col-${i}`}>
            {Array.from({ length: drops }, (_, j) => (
              <MarigoldFlower
                key={j}
                cx={x}
                cy={11 + (j + 1) * 9.5}
                r={5.8}
                tone={tone}
              />
            ))}
            <LeafPair cx={x} cy={tipY} size={6.5} />
            <MarigoldFlower cx={x} cy={tipY} r={5.5} tone="rose" />
          </g>
        );
      })}
      {Array.from({ length: topCount + 1 }, (_, i) => {
        const x = 10 + (i / topCount) * 420;
        const isRose = i % 8 === 4;
        return (
          <MarigoldFlower
            key={`fringe-top-${i}`}
            cx={x}
            cy={11}
            r={isRose ? 6.5 : 7.5}
            tone={isRose ? 'rose' : 'orange'}
          />
        );
      })}
    </svg>
  );
}

export function FamiliesGarlandOverlay() {
  const steps = 42;
  const count = 28;

  return (
    <svg
      className="families-garland-overlay families-garland-vertical"
      viewBox="0 0 440 590"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {[24, 416].map((vx) =>
        Array.from({ length: steps + 1 }, (_, i) => {
          const y = 8 + (i / steps) * 574;
          const mod = i % 9;
          const tone: FlowerTone =
            mod === 4 ? 'rose' : mod >= 6 ? 'gold' : 'orange';
          return (
            <MarigoldFlower
              key={`fam-v-${vx}-${i}`}
              cx={vx}
              cy={y}
              r={tone === 'rose' ? 7.5 : 8.5}
              tone={tone}
            />
          );
        }),
      )}
      {[24, 336].map((topY) =>
        Array.from({ length: count + 1 }, (_, i) => {
          const t = i / count;
          const x = 32 + t * 376;
          const sag = Math.sin(t * Math.PI) * 10;
          const y = topY + sag;
          const isRose = i === 5 || i === 14 || i === 23;
          const tone: FlowerTone = isRose
            ? 'rose'
            : i % 4 === 2
              ? 'gold'
              : 'orange';
          return (
            <MarigoldFlower
              key={`fam-h-${topY}-${i}`}
              cx={x}
              cy={y}
              r={isRose ? 6.8 : 7.5}
              tone={tone}
            />
          );
        }),
      )}
    </svg>
  );
}

export function FamiliesGarlandHorizontalOverlay() {
  const steps = 22;
  const count = 24;

  return (
    <svg
      className="families-garland-overlay families-garland-horizontal"
      viewBox="0 0 820 310"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {[22, 798].map((vx) =>
        Array.from({ length: steps + 1 }, (_, i) => {
          const y = 10 + (i / steps) * 292;
          const mod = i % 8;
          const tone: FlowerTone =
            mod === 3 ? 'rose' : mod >= 5 ? 'gold' : 'orange';
          return (
            <MarigoldFlower
              key={`famh-v-${vx}-${i}`}
              cx={vx}
              cy={y}
              r={tone === 'rose' ? 7.5 : 8.5}
              tone={tone}
            />
          );
        }),
      )}
      {[
        { xStart: 30, span: 344 },
        { xStart: 446, span: 344 },
      ].map(({ xStart, span }, idx) =>
        Array.from({ length: count + 1 }, (_, i) => {
          const t = i / count;
          const x = xStart + t * span;
          const sag = Math.sin(t * Math.PI) * 9;
          const y = 22 + sag;
          const isRose = i === 4 || i === 12 || i === 20;
          const tone: FlowerTone = isRose
            ? 'rose'
            : i % 4 === 2
              ? 'gold'
              : 'orange';
          return (
            <MarigoldFlower
              key={`famh-top-${idx}-${i}`}
              cx={x}
              cy={y}
              r={isRose ? 6.8 : 7.5}
              tone={tone}
            />
          );
        }),
      )}
    </svg>
  );
}

export function ConnectorStemSvg() {
  return (
    <svg className="connector-stem-svg" viewBox="0 0 36 78" aria-hidden="true">
      {[8, 19, 59, 70].map((y) => (
        <MarigoldFlower key={y} cx={18} cy={y} r={7.2} tone="orange" />
      ))}
    </svg>
  );
}

export function FamiliesBottomFringeSvg() {
  const cols = 15;

  return (
    <svg
      className="families-bottom-fringe"
      viewBox="0 0 400 54"
      aria-hidden="true"
    >
      {Array.from({ length: cols }, (_, i) => {
        const x = 16 + (i / (cols - 1)) * 368;
        const drops = i % 3 === 1 ? 3 : 2;
        const tone: FlowerTone = i % 2 === 0 ? 'orange' : 'gold';
        const tipY = 8 + drops * 10.5 + 1;

        return (
          <g key={`fam-fringe-${i}`}>
            {Array.from({ length: drops }, (_, j) => (
              <MarigoldFlower
                key={j}
                cx={x}
                cy={8 + j * 10.5}
                r={6.2}
                tone={tone}
              />
            ))}
            <LeafPair cx={x} cy={tipY} size={7} />
            <MarigoldFlower cx={x} cy={tipY} r={6.2} tone="rose" />
          </g>
        );
      })}
    </svg>
  );
}

export function VenueGarlandSvg() {
  const pillars = [
    { xStart: 12, xEnd: 54 },
    { xStart: 398, xEnd: 440 },
  ];
  const tasselXs = [95, 160, 226, 292, 357];
  const topCount = 30;

  return (
    <svg
      className="venue-garland-svg"
      viewBox="0 0 452 340"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {pillars.map((pillar, pIdx) =>
        Array.from({ length: 7 }, (_, band) => {
          const yBase = 36 + band * 40;
          const tone: FlowerTone = band % 2 === 0 ? 'gold' : 'orange';
          const flowersInBand = 6;
          return Array.from({ length: flowersInBand }, (_, j) => {
            const t = j / (flowersInBand - 1);
            const x = pillar.xStart + t * (pillar.xEnd - pillar.xStart);
            const y = yBase + t * 18;
            const isRose =
              (band === 6 && j === 2) || (band === 2 && j === 4 && pIdx === 1);
            return (
              <MarigoldFlower
                key={`vp-${pIdx}-${band}-${j}`}
                cx={x}
                cy={y}
                r={isRose ? 6.5 : 7.5}
                tone={isRose ? 'rose' : tone}
              />
            );
          });
        }),
      )}
      {tasselXs.map((tx, idx) => {
        const sagY = 10 + Math.sin(((tx - 32) / 388) * Math.PI) * 26;
        const drops = idx === 2 ? 2 : 1;
        const tipY = sagY + (drops + 1) * 11;
        return (
          <g key={`vt-${tx}`}>
            {Array.from({ length: drops }, (_, j) => (
              <MarigoldFlower
                key={j}
                cx={tx}
                cy={sagY + (j + 1) * 11}
                r={6.2}
                tone={idx % 2 === 0 ? 'gold' : 'orange'}
              />
            ))}
            <LeafPair cx={tx} cy={tipY} size={7} />
            <MarigoldFlower cx={tx} cy={tipY} r={6.2} tone="rose" />
          </g>
        );
      })}
      {Array.from({ length: topCount + 1 }, (_, i) => {
        const t = i / topCount;
        const x = 32 + t * 388;
        const sag = Math.sin(t * Math.PI) * 26;
        const y = 10 + sag;
        const isRose = i === 7 || i === 15 || i === 23;
        return (
          <MarigoldFlower
            key={`vtop-${i}`}
            cx={x}
            cy={y}
            r={isRose ? 7.5 : 8.5}
            tone={isRose ? 'rose' : 'orange'}
          />
        );
      })}
    </svg>
  );
}
