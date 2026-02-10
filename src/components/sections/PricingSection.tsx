import { Icon } from '@iconify/react';

function PricingSection() {
  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-24 px-6 md:px-12 bg-canvas">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="reveal font-sans text-2xl sm:text-3xl md:text-4xl font-semibold text-obsidian tracking-tight mb-4">
            Progression over perfection.
          </h2>
          <p className="reveal reveal-delay-1 text-subtle">
            Start simple, validate ideas, and later scale successful apps.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {/* Free Beta */}
          <div className="reveal p-4 sm:p-6 md:p-8 rounded-2xl border border-obsidian/10 bg-white shadow-xl shadow-gray-200/50 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-obsidian"></div>
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-obsidian">Free Beta</span>
              <span className="text-xl font-bold text-obsidian">$0<span className="text-xs font-normal text-subtle">/mo</span></span>
            </div>
            <p className="text-sm text-subtle mb-8 min-h-[40px]">For vibe coders ready to launch real products.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-subtle">
                <Icon icon="solar:check-circle-bold" className="text-obsidian" />
                Unlimited Apps
              </li>
              <li className="flex items-center gap-3 text-sm text-subtle">
                <Icon icon="solar:check-circle-bold" className="text-obsidian" />
                Dedicated DB &amp; Backups
              </li>
              <li className="flex items-center gap-3 text-sm text-subtle">
                <Icon icon="solar:check-circle-bold" className="text-obsidian" />
                Priority Support
              </li>
              <li className="flex items-center gap-3 text-sm text-subtle">
                <Icon icon="solar:check-circle-bold" className="text-obsidian" />
                Usual price $29/mo
              </li>
            </ul>
            <button className="w-full py-2.5 rounded-lg bg-obsidian text-xs font-semibold text-white hover:bg-gray-800 transition-colors shadow-lg shadow-obsidian/20">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
