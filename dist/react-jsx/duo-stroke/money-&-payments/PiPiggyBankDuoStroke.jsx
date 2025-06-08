import React from 'react';

/**
 * PiPiggyBankDuoStroke icon from the duo-stroke style in money-&-payments category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPiggyBankDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'piggy-bank icon',
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
      <path d="M1 10C1 11.103 1.945 12.005 3.1 12.005H4.18397M4.18397 12.005C4.15451 13.4482 4.72834 14.9654 6.095 16.338C6.19191 16.433 6.24759 16.5623 6.25 16.698C6.25 17.606 5.756 20 7.3 20H8.75C9.669 20 9.97 18.912 10.305 18.272C10.604 17.701 13.446 17.701 13.745 18.272C14.08 18.911 14.381 20 15.299 20H16.75C18.376 20 17.8 17.236 17.8 16.299C17.8 14.666 22 14.612 22 13.482V10.473C22 10.196 21.765 9.97197 21.475 9.97197C20.936 9.97197 19.995 10.168 19.851 9.47397C19.727 8.86897 19.378 8.47897 19.003 8.11397C18.499 7.62297 18.85 6.08497 18.85 5.45897C18.85 5.18197 18.613 4.95397 18.328 5.00797C17.328 5.19797 16.466 5.89097 16.012 6.45297C15.814 6.69897 15.436 6.82797 15.14 6.69797C9.49115 4.21427 4.26993 7.79441 4.18397 12.005Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M16 11H16.01" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
