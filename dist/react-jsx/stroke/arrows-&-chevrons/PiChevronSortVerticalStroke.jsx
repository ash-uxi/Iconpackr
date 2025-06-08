import React from 'react';

/**
 * PiChevronSortVerticalStroke icon from the stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiChevronSortVerticalStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'chevron-sort-vertical icon',
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
      <path d="M16 9C14.9379 7.53812 13.6929 6.22872 12.2979 5.1058C12.1226 4.96473 11.8774 4.96473 11.7021 5.1058C10.3071 6.22872 9.06206 7.53812 8 9M8 15C9.06206 16.4619 10.3071 17.7713 11.7021 18.8942C11.8774 19.0353 12.1226 19.0353 12.2979 18.8942C13.6929 17.7713 14.9379 16.4619 16 15" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
