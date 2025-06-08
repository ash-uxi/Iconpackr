import React from 'react';

/**
 * PiFile02BoltDuoStroke icon from the duo-stroke style in files-&-folders category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFile02BoltDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'file-02-bolt icon',
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
      <path d="M12.0001 10.5L10.1981 12.9026C9.824 13.4014 9.63696 13.6508 9.65006 13.8368C9.66142 13.9981 9.75008 14.1439 9.88804 14.2282C10.0471 14.3255 10.3546 14.2742 10.9696 14.1717L13.0305 13.8283C13.6455 13.7258 13.953 13.6745 14.1121 13.7718C14.25 13.8561 14.3387 14.0019 14.35 14.1632C14.3631 14.3492 14.1761 14.5986 13.802 15.0974L12.0001 17.5M20 10C20 5.58172 16.4183 2 12 2H11C12.6569 2 14 3.34315 14 5V5.6C14 5.9716 14 6.1574 14.0246 6.31287C14.1602 7.16865 14.8313 7.83983 15.6871 7.97538C15.8426 8 16.0284 8 16.4 8L17 8C18.6569 8 20 9.34315 20 11V10Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M16 22H8C5.79086 22 4 20.2091 4 18V6C4 3.79086 5.79086 2 8 2H12C16.4183 2 20 5.58172 20 10V18C20 20.2091 18.2091 22 16 22Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
