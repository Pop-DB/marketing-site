import { useState, useRef } from 'react';
import { Icon } from '@iconify/react';

const securityGifs = [
  '/Black and White Marketing gifs/gandalf-you-shall-not-past.gif',
  '/Black and White Marketing gifs/ship it jurassic park GIF.gif',
  '/Black and White Marketing gifs/I Dont Think So No Way GIF.gif',
  '/Black and White Marketing gifs/No Way Bird GIF.gif',
  '/Black and White Marketing gifs/National Basketball Association Sport GIF by Milwaukee Bucks.gif',
];

function SecurityCard() {
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'closing' | 'pulse' | 'gif'>('idle');
  const [gifIndex, setGifIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // If showing GIF, reverse back to idle
    if (animationPhase === 'gif') {
      setAnimationPhase('idle');
      return;
    }

    // Start forward animation sequence
    setAnimationPhase('closing');

    // Lock pulse
    timeoutRef.current = setTimeout(() => {
      setAnimationPhase('pulse');
    }, 400);

    // Show GIF
    timeoutRef.current = setTimeout(() => {
      setAnimationPhase('gif');
      // Cycle to next GIF for next time
      setGifIndex((prev) => (prev + 1) % securityGifs.length);
    }, 900);
  };

  const getVisualClass = () => {
    if (animationPhase === 'closing') return 'lock-closing';
    if (animationPhase === 'pulse') return 'lock-pulse';
    if (animationPhase === 'gif') return 'showing-gif';
    return '';
  };

  return (
    <div
      id="security-card"
      className="reveal reveal-delay-3 md:col-span-4 group relative bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-500 p-4 sm:p-6 md:p-8"
    >
      <div className="w-10 h-10 bg-canvas border border-border rounded-lg flex items-center justify-center mb-4 text-obsidian">
        <Icon icon="solar:shield-keyhole-linear" width={20} />
      </div>
      <h3 className="text-lg font-semibold text-obsidian mb-2">Security Handled</h3>
      <p className="text-sm text-subtle mb-6">
        Private servers, safe defaults, and isolation built in. Your app and data are protected from day one.
      </p>
      <div
        id="security-visual"
        className={`w-[70%] mx-auto aspect-square bg-canvas rounded-lg border border-border/50 relative overflow-hidden cursor-pointer ${getVisualClass()}`}
        onClick={handleClick}
      >
        {/* Unlocked icon (visible by default) */}
        <div id="security-lock-open" className="absolute inset-0 flex items-center justify-center transition-all duration-400">
          <Icon icon="solar:lock-password-unlocked-linear" width={72} className="text-border" />
        </div>
        {/* Locked icon (hidden, appears during sequence) */}
        <div id="security-lock-closed" className="absolute inset-0 flex items-center justify-center transition-all duration-400 opacity-0 scale-75">
          <Icon icon="solar:lock-password-bold" width={72} className="text-border transition-all duration-400" />
        </div>
        {/* GIF (hidden by default) */}
        <div id="security-gif" className="absolute inset-0 opacity-0 scale-95 transition-all duration-500 pointer-events-none">
          <img
            id="security-gif-img"
            src={securityGifs[gifIndex]}
            className="w-full h-full object-cover rounded-lg"
            alt="Security GIF"
          />
        </div>
      </div>
    </div>
  );
}

export default SecurityCard;
