import React from 'react';

/**
 * PiVideoCallOffSolid icon from the solid style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiVideoCallOffSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'video-call-off icon',
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
      <path d="M22.7072 2.70711C23.0977 2.31658 23.0977 1.68342 22.7072 1.29289C22.3166 0.902369 21.6835 0.902369 21.2929 1.29289L1.29295 21.2929C0.902426 21.6834 0.902426 22.3166 1.29295 22.7071C1.68347 23.0976 2.31664 23.0976 2.70716 22.7071L5.44467 19.9696C5.62726 19.9898 5.81257 20.0002 6 20.0002H13C15.1654 20.0002 17.0093 18.6236 17.7044 16.6979L18.0704 17.0053C20.0222 18.6448 23 17.2573 23 14.7082V9.29216C23 7.09708 20.7918 5.76328 18.9321 6.48217L22.7072 2.70711ZM18.0011 13.9147L18.0013 10.0803C18.0156 9.80422 18.1439 9.54531 18.3568 9.36645L19.3568 8.52645C20.0074 7.97994 21 8.44249 21 9.29216V14.7082C21 15.5579 20.0074 16.0204 19.3568 15.4739L18.3568 14.6339C18.1425 14.4539 18.014 14.1929 18.0011 13.9147Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
  <path d="M6 4.00019C3.23857 4.00019 1 6.23876 1 9.00019V15.0002C1 15.507 1.07574 15.998 1.2172 16.4615C1.31971 16.7973 1.59083 17.0548 1.9315 17.1398C2.27217 17.2248 2.63247 17.1249 2.88075 16.8767L14.0367 5.72068C14.3123 5.44513 14.4027 5.03459 14.2683 4.66879C14.134 4.303 13.7993 4.04857 13.4109 4.01688C13.2752 4.00581 13.1382 4.00019 13 4.00019H6Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
