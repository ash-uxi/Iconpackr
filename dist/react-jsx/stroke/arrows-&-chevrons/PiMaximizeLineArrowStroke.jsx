import React from 'react';

/**
 * PiMaximizeLineArrowStroke icon from the stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMaximizeLineArrowStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'maximize-line-arrow icon',
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
      <path d="M19.7142 9.94268C20.0092 8.1811 20.0761 6.40091 19.9138 4.64657C19.8998 4.49608 19.835 4.36296 19.736 4.26398M14.0573 4.28582C15.8189 3.99085 17.5991 3.92395 19.3534 4.08624C19.5039 4.10016 19.637 4.165 19.736 4.26398M19.736 4.26398L4.26398 19.736M4.28582 14.0573C3.99085 15.8189 3.92395 17.5991 4.08624 19.3534C4.10016 19.5039 4.165 19.637 4.26398 19.736M9.94268 19.7142C8.1811 20.0092 6.40091 20.0761 4.64657 19.9138C4.49608 19.8998 4.36296 19.835 4.26398 19.736" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
