import React from 'react';

/**
 * PiFile02ArrowRightDuoStroke icon from the duo-stroke style in files-&-folders category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFile02ArrowRightDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'file-02-arrow-right icon',
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
      <path d="M13.1256 12C13.7836 12.4935 14.3779 13.066 14.8951 13.7043C14.965 13.7906 15 13.8953 15 14M13.1256 16C13.7836 15.5065 14.3779 14.934 14.8951 14.2957C14.965 14.2094 15 14.1047 15 14M15 14L9 14M20 10C20 5.58172 16.4183 2 12 2H11C12.6569 2 14 3.34315 14 5V5.6C14 5.9716 14 6.1574 14.0246 6.31287C14.1602 7.16865 14.8313 7.83983 15.6871 7.97538C15.8426 8 16.0284 8 16.4 8L17 8C18.6569 8 20 9.34315 20 11V10Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M16 22H8C5.79086 22 4 20.2091 4 18V6C4 3.79086 5.79086 2 8 2H12C16.4183 2 20 5.58172 20 10V18C20 20.2091 18.2091 22 16 22Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
