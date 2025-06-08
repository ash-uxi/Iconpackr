import React from 'react';

/**
 * PiCodeAiStroke icon from the stroke style in ai category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCodeAiStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'code-ai icon',
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
      <path d="M8.46631 4.18799C6.80945 4.18799 5.46631 5.3819 5.46631 6.85466V9.52132C5.46631 10.9941 4.12316 12.188 2.46631 12.188C4.12316 12.188 5.46631 13.3819 5.46631 14.8547V17.5213C5.46631 18.9941 6.80945 20.188 8.46631 20.188M16.4663 4.18799C18.1232 4.18799 19.4663 5.3819 19.4663 6.85466V9.52132C19.4663 10.9941 20.8095 12.188 22.4663 12.188C20.8095 12.188 19.4663 13.3819 19.4663 14.8547V17.5213C19.4663 18.9941 18.1232 20.188 16.4663 20.188M8.9663 16H8.9673M12.9663 9C12.3288 10.6165 11.6272 11.345 9.9663 12C11.6272 12.655 12.3288 13.3835 12.9663 15C13.6038 13.3835 14.3054 12.655 15.9663 12C14.3054 11.345 13.6038 10.6165 12.9663 9Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
