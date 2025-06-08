import React from 'react';

/**
 * PiRotateRightContrast icon from the contrast style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiRotateRightContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'rotate-right icon',
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
      <path fill="currentColor" d="M18.832 6.396a15 15 0 0 0-1.049-3.726l-.242.539a24 24 0 0 1-2.412 4.177l-.346.48a15 15 0 0 0 3.57-.884c.264-.101.528-.251.479-.586" opacity=".28"/>
  <path d="M19.748 14a8 8 0 1 1-3.302-8.652m0 0q.6-1.042 1.095-2.139l.242-.54a15 15 0 0 1 1.049 3.727c.049.335-.215.485-.479.586-1.148.44-2.347.737-3.57.884l.346-.48q.71-.986 1.317-2.038"/>
    </svg>
  );
}
