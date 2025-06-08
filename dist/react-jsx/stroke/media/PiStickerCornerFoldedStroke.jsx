import React from 'react';

/**
 * PiStickerCornerFoldedStroke icon from the stroke style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiStickerCornerFoldedStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'sticker-corner-folded icon',
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
      <path d="M21 9C21 10.146 21 10.7191 20.833 11.1779C20.553 11.9471 19.9471 12.553 19.1779 12.833C18.7191 13 18.146 13 17 13H15.9538C14.9199 13 14.4029 13 14.008 13.2012C13.6606 13.3782 13.3782 13.6606 13.2012 14.008C13 14.4029 13 14.9199 13 15.9538L13 17C13 18.146 13 18.7191 12.833 19.1779C12.553 19.9471 11.9471 20.553 11.1779 20.833C10.7191 21 10.146 21 9 21" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M3 7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V13C21 17.4183 17.4183 21 13 21H7C4.79086 21 3 19.2091 3 17V7Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
