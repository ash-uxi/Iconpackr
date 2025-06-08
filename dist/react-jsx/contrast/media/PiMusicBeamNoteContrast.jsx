import React from 'react';

/**
 * PiMusicBeamNoteContrast icon from the contrast style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMusicBeamNoteContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'music-beam-note icon',
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
    <path d="m9.269 6.002 10.683-4.197A1.5 1.5 0 0 1 22 3.2V6.5L8 12V7.863a2 2 0 0 1 1.269-1.861M19 13a3 3 0 1 0 0 6 3 3 0 0 0 0-6M5 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6"/>
  </g>
  <path d="M8 12V7.863a2 2 0 0 1 1.269-1.861l10.683-4.197A1.5 1.5 0 0 1 22 3.2V6.5M8 12v7m0-7 14-5.5M8 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0M22 6.5V16m0 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
    </svg>
  );
}
