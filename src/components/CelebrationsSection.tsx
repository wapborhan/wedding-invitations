import { useEffect, useRef, useState } from 'react';
import {
  WEDDING_EVENTS,
  type WeddingCopy,
  type WeddingEvent,
} from '../data/weddingData';
import { EventFringeSvg, EventSwagSvg } from './MarigoldSvg';
import { ScrollReveal } from './ScrollReveal';

interface CelebrationsSectionProps {
  copy: WeddingCopy;
}

function downloadIcsFile(event: WeddingEvent) {
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Wedding Invitation//EN',
    'BEGIN:VEVENT',
    `DTSTART:${event.calendarStart}`,
    `DTEND:${event.calendarEnd}`,
    `SUMMARY:${event.calendarTitle}`,
    `LOCATION:${event.calendarLocation}`,
    `DESCRIPTION:${event.description}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${event.calendarTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function CelebrationsSection({ copy }: CelebrationsSectionProps) {
  const [toastById, setToastById] = useState<Record<string, string>>({});
  const timersRef = useRef<Record<string, number>>({});

  const handleAddToCalendar = (event: WeddingEvent) => {
    downloadIcsFile(event);

    const shortTitle = event.calendarTitle.split(' — ')[0];
    setToastById((prev) => ({
      ...prev,
      [event.id]: `Calendar invite downloaded for ${shortTitle}!`,
    }));

    if (timersRef.current[event.id]) {
      clearTimeout(timersRef.current[event.id]);
    }
    timersRef.current[event.id] = window.setTimeout(() => {
      setToastById((prev) => ({ ...prev, [event.id]: '' }));
    }, 3000);
  };

  useEffect(() => {
    const timers = timersRef.current;
    return () => {
      Object.values(timers).forEach((id) => clearTimeout(id));
    };
  }, []);

  return (
    <section
      className="celebrations-section"
      id="celebrations"
      aria-label="Wedding celebrations"
    >
      <p className="section-eyebrow">
        <span className="marigold-dot" aria-hidden="true" />
        <span>{copy.celebEyebrow}</span>
        <span className="marigold-dot" aria-hidden="true" />
      </p>
      <h2 className="section-title">{copy.celebTitle}</h2>

      <div className="event-stack">
        {WEDDING_EVENTS.map((event, idx) => (
          <ScrollReveal
            key={event.id}
            delay={idx * 120}
            className="event-unit-reveal"
          >
            <article className="event-unit">
            <EventSwagSvg />
            <div className="event-rod" />
            <EventFringeSvg />
            <div className="event-card">
              <div className="event-grid">
                <div className="event-date-col">
                  <p className="event-day-num">{event.dayNum}</p>
                  <p className="event-month">{event.month}</p>
                  <p className="event-weekday">{event.weekday}</p>
                </div>
                <div className="event-info-col">
                  <p className="event-day-label">{event.dayLabel}</p>
                  <h3 className="event-name">{event.name}</h3>
                  <p className="event-desc">{event.description}</p>
                  <p className="event-time">{event.time}</p>
                  <p className="event-venue">{event.venue}</p>
                  <p className="event-address">{event.address}</p>
                </div>
              </div>

              <div className="event-actions">
                <a
                  className="btn-maps"
                  href={event.mapsUrl}
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
                <button
                  type="button"
                  className="btn-calendar"
                  onClick={() => handleAddToCalendar(event)}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M16 3v4M8 3v4M3 10h18" />
                  </svg>
                  <span>{copy.addToCalendar}</span>
                </button>
              </div>
              <p className="event-toast" aria-live="polite">
                {toastById[event.id] ?? ''}
              </p>
            </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
