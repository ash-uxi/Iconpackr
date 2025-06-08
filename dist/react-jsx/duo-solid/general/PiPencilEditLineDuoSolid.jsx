import React from 'react';

/**
 * PiPencilEditLineDuoSolid icon from the duo-solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPencilEditLineDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'pencil-edit-line icon',
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
      <path d="M13 21h8" opacity=".28" /> <path fill={color || "currentColor"} d="M19.37 2.411a2.57 2.57 0 0 0-3.216.346L3.052 15.917c-.216.217-.428.428-.586.684a2.6 2.6 0 0 0-.309.722c-.075.291-.082.59-.089.898L2 20.97a1 1 0 0 0 .998 1.024l2.8.005c.316.001.627.002.93-.07.265-.064.518-.17.75-.312.265-.163.484-.384.707-.609L21.21 7.927c.83-.832 1.068-2.161.399-3.239a7.3 7.3 0 0 0-2.24-2.277" />
    </svg>
  );
}
