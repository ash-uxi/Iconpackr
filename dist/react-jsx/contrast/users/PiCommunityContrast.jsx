import React from 'react';

/**
 * PiCommunityContrast icon from the contrast style in users category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCommunityContrast({ 
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
      <g fill="currentColor" opacity=".28">
    <path d="M4.732 5.596a2.596 2.596 0 1 1 5.192 0 2.596 2.596 0 0 1-5.192 0M14.077 5.596a2.596 2.596 0 1 1 5.19 0 2.596 2.596 0 0 1-5.19 0M4.732 15.978a2.596 2.596 0 1 1 5.192 0 2.596 2.596 0 0 1-5.192 0M14.077 15.978a2.596 2.596 0 1 1 5.19 0 2.596 2.596 0 0 1-5.19 0"/>
  </g>
  <path d="M7.328 8.191a2.596 2.596 0 1 1 0-5.191 2.596 2.596 0 0 1 0 5.191m0 0c1.932 0 3.639.959 4.673 2.426a5.7 5.7 0 0 1 4.672-2.426m-9.345 0a5.7 5.7 0 0 0-4.672 2.426m14.017-2.426a2.596 2.596 0 1 1 0-5.191 2.596 2.596 0 0 1 0 5.191m0 0c1.93 0 3.638.959 4.672 2.426M7.328 18.575a2.596 2.596 0 1 1 0-5.192 2.596 2.596 0 0 1 0 5.192m0 0c1.932 0 3.639.958 4.673 2.426a5.7 5.7 0 0 1 4.672-2.426m-9.345 0A5.7 5.7 0 0 0 2.656 21m14.017-2.426a2.596 2.596 0 1 1 0-5.192 2.596 2.596 0 0 1 0 5.192m0 0c1.93 0 3.638.958 4.672 2.426"/>
    </svg>
  );
}
