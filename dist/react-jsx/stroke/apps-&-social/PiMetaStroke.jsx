import React from 'react';

/**
 * PiMetaStroke icon from the stroke style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMetaStroke({ 
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
      <path d="M12 10.1061C13.8317 7.21854 15.1115 5.77686 16.8208 5.77686C22.3718 5.77686 23.4752 18.2231 18.8952 18.2231C15.9235 18.2231 13.1149 12.4055 12 10.1061ZM12 10.1061C10.1683 7.21854 8.88845 5.77686 7.17917 5.77686C1.62816 5.77686 0.524796 18.2231 5.10481 18.2231C8.07071 18.2231 10.8957 12.4091 12 10.1061Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
