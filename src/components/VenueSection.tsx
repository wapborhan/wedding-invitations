import type { WeddingCopy } from '../data/weddingData';
import { VenueGarlandSvg } from './MarigoldSvg';

interface VenueSectionProps {
  copy: WeddingCopy;
}

export function VenueSection({ copy }: VenueSectionProps) {
  return (
    <section
      className="venue-section"
      id="venue"
      aria-label="The wedding venue"
    >
      <p className="section-eyebrow">
        <span className="marigold-dot" aria-hidden="true" />
        <span>{copy.venueEyebrow}</span>
        <span className="marigold-dot" aria-hidden="true" />
      </p>

      <div className="venue-pavilion">
        <div className="venue-lintel">
          <div className="venue-lintel-inner">
            <h2 className="venue-title">{copy.venueTitle}</h2>
          </div>
        </div>

        <div className="venue-stage">
          <div className="venue-pillar venue-pillar-left" aria-hidden="true" />
          <div
            className="venue-pillar venue-pillar-right"
            aria-hidden="true"
          />
          <VenueGarlandSvg />

          <div className="venue-card">
            <p className="venue-address-title">{copy.venueAddressTitle}</p>
            <p className="venue-evening">
              {copy.venueEveningLines[0]}
              <br />
              {copy.venueEveningLines[1]}
            </p>
            <p className="venue-parking">
              {copy.venueParkingLines[0]}
              <br />
              {copy.venueParkingLines[1]}
            </p>
            <a
              className="btn-maps"
              href="https://www.google.com/maps/search/?api=1&query=The+Rose+Pavilion+Garden+Avenue+Arden"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M12 21s-6-5.3-6-10a6 6 0 1 1 12 0c0 4.7-6 10-6 10z" />
                <circle cx="12" cy="11" r="2.2" />
              </svg>
              <span>{copy.openInMaps}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
