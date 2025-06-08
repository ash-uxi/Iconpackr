import React from 'react';

/**
 * PiPlayBigSolid icon from the solid style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPlayBigSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'play-big icon',
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
      <path d="M15.3567 5.46931C13.7888 4.46134 12.5529 3.66683 11.5432 3.14128C10.5317 2.61479 9.59278 2.27179 8.64379 2.33958C7.19713 2.4429 5.86662 3.16929 4.99742 4.33031C4.42723 5.09193 4.20804 6.06717 4.10392 7.20277C3.99998 8.33631 3.99999 9.80556 4 11.6695V12.3309C3.99999 14.1949 3.99998 15.6641 4.10392 16.7976C4.20804 17.9332 4.42723 18.9085 4.99742 19.6701C5.86662 20.8311 7.19713 21.5575 8.64379 21.6608C9.59278 21.7286 10.5317 21.3856 11.5432 20.8591C12.5529 20.3336 13.7888 19.5391 15.3568 18.5311L15.8764 18.1971C17.2332 17.3249 18.3099 16.6327 19.1029 16.0143C19.9047 15.3889 20.535 14.7519 20.8754 13.9463C21.4011 12.7022 21.4011 11.2983 20.8754 10.0541C20.535 9.24849 19.9047 8.61147 19.1029 7.98617C18.3099 7.36772 17.2332 6.67557 15.8763 5.80333L15.3567 5.46931Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
