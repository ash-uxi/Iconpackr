import React from 'react';

/**
 * PiWalletExclamationMarkContrast icon from the contrast style in web3-&-crypto category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiWalletExclamationMarkContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'wallet-exclamation-mark icon',
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
      <path fill="currentColor" d="M2 14.5c0-2.33 0-3.495.38-4.413A5 5 0 0 1 5.088 7.38C6.005 7 7.17 7 9.5 7h5c1.634 0 2.695 0 3.5.131.343.056.639.136.913.25a5 5 0 0 1 2.706 2.706c.24.576.328 1.25.361 2.248h-.601A3 3 0 0 0 17 15v4c0 .546.146 1.059.401 1.5a3 3 0 0 0-.214.456c-.69.044-1.55.044-2.687.044h-5c-2.33 0-3.495 0-4.413-.38a5 5 0 0 1-2.706-2.707C2 16.995 2 15.83 2 14.5" opacity=".28"/>
  <path d="M2 14.5V11c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 3.545C5.8 3 7.2 3 10 3h3.5c1.398 0 2.097 0 2.648.228a3 3 0 0 1 1.624 1.624c.207.5.226 1.123.228 2.28M2 14.5c0 1.33 0 2.495.38 3.413a5 5 0 0 0 2.707 2.706C6.005 21 7.17 21 9.5 21h5c.642 0 1.196 0 1.68-.008M2 14.5c0-2.33 0-3.495.38-4.413A5 5 0 0 1 5.088 7.38C6.005 7 7.17 7 9.5 7h5c1.634 0 2.695 0 3.5.131m0 0c.343.056.639.136.913.25a5 5 0 0 1 2.706 2.706c.166.4.26.845.312 1.413M20 19v-4m0 7.01V22m-6-10h3"/>
    </svg>
  );
}
