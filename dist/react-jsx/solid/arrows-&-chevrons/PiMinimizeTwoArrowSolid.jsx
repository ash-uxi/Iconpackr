import React from 'react';

/**
 * PiMinimizeTwoArrowSolid icon from the solid style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMinimizeTwoArrowSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'minimize-two-arrow icon',
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
      <path d="M13.5607 11.9087C15.4189 12.0806 17.3027 12.0096 19.1652 11.6977C19.5475 11.6337 19.8584 11.3545 19.963 10.9811C20.0675 10.6078 19.9469 10.2077 19.6534 9.95444L17.9228 8.46073C17.0711 7.72561 16.2745 6.92897 15.5393 6.07725L14.0456 4.34665C13.7923 4.05317 13.3922 3.93254 13.0189 4.03709C12.6456 4.14164 12.3664 4.45254 12.3023 4.83489C11.9905 6.69737 11.9195 8.5812 12.0914 10.4393C12.127 10.8249 12.2953 11.1765 12.5595 11.4406C12.8236 11.7047 13.1752 11.873 13.5607 11.9087Z" fill="currentColor" stroke="none"/>
  <path d="M4.83489 12.3024C6.69737 11.9905 8.5812 11.9195 10.4393 12.0914C10.8249 12.127 11.1765 12.2953 11.4406 12.5595C11.7047 12.8236 11.873 13.1752 11.9087 13.5607C12.0806 15.4189 12.0096 17.3027 11.6977 19.1652C11.6337 19.5475 11.3545 19.8584 10.9811 19.963C10.6078 20.0675 10.2077 19.9469 9.95444 19.6534L8.46073 17.9228C7.72561 17.0711 6.92897 16.2745 6.07725 15.5393L4.34665 14.0456C4.05317 13.7923 3.93254 13.3922 4.03709 13.0189C4.14164 12.6456 4.45254 12.3664 4.83489 12.3024Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
