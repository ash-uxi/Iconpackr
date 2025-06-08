import React from 'react';

/**
 * PiBallCricketDuoStroke icon from the duo-stroke style in sports category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBallCricketDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'ball-cricket icon',
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
      <path  d="m10.352 22.016 5.229-19.514a10.3 10.3 0 0 0-1.932-.518L8.42 21.5a10.3 10.3 0 0 0 1.932.517M10.914 4.462a1 1 0 0 1 .707 1.225l-.259.966a1 1 0 1 1-1.931-.518l.258-.966a1 1 0 0 1 1.225-.707M12.644 1.869l-.246.92a1 1 0 1 1-1.932-.518l.086-.32c.684-.099 1.385-.128 2.092-.082M13.793 20.763a1 1 0 1 0-1.931-.518l-.26.966a1 1 0 0 0 .234.94q.781.012 1.541-.092a1 1 0 0 0 .157-.33z" fill="none"/>
  <path d="M14.368 3.162a9.15 9.15 0 0 1 6.47 11.206 9.15 9.15 0 0 1-8.178 6.76 9.1 9.1 0 0 1-3.028-.29 9.15 9.15 0 1 1 4.736-17.676" opacity=".28" fill="none"/>
  <path  d="M14.829 16.9a1 1 0 0 0-1.932-.519l-.26.966a1 1 0 0 0 1.933.518zM15.864 13.035a1 1 0 0 0-1.932-.517l-.259.966a1 1 0 1 0 1.932.517zM16.9 9.172a1 1 0 0 0-1.933-.518l-.258.966a1 1 0 1 0 1.931.518zM17.934 5.308a1 1 0 1 0-1.931-.518l-.26.966a1 1 0 1 0 1.933.518zM7.491 21.096a1 1 0 0 0-1.605-.991q.747.566 1.605.99M7.808 16.053a1 1 0 0 1 .707 1.225l-.258.966a1 1 0 1 1-1.932-.518l.259-.966a1 1 0 0 1 1.224-.707M8.844 12.19a1 1 0 0 1 .707 1.224l-.26.966a1 1 0 1 1-1.931-.517l.259-.966a1 1 0 0 1 1.225-.707M9.879 8.326a1 1 0 0 1 .707 1.225l-.259.966a1 1 0 1 1-1.932-.518l.26-.966a1 1 0 0 1 1.224-.707" fill="none"/>
    </svg>
  );
}
