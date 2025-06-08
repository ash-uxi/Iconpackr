import React from 'react';

/**
 * PiFloorLampOnDuoSolid icon from the duo-solid style in appliances category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFloorLampOnDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'floor-lamp-on icon',
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
      <path d="M12 21V10M9 21h6" opacity=".28" /> <path fill={color || "currentColor"} d="M16.894 12.553a1 1 0 1 0-1.788.894l1 2a1 1 0 1 0 1.788-.894zM6.99 4.027A3 3 0 0 1 9.83 2h4.342a3 3 0 0 1 2.838 2.027l1.937 5.649A1 1 0 0 1 18 11H6a1 1 0 0 1-.946-1.324zM8.894 13.447a1 1 0 1 0-1.788-.894l-1 2a1 1 0 1 0 1.788.894z" />
    </svg>
  );
}
