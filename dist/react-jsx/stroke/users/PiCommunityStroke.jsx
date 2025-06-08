import React from 'react';

/**
 * PiCommunityStroke icon from the stroke style in users category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCommunityStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'community icon',
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
      <path d="M7.32836 8.19123C5.89484 8.19123 4.73274 7.02914 4.73274 5.59562C4.73274 4.1621 5.89484 3 7.32836 3C8.76188 3 9.92398 4.1621 9.92398 5.59562C9.92398 7.02914 8.76188 8.19123 7.32836 8.19123ZM7.32836 8.19123C9.25966 8.19123 10.967 9.15 12.0005 10.6175C13.0339 9.15 14.7413 8.19123 16.6726 8.19123M7.32836 8.19123C5.39706 8.19123 3.68969 9.15 2.65625 10.6175M16.6726 8.19123C15.2391 8.19123 14.077 7.02914 14.077 5.59562C14.077 4.1621 15.2391 3 16.6726 3C18.1061 3 19.2682 4.1621 19.2682 5.59562C19.2682 7.02914 18.1061 8.19123 16.6726 8.19123ZM16.6726 8.19123C18.6039 8.19123 20.3113 9.15 21.3447 10.6175M7.32836 18.5737C5.89484 18.5737 4.73274 17.4116 4.73274 15.9781C4.73274 14.5446 5.89484 13.3825 7.32836 13.3825C8.76188 13.3825 9.92398 14.5446 9.92398 15.9781C9.92398 17.4116 8.76188 18.5737 7.32836 18.5737ZM7.32836 18.5737C9.25966 18.5737 10.967 19.5325 12.0005 21C13.0339 19.5325 14.7413 18.5737 16.6726 18.5737M7.32836 18.5737C5.39706 18.5737 3.68969 19.5325 2.65625 21M16.6726 18.5737C15.2391 18.5737 14.077 17.4116 14.077 15.9781C14.077 14.5446 15.2391 13.3825 16.6726 13.3825C18.1061 13.3825 19.2682 14.5446 19.2682 15.9781C19.2682 17.4116 18.1061 18.5737 16.6726 18.5737ZM16.6726 18.5737C18.6039 18.5737 20.3113 19.5325 21.3447 21" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
