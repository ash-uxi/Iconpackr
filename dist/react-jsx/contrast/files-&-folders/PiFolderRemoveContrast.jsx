import React from 'react';

/**
 * PiFolderRemoveContrast icon from the contrast style in files-&-folders category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFolderRemoveContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'folder-remove icon',
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
      <path fill="currentColor" d="M2 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C5.04 3 6.16 3 8.4 3h.316c.47 0 .704 0 .917.065a1.5 1.5 0 0 1 .517.276c.172.142.302.337.563.728l.575.862c.26.391.39.586.562.728a1.5 1.5 0 0 0 .517.276c.213.065.448.065.917.065H15.6c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C22 9.04 22 10.16 22 12.4v2.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C18.96 21 17.84 21 15.6 21H8.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C2 17.96 2 16.84 2 14.6z" opacity=".28"/>
  <path d="M9 14h6M8.716 3H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C2 6.04 2 7.16 2 9.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 21 6.16 21 8.4 21h7.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C22 17.96 22 16.84 22 14.6v-2.2c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C18.96 6 17.84 6 15.6 6h-2.316c-.47 0-.704 0-.917-.065a1.5 1.5 0 0 1-.517-.276c-.172-.142-.302-.337-.562-.728l-.575-.862c-.261-.391-.391-.586-.563-.728a1.5 1.5 0 0 0-.517-.276C9.42 3 9.185 3 8.716 3"/>
    </svg>
  );
}
