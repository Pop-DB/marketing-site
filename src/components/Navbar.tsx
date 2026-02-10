import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 md:px-12 flex justify-between items-center glass-panel transition-all duration-300">
      <Link to="/" className="flex items-center gap-2 no-underline">
        <div className="w-8 h-8 bg-obsidian text-white flex items-center justify-center rounded-lg shadow-soft">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
        <span className="font-sans text-sm font-semibold tracking-tight text-obsidian">
          PopDB
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        <Link to="/" className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors">
          Home
        </Link>
        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <div className="flex items-center gap-1 font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors cursor-pointer">
            Use Cases
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          {isDropdownOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[180px] bg-white/95 backdrop-blur-xl border border-border rounded-xl p-1.5 shadow-lg">
              <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-subtle/60">
                Role
              </div>
              <Link
                to="/use-cases/indie-hackers"
                className="block px-3 py-2 text-xs font-medium text-subtle hover:text-obsidian hover:bg-canvas rounded-lg transition-all"
              >
                Indie Hackers
              </Link>
              <Link
                to="/use-cases/solopreneur"
                className="block px-3 py-2 text-xs font-medium text-subtle hover:text-obsidian hover:bg-canvas rounded-lg transition-all"
              >
                Solopreneur
              </Link>
              <Link
                to="/use-cases/vibe-coder"
                className="block px-3 py-2 text-xs font-medium text-subtle hover:text-obsidian hover:bg-canvas rounded-lg transition-all"
              >
                Vibe Coder
              </Link>
            </div>
          )}
        </div>
        <a href="/#pricing" className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors">
          Pricing
        </a>
        <a href="#" className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors">
          Docs
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <a href="#" className="hidden md:block font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors">
          Sign in
        </a>
        <button className="group relative overflow-hidden bg-obsidian text-white text-xs font-medium px-5 py-2 rounded-lg shadow-soft hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-150%] skew-x-[-20deg] group-hover:translate-x-[150%] transition-transform duration-1000"></div>
          <span className="relative z-10">Start Building</span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
