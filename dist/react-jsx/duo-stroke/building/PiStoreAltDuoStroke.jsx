import React from 'react';

/**
 * PiStoreAltDuoStroke icon from the duo-stroke style in building category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiStoreAltDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'store-alt icon',
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
      <path d="M2.24927 10.4671L2.56375 7.32238C2.88102 4.1497 3.96849 3 7.33992 3H16.6589C20.0303 3 21.1178 4.1497 21.435 7.32238L21.7495 10.4671C21.848 12.3686 20.5245 14.1026 18.5124 14.1026C16.7143 14.1026 15.2566 12.6449 15.2566 10.8467C15.2566 12.6449 13.7989 14.1026 12.0007 14.1026C10.2025 14.1026 8.7448 12.6449 8.7448 10.8467C8.7448 12.6449 7.28709 14.1026 5.48892 14.1026C3.46958 14.1026 2.16431 12.3685 2.24927 10.4671Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M20 21.0004V13.7426M4 13.7426V18.6004C4 19.4405 4 19.8605 4.16349 20.1814C4.3073 20.4636 4.53677 20.6931 4.81901 20.8369C5.13988 21.0004 5.55992 21.0004 6.4 21.0004H11.6C12.4401 21.0004 12.8601 21.0004 13.181 20.8369C13.4632 20.6931 13.6927 20.4636 13.8365 20.1814C14 19.8605 14 19.4405 14 18.6004V13.417" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
