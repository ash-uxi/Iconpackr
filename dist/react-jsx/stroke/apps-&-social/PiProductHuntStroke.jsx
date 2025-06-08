import React from 'react';

/**
 * PiProductHuntStroke icon from the stroke style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiProductHuntStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'product-hunt icon',
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
      <path d="M10.0001 13.625V8H12.8126C14.3659 8 15.6251 9.2592 15.6251 10.8125C15.6251 12.3658 14.3659 13.625 12.8126 13.625H10.0001ZM10.0001 13.625V17M12.0001 21.1501C6.94669 21.1501 2.8501 17.0535 2.8501 12.0001C2.8501 6.94669 6.94669 2.8501 12.0001 2.8501C17.0535 2.8501 21.1501 6.94669 21.1501 12.0001C21.1501 17.0535 17.0535 21.1501 12.0001 21.1501Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
