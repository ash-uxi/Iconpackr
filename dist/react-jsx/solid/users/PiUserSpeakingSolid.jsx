import React from 'react';

/**
 * PiUserSpeakingSolid icon from the solid style in users category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiUserSpeakingSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'user-speaking icon',
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
      <path d="M11 2.25C8.37665 2.25 6.25 4.37665 6.25 7C6.25 9.62335 8.37665 11.75 11 11.75C13.6234 11.75 15.75 9.62335 15.75 7C15.75 4.37665 13.6234 2.25 11 2.25Z" fill="currentColor" stroke="none"/>
  <path d="M17.6248 3.07302C18.1367 2.86579 18.7197 3.11281 18.9269 3.62474C19.3494 4.66836 19.5815 5.80828 19.5815 6.99995C19.5815 8.19163 19.3494 9.33155 18.9269 10.3752C18.7197 10.8871 18.1367 11.1341 17.6248 10.9269C17.1129 10.7197 16.8658 10.1367 17.0731 9.62474C17.4006 8.81549 17.5815 7.93008 17.5815 6.99995C17.5815 6.06983 17.4006 5.18442 17.0731 4.37517C16.8658 3.86324 17.1129 3.28024 17.6248 3.07302Z" fill="currentColor" stroke="none"/>
  <path d="M2 19C2 16.2385 4.23858 14 7 14H15C17.7614 14 20 16.2385 20 19C20 20.6568 18.6569 22 17 22H5C3.34315 22 2 20.6568 2 19Z" fill="currentColor" stroke="none"/>
  <path d="M20.3454 1.10956C20.8372 0.85818 21.4396 1.05304 21.691 1.5448C22.5282 3.18257 23 5.03762 23 6.99995C23 8.96229 22.5282 10.8173 21.691 12.4551C21.4396 12.9469 20.8372 13.1417 20.3454 12.8903C19.8537 12.639 19.6588 12.0365 19.9102 11.5448C20.6067 10.1823 21 8.6385 21 6.99995C21 5.3614 20.6067 3.81763 19.9102 2.45514C19.6588 1.96338 19.8537 1.36095 20.3454 1.10956Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
