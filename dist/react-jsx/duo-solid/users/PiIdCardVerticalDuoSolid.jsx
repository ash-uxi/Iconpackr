import React from 'react';

/**
 * PiIdCardVerticalDuoSolid icon from the duo-solid style in users category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiIdCardVerticalDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'id-card-vertical icon',
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
      <path fill={color || "currentColor"} d="M7 2.5h10a3.5 3.5 0 0 1 2.349.905l.126.12A3.5 3.5 0 0 1 20.5 6v12a3.5 3.5 0 0 1-3.5 3.5H7a3.5 3.5 0 0 1-2.349-.905l-.126-.12A3.5 3.5 0 0 1 3.5 18V6l.004-.174a3.5 3.5 0 0 1 .901-2.175l.12-.126A3.5 3.5 0 0 1 7 2.5" opacity=".28" /> <path d="M7 6h6m-6 4h3m5.667 6h-3.334c-.736 0-1.333.597-1.333 1.333 0 .369.299.667.667.667h4.666a.667.667 0 0 0 .667-.667c0-.736-.597-1.333-1.333-1.333M15 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    </svg>
  );
}
