import { useEffect } from 'react';

function IndieHackers() {
  useEffect(() => {
    window.location.href = '/use-cases/indie-hackers.html';
  }, []);

  return null;
}

export default IndieHackers;
