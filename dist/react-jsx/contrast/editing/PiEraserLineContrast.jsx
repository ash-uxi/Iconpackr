import React from 'react';

/**
 * PiEraserLineContrast icon from the contrast style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiEraserLineContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'eraser-line icon',
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
      <path d="m14.268 17.292-.907.908c-.302.301-.567.567-.807.8m1.714-1.708 3.932-3.931c1.27-1.27 1.905-1.905 2.143-2.638.21-.644.21-1.338 0-1.982-.238-.733-.873-1.368-2.143-2.638l-.303-.303c-1.27-1.27-1.905-1.905-2.638-2.143a3.2 3.2 0 0 0-1.982 0c-.732.238-1.368.873-2.638 2.143L6.708 9.732m7.56 7.56-7.56-7.56m0 0-.908.907c-1.27 1.27-1.905 1.906-2.143 2.638a3.2 3.2 0 0 0 0 1.982c.238.733.873 1.368 2.143 2.638l.303.303c.301.301.567.567.807.8h5.644m0 0H21"/>
  <path fill="currentColor" d="m17.897 5.8.303.303c1.27 1.27 1.905 1.905 2.143 2.638.21.644.21 1.338 0 1.982-.238.732-.873 1.368-2.143 2.638l-3.918 3.917-7.56-7.56L10.639 5.8c1.27-1.27 1.906-1.905 2.638-2.143a3.2 3.2 0 0 1 1.982 0c.733.238 1.368.873 2.638 2.143" opacity=".28"/>
    </svg>
  );
}
