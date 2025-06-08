import React from 'react';

/**
 * PiMessageArrowLeftDuoStroke icon from the duo-stroke style in communication category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMessageArrowLeftDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'message-arrow-left icon',
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
      <path d="M11.8017 7.01074C10.8147 7.75099 9.9234 8.60974 9.14757 9.56717C9.04264 9.69666 8.99018 9.8537 8.99018 10.0107M11.8017 13.0107C10.8147 12.2705 9.9234 11.4117 9.14757 10.4543C9.04264 10.3248 8.99018 10.1678 8.99018 10.0107M8.99018 10.0107H15.0098" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V12.2C3 13.8802 3 14.7202 3.32698 15.362C3.6146 15.9265 4.07354 16.3854 4.63803 16.673C5.27976 17 6.11984 17 7.8 17H8V21L13 17H16.2C17.8802 17 18.7202 17 19.362 16.673C19.9265 16.3854 20.3854 15.9265 20.673 15.362C21 14.7202 21 13.8802 21 12.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.2" fill="none"/>
    </svg>
  );
}
