import React from 'react';

/**
 * PiDrawHighlighterAngleStroke icon from the stroke style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDrawHighlighterAngleStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'draw-highlighter-angle icon',
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
      <path d="M17.164 15.9074L15.7144 17.357C15.383 17.6883 14.877 17.7385 14.4927 17.5076M17.164 15.9074C18.1347 16.5505 19.4554 16.4444 20.3106 15.5892L22.7855 13.1143M17.164 15.9074C17.0266 15.8164 16.8961 15.7103 16.7751 15.5892L10.4111 9.22525C10.29 9.10417 10.184 8.97376 10.0929 8.83634M10.0929 8.83634L8.64334 10.2859C8.31199 10.6173 8.26178 11.1233 8.49271 11.5076M10.0929 8.83634C9.44981 7.86565 9.55587 6.54495 10.4111 5.68972L12.886 3.21484M8.49271 11.5076C8.53395 11.5762 8.58416 11.6409 8.64334 11.7001L14.3002 17.357C14.3594 17.4161 14.4241 17.4663 14.4927 17.5076M8.49271 11.5076L3.58579 16.4145C3.21071 16.7896 3 17.2983 3 17.8287L3 19.0003C3 19.5526 3.44772 20.0003 4 20.0003H11.5858C11.851 20.0003 12.1054 19.8949 12.2929 19.7074L14.4927 17.5076" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
