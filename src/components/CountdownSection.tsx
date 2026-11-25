import { useEffect, useState } from 'react';
import { WEDDING_DATE, type WeddingCopy } from '../data/weddingData';
import { BouquetSvg, type BouquetType } from './MarigoldSvg';
import { ScrollReveal } from './ScrollReveal';

interface CountdownSectionProps {
  copy: WeddingCopy;
}

interface CountdownTime {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  isDone: boolean;
}

function padTwo(num: number): string {
  return String(Math.max(0, num)).padStart(2, '0');
}

function getTimeRemaining(): CountdownTime {
  const diffMs = WEDDING_DATE.getTime() - Date.now();
  if (diffMs <= 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      isDone: true,
    };
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days: padTwo(days),
    hours: padTwo(hours),
    minutes: padTwo(minutes),
    seconds: padTwo(seconds),
    isDone: false,
  };
}

export function CountdownSection({ copy }: CountdownSectionProps) {
  const [time, setTime] = useState<CountdownTime>(getTimeRemaining);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pedestals: {
    key: string;
    label: string;
    value: string;
    bouquet: BouquetType;
    pillarClass: string;
  }[] = [
    {
      key: 'days',
      label: copy.countdownUnits[0],
      value: time.days,
      bouquet: 'orange',
      pillarClass: 'pillar-days',
    },
    {
      key: 'hours',
      label: copy.countdownUnits[1],
      value: time.hours,
      bouquet: 'gold',
      pillarClass: 'pillar-hours',
    },
    {
      key: 'minutes',
      label: copy.countdownUnits[2],
      value: time.minutes,
      bouquet: 'rose',
      pillarClass: 'pillar-minutes',
    },
    {
      key: 'seconds',
      label: copy.countdownUnits[3],
      value: time.seconds,
      bouquet: 'mixed',
      pillarClass: 'pillar-seconds',
    },
  ];

  return (
    <section
      className="countdown-section"
      id="countdown"
      aria-label="Wedding countdown"
    >
      <p className="section-eyebrow">
        <span className="marigold-dot" aria-hidden="true" />
        <span>{copy.countdownEyebrow}</span>
        <span className="marigold-dot" aria-hidden="true" />
      </p>
      <h2 className="section-title">{copy.countdownTitle}</h2>

      <div className="pedestals-row">
        {pedestals.map((item, idx) => (
          <ScrollReveal key={item.key} delay={idx * 90} className="pedestal-reveal">
            <div className="pedestal-col">
              <BouquetSvg type={item.bouquet} />
              <div className="count-tag">
                <div className="count-tag-inner">
                  <span className="count-num">{item.value}</span>
                </div>
              </div>
              <div className={`pillar ${item.pillarClass}`}>
                <span className="pillar-label">{item.label}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <p className="countdown-caption">{copy.countdownCaption}</p>
      {time.isDone && (
        <p className="countdown-done">{copy.countdownDone}</p>
      )}
    </section>
  );
}
