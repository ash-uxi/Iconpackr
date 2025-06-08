import React from 'react';

/**
 * PiVolumeMuteDuoSolid icon from the duo-solid style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiVolumeMuteDuoSolid({ 
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
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path fill={color || "currentColor"} d="M15 5.087c0-2.524-2.853-3.992-4.907-2.525L7.28 4.572a3.9 3.9 0 0 1-1.514.655A5.93 5.93 0 0 0 1 11.04v1.918a5.93 5.93 0 0 0 4.766 5.814 3.9 3.9 0 0 1 1.514.656l2.813 2.009C12.147 22.905 15 21.437 15 18.913z" opacity=".28" /> <path d="m22 10-2.5 2.5m0 0L17 15m2.5-2.5L22 15m-2.5-2.5L17 10" />
    </svg>
  );
}
