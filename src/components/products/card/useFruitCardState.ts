import { useState, useCallback, useRef, useEffect } from 'react';

export type FruitCardView = 'main' | 'showcase';

export function useFruitCardState(onSelectForRfq?: () => void) {
  const [activeView, setActiveView] = useState<FruitCardView>('main');
  const [isPlaneAnimating, setIsPlaneAnimating] = useState(false);
  const [isQuoteSuccess, setIsQuoteSuccess] = useState(false);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const clearTimeouts = () => {
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];
  };

  useEffect(() => {
    return () => clearTimeouts();
  }, []);

  const openView = useCallback((view: 'showcase') => {
    setActiveView(view);
  }, []);

  const closeView = useCallback(() => {
    setActiveView('main');
  }, []);

  const triggerQuote = useCallback(() => {
    if (isPlaneAnimating || isQuoteSuccess) return;

    setIsPlaneAnimating(true);

    // After flight transition (600ms), show success state
    const t1 = setTimeout(() => {
      setIsPlaneAnimating(false);
      setIsQuoteSuccess(true);
      if (onSelectForRfq) {
        onSelectForRfq();
      }
    }, 600);

    // Reset back after 3.2s
    const t2 = setTimeout(() => {
      setIsQuoteSuccess(false);
    }, 3200);

    timeoutsRef.current.push(t1, t2);
  }, [isPlaneAnimating, isQuoteSuccess, onSelectForRfq]);

  return {
    activeView,
    openView,
    closeView,
    isPlaneAnimating,
    isQuoteSuccess,
    triggerQuote,
  };
}
