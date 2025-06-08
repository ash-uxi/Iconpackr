import React from 'react';

/**
 * PiUserTwoStroke icon from the stroke style in users category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiUserTwoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'user-two icon',
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
      <path d="M20.3946 21.0001H20.5C21.6046 21.0001 22.5 20.1047 22.5 19.0001C22.5 17.2332 21.3543 15.7338 19.7653 15.2044M16.404 3.48145C17.6524 4.15837 18.5 5.48025 18.5 7.00012C18.5 8.51999 17.6524 9.84187 16.404 10.5188M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7ZM6 15H13C15.2091 15 17 16.7909 17 19C17 20.1046 16.1046 21 15 21H4C2.89543 21 2 20.1046 2 19C2 16.7909 3.79086 15 6 15Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
