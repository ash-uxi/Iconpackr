import React from 'react';

/**
 * PiBankDuoSolid icon from the duo-solid style in money-&-payments category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBankDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'bank icon',
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
      <path fill={color || "currentColor"} d="M12.764 1.099a3 3 0 0 0-1.528 0c-.572.15-1.07.524-1.635.95l-.121.091L1.4 8.2A1 1 0 0 0 1 9v1a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V9a1 1 0 0 0-.4-.8l-8.08-6.06-.12-.09c-.567-.427-1.064-.8-1.636-.951M2 20a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2z" /> <path d="M4 13v5m5-5v5m6-5v5m5-5v5" opacity=".28" />
    </svg>
  );
}
