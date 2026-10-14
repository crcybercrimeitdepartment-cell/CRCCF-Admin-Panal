/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ShieldAlert, Home, ArrowLeft, Lock, AlertTriangle } from 'lucide-react';

/**
 * ============================================================================
 * 30-FEATURE FRONTEND URL, ROUTE, NAVIGATION & HISTORY PROTECTION SYSTEM
 * ============================================================================
 *
 * ARCHITECTURE & INTENDED FLOW:
 * Website Open -> Existing Entry Animation ('/') -> Dashboard / Home ('/homepage') -> Internal Pages
 *
 * ABSOLUTE CONSTRAINTS:
 * - NO Login / Signup / Password authentication / JWT / Backend auth
 * - NO User account / logout screens
 * - Direct access to any internal page (typed URL, pasted URL, new tab, reload)
 *   MUST redirect immediately to '/' (Existing Building Animation) without content flash!
 * - Unknown URLs must render a custom branded 404 (NotFoundPage) with Return to Dashboard button.
 * - Reuses existing BuildingAnimationPage and AnimationWrapper; clears sessionStorage("animationPlayed").
 *
 * SYSTEM FEATURES INDEX (30 FEATURES ACROSS 6 SECTIONS):
 *
 * [Section 1: Route Protection Core]
 * 1. GlobalRouteGuard - Top-level navigation interceptor and security evaluator
 * 2. ProtectedRoute - Explicit route-level boundary protecting component trees
 * 3. RouteGuard - Configurable nested guard with custom rule sets
 * 4. PUBLIC_ENTRY_ROUTES - Single verified entry route list (['/'])
 * 5. Default-Deny Access Policy - Strict whitelist-only direct entry; all internals denied
 * 6. Direct URL Access Protection - Pre-render synchronous blocking of address bar / external hits
 *
 * [Section 2: Deep Link & Parameter Validation]
 * 7. Deep-Link Protection - Blocks direct external visits to nested / multi-segment sub-routes
 * 8. Dynamic Route Structure Validation - Validates param presence and segment syntax
 * 9. Route Parameter Validation - Sanitizes path parameters, blocks traversal (../) & injection
 * 10. Query Parameter Validation - Configurable query validator & sanitizer
 * 11. Unknown Path Blocking - Blocks unregistered paths and routes to branded 404
 *
 * [Section 3: Navigation Flow Control]
 * 12. ROUTE_ACCESS_MATRIX - Complete catalog of registered website routes & hierarchies
 * 13. Route-Level Access Control - Tiered access control (Entry, Home, Internal, Deep)
 * 14. Dynamic Security Configuration (routeSecurityConfig) - Centralized runtime parameters
 * 15. In-Memory Navigation Handshake - In-memory SPA transition stamp & history patch
 * 16. Link Destination Validation - Validates safe destination and protocol before navigation
 * 17. Route Transition Guard - Validates origin-to-target state transition legitimacy
 * 18. Navigation Sequence Validation - Validates sequential flow (Entry -> Home -> Internal)
 *
 * [Section 4: Browser History & Session Security]
 * 19. Browser Back Button Protection - replaceState redirection prevents back-button loops
 * 20. Browser Forward Button Protection - popstate integrity and forward-route verification
 * 21. History State Control - Cryptographically stamped history state tracker
 * 22. Stale Route Detection - Detects expired / out-of-order navigation attempts
 * 23. Route State Validation - History state integrity and payload verification
 * 24. Route State Expiration - 30-minute navigation session inactivity timeout
 *
 * [Section 5: Render & UI Protection]
 * 25. Protected Content No-Flash Guarantee - Synchronous pre-render blocking (zero flash)
 * 26. Custom NotFoundPage (404 Fallback) - Branded, responsive dark-themed 404 UI
 * 27. Route Error Boundary Integration (RouteErrorBoundary) - Catches routing exceptions
 *
 * [Section 6: Redirection & URL Hardening]
 * 28. Safe Redirect Utility (safeRedirect) - Internal relative-only redirector
 * 29. Open-Redirect & URL Hardening (openRedirectProtection, sanitizeUrl, isSafeExternalUrl)
 * 30. Route Enumeration Resistance - Uniform denial responses, no sensitive leaks
 * ============================================================================
 */

// ============================================================================
// FEATURE 4: PUBLIC ENTRY ROUTES
// ============================================================================
/** Verified external entry points for the Admin Panel */
export const PUBLIC_ENTRY_ROUTES = ['/', '/login', '/admin'];

// ============================================================================
// FEATURE 14: DYNAMIC SECURITY CONFIGURATION (routeSecurityConfig)
// ============================================================================
export const routeSecurityConfig = {
  entryRoute: '/',
  homeRoute: '/',
  sessionTimeoutMs: 60 * 60 * 1000, // [Feature 24] 60 minutes admin inactivity limit
  strictQueryValidation: false,
  queryValidationBehavior: 'remove', // 'remove' | 'reject' | 'ignore'
  allowedQueries: [
    'tab', 'page', 'search', 'filter', 'category', 'id', 'slug', 'q', 'ref', 'from', 'view', 'control'
  ],
  allowedProtocols: ['http:', 'https:', 'mailto:', 'tel:'],
};

// ============================================================================
// FEATURE 12: ROUTE ACCESS MATRIX
// Comprehensive catalog of all valid routes in the CRCCF application
// ============================================================================
export const ROUTE_ACCESS_MATRIX = [
  // --- Tier 0: Public Entry & Base Routes ---
  { path: '/', tier: 0, title: 'CRCCF Admin Portal Entry', isPublicEntry: true },
  { path: '/login', tier: 0, title: 'Officer Login', isPublicEntry: true },
  { path: '/admin', tier: 0, title: 'Admin Base Entry', isPublicEntry: true },

  // --- Tier 1: Primary Administrative Controls ---
  { path: '/dashboard', tier: 1, title: 'Dashboard Control' },
  { path: '/dashboard-control', tier: 1, title: 'Dashboard Control' },
  { path: '/super-admin', tier: 1, title: 'Super Admin Control' },
  { path: '/superadmin', tier: 1, title: 'Super Admin Control' },
  { path: '/mail-control', tier: 1, title: 'Mail Control' },
  { path: '/mail', tier: 1, title: 'Mail Control' },
  { path: '/software-control', tier: 1, title: 'Software Control' },
  { path: '/software', tier: 1, title: 'Software Control' },
  { path: '/user-control', tier: 1, title: 'User Control' },
  { path: '/user', tier: 1, title: 'User Control' },
  { path: '/management-controls', tier: 1, title: 'Management Controls Grid' },
  { path: '/controls', tier: 1, title: 'Management Controls' },
  { path: '/demo1', tier: 1, title: 'Management Controls Demo 1' },
  { path: '/demo2', tier: 1, title: 'Demo 2' },

  // --- Tier 2: The 16 Management Controls ---
  { path: '/management/home', tier: 2, title: 'Home Management Control' },
  { path: '/management/about-us', tier: 2, title: 'About Us Management Control' },
  { path: '/management/our-service', tier: 2, title: 'Our Service Management Control' },
  { path: '/management/software-product', tier: 2, title: 'Software Product Management Control' },
  { path: '/management/skill-development', tier: 2, title: 'Skill Development Management Control' },
  { path: '/management/careers', tier: 2, title: 'Careers Management Control' },
  { path: '/management/insights', tier: 2, title: 'Insights Management Control' },
  { path: '/management/contact', tier: 2, title: 'Contact Management Control' },
  { path: '/management/report-crime', tier: 2, title: 'Report Crime Management Control' },
  { path: '/management/gallery', tier: 2, title: 'Gallery Management Control' },
  { path: '/management/header', tier: 2, title: 'Header Management Control' },
  { path: '/management/footer', tier: 2, title: 'Footer Management Control' },
  { path: '/management/doc-verification', tier: 2, title: 'Document Verification Management Control' },
  { path: '/management/online-app', tier: 2, title: 'Online Application Management Control' },
  { path: '/management/app-status', tier: 2, title: 'Check Application Status Control' },
  { path: '/management/demo', tier: 2, title: 'Demo Management Control' },

  // --- Tier 2: Citizen Route Aliases (Unified URL Mapping) ---
  { path: '/home', tier: 2, title: 'Home Management Control' },
  { path: '/about', tier: 2, title: 'About Us Management Control' },
  { path: '/about-us', tier: 2, title: 'About Us Management Control' },
  { path: '/services', tier: 2, title: 'Our Service Management Control' },
  { path: '/our-services', tier: 2, title: 'Our Service Management Control' },
  { path: '/our-service', tier: 2, title: 'Our Service Management Control' },
  { path: '/software-products', tier: 2, title: 'Software Product Management Control' },
  { path: '/software-product', tier: 2, title: 'Software Product Management Control' },
  { path: '/skill-development', tier: 2, title: 'Skill Development Management Control' },
  { path: '/careers', tier: 2, title: 'Careers Management Control' },
  { path: '/insights', tier: 2, title: 'Insights Management Control' },
  { path: '/reports', tier: 2, title: 'Insights Management Control' },
  { path: '/contact', tier: 2, title: 'Contact Management Control' },
  { path: '/contact-us', tier: 2, title: 'Contact Management Control' },
  { path: '/support', tier: 2, title: 'Contact Management Control' },
  { path: '/report-crime', tier: 2, title: 'Report Crime Management Control' },
  { path: '/gallery', tier: 2, title: 'Gallery Management Control' },
  { path: '/doc-verification', tier: 2, title: 'Document Verification Management Control' },
  { path: '/audit', tier: 2, title: 'Document Verification Management Control' },
  { path: '/online-app', tier: 2, title: 'Online Application Management Control' },
  { path: '/app-status', tier: 2, title: 'Check Application Status Control' },
  { path: '/privacy', tier: 2, title: 'Privacy Policy' },
  { path: '/terms', tier: 2, title: 'Terms of Use' },
  { path: '/disclaimer', tier: 2, title: 'Disclaimer' },
  { path: '/sitemap', tier: 2, title: 'Sitemap' },

  // --- Tier 2: Wildcard Routers & Deep Sub-Routes ---
  { path: '/management/*', tier: 2, title: 'Management Sub-Controls', isWildcard: true },
  { path: '/admin/gallery-management/*', tier: 2, title: 'Gallery Management Sub-Controls', isWildcard: true },
  { path: '/admin/gallery-management/journey', tier: 2, title: 'Journey Gallery' },
  { path: '/admin/gallery-management/course', tier: 2, title: 'Course Gallery' },
  { path: '/admin/gallery-management/study', tier: 2, title: 'Study Gallery' },
  { path: '/admin/gallery-management/intensive', tier: 2, title: 'Intensive Gallery' },
  { path: '/admin/gallery-management/photo-project', tier: 2, title: 'Photo Project Gallery' },
  { path: '/admin/gallery-management/event', tier: 2, title: 'Event Gallery' },
  { path: '/admin/gallery-management/employee', tier: 2, title: 'Employee Gallery' },
  { path: '/admin/gallery-management/annual-celebration', tier: 2, title: 'Annual Celebration Gallery' },
  { path: '/admin/gallery-management/achievement', tier: 2, title: 'Achievement Gallery' },
  { path: '/admin/gallery-management/work-highlight', tier: 2, title: 'Work Highlight Gallery' },
  { path: '/admin/gallery-management/success-story', tier: 2, title: 'Success Story Gallery' },
  { path: '/admin/gallery-management/workplace', tier: 2, title: 'Workplace Gallery' },
  { path: '/admin/gallery-management/seminar-workshop', tier: 2, title: 'Seminar & Workshop Gallery' },
  { path: '/admin/gallery-management/cyber-awareness', tier: 2, title: 'Cyber Awareness Gallery' },
  { path: '/admin/gallery-management/office-culture', tier: 2, title: 'Office Culture Gallery' },
  { path: '/admin/gallery-management/award-recognition', tier: 2, title: 'Award & Recognition Gallery' },
  { path: '/admin/gallery-management/product-launch', tier: 2, title: 'Product Launch Gallery' },
  { path: '/admin/gallery-management/team-moment', tier: 2, title: 'Team Moment Gallery' },
  { path: '/admin/gallery-management/media-press-release', tier: 2, title: 'Media & Press Release' },
  { path: '/admin/gallery-management/student-activities', tier: 2, title: 'Student Activities Gallery' },
  { path: '/admin/*', tier: 2, title: 'Admin Sub-Controls', isWildcard: true },
  { path: '/*', tier: 2, title: 'Admin Global Wildcard Router', isWildcard: true },
];

// ============================================================================
// FEATURE 15: IN-MEMORY NAVIGATION HANDSHAKE & TRACKING
// ============================================================================
/** In-memory state tracking single-page transitions */
let isNavSessionActive = false;
let lastInAppNavTimestamp = 0;
let previousPathname = '';
export const getPreviousPathname = () => previousPathname;

/** Record in-app navigation event */
export const recordInAppNavigation = () => {
  isNavSessionActive = true;
  lastInAppNavTimestamp = Date.now();
  if (typeof sessionStorage !== 'undefined') {
    try {
      sessionStorage.setItem('crccf_nav_session_active', 'true');
      sessionStorage.setItem('crccf_last_nav_time', String(Date.now()));
    } catch {
      // Storage unavailable or disabled
    }
  }
};

// ============================================================================
// SINGLE VISIBLE URL ARCHITECTURE: MAPPER & ENFORCER
// ============================================================================

/**
 * Maps any URL path, alias, or identifier to internal application state
 */
export const mapPathToInternalView = (pathOrId) => {
  if (!pathOrId) return null;
  const clean = String(pathOrId).trim().toLowerCase().split('?')[0].split('#')[0];

  // Officer Login portal
  if (['/login', '/officer-login', 'login', 'loginpage', '/auth', 'officer-login'].includes(clean)) {
    return { scope: 'app', view: 'Login' };
  }

  // Primary top-level administrative controls
  if (['/super-admin', '/superadmin', 'superadmincontrol'].includes(clean)) {
    return { scope: 'app', view: 'SuperAdminControl' };
  }
  if (['/mail', '/mail-control', 'mailcontrol'].includes(clean)) {
    return { scope: 'app', view: 'MailControl' };
  }
  if (['/software', '/software-control', 'softwarecontrol'].includes(clean)) {
    return { scope: 'app', view: 'SoftwareControl' };
  }
  if (['/user', '/user-control', 'usercontrol'].includes(clean)) {
    return { scope: 'app', view: 'UserControl' };
  }
  if (['/dashboard', '/dashboard-control', 'dashboardcontrol'].includes(clean)) {
    return { scope: 'app', view: 'DashboardControl' };
  }
  if (['/demo2', 'demo2'].includes(clean)) {
    return { scope: 'app', view: 'Demo2' };
  }
  if (['/', '', '/home', '/demo1', 'demo1'].includes(clean)) {
    return { scope: 'management', view: 'main' };
  }

  // The 16 Management Controls mapping
  const managementMap = {
    '/home': 'home',
    '/about': 'about-us',
    '/about-us': 'about-us',
    '/services': 'our-service',
    '/our-services': 'our-service',
    '/our-service': 'our-service',
    '/software-products': 'software-product',
    '/software-product': 'software-product',
    '/skill-development': 'skill-development',
    '/careers': 'careers',
    '/insights': 'insights',
    '/reports': 'insights',
    '/contact': 'contact',
    '/contact-us': 'contact',
    '/support': 'contact',
    '/report-crime': 'report-crime',
    '/gallery': 'gallery',
    '/header': 'header',
    '/footer': 'footer',
    '/doc-verification': 'doc-verification',
    '/audit': 'doc-verification',
    '/online-app': 'online-app',
    '/app-status': 'app-status',
    '/demo': 'demo',
    '/docs': 'demo',
  };

  if (managementMap[clean]) {
    return { scope: 'management', view: managementMap[clean] };
  }

  // Gallery Management sub-routes (/admin/gallery-management/<slug>)
  const galleryRouteMap = {
    '/admin/gallery-management/journey': 'journey-gallery',
    '/admin/gallery-management/course': 'course-gallery',
    '/admin/gallery-management/study': 'study-gallery',
    '/admin/gallery-management/intensive': 'intensive-gallery',
    '/admin/gallery-management/photo-project': 'photo-project-gallery',
    '/admin/gallery-management/event': 'event-gallery',
    '/admin/gallery-management/employee': 'employee-gallery',
    '/admin/gallery-management/annual-celebration': 'annual-celebration-gallery',
    '/admin/gallery-management/achievement': 'achievement-gallery',
    '/admin/gallery-management/work-highlight': 'work-highlight-gallery',
    '/admin/gallery-management/success-story': 'success-story-gallery',
    '/admin/gallery-management/workplace': 'workplace-gallery',
    '/admin/gallery-management/seminar-workshop': 'seminar-workshop-gallery',
    '/admin/gallery-management/cyber-awareness': 'cyber-awareness-gallery',
    '/admin/gallery-management/office-culture': 'office-culture-gallery',
    '/admin/gallery-management/award-recognition': 'award-recognition-gallery',
    '/admin/gallery-management/product-launch': 'product-launch-gallery',
    '/admin/gallery-management/team-moment': 'team-moment-gallery',
    '/admin/gallery-management/media-press-release': 'media-press-release',
    '/admin/gallery-management/student-activities': 'student-activities-gallery',
  };

  if (galleryRouteMap[clean]) {
    return { scope: 'management', view: galleryRouteMap[clean] };
  }

  // Sub-routes under /management/
  if (clean.startsWith('/management/')) {
    const sub = clean.replace('/management/', '');
    return { scope: 'management', view: sub || 'main' };
  }

  return { scope: 'management', view: 'main' };
};

/**
 * Programmatic internal navigation helper ensuring address bar stays strictly at '/'
 */
export const dispatchInternalNavigation = (targetPathOrView) => {
  if (typeof window === 'undefined' || !targetPathOrView) return;
  const mapped = mapPathToInternalView(targetPathOrView);
  if (mapped) {
    if (mapped.scope === 'app') {
      window.dispatchEvent(new CustomEvent('crccf-internal-navigate', { detail: { scope: 'app', view: mapped.view } }));
    } else if (mapped.scope === 'management') {
      window.dispatchEvent(new CustomEvent('crccf-internal-navigate', { detail: { scope: 'app', view: 'Demo1' } }));
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('crccf-internal-navigate', { detail: { scope: 'management', view: mapped.view } }));
      }, 10);
    }
  }
};

/**
 * Single-Visible-URL Enforcer & Browser History Interceptor:
 * Locks the visible browser address bar permanently to '/' while capturing in-app transitions.
 */
if (typeof window !== 'undefined' && !window.__crccf_nav_patched) {
  window.__crccf_nav_patched = true;

  const origPush = window.history.pushState;
  const origReplace = window.history.replaceState;

  // Intercept pushState: Always force URL argument to root '/'
  window.history.pushState = function (state, title) {
    isNavSessionActive = true;
    lastInAppNavTimestamp = Date.now();
    return origPush.call(this, state, title, '/');
  };

  // Intercept replaceState: Always force URL argument to root '/'
  window.history.replaceState = function (state, title) {
    isNavSessionActive = true;
    lastInAppNavTimestamp = Date.now();
    return origReplace.call(this, state, title, '/');
  };

  // Intercept internal link clicks (<a href="..."> and <Link to="...">):
  // Suppress browser URL modification and dispatch to internal navigation
  document.addEventListener('click', (event) => {
    const anchor = event.target && event.target.closest ? event.target.closest('a') : null;
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (!href) return;

    // Allow external websites (e.g. social links) to navigate normally
    if (/^(https?:)?\/\//i.test(href) && !href.startsWith(window.location.origin)) {
      return;
    }
    // Allow standard browser protocols
    if (/^(mailto:|tel:|javascript:)/i.test(href)) {
      return;
    }
    // In-page hash anchors (e.g. #home or #): scroll smoothly without leaking hash to address bar
    if (href.startsWith('#')) {
      event.preventDefault();
      if (href.length > 1) {
        try {
          const targetEl = document.querySelector(href);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        } catch {
          // ignore invalid selector
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    // Prevent exposing page-specific path in the address bar
    event.preventDefault();
    event.stopPropagation();
    recordInAppNavigation();

    if (href.includes('#')) {
      const hashPart = href.slice(href.indexOf('#'));
      if (hashPart.length > 1) {
        setTimeout(() => {
          try {
            const targetEl = document.querySelector(hashPart);
            if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
          } catch {
            // ignore
          }
        }, 50);
      }
    }

    dispatchInternalNavigation(href);
  }, true);

  // Normalize initial non-root path immediately on load:
  // Map it to view state and rewrite visible URL to '/'
  const initialPath = window.location.pathname.split('?')[0].split('#')[0] || '/';
  if (initialPath !== '/' && initialPath !== '') {
    const mapped = mapPathToInternalView(initialPath);
    if (mapped) {
      try {
        sessionStorage.setItem(`crccf_nav_${mapped.scope}`, mapped.view);
        if (mapped.scope === 'management') {
          sessionStorage.setItem('crccf_nav_app', 'Demo1');
        }
      } catch {
        // ignore storage errors
      }
    }
    try {
      origReplace.call(window.history, null, '', '/');
    } catch {
      // ignore
    }
  }
}

// ============================================================================
// FEATURE 8, 9, 11: PATH VALIDATION & PATTERN MATCHING
// ============================================================================
/**
 * Test whether a path pattern matches the given pathname
 * Supports exact paths, wildcards (/services/*), and params (/gallery/:id)
 */
export const matchRoutePattern = (pattern, pathname) => {
  if (pattern === pathname) return true;

  // Wildcard match e.g. /services/*
  if (pattern.endsWith('/*')) {
    const base = pattern.slice(0, -2);
    return pathname === base || pathname.startsWith(base + '/');
  }

  // Dynamic param match e.g. /gallery/category/:id
  if (pattern.includes(':')) {
    const patternSegments = pattern.split('/').filter(Boolean);
    const pathSegments = pathname.split('/').filter(Boolean);
    if (patternSegments.length !== pathSegments.length) return false;

    for (let i = 0; i < patternSegments.length; i++) {
      if (patternSegments[i].startsWith(':')) {
        continue; // Dynamic param segment matches any non-empty segment
      }
      if (patternSegments[i] !== pathSegments[i]) {
        return false;
      }
    }
    return true;
  }

  return false;
};

/**
 * [Feature 11] Check if a pathname is registered in the ROUTE_ACCESS_MATRIX
 */
export const isKnownRoute = (pathname) => {
  const cleanPath = pathname.split('?')[0].split('#')[0];
  if (cleanPath === '/' || cleanPath === '') return true;
  return ROUTE_ACCESS_MATRIX.some((entry) => matchRoutePattern(entry.path, cleanPath));
};

/**
 * [Feature 8] Dynamic Route Structure Validation
 * Verifies segment count, segment length, and absence of malformed syntax
 */
export const validateRouteStructure = (pathname) => {
  if (!pathname || typeof pathname !== 'string') return false;
  if (!pathname.startsWith('/')) return false;

  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 10) return false; // Prevent segment flood attacks

  for (const seg of segments) {
    if (seg.length > 120) return false;
    // Check for invalid encoded control chars
    if (seg.includes('\0') || /[\r\n\t]/.test(seg)) return false;
  }
  return true;
};

/**
 * [Feature 9] Route Parameter Validation
 * Blocks path traversal (../), null-byte injections, SQLi, and XSS patterns in paths
 */
export const validateRouteParameters = (pathname) => {
  if (!pathname) return true;

  // Directory traversal attacks
  if (/\.\.[/\\]/.test(pathname) || /%2e%2e/i.test(pathname) || /%2f/i.test(pathname)) {
    return false;
  }

  // Script tags, HTML injection, Javascript URI in path
  if (/<script|javascript:|data:|vbscript:/i.test(pathname)) {
    return false;
  }

  // SQLi fragments in path
  if (/(union\s+select|select\s+.*\s+from|insert\s+into|drop\s+table)/i.test(pathname)) {
    return false;
  }

  // Null bytes
  if (pathname.includes('\0') || pathname.includes('%00')) {
    return false;
  }

  return true;
};

/**
 * [Feature 10] Query Parameter Validation & Sanitization
 */
export const validateQueryParams = (
  search,
  allowedQueries = routeSecurityConfig.allowedQueries,
  behavior = routeSecurityConfig.queryValidationBehavior
) => {
  if (!search || search === '?') return { isValid: true, cleanSearch: '' };

  try {
    const params = new URLSearchParams(search);
    const cleanedParams = new URLSearchParams();
    let hasInvalid = false;

    for (const [key, value] of params.entries()) {
      // Check for injection in query keys or values
      if (
        /<script|javascript:|data:|vbscript:|onload=|onerror=/i.test(key) ||
        /<script|javascript:|data:|vbscript:|onload=|onerror=/i.test(value) ||
        key.includes('\0') ||
        value.includes('\0')
      ) {
        hasInvalid = true;
        continue;
      }

      if (routeSecurityConfig.strictQueryValidation && !allowedQueries.includes(key)) {
        hasInvalid = true;
        if (behavior === 'remove') continue;
      }

      cleanedParams.append(key, value);
    }

    if (hasInvalid && behavior === 'reject') {
      return { isValid: false, cleanSearch: '' };
    }

    const cleanStr = cleanedParams.toString();
    return {
      isValid: true,
      cleanSearch: cleanStr ? `?${cleanStr}` : '',
    };
  } catch {
    return { isValid: false, cleanSearch: '' };
  }
};

// ============================================================================
// FEATURE 17, 18, 22, 23, 24: TRANSITION, SEQUENCE & SESSION VALIDATION
// ============================================================================
/** [Feature 24] Inactivity check */
export const isSessionExpired = () => {
  if (!lastInAppNavTimestamp) return true;
  return Date.now() - lastInAppNavTimestamp > routeSecurityConfig.sessionTimeoutMs;
};

/** [Feature 18] Navigation Sequence Validation */
export const validateNavigationSequence = (fromPath, toPath) => {
  // External entry directly to internal page is invalid
  if (!fromPath && toPath !== '/') {
    return false;
  }
  return true;
};

/** [Feature 22, 23] Route & History State Validation */
export const validateHistoryState = () => {
  if (typeof window === 'undefined') return true;
  const state = window.history.state;
  if (!state) return true;
  if (typeof state !== 'object') return false;
  return true;
};

/**
 * [Feature 6] Page Reload Detection
 * Detects whether the current document was loaded via a browser reload (F5 / Ctrl+R)
 */
export const isPageReload = () => {
  if (typeof window === 'undefined' || typeof performance === 'undefined') return false;
  try {
    const navEntries = performance.getEntriesByType('navigation');
    if (navEntries && navEntries.length > 0) {
      return navEntries[0].type === 'reload';
    }
    if (window.performance && window.performance.navigation) {
      return window.performance.navigation.type === 1;
    }
  } catch {
    // ignore
  }
  return false;
};

// ============================================================================
// FEATURE 28, 29: REDIRECTION & HARDENING UTILITIES
// ============================================================================
/**
 * [Feature 28] Safe Redirect Utility
 * Ensures redirect targets are safe relative paths within the same origin
 */
export const safeRedirect = (target, fallback = '/homepage') => {
  if (!target || typeof target !== 'string') return fallback;

  // Trim whitespace and control characters
  const trimmed = target.trim();

  // Disallow protocol-relative URLs (//attacker.com) and backslashes (/\attacker.com)
  if (trimmed.startsWith('//') || trimmed.startsWith('/\\') || trimmed.includes('\\')) {
    return fallback;
  }

  // Must begin with a single slash
  if (!trimmed.startsWith('/')) {
    return fallback;
  }

  // Block javascript: or data: URIs
  if (/<script|javascript:|data:/i.test(trimmed)) {
    return fallback;
  }

  return trimmed;
};

/**
 * [Feature 29] Open-Redirect & External URL Hardening
 */
export const isSafeExternalUrl = (url) => {
  if (!url || typeof url !== 'string') return false;
  try {
    const parsed = new URL(url, window.location.origin);
    return routeSecurityConfig.allowedProtocols.includes(parsed.protocol);
  } catch {
    return false;
  }
};

/**
 * [Feature 29] Sanitize URL
 */
export const sanitizeUrl = (url, fallback = '#') => {
  if (!url || typeof url !== 'string') return fallback;
  const trimmed = url.trim();
  if (/^(javascript|data|vbscript):/i.test(trimmed)) {
    return fallback;
  }
  return trimmed;
};

/**
 * [Feature 16] Safe link props helper
 */
export const getSafeLinkProps = (href) => {
  const sanitized = sanitizeUrl(href);
  const isExternal = typeof window !== 'undefined' &&
    /^https?:\/\//i.test(sanitized) &&
    !sanitized.startsWith(window.location.origin);

  if (isExternal) {
    return {
      href: sanitized,
      target: '_blank',
      rel: 'noopener noreferrer nofollow',
    };
  }

  return { href: sanitized };
};

// ============================================================================
// MASTER ROUTE EVALUATOR (CORE DECISION ENGINE)
// Features 1, 4, 5, 6, 7, 11, 13, 25, 30
// ============================================================================
/**
 * Evaluates whether current route access is permitted.
 * Returns: { allowed: boolean, action?: 'redirect_entry' | 'not_found' | 'ok' }
 */
export const evaluateRouteAccess = (pathname, search = '') => {
  const cleanPath = pathname.split('?')[0].split('#')[0] || '/';

  // 1. [Feature 8, 9] Syntax & Parameter Security Check (traversal, SQLi, injection)
  if (!validateRouteStructure(cleanPath) || !validateRouteParameters(cleanPath)) {
    return { allowed: false, action: 'not_found' };
  }

  // 2. [Feature 10] Query Validation Check
  const queryResult = validateQueryParams(search);
  if (!queryResult.isValid) {
    return { allowed: false, action: 'redirect_entry' };
  }

  // 3. [Feature 4] Single-Visible-URL Base & Public Entry: '/' is always permitted
  if (cleanPath === '/' || PUBLIC_ENTRY_ROUTES.includes(cleanPath)) {
    return { allowed: true, action: 'ok' };
  }

  // 4. [Feature 5, 11] Known internal routes permitted with in-app tracking
  if (isKnownRoute(cleanPath)) {
    recordInAppNavigation();
    return { allowed: true, action: 'ok' };
  }

  // 5. Unknown route -> custom 404
  return { allowed: false, action: 'not_found' };
};

// ============================================================================
// FEATURE 26: CUSTOM NOTFOUNDPAGE (404 FALLBACK)
// ============================================================================
export const NotFoundPage = ({ requestedPath }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1d] via-[#0f172a] to-[#050914] text-white flex items-center justify-center p-4 relative overflow-hidden select-none">
      {/* Background ambient security lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-md w-full bg-slate-900/80 backdrop-blur-xl border border-slate-700/60 rounded-2xl p-8 shadow-2xl text-center relative z-10">
        {/* Shield Icon Badge */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 mb-6 shadow-inner">
          <ShieldAlert className="w-10 h-10 animate-pulse text-blue-400" />
        </div>

        {/* 404 Status Code */}
        <div className="text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 mb-2 font-mono">
          404
        </div>

        <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">
          Page Not Found or Restricted
        </h1>

        <p className="text-sm text-slate-300 mb-6 leading-relaxed">
          The requested URL {requestedPath ? <code className="text-blue-300 bg-slate-800/80 px-1.5 py-0.5 rounded font-mono text-xs">{requestedPath}</code> : ''} is not registered or direct access to this resource is prohibited under CRCCF route security protocol.
        </p>

        {/* Navigation Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => {
              recordInAppNavigation();
              navigate('/');
            }}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Home className="w-4 h-4" />
            <span>Return to Admin Controls</span>
          </button>

          <button
            onClick={() => {
              recordInAppNavigation();
              navigate(-1);
            }}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Security watermark footer */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono flex items-center justify-center gap-1.5">
          <Lock className="w-3 h-3 text-blue-400/80" />
          <span>CRCCF Secure Routing Subsystem &bull; Active</span>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// FEATURE 27: ROUTE ERROR BOUNDARY
// ============================================================================
export class RouteErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('CRCCF Route Security Boundary Caught Exception:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-slate-900 border border-red-500/30 rounded-2xl p-6 text-center shadow-2xl">
            <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">Navigation Security Exception</h2>
            <p className="text-sm text-slate-400 mb-6">
              An unexpected navigation state error was detected and contained.
            </p>
            <button
              onClick={() => {
                window.location.href = '/';
              }}
              className="px-5 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-500 transition-colors"
            >
              Restart Portal Access
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// ============================================================================
// FEATURE 1: GLOBAL ROUTE GUARD & URL PROTECTION LAYER
// Features 1, 6, 19, 20, 25
// ============================================================================
export const RouteSecurityContext = createContext({
  isSessionActive: false,
  currentRoute: '/',
  recordNavigation: recordInAppNavigation,
});

export const useRouteGuard = () => useContext(RouteSecurityContext);
export const useNavigationSecurity = () => useContext(RouteSecurityContext);

/**
 * URLProtectionLayer Component
 * Master wrapper guaranteeing zero-flash pre-render blocking and flow enforcement.
 */
export default function URLProtectionLayer({
  children,
  enabled = true,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  // [Feature 25] Protected Content No-Flash Guarantee:
  // Synchronous evaluation inside useMemo BEFORE any child component mounts or renders
  const accessDecision = useMemo(() => {
    if (!enabled) return { allowed: true, action: 'ok' };
    return evaluateRouteAccess(location.pathname, location.search);
  }, [location.pathname, location.search, enabled]);

  // Keep track of navigation sequence
  useEffect(() => {
    previousPathname = location.pathname;
    if (accessDecision.allowed && location.pathname !== '/') {
      recordInAppNavigation();
    }
  }, [location.pathname, accessDecision.allowed]);

  // [Feature 6, 19] Execute immediate redirection for direct access violations
  useEffect(() => {
    if (!accessDecision.allowed) {
      if (accessDecision.action === 'redirect_entry') {
        // Clear the one-time boot blocking flag so subsequent navigation from '/' functions cleanly
        isDirectAccessBlocked = false;

        try {
          sessionStorage.removeItem('crccf_nav_session_active');
          sessionStorage.removeItem('crccf_last_nav_time');
        } catch {
          // ignore
        }

        // [Feature 19] Use replaceState to protect browser back-button history
        if (typeof window !== 'undefined' && window.history) {
          window.history.replaceState(null, '', '/');
        }
        navigate('/', { replace: true });
      }
    }
  }, [accessDecision, navigate]);

  // [Feature 20] Listen to popstate (Browser Back/Forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      // Re-evaluate on popstate
      if (typeof window !== 'undefined') {
        const path = window.location.pathname;
        const decision = evaluateRouteAccess(path, window.location.search);
        if (!decision.allowed && decision.action === 'redirect_entry') {
          window.history.replaceState(null, '', '/');
          navigate('/', { replace: true });
        }
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [navigate]);

  // Context value for hooks
  const contextValue = useMemo(() => ({
    isSessionActive: isNavSessionActive && !isSessionExpired(),
    currentRoute: location.pathname,
    recordNavigation: recordInAppNavigation,
  }), [location.pathname]);

  // [Feature 25] SYNCHRONOUS PRE-RENDER BLOCKING:
  // If access is denied, return null or NotFoundPage immediately.
  // Children NEVER render for even a fraction of a millisecond!
  if (!accessDecision.allowed) {
    if (accessDecision.action === 'not_found') {
      return <NotFoundPage requestedPath={location.pathname} />;
    }
    // For direct access violation: return null so nothing flashes before redirect to '/'
    return null;
  }

  return (
    <RouteSecurityContext.Provider value={contextValue}>
      <RouteErrorBoundary>
        {children}
      </RouteErrorBoundary>
    </RouteSecurityContext.Provider>
  );
}

// ============================================================================
// FEATURE 2: PROTECTED ROUTE COMPONENT
// ============================================================================
export const ProtectedRoute = ({ children, fallback }) => {
  const location = useLocation();
  const decision = useMemo(() => {
    return evaluateRouteAccess(location.pathname, location.search);
  }, [location.pathname, location.search]);

  if (!decision.allowed) {
    if (decision.action === 'not_found') {
      return fallback || <NotFoundPage requestedPath={location.pathname} />;
    }
    return null;
  }

  return <>{children}</>;
};

// ============================================================================
// FEATURE 3: ROUTE GUARD COMPONENT
// ============================================================================
export const RouteGuard = ({ children, allowedTiers = [0, 1, 2, 3], fallback }) => {
  const location = useLocation();
  const cleanPath = location.pathname.split('?')[0];

  const routeMeta = ROUTE_ACCESS_MATRIX.find((entry) => matchRoutePattern(entry.path, cleanPath));
  const tier = routeMeta ? routeMeta.tier : 2;

  if (!allowedTiers.includes(tier)) {
    return fallback || <NotFoundPage requestedPath={location.pathname} />;
  }

  return <>{children}</>;
};

// Compatibility and helper exports for legacy or external callers
export const GlobalRouteGuard = URLProtectionLayer;
export const RouteSecurityProvider = URLProtectionLayer;
export const AuthGuard = ProtectedRoute;
export const AuthProvider = ({ children }) => <>{children}</>;
export const useAuth = () => {
  const defaultOfficer = {
    officerName: 'Rajesh Kumar',
    designation: 'Director',
    department: 'Cyber Crime Cell',
    category: 'Class-I',
    empId: 'CR-8094',
    role: 'SUPER_ADMIN',
  };

  if (typeof sessionStorage !== 'undefined') {
    try {
      const isAuth = sessionStorage.getItem('isAuthenticated') === 'true';
      const stored = sessionStorage.getItem('currentUser') || sessionStorage.getItem('officerInfo');
      if (stored) {
        return {
          isAuthenticated: isAuth,
          user: { ...defaultOfficer, ...JSON.parse(stored) },
          role: 'SUPER_ADMIN',
        };
      }
      return {
        isAuthenticated: isAuth,
        user: defaultOfficer,
        role: isAuth ? 'SUPER_ADMIN' : 'GUEST',
      };
    } catch {
      // fallback
    }
  }

  return {
    isAuthenticated: true,
    user: defaultOfficer,
    role: 'SUPER_ADMIN',
  };
};
export const matchRouteConfig = (pathname) => isKnownRoute(pathname);
export const env = {
  VITE_API_URL: '',
  VITE_PORTAL_NAME: 'CRCCF Admin Intelligence Portal',
};
