import React from 'react';

/**
 * PiSidebarRightOpenContrast icon from the contrast style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSidebarRightOpenContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'sidebar-right-open icon',
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
      <path d="M15 20.989C14.423 21 13.764 21 13 21h-2c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C3 17.2 3 15.8 3 13v-2c0-2.8 0-4.2.545-5.27A5 5 0 0 1 5.73 3.545C6.8 3 8.2 3 11 3h2c.764 0 1.423 0 2 .011m0 17.978c1.54-.03 2.492-.138 3.27-.534a5 5 0 0 0 2.185-2.185C21 17.2 21 15.8 21 13v-2c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185c-.778-.396-1.73-.504-3.27-.534m0 17.978V3.011M10.5 9a15.3 15.3 0 0 0-2.92 2.777.354.354 0 0 0 0 .446A15.3 15.3 0 0 0 10.5 15"/>
  <path fill="currentColor" d="M21 11v2c0 2.8 0 4.201-.545 5.27a5 5 0 0 1-2.185 2.186c-.778.396-1.73.504-3.27.534V3.012c1.54.03 2.492.137 3.27.534a5 5 0 0 1 2.185 2.185C21 6.8 21 8.2 21 11" opacity=".28"/>
    </svg>
  );
}
