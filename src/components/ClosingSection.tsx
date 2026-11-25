import type { WeddingCopy } from '../data/weddingData';

interface ClosingSectionProps {
  copy: WeddingCopy;
}

export function ClosingSection({ copy }: ClosingSectionProps) {
  return (
    <section
      className="closing-section"
      id="closing"
      aria-label="Closing message"
    >
      <div className="closing-arch">
        <div className="closing-arch-inner">
          <h2 className="closing-title">
            {copy.closingTitleLines[0]}
            <br />
            {copy.closingTitleLines[1]}
          </h2>
          <p className="closing-message">{copy.closingMessage}</p>
          <p className="closing-signoff">{copy.closingSignoff}</p>
        </div>
      </div>
    </section>
  );
}
