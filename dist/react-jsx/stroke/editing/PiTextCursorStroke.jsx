import React from 'react';

/**
 * PiTextCursorStroke icon from the stroke style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTextCursorStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'text-cursor icon',
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
      <path d="M8 22C8.92997 22 9.39496 22 9.77645 21.8978C10.8117 21.6204 11.6204 20.8117 11.8978 19.7765C12 19.395 12 18.93 12 18M12 18C12 18.93 12 19.395 12.1022 19.7765C12.3796 20.8117 13.1883 21.6204 14.2235 21.8978C14.605 22 15.07 22 16 22M12 18L12 12M8 2C8.92997 2 9.39496 2 9.77645 2.10222C10.8117 2.37962 11.6204 3.18827 11.8978 4.22354C12 4.60504 12 5.07003 12 6M12 6C12 5.07003 12 4.60504 12.1022 4.22354C12.3796 3.18827 13.1883 2.37962 14.2235 2.10222C14.605 2 15.07 2 16 2M12 6L12 12M12 12H14.0085M12 12H10" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
