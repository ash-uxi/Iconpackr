import React from 'react';

/**
 * PiTrezorWalletSolid icon from the solid style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTrezorWalletSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'trezor-wallet icon',
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
      <path d="M17 7V8.05001C18.1411 8.28164 19 9.29052 19 10.5V17.1004C19 18.0233 18.4915 18.8712 17.6774 19.3058L13.1774 21.7082C12.4416 22.101 11.5584 22.101 10.8226 21.7082L6.32261 19.3058C5.50846 18.8712 5 18.0233 5 17.1004V10.5C5 9.29052 5.85888 8.28164 7 8.05001V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7ZM9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7V8H9V7Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
