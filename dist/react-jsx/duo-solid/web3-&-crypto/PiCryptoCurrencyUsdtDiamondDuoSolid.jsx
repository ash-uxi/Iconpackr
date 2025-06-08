import React from 'react';

/**
 * PiCryptoCurrencyUsdtDiamondDuoSolid icon from the duo-solid style in web3-&-crypto category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCryptoCurrencyUsdtDiamondDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'crypto-currency-usdt-diamond icon',
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
      <path fill={color || "currentColor"} d="M7.408 3A3.55 3.55 0 0 0 4.45 4.582L1.597 8.864a3.554 3.554 0 0 0 .43 4.47l7.446 7.529a3.554 3.554 0 0 0 5.054 0l7.446-7.53a3.554 3.554 0 0 0 .43-4.47l-2.854-4.28A3.55 3.55 0 0 0 16.592 3z" opacity=".28" /> <path d="M8.425 8H12m0 0h3.575M12 8v3m0 3c2.761 0 5-.672 5-1.5S14.761 11 12 11m0 3c-2.761 0-5-.672-5-1.5S9.239 11 12 11m0 3v3m0-6v.5" />
    </svg>
  );
}
