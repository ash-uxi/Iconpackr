import React from 'react';

/**
 * PiArchiveHeartDuoSolid icon from the duo-solid style in files-&-folders category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArchiveHeartDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'archive-heart icon',
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
      <path d="M12 18.563c.35 0 3.5-1.702 3.5-4.084 0-1.19-1.05-2.026-2.1-2.041-.525-.008-1.05.17-1.4.68-.35-.51-.884-.68-1.4-.68-1.05 0-2.1.85-2.1 2.04 0 2.383 3.15 4.085 3.5 4.085" /> <path fill={color || "currentColor"} fillRule="evenodd" d="M3 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" clipRule="evenodd" /> <path fill={color || "currentColor"} fillRule="evenodd" d="M4 9a1 1 0 0 0-1 1v7a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-7a1 1 0 0 0-1-1z" clipRule="evenodd" opacity=".28" />
    </svg>
  );
}
