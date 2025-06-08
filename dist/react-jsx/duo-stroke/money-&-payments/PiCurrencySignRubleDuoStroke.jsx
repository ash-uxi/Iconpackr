import React from 'react';

/**
 * PiCurrencySignRubleDuoStroke icon from the duo-stroke style in money-&-payments category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCurrencySignRubleDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'currency-sign-ruble icon',
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
      <path d="M5 16H15" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M8 12H14C16.2091 12 18 10.2091 18 8C18 5.79086 16.2091 4 14 4H10.8571C10.0592 4 9.66019 4 9.33944 4.11223C8.76495 4.31326 8.31326 4.76495 8.11223 5.33944C8 5.66019 8 6.05917 8 6.85714V12ZM8 12L5 12M8 12V21" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
