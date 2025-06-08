import React from 'react';

/**
 * PiAlarmOffContrast icon from the contrast style in time category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAlarmOffContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'alarm-off icon',
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
    <path d="M12 4a9 9 0 0 0-6.901 14.777 1 1 0 0 0 1.473.065l11.27-11.27a1 1 0 0 0-.065-1.473A8.97 8.97 0 0 0 12 4M20.42 9.814a1 1 0 0 0-1.643-.353L8.461 19.777a1 1 0 0 0 .353 1.642A9 9 0 0 0 20.42 9.814"/>
  </g>
  <path d="M5 3 2 6m12.283 9.37.217.13m4.984-5.332A8 8 0 0 1 9.168 20.484m-3.303-2.35a8 8 0 0 1 11.27-11.27m-11.27 11.27L2 22m3.865-3.865L12 12m0 0v-2m0 2 5.135-5.135m0 0L20 4m2-2-2 2m0 0-1-1"/>
    </svg>
  );
}
