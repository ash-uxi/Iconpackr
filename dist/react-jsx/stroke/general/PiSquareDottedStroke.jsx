import React from 'react';

/**
 * PiSquareDottedStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSquareDottedStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'square-dotted icon',
  ...props 
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M12 3V3.01016M12 20.9898V21M21 11.9949V12.0051M3 11.9949V12.0051M3.45703 6.69713V6.70729M20.5439 6.69713V6.70729M3.45703 17.2771V17.2873M20.5439 17.2771V17.2873M17.3003 3.45092V3.46107M6.71289 3.45092V3.46107M17.3003 20.5311V20.5413M6.71289 20.5311V20.5413" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
