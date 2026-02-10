import ExperimentSafelyCard from './bento/ExperimentSafelyCard';
import BackupsCard from './bento/BackupsCard';
import UserManagementCard from './bento/UserManagementCard';
import SecurityCard from './bento/SecurityCard';
import FileStorageCard from './bento/FileStorageCard';

function BentoGrid() {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-6 md:px-12 bg-canvas relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12 md:mb-16 max-w-2xl">
          <h2 className="reveal font-sans text-2xl sm:text-3xl md:text-4xl font-semibold text-obsidian tracking-tight mb-4">
            Everything you need. Nothing you don't.
          </h2>
          <p className="reveal reveal-delay-1 text-subtle text-base sm:text-lg">
            PopDB handles the parts of building a business that usually require specialists.<br />
            You focus on the product. The platform takes care of the rest.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 auto-rows-[minmax(200px,auto)]">
          <ExperimentSafelyCard />
          <BackupsCard />
          <UserManagementCard />
          <SecurityCard />
          <FileStorageCard />
        </div>
      </div>
    </section>
  );
}

export default BentoGrid;
