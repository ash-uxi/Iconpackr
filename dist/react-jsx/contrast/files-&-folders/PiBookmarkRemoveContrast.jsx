import React from 'react';

/**
 * PiBookmarkRemoveContrast icon from the contrast style in files-&-folders category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBookmarkRemoveContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'bookmark-remove icon',
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
      <path fill="currentColor" d="M5 9c0-1.861 0-2.792.245-3.545a5 5 0 0 1 3.21-3.21C9.208 2 10.139 2 12 2s2.792 0 3.545.245a5 5 0 0 1 3.21 3.21C19 6.208 19 7.139 19 9v13l-1.794-1.537c-1.848-1.584-2.771-2.376-3.808-2.678a5 5 0 0 0-2.796 0c-1.037.302-1.96 1.094-3.808 2.678L5 22z" opacity=".28"/>
  <path d="M9 10h6m4 12V9c0-1.861 0-2.792-.245-3.545a5 5 0 0 0-3.21-3.21C14.792 2 13.861 2 12 2s-2.792 0-3.545.245a5 5 0 0 0-3.21 3.21C5 6.208 5 7.139 5 9v13l1.794-1.537c1.848-1.584 2.771-2.376 3.808-2.678a5 5 0 0 1 2.796 0c1.037.302 1.96 1.094 3.808 2.678z"/>
    </svg>
  );
}
