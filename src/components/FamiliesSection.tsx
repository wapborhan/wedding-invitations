import type { WeddingCopy } from '../data/weddingData';
import {
  ConnectorStemSvg,
  FamiliesBottomFringeSvg,
  FamiliesGarlandHorizontalOverlay,
  FamiliesGarlandOverlay,
} from './MarigoldSvg';

interface FamiliesSectionProps {
  copy: WeddingCopy;
}

export function FamiliesSection({ copy }: FamiliesSectionProps) {
  return (
    <section
      className="families-section"
      id="families"
      aria-label="Our families"
    >
      <p className="section-eyebrow">
        <span className="marigold-dot" aria-hidden="true" />
        <span>{copy.famEyebrow}</span>
        <span className="marigold-dot" aria-hidden="true" />
      </p>
      <h2 className="section-title">
        {copy.famTitleLines[0]}
        <br />
        {copy.famTitleLines[1]}
      </h2>

      <div className="families-hanging">
        <div className="gold-rod-wrap" aria-hidden="true">
          <span className="gold-finial" />
          <span className="gold-rod" />
          <span className="gold-finial" />
        </div>

        <div className="families-frame">
          <FamiliesGarlandOverlay />
          <FamiliesGarlandHorizontalOverlay />

          <article className="family-card">
            <p className="family-role">{copy.groomRole}</p>
            <h3 className="family-name">{copy.groomFirst}</h3>
            <p className="family-parents">
              {copy.groomParents[0]}
              <br />
              {copy.groomParents[1]}
            </p>
            <p className="family-city">{copy.ardenCity}</p>
          </article>

          <div className="family-connector" aria-hidden="true">
            <ConnectorStemSvg />
            <div className="gold-medallion">&amp;</div>
          </div>

          <article className="family-card">
            <p className="family-role">{copy.brideRole}</p>
            <h3 className="family-name">{copy.brideFirst}</h3>
            <p className="family-parents">
              {copy.brideParents[0]}
              <br />
              {copy.brideParents[1]}
            </p>
            <p className="family-city">{copy.lakesideCity}</p>
          </article>
        </div>

        <FamiliesBottomFringeSvg />
      </div>
    </section>
  );
}
