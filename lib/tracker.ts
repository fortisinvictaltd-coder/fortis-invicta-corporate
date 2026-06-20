export async function trackVisitor() {
  try {
    const sessionId = getOrCreateSessionId();
    const deviceType = /Mobile|Tablet|Phone/.test(navigator.userAgent) ? 'mobile' : 'desktop';

    let country = 'Unknown';
    try {
      const ipResponse = await fetch('https://ipapi.co/country/');
      country = await ipResponse.text();
    } catch {
      // Silent fail
    }

    await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        session_id: sessionId,
        page_url: window.location.pathname,
        referrer: document.referrer || 'direct',
        device_type: deviceType,
        browser: navigator.userAgent,
        country: country || 'Unknown',
      }),
    });
  } catch {
    // Silent fail - don't break the user experience
  }
}

function getOrCreateSessionId(): string {
  let sessionId = sessionStorage.getItem('fortis_session_id');

  if (!sessionId) {
    sessionId = `sess_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
    sessionStorage.setItem('fortis_session_id', sessionId);
  }

  return sessionId;
}
