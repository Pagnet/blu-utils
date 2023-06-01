import React, { useState, useEffect, useMemo } from 'react';

export default function useOnScreen(
  ref: React.RefObject<Element>,
  options: IntersectionObserverInit = {},
): { inView: boolean } {
  const [inView, setInView] = useState<boolean>(false);
  const observer = useMemo(
    () => new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options,
    ),
    [options],
  );

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) {
      return () => {};
    }

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return { inView };
}
