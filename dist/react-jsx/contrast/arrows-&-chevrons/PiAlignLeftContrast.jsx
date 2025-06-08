import React from 'react';

/**
 * PiAlignLeftContrast icon from the contrast style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAlignLeftContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'align-left icon',
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
      <path d="M11.866 12H20m-8.134 0q0 2.044.165 4.083a20.8 20.8 0 0 1-3.886-3.678.64.64 0 0 1 0-.81 20.8 20.8 0 0 1 3.886-3.678A51 51 0 0 0 11.866 12M4 19V5"/>
  <path fill="currentColor" d="M8.145 12.404a20.8 20.8 0 0 0 3.886 3.68 50.6 50.6 0 0 1 0-8.167 20.8 20.8 0 0 0-3.886 3.678.64.64 0 0 0 0 .81" opacity=".28"/>
    </svg>
  );
}
