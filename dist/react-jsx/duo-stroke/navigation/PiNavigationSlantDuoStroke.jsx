import React from 'react';

/**
 * PiNavigationSlantDuoStroke icon from the duo-stroke style in navigation category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiNavigationSlantDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'navigation-slant icon',
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
      <path d="M13.9386 20.7145C13.6583 21.1596 12.98 21.0449 12.8617 20.5323L11.5139 14.6918C11.2608 13.5953 10.4046 12.739 9.30803 12.486L3.46755 11.1382C2.955 11.0199 2.84026 10.3416 3.2854 10.0613" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M9.30803 12.486L3.46755 11.1382C2.955 11.0199 2.84026 10.3416 3.2854 10.0613L3.77015 9.75611C8.84856 6.55859 14.4497 4.27905 20.3177 3.02162C20.7123 2.93706 21.0628 3.2876 20.9783 3.68221C19.7209 9.5502 17.4413 15.1513 14.2438 20.2298L13.9386 20.7145C13.6583 21.1596 12.98 21.0449 12.8617 20.5324L11.5139 14.6919C11.2608 13.5953 10.4046 12.7391 9.30803 12.486Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
