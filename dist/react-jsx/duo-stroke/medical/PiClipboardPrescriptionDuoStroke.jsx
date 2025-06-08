import React from 'react';

/**
 * PiClipboardPrescriptionDuoStroke icon from the duo-stroke style in medical category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiClipboardPrescriptionDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'clipboard-prescription icon',
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
      <path d="M16 4.03833C16.7844 4.08623 17.3409 4.1939 17.816 4.43593C18.5686 4.81942 19.1805 5.43134 19.564 6.18399C20 7.03964 20 8.15975 20 10.4V15.6C20 17.8402 20 18.9603 19.564 19.8159C19.1805 20.5686 18.5686 21.1805 17.816 21.564C16.9603 22 15.8402 22 13.6 22H10.4C8.15979 22 7.03968 22 6.18404 21.564C5.43139 21.1805 4.81947 20.5686 4.43597 19.8159C4 18.9603 4 17.8402 4 15.6V10.4C4 8.15975 4 7.03964 4.43597 6.18399C4.81947 5.43134 5.43139 4.81942 6.18404 4.43593C6.65905 4.1939 7.21558 4.08623 8 4.03833" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M8 13V10H11C11.8284 10 12.5 10.6716 12.5 11.5C12.5 12.3284 11.8284 13 11 13H10M8 13V16M8 13H10M12 19L14 17M14 17L16 15M14 17L16 19M14 17L10 13M10 6H14C14.465 6 14.6975 6 14.8882 5.94889C15.4059 5.81019 15.8102 5.40587 15.9489 4.88823C15.9986 4.7028 16 4.47792 16 4.03837C16 4.02576 16 4.01297 16 4C16 3.53501 16 3.30252 15.9489 3.11177C15.8102 2.59413 15.4059 2.18981 14.8882 2.05111C14.6975 2 14.465 2 14 2H10C9.53501 2 9.30252 2 9.11177 2.05111C8.59413 2.18981 8.18981 2.59413 8.05111 3.11177C8 3.30252 8 3.53501 8 4C8 4.01297 8 4.02576 8 4.03838C8.00004 4.47793 8.00143 4.7028 8.05111 4.88823C8.18981 5.40587 8.59413 5.81019 9.11177 5.94889C9.30252 6 9.53501 6 10 6Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
