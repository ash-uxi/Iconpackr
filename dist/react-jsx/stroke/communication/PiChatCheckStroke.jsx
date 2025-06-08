import React from 'react';

/**
 * PiChatCheckStroke icon from the stroke style in communication category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiChatCheckStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'chat-check icon',
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
      <path d="M8.5 12.7663L10.8412 15.105C11.9672 13.136 13.5256 11.4484 15.3987 10.1693L15.5 10.1001M21 12C21 16.9706 16.9706 21 12 21C11.5683 21 11.1437 20.9696 10.7283 20.9108C9.52487 20.7406 8.92271 20.6555 8.76429 20.6433C8.5069 20.6234 8.59919 20.6266 8.34105 20.6286C8.18347 20.6298 8.00402 20.6426 7.64812 20.668L5.48597 20.8224C4.62856 20.8837 4.19982 20.9143 3.87922 20.7623C3.59778 20.6289 3.37113 20.4022 3.2377 20.1208C3.0857 19.8002 3.11632 19.3715 3.17757 18.514L3.33138 16.3607C3.35723 15.9988 3.37015 15.8179 3.37139 15.6589C3.37339 15.4008 3.37659 15.4931 3.35674 15.2357C3.34452 15.0773 3.2594 14.4754 3.08915 13.2717C3.03039 12.8563 3 12.4317 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
