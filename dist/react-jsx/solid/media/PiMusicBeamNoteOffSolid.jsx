import React from 'react';

/**
 * PiMusicBeamNoteOffSolid icon from the solid style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMusicBeamNoteOffSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'music-beam-note-off icon',
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
      <path d="M19.5859 1.17292C20.3405 0.880444 21.1215 0.976408 21.7443 1.32982C22.077 1.24333 22.4462 1.32876 22.7071 1.58612C23.0976 1.97137 23.0976 2.59598 22.7071 2.98123L2.70711 22.7111C2.31658 23.0963 1.68342 23.0963 1.29289 22.7111C0.902369 22.3258 0.902369 21.7012 1.29289 21.316L1.55396 21.0584C1.20229 20.471 1 19.7854 1 19.0541C1 16.8748 2.79086 15.1081 5 15.1081C5.72822 15.1081 6.41168 15.3006 7 15.6362V8.06758C7 6.85078 7.75499 5.75798 8.90304 5.31305L19.5859 1.17292ZM10.4893 12.2438L9 13.713V12.8209L10.4893 12.2438Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
  <path d="M21 7.8615V12.6765C20.4117 12.3408 19.7286 12.1486 19 12.1486C16.7909 12.1486 15 13.9153 15 16.0946C15 18.2739 16.7909 20.0405 19 20.0405C21.2091 20.0405 23 18.2739 23 16.0946V7.8615C23 7.31667 22.5523 6.875 22 6.875C21.4477 6.875 21 7.31667 21 7.8615Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
