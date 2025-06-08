import React from 'react';

/**
 * PiTargetCenterDuoStroke icon from the duo-stroke style in navigation category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTargetCenterDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'target-center icon',
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
      <path d="M12.0001 21.1501V2.8501M2.8501 12.0001H21.1501" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 14.724 9.29 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M2.8501 12.0001C2.8501 10.1904 3.38674 8.42134 4.39215 6.91663C5.39757 5.41192 6.8266 4.23915 8.49854 3.5466C10.1705 2.85406 12.0102 2.67286 13.7852 3.02592C15.5601 3.37897 17.1905 4.25042 18.4701 5.53007C19.7498 6.80973 20.6212 8.4401 20.9743 10.215C21.3273 11.99 21.1461 13.8297 20.4536 15.5017C19.7611 17.1736 18.5883 18.6026 17.0836 19.608C15.5789 20.6135 13.8098 21.1501 12.0001 21.1501C7.0421 21.1501 2.8501 16.9841 2.8501 12.0001Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
