import React from 'react';

/**
 * PiTimerRemoveDuoSolid icon from the duo-solid style in time category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTimerRemoveDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'timer-remove icon',
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
      <path d="M10 1C9.44772 1 9 1.44772 9 2C9 2.55228 9.44772 3 10 3H11V5.05493C6.50005 5.55237 3 9.36745 3 14C3 18.9706 7.02944 23 12 23C16.9706 23 21 18.9706 21 14C21 9.36745 17.5 5.55237 13 5.05493V3H14C14.5523 3 15 2.55228 15 2C15 1.44772 14.5523 1 14 1H10Z" fill={color || "currentColor"} opacity="0.28" /> <path d="M20.0738 4.61467C19.6833 4.22415 19.0501 4.22415 18.6596 4.61467C18.2691 5.00519 18.2691 5.63836 18.6596 6.02888L19.7203 7.08954C20.1108 7.48007 20.7439 7.48007 21.1345 7.08954C21.525 6.69902 21.525 6.06586 21.1345 5.67533L20.0738 4.61467Z" fill={color || "currentColor"} /> <path d="M8.90039 13.0034C8.34811 13.0034 7.90039 13.4512 7.90039 14.0034C7.90039 14.5557 8.34811 15.0034 8.90039 15.0034H15.1004C15.6527 15.0034 16.1004 14.5557 16.1004 14.0034C16.1004 13.4512 15.6527 13.0034 15.1004 13.0034H8.90039Z" fill={color || "currentColor"} />
    </svg>
  );
}
