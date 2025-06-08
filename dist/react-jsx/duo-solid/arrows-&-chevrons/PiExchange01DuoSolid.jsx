import React from 'react';

/**
 * PiExchange01DuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiExchange01DuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'exchange-01 icon',
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
      <path fill={color || "currentColor"} d="M15.099 16.357a1 1 0 0 0-.887 1.61 15.7 15.7 0 0 0 2.59 2.614 1.92 1.92 0 0 0 2.395 0 15.7 15.7 0 0 0 2.591-2.614 1 1 0 0 0-.887-1.61l-.626.062a23 23 0 0 1-4.55 0z" /> <path d="M18 17.532V7a3 3 0 1 0-6 0v10a3 3 0 1 1-6 0V6.468" opacity=".28" /> <path fill={color || "currentColor"} d="M6 3c-.423 0-.847.14-1.197.419a15.7 15.7 0 0 0-2.591 2.614 1 1 0 0 0 .887 1.61l.626-.062a23 23 0 0 1 4.55 0l.626.062a1 1 0 0 0 .887-1.61 15.7 15.7 0 0 0-2.59-2.614A1.92 1.92 0 0 0 6 3" />
    </svg>
  );
}
