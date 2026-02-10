import { Icon } from '@iconify/react';
import { useRef } from 'react';

interface LogoItem {
  icon: string;
  label: string;
  color: string;
}

const row1Logos: LogoItem[] = [
  { icon: 'simple-icons:openai', label: 'OpenAI', color: '#412991' },
  { icon: 'simple-icons:anthropic', label: 'Anthropic', color: '#191919' },
  { icon: 'simple-icons:googlegemini', label: 'Gemini', color: '#8E75B2' },
  { icon: 'simple-icons:elevenlabs', label: 'ElevenLabs', color: '#000000' },
  { icon: 'simple-icons:algolia', label: 'Algolia', color: '#003DFF' },
  { icon: 'simple-icons:googleanalytics', label: 'Analytics', color: '#E37400' },
  { icon: 'simple-icons:mixpanel', label: 'Mixpanel', color: '#7856FF' },
  { icon: 'simple-icons:stackblitz', label: 'Bolt', color: '#1389FD' },
  { icon: 'simple-icons:v0', label: 'v0', color: '#171717' },
];

const row2Logos: LogoItem[] = [
  { icon: 'simple-icons:auth0', label: 'Auth0', color: '#EB5424' },
  { icon: 'simple-icons:okta', label: 'Okta', color: '#007DC1' },
  { icon: 'solar:mailbox-linear', label: 'Email', color: '#171717' },
  { icon: 'simple-icons:sendgrid', label: 'SendGrid', color: '#1B88D3' },
  { icon: 'simple-icons:zoom', label: 'Zoom', color: '#0B5CFF' },
  { icon: 'simple-icons:googlemeet', label: 'Google Meet', color: '#00897B' },
  { icon: 'simple-icons:calendly', label: 'Calendly', color: '#006BFF' },
];

const row3Logos: LogoItem[] = [
  { icon: 'simple-icons:shopify', label: 'Shopify', color: '#96BE28' },
  { icon: 'simple-icons:woocommerce', label: 'WooCommerce', color: '#96588A' },
  { icon: 'simple-icons:klaviyo', label: 'Klaviyo', color: '#000000' },
  { icon: 'simple-icons:quickbooks', label: 'QuickBooks', color: '#2CA01C' },
  { icon: 'simple-icons:docusign', label: 'DocuSign', color: '#FFCD00' },
  { icon: 'simple-icons:gusto', label: 'Gusto', color: '#F45D48' },
];

const row4Logos: LogoItem[] = [
  { icon: 'simple-icons:amazons3', label: 'AWS S3', color: '#569A31' },
  { icon: 'simple-icons:cloudinary', label: 'Cloudinary', color: '#3448C5' },
  { icon: 'simple-icons:amplitude', label: 'Amplitude', color: '#0061FF' },
  { icon: 'simple-icons:asana', label: 'Asana', color: '#F06A6A' },
  { icon: 'simple-icons:trello', label: 'Trello', color: '#0079BF' },
  { icon: 'simple-icons:googleforms', label: 'Google Forms', color: '#7248B9' },
];

interface MarqueeRowProps {
  logos: LogoItem[];
  direction?: 'left' | 'right';
  speed?: string;
}

function MarqueeRow({ logos, direction = 'left', speed = '30s' }: MarqueeRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (rowRef.current) {
      const animatedDiv = rowRef.current.querySelector('[class*="animate-"]') as HTMLElement;
      if (animatedDiv) {
        animatedDiv.style.animationPlayState = 'paused';
      }
    }
  };

  const handleMouseLeave = () => {
    if (rowRef.current) {
      const animatedDiv = rowRef.current.querySelector('[class*="animate-"]') as HTMLElement;
      if (animatedDiv) {
        animatedDiv.style.animationPlayState = 'running';
      }
    }
  };

  const animationStyle = direction === 'left'
    ? { animation: `marquee-scroll ${speed} linear infinite` }
    : { animation: `marquee-scroll-reverse ${speed} linear infinite` };

  return (
    <div
      ref={rowRef}
      className="flex overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex gap-2 md:gap-3" style={animationStyle}>
        {/* Set 1 */}
        {logos.map((logo, index) => (
          <div
            key={`${logo.label}-1-${index}`}
            className="flex-shrink-0 w-[56px] h-[56px] sm:w-[72px] sm:h-[72px] md:w-[88px] md:h-[88px] flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-border bg-canvas hover:border-obsidian/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
          >
            <Icon icon={logo.icon} width={28} height={28} style={{ color: logo.color }} />
            <span className="text-[9px] md:text-[10px] text-subtle font-mono">{logo.label}</span>
          </div>
        ))}
        {/* Set 2 (duplicate for seamless loop) */}
        {logos.map((logo, index) => (
          <div
            key={`${logo.label}-2-${index}`}
            className="flex-shrink-0 w-[56px] h-[56px] sm:w-[72px] sm:h-[72px] md:w-[88px] md:h-[88px] flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-border bg-canvas hover:border-obsidian/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
          >
            <Icon icon={logo.icon} width={28} height={28} style={{ color: logo.color }} />
            <span className="text-[9px] md:text-[10px] text-subtle font-mono">{logo.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LogoMarquee() {
  return (
    <div
      className="reveal flex flex-col gap-4 py-8 lg:pl-12 overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)'
      }}
    >
      <MarqueeRow logos={row1Logos} direction="left" speed="30s" />
      <MarqueeRow logos={row2Logos} direction="right" speed="30s" />
      <MarqueeRow logos={row3Logos} direction="left" speed="40s" />
      <MarqueeRow logos={row4Logos} direction="right" speed="35s" />
    </div>
  );
}

export default LogoMarquee;
