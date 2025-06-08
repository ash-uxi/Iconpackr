import React from 'react';

/**
 * PiTvContrast icon from the contrast style in appliances category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTvContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'tv icon',
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
      <path fill="currentColor" d="M2 6.4c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.656C3.139 4 3.559 4 4.4 4h15.2c.84 0 1.26 0 1.581.163a1.5 1.5 0 0 1 .656.656c.163.32.163.74.163 1.581v9.2c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.656c-.32.163-.74.163-1.581.163H4.4c-.84 0-1.26 0-1.581-.163a1.5 1.5 0 0 1-.656-.656C2 16.861 2 16.441 2 15.6z" opacity=".28"/>
  <path d="m20 21-2-3M4 21l2-3m-1.6 0h15.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581V6.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C20.861 4 20.441 4 19.6 4H4.4c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656C2 5.139 2 5.559 2 6.4v9.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.656c.32.163.74.163 1.581.163"/>
    </svg>
  );
}
