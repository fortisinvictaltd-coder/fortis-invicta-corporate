'use client';

import { useEffect } from 'react';
import { trackVisitor } from '@/lib/tracker';

export default function VisitorTracker() {
  useEffect(() => {
    trackVisitor();

    const handleRouteChange = () => {
      setTimeout(trackVisitor, 100);
    };

    window.addEventListener('popstate', handleRouteChange);

    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function (...args) {
      originalPushState.apply(this, args as Parameters<typeof history.pushState>);
      setTimeout(trackVisitor, 100);
    };

    history.replaceState = function (...args) {
      originalReplaceState.apply(this, args as Parameters<typeof history.replaceState>);
      setTimeout(trackVisitor, 100);
    };

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, []);

  return null;
}
