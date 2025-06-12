import React from 'react';

/**
 * PiSampleContrast icon from the contrast style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSampleContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'sample icon',
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

      {...props}
    >
      <path fill="currentColor" d="M14.15 2c.46.06.86.35 1.07.79.24.5 0 1.5-.5 3.49l-.41 1.67c-.2.8-.3 1.19-.23 1.53q.09.46.42.8c.24.23.61.34 1.35.55l.48.14c1.41.4 2.12.61 2.4 1.03.25.36.33.83.22 1.26-.45 1.75-8.3 7.95-10.02 7.73a1.4 1.4 0 0 1-1.06-.78c-.24-.5 0-1.49.49-3.45l.37-1.5c.2-.79.3-1.19.23-1.53a1.5 1.5 0 0 0-.43-.79c-.24-.24-.6-.34-1.34-.56l-.54-.15c-1.4-.4-2.1-.6-2.38-1.02a1.6 1.6 0 0 1-.22-1.26c.45-1.8 8.39-8.14 10.1-7.95"/>
    </svg>
  );
}
