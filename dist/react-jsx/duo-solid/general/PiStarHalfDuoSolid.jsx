import React from 'react';

/**
 * PiStarHalfDuoSolid icon from the duo-solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiStarHalfDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'star-half icon',
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
      <path fill={color || "currentColor"} d="M12 2c-.532 0-1.065.139-1.542.416-.512.299-.862.795-1.158 1.304-.3.517-.63 1.208-1.034 2.056l-.02.04c-.273.574-.337.689-.408.772a1.1 1.1 0 0 1-.397.289c-.102.042-.231.067-.86.15l-.045.006c-.931.123-1.691.223-2.275.349-.575.123-1.156.303-1.598.698a3.06 3.06 0 0 0-.953 2.933c.126.579.49 1.066.882 1.504.399.444.955.972 1.636 1.619l.033.03c.46.438.55.534.607.628.086.142.138.302.152.467.009.11-.007.24-.123.865l-.008.044c-.171.923-.31 1.677-.372 2.27-.06.586-.068 1.194.17 1.736a3.06 3.06 0 0 0 2.495 1.813c.59.06 1.166-.136 1.704-.374.546-.242 1.22-.607 2.045-1.055l.04-.022c.557-.303.677-.358.784-.384q.121-.028.245-.028a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1" opacity=".28" /> <path d="M2.687 10.802a2.06 2.06 0 0 1 .642-1.976m3.954 12.169a2.06 2.06 0 0 1-1.68-1.221" />
    </svg>
  );
}
