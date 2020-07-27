import { useState, useEffect } from 'react';

function useOrientation() {
  const [orientation, setOrientation] = useState('landscape');

  const handleOrientationChange = () => {
    if (window.screen.orientation) {
      if (window.screen.orientation.type.match(/landscape/i)) {
        setOrientation('landscape');
      } else if (window.screen.orientation.type.match(/portrait/i)) {
        setOrientation('portrait');
      }
    }
  }

  useEffect(() => {
    window.addEventListener('orientationchange', handleOrientationChange);
    handleOrientationChange();

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return orientation;
}

export default useOrientation;