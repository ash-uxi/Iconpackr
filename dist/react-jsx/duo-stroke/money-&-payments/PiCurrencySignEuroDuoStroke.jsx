import React from 'react';

/**
 * PiCurrencySignEuroDuoStroke icon from the duo-stroke style in money-&-payments category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCurrencySignEuroDuoStroke({ 
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
      <path d="M17 5.25469C15.8662 4.46381 14.4872 4 13 4C9.13401 4 6 7.13401 6 11V13C6 16.866 9.13401 20 13 20C14.4872 20 15.8662 19.5362 17 18.7453" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M3 10H14M3 14H13" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
