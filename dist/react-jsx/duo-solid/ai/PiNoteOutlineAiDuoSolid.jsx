import React from 'react';

/**
 * PiNoteOutlineAiDuoSolid icon from the duo-solid style in ai category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiNoteOutlineAiDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'note-outline-ai icon',
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
      <path d="M21 11.53V8.8q0-.434-.002-.8m-9.003 12H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 17.72 3 16.88 3 15.2V8.8q0-.434.002-.8" opacity=".28" /> <path fill={color || "currentColor"} fillRule="evenodd" d="M7.759 3h8.481c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.396.776.427 1.688.434 2.809a1 1 0 0 1-1 1.007H3.002a1 1 0 0 1-1-1.007c.008-1.121.038-2.033.434-2.809a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C6.29 3 6.955 3 7.759 3M19 14a1 1 0 0 1 .93.633c.293.743.566 1.19.896 1.523s.781.614 1.54.914a1 1 0 0 1 0 1.86c-.759.3-1.21.582-1.54.914s-.603.78-.896 1.523a1 1 0 0 1-1.86 0c-.293-.743-.566-1.19-.896-1.523s-.781-.614-1.54-.914a1 1 0 0 1 0-1.86c.759-.3 1.21-.582 1.54-.914s.603-.78.896-1.523A1 1 0 0 1 19 14m-5 8a1 1 0 0 1 1-1h.001a1 1 0 0 1 0 2H15a1 1 0 0 1-1-1" clipRule="evenodd" />
    </svg>
  );
}
