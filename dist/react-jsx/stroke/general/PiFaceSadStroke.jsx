import React from 'react';

/**
 * PiFaceSadStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFaceSadStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'face-sad icon',
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
      <path d="M15.5707 15.9995C14.6632 15.0738 13.3987 14.4995 12 14.4995C10.6013 14.4995 9.33671 15.0738 8.42925 15.9995M9.00012 9.68489V10.6849M15.0001 9.68489V10.6849M12.0001 21.1496C6.94669 21.1496 2.8501 17.053 2.8501 11.9996C2.8501 6.94621 6.94669 2.84961 12.0001 2.84961C17.0535 2.84961 21.1501 6.94621 21.1501 11.9996C21.1501 17.053 17.0535 21.1496 12.0001 21.1496Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
