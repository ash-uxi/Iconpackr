import React from 'react';

/**
 * PiChevronSortHorizontalStroke icon from the stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiChevronSortHorizontalStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'chevron-sort-horizontal icon',
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
      <path d="M15 16C16.4619 14.9379 17.7713 13.6929 18.8942 12.2979C19.0353 12.1226 19.0353 11.8774 18.8942 11.7021C17.7713 10.3071 16.4619 9.06206 15 8M9 8C7.53812 9.06206 6.22872 10.3071 5.1058 11.7021C4.96473 11.8774 4.96473 12.1226 5.1058 12.2979C6.22872 13.6929 7.53812 14.9379 9 16" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
