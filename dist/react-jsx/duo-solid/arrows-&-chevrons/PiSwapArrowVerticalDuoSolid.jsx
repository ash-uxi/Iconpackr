import React from 'react';

/**
 * PiSwapArrowVerticalDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSwapArrowVerticalDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'swap-arrow-vertical icon',
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
      <path fill={color || "currentColor"} d="M12.074 16.116a1 1 0 0 0-.878 1.592 21.2 21.2 0 0 0 3.783 3.933 1.63 1.63 0 0 0 2.042 0 21.2 21.2 0 0 0 3.783-3.933 1 1 0 0 0-.878-1.592l-2.223.165a23 23 0 0 1-3.406 0z" /> <path d="M16 17.344V7m-8-.344V17" opacity=".28" /> <path fill={color || "currentColor"} d="M3.196 6.292a1 1 0 0 0 .878 1.592l2.223-.165a23 23 0 0 1 3.406 0l2.223.165a1 1 0 0 0 .878-1.592A21.2 21.2 0 0 0 9.021 2.36a1.63 1.63 0 0 0-2.042 0 21.2 21.2 0 0 0-3.783 3.933" />
    </svg>
  );
}
