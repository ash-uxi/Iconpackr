import React from 'react';

/**
 * PiArrowRightUpContrast icon from the contrast style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowRightUpContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-right-up icon',
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
      <path d="m14.227 9.774 4.03 4.455c.387-2.588.438-5.208.152-7.797a.95.95 0 0 0-.84-.84 30.2 30.2 0 0 0-7.797.151zm0 0L5.409 18.59"/>
  <path fill="currentColor" d="M18.409 6.432c.286 2.589.235 5.21-.152 7.797l-4.03-4.455-4.456-4.03a30.2 30.2 0 0 1 7.797-.153.95.95 0 0 1 .84.84" opacity=".28"/>
    </svg>
  );
}
