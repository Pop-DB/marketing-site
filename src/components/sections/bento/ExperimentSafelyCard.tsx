import { useState, useRef } from 'react';
import { Icon } from '@iconify/react';
import confetti from 'canvas-confetti';

function ExperimentSafelyCard() {
  const [isDeploying, setIsDeploying] = useState(false);
  const [deploymentPhase, setDeploymentPhase] = useState<'idle' | 'active' | 'success'>('idle');
  const [activeEnv, setActiveEnv] = useState<'staging' | 'production'>('staging');
  const liveBoxRef = useRef<HTMLDivElement>(null);

  const handleDeploy = () => {
    if (isDeploying) return;

    setIsDeploying(true);
    setDeploymentPhase('active');

    // Arrow lights up immediately
    setTimeout(() => {
      setDeploymentPhase('success');
      setActiveEnv('production');

      // Fire confetti from LIVE box position
      if (liveBoxRef.current) {
        const rect = liveBoxRef.current.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;

        confetti({
          particleCount: 50,
          spread: 70,
          origin: { x, y },
          colors: ['#10B981', '#34D399', '#6EE7B7'],
          ticks: 200,
        });
      }
    }, 800);

    // Reset after 3.5s
    setTimeout(() => {
      setIsDeploying(false);
      setDeploymentPhase('idle');
      setActiveEnv('staging');
    }, 3500);
  };

  return (
    <div className="reveal md:col-span-8 group relative bg-white border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 p-4 sm:p-6 flex flex-col">
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="w-10 h-10 bg-canvas border border-border rounded-lg flex items-center justify-center mb-4 text-obsidian">
              <Icon icon="solar:branching-paths-down-linear" width={20} />
            </div>
            <h3 className="text-xl font-semibold text-obsidian mb-2">Experiment Safely</h3>
            <p className="text-sm text-subtle max-w-sm">
              Built-in staging and production environments. Test changes before they reach real users.
            </p>
          </div>
          {/* Environment Toggle Visual */}
          <div className="hidden md:flex bg-canvas border border-border rounded-full p-1 gap-1">
            <div
              id="toggle-staging"
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-500 ${
                activeEnv === 'staging'
                  ? 'bg-white shadow-sm border border-border/50 text-obsidian'
                  : 'text-subtle'
              }`}
            >
              Staging
            </div>
            <div
              id="toggle-production"
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-500 ${
                activeEnv === 'production'
                  ? 'bg-white shadow-sm border border-border/50 text-obsidian'
                  : 'text-subtle'
              }`}
            >
              Production
            </div>
          </div>
        </div>

        {/* Staging/Prod UI Visualization (Interactive) */}
        <div
          id="deploy-viz"
          className={`w-full bg-canvas border border-border rounded-xl relative overflow-hidden flex items-center justify-center py-3 md:py-4 ${
            deploymentPhase === 'active' ? 'deploy-active' : ''
          } ${deploymentPhase === 'success' ? 'deploy-success' : ''}`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:12px_12px]"></div>

          <div className="relative flex items-center gap-4 sm:gap-6 md:gap-8">
            {/* DEV Node with code + deploy button */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-28 sm:w-40 md:w-48 bg-white border-2 border-dashed border-orange-300 rounded-lg shadow-sm p-3 sm:p-4 md:p-5 relative">
                {/* Label */}
                <p className="text-xs md:text-sm font-sans text-obsidian/70 text-center mb-4">Ready to Deploy?</p>
                {/* Deploy Button */}
                <button
                  id="deploy-btn"
                  className={`${
                    !isDeploying ? 'deploy-btn-pulse' : ''
                  } w-full py-2 bg-obsidian text-white text-xs font-mono font-medium rounded-lg hover:bg-obsidian/90 active:scale-95 transition-all cursor-pointer flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed`}
                  onClick={handleDeploy}
                  disabled={isDeploying}
                >
                  Deploy
                </button>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></div>
                <span className="text-[10px] font-mono text-subtle uppercase">Staging</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="deploy-arrow-icon flex items-center -mt-6">
              <Icon icon="solar:arrow-right-linear" width={28} />
            </div>

            {/* LIVE Node with success states */}
            <div className="flex flex-col items-center gap-3">
              <div
                ref={liveBoxRef}
                id="deploy-live"
                className="deploy-live-box w-28 sm:w-40 md:w-48 h-[100px] bg-white border rounded-lg flex flex-col items-center justify-center gap-1 relative"
              >
                <span className="deploy-live-text text-sm font-mono text-gray-400">LIVE</span>
                {/* Checkmark overlay */}
                <div className="deploy-check absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md">
                  <Icon icon="solar:check-circle-bold" width={14} style={{ color: 'white' }} />
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-2 items-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-[10px] font-mono text-subtle uppercase">Production</span>
                </div>
                <span className="deploy-label text-[9px] font-mono text-emerald-600 font-medium">Deployed!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperimentSafelyCard;
