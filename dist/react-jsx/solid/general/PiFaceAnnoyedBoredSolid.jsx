import React from 'react';

/**
 * PiFaceAnnoyedBoredSolid icon from the solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFaceAnnoyedBoredSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'face-annoyed-bored icon',
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
      <path d="M1.8501 11.9996C1.8501 6.39392 6.39441 1.84961 12.0001 1.84961C17.6058 1.84961 22.1501 6.39392 22.1501 11.9996C22.1501 17.6053 17.6058 22.1496 12.0001 22.1496C6.39441 22.1496 1.8501 17.6053 1.8501 11.9996ZM8.00012 8.89941C7.44784 8.89941 7.00012 9.34713 7.00012 9.89941C7.00012 10.4517 7.44784 10.8994 8.00012 10.8994H10.0001C10.5524 10.8994 11.0001 10.4517 11.0001 9.89941C11.0001 9.34713 10.5524 8.89941 10.0001 8.89941H8.00012ZM14.0001 8.89941C13.4478 8.89941 13.0001 9.34713 13.0001 9.89941C13.0001 10.4517 13.4478 10.8994 14.0001 10.8994H16.0001C16.5524 10.8994 17.0001 10.4517 17.0001 9.89941C17.0001 9.34713 16.5524 8.89941 16.0001 8.89941H14.0001ZM8.00012 14.0995C7.44784 14.0995 7.00012 14.5472 7.00012 15.0995C7.00012 15.6518 7.44784 16.0995 8.00012 16.0995H16.0001C16.5524 16.0995 17.0001 15.6518 17.0001 15.0995C17.0001 14.5472 16.5524 14.0995 16.0001 14.0995H8.00012Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
