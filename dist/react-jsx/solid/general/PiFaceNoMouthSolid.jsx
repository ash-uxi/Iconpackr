import React from 'react';

/**
 * PiFaceNoMouthSolid icon from the solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFaceNoMouthSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'face-no-mouth icon',
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
      <path d="M12.0001 1.84961C6.39441 1.84961 1.8501 6.39392 1.8501 11.9996C1.8501 17.6053 6.39441 22.1496 12.0001 22.1496C17.6058 22.1496 22.1501 17.6053 22.1501 11.9996C22.1501 6.39392 17.6058 1.84961 12.0001 1.84961ZM9.00012 8.99951C9.55241 8.99951 10.0001 9.44723 10.0001 9.99951V10.9995C10.0001 11.5518 9.55241 11.9995 9.00012 11.9995C8.44784 11.9995 8.00012 11.5518 8.00012 10.9995V9.99951C8.00012 9.44723 8.44784 8.99951 9.00012 8.99951ZM16.0001 9.99951C16.0001 9.44723 15.5524 8.99951 15.0001 8.99951C14.4478 8.99951 14.0001 9.44723 14.0001 9.99951V10.9995C14.0001 11.5518 14.4478 11.9995 15.0001 11.9995C15.5524 11.9995 16.0001 11.5518 16.0001 10.9995V9.99951Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
