import React from 'react';

/**
 * PiFloppyDefaultContrast icon from the contrast style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFloppyDefaultContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'floppy-default icon',
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
      <path d="M11 7H7m10 14v-3.2c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C14.72 13 13.88 13 12.2 13h-.4c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C7 15.28 7 16.12 7 17.8V21m10 0H7m10 0a4 4 0 0 0 4-4V9.053c0-1.018-.217-1.542-.937-2.262l-2.854-2.854C16.49 3.217 15.966 3 14.947 3H9.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 6.04 3 7.16 3 9.4V17a4 4 0 0 0 4 4"/>
  <path fill="currentColor" d="M17.188 3.916c-.33-.33-.496-.496-.698-.62a2 2 0 0 0-.576-.24c-.23-.055-.455-.055-.905-.056H9.56C8.485 3 7.662 3 7 3.046c-.752.052-1.295.163-1.761.4A4.1 4.1 0 0 0 3.447 5.24C3 6.116 3 7.264 3 9.56v4.88c0 2.296 0 3.444.447 4.321a4.1 4.1 0 0 0 1.792 1.792c.466.238 1.01.35 1.761.401C7.662 21 8.485 21 9.56 21h4.88c1.075 0 1.898 0 2.56-.046.752-.052 1.295-.163 1.761-.4a4.1 4.1 0 0 0 1.792-1.793C21 17.884 21 16.736 21 14.44V8.99c-.001-.45-.001-.674-.057-.904a2 2 0 0 0-.24-.576c-.123-.202-.288-.367-.62-.698z" opacity=".28"/>
    </svg>
  );
}
