import React from 'react';

/**
 * PiArchiveArrowDownDuoSolid icon from the duo-solid style in files-&-folders category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArchiveArrowDownDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'archive-arrow-down icon',
  ...props 
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path fill={color || "currentColor"} fillRule="evenodd" d="M3 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" clipRule="evenodd" /> <path fill={color || "currentColor"} fillRule="evenodd" d="M4 9a1 1 0 0 0-1 1v7a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-7a1 1 0 0 0-1-1z" clipRule="evenodd" opacity=".28" /> <path d="M9.429 16.09c.634.846 1.37 1.61 2.19 2.275.112.09.246.135.381.135m0 0a.6.6 0 0 0 .381-.135c.82-.665 1.556-1.43 2.19-2.275M12 18.5v-6" />
    </svg>
  );
}
