import React from 'react';

/**
 * PiTinderSolid icon from the solid style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTinderSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'tinder icon',
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
      <path d="M13.1098 1.05836C12.2217 0.762331 11.6083 1.53482 11.6083 2.16139C11.6083 2.21256 11.6123 2.26365 11.6201 2.31421C11.8357 3.70833 11.7826 5.07053 11.3258 6.1877C10.9627 7.0756 10.3263 7.8588 9.24654 8.4045C9.19246 8.2463 9.14448 8.07466 9.103 7.89383C8.99865 7.43892 8.95277 7.0056 8.93039 6.73718C8.89173 5.80468 7.86713 5.41007 7.18809 5.83416C5.5363 6.83862 4.26515 8.36373 3.57475 10.1697C2.88312 11.9788 2.81368 13.9668 3.37737 15.8198C3.94107 17.6728 5.1058 19.2853 6.68773 20.4028C8.26345 21.5159 10.1637 22.0748 12.0907 21.9922C17.4622 21.9803 21.1715 17.74 21.1715 12.966C21.1715 6.88588 16.9001 2.90159 13.2328 1.10865C13.1929 1.08918 13.1519 1.07238 13.1098 1.05836ZM6.93479 6.87274L6.93621 6.89015C6.93311 6.85833 6.93151 6.82558 6.93151 6.79192C6.93151 6.81889 6.93261 6.84585 6.93479 6.87274Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
