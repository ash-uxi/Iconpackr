import React from 'react';

/**
 * PiGlobeDuoStroke icon from the duo-stroke style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGlobeDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'globe icon',
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
      <path d="M12.0001 21.1501C17.0535 21.1501 21.1501 17.0535 21.1501 12.0001C21.1501 6.94669 17.0535 2.8501 12.0001 2.8501C6.94669 2.8501 2.8501 6.94669 2.8501 12.0001C2.8501 17.0535 6.94669 21.1501 12.0001 21.1501Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M2.8501 12.0001H21.1501M12.0001 2.8501C14.2888 5.35569 15.5894 8.60731 15.6601 12.0001C15.5894 15.3929 14.2888 18.6445 12.0001 21.1501C9.71143 18.6445 8.41078 15.3929 8.3401 12.0001C8.41078 8.60731 9.71143 5.35569 12.0001 2.8501Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
