'use client';

import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function useMedia(media: string) {
  const [isMatch, setIsMatch] = useState(false);

  const debounced = useDebouncedCallback(() => {
    const { matches } = window.matchMedia(media);

    if (matches) setIsMatch(true);
    else setIsMatch(false);
  }, 200);

  useEffect(() => {
    function handleResize() {
      debounced();
    }
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [media, debounced]);

  return isMatch;
}
