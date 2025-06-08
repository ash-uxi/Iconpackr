import React from 'react';

/**
 * PiPhotoImageDefaultContrast icon from the contrast style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPhotoImageDefaultContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'photo-image-default icon',
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
      <path fill="currentColor" d="M2 11c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 3.545C5.8 3 7.2 3 10 3h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185c.476.934.536 2.12.544 4.27L22 11v2c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 21 16.8 21 14 21h-4c-.756 0-1.41 0-1.983-.01-1.55-.03-2.506-.137-3.287-.535a5 5 0 0 1-2.185-2.185C2 17.2 2 15.8 2 13z" opacity=".28"/>
  <path d="M21.999 10H21c-1.393 0-2.09 0-2.676.06A11.5 11.5 0 0 0 8.06 20.324c-.02.2-.034.415-.043.665M22 10 22 11v2c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185C18.2 21 16.8 21 14 21h-4c-.756 0-1.41 0-1.983-.01M22 10c-.008-2.15-.068-3.336-.544-4.27a5 5 0 0 0-2.185-2.185C18.2 3 16.8 3 14 3h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 5.73C2 6.8 2 8.2 2 11v2c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185c.78.398 1.738.505 3.287.534M7.5 9.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
    </svg>
  );
}
