import React from 'react';

/**
 * PiMapPinSolid icon from the solid style in navigation category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMapPinSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'map-pin icon',
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
      <path d="M12.0004 2C10.3383 2 8.16095 2.57617 6.37994 4.02229C4.56152 5.49878 3.21094 7.84065 3.21094 11.2222C3.21094 14.6327 4.82556 17.4361 6.64946 19.3614C7.5639 20.3266 8.55029 21.0928 9.4559 21.6239C10.3216 22.1315 11.2416 22.5 12.0004 22.5C12.7592 22.5 13.6792 22.1315 14.5449 21.6239C15.4505 21.0928 16.4369 20.3266 17.3514 19.3614C19.1753 17.4361 20.7899 14.6327 20.7899 11.2222C20.7899 7.84065 19.4393 5.49878 17.6209 4.02229C15.8399 2.57617 13.6625 2 12.0004 2ZM8.57959 10.7895C8.57959 8.90007 10.1112 7.36841 12.0006 7.36841C13.89 7.36841 15.4217 8.90007 15.4217 10.7895C15.4217 12.6789 13.89 14.2105 12.0006 14.2105C10.1112 14.2105 8.57959 12.6789 8.57959 10.7895Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
