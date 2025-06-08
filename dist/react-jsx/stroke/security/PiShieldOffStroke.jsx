import React from 'react';

/**
 * PiShieldOffStroke icon from the stroke style in security category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiShieldOffStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'shield-off icon',
  ...props 
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M6.05739 17.9426L2 22M6.05739 17.9426C4.26506 15.8674 3.28067 13.1582 3.38951 10.3284L3.51676 7.01986C3.56372 5.79894 4.34643 4.72848 5.49561 4.31349L10.8832 2.36797C11.5417 2.13019 12.2626 2.13019 12.9211 2.36797L18.3863 4.34153C18.6869 4.45007 18.9627 4.6036 19.2068 4.79317M6.05739 17.9426L19.2068 4.79317M22 2L19.2068 4.79317M20.528 9.13585L20.5855 9.8836C20.9185 14.2122 18.6744 18.3317 14.857 20.3995L13.3684 21.2058C12.4566 21.6997 11.3544 21.6877 10.4536 21.1741L9.20286 20.461" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
