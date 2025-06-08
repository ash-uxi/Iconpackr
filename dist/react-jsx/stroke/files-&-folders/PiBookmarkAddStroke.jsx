import React from 'react';

/**
 * PiBookmarkAddStroke icon from the stroke style in files-&-folders category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBookmarkAddStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'bookmark-add icon',
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
      <path d="M12 13V10M12 10V7M12 10H9M12 10H15M19 9V22L17.2063 20.4626C15.3585 18.8787 14.4345 18.0867 13.3984 17.7849C12.4851 17.5189 11.5149 17.5189 10.6016 17.7849C9.56547 18.0867 8.64152 18.8787 6.79367 20.4626L5 22V9C5 7.13872 5 6.20808 5.24472 5.45492C5.73931 3.93273 6.93273 2.73931 8.45492 2.24472C9.20808 2 10.1387 2 12 2C13.8613 2 14.7919 2 15.5451 2.24472C17.0673 2.73931 18.2607 3.93273 18.7553 5.45492C19 6.20808 19 7.13872 19 9Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
