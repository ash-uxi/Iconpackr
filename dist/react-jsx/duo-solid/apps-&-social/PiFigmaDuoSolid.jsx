import React from 'react';

/**
 * PiFigmaDuoSolid icon from the duo-solid style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFigmaDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'figma icon',
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
      <path d="M12 12.5C12 10.3829 13.7162 8.66663 15.8333 8.66663C17.9504 8.66663 19.6667 10.3829 19.6667 12.5C19.6667 14.6171 17.9504 16.3333 15.8333 16.3333C13.7162 16.3333 12 14.6171 12 12.5Z" fill={color || "currentColor"} /> <path d="M8.16683 1C6.04974 1 4.3335 2.71624 4.3335 4.83333C4.3335 6.95042 6.04974 8.66667 8.16683 8.66667C6.04974 8.66667 4.3335 10.3829 4.3335 12.5C4.3335 14.6171 6.04974 16.3333 8.16683 16.3333C6.04974 16.3333 4.3335 18.0496 4.3335 20.1667C4.3335 22.2838 6.04974 24 8.16683 24C10.2839 24 12.0002 22.2838 12.0002 20.1667V8.66667H15.8335C17.9506 8.66667 19.6668 6.95042 19.6668 4.83333C19.6668 2.71624 17.9506 1 15.8335 1H8.16683Z" fill={color || "currentColor"} opacity="0.28" />
    </svg>
  );
}
