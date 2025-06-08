import React from 'react';

/**
 * PiDemergeStroke icon from the stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDemergeStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'demerge icon',
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
      <path d="M9.94268 4.28582C8.1811 3.99085 6.40091 3.92395 4.64657 4.08624C4.49608 4.10016 4.36296 4.165 4.26398 4.26398M4.28582 9.94268C3.99085 8.1811 3.92395 6.40091 4.08624 4.64657C4.10016 4.49608 4.165 4.36296 4.26398 4.26398M4.26398 4.26398L12 12L12 20M14.0573 4.28582C15.8189 3.99085 17.5991 3.92395 19.3534 4.08624C19.5039 4.10016 19.637 4.165 19.736 4.26398M19.7142 9.94268C20.0092 8.1811 20.0761 6.40091 19.9138 4.64657C19.8998 4.49608 19.835 4.36296 19.736 4.26398M19.736 4.26398L15 9" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
