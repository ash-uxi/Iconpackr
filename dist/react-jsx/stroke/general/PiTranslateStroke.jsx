import React from 'react';

/**
 * PiTranslateStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTranslateStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'translate icon',
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
      <path d="M3 5H7M7 5H11C11 7.96113 9.39121 10.5465 7 11.9297M7 5L7 3M7 11.9297C5.82331 12.6104 4.45715 13 3 13M7 11.9297C5.78549 11.2272 4.77281 10.2145 4.07026 9M7 11.9297C8.17669 12.6104 9.54285 13 11 13M21 21V20.937C21 19.9437 20.8949 18.9596 20.6902 18M13 21V20.937C13 19.9437 13.1051 18.9596 13.3098 18M13.3098 18C13.7639 15.8721 14.7082 13.8648 16.0841 12.1448C16.5537 11.5579 17.4463 11.5579 17.9159 12.1448C19.2918 13.8648 20.2361 15.8721 20.6902 18M13.3098 18H20.6902" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
