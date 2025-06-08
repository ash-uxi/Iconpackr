import React from 'react';

/**
 * PiMapPinAreaContrast icon from the contrast style in navigation category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMapPinAreaContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'map-pin-area icon',
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
      <path fill="currentColor" d="M12 18c1.685 0 6.737-3.556 6.737-8.889S14.527 2 12.001 2C9.474 2 5.264 3.778 5.264 9.111S10.316 18 12 18" opacity=".28"/>
  <path d="M3.518 17C2.556 17.502 2 18.096 2 18.732 2 20.537 6.477 22 12 22s10-1.463 10-3.268c0-.636-.556-1.23-1.518-1.732m-5.956-8.263a2.526 2.526 0 1 1-5.052 0 2.526 2.526 0 0 1 5.052 0m4.21.374C18.737 14.444 13.685 18 12 18s-6.737-3.556-6.737-8.889S9.473 2 12 2c2.526 0 6.737 1.778 6.737 7.111"/>
    </svg>
  );
}
