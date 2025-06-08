import React from 'react';

/**
 * PiCryptoCurrencyUsdtDiamondStroke icon from the stroke style in web3-&-crypto category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCryptoCurrencyUsdtDiamondStroke({ 
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
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M8.42472 8H12M12 8H15.5753M12 8V11M12 14C14.7614 14 17 13.3284 17 12.5C17 11.6716 14.7614 11 12 11M12 14C9.23858 14 7 13.3284 7 12.5C7 11.6716 9.23858 11 12 11M12 14V17M12 11V11.5M7.40794 4H16.5921C17.4459 4 18.2433 4.42674 18.7169 5.13719L21.5711 9.41838C22.2434 10.4269 22.1142 11.769 21.2619 12.6307L13.8157 20.1597C12.8162 21.1703 11.1838 21.1703 10.1843 20.1597L2.73807 12.6307C1.88578 11.769 1.75663 10.4269 2.42895 9.41838L5.28307 5.13719C5.75671 4.42674 6.55408 4 7.40794 4Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
