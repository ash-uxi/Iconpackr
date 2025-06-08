import React from 'react';

/**
 * PiEggBrokenDuoStroke icon from the duo-stroke style in food category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiEggBrokenDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'egg-broken icon',
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
      <path d="M12 21.5a7.39 7.39 0 0 0 7.39-7.389C19.39 10.031 16.08 2.5 12 2.5s-7.389 7.53-7.389 11.611a7.39 7.39 0 0 0 7.39 7.389" opacity=".28" fill="none"/>
  <path  d="M6.015 6.089q.602.253 1.152.595A8.6 8.6 0 0 1 9.34 8.605l-1.428 1.977c-.24.332-.282.801-.04 1.186.787 1.253 1.885 2.321 3.465 2.855a1 1 0 0 0 .64-1.895c-.845-.285-1.51-.805-2.056-1.512l1.425-1.973c.256-.354.292-.856.02-1.256a10.46 10.46 0 0 0-4.223-3.585c-.41.524-.786 1.094-1.128 1.687" fill="none"/>
    </svg>
  );
}
