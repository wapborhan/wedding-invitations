import { useEffect, useRef, useState } from 'react';
import { CelebrationsSection } from './components/CelebrationsSection';
import { ClosingSection } from './components/ClosingSection';
import { CountdownSection } from './components/CountdownSection';
import { FamiliesSection } from './components/FamiliesSection';
import { FooterSection } from './components/FooterSection';
import { GateOverlay, type GateState } from './components/GateOverlay';
import { HeroSection } from './components/HeroSection';
import { ToranDivider } from './components/MarigoldSvg';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollReveal } from './components/ScrollReveal';
import { TopControls } from './components/TopControls';
import { VenueSection } from './components/VenueSection';
import { COPY, type Language } from './data/weddingData';

export function App() {
  const [lang, setLang] = useState<Language>('en');
  const [gateState, setGateState] = useState<GateState>('closed');
  const openTimerRef = useRef<number | null>(null);

  const copy = COPY[lang];

  useEffect(() => {
    document.body.classList.toggle('lang-bn', lang === 'bn');
  }, [lang]);

  useEffect(() => {
    document.body.classList.toggle('gate-locked', gateState !== 'open');
  }, [gateState]);

  useEffect(() => {
    return () => {
      if (openTimerRef.current !== null) {
        clearTimeout(openTimerRef.current);
      }
      document.body.classList.remove('lang-bn', 'gate-locked');
    };
  }, []);

  const handleOpenGate = () => {
    if (gateState !== 'closed') return;
    setGateState('opening');
    openTimerRef.current = window.setTimeout(() => {
      setGateState('open');
    }, 900);
  };

  const handleReplayGate = () => {
    if (openTimerRef.current !== null) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
    setGateState('closed');
  };

  return (
    <>
      <ScrollProgress />
      <TopControls
        lang={lang}
        onChangeLang={setLang}
        showReplayGate={gateState === 'open'}
        onReplayGate={handleReplayGate}
        replayLabel={copy.replayGate}
      />

      <GateOverlay
        gateState={gateState}
        onOpenGate={handleOpenGate}
        copy={copy}
      />

      <div className="page-shell">
        <HeroSection copy={copy} isGateOpen={gateState === 'open'} />
        <ToranDivider />
        <ScrollReveal>
          <CountdownSection copy={copy} />
        </ScrollReveal>
        <ToranDivider />
        <ScrollReveal>
          <CelebrationsSection copy={copy} />
        </ScrollReveal>
        <ToranDivider />
        <ScrollReveal>
          <FamiliesSection copy={copy} />
        </ScrollReveal>
        <ToranDivider />
        <ScrollReveal>
          <VenueSection copy={copy} />
        </ScrollReveal>
        <ToranDivider />
        <ScrollReveal>
          <ClosingSection copy={copy} />
        </ScrollReveal>
        <ScrollReveal>
          <FooterSection copy={copy} />
        </ScrollReveal>
      </div>
    </>
  );
}

export default App;
