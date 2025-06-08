import React from 'react';

/**
 * PiSpeakerOnSolid icon from the solid style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSpeakerOnSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'speaker-on icon',
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
      <path d="M10.3572 1H13.6428C14.7266 0.99999 15.6007 0.999983 16.3086 1.05782C17.0375 1.11737 17.6777 1.24318 18.27 1.54497C19.2108 2.02434 19.9757 2.78924 20.455 3.73005C20.7568 4.32234 20.8826 4.96253 20.9422 5.69138C21 6.39923 21 7.27334 21 8.35707V15.6428C21 16.7266 21 17.6008 20.9422 18.3086C20.8826 19.0375 20.7568 19.6777 20.455 20.27C19.9757 21.2108 19.2108 21.9757 18.27 22.455C17.6777 22.7568 17.0375 22.8826 16.3086 22.9422C15.6008 23 14.7267 23 13.6429 23H10.3572C9.27344 23 8.39923 23 7.69138 22.9422C6.96253 22.8826 6.32234 22.7568 5.73005 22.455C4.78924 21.9757 4.02434 21.2108 3.54497 20.27C3.24318 19.6777 3.11737 19.0375 3.05782 18.3086C2.99998 17.6007 2.99999 16.7266 3 15.6428V8.35719C2.99999 7.27341 2.99998 6.39925 3.05782 5.69138C3.11737 4.96253 3.24318 4.32234 3.54497 3.73005C4.02434 2.78924 4.78924 2.02434 5.73005 1.54497C6.32234 1.24318 6.96253 1.11737 7.69138 1.05782C8.39925 0.999983 9.27341 0.99999 10.3572 1ZM12 5.00342C11.1716 5.00342 10.5 5.67499 10.5 6.50342C10.5 7.33185 11.1716 8.00342 12 8.00342C12.8284 8.00342 13.5 7.33185 13.5 6.50342C13.5 5.67499 12.8284 5.00342 12 5.00342ZM12 10C9.23858 10 7 12.2386 7 15C7 17.7614 9.23858 20 12 20C14.7614 20 17 17.7614 17 15C17 12.2386 14.7614 10 12 10Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
  <path d="M9 15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
