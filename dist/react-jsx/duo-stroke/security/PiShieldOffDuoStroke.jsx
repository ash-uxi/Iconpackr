import React from 'react';

/**
 * PiShieldOffDuoStroke icon from the duo-stroke style in security category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiShieldOffDuoStroke({ 
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
      <path d="M22 2L2 22" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M6.0569 17.9427C4.26457 15.8675 3.28018 13.1582 3.38902 10.3285L3.51627 7.01992C3.56323 5.799 4.34594 4.72854 5.49513 4.31356L10.8827 2.36804C11.5412 2.13025 12.2621 2.13025 12.9206 2.36804L18.3858 4.34159C18.6864 4.45013 18.9622 4.60366 19.2063 4.79323M20.5275 9.13591L20.585 9.88366C20.918 14.2123 18.6739 18.3318 14.8565 20.3995L13.3679 21.2059C12.4561 21.6998 11.3539 21.6878 10.4531 21.1741L9.20237 20.461" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
