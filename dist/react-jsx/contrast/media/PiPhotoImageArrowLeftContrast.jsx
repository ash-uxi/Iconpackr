import React from 'react';

/**
 * PiPhotoImageArrowLeftContrast icon from the contrast style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPhotoImageArrowLeftContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'photo-image-arrow-left icon',
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
      <path d="M12.453 21H10c-.756 0-1.41 0-1.983-.01M22 10H21c-1.393 0-2.09 0-2.676.06A11.5 11.5 0 0 0 8.06 20.324c-.02.2-.034.415-.043.665M22 10 22 11v2c0 .62 0 1.173-.006 1.668M22 10c-.008-2.15-.068-3.336-.544-4.27a5 5 0 0 0-2.185-2.185C18.2 3 16.8 3 14 3h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 5.73C2 6.8 2 8.2 2 11v2c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185c.78.398 1.738.505 3.287.534m10.393-4.562a12.9 12.9 0 0 0-2.275 2.191.6.6 0 0 0-.135.38m2.41 2.572a12.9 12.9 0 0 1-2.275-2.191.6.6 0 0 1-.135-.38m0 0h6M7.5 9.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
  <path fill="currentColor" d="M2.545 5.73C2 6.8 2 8.2 2 11v2c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185c.78.398 1.738.505 3.287.534C8.59 21 9.244 21 10 21h3.357v-.438a3.61 3.61 0 0 1 .447-3.832 15.9 15.9 0 0 1 2.806-2.703 3 3 0 0 1 4.502 1.095h.874C22 14.516 22 13.818 22 13v-2l-.001-1c-.008-2.15-.068-3.336-.544-4.27a5 5 0 0 0-2.185-2.185C18.2 3 16.8 3 14 3h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 5.73" opacity=".28"/>
    </svg>
  );
}
