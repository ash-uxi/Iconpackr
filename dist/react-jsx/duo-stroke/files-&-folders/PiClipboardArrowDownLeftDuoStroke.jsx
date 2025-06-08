import React from 'react';

/**
 * PiClipboardArrowDownLeftDuoStroke icon from the duo-stroke style in files-&-folders category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiClipboardArrowDownLeftDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'clipboard-arrow-down-left icon',
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
      <path d="M15.9435 19C15.2423 19.5185 14.6126 20.1243 14.0698 20.8019C14.0233 20.86 14 20.93 14 21M14 21C14 21.07 14.0233 21.14 14.0698 21.1981C14.6126 21.8757 15.2423 22.4815 15.9435 23M14 21H20M16 4.03837C16 4.02576 16 4.01297 16 4C16 3.53501 16 3.30252 15.9489 3.11177C15.8102 2.59413 15.4059 2.18981 14.8882 2.05111C14.6975 2 14.465 2 14 2H10C9.53501 2 9.30252 2 9.11177 2.05111C8.59413 2.18981 8.18981 2.59413 8.05111 3.11177C8 3.30252 8 3.53501 8 4C8 4.01297 8 4.02576 8 4.03838C8.00004 4.47793 8.00143 4.7028 8.05111 4.88823C8.18981 5.40587 8.59413 5.81019 9.11177 5.94889C9.30252 6 9.53501 6 10 6H14C14.465 6 14.6975 6 14.8882 5.94889C15.4059 5.81019 15.8102 5.40587 15.9489 4.88823C15.9986 4.7028 16 4.47792 16 4.03837Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M16 4.03809C16.7844 4.08599 17.3409 4.19366 17.816 4.43569C18.5686 4.81919 19.1805 5.43111 19.564 6.18376C20 7.03941 20 8.15951 20 10.3997V15.5997C20 16.1241 20 16.5871 19.9944 16.9997M8 4.0381C7.21558 4.08599 6.65905 4.19366 6.18404 4.43569C5.43139 4.81919 4.81947 5.43111 4.43597 6.18376C4 7.03941 4 8.15951 4 10.3997V15.5997C4 17.8399 4 18.96 4.43597 19.8157C4.81947 20.5683 5.43139 21.1802 6.18404 21.5637C6.98717 21.9729 8.0233 21.9981 10 21.9996" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
