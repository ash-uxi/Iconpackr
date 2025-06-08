import React from 'react';

/**
 * PiFile02CodeStroke icon from the stroke style in files-&-folders category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFile02CodeStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'file-02-code icon',
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
      <path d="M20 11V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V6C4 3.79086 5.79086 2 8 2H11M20 11V10C20 5.58172 16.4183 2 12 2H11M20 11C20 9.34315 18.6569 8 17 8L16.4 8C16.0284 8 15.8426 8 15.6871 7.97538C14.8313 7.83983 14.1602 7.16865 14.0246 6.31287C14 6.1574 14 5.9716 14 5.6V5C14 3.34315 12.6569 2 11 2M13.7143 16.8353C14.5496 16.2284 15.2979 15.5169 15.9395 14.7198C16.0202 14.6196 16.0202 14.4795 15.9395 14.3793C15.2979 13.5822 14.5496 12.8707 13.7143 12.2638M10.2857 12.2638C9.45035 12.8707 8.70213 13.5822 8.06046 14.3793C7.97985 14.4795 7.97985 14.6196 8.06046 14.7198C8.70213 15.5169 9.45035 16.2284 10.2857 16.8353" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
