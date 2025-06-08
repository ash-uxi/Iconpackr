import React from 'react';

/**
 * PiStopSmallSolid icon from the solid style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiStopSmallSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'stop-small icon',
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
      <path d="M10.5681 8C10.3157 7.99997 10.0699 7.99994 9.86178 8.01695C9.63318 8.03563 9.36345 8.07969 9.09202 8.21799C8.7157 8.40974 8.40974 8.7157 8.21799 9.09202C8.07969 9.36345 8.03563 9.63318 8.01695 9.86178C7.99994 10.0699 7.99997 10.3157 8 10.5681L8 13.4319C7.99997 13.6843 7.99994 13.9301 8.01695 14.1382C8.03563 14.3668 8.07969 14.6366 8.21799 14.908C8.40974 15.2843 8.7157 15.5903 9.09202 15.782C9.36345 15.9203 9.63318 15.9644 9.86178 15.9831C10.0699 16.0001 10.3157 16 10.5681 16H13.4319C13.6843 16 13.9301 16.0001 14.1382 15.9831C14.3668 15.9644 14.6366 15.9203 14.908 15.782C15.2843 15.5903 15.5903 15.2843 15.782 14.908C15.9203 14.6366 15.9644 14.3668 15.9831 14.1382C16.0001 13.9301 16 13.6843 16 13.4319V10.5681C16 10.3157 16.0001 10.0699 15.9831 9.86178C15.9644 9.63318 15.9203 9.36345 15.782 9.09202C15.5903 8.7157 15.2843 8.40974 14.908 8.21799C14.6366 8.07969 14.3668 8.03563 14.1382 8.01695C13.9301 7.99994 13.6843 7.99997 13.4319 8L10.5681 8Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
