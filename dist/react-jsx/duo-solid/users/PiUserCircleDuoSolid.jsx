import React from 'react';

/**
 * PiUserCircleDuoSolid icon from the duo-solid style in users category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiUserCircleDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'user-circle icon',
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
      <path d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1Z" fill={color || "currentColor"} opacity="0.28" /> <path d="M12.0002 6.25C9.92918 6.25 8.25025 7.92893 8.25025 10C8.25025 12.0711 9.92918 13.75 12.0002 13.75C14.0713 13.75 15.7502 12.0711 15.7502 10C15.7502 7.92893 14.0713 6.25 12.0002 6.25Z" fill={color || "currentColor"} /> <path d="M19.3862 17.1441C18.5977 15.8494 17.1347 15 15.5002 15H8.50023C6.86582 15 5.40279 15.8494 4.61426 17.1441C6.24071 19.475 8.94239 21 12.0002 21C15.0581 21 17.7598 19.475 19.3862 17.1441Z" fill={color || "currentColor"} />
    </svg>
  );
}
