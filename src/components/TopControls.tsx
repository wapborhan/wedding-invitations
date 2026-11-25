import { useEffect, useRef, useState } from 'react';
import { RAGA_NOTES, type Language } from '../data/weddingData';

interface TopControlsProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
  showReplayGate: boolean;
  onReplayGate: () => void;
  replayLabel: string;
}

export function TopControls({
  lang,
  onChangeLang,
  showReplayGate,
  onReplayGate,
  replayLabel,
}: TopControlsProps) {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const musicTimerRef = useRef<number | null>(null);
  const noteIdxRef = useRef(0);

  const playChimeNote = () => {
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(
      RAGA_NOTES[noteIdxRef.current % RAGA_NOTES.length],
      now,
    );
    noteIdxRef.current += 1;

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.08, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.5);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 1.55);
  };

  const toggleMusic = () => {
    if (!isMusicPlaying) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext;
      if (!AudioContextClass) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContextClass();
      }
      if (audioCtxRef.current.state === 'suspended') {
        void audioCtxRef.current.resume();
      }

      setIsMusicPlaying(true);
      playChimeNote();
      musicTimerRef.current = window.setInterval(playChimeNote, 900);
    } else {
      setIsMusicPlaying(false);
      if (musicTimerRef.current !== null) {
        clearInterval(musicTimerRef.current);
        musicTimerRef.current = null;
      }
    }
  };

  useEffect(() => {
    return () => {
      if (musicTimerRef.current !== null) {
        clearInterval(musicTimerRef.current);
      }
      if (audioCtxRef.current) {
        void audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div className="top-controls">
      <div className="top-left-group">
        <button
          type="button"
          className={`icon-pill-btn${isMusicPlaying ? ' is-active' : ''}`}
          onClick={toggleMusic}
          aria-label="Toggle wedding music"
          aria-pressed={isMusicPlaying}
        >
          {isMusicPlaying ? (
            <span className="music-eq" aria-hidden="true">
              <span className="music-eq-bar" />
              <span className="music-eq-bar" />
              <span className="music-eq-bar" />
            </span>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              aria-hidden="true"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
              <line x1="3" y1="3" x2="21" y2="21" />
            </svg>
          )}
        </button>

        <button
          type="button"
          className={`replay-gate-btn${showReplayGate ? ' visible' : ''}`}
          onClick={onReplayGate}
        >
          {replayLabel}
        </button>
      </div>

      <div className="lang-toggle" role="group" aria-label="Language switcher">
        <button
          type="button"
          className={`lang-btn${lang === 'en' ? ' active' : ''}`}
          onClick={() => onChangeLang('en')}
        >
          EN
        </button>
        <button
          type="button"
          className={`lang-btn${lang === 'bn' ? ' active' : ''}`}
          onClick={() => onChangeLang('bn')}
        >
          বাং
        </button>
      </div>
    </div>
  );
}
