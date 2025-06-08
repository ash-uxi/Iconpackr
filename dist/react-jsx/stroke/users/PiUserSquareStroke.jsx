import React from 'react';

/**
 * PiUserSquareStroke icon from the stroke style in users category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiUserSquareStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'user-square icon',
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
      <path d="M18.7671 20.1645C18.899 19.9249 18.9739 19.6496 18.9739 19.3568C18.9739 17.5029 17.4711 16 15.6172 16H8.38289C6.529 16 5.02612 17.5029 5.02612 19.3568C5.02612 19.6496 5.10111 19.9249 5.23293 20.1645M18.7671 20.1645C19.4806 19.6904 20.0632 19.0389 20.455 18.27C21 17.2004 21 15.8003 21 13V11C21 8.19974 21 6.79961 20.455 5.73005C19.9757 4.78924 19.2108 4.02433 18.27 3.54497C17.2004 3 15.8003 3 13 3H11C8.19974 3 6.79961 3 5.73005 3.54497C4.78924 4.02433 4.02433 4.78924 3.54497 5.73005C3 6.79961 3 8.19974 3 11V13C3 15.8003 3 17.2004 3.54497 18.27C3.9368 19.039 4.51941 19.6905 5.23293 20.1645M18.7671 20.1645C18.6077 20.2704 18.4418 20.3675 18.27 20.455C17.2004 21 15.8003 21 13 21H11C8.19974 21 6.79961 21 5.73005 20.455C5.55825 20.3675 5.39233 20.2704 5.23293 20.1645M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
