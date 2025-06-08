import React from 'react';

/**
 * PiArrowTurnUpLeftContrast icon from the contrast style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowTurnUpLeftContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-turn-up-left icon',
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
      <path d="M8.351 9H12c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C20 12.8 20 14.2 20 17v3M8.351 9a24 24 0 0 1 .205-3.13c.062-.468.142-.935.303-1.87a25.2 25.2 0 0 0-4.684 4.505.79.79 0 0 0 0 .99A25.2 25.2 0 0 0 8.859 14c-.16-.935-.241-1.402-.303-1.87A24 24 0 0 1 8.351 9"/>
  <path fill="currentColor" d="M8.859 4a25.2 25.2 0 0 0-4.684 4.505.79.79 0 0 0 0 .99A25.2 25.2 0 0 0 8.859 14c-.16-.935-.241-1.402-.303-1.87a24 24 0 0 1 0-6.26c.062-.468.142-.935.303-1.87" opacity=".28"/>
    </svg>
  );
}
