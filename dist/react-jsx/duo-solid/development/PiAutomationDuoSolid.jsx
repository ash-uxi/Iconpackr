import React from 'react';

/**
 * PiAutomationDuoSolid icon from the duo-solid style in development category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAutomationDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'automation icon',
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
      <path d="M11.004 18H9A6 6 0 0 1 9 6h5.85m-3.846 12a.6.6 0 0 0-.131-.37A12.5 12.5 0 0 0 8.66 15.5m2.343 2.5c0 .13-.044.262-.131.37A12.5 12.5 0 0 1 8.66 20.5" opacity=".28" /> <path fill={color || "currentColor"} d="M17.968 14c-.439 0-.817 0-1.13.021-.33.023-.66.072-.986.207a3 3 0 0 0-1.623 1.624 3 3 0 0 0-.207.986c-.022.313-.022.691-.022 1.13v.064c0 .439 0 .817.021 1.13.023.33.072.66.207.986a3 3 0 0 0 1.624 1.624c.326.135.656.184.986.207.313.021.691.021 1.13.021h.064c.439 0 .817 0 1.13-.021.33-.023.66-.072.986-.207a3 3 0 0 0 1.624-1.624c.135-.326.184-.656.207-.985.021-.314.021-.692.021-1.13v-.065c0-.439 0-.817-.021-1.13a3 3 0 0 0-.207-.986 3 3 0 0 0-1.624-1.623 3 3 0 0 0-.985-.208c-.314-.02-.692-.02-1.13-.02zM18 1.85a4.15 4.15 0 1 0 0 8.3 4.15 4.15 0 0 0 0-8.3" />
    </svg>
  );
}
