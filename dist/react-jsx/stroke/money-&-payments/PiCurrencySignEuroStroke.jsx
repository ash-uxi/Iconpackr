import React from 'react';

/**
 * PiCurrencySignEuroStroke icon from the stroke style in money-&-payments category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCurrencySignEuroStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'currency-sign-euro icon',
  ...props 
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M17 5.25469C15.8662 4.46381 14.4872 4 13 4C9.47353 4 6.55612 6.60771 6.07089 10M17 18.7453C15.8662 19.5362 14.4872 20 13 20C9.47353 20 6.55612 17.3923 6.07089 14M6.07089 10C6.02417 10.3266 6 10.6605 6 11V13C6 13.3395 6.02417 13.6734 6.07089 14M6.07089 10H3M6.07089 10L14 10M6.07089 14H3M6.07089 14H13" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
