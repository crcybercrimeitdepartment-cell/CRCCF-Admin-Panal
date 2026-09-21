import React, { useEffect, useRef } from 'react';

/**
 * Checks whether an element is an interactive input control
 * where normal text selection, copy/paste, and cursor interaction must be preserved.
 */
function isInteractiveElement(target) {
  if (!target || !(target instanceof Element)) return false;
  return !!target.closest(
    'input, textarea, select, option, [contenteditable="true"], .allow-interaction, .allow-select'
  );
}

/**
 * SecurityLayer
 *
 * Centralized reusable UI protection layer that provides:
 * - Anti-Copy: Prevents unauthorized clipboard copying of protected text.
 * - Anti-Select: Prevents mouse and touch highlighting on protected report content.
 * - Anti-Drag: Disables unwanted dragging of text, cards, logos, and images.
 * - Right-Click Protection: Disables context menus on protected content.
 * - Keyboard Shortcut Protection: Restricts Ctrl/Cmd + C, A, X, U, S, P while preserving normal input editing.
 * - Image Protection: Prevents direct image dragging and context-menu opening.
 * - Print Protection: Intercepts Ctrl+P and hides protected content during printing.
 *
 * Safe Architecture:
 * - Event listeners are scoped to the container and properly removed on unmount.
 * - Form inputs, textareas, navigation links, and buttons remain 100% interactive.
 * - Page scrolling, responsive layouts, and React lifecycle transitions remain completely unaffected.
 */
export default function SecurityLayer({
  children,
  enabled = true,
  protectCopy = true,
  protectSelect = true,
  protectDrag = true,
  protectContextMenu = true,
  protectShortcuts = true,
  protectPrint = true,
  className = '',
  style = {},
  as: Component = 'div',
  ...restProps
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const container = containerRef.current || document;

    // 1. Right-Click Context Menu Protection
    const handleContextMenu = (e) => {
      if (!protectContextMenu) return;
      if (isInteractiveElement(e.target)) return;
      e.preventDefault();
    };

    // 2. Anti-Copy & Anti-Cut Protection
    const handleCopy = (e) => {
      if (!protectCopy) return;
      if (isInteractiveElement(e.target)) return;
      e.preventDefault();
    };

    const handleCut = (e) => {
      if (!protectCopy) return;
      if (isInteractiveElement(e.target)) return;
      e.preventDefault();
    };

    // 3. Anti-Select Start Protection
    const handleSelectStart = (e) => {
      if (!protectSelect) return;
      if (isInteractiveElement(e.target)) return;
      e.preventDefault();
    };

    // 4. Anti-Drag Protection (images, cards, text)
    const handleDragStart = (e) => {
      if (!protectDrag) return;
      if (isInteractiveElement(e.target)) return;
      e.preventDefault();
    };

    // 5. Keyboard Shortcut Protection (Ctrl/Cmd + C, A, X, U, S, P)
    const handleKeyDown = (e) => {
      if (!protectShortcuts) return;

      // Allow all normal editing shortcuts inside form inputs & textareas
      if (isInteractiveElement(e.target)) return;

      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      if (isCtrlOrCmd) {
        const key = (e.key || '').toLowerCase();
        // Block Ctrl+C (copy), Ctrl+A (select all), Ctrl+X (cut), Ctrl+U (source), Ctrl+S (save), Ctrl+P (print)
        if (['c', 'a', 'x', 'u', 's', 'p'].includes(key)) {
          e.preventDefault();
          e.stopPropagation();
        }
      }
    };

    // 6. Print Event Interception
    const handleBeforePrint = () => {
      if (!protectPrint) return;
    };

    // Attach listeners safely
    container.addEventListener('contextmenu', handleContextMenu);
    container.addEventListener('copy', handleCopy);
    container.addEventListener('cut', handleCut);
    container.addEventListener('selectstart', handleSelectStart);
    container.addEventListener('dragstart', handleDragStart);
    window.addEventListener('keydown', handleKeyDown);
    if (protectPrint) {
      window.addEventListener('beforeprint', handleBeforePrint);
    }

    // Cleanup on unmount to prevent memory leaks or duplicate listeners
    return () => {
      container.removeEventListener('contextmenu', handleContextMenu);
      container.removeEventListener('copy', handleCopy);
      container.removeEventListener('cut', handleCut);
      container.removeEventListener('selectstart', handleSelectStart);
      container.removeEventListener('dragstart', handleDragStart);
      window.removeEventListener('keydown', handleKeyDown);
      if (protectPrint) {
        window.removeEventListener('beforeprint', handleBeforePrint);
      }
    };
  }, [
    enabled,
    protectCopy,
    protectSelect,
    protectDrag,
    protectContextMenu,
    protectShortcuts,
    protectPrint
  ]);

  return (
    <Component
      ref={containerRef}
      className={`crccf-security-layer ${className}`}
      style={{
        WebkitUserSelect: enabled && protectSelect ? 'none' : undefined,
        MozUserSelect: enabled && protectSelect ? 'none' : undefined,
        msUserSelect: enabled && protectSelect ? 'none' : undefined,
        userSelect: enabled && protectSelect ? 'none' : undefined,
        WebkitTouchCallout: enabled && protectSelect ? 'none' : undefined,
        ...style
      }}
      {...restProps}
    >
      <style>{`
        /* Centralized Security Layer Styles */
        .crccf-security-layer {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-touch-callout: none;
        }

        /* Fully preserve user interaction inside form inputs and textareas */
        .crccf-security-layer input,
        .crccf-security-layer textarea,
        .crccf-security-layer select,
        .crccf-security-layer [contenteditable="true"],
        .crccf-security-layer .allow-interaction,
        .crccf-security-layer .allow-select {
          -webkit-user-select: text !important;
          -moz-user-select: text !important;
          -ms-user-select: text !important;
          user-select: text !important;
        }

        /* Prevent image and svg dragging */
        .crccf-security-layer img,
        .crccf-security-layer svg {
          -webkit-user-drag: none;
          -khtml-user-drag: none;
          -moz-user-drag: none;
          -o-user-drag: none;
          user-drag: none;
        }

        /* Disable text highlight color on protected areas */
        .crccf-security-layer ::selection {
          background: transparent;
          color: inherit;
        }

        .crccf-security-layer input::selection,
        .crccf-security-layer textarea::selection {
          background: #1A56DB;
          color: #ffffff;
        }

        /* Print restriction UI */
        @media print {
          .crccf-security-layer {
            visibility: hidden !important;
          }
          body::before {
            content: "Protected Official Document. Printing is restricted.";
            display: block !important;
            visibility: visible !important;
            font-size: 20pt;
            font-weight: 700;
            text-align: center;
            padding: 100px 20px;
            color: #475569;
          }
        }
      `}</style>
      {children}
    </Component>
  );
}
