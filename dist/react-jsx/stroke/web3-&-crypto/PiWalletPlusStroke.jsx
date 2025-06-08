import React from 'react';

/**
 * PiWalletPlusStroke icon from the stroke style in web3-&-crypto category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiWalletPlusStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'wallet-plus icon',
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
      <path d="M19 22V19M19 19V16M19 19H16M19 19H22M2 14.5V11C2 8.19974 2 6.79961 2.54497 5.73005C3.02433 4.78924 3.78924 4.02433 4.73005 3.54497C5.79961 3 7.19974 3 10 3H13.5C14.8978 3 15.5967 3 16.1481 3.22836C16.8831 3.53284 17.4672 4.11687 17.7716 4.85195C17.979 5.35251 17.9981 5.97475 17.9998 7.1313M2 14.5C2 15.8297 2 16.9946 2.3806 17.9134C2.88807 19.1386 3.86144 20.1119 5.08658 20.6194C6.00544 21 7.17029 21 9.5 21H12.5312M2 14.5C2 12.1703 2 11.0054 2.3806 10.0866C2.88807 8.86144 3.86144 7.88807 5.08658 7.3806C6.00544 7 7.17029 7 9.5 7H14.5C16.1339 7 17.1949 7 17.9998 7.1313M14 12H17M17.9998 7.1313C18.3426 7.18721 18.639 7.26693 18.9134 7.3806C20.1386 7.88807 21.1119 8.86144 21.6194 10.0866C21.9314 10.8397 21.9876 11.7581 21.9978 13.3477" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
