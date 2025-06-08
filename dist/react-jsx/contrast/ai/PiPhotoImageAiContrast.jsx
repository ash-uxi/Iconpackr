import React from 'react';

/**
 * PiPhotoImageAiContrast icon from the contrast style in ai category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPhotoImageAiContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'photo-image-ai icon',
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
      <g fill="currentColor" opacity=".28">
    <path d="M2.545 5.73C2 6.8 2 8.2 2 11v2c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185c.78.398 1.738.505 3.287.534C8.59 21 9.244 21 10 21h3c0-1.062.552-1.996 1.385-2.529A3 3 0 0 1 15.9 14.21c.62-.244.793-.4.856-.462.064-.064.213-.236.454-.848A3 3 0 0 1 20 11h2l-.001-1c-.008-2.15-.068-3.336-.544-4.27a5 5 0 0 0-2.185-2.185C18.2 3 16.8 3 14 3h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 5.73M23 17c-1.66-.655-2.363-1.383-3-3-.637 1.617-1.34 2.345-3 3 1.66.655 2.363 1.384 3 3 .637-1.616 1.34-2.345 3-3"/>
  </g>
  <path d="M8.017 20.99c.01-.251.023-.465.043-.666A11.5 11.5 0 0 1 18.324 10.06C18.91 10 19.607 10 21 10h.999c-.008-2.15-.068-3.336-.544-4.27a5 5 0 0 0-2.185-2.185C18.2 3 16.8 3 14 3h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 5.73C2 6.8 2 8.2 2 11v2c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185c.78.398 1.738.505 3.287.534m0 0C8.59 21 9.244 21 10 21h2m4 0h.01M7.5 9.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2M20 14c-.637 1.617-1.34 2.345-3 3 1.66.655 2.363 1.384 3 3 .637-1.616 1.34-2.345 3-3-1.66-.655-2.363-1.383-3-3"/>
    </svg>
  );
}
