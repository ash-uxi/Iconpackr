import React from 'react';

/**
 * PiFile02HeartContrast icon from the contrast style in files-&-folders category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFile02HeartContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'file-02-heart icon',
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
      <path fill="currentColor" d="M16 22H8a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h4a8 8 0 0 1 8 8v8a4 4 0 0 1-4 4" opacity=".28"/>
  <path d="M20 11a3 3 0 0 0-3-3h-.6c-.372 0-.557 0-.713-.025a2 2 0 0 1-1.662-1.662C14 6.157 14 5.972 14 5.6V5a3 3 0 0 0-3-3m9 8v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h4a8 8 0 0 1 8 8m-8 7.625c-.35 0-3.5-1.701-3.5-4.083 0-1.191 1.05-2.042 2.1-2.042.516 0 1.05.17 1.4.68.35-.51.875-.687 1.4-.68 1.05.015 2.1.85 2.1 2.042 0 2.382-3.15 4.083-3.5 4.083"/>
    </svg>
  );
}
