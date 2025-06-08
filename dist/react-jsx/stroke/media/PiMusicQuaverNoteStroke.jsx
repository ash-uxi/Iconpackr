import React from 'react';

/**
 * PiMusicQuaverNoteStroke icon from the stroke style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMusicQuaverNoteStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'music-quaver-note icon',
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
      <path d="M12 18.9983V3.64314C12 2.42323 13.2831 1.62981 14.3735 2.17536C16.5961 3.28727 18 5.56017 18 8.04647C18 9.46441 17.5985 10.8414 16.8189 12M12 18.9983C12 20.6561 10.6569 22 9 22C7.34315 22 6 20.6561 6 18.9983C6 17.3405 7.34315 15.9965 9 15.9965C10.6569 15.9965 12 17.3405 12 18.9983Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
