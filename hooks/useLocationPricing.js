import { useState, useEffect } from 'react';

const LOCATION_CONFIG = {
  US: { currency: 'USD', symbol: '$', multiplier: 1.67, name: 'United States', discount: 0.6 },
  PK: { currency: 'PKR', symbol: 'Rs', multiplier: 280, name: 'Pakistan', discount: 0.6 },
  QA: { currency: 'QAR', symbol: 'ر.ق', multiplier: 6.07, name: 'Qatar', discount: 0.6 },
  AE: { currency: 'AED', symbol: 'د.إ', multiplier: 6.12, name: 'UAE', discount: 0.6 },
  DEFAULT: { currency: 'USD', symbol: '$', multiplier: 1.67, name: 'International', discount: 0.6 }
};

export function useLocationPricing() {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const code = data.country_code;
        setLocation(LOCATION_CONFIG[code] || LOCATION_CONFIG.DEFAULT);
      })
      .catch(() => setLocation(LOCATION_CONFIG.DEFAULT))
      .finally(() => setIsLoading(false));
  }, []);

  const calculatePrice = (baseUSD) => {
    if (!location) return baseUSD;
    let price = baseUSD;
    if (location.discount) price *= location.discount;
    price *= location.multiplier;
    return Math.round(price);
  };

  return { location, isLoading, calculatePrice };
}