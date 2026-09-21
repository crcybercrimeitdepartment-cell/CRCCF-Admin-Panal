import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * Helper to get the current vertical scroll position reliably across all browsers and devices.
 */
function getScrollPosition() {
  if (typeof window === 'undefined') return 0;
  return (
    window.scrollY ||
    window.pageYOffset ||
    document.documentElement?.scrollTop ||
    document.body?.scrollTop ||
    0
  );
}

/**
 * Helper to set vertical scroll position across window, html, and body.
 */
function setScrollPosition(top) {
  if (typeof window === 'undefined') return;
  try {
    window.scrollTo({ top, left: 0, behavior: 'instant' });
  } catch {
    window.scrollTo(0, top);
  }
  if (document.documentElement && document.documentElement.scrollTop !== top) {
    document.documentElement.scrollTop = top;
  }
  if (document.body && document.body.scrollTop !== top) {
    document.body.scrollTop = top;
  }
}

/**
 * Custom hook to manage view navigation with intelligent scroll restoration.
 * - When navigating forward to a new view/card:
 *   Saves the current scroll position and resets scroll to top (0, 0).
 * - When navigating backward (e.g. clicking Back button):
 *   Restores the exact scroll position where the card was clicked.
 */
export function useScrollNavigation(initialView = 'main') {
  const [currentView, setCurrentView] = useState(initialView);
  const scrollPositions = useRef({});
  const isBackNav = useRef(false);
  const targetY = useRef(0);

  const navigateTo = useCallback((nextView) => {
    const currentY = getScrollPosition();
    scrollPositions.current[currentView] = currentY;
    isBackNav.current = false;
    targetY.current = 0;

    // Immediately reset to top to avoid visual jumps
    setScrollPosition(0);

    setCurrentView(nextView);
  }, [currentView]);

  const goBack = useCallback((prevView) => {
    const restoreY = scrollPositions.current[prevView] ?? 0;
    isBackNav.current = true;
    targetY.current = restoreY;
    setCurrentView(prevView);
  }, []);

  useEffect(() => {
    if (isBackNav.current) {
      const y = targetY.current;
      isBackNav.current = false;

      let frameId = null;
      let attempts = 0;
      const maxAttempts = 15;

      const attemptRestore = () => {
        setScrollPosition(y);
        attempts++;
        const currentY = getScrollPosition();
        // If the DOM hasn't expanded to full height yet, keep attempting
        if (Math.abs(currentY - y) > 5 && attempts < maxAttempts) {
          frameId = requestAnimationFrame(attemptRestore);
        }
      };

      // Perform immediate restore and schedule multiple retries across frames and timeouts
      attemptRestore();
      const timer1 = setTimeout(attemptRestore, 30);
      const timer2 = setTimeout(attemptRestore, 80);
      const timer3 = setTimeout(attemptRestore, 160);
      const timer4 = setTimeout(attemptRestore, 300);

      return () => {
        if (frameId) cancelAnimationFrame(frameId);
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    } else {
      // Forward navigation: guarantee viewport is at the very top (0, 0)
      setScrollPosition(0);
      const frameId = requestAnimationFrame(() => setScrollPosition(0));
      const timer1 = setTimeout(() => setScrollPosition(0), 20);
      const timer2 = setTimeout(() => setScrollPosition(0), 80);

      return () => {
        cancelAnimationFrame(frameId);
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [currentView]);

  return {
    currentView,
    navigateTo,
    goBack,
    setCurrentView,
  };
}
