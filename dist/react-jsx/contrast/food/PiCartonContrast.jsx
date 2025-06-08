import React from 'react';

/**
 * PiCartonContrast icon from the contrast style in food category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCartonContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'carton icon',
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
      <path d="M9 21H7.032c-1.411 0-2.117 0-2.656-.275a2.52 2.52 0 0 1-1.101-1.1C3 19.084 3 18.378 3 16.967V10.6c0-.594 0-.89.056-1.176a3 3 0 0 1 .243-.73c.127-.262.305-.5.661-.974L6 5m3 16V9m0 12h7.968c1.411 0 2.117 0 2.656-.275a2.52 2.52 0 0 0 1.101-1.1c.275-.54.275-1.246.275-2.657V10.6c0-.594 0-.89-.056-1.176A3 3 0 0 0 20.828 9M9 9 6 5m3 4h11.828M6 5V3.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C6.76 2 7.04 2 7.6 2h8.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C18 2.76 18 3.04 18 3.6V5M6 5h12m0 0 2.04 2.72c.356.475.534.712.66.974q.074.15.128.306"/>
  <path fill="currentColor" d="M9 21V9h11.828a3 3 0 0 1 .116.424C21 9.71 21 10.006 21 10.6v6.368c0 1.411 0 2.117-.275 2.656a2.52 2.52 0 0 1-1.1 1.101c-.54.275-1.246.275-2.657.275z" opacity=".28"/>
    </svg>
  );
}
