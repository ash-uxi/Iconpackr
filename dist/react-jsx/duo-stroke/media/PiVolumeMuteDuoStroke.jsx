import React from 'react';

/**
 * PiVolumeMuteDuoStroke icon from the duo-stroke style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiVolumeMuteDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'volume-mute icon',
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
      <path d="M14 18.9127V5.08767C14 3.37675 12.0661 2.38153 10.6739 3.37599L7.86092 5.38524C7.29344 5.79058 6.6464 6.0709 5.96255 6.20767C3.6585 6.66848 2 8.69152 2 11.0412V12.9592C2 15.3088 3.6585 17.3319 5.96255 17.7927C6.6464 17.9295 7.29344 18.2098 7.86092 18.6151L10.6739 20.6244C12.0661 21.6188 14 20.6236 14 18.9127Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M22 10L19.5 12.5M19.5 12.5L17 15M19.5 12.5L22 15M19.5 12.5L17 10" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
