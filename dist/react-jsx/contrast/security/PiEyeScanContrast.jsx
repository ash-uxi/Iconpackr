import React from 'react';

/**
 * PiEyeScanContrast icon from the contrast style in security category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiEyeScanContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'eye-scan icon',
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
      <path d="M15 3c1.977.002 3.013.027 3.816.436a4 4 0 0 1 1.748 1.748c.41.803.434 1.84.436 3.816m-6 12c1.977-.002 3.013-.027 3.816-.436a4 4 0 0 0 1.748-1.748c.41-.803.434-1.84.436-3.816M9 21c-1.977-.002-3.013-.027-3.816-.436a4 4 0 0 1-1.748-1.748c-.41-.803-.434-1.84-.436-3.816m0-6c.002-1.977.026-3.013.435-3.816a4 4 0 0 1 1.748-1.748C5.986 3.026 7.023 3.002 9 3m9 9c0 1.143-2.333 4-6 4s-6-2.857-6-4 2.333-4 6-4 6 2.857 6 4m-5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
  <path fill="currentColor" d="M18 12c0 1.143-2.333 4-6 4s-6-2.857-6-4 2.333-4 6-4 6 2.857 6 4" opacity=".28"/>
    </svg>
  );
}
