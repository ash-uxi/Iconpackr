import React from 'react';

/**
 * PiFloorLampOffContrast icon from the contrast style in appliances category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFloorLampOffContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'floor-lamp-off icon',
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
      <path d="M12 21V10M9 21h6m3-11-1.937-5.649A2 2 0 0 0 14.171 3H9.83a2 2 0 0 0-1.892 1.351L6 10z"/>
  <path fill="currentColor" d="M7.937 4.351A2 2 0 0 1 9.829 3h4.342a2 2 0 0 1 1.892 1.351L18 10H6z" opacity=".28"/>
    </svg>
  );
}
