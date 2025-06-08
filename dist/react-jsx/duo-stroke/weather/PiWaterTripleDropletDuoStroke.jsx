import React from 'react';

/**
 * PiWaterTripleDropletDuoStroke icon from the duo-stroke style in weather category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiWaterTripleDropletDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'water-triple-droplet icon',
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
      <path d="M12 2.05615C18.262 7.75915 14.752 11.3892 12 11.3892C9.24803 11.3892 5.73803 7.75915 12 2.05615Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M6.00003 12.2661C12.262 17.9691 8.75203 21.5991 6.00003 21.5991C3.24803 21.5991 -0.261971 17.9691 6.00003 12.2661ZM18 12.2661C24.262 17.9691 20.752 21.5991 18 21.5991C15.248 21.5991 11.738 17.9691 18 12.2661Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
