import React from 'react';

/**
 * PiSettings02Contrast icon from the contrast style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSettings02Contrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'settings-02 icon',
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
      <path fill="currentColor" d="M10.398 4.28c.387-1.706 2.817-1.706 3.204 0l.051.225a1.642 1.642 0 0 0 2.478 1.027l.196-.124c1.48-.933 3.198.786 2.265 2.265l-.123.196a1.642 1.642 0 0 0 1.026 2.478l.226.051c1.705.387 1.705 2.817 0 3.204l-.226.051a1.642 1.642 0 0 0-1.027 2.478l.124.196c.933 1.48-.786 3.198-2.265 2.265l-.196-.123a1.642 1.642 0 0 0-2.478 1.026l-.051.226c-.387 1.705-2.817 1.705-3.204 0l-.051-.226a1.642 1.642 0 0 0-2.478-1.027l-.196.124c-1.48.933-3.198-.786-2.265-2.265l.124-.196a1.642 1.642 0 0 0-1.027-2.478l-.226-.051c-1.705-.387-1.705-2.817 0-3.204l.226-.051a1.643 1.643 0 0 0 1.027-2.478l-.124-.196c-.933-1.48.786-3.198 2.265-2.265l.196.124a1.643 1.643 0 0 0 2.478-1.027z" opacity=".28"/>
  <path d="M10.398 4.28c.387-1.706 2.817-1.706 3.204 0l.051.225a1.642 1.642 0 0 0 2.478 1.027l.196-.124c1.48-.933 3.198.786 2.265 2.265l-.123.196a1.642 1.642 0 0 0 1.026 2.478l.226.051c1.705.387 1.705 2.817 0 3.204l-.226.051a1.642 1.642 0 0 0-1.027 2.478l.124.196c.933 1.48-.786 3.198-2.265 2.265l-.196-.123a1.642 1.642 0 0 0-2.478 1.026l-.051.226c-.387 1.705-2.817 1.705-3.204 0l-.051-.226a1.642 1.642 0 0 0-2.478-1.027l-.196.124c-1.48.933-3.198-.786-2.265-2.265l.124-.196a1.642 1.642 0 0 0-1.027-2.478l-.226-.051c-1.705-.387-1.705-2.817 0-3.204l.226-.051a1.643 1.643 0 0 0 1.027-2.478l-.124-.196c-.933-1.48.786-3.198 2.265-2.265l.196.124a1.643 1.643 0 0 0 2.478-1.027z"/>
  <path d="M10.99 12c0-.552.458-1 1.01-1s1.01.448 1.01 1-.458 1-1.01 1-1.01-.448-1.01-1"/>
    </svg>
  );
}
