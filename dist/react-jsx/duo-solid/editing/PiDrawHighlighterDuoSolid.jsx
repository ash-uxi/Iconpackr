import React from 'react';

/**
 * PiDrawHighlighterDuoSolid icon from the duo-solid style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDrawHighlighterDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'draw-highlighter icon',
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
      <path d="M12.0001 1.8501C6.3941 1.8501 1.8501 6.3941 1.8501 12.0001C1.8501 17.6051 6.3941 22.1501 12.0001 22.1501C17.6061 22.1501 22.1501 17.6051 22.1501 12.0001C22.1501 6.3941 17.6061 1.8501 12.0001 1.8501Z" fill={color || "currentColor"} opacity="0.28" fillRule="evenodd" clipRule="evenodd" /> <path d="M13.707 7.29301C13.5435 7.12948 13.3284 7.02766 13.0983 7.00487C12.8683 6.98208 12.6374 7.03973 12.445 7.16801L9.445 9.16801C9.30808 9.25935 9.19583 9.38309 9.11821 9.52822C9.04058 9.67336 8.99998 9.83541 9 10V12.17C8.41493 12.377 7.90842 12.7603 7.55024 13.2672C7.19206 13.774 6.99982 14.3794 7 15V17.935C7 18.2002 7.10536 18.4546 7.29289 18.6421C7.48043 18.8296 7.73478 18.935 8 18.935C8.26522 18.935 8.51957 18.8296 8.70711 18.6421C8.89464 18.4546 9 18.2002 9 17.935V15C9 14.7348 9.10536 14.4804 9.29289 14.2929C9.48043 14.1054 9.73478 14 10 14H14C14.2652 14 14.5196 14.1054 14.7071 14.2929C14.8946 14.4804 15 14.7348 15 15V17.935C15 18.2002 15.1054 18.4546 15.2929 18.6421C15.4804 18.8296 15.7348 18.935 16 18.935C16.2652 18.935 16.5196 18.8296 16.7071 18.6421C16.8946 18.4546 17 18.2002 17 17.935V15C17.0002 14.3794 16.8079 13.774 16.4498 13.2672C16.0916 12.7603 15.5851 12.377 15 12.17V9.00001C14.9999 8.73481 14.8945 8.4805 14.707 8.29301L13.707 7.29301Z" fill={color || "currentColor"} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}
