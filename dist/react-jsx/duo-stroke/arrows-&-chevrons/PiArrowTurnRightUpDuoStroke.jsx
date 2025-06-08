import React from 'react';

/**
 * PiArrowTurnRightUpDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowTurnRightUpDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-turn-right-up icon',
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
      <path d="M15 4L15 12C15 14.8003 15 16.2004 14.455 17.27C13.9757 18.2108 13.2108 18.9757 12.27 19.455C11.2004 20 9.80026 20 7 20H4" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M20 8.85867C18.7037 7.10583 17.1893 5.53153 15.4953 4.1746C15.3499 4.0582 15.175 4 15 4C14.825 4 14.6501 4.0582 14.5047 4.1746C12.8107 5.53153 11.2963 7.10583 10 8.85867" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
