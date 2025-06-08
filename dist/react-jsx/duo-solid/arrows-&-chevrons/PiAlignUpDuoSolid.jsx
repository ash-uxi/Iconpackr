import React from 'react';

/**
 * PiAlignUpDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAlignUpDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'align-up icon',
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
      <path fill={color || "currentColor"} d="M13 20a1 1 0 1 1-2 0v-7.124q-1.503.03-3.003.152a1 1 0 0 1-.886-1.59 21.8 21.8 0 0 1 3.853-4.069 1.64 1.64 0 0 1 2.072 0 21.8 21.8 0 0 1 3.852 4.069 1 1 0 0 1-.886 1.59q-1.499-.122-3.002-.152z" /> <path d="M5 4h14" opacity=".28" />
    </svg>
  );
}
