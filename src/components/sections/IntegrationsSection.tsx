import { Icon } from '@iconify/react';
import LogoMarquee from './LogoMarquee';

function IntegrationsSection() {
  return (
    <section id="integrations" className="relative py-12 sm:py-16 md:py-24 px-6 md:px-12 border-y border-border/50 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-0 items-start">
          {/* LEFT COLUMN: Text Content */}
          <div className="flex flex-col gap-6 py-8 lg:pr-12">
            {/* Badge */}
            <div className="reveal">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-canvas text-xs font-mono text-subtle tracking-wider uppercase">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                Integrations
              </span>
            </div>

            {/* Heading */}
            <h2 className="reveal reveal-delay-1 font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-obsidian tracking-tight leading-tight">
              Add integrations with one click.
            </h2>

            {/* Description */}
            <p className="reveal reveal-delay-2 text-sm sm:text-base md:text-lg text-subtle leading-relaxed max-w-md">
              Add email, SMS, domains, and hosting instantly with more integrations coming soon.
            </p>

            {/* CTA Button */}
            <div className="reveal reveal-delay-3">
              <a href="#pricing" className="group inline-flex items-center gap-3 px-6 py-3 bg-obsidian text-white rounded-xl font-medium text-sm shadow-lg shadow-obsidian/10 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300">
                Get started
                <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <Icon icon="solar:arrow-right-linear" width={14} style={{ color: '#171717' }} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
            </div>

            {/* Numbered Steps */}
            <div className="flex flex-col gap-5 mt-4">
              <div className="reveal reveal-delay-3 group flex items-start gap-4 cursor-default">
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-obsidian text-white font-mono text-xs font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">01</span>
                <div className="pt-2">
                  <p className="text-sm text-subtle leading-relaxed">Explore supported integrations and platforms</p>
                </div>
              </div>

              <div className="reveal reveal-delay-4 group flex items-start gap-4 cursor-default">
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-obsidian text-white font-mono text-xs font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">02</span>
                <div className="pt-2">
                  <p className="text-sm text-subtle leading-relaxed">Securely link your account with a single API key</p>
                </div>
              </div>

              <div className="reveal reveal-delay-5 group flex items-start gap-4 cursor-default">
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-obsidian text-white font-mono text-xs font-semibold transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">03</span>
                <div className="pt-2">
                  <p className="text-sm text-subtle leading-relaxed">Sync and streamline your workflow instantly</p>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER DIVIDER (desktop only) */}
          <div className="hidden lg:flex flex-col items-center self-stretch py-8">
            <div className="flex-1 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
          </div>

          {/* RIGHT COLUMN: Logo Marquee */}
          <LogoMarquee />
        </div>
      </div>
    </section>
  );
}

export default IntegrationsSection;
