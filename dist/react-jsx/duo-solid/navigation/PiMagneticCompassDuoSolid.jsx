import React from 'react';

/**
 * PiMagneticCompassDuoSolid icon from the duo-solid style in navigation category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMagneticCompassDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'magnetic-compass icon',
  ...props 
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M11.9996 1.84998C6.39392 1.84998 1.84961 6.39429 1.84961 12C1.84961 17.6057 6.39392 22.15 11.9996 22.15C17.6053 22.15 22.1496 17.6057 22.1496 12C22.1496 6.39429 17.6053 1.84998 11.9996 1.84998Z" fill={color || "currentColor"} opacity="0.28" /> <path d="M16.2463 9.63544C16.3152 8.56896 15.431 7.68484 14.3646 7.75371C10.8129 7.98306 7.98312 10.8128 7.75377 14.3645C7.6849 15.431 8.56903 16.3151 9.6355 16.2462C13.1872 16.0169 16.017 13.1872 16.2463 9.63544Z" fill={color || "currentColor"} />
    </svg>
  );
}
