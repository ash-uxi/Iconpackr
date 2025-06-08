import React from 'react';

/**
 * PiSolanaFmDuoStroke icon from the duo-stroke style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSolanaFmDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'solana-fm icon',
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
      <path d="M15.5146 12.5C15.0881 15.7993 12.3645 18.3784 8.99998 18.5809M8.48535 11.5C8.92976 8.06212 11.8683 5.40625 15.4272 5.40625" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M18.9876 12.5C18.7271 17.7906 14.3551 22 8.99992 22M5.01221 11.5C5.27272 6.20944 9.64474 2 14.9999 2M8.99992 15C10.6568 15 11.9999 13.6569 11.9999 12C11.9999 10.3431 13.3431 9 14.9999 9" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
