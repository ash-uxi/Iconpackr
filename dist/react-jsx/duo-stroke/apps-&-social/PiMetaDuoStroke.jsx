import React from 'react';

/**
 * PiMetaDuoStroke icon from the duo-stroke style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMetaDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'meta icon',
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
      <path d="M12 10.1061C13.8317 7.21854 15.1115 5.77686 16.8208 5.77686C22.3718 5.77686 23.4752 18.2231 18.8952 18.2231C15.9235 18.2231 13.1149 12.4055 12 10.1061ZM12 10.1061C10.1683 7.21854 8.88844 5.77686 7.17917 5.77686C1.62816 5.77686 0.524796 18.2231 5.10481 18.2231C8.07071 18.2231 10.8957 12.4091 12 10.1061Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M2.25879 13C2.39506 9.59367 4.10513 5.77686 7.17913 5.77686C8.8884 5.77686 10.1683 7.21854 12 10.1061L12.0136 10.1341C13.1376 12.4525 15.9355 18.2231 18.8952 18.2231C20.9389 18.2231 21.8509 15.7448 21.7411 13" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
