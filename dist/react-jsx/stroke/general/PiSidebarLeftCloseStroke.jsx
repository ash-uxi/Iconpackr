import React from 'react';

/**
 * PiSidebarLeftCloseStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSidebarLeftCloseStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'sidebar-left-close icon',
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
      <path d="M9 20.989C9.57703 21 10.2365 21 11 21H13C15.8003 21 17.2004 21 18.27 20.455C19.2108 19.9757 19.9757 19.2108 20.455 18.27C21 17.2004 21 15.8003 21 13V11C21 8.19974 21 6.79961 20.455 5.73005C19.9757 4.78924 19.2108 4.02433 18.27 3.54497C17.2004 3 15.8003 3 13 3H11C10.2365 3 9.57703 3 9 3.01105M9 20.989C7.46078 20.9595 6.50797 20.8514 5.73005 20.455C4.78924 19.9757 4.02433 19.2108 3.54497 18.27C3 17.2004 3 15.8003 3 13V11C3 8.19974 3 6.79961 3.54497 5.73005C4.02433 4.78924 4.78924 4.02433 5.73005 3.54497C6.50797 3.14859 7.46078 3.04052 9 3.01105M9 20.989L9 3.01105M16.5 9C15.4036 9.79655 14.4215 10.7303 13.5793 11.7766C13.4736 11.908 13.4736 12.092 13.5793 12.2234C14.4215 13.2697 15.4036 14.2035 16.5 15" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
