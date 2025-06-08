import React from 'react';

/**
 * PiNoteOutlineSolid icon from the solid style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiNoteOutlineSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'note-outline icon',
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
      <path d="M7.8 3H7.759C6.954 3 6.289 3 5.749 3.044C5.186 3.09 4.669 3.189 4.184 3.436C3.43139 3.81949 2.81949 4.43139 2.436 5.184C2.04 5.96 2.01 6.872 2.002 7.993C2 8.24 2 8.51 2 8.798V15.24C2 16.045 2 16.71 2.044 17.25C2.09 17.813 2.189 18.33 2.436 18.815C2.81949 19.5676 3.43139 20.1795 4.184 20.563C4.669 20.81 5.186 20.909 5.748 20.955C6.29 21 6.954 21 7.758 21H16.241C17.046 21 17.711 21 18.251 20.956C18.814 20.91 19.331 20.811 19.816 20.564C20.5686 20.1805 21.1805 19.5686 21.564 18.816C21.811 18.331 21.91 17.814 21.956 17.252C22 16.711 22 16.046 22 15.242V8.797C22 8.508 22 8.239 21.998 7.992C21.99 6.871 21.96 5.959 21.564 5.183C21.1805 4.43039 20.5686 3.81849 19.816 3.435C19.331 3.188 18.814 3.089 18.252 3.043C17.71 3 17.046 3 16.242 3H7.8ZM4 9H20V15.2C20 16.057 20 16.639 19.962 17.089C19.927 17.527 19.862 17.752 19.782 17.908C19.5903 18.2843 19.2843 18.5903 18.908 18.782C18.752 18.862 18.528 18.927 18.089 18.962C17.639 18.999 17.057 19 16.2 19H7.8C6.943 19 6.361 19 5.911 18.962C5.473 18.927 5.248 18.862 5.092 18.782C4.71569 18.5903 4.40974 18.2843 4.218 17.908C4.138 17.752 4.073 17.528 4.038 17.089C4 16.639 4 16.057 4 15.2V9Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
