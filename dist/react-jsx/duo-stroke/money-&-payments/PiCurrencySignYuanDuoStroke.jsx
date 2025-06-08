import React from 'react';

/**
 * PiCurrencySignYuanDuoStroke icon from the duo-stroke style in money-&-payments category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCurrencySignYuanDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'currency-sign-yuan icon',
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
      <path d="M5 3L12 11.1M12 11.1L19 3M12 11.1V21" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M6 12H18M6 16H18" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
