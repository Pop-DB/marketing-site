function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-24 sm:pt-28 pb-6 sm:pb-8 px-6 md:px-12">
      <div className="max-w-3xl text-center space-y-4 sm:space-y-6 relative z-10">
        {/* Headline */}
        <h1 className="reveal reveal-delay-1 font-sans text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tighter text-obsidian leading-[1.05]">
          One price.<br />
          <span className="text-subtle">Unlimited apps and agents.</span>
        </h1>

        {/* Subtext */}
        <p className="reveal reveal-delay-2 max-w-xl mx-auto font-sans text-sm sm:text-base md:text-lg text-subtle leading-relaxed">
          PopDB turns your ideas into real apps with a powerful app builder, database, hosting, and auth for a predictable monthly fee.
        </p>

        {/* CTA */}
        <div className="reveal reveal-delay-3 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 pt-4">
          <button className="group relative bg-obsidian text-white px-6 py-2.5 md:px-8 md:py-3 rounded-xl shadow-lg shadow-obsidian/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full md:w-auto">
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm font-medium">Create your first App</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
