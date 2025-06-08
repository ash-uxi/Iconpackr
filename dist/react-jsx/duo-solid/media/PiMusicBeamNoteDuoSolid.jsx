import React from 'react';

/**
 * PiMusicBeamNoteDuoSolid icon from the duo-solid style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMusicBeamNoteDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'music-beam-note icon',
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
      <path d="M19 12C16.7909 12 15 13.7909 15 16C15 18.2091 16.7909 20 19 20C21.2091 20 23 18.2091 23 16C23 13.7909 21.2091 12 19 12Z" fill={color || "currentColor"} /> <path d="M21 16V7.96726L9 12.6816V19C9 19.5523 8.55228 20 8 20C7.44772 20 7 19.5523 7 19V7.86309C7 6.62962 7.75499 5.52186 8.90304 5.07084L19.5859 0.874015C21.2259 0.229709 23 1.43882 23 3.20089V16C23 16.5523 22.5523 17 22 17C21.4477 17 21 16.5523 21 16Z" fill={color || "currentColor"} opacity="0.28" /> <path d="M5 15C2.79086 15 1 16.7909 1 19C1 21.2091 2.79086 23 5 23C7.20914 23 9 21.2091 9 19C9 16.7909 7.20914 15 5 15Z" fill={color || "currentColor"} />
    </svg>
  );
}
