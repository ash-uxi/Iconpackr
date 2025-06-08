import React from 'react';

/**
 * PiMinimizeFourArrowStroke icon from the stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMinimizeFourArrowStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'minimize-four-arrow icon',
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
      <path d="M4 14.9232C5.58095 14.6585 7.1786 14.5984 8.75306 14.7441C8.88812 14.7566 9.00759 14.8147 9.09642 14.9036C9.18525 14.9924 9.24344 15.1119 9.25593 15.2469C9.40159 16.8214 9.34155 18.4191 9.07682 20M20 14.9232C18.419 14.6585 16.8214 14.5984 15.2469 14.7441C15.1119 14.7566 14.9924 14.8147 14.9036 14.9036C14.8147 14.9924 14.7566 15.1119 14.7441 15.2469C14.5984 16.8214 14.6585 18.4191 14.9232 20M9.07682 4C9.34155 5.58095 9.40159 7.1786 9.25593 8.75306C9.24344 8.88812 9.18525 9.00759 9.09642 9.09642C9.00759 9.18525 8.88812 9.24344 8.75306 9.25593C7.1786 9.40159 5.58095 9.34155 4 9.07682M20 9.07682C18.4191 9.34155 16.8214 9.40159 15.2469 9.25593C15.1119 9.24344 14.9924 9.18525 14.9036 9.09642C14.8147 9.00759 14.7566 8.88812 14.7441 8.75306C14.5984 7.1786 14.6585 5.58095 14.9232 4" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
