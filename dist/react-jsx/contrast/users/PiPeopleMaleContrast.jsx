import React from 'react';

/**
 * PiPeopleMaleContrast icon from the contrast style in users category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPeopleMaleContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'people-male icon',
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
      <path fill="currentColor" d="M14.5 4.534a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-7.06 8.85a4 4 0 0 1 3.944-3.337h1.225a4 4 0 0 1 3.946 3.345l.44 2.655L15 16l-.671 4.027a2.36 2.36 0 0 1-4.658 0L9 16H7z" opacity=".28"/>
  <path d="M14.5 4.535a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M7.44 13.385a4 4 0 0 1 3.944-3.338h1.225a4 4 0 0 1 3.946 3.345l.44 2.655L15 16l-.671 4.027a2.36 2.36 0 0 1-4.658 0L9 16H7z"/>
    </svg>
  );
}
