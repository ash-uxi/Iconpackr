import React from 'react';

/**
 * PiDivertRightDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDivertRightDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'divert-right icon',
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
      <path d="m1 9 6.879 6.879a3 3 0 0 0 4.242 0L17.5 10.5" opacity=".28" /> <path fill={color || "currentColor"} d="M13.835 7.302a21.8 21.8 0 0 1 5.604-.21 1.624 1.624 0 0 1 1.47 1.469c.172 1.858.1 3.742-.211 5.604a1 1 0 0 1-1.767.46l-.88-1.1a23 23 0 0 0-3.576-3.575l-1.1-.88a1 1 0 0 1 .46-1.768" />
    </svg>
  );
}
