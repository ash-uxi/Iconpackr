import React from 'react';

/**
 * PiDrawHighlighterContrast icon from the contrast style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDrawHighlighterContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'draw-highlighter icon',
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
      <path d="M14 13h-4m4 0a2 2 0 0 1 2 2v5.231M14 13V9.125L12.667 8 10 10.25V13m0 0a2 2 0 0 0-2 2v5.231m8 0a9.15 9.15 0 1 0-8 0m8 0a9.1 9.1 0 0 1-4 .919 9.1 9.1 0 0 1-4-.919"/>
  <path fill="currentColor" d="M2.85 12a9.15 9.15 0 1 1 18.3 0 9.15 9.15 0 0 1-18.3 0" opacity=".28"/>
    </svg>
  );
}
