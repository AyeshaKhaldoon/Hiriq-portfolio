'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

type WindowWithLinkedIn = Window & {
  _linkedin_partner_id?: string;
  _linkedin_data_partner_ids?: string[];
  lintrk?: (action: string, data?: Record<string, string>) => void;
};

type LinkedInInsightTagProps = {
  partnerId?: string;
};

export default function LinkedInInsightTag({ partnerId }: LinkedInInsightTagProps) {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const updateConsent = () => {
      setHasConsent(window.localStorage.getItem('hiriq_cookie_consent') === 'accepted');
    };

    updateConsent();
    window.addEventListener('hiriq:cookie-consent-accepted', updateConsent);
    return () => window.removeEventListener('hiriq:cookie-consent-accepted', updateConsent);
  }, []);

  if (!partnerId || !hasConsent) return null;

  return (
    <Script id="linkedin-insight-tag" strategy="afterInteractive">
      {`
        _linkedin_partner_id = "${partnerId}";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        (function(l) {
          if (!l) {
            window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q = [];
          }
          var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";
          b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);
        })(window.lintrk);
      `}
    </Script>
  );
}

export type { WindowWithLinkedIn };
