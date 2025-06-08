import React from 'react';

/**
 * PiUserQuestionMarkContrast icon from the contrast style in users category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiUserQuestionMarkContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'user-question-mark icon',
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
    <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M15.473 18.371l-.119-.039A3 3 0 0 1 13.393 15H8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h9.542c.058-.349.177-.678.345-.975a3 3 0 0 1-.414-1.654"/>
  </g>
  <path d="M14.54 21H6a2 2 0 0 1-2-2 4 4 0 0 1 4-4h4.379m3.971.502a2.249 2.249 0 0 1 4.37.75c0 1.499-2.249 2.248-2.249 2.248m.03 3h.01M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/>
    </svg>
  );
}
