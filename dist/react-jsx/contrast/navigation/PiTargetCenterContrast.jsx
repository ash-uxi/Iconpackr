import React from 'react';

/**
 * PiTargetCenterContrast icon from the contrast style in navigation category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTargetCenterContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'target-center icon',
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
      <path d="M12 21.15A9.15 9.15 0 0 0 21.15 12M12 21.15c-4.958 0-9.15-4.166-9.15-9.15M12 21.15V17m-9.15-5A9.15 9.15 0 0 1 12 2.85M2.85 12H7m14.15 0A9.15 9.15 0 0 0 12 2.85M21.15 12H17m-5-9.15V7m0 10a5 5 0 0 0 5-5m-5 5c-2.71 0-5-2.276-5-5m5 5V7m-5 5a5 5 0 0 1 5-5m-5 5h10m0 0a5 5 0 0 0-5-5"/>
  <path fill="currentColor" d="M2.85 12a9.15 9.15 0 1 1 18.3-.004A9.15 9.15 0 0 1 2.85 12" opacity=".28"/>
    </svg>
  );
}
