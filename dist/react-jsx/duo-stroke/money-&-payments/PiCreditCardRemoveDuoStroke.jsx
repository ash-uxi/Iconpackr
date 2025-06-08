import React from 'react';

/**
 * PiCreditCardRemoveDuoStroke icon from the duo-stroke style in money-&-payments category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCreditCardRemoveDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'credit-card-remove icon',
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
      <path d="M21.9947 9H2.00586M9.00027 13H6.00027M16.0005 19H22.0005" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M22 9H21.9944M21.9944 9C22 9.41261 22 9.87562 22 10.4V15M21.9944 9C21.9761 7.6499 21.8979 6.8394 21.564 6.18404C21.1805 5.43139 20.5686 4.81947 19.816 4.43597C18.9603 4 17.8402 4 15.6 4H8.4C6.15979 4 5.03968 4 4.18404 4.43597C3.43139 4.81947 2.81947 5.43139 2.43597 6.18404C2.10205 6.8394 2.02389 7.6499 2.00559 9M2.00559 9H2M2.00559 9C2 9.41261 2 9.87562 2 10.4V13.6C2 15.8402 2 16.9603 2.43597 17.816C2.81947 18.5686 3.43139 19.1805 4.18404 19.564C5.03968 20 6.15979 20 8.4 20H12.168" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
