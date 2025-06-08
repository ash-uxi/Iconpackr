import React from 'react';

/**
 * PiLockCloseSolid icon from the solid style in security category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiLockCloseSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'lock-close icon',
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
      <path d="M5.43764 8.60007C5.63112 4.98235 8.43225 2 12 2C15.5678 2 18.3689 4.98235 18.5624 8.60007C19.6195 9.20482 20.4104 10.2102 20.789 11.399C20.9621 11.9423 21.0069 12.5125 20.9992 13.1594C20.9917 13.7917 20.9315 14.5694 20.8563 15.5406L20.8377 15.7821C20.7205 17.3043 20.6413 18.3324 20.2598 19.1718C19.7518 20.2894 18.8626 21.1811 17.7495 21.6485C17.2829 21.8445 16.7983 21.9253 16.261 21.9633C15.7428 22 15.111 22 14.3386 22H9.6614C8.88904 22 8.25725 22 7.73898 21.9633C7.2017 21.9253 6.71716 21.8445 6.25056 21.6485C5.13739 21.1811 4.24818 20.2894 3.74025 19.1718C3.35873 18.3323 3.27956 17.3043 3.16236 15.7821L3.14374 15.5408C3.06854 14.5695 3.00834 13.7918 3.00082 13.1594C2.99312 12.5125 3.03797 11.9423 3.21099 11.399C3.58964 10.2102 4.38051 9.20482 5.43764 8.60007ZM7.51032 8.03948C7.55292 8.03657 7.59582 8.03391 7.63904 8.03145C8.19156 7.99999 8.86136 8 9.66928 8H14.3307C15.1387 8 15.8085 7.99999 16.361 8.03145C16.4042 8.03391 16.4471 8.03657 16.4897 8.03948C16.0754 5.69206 14.1711 4 12 4C9.82894 4 7.9246 5.69206 7.51032 8.03948ZM12.0001 12C10.8666 12 10.0713 12.9662 10.0713 14C10.0713 14.6907 10.4264 15.3513 11.0001 15.7136V17C11.0001 17.5523 11.4478 18 12.0001 18C12.5524 18 13.0001 17.5523 13.0001 17V15.7136C13.5739 15.3513 13.929 14.6907 13.929 14C13.929 12.9662 13.1336 12 12.0001 12Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
