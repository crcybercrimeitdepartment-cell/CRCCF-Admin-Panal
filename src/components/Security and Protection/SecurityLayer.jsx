/* eslint-disable react-refresh/only-export-components */
import UIProtectionLayer, {
  isInteractiveField,
  maskPhoneNumber,
  maskEmail,
  maskUserId,
  sanitizeHtml,
  safeSetTextContent,
  safeCreateElement,
  safeSetAttribute,
  safeAppendChild,
  useUIProtection,
  ErrorBoundary,
  SecurityWatermark,
  ProtectedComponent,
} from './UiProtectionLayer';

import URLProtectionLayer, {
  PUBLIC_ENTRY_ROUTES,
  ROUTE_ACCESS_MATRIX,
  routeSecurityConfig,
  recordInAppNavigation,
  matchRoutePattern,
  isKnownRoute,
  validateRouteStructure,
  validateRouteParameters,
  validateQueryParams,
  isPageReload,
  isSessionExpired,
  validateNavigationSequence,
  validateHistoryState,
  safeRedirect,
  isSafeExternalUrl,
  sanitizeUrl,
  getSafeLinkProps,
  evaluateRouteAccess,
  NotFoundPage,
  RouteErrorBoundary,
  RouteSecurityContext,
  useRouteGuard,
  useNavigationSecurity,
  ProtectedRoute,
  RouteGuard,
  GlobalRouteGuard,
  RouteSecurityProvider,
  AuthGuard,
  AuthProvider,
  useAuth,
  matchRouteConfig,
  env,
  dispatchInternalNavigation,
  mapPathToInternalView,
} from './URLProtectionLayer';

/**
 * ============================================================================
 * MASTER SECURITY LAYER CONTROLLER (CRCCF FRONTEND SECURITY)
 * ============================================================================
 *
 * Central configuration and coordination layer integrating:
 * 1. UIProtectionLayer: UI events, clipboard, right-click, shortcuts, DOM & masking
 * 2. URLProtectionLayer: 30-Feature URL, Route, Navigation, Deep-Link & History Protection
 *
 * MASTER SWITCH:
 * Set SECURITY_CONFIG.enabled = false (or pass enabled={false} to <SecurityLayer>)
 * to instantly and cleanly deactivate the entire frontend security layer.
 * ============================================================================
 */

export const SECURITY_CONFIG = {
  // MASTER SWITCH: Controls all frontend security features globally
  enabled: true,

  // Feature-level granular switches
  features: {
    // UI Interaction Protection (SEC-001 to SEC-011)
    uiProtection: true,
    rightClickProtection: true,
    textSelectionProtection: true,
    imageDragProtection: true,
    imageDownloadDeterrence: true,
    keyboardShortcutProtection: true,
    ctrlUProtection: true,
    ctrlSProtection: true,
    f12Deterrence: true,
    devToolsDeterrence: true,
    copyPasteProtection: true,
    printProtection: true,
    protectPrintScreen: true,
    blurOnCapture: true, // Obfuscates and blurs display on tab switch & window focus loss

    // Error & Diagnostics (SEC-016)
    errorBoundaryEnabled: true,

    // Visual Deterrence (SEC-014) - Disabled by default
    watermarkEnabled: false,

    // Sensitive Content Masking (SEC-013)
    maskSensitiveData: true,

    // URL, Navigation & Route Protection (CRCCF Admin Panel)
    urlProtection: true,
    routeProtection: true,
    directAccessProtection: true,
    deepLinkProtection: true,
    browserHistoryProtection: true,
    validateQueries: false, // Default false to support search & filter queries smoothly
  },

  // Watermark configuration (disabled by default)
  watermark: {
    username: 'CRCCF Admin Intelligence Cell',
    email: '',
    opacity: 0.03,
  },

  // URL & Navigation configuration for Admin Panel
  url: {
    entryRoute: '/',
    homeRoute: '/',
    sessionTimeoutMs: 60 * 60 * 1000,
    allowedQueries: ['tab', 'page', 'search', 'filter', 'category', 'id', 'slug', 'q', 'view', 'control'],
    queryValidationBehavior: 'remove', // 'remove' | 'reject' | 'ignore'
  },
};

/**
 * Master Security Layer Component
 * Wraps the entire application or specific views with unified UI and URL security.
 */
export default function SecurityLayer({
  children,
  enabled = SECURITY_CONFIG.enabled,
  features = {},
  watermark = {},
  className = '',
  style = {},
  ...restProps
}) {
  // If master switch is turned off, render children completely cleanly
  if (!enabled) {
    return <>{children}</>;
  }

  // Merge runtime feature flags with defaults
  const activeFeatures = {
    ...SECURITY_CONFIG.features,
    ...features,
  };

  const activeWatermark = {
    ...SECURITY_CONFIG.watermark,
    ...watermark,
  };

  // Compose the layers: ErrorBoundary -> URLProtectionLayer -> UIProtectionLayer -> Watermark -> Children
  let content = (
    <UIProtectionLayer
      enabled={activeFeatures.uiProtection}
      protectContextMenu={activeFeatures.rightClickProtection}
      protectSelect={activeFeatures.textSelectionProtection}
      protectDrag={activeFeatures.imageDragProtection}
      protectShortcuts={activeFeatures.keyboardShortcutProtection}
      protectCopy={activeFeatures.copyPasteProtection}
      protectPrint={activeFeatures.printProtection}
      protectPrintScreen={activeFeatures.protectPrintScreen}
      blurOnCapture={activeFeatures.blurOnCapture}
      ctrlUProtection={activeFeatures.ctrlUProtection}
      ctrlSProtection={activeFeatures.ctrlSProtection}
      f12Deterrence={activeFeatures.f12Deterrence}
      devToolsDeterrence={activeFeatures.devToolsDeterrence}
      className={className}
      style={style}
      {...restProps}
    >
      {activeFeatures.watermarkEnabled && (
        <SecurityWatermark
          enabled={activeFeatures.watermarkEnabled}
          username={activeWatermark.username}
          email={activeWatermark.email}
          opacity={activeWatermark.opacity}
        />
      )}
      {children}
    </UIProtectionLayer>
  );

  if (activeFeatures.urlProtection) {
    content = (
      <URLProtectionLayer
        enabled={activeFeatures.urlProtection && activeFeatures.routeProtection}
      >
        {content}
      </URLProtectionLayer>
    );
  }

  if (activeFeatures.errorBoundaryEnabled) {
    content = <ErrorBoundary>{content}</ErrorBoundary>;
  }

  return content;
}

/**
 * Convenience all-in-one SecurityWrapper for root components
 */
export const SecurityWrapper = ({ children, ...props }) => {
  return <SecurityLayer {...props}>{children}</SecurityLayer>;
};

// ============================================================================
// RE-EXPORT ALL SECURITY UTILITIES & COMPONENTS FOR CONSUMERS
// ============================================================================
export {
  // UI Protection Layer utilities & components
  UIProtectionLayer,
  isInteractiveField,
  maskPhoneNumber,
  maskEmail,
  maskUserId,
  sanitizeHtml,
  safeSetTextContent,
  safeCreateElement,
  safeSetAttribute,
  safeAppendChild,
  useUIProtection,
  ErrorBoundary,
  SecurityWatermark,
  ProtectedComponent,

  // 30-Feature URL & Route Protection Layer utilities & components
  URLProtectionLayer,
  PUBLIC_ENTRY_ROUTES,
  ROUTE_ACCESS_MATRIX,
  routeSecurityConfig,
  recordInAppNavigation,
  matchRoutePattern,
  isKnownRoute,
  validateRouteStructure,
  validateRouteParameters,
  validateQueryParams,
  isPageReload,
  isSessionExpired,
  validateNavigationSequence,
  validateHistoryState,
  safeRedirect,
  isSafeExternalUrl,
  sanitizeUrl,
  getSafeLinkProps,
  evaluateRouteAccess,
  NotFoundPage,
  RouteErrorBoundary,
  RouteSecurityContext,
  useRouteGuard,
  useNavigationSecurity,
  ProtectedRoute,
  RouteGuard,
  GlobalRouteGuard,
  RouteSecurityProvider,
  AuthGuard,
  AuthProvider,
  useAuth,
  matchRouteConfig,
  env,
  dispatchInternalNavigation,
  mapPathToInternalView,
};
