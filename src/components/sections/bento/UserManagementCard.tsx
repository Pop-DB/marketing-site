import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

interface UserCard {
  avatarBg: string;
  nameWidth: string;
  status: string;
  statusColor: string;
}

const userCards: UserCard[] = [
  { avatarBg: '#E0F2FE', nameWidth: '60%', status: 'Active', statusColor: '#10B981' },
  { avatarBg: '#FEF3C7', nameWidth: '50%', status: 'Pending', statusColor: '#F59E0B' },
  { avatarBg: '#FCE7F3', nameWidth: '70%', status: 'Active', statusColor: '#10B981' },
  { avatarBg: '#DBEAFE', nameWidth: '55%', status: 'Inactive', statusColor: '#EF4444' },
  { avatarBg: '#F3E8FF', nameWidth: '65%', status: 'Active', statusColor: '#10B981' },
  { avatarBg: '#D1FAE5', nameWidth: '60%', status: 'Active', statusColor: '#10B981' },
  { avatarBg: '#FED7AA', nameWidth: '50%', status: 'Pending', statusColor: '#F59E0B' },
  { avatarBg: '#E0E7FF', nameWidth: '70%', status: 'Active', statusColor: '#10B981' },
  { avatarBg: '#FEE2E2', nameWidth: '55%', status: 'Inactive', statusColor: '#EF4444' },
];

function UserManagementCard() {
  const [displayedCards, setDisplayedCards] = useState<UserCard[]>(userCards.slice(0, 5));
  const [isHovering, setIsHovering] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(5);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isHovering) {
      intervalRef.current = setInterval(() => {
        setDisplayedCards((prev) => {
          const newCards = [...prev];
          newCards.shift();
          newCards.push(userCards[currentIndex % userCards.length]);
          return newCards;
        });
        setCurrentIndex((prev) => prev + 1);
      }, 1500);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovering, currentIndex]);

  return (
    <div
      className="reveal reveal-delay-2 md:col-span-4 group relative bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-500 p-4 sm:p-6 md:p-8"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="w-10 h-10 bg-canvas border border-border rounded-lg flex items-center justify-center mb-4 text-obsidian">
        <Icon icon="solar:users-group-rounded-linear" width={20} />
      </div>
      <h3 className="text-lg font-semibold text-obsidian mb-2">User Management</h3>
      <p className="text-sm text-subtle mb-6">
        See who's using your app. Manage access, permissions, and accounts with zero setup.
      </p>
      <div className="w-[70%] mx-auto bg-canvas rounded-lg border border-border/50 p-3">
        <div id="user-card-list" className="space-y-2 overflow-hidden">
          {displayedCards.map((card, index) => (
            <div key={`${card.avatarBg}-${index}`} className="user-card flex items-center gap-2 p-2 bg-white rounded-lg border border-border/30">
              <div className="w-6 h-6 rounded-full flex-shrink-0" style={{ backgroundColor: card.avatarBg }}></div>
              <div className="flex-1 min-w-0">
                <div className="h-2 bg-subtle/20 rounded" style={{ width: card.nameWidth }}></div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: card.statusColor }}></div>
                <span className="text-[9px] text-subtle">{card.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserManagementCard;
