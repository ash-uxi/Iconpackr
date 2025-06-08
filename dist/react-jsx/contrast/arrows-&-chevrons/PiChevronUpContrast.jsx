import React from 'react';

/**
 * PiChevronUpContrast icon from the contrast style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiChevronUpContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'chevron-up icon',
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
      <path d="M11.702 10.106A20.4 20.4 0 0 0 8 14a53 53 0 0 1 8 0 20.4 20.4 0 0 0-3.702-3.894.47.47 0 0 0-.596 0"/>
  <path fill="currentColor" d="M11.702 10.106A20.4 20.4 0 0 0 8 14l4-.304L16 14a20.4 20.4 0 0 0-3.702-3.894.47.47 0 0 0-.596 0" opacity=".28"/>
    </svg>
  );
}
