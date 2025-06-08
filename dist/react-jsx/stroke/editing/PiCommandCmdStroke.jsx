import React from 'react';

/**
 * PiCommandCmdStroke icon from the stroke style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCommandCmdStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'command-cmd icon',
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
      <path d="M9.33333 14.6667H6.66667C5.19391 14.6667 4 15.8606 4 17.3333C4 18.8061 5.19391 20 6.66667 20C8.13943 20 9.33333 18.8061 9.33333 17.3333V14.6667ZM9.33333 14.6667H14.6667M9.33333 14.6667V9.33333M14.6667 14.6667H17.3333C18.8061 14.6667 20 15.8606 20 17.3333C20 18.8061 18.8061 20 17.3333 20C15.8606 20 14.6667 18.8061 14.6667 17.3333V14.6667ZM14.6667 14.6667V9.33333M14.6667 9.33333V6.66667C14.6667 5.19391 15.8606 4 17.3333 4C18.8061 4 20 5.19391 20 6.66667C20 8.13943 18.8061 9.33333 17.3333 9.33333H14.6667ZM14.6667 9.33333H9.33333M9.33333 9.33333H6.66667C5.19391 9.33333 4 8.13943 4 6.66667C4 5.19391 5.19391 4 6.66667 4C8.13943 4 9.33333 5.19391 9.33333 6.66667V9.33333Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
