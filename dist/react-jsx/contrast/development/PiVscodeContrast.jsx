import React from 'react';

/**
 * PiVscodeContrast icon from the contrast style in development category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiVscodeContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'vscode icon',
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
      <path d="m17 21 3.231-1.616c.642-.32.963-.481 1.198-.72a2 2 0 0 0 .462-.748C22 17.6 22 17.24 22 16.522V7.478c0-.718 0-1.077-.11-1.394a2 2 0 0 0-.461-.747c-.235-.24-.556-.4-1.198-.721L17 3m0 18v-5m0 5-7.789-7.01M17 3v4.997M17 3l-7.788 7.01M17 7.996V16m0-8.003-5.201 4.002M17 16l-5.201-4m0 0-2.587-1.99m0 0L4 6 2 7.5 7 12m0 0-5 4.5L4 18l5.211-4.01M7 12l2.211 1.99"/>
  <path fill="currentColor" fillRule="evenodd" d="m17 3 3.231 1.616c.642.32.963.481 1.198.72a2 2 0 0 1 .462.748C22 6.4 22 6.76 22 7.478v9.044c0 .718 0 1.077-.11 1.394a2 2 0 0 1-.461.747c-.235.24-.556.4-1.198.721L17 21l-7.789-7.01L4 18l-2-1.5L7 12 2 7.5 4 6l5.212 4.01zm-5.201 9L17 7.996V16z" clipRule="evenodd" opacity=".28"/>
    </svg>
  );
}
