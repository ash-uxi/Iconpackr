import React from 'react';

/**
 * PiTimerOffDuoSolid icon from the duo-solid style in time category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTimerOffDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'timer-off icon',
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
      <g fill={color || "currentColor"} opacity=".28"> <path d="M10 1a1 1 0 0 0 0 2h1v2.055A9 9 0 0 0 4.611 19.14a1 1 0 0 0 1.528.135L17.275 8.14a1 1 0 0 0-.135-1.528A8.96 8.96 0 0 0 13 5.055V3h1a1 1 0 1 0 0-2zM20.08 10.03a1 1 0 0 0-1.605-.265l-10.71 10.71a1 1 0 0 0 .265 1.604A9 9 0 0 0 20.08 10.03" /> </g> <path d="M22 2 2 22" />
    </svg>
  );
}
