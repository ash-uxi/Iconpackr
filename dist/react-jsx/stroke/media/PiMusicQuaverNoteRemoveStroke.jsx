import React from 'react';

/**
 * PiMusicQuaverNoteRemoveStroke icon from the stroke style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMusicQuaverNoteRemoveStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'music-quaver-note-remove icon',
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
      <path d="M4 7H10M14 18.9983V3.64314C14 2.42323 15.2831 1.62981 16.3735 2.17536C18.5961 3.28727 20 5.56017 20 8.04647C20 9.46441 19.5985 10.8414 18.8189 12M14 18.9983C14 20.6561 12.6569 22 11 22C9.34315 22 8 20.6561 8 18.9983C8 17.3405 9.34315 15.9965 11 15.9965C12.6569 15.9965 14 17.3405 14 18.9983Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
