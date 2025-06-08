import React from 'react';

/**
 * PiEraserDefaultStroke icon from the stroke style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiEraserDefaultStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'eraser-default icon',
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
      <path d="M14.2682 17.2924L13.3609 18.1996C12.0906 19.4699 11.4555 20.105 10.7231 20.343C10.0788 20.5523 9.38487 20.5523 8.74063 20.343C8.00823 20.105 7.37309 19.4699 6.10281 18.1996L5.80039 17.8972C4.53011 16.6269 3.89496 15.9918 3.65699 15.2594C3.44767 14.6151 3.44767 13.9212 3.65699 13.2769C3.89496 12.5445 4.53011 11.9094 5.80039 10.6391L6.70765 9.73185M14.2682 17.2924L18.1996 13.3609C19.4699 12.0906 20.105 11.4555 20.343 10.7231C20.5523 10.0788 20.5523 9.38487 20.343 8.74063C20.105 8.00823 19.4699 7.37309 18.1996 6.10281L17.8972 5.80039C16.6269 4.53011 15.9918 3.89496 15.2594 3.65699C14.6151 3.44767 13.9212 3.44767 13.2769 3.65699C12.5445 3.89496 11.9094 4.53011 10.6391 5.80039L6.70765 9.73185M14.2682 17.2924L6.70765 9.73185" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
