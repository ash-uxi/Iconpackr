import React from 'react';

/**
 * PiCeilingLampOnStroke icon from the stroke style in appliances category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCeilingLampOnStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'ceiling-lamp-on icon',
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
      <path d="M12 5C7.02944 5 3 9.02944 3 14H21C21 9.02944 16.9706 5 12 5ZM12 5V2M12 21V20M16.5 19.866L16 19M7.5 19.866L8 19M15 14C15 15.6569 13.6569 17 12 17C10.3431 17 9 15.6569 9 14L15 14Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
