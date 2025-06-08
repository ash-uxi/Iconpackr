import React from 'react';

/**
 * PiFile02PdfFormatContrast icon from the contrast style in files-&-folders category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFile02PdfFormatContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'file-02-pdf-format icon',
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
      <path d="M11 2h1a8 8 0 0 1 8 8h-.17A3 3 0 0 0 17 8h-.6c-.372 0-.557 0-.713-.025a2 2 0 0 1-1.662-1.662C14 6.157 14 5.972 14 5.6V5a3 3 0 0 0-3-3m0 0H8a4 4 0 0 0-4 4v4m-1 9v-5h1.5a2.5 2.5 0 0 1 0 5zm0 0v2m14-3v-4h4m-4 4v3m0-3h4m-11-4v7h.5a3.5 3.5 0 1 0 0-7z"/>
  <path fill="currentColor" d="M4 11V6a4 4 0 0 1 4-4h4a8 8 0 0 1 8 8v1z" opacity=".28"/>
    </svg>
  );
}
