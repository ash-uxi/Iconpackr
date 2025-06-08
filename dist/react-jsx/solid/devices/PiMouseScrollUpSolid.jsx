import React from 'react';

/**
 * PiMouseScrollUpSolid icon from the solid style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMouseScrollUpSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'mouse-scroll-up icon',
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
      <path d="M4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V10ZM12 7.62573C11.6723 7.62573 11.3439 7.7356 11.0747 7.95372C10.3726 8.52266 9.74285 9.17629 9.2 9.90009C8.86863 10.3419 8.95817 10.9687 9.4 11.3001C9.84183 11.6315 10.4686 11.5419 10.8 11.1001C11.1563 10.625 11.5583 10.1869 12 9.79188C12.4417 10.1869 12.8437 10.625 13.2 11.1001C13.5314 11.5419 14.1582 11.6315 14.6 11.3001C15.0418 10.9687 15.1314 10.3419 14.8 9.90009C14.2572 9.17629 13.6274 8.52266 12.9253 7.95372C12.6561 7.7356 12.3277 7.62573 12 7.62573Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
