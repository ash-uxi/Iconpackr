import React from 'react';

/**
 * PiCloudWindDuoStroke icon from the duo-stroke style in weather category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCloudWindDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'cloud-wind icon',
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
      <path d="M15.5826 18H16.5005C19.5381 18 22.0005 15.5376 22.0005 12.5C22.0005 10.2323 20.6281 8.28516 18.6686 7.44382C17.8082 4.86169 15.3718 3 12.5005 3C9.07023 3 6.26056 5.65723 6.01759 9.02561M6.01759 9.02561C5.13412 9.11988 4.32707 9.46982 3.67188 10M6.01759 9.02561C5.99437 9.34747 5.99503 9.67849 6.01949 10" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M2 14H13C14.1045 14 15 13.1046 15 12C15 10.8954 14.1045 10 13 10C12.6357 10 12.2942 10.0974 12 10.2676M2 18H10C11.1046 18 12 18.8954 12 20C12 21.1046 11.1046 22 10 22C9.63571 22 9.29417 21.9026 9 21.7324" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
