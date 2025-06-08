import React from 'react';

/**
 * PiFitnessWalkStroke icon from the stroke style in sports category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFitnessWalkStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'fitness-walk icon',
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
      <path d="M10.5 17.5L10.4874 17.563C10.1753 19.1234 9.25616 20.4959 7.93212 21.3786L7 22" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M11 3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M18 22L15.5938 17.1876C15.2047 16.4094 14.6192 15.7461 13.8952 15.2635L12.8906 14.5937C12.3342 14.2228 12 13.5983 12 12.9296V7L9.42016 8.93488C8.50148 9.62389 7.84797 10.6081 7.56945 11.7222L7 14" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M19 10H17.4142C16.5087 10 15.6403 9.64029 15 9" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
