import React from 'react';

/**
 * PiMicMicrophoneDuoSolid icon from the duo-solid style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMicMicrophoneDuoSolid({ 
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
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path fill={color || "currentColor"} d="M16.64 12.56a1 1 0 0 1-.814-.44l-3.955-3.954a1 1 0 0 1-.432-.809 5.28 5.28 0 1 1 5.201 5.204" /> <path d="M16.679 11.559 6.77 20.424a2.263 2.263 0 0 1-3.195-3.195l8.865-9.908" opacity=".28" />
    </svg>
  );
}
