import React from 'react';

/**
 * PiFile02PngFormatStroke icon from the stroke style in files-&-folders category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFile02PngFormatStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'file-02-png-format icon',
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
      <path d="M11 2H12C16.4183 2 20 5.58172 20 10H19.8293C19.4175 8.83481 18.3062 8 17 8L16.4 8C16.0284 8 15.8426 8 15.6871 7.97538C14.8313 7.83983 14.1602 7.16865 14.0246 6.31287C14 6.1574 14 5.9716 14 5.6V5C14 3.34315 12.6569 2 11 2ZM11 2H8C5.79086 2 4 3.79086 4 6V10M3 19V14H4.5C5.88071 14 7 15.1193 7 16.5C7 17.8807 5.88071 19 4.5 19H3ZM3 19V21M10 21V14L14 21V14M21.2496 15C20.7987 14.3814 20.1812 14 19.5 14C18.1193 14 17 15.567 17 17.5C17 19.433 18.1193 21 19.5 21C20.1812 21 20.7987 20.6186 21.2496 20V18H20.5" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
