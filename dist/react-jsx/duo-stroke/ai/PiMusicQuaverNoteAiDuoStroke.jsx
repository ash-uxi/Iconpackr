import React from 'react';

/**
 * PiMusicQuaverNoteAiDuoStroke icon from the duo-stroke style in ai category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMusicQuaverNoteAiDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'music-quaver-note-ai icon',
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
      <path d="M14 18.9983V3.64314C14 2.42323 15.2831 1.62981 16.3735 2.17536C18.5961 3.28727 20 5.56017 20 8.04647C20 9.46441 19.5985 10.8414 18.8189 12" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M3 11H3.01M7 4C6.36248 5.61646 5.66087 6.34496 4 7C5.66087 7.65504 6.36247 8.38354 7 10C7.63753 8.38354 8.33913 7.65504 10 7C8.33913 6.34496 7.63752 5.61646 7 4ZM14 18.9983C14 20.6561 12.6569 22 11 22C9.34315 22 8 20.6561 8 18.9983C8 17.3405 9.34315 15.9965 11 15.9965C12.6569 15.9965 14 17.3405 14 18.9983Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
