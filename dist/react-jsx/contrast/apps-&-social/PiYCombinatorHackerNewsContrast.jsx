import React from 'react';

/**
 * PiYCombinatorHackerNewsContrast icon from the contrast style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiYCombinatorHackerNewsContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'y-combinator-hacker-news icon',
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
      <path fill="currentColor" d="M10.4 20h3.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C20 16.96 20 15.84 20 13.6v-3.2c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C16.96 4 15.84 4 13.6 4h-3.2c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C4 7.04 4 8.16 4 10.4v3.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C7.04 20 8.16 20 10.4 20" opacity=".28"/>
  <path d="m8.5 8 3.5 5.347m0 0L15.5 8M12 13.347V17m1.6 3h-3.2c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C4 16.96 4 15.84 4 13.6v-3.2c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C7.04 4 8.16 4 10.4 4h3.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C20 7.04 20 8.16 20 10.4v3.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C16.96 20 15.84 20 13.6 20"/>
    </svg>
  );
}
