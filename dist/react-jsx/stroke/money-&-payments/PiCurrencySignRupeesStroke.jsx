import React from 'react';

/**
 * PiCurrencySignRupeesStroke icon from the stroke style in money-&-payments category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCurrencySignRupeesStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'currency-sign-rupees icon',
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
      <path d="M5 4H11.0208M11.0208 4H19M11.0208 4C13.7741 4 16.0093 6.2259 16.0207 8.97917L16.0208 9M15 21L5.5 14H11.0208C13.7834 14 16.021 11.76 16.0208 9M16.0208 9H5M16.0208 9H19" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
