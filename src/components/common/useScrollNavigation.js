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
 * Custom hook to manage view navigation with intelligent scroll restoration
 * and browser History API integration (locked to root URL '/').
 * - When navigating forward: saves scroll, resets to top, and pushes history state with url='/'.
 * - When navigating backward (or browser Back): restores scroll and view while keeping url='/'.
 * - Preserves view across page reloads via history state / sessionStorage.
 */
export function useScrollNavigation(initialView = 'main', options = {}) {
  const scope = typeof options === 'string' ? options : (options.scope || 'default');

  // Read persisted state on reload if available
  const getSavedView = () => {
    if (typeof window === 'undefined') return initialView;
    try {
      if (scope === 'app') {
        return 'Login';
      }
      const state = window.history.state;
      if (state && typeof state === 'object' && state[scope]) return state[scope];
      const session = sessionStorage.getItem(`crccf_nav_${scope}`);
      if (session) return session;
    } catch {
      // fallback to initialView
    }
    return initialView;
  };

  const [currentView, setCurrentView] = useState(getSavedView);
  const scrollPositions = useRef({});
  const isBackNav = useRef(false);
  const targetY = useRef(0);

  // Sync state to history and sessionStorage (always locked to root URL '/')
  const syncToHistory = useCallback((nextView, isReplace = false) => {
    if (typeof window === 'undefined') return;
    try {
      const existingState = (window.history.state && typeof window.history.state === 'object')
        ? { ...window.history.state }
        : {};
      const newState = {
        ...existingState,
        [scope]: nextView,
        _time: Date.now()
      };
      sessionStorage.setItem(`crccf_nav_${scope}`, nextView);

      // GUARANTEED: The visible URL in the address bar is strictly '/'
      if (isReplace) {
        window.history.replaceState(newState, '', '/');
      } else {
        window.history.pushState(newState, '', '/');
      }
    } catch {
      // ignore storage errors
    }
  }, [scope]);

  // Initial mount: ensure history state is initialized at root URL '/'
  useEffect(() => {
    syncToHistory(currentView, true);
  }, []); // run once on mount

  const navigateTo = useCallback((nextView) => {
    if (nextView === currentView) return;
    const currentY = getScrollPosition();
    scrollPositions.current[currentView] = currentY;
    isBackNav.current = false;
    targetY.current = 0;

    // Immediately reset to top to avoid visual jumps
    setScrollPosition(0);

    setCurrentView(nextView);
    syncToHistory(nextView, false);
  }, [currentView, syncToHistory]);

  const goBack = useCallback((prevView) => {
    const restoreY = scrollPositions.current[prevView] ?? 0;
    isBackNav.current = true;
    targetY.current = restoreY;
    setCurrentView(prevView);
    syncToHistory(prevView, false);
  }, [syncToHistory]);

  // Listen for browser Back/Forward (popstate) and internal cross-component navigation
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handlePopState = (e) => {
      const state = e.state;
      if (state && typeof state === 'object' && state[scope]) {
        const targetView = state[scope];
        if (targetView !== currentView) {
          isBackNav.current = true;
          targetY.current = scrollPositions.current[targetView] ?? 0;
          setCurrentView(targetView);
        }
      }
    };

    const handleInternalNav = (e) => {
      const detail = e.detail;
      if (detail && detail.scope === scope && detail.view) {
        navigateTo(detail.view);
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('crccf-internal-navigate', handleInternalNav);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('crccf-internal-navigate', handleInternalNav);
    };
  }, [scope, currentView, navigateTo]);

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
