import React from 'react';

/**
 * PiPiechartRingDuoStroke icon from the duo-stroke style in chart-&-graph category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPiechartRingDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'piechart-ring icon',
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
      <path d="M12 21.1499C17.0534 21.1499 21.15 17.0533 21.15 11.9999C21.15 9.5913 20.2193 7.40002 18.6979 5.76611L14.3407 10.1235C14.7532 10.6374 15 11.2899 15 12.0001C15 13.657 13.6569 15.0001 12 15.0001V21.1499Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M2.8501 12.0001C2.8501 6.94669 6.94669 2.8501 12.0001 2.8501C14.6449 2.8501 17.0275 3.97219 18.698 5.76627L14.3408 10.1235C13.791 9.43856 12.9468 9.0001 12.0001 9.0001C10.3432 9.0001 9.0001 10.3432 9.0001 12.0001M2.8501 12.0001C2.8501 17.0535 6.94669 21.1501 12.0001 21.1501V15.0001C10.3432 15.0001 9.0001 13.657 9.0001 12.0001M2.8501 12.0001H9.0001" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
