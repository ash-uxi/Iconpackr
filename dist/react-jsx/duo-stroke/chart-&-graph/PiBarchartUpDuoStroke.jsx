import React from 'react';

/**
 * PiBarchartUpDuoStroke icon from the duo-stroke style in chart-&-graph category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBarchartUpDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'barchart-up icon',
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
      <path d="M15 6C15 5.06812 15 4.60218 15.1522 4.23463C15.3552 3.74458 15.7446 3.35523 16.2346 3.15224C16.6022 3 17.0681 3 18 3C18.9319 3 19.3978 3 19.7654 3.15224C20.2554 3.35523 20.6448 3.74458 20.8478 4.23463C21 4.60218 21 5.06812 21 6V17.8C21 18.9201 21 19.4802 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H15V6Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M9 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V18C3 17.0681 3 16.6022 3.15224 16.2346C3.35523 15.7446 3.74458 15.3552 4.23463 15.1522C4.60218 15 5.06812 15 6 15C6.93188 15 7.39782 15 7.76537 15.1522C8.25542 15.3552 8.64477 15.7446 8.84776 16.2346C9 16.6022 9 17.0681 9 18V21ZM9 21H15V12C15 11.0681 15 10.6022 14.8478 10.2346C14.6448 9.74458 14.2554 9.35523 13.7654 9.15224C13.3978 9 12.9319 9 12 9C11.0681 9 10.6022 9 10.2346 9.15224C9.74458 9.35523 9.35523 9.74458 9.15224 10.2346C9 10.6022 9 11.0681 9 12V21Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
