import React from 'react';

/**
 * PiSettings03DuoSolid icon from the duo-solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSettings03DuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'settings-03 icon',
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
      <path d="M11 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0" /> <path fill={color || "currentColor"} d="M13.102 2.116a5.3 5.3 0 0 0-2.203 0c-.823.175-1.58.611-2.696 1.256l-1.78 1.027c-1.117.644-1.874 1.08-2.437 1.705a5.3 5.3 0 0 0-1.102 1.907c-.26.8-.26 1.674-.259 2.961v2.056c0 1.287 0 2.16.26 2.96.229.707.604 1.356 1.101 1.908.563.625 1.32 1.061 2.436 1.705l1.781 1.027c1.116.645 1.873 1.081 2.696 1.256a5.3 5.3 0 0 0 2.203 0c.823-.175 1.58-.611 2.695-1.256l1.78-1.027c1.117-.644 1.874-1.08 2.437-1.705a5.3 5.3 0 0 0 1.102-1.907c.26-.8.26-1.674.26-2.961v-2.056c0-1.287 0-2.16-.26-2.96a5.3 5.3 0 0 0-1.102-1.908c-.563-.625-1.32-1.061-2.436-1.705l-1.781-1.027C14.68 2.727 13.925 2.29 13.1 2.116" opacity=".28" />
    </svg>
  );
}
