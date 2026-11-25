import heroGardenImg from '../assets/hero-garden.jpg';
import type { WeddingCopy } from '../data/weddingData';
import { HeroGarland } from './MarigoldSvg';

interface HeroSectionProps {
  copy: WeddingCopy;
  isGateOpen: boolean;
}

export function HeroSection({ copy, isGateOpen }: HeroSectionProps) {
  const handleScrollDown = () => {
    document
      .getElementById('countdown')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="hero">
      <img
        src={heroGardenImg}
        alt=""
        className="garden-backdrop-img"
        aria-hidden="true"
      />
      <div className="garden-backdrop-scrim" aria-hidden="true" />

      <div className={`tablet-wrapper${isGateOpen ? ' hero-entered' : ''}`}>
        <HeroGarland />

        <main className="hero-tablet">
          <div className="tablet-frame">
            <div className="tablet-frame-inner">
              <p className="eyebrow-top">{copy.eyebrowTop}</p>

              <h1 className="couple-names">
                {copy.groomFirst}
                <span className="amp">&amp;</span>
                {copy.brideFirst}
              </h1>

              <p className="invite-line">
                {copy.inviteLines[0]}
                <br />
                {copy.inviteLines[1]}
              </p>

              <p className="date-line">
                <span>{copy.heroDay}</span>
                <span className="date-diamond" aria-hidden="true" />
                <span>{copy.heroDate}</span>
              </p>
              <p className="location-line">{copy.heroLocation}</p>
            </div>
          </div>
        </main>

        <div className="tablet-plinth" />
      </div>

      <div className="hero-steps">
        <div className="step-bar" />
        <div className="step-bar" />
        <div className="step-bar" />

        <svg
          className="petals-svg"
          viewBox="0 0 540 84"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <ellipse
            cx={145}
            cy={14}
            rx={5}
            ry={2.2}
            fill="#d96b14"
            transform="rotate(-12 145 14)"
          />
          <ellipse
            cx={195}
            cy={10}
            rx={4}
            ry={2}
            fill="#e6a622"
            transform="rotate(18 195 10)"
          />
          <ellipse
            cx={220}
            cy={26}
            rx={4.5}
            ry={2}
            fill="#b84a5e"
            transform="rotate(-8 220 26)"
          />
          <ellipse
            cx={322}
            cy={18}
            rx={4.5}
            ry={2}
            fill="#d96b14"
            transform="rotate(15 322 18)"
          />
          <ellipse
            cx={388}
            cy={46}
            rx={5}
            ry={2.2}
            fill="#e6a622"
            transform="rotate(-15 388 46)"
          />
          <ellipse
            cx={112}
            cy={54}
            rx={4.5}
            ry={2}
            fill="#d96b14"
            transform="rotate(20 112 54)"
          />
          <ellipse
            cx={458}
            cy={36}
            rx={4}
            ry={2}
            fill="#b84a5e"
            transform="rotate(-10 458 36)"
          />
        </svg>

        <button
          type="button"
          className="scroll-pill"
          onClick={handleScrollDown}
          aria-label="Scroll to wedding countdown"
        />
      </div>
    </header>
  );
}
