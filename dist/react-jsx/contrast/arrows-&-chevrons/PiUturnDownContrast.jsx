import React from 'react';

/**
 * PiUturnDownContrast icon from the contrast style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiUturnDownContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'uturn-down icon',
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
      <path fill="currentColor" d="M7.596 19.855a20.8 20.8 0 0 1-3.68-3.886l2.32.17a24 24 0 0 0 3.528 0l2.32-.17a20.8 20.8 0 0 1-3.68 3.886.64.64 0 0 1-.808 0" opacity=".28"/>
  <path d="M8 16.205V9a5 5 0 0 1 10 0v3M8 16.205a24 24 0 0 1-1.764-.065l-2.32-.17a20.8 20.8 0 0 0 3.68 3.885.64.64 0 0 0 .809 0 20.8 20.8 0 0 0 3.678-3.886l-2.32.171A24 24 0 0 1 8 16.205"/>
    </svg>
  );
}
