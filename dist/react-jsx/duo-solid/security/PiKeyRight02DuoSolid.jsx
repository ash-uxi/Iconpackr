import React from 'react';

/**
 * PiKeyRight02DuoSolid icon from the duo-solid style in security category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiKeyRight02DuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'key-right-02 icon',
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
      <path d="M12 10h9l2 2-2 2h-3l-1.146-1.146a.5.5 0 0 0-.708 0L15 14h-3" /> <path fill={color || "currentColor"} fillRule="evenodd" d="M12.533 10a1 1 0 0 0-.105-.445 5.5 5.5 0 1 0 0 4.89 1 1 0 0 0 .104-.445H15l1.146-1.146a.5.5 0 0 1 .708 0L18 14h3l2-2-2-2z" clipRule="evenodd" opacity=".28" /> <path strokeWidth="2.2" d="M6.5 13v-2a1.25 1.25 0 0 0 0 2" />
    </svg>
  );
}
