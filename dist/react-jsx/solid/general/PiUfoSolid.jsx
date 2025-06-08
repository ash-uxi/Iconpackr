import React from 'react';

/**
 * PiUfoSolid icon from the solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiUfoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'ufo icon',
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
      <path d="M12 3C9.6591 3 7.71364 4.50164 6.72464 6.5725C5.24956 6.91813 3.95047 7.41483 2.96859 8.04465C1.90796 8.72498 1 9.71235 1 11C1 11.9159 1.46814 12.6872 2.09874 13.2835C2.72723 13.8779 3.58299 14.3671 4.55754 14.7569C6.51218 15.5388 9.14392 16 12 16C14.8561 16 17.4878 15.5388 19.4425 14.7569C20.417 14.3671 21.2728 13.8779 21.9013 13.2835C22.5319 12.6872 23 11.9159 23 11C23 9.71235 22.092 8.72498 21.0314 8.04465C20.0495 7.41483 18.7504 6.91813 17.2754 6.5725C16.2864 4.50165 14.3409 3 12 3ZM8.37196 7.79961C9.03922 6.07207 10.4676 5 12 5C13.5324 5 14.9608 6.07207 15.628 7.79961C15.8599 8.39998 15.9836 9.04554 15.9986 9.69681C14.7894 9.89051 13.4347 10 12 10C10.5653 10 9.21064 9.89051 8.00135 9.69681C8.01641 9.04554 8.14007 8.39998 8.37196 7.79961Z" fill="currentColor" stroke="none"/>
  <path d="M13 18C13 17.4477 12.5523 17 12 17C11.4477 17 11 17.4477 11 18V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V18Z" fill="currentColor" stroke="none"/>
  <path d="M20.8944 16.5528C20.6474 16.0588 20.0468 15.8586 19.5528 16.1056C19.0588 16.3526 18.8586 16.9532 19.1056 17.4472L20.1056 19.4472C20.3526 19.9412 20.9532 20.1414 21.4472 19.8944C21.9412 19.6474 22.1414 19.0468 21.8944 18.5528L20.8944 16.5528Z" fill="currentColor" stroke="none"/>
  <path d="M4.89443 17.4472C5.14142 16.9532 4.94119 16.3526 4.44721 16.1056C3.95324 15.8586 3.35256 16.0588 3.10557 16.5528L2.10557 18.5528C1.85858 19.0468 2.05881 19.6474 2.55279 19.8944C3.04676 20.1414 3.64744 19.9412 3.89443 19.4472L4.89443 17.4472Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
