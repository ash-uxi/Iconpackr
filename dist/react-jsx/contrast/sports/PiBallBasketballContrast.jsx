import React from 'react';

/**
 * PiBallBasketballContrast icon from the contrast style in sports category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBallBasketballContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'ball-basketball icon',
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
      <path fill="currentColor" d="M12 21.15a9.15 9.15 0 1 0 0-18.3 9.15 9.15 0 0 0 0 18.3" opacity=".28"/>
  <path d="M21.15 12A9.15 9.15 0 0 1 12 21.15M21.15 12A9.15 9.15 0 0 0 12 2.85M21.15 12H2.85M12 21.15A9.15 9.15 0 0 1 2.85 12M12 21.15V2.85M2.85 12A9.15 9.15 0 0 1 12 2.85M5.518 5.542A9.12 9.12 0 0 1 8.188 12a9.12 9.12 0 0 1-2.67 6.458M18.481 5.542a9.15 9.15 0 0 0 0 12.916"/>
    </svg>
  );
}
