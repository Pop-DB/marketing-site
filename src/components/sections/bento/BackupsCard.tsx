import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

const whoopsPhrases = [
  'Whoops', 'Oopsie', 'My bad', 'Uh oh', 'Yikes', 'Oops', 'Dang it', 'Shoot', 'Ouch',
  'Not ideal', 'Doh', 'Fudge', 'Eek', 'Oof', 'Nope', 'Crud', 'Rats', 'Welp',
  'Oh dear', 'Yup, that\'s wrong', 'Nah', 'Hmm', 'Ruh-roh', 'Oh no', 'Oopsies',
  'Wait what', 'That\'s not right', 'Nope nope', 'Ahhh', 'Uh huh', 'Oh boy'
];

function BackupsCard() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [dotPosition, setDotPosition] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerAnimation = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setPhraseIndex((prev) => (prev + 1) % whoopsPhrases.length);

    // Slide dot left
    setDotPosition(-33.33);

    // Slide back after 1.5s
    setTimeout(() => {
      setDotPosition(0);
    }, 1500);

    // Reset animation state
    animationTimeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 2500);
  };

  useEffect(() => {
    if (isHovering && !isAnimating) {
      intervalRef.current = setTimeout(() => {
        triggerAnimation();
      }, 300);
    }

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [isHovering, isAnimating]);

  return (
    <div
      className="reveal reveal-delay-1 md:col-span-4 group relative bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-500 p-4 sm:p-6 md:p-8"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="w-10 h-10 bg-canvas border border-border rounded-lg flex items-center justify-center mb-4 text-obsidian">
        <Icon icon="solar:history-linear" width={20} />
      </div>
      <h3 className="text-lg font-semibold text-obsidian mb-2">Backups</h3>
      <p className="text-sm text-subtle mb-6">
        Recover instantly. Built-in backups and instant rollbacks mean you can safely undo changes.
      </p>
      <div className="flex flex-col gap-3">
        <div id="backup-timeline" className="h-16 bg-canvas rounded-lg border border-border/50 relative flex items-center justify-between px-6">
          <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-border"></div>
          <div className="backup-dot w-3 h-3 bg-border rounded-full relative z-10"></div>
          <div className="backup-dot w-3 h-3 bg-border rounded-full relative z-10"></div>
          <div
            id="backup-now"
            className="w-4 h-4 bg-obsidian border-2 border-white rounded-full relative z-20 shadow-sm transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${dotPosition}%)` }}
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] bg-obsidian text-white px-1.5 py-0.5 rounded whitespace-nowrap">Now</div>
          </div>
          <div className="backup-dot w-3 h-3 bg-border/30 rounded-full relative z-10"></div>
        </div>
        <button
          id="whoops-btn"
          className="self-start px-3 py-1.5 bg-canvas border border-border rounded-lg text-xs font-medium text-obsidian hover:bg-white hover:shadow-sm active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
          onClick={triggerAnimation}
        >
          <Icon icon="solar:undo-left-linear" width={14} />
          <span id="whoops-label">{whoopsPhrases[phraseIndex]}</span>
        </button>
      </div>
    </div>
  );
}

export default BackupsCard;
