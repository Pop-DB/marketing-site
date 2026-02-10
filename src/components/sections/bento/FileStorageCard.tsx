import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

const photos = [
  '/Black and White Website photos/The_Great_Wave_off_Kanagawa.jpg',
  '/Black and White Website photos/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
  '/Black and White Website photos/Adams_The_Tetons_and_the_Snake_River.jpg',
  '/Black and White Website photos/Screenshot_2026-02-07_at_12.00.31_AM.png',
  '/Black and White Website photos/Screenshot_2026-02-07_at_12.04.46_AM.png',
];

const photoAlts = [
  'Great Wave',
  'Starry Night',
  'Tetons',
  'Screenshot 1',
  'Screenshot 2',
];

function FileStorageCard() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isHovering) {
      intervalRef.current = setInterval(() => {
        setCurrentPhoto((prev) => (prev + 1) % photos.length);
      }, 1200);
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
  }, [isHovering]);

  return (
    <div
      className="reveal reveal-delay-4 md:col-span-4 group relative bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-500 p-4 sm:p-6 md:p-8"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="w-10 h-10 bg-canvas border border-border rounded-lg flex items-center justify-center mb-4 text-obsidian">
        <Icon icon="solar:cloud-upload-linear" width={20} />
      </div>
      <h3 className="text-lg font-semibold text-obsidian mb-2">File Storage</h3>
      <p className="text-sm text-subtle mb-6">
        Give your apps the file storage they require so your users can upload files, pictures, and videos.
      </p>
      <div id="storage-photos" className="w-[70%] mx-auto aspect-square relative bg-canvas rounded-lg border border-border/50">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            className={`storage-photo ${index === currentPhoto ? 'active' : ''} absolute inset-0 w-full h-full object-contain rounded-lg border border-border shadow-sm`}
            alt={photoAlts[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default FileStorageCard;
