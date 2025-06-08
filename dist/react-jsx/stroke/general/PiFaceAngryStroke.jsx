import React from 'react';

/**
 * PiFaceAngryStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFaceAngryStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'face-angry icon',
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
      <path d="M8.38591 9.14434L9.61464 10.0047M14.3854 10.0047L15.6142 9.14434M15.5707 16C14.6632 15.0743 13.3987 14.5 12 14.5C10.6013 14.5 9.33671 15.0743 8.42925 16M12.0001 21.1501C6.94669 21.1501 2.8501 17.0535 2.8501 12.0001C2.8501 6.94669 6.94669 2.8501 12.0001 2.8501C17.0535 2.8501 21.1501 6.94669 21.1501 12.0001C21.1501 17.0535 17.0535 21.1501 12.0001 21.1501Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
