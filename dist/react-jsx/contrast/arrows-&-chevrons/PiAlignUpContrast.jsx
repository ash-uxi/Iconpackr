import React from 'react';

/**
 * PiAlignUpContrast icon from the contrast style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAlignUpContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'align-up icon',
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
      <path fill="currentColor" d="M11.596 8.145a20.8 20.8 0 0 0-3.68 3.886c2.718-.22 5.45-.22 8.167 0a20.8 20.8 0 0 0-3.678-3.886.64.64 0 0 0-.81 0" opacity=".28"/>
  <path d="M12 11.866V20m0-8.134q-2.044 0-4.083.165a20.8 20.8 0 0 1 3.678-3.886.64.64 0 0 1 .81 0 20.8 20.8 0 0 1 3.678 3.886A51 51 0 0 0 12 11.866M5 4h14"/>
    </svg>
  );
}
