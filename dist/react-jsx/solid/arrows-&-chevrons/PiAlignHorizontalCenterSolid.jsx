import React from 'react';

/**
 * PiAlignHorizontalCenterSolid icon from the solid style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAlignHorizontalCenterSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'align-horizontal-center icon',
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
      <path d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V12C11 11.6362 10.8607 11.2935 10.62 11.0294C9.63626 9.94958 8.49837 8.98765 7.23596 8.16607C7.05089 8.04343 6.82401 7.98133 6.58584 8.00483C6.03623 8.05906 5.63463 8.54857 5.68886 9.09818C5.75128 9.73094 5.79324 10.3652 5.81473 11L3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H5.81473C5.79324 13.6348 5.75128 14.2691 5.68886 14.9018C5.63463 15.4514 6.03623 15.9409 6.58584 15.9952C6.82401 16.0187 7.05088 15.9566 7.23594 15.8339C8.49836 15.0124 9.63626 14.0504 10.62 12.9706C10.8607 12.7065 11 12.3638 11 12V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V12C13 12.3638 13.1393 12.7065 13.38 12.9706C14.3637 14.0504 15.5016 15.0123 16.764 15.8339C16.9491 15.9566 17.176 16.0187 17.4142 15.9952C17.9638 15.9409 18.3654 15.4514 18.3111 14.9018C18.2487 14.2691 18.2068 13.6348 18.1853 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H18.1853C18.2068 10.3652 18.2487 9.73094 18.3111 9.09818C18.3654 8.54856 17.9638 8.05906 17.4142 8.00483C17.176 7.98133 16.9491 8.04343 16.764 8.16608C15.5016 8.98765 14.3637 9.94958 13.38 11.0294C13.1393 11.2935 13 11.6362 13 12V5Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
