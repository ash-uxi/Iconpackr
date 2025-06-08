import React from 'react';

/**
 * PiPriorityCriticalContrast icon from the contrast style in development category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPriorityCriticalContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'priority-critical icon',
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
      <g fill="currentColor" opacity=".28">
    <path d="M11.307 4.16C9.255 5.234 7.39 6.456 5.75 7.805 5.262 8.207 5 8.777 5 9.369V20c1.815-1.603 3.935-3.044 6.307-4.285.203-.106.448-.16.693-.16s.49.054.693.16C15.065 16.956 17.185 18.397 19 20V9.369c0-.592-.262-1.162-.75-1.564-1.641-1.349-3.505-2.571-5.557-3.645A1.5 1.5 0 0 0 12 4c-.245 0-.49.053-.693.16"/>
    <path d="M11.307 4.16C9.255 5.234 7.39 6.456 5.75 7.805 5.262 8.207 5 8.777 5 9.369V20c1.815-1.603 3.935-3.044 6.307-4.285.203-.106.448-.16.693-.16s.49.054.693.16C15.065 16.956 17.185 18.397 19 20V9.369c0-.592-.262-1.162-.75-1.564-1.641-1.349-3.505-2.571-5.557-3.645A1.5 1.5 0 0 0 12 4c-.245 0-.49.053-.693.16"/>
  </g>
  <path d="M11.307 4.16C9.255 5.234 7.39 6.456 5.75 7.805 5.262 8.207 5 8.777 5 9.369V20c1.815-1.603 3.935-3.044 6.307-4.285.203-.106.448-.16.693-.16s.49.054.693.16C15.065 16.956 17.185 18.397 19 20V9.369c0-.592-.262-1.162-.75-1.564-1.641-1.349-3.505-2.571-5.557-3.645A1.5 1.5 0 0 0 12 4c-.245 0-.49.053-.693.16"/>
    </svg>
  );
}
