import type { KeyboardEvent } from 'react';
import type { WeddingCopy } from '../data/weddingData';
import { LeafPair, MarigoldFlower, type FlowerTone } from './MarigoldSvg';

export type GateState = 'closed' | 'opening' | 'open';

interface GateOverlayProps {
  gateState: GateState;
  onOpenGate: () => void;
  copy: WeddingCopy;
}

function CurtainSvg({ isRight }: { isRight: boolean }) {
  const strands = 9;

  return (
    <svg
      className="curtain-svg"
      viewBox="0 0 180 420"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {Array.from({ length: strands }, (_, col) => {
        const x = 10 + (col / (strands - 1)) * 160;
        const tone: FlowerTone = col % 3 === 1 ? 'gold' : 'orange';
        const normX = isRight ? col / strands : 1 - col / strands;

        return (
          <g key={`strand-${col}`}>
            {Array.from({ length: 29 }, (_, row) => {
              const y = 8 + row * 14.2;
              const isRoseBand =
                Math.abs(row - (9 + Math.round(normX * 3))) === 0 ||
                Math.abs(row - (21 + Math.round(normX * 2))) === 0;
              return (
                <MarigoldFlower
                  key={row}
                  cx={x}
                  cy={y}
                  r={isRoseBand ? 6.8 : 7.6}
                  tone={isRoseBand ? 'rose' : tone}
                />
              );
            })}
            <LeafPair cx={x} cy={412} size={6} />
            <MarigoldFlower cx={x} cy={412} r={6.2} tone="rose" />
          </g>
        );
      })}
    </svg>
  );
}

function SidePillarFlowers() {
  return (
    <>
      {Array.from({ length: 6 }, (_, i) => (
        <svg key={i} className="pillar-flower-dot" viewBox="0 0 24 24">
          {Array.from({ length: 8 }, (_, p) => (
            <ellipse
              key={p}
              cx={12}
              cy={6}
              rx={1.6}
              ry={4.5}
              fill="#9e2e3c"
              transform={`rotate(${p * 45} 12 12)`}
            />
          ))}
          <circle cx={12} cy={12} r={2.5} fill="#d9a441" />
        </svg>
      ))}
    </>
  );
}

function LotusRosette({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <circle
        cx={24}
        cy={24}
        r={22}
        fill="#f7f1e3"
        stroke="#cbb384"
        strokeWidth="1.4"
      />
      {Array.from({ length: 8 }, (_, p) => (
        <ellipse
          key={p}
          cx={24}
          cy={12}
          rx={3.4}
          ry={8.5}
          fill="#a5303e"
          transform={`rotate(${p * 45} 24 24)`}
        />
      ))}
      <circle cx={24} cy={24} r={4} fill="#e0b252" />
    </svg>
  );
}

export function GateOverlay({ gateState, onOpenGate, copy }: GateOverlayProps) {
  const overlayClass = [
    'gate-overlay',
    gateState !== 'closed' ? 'is-opening' : '',
    gateState === 'open' ? 'is-hidden' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const handlePortalKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpenGate();
    }
  };

  return (
    <div
      className={overlayClass}
      role="dialog"
      aria-modal="true"
      aria-label="Wedding entrance gate"
      aria-hidden={gateState === 'open'}
    >
      <div className="gate-shell">
        <div className="gate-sky" aria-hidden="true">
          <svg
            className="gate-finial-svg gate-finial-left"
            viewBox="0 0 46 54"
          >
            <defs>
              <linearGradient id="finialGold" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#c48e29" />
                <stop offset="35%" stopColor="#fae192" />
                <stop offset="75%" stopColor="#b88121" />
                <stop offset="100%" stopColor="#7c5312" />
              </linearGradient>
            </defs>
            <path
              d="M23,2 C26,12 36,19 36,30 C36,38 30,43 27,46 L34,52 L12,52 L19,46 C16,43 10,38 10,30 C10,19 20,12 23,2 Z"
              fill="url(#finialGold)"
            />
          </svg>
          <svg
            className="gate-finial-svg gate-finial-right"
            viewBox="0 0 46 54"
          >
            <path
              d="M23,2 C26,12 36,19 36,30 C36,38 30,43 27,46 L34,52 L12,52 L19,46 C16,43 10,38 10,30 C10,19 20,12 23,2 Z"
              fill="url(#finialGold)"
            />
          </svg>
        </div>

        <div className="gate-cornice" aria-hidden="true">
          <div className="gate-dots-row">
            {Array.from({ length: 20 }, (_, i) => (
              <span key={i} className="gate-dot-inlay" />
            ))}
          </div>
        </div>

        <div className="gate-vine-band" aria-hidden="true">
          <svg
            viewBox="0 0 540 28"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
          >
            <path
              d="M0,14 Q22,2 44,14 T88,14 T132,14 T176,14 T220,14 T264,14 T308,14 T352,14 T396,14 T440,14 T484,14 T528,14"
              fill="none"
              stroke="#4a6345"
              strokeWidth="1.2"
            />
            {Array.from({ length: 12 }, (_, i) => {
              const x = 22 + i * 44;
              return (
                <g key={x}>
                  <circle cx={x} cy={14} r={7} fill="#8f2836" opacity="0.85" />
                  <circle cx={x} cy={14} r={2.4} fill="#e6b85c" />
                </g>
              );
            })}
          </svg>
        </div>

        <div className="gate-body">
          <div className="gate-side-pillar" aria-hidden="true">
            <SidePillarFlowers />
          </div>

          <div className="gate-center-wall">
            <div className="gate-wall-border" aria-hidden="true" />

            <LotusRosette className="spandrel-lotus spandrel-left" />
            <LotusRosette className="spandrel-lotus spandrel-right" />

            <div
              className="arch-portal"
              role="button"
              tabIndex={0}
              aria-label="Tap to open the wedding gate"
              onClick={onOpenGate}
              onKeyDown={handlePortalKeyDown}
            >
              <div className="curtain-half curtain-left">
                <CurtainSvg isRight={false} />
              </div>
              <div className="curtain-half curtain-right">
                <CurtainSvg isRight />
              </div>

              <div className="gate-plaque">
                <p className="gate-plaque-names">{copy.plaqueNames}</p>
                <p className="gate-plaque-date">{copy.plaqueDate}</p>
              </div>
            </div>
          </div>

          <div className="gate-side-pillar" aria-hidden="true">
            <SidePillarFlowers />
          </div>
        </div>

        <div className="gate-floor">
          <button
            type="button"
            className="open-gate-btn"
            onClick={onOpenGate}
          >
            <span className="open-gate-dot" aria-hidden="true" />
            <span>{copy.openGate}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
