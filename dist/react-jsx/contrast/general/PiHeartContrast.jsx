import React from 'react';

/**
 * PiHeartContrast icon from the contrast style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiHeartContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'heart icon',
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
      <path fill="currentColor" d="M12 21c1 0 10-5.023 10-12.056 0-5.437-6.837-8.282-10-3.517C8.832.653 2 3.502 2 8.944 2 15.977 11 21 12 21" opacity=".28"/>
  <path d="M2 8.944C2 15.977 11 21 12 21s10-5.023 10-12.056c0-5.437-6.837-8.282-10-3.517C8.832.653 2 3.502 2 8.944"/>
    </svg>
  );
}
