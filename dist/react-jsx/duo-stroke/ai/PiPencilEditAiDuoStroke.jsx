import React from 'react';

/**
 * PiPencilEditAiDuoStroke icon from the duo-stroke style in ai category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPencilEditAiDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'pencil-edit-ai icon',
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
      <path d="M15 22H15.001M19 15C18.3625 16.6165 17.6609 17.345 16 18C17.6609 18.655 18.3625 19.3835 19 21C19.6375 19.3835 20.3391 18.655 22 18C20.3391 17.345 19.6375 16.6165 19 15Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M3.06616 18.3151C3.07546 17.9381 3.08011 17.7497 3.12568 17.5726C3.16608 17.4156 3.23007 17.2658 3.31544 17.1282C3.41171 16.973 3.54444 16.8396 3.8099 16.573L16.8626 3.46297C17.3862 2.93708 18.204 2.84896 18.8267 3.25131C19.6037 3.75331 20.2713 4.42948 20.7594 5.21582C21.1632 5.86631 21.0315 6.68941 20.5014 7.22177L7.52811 20.2521C7.25274 20.5287 7.11505 20.6669 6.95435 20.7658C6.81188 20.8534 6.65654 20.9178 6.49406 20.9568C6.31079 21.0008 6.11608 21.0005 5.72665 20.9999L3 20.9955L3.06616 18.3151Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.29" fill="none"/>
    </svg>
  );
}
