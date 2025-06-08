import React from 'react';

/**
 * PiFile02ArrowUpStroke icon from the stroke style in files-&-folders category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFile02ArrowUpStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'file-02-arrow-up icon',
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
      <path d="M20 11V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V6C4 3.79086 5.79086 2 8 2H11M20 11V10C20 5.58172 16.4183 2 12 2H11M20 11C20 9.34315 18.6569 8 17 8L16.4 8C16.0284 8 15.8426 8 15.6871 7.97538C14.8313 7.83983 14.1602 7.16865 14.0246 6.31287C14 6.1574 14 5.9716 14 5.6V5C14 3.34315 12.6569 2 11 2M10 12.8744C10.4935 12.2164 11.066 11.6221 11.7043 11.1049C11.7906 11.035 11.8953 11 12 11M14 12.8744C13.5065 12.2164 12.934 11.6221 12.2957 11.1049C12.2094 11.035 12.1047 11 12 11M12 11L12 17" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
