import React from 'react';

/**
 * PiKeyLeft02DuoSolid icon from the duo-solid style in security category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiKeyLeft02DuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'key-left-02 icon',
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
      <path fill={color || "currentColor"} fillRule="evenodd" d="M12.468 10c0-.154.036-.307.105-.445a5.5 5.5 0 1 1 0 4.89A1 1 0 0 1 12.47 14h-2.468l-1.146-1.146a.5.5 0 0 0-.708 0L7.001 14h-3l-2-2 2-2z" clipRule="evenodd" opacity=".28" /> <path d="M13.001 10h-9l-2 2 2 2h3l1.146-1.146a.5.5 0 0 1 .708 0L10.001 14h3" /> <path strokeWidth="2.2" d="M18.501 13v-2a1.25 1.25 0 0 1 0 2" />
    </svg>
  );
}
