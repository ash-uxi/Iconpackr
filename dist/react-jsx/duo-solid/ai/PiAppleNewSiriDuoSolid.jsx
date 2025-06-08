import React from 'react';

/**
 * PiAppleNewSiriDuoSolid icon from the duo-solid style in ai category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAppleNewSiriDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'apple-new-siri icon',
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
      <path d="M11.402 15c-1.22.94-2.64 1.758-3.888 1.758a4.514 4.514 0 0 1 0-9.028c2.931 0 6.814 4.514 6.814 4.514s2.338 2.719 4.103 2.719a2.718 2.718 0 0 0 0-5.437c-.311 0-.64.085-.971.224" /> <path fill={color || "currentColor"} d="M12 1.85C6.394 1.85 1.85 6.394 1.85 12S6.394 22.15 12 22.15c5.605 0 10.15-4.544 10.15-10.15S17.605 1.85 12 1.85" opacity=".28" />
    </svg>
  );
}
