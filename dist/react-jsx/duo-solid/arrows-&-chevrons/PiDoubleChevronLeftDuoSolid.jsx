import React from 'react';

/**
 * PiDoubleChevronLeftDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDoubleChevronLeftDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'double-chevron-left icon',
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
      <path d="M11.9972 15.9252C12.0263 16.3137 11.8272 16.6837 11.487 16.8734C11.1468 17.0631 10.7274 17.038 10.4122 16.809C8.87943 15.6954 7.5056 14.3894 6.32681 12.9249C5.89106 12.3836 5.89106 11.6164 6.32681 11.0751C7.5056 9.61063 8.87943 8.30456 10.4122 7.19097C10.7274 6.96201 11.1468 6.9369 11.487 7.12662C11.8272 7.31633 12.0263 7.68634 11.9972 8.07479L11.8318 10.2798C11.7459 11.425 11.7459 12.575 11.8318 13.7202L11.9972 15.9252Z" fill={color || "currentColor"} /> <path d="M17.9972 15.9252C18.0263 16.3137 17.8272 16.6837 17.487 16.8734C17.1468 17.0631 16.7274 17.038 16.4122 16.809C14.8794 15.6954 13.5056 14.3894 12.3268 12.9249C11.8911 12.3836 11.8911 11.6164 12.3268 11.0751C13.5056 9.61063 14.8794 8.30456 16.4122 7.19097C16.7274 6.96201 17.1468 6.9369 17.487 7.12662C17.8272 7.31633 18.0263 7.68634 17.9972 8.07479L17.8318 10.2798C17.7459 11.425 17.7459 12.575 17.8318 13.7202L17.9972 15.9252Z" fill={color || "currentColor"} opacity="0.28" />
    </svg>
  );
}
