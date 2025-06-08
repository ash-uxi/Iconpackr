import React from 'react';

/**
 * PiBanRightSolid icon from the solid style in security category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBanRightSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'ban-right icon',
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
      <path d="M1.84961 12.0001C1.84961 6.39441 6.39392 1.8501 11.9996 1.8501C14.442 1.8501 16.684 2.71373 18.435 4.15067L4.15018 18.4355C2.71324 16.6845 1.84961 14.4424 1.84961 12.0001Z" fill="currentColor" stroke="none"/>
  <path d="M5.56441 19.8497C7.31534 21.2865 9.55735 22.1501 11.9996 22.1501C17.6053 22.1501 22.1496 17.6058 22.1496 12.0001C22.1496 9.55783 21.286 7.31582 19.8492 5.5649L5.56441 19.8497Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
