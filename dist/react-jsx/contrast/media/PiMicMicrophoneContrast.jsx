import React from 'react';

/**
 * PiMicMicrophoneContrast icon from the contrast style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMicMicrophoneContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'mic-microphone icon',
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
      <path d="m16.676 11.561.003-.002-4.238-4.238-.002.003m4.237 4.237-9.905 8.863a2.263 2.263 0 0 1-3.195-3.195l8.863-9.905m4.237 4.237a4.28 4.28 0 1 0-4.238-4.237m4.238 4.237h-.021m-4.216-4.237v.019"/>
  <path fill="currentColor" d="M19.746 4.254a4.28 4.28 0 0 0-7.307 3.089l4.216 4.218a4.28 4.28 0 0 0 3.091-7.307" opacity=".28"/>
    </svg>
  );
}
