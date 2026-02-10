import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-canvas border-t border-border py-10 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-12">
        <div className="space-y-4 max-w-xs">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-obsidian text-white flex items-center justify-center rounded">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="font-bold text-sm tracking-tight text-obsidian">PopDB</span>
          </div>
          <p className="text-xs text-subtle leading-relaxed">
            The backend for the rest of us. Built for the AI generation.
          </p>
          <div className="text-[10px] text-border">&copy; 2025 PopDB Inc.</div>
        </div>

        <div className="flex gap-6 sm:gap-10 md:gap-16">
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-obsidian">Product</h4>
            <ul className="space-y-2 text-xs text-subtle">
              <li>
                <Link to="/use-cases/indie-hackers" className="hover:text-obsidian transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <a href="#pricing" className="hover:text-obsidian transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-obsidian transition-colors">
                  Changelog
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-obsidian">Resources</h4>
            <ul className="space-y-2 text-xs text-subtle">
              <li>
                <a href="#" className="hover:text-obsidian transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-obsidian transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-obsidian transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-obsidian">Legal</h4>
            <ul className="space-y-2 text-xs text-subtle">
              <li>
                <a href="#" className="hover:text-obsidian transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-obsidian transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
