import React from 'react';

/**
 * PiUserUser02DuoSolid icon from the duo-solid style in users category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiUserUser02DuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'user-user-02 icon',
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
      <path d="M12 2.25C9.37665 2.25 7.25 4.37665 7.25 7C7.25 9.62335 9.37665 11.75 12 11.75C14.6234 11.75 16.75 9.62335 16.75 7C16.75 4.37665 14.6234 2.25 12 2.25Z" fill={color || "currentColor"} /> <path d="M15.2244 13.7228C18.019 12.6749 21 14.7407 21 17.7253C21 20.0861 19.0862 22 16.7253 22H7.27466C4.91383 22 3 20.0861 3 17.7253C3 14.7407 5.98103 12.6749 8.7756 13.7228L10.701 14.4448C11.5385 14.7589 12.4615 14.7589 13.299 14.4448L15.2244 13.7228Z" fill={color || "currentColor"} opacity="0.28" />
    </svg>
  );
}
