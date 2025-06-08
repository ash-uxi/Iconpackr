import React from 'react';

/**
 * PiArrowRightCircleDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowRightCircleDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-right-circle icon',
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
      <path d="M12.0514 8C13.4759 9.03704 14.7553 10.2485 15.8581 11.6038C15.9527 11.72 16 11.86 16 12M12.0514 16C13.4759 14.963 14.7553 13.7515 15.8581 12.3962C15.9527 12.28 16 12.14 16 12M16 12L8 12" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M2.84985 12.0001C2.84985 17.0535 6.94645 21.1501 11.9999 21.1501C17.0533 21.1501 21.1499 17.0535 21.1499 12.0001C21.1499 6.94669 17.0533 2.8501 11.9999 2.8501C6.94645 2.8501 2.84985 6.94669 2.84985 12.0001Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
