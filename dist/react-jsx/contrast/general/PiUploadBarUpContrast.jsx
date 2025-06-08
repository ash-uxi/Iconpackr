import React from 'react';

/**
 * PiUploadBarUpContrast icon from the contrast style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiUploadBarUpContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'upload-bar-up icon',
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
      <path d="M12 9.417V16m0-6.583c-2.005 0-4.01.138-6 .413a30.2 30.2 0 0 1 5.406-5.62.95.95 0 0 1 1.188 0A30.2 30.2 0 0 1 18 9.83a44 44 0 0 0-6-.413M19 20H5"/>
  <path fill="currentColor" d="M6 9.83a30.2 30.2 0 0 1 5.406-5.62.95.95 0 0 1 1.188 0A30.2 30.2 0 0 1 18 9.83a43.8 43.8 0 0 0-12 0" opacity=".28"/>
    </svg>
  );
}
