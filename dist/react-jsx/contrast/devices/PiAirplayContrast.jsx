import React from 'react';

/**
 * PiAirplayContrast icon from the contrast style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAirplayContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'airplay icon',
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
      <path d="M8 14a5 5 0 1 1 8 0m2.233 3.493a9 9 0 1 0-12.466 0M9.887 21h4.226c.942 0 1.414 0 1.679-.197a1 1 0 0 0 .4-.723c.027-.33-.223-.73-.722-1.528l-.756-1.21c-.9-1.44-1.35-2.16-1.926-2.407a2 2 0 0 0-1.576 0c-.576.247-1.026.967-1.926 2.407l-.756 1.21c-.5.799-.749 1.198-.723 1.528a1 1 0 0 0 .401.723c.265.197.737.197 1.679.197M12 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
  <path fill="currentColor" d="M9.286 17.343c.9-1.44 1.35-2.16 1.926-2.407a2 2 0 0 1 1.576 0c.576.247 1.026.967 1.926 2.407l.756 1.21c.5.8.749 1.198.722 1.528a1 1 0 0 1-.4.723c-.265.197-.737.197-1.679.197H9.887c-.942 0-1.414 0-1.679-.197a1 1 0 0 1-.4-.723c-.027-.33.223-.73.722-1.528z" opacity=".28"/>
    </svg>
  );
}
