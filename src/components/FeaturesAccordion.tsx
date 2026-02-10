import { useState } from 'react';

interface Feature {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
}

const features: Feature[] = [
  {
    id: 0,
    number: '01',
    title: 'Start Building Now',
    description: 'PopDB comes with a simple but powerful app builder that helps you start building apps even with no prior experience.',
    image: '/Dark backgrounds Carousel/Startbuilding dark background.png',
    imageAlt: 'Quick Setup Guide',
  },
  {
    id: 1,
    number: '02',
    title: 'Private Database',
    description: 'Every app connected to PopDB gets a dedicated database, private and fully under your control.',
    image: '/Dark backgrounds Carousel/Databases Darkbackground.png',
    imageAlt: 'Private Database',
  },
  {
    id: 2,
    number: '03',
    title: 'Managed Hosting',
    description: 'PopDB handles hosting so your app is easy to deploy, reliable, and secure without maintenance.',
    image: '/Dark backgrounds Carousel/Managed Hosting Dark Background.png',
    imageAlt: 'Managed Hosting',
    imagePosition: 'object-left',
  },
];

function FeaturesAccordion() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 border-y border-border/50 bg-canvas/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`reveal ${index > 0 ? `reveal-delay-${index}` : ''} feature-card ${
                activeFeature === feature.id ? 'active' : ''
              }`}
              onMouseEnter={() => setActiveFeature(feature.id)}
            >
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-4">
                    <span className="feature-number font-mono text-sm font-medium mt-0.5">
                      {feature.number}
                    </span>
                    <div>
                      <h3 className="font-sans text-lg font-semibold text-obsidian mb-1">
                        {feature.title}
                      </h3>
                      <p className="font-sans text-sm text-subtle leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="feature-image-wrap">
                  <div className="feature-image-inner">
                    <div className="rounded-2xl border border-border/50 overflow-hidden w-20 h-20 sm:w-32 sm:h-32 md:w-44 md:h-44 shrink-0">
                      <img
                        src={feature.image}
                        alt={feature.imageAlt}
                        className={`w-full h-full object-cover block ${feature.imagePosition || ''}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesAccordion;
