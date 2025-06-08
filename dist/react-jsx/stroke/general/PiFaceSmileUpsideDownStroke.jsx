import React from 'react';

/**
 * PiFaceSmileUpsideDownStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFaceSmileUpsideDownStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'face-smile-upside-down icon',
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
      <path d="M14.9999 14.4963V13.4963M8.99995 14.4963L8.99995 13.4963M15.5708 9.99629C14.6633 9.07061 13.3987 8.49629 12 8.49629C10.6013 8.49629 9.33678 9.07061 8.42932 9.99629M12.0001 3.04639C17.0535 3.04639 21.1501 7.14298 21.1501 12.1964C21.1501 17.2498 17.0535 21.3464 12.0001 21.3464C6.94669 21.3464 2.8501 17.2498 2.8501 12.1964C2.8501 7.14298 6.94669 3.04639 12.0001 3.04639Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
