import { useState, useEffect, useMemo } from 'react';

export default function useOnScreen(ref: any, options = {}) {
  const [inView, setInView] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => setInView(entry.isIntersecting),
        options,
      ),
    [options],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return { inView };
}

