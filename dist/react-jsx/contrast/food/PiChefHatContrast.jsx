import React from 'react';

/**
 * PiChefHatContrast icon from the contrast style in food category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiChefHatContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'chef-hat icon',
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
      <path d="M10 17h4m-4 0v-3m0 3H7m7 0v-5m0 5h3m0 0v1.6c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.656c-.32.163-.74.163-1.581.163H9.4c-.84 0-1.26 0-1.581-.163a1.5 1.5 0 0 1-.656-.656C7 19.861 7 19.441 7 18.6V17m10 0v-2.027a4.5 4.5 0 1 0-1.116-8.931 4.002 4.002 0 0 0-7.768 0A4.5 4.5 0 1 0 7 14.972V17"/>
  <path fill="currentColor" d="M15.885 6.042a4.002 4.002 0 0 0-7.77 0A4.5 4.5 0 1 0 7 14.972V21h10.001v-6.027a4.5 4.5 0 1 0-1.116-8.931" opacity=".28"/>
    </svg>
  );
}
