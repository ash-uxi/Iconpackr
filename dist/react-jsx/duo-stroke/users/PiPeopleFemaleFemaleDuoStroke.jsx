import React from 'react';

/**
 * PiPeopleFemaleFemaleDuoStroke icon from the duo-stroke style in users category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPeopleFemaleFemaleDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'people-female-female icon',
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
      <g opacity="0.28"  fill="none"><path d="M8 5C8 6.10457 7.10457 7 6 7C4.89543 7 4 6.10457 4 5C4 3.89543 4.89543 3 6 3C7.10457 3 8 3.89543 8 5Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/><path d="M20 5C20 6.10457 19.1046 7 18 7C16.8954 7 16 6.10457 16 5C16 3.89543 16.8954 3 18 3C19.1046 3 20 3.89543 20 5Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/></g>
  <path d="M15.1813 12.3648C15.4249 10.9966 16.6145 10 18.0043 10C19.3953 10 20.5857 10.9985 20.8278 12.3683L21.7925 17.8259C21.9007 18.4384 21.4297 19 20.8078 19H20.7701C20.3162 19 19.9192 19.3057 19.8033 19.7446L19.5151 20.8358C19.3338 21.5219 18.7131 21.9999 18.0033 21.9998C17.2959 21.9997 16.6767 21.5246 16.4935 20.8412L16.1986 19.7411C16.0815 19.3039 15.6853 19 15.2328 19L15.1937 19C14.5713 18.9999 14.1001 18.4374 14.2092 17.8247L15.1813 12.3648Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M3.1813 12.3648C3.42489 10.9966 4.61455 10 6.00426 10C7.39532 10 8.58573 10.9985 8.82784 12.3683L9.79249 17.8259C9.90073 18.4384 9.42966 19 8.80775 19H8.77014C8.31622 19 7.91924 19.3057 7.80331 19.7446L7.51506 20.8358C7.3338 21.5219 6.71306 21.9999 6.00335 21.9998C5.29591 21.9997 4.6767 21.5246 4.49354 20.8412L4.19864 19.7411C4.08147 19.3039 3.68534 19 3.23279 19L3.19369 19C2.5713 18.9999 2.10014 18.4374 2.20923 17.8247L3.1813 12.3648Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
