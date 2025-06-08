import React from 'react';

/**
 * PiPeopleFemaleContrast icon from the contrast style in users category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPeopleFemaleContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'people-female icon',
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
      <path fill="currentColor" fillRule="evenodd" d="M12 7.034a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M11.998 10a3.74 3.74 0 0 0-3.648 2.926L7 19h2.115l.756 1.638a2.345 2.345 0 0 0 4.258 0L14.885 19h2.1l-1.338-6.068A3.74 3.74 0 0 0 11.997 10z" clipRule="evenodd" opacity=".28"/>
  <path d="M14.5 4.535a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M8.35 12.926a3.737 3.737 0 0 1 7.297.006L16.986 19h-2.1l-.757 1.638a2.345 2.345 0 0 1-4.258 0L9.115 19H7z"/>
    </svg>
  );
}
