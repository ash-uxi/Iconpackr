import React from 'react';

/**
 * PiCryptoCurrencyUsdtDuoStroke icon from the duo-stroke style in web3-&-crypto category.
 */
interface PiCryptoCurrencyUsdtDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCryptoCurrencyUsdtDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'crypto-currency-usdt icon',
  ...props
}: PiCryptoCurrencyUsdtDuoStrokeProps): JSX.Element {
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
      <path  d="M13 14.986a35 35 0 0 1-2 0V19a1 1 0 1 0 2 0z" fill="none"/>
  <path d="M22 11.5c0 1.38-5.03 2.5-10 2.5S2 12.88 2 11.5 7.03 9 12 9s10 1.12 10 2.5" opacity=".28" fill="none"/>
  <path  d="M5 4a1 1 0 0 0 0 2h6v5a1 1 0 1 0 2 0V6h6a1 1 0 1 0 0-2z" fill="none"/>
    </svg>
  );
}
