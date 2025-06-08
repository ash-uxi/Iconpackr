import React from 'react';

/**
 * PiWaterDropletDuoSolid icon from the duo-solid style in weather category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiWaterDropletDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'water-droplet icon',
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
      <path fill={color || "currentColor"} fillRule="evenodd" d="M12.646 2.237a1 1 0 0 0-1.292 0C4.76 7.815 2.94 12.694 4.023 16.405 5.09 20.065 8.823 22 12 22s6.91-1.936 7.977-5.595c1.082-3.71-.738-8.59-7.331-14.168" clipRule="evenodd" opacity=".28" /> <path d="M19.257 14c.218 4.446-3.807 7-7.257 7s-7.475-2.554-7.257-7" />
    </svg>
  );
}
