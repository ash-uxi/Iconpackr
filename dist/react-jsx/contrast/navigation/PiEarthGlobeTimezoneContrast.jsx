import React from 'react';

/**
 * PiEarthGlobeTimezoneContrast icon from the contrast style in navigation category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiEarthGlobeTimezoneContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'earth-globe-timezone icon',
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
      <path fill="currentColor" d="M12 21.15A9.15 9.15 0 1 1 21.15 12c0 .854-.123 1.685-.353 2.475l.012.01a4.5 4.5 0 1 1-6.325 6.325l-.009-.012c-.79.229-1.621.352-2.475.352" opacity=".28"/>
  <path d="M13.919 3.052q.08.464.08.948c0 2.429-1.563 4.52-3.811 5.465.112.322.173.668.173 1.028 0 .687-.222 1.322-.599 1.837a1.742 1.742 0 1 1-2.757 1.27A3.117 3.117 0 0 1 4.38 9.265a6.6 6.6 0 0 1-.917-.563m10.457-5.65a9.153 9.153 0 0 0-10.457 5.65m10.457-5.65c4.132.882 7.23 4.553 7.23 8.948 0 .861-.118 1.694-.34 2.484M3.461 8.702A9.15 9.15 0 0 0 14.484 20.81M18 16.5v2h1.5m1.308-4.016a4.5 4.5 0 0 0-6.325 6.325m6.325-6.325a4.5 4.5 0 1 1-6.325 6.325"/>
    </svg>
  );
}
