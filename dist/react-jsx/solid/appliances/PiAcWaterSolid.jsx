import React from 'react';

/**
 * PiAcWaterSolid icon from the solid style in appliances category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAcWaterSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'ac-water icon',
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
      <path d="M16.1595 14.2624C16.3327 14.1571 16.6348 14 17 14C17.3651 14 17.6672 14.1571 17.8404 14.2624C18.041 14.3842 18.2345 14.5408 18.4115 14.7044C18.768 15.0339 19.14 15.4687 19.4759 15.9385C19.813 16.41 20.1339 16.945 20.3743 17.4843C20.6076 18.0078 20.7999 18.6121 20.7999 19.2C20.7999 21.2987 19.0986 23 17 23C14.9013 23 13.2 21.2987 13.2 19.2C13.2 18.6121 13.3923 18.0078 13.6256 17.4843C13.866 16.945 14.1869 16.41 14.524 15.9385C14.8599 15.4687 15.2319 15.0339 15.5884 14.7044C15.7654 14.5408 15.9589 14.3842 16.1595 14.2624Z" fill="currentColor" stroke="none"/>
  <path d="M4 3C2.34315 3 1 4.34315 1 6V12C1 12.5523 1.44772 13 2 13H22C22.5523 13 23 12.5523 23 12V6C23 4.34315 21.6569 3 20 3H4ZM15 8C15 7.44772 15.4477 7 16 7H18C18.5523 7 19 7.44772 19 8C19 8.55228 18.5523 9 18 9H16C15.4477 9 15 8.55228 15 8Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
