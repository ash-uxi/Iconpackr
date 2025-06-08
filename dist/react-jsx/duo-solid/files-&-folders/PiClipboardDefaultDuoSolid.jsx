import React from 'react';

/**
 * PiClipboardDefaultDuoSolid icon from the duo-solid style in files-&-folders category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiClipboardDefaultDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'clipboard-default icon',
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
      <path fill={color || "currentColor"} fillRule="evenodd" d="M10 1h-.093c-.369 0-.731-.001-1.054.085a2.5 2.5 0 0 0-1.768 1.768 2 2 0 0 0-.054.284 4.4 4.4 0 0 0-1.3.408A5 5 0 0 0 3.544 5.73c-.302.593-.428 1.233-.487 1.962C3 8.399 3 9.274 3 10.357v5.286c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.961a5 5 0 0 0 2.185 2.185c.592.302 1.233.428 1.961.487C8.4 23 9.273 23 10.357 23h3.286c1.084 0 1.958 0 2.666-.058.729-.06 1.369-.185 1.961-.487a5 5 0 0 0 2.185-2.185c.302-.592.428-1.232.487-1.961C21 17.6 21 16.727 21 15.643v-5.286c0-1.083 0-1.958-.058-2.665-.06-.73-.185-1.37-.487-1.962a5 5 0 0 0-2.185-2.185 4.4 4.4 0 0 0-1.3-.408 2 2 0 0 0-.055-.284 2.5 2.5 0 0 0-1.768-1.768C14.824 1 14.462 1 14.093 1H10m-.63 2.017c-.003.001.022-.007.129-.011C9.61 3 9.759 3 10 3h4c.242 0 .39 0 .501.006.107.004.132.012.128.011a.5.5 0 0 1 .354.354c-.001-.004.007.021.012.128C15 3.61 15 3.759 15 4v.038c0 .228 0 .367-.006.472-.005.1-.012.123-.011.12a.5.5 0 0 1-.354.353c.004 0-.021.007-.128.012C14.39 5 14.241 5 14 5h-4c-.242 0-.39 0-.501-.005-.107-.005-.132-.013-.128-.012a.5.5 0 0 1-.354-.353c.001.003-.006-.02-.011-.12A11 11 0 0 1 9 4.039V4c0-.241 0-.39.005-.501.005-.1.012-.129.012-.129a.5.5 0 0 1 .354-.353" clipRule="evenodd" opacity=".28" /> <path d="M8 4c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C9.304 2 9.536 2 10 2h4c.465 0 .697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C16 3.304 16 3.536 16 4v.038c0 .44-.001.665-.051.85a1.5 1.5 0 0 1-1.06 1.06C14.697 6 14.464 6 14 6h-4c-.465 0-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C8.001 4.702 8 4.477 8 4.038z" />
    </svg>
  );
}
