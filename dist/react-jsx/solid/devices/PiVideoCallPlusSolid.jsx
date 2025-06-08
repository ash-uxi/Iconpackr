import React from 'react';

/**
 * PiVideoCallPlusSolid icon from the solid style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiVideoCallPlusSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'video-call-plus icon',
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
      <path d="M17.7044 7.3023C17.0093 5.37654 15.1654 4 13 4H6C3.23858 4 1 6.23858 1 9V15C1 17.7614 3.23857 20 6 20H13C15.1654 20 17.0093 18.6234 17.7044 16.6977L18.0704 17.0051C20.0222 18.6446 23 17.2571 23 14.708V9.29197C23 6.74294 20.0222 5.35534 18.0704 6.99486L17.7044 7.3023ZM18.0013 10.0801L18.0011 13.9145C18.014 14.1927 18.1425 14.4537 18.3568 14.6337L19.3568 15.4737C20.0074 16.0202 21 15.5577 21 14.708V9.29197C21 8.4423 20.0074 7.97976 19.3568 8.52626L18.3568 9.36624C18.1439 9.5451 18.0156 9.80403 18.0013 10.0801ZM10.5 9C10.5 8.44772 10.0523 8 9.5 8C8.94772 8 8.5 8.44772 8.5 9V11H6.5C5.94772 11 5.5 11.4477 5.5 12C5.5 12.5523 5.94772 13 6.5 13H8.5V15C8.5 15.5523 8.94772 16 9.5 16C10.0523 16 10.5 15.5523 10.5 15V13H12.5C13.0523 13 13.5 12.5523 13.5 12C13.5 11.4477 13.0523 11 12.5 11H10.5V9Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
