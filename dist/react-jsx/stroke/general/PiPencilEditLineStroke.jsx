import React from 'react';

/**
 * PiPencilEditLineStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPencilEditLineStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'pencil-edit-line icon',
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
      <path d="M13 21H21M3 20.9955L5.72665 20.9999C6.11608 21.0005 6.31079 21.0008 6.49406 20.9568C6.65654 20.9178 6.81188 20.8534 6.95435 20.7658C7.11505 20.6669 7.25274 20.5287 7.52811 20.2521L20.5014 7.22177C21.0315 6.68941 21.1632 5.86631 20.7594 5.21582C20.2713 4.42948 19.6037 3.75331 18.8267 3.25131C18.204 2.84896 17.3862 2.93708 16.8626 3.46297L3.8099 16.573C3.54444 16.8396 3.41171 16.973 3.31544 17.1282C3.23007 17.2658 3.16608 17.4156 3.12568 17.5726C3.08011 17.7497 3.07546 17.9381 3.06616 18.3151L3 20.9955Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
