import React from 'react';

/**
 * PiPencilEditDuoSolid icon from the duo-solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPencilEditDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'pencil-edit icon',
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
      <path fill={color || "currentColor"} d="M19.37 2.411a2.57 2.57 0 0 0-3.216.346L3.052 15.917c-.216.217-.428.428-.586.684a2.6 2.6 0 0 0-.309.722c-.075.291-.082.59-.089.898L2 20.97a1 1 0 0 0 .998 1.024l2.8.005c.316.001.627.002.93-.07.265-.064.518-.17.75-.312.265-.163.484-.384.707-.609L21.216 7.921l.072-.073a2.6 2.6 0 0 0 .321-3.16 7.35 7.35 0 0 0-2.24-2.277" opacity=".28" /> <path d="M5.727 21 3 20.996l.066-2.68M20.501 7.221l.061-.062c.5-.527.58-1.327.197-1.944a6.35 6.35 0 0 0-1.932-1.965 1.57 1.57 0 0 0-1.965.212" />
    </svg>
  );
}
