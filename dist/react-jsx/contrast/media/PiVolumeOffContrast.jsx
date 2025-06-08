import React from 'react';

/**
 * PiVolumeOffContrast icon from the contrast style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiVolumeOffContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'volume-off icon',
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
      <g fill="currentColor" opacity=".28">
    <path d="M5 12.979V11.06a4.93 4.93 0 0 1 3.963-4.834 4.9 4.9 0 0 0 1.898-.822l2.813-2.01C15.066 2.402 17 3.397 17 5.108V7l-9.968 9.968A4.93 4.93 0 0 1 5 12.978M17.383 11.724a1 1 0 0 1 .617.924v6.284c0 2.524-2.853 3.993-4.907 2.526l-2.725-1.946a1 1 0 0 1-.125-1.521l6.05-6.05a1 1 0 0 1 1.09-.217"/>
  </g>
  <path d="m22 2-5 5m0 0V5.107c0-1.71-1.934-2.706-3.326-1.711L10.86 5.405a4.9 4.9 0 0 1-1.899.822A4.93 4.93 0 0 0 5 11.061v1.918c0 1.62.788 3.084 2.032 3.989M17 7l-9.968 9.968m0 0L2 22m15-9.352v6.284c0 1.711-1.934 2.707-3.326 1.712l-2.724-1.946"/>
    </svg>
  );
}
