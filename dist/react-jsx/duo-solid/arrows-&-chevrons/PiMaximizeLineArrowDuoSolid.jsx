import React from 'react';

/**
 * PiMaximizeLineArrowDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMaximizeLineArrowDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'maximize-line-arrow icon',
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
      <path fill={color || "currentColor"} d="M19.448 3.09c-1.841-.17-3.708-.1-5.553.21a1 1 0 0 0-.487 1.744l1.663 1.429a23 23 0 0 1 2.46 2.459l1.427 1.662a1 1 0 0 0 1.745-.486 21.6 21.6 0 0 0 .21-5.554 1.62 1.62 0 0 0-1.465-1.464M5.044 13.406a1 1 0 0 0-1.744.486 21.6 21.6 0 0 0-.21 5.554 1.62 1.62 0 0 0 1.464 1.463c1.842.17 3.708.1 5.554-.209a1 1 0 0 0 .486-1.744l-1.662-1.428a23 23 0 0 1-2.46-2.46z" /> <path d="M6.948 17.052 17.053 6.947" opacity=".28" />
    </svg>
  );
}
