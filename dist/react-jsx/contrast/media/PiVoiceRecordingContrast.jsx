import React from 'react';

/**
 * PiVoiceRecordingContrast icon from the contrast style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiVoiceRecordingContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'voice-recording icon',
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
    <path d="M6 16a4.15 4.15 0 1 0 0-8.3A4.15 4.15 0 0 0 6 16M18 16a4.15 4.15 0 1 0 0-8.3 4.15 4.15 0 0 0 0 8.3"/>
  </g>
  <path d="M6 16a4.15 4.15 0 1 0 0-8.3A4.15 4.15 0 0 0 6 16m0 0h12m0 0a4.15 4.15 0 1 0 0-8.3 4.15 4.15 0 0 0 0 8.3"/>
    </svg>
  );
}
