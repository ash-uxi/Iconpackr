import React from 'react';

/**
 * PiCloudAiContrast icon from the contrast style in ai category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCloudAiContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'cloud-ai icon',
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
      <path fill="currentColor" d="M22 14.5a5.5 5.5 0 0 1-5.5 5.5h-10a4.5 4.5 0 0 1-.483-8.974 6.5 6.5 0 0 1 12.651-1.582A5.5 5.5 0 0 1 22 14.5" opacity=".28"/>
  <path d="M9 17h.01M12.5 5a6.5 6.5 0 0 1 6.168 4.444A5.501 5.501 0 0 1 16.5 20h-10a4.5 4.5 0 0 1-.483-8.974A6.5 6.5 0 0 1 12.5 5m.5 5c-.637 1.617-1.34 2.345-3 3 1.66.655 2.363 1.383 3 3 .637-1.617 1.34-2.345 3-3-1.66-.655-2.363-1.383-3-3"/>
    </svg>
  );
}
