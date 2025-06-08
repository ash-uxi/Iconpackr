import React from 'react';

/**
 * PiSearchDefaultZoomOutSolid icon from the solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSearchDefaultZoomOutSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'search-default-zoom-out icon',
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
      <path d="M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8483 17.3723 13.5513 16.3198 14.9056L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14.9056 16.3198C13.5513 17.3723 11.8483 18 10 18C5.58172 18 2 14.4183 2 10ZM7.00122 9C6.44894 9 6.00122 9.44772 6.00122 10C6.00122 10.5523 6.44894 11 7.00122 11H13.0012C13.5535 11 14.0012 10.5523 14.0012 10C14.0012 9.44772 13.5535 9 13.0012 9H7.00122Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
