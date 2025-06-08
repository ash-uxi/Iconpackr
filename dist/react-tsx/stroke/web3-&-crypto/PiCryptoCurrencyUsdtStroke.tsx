import React from 'react';

/**
 * PiCryptoCurrencyUsdtStroke icon from the stroke style in web3-&-crypto category.
 */
interface PiCryptoCurrencyUsdtStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCryptoCurrencyUsdtStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'crypto-currency-usdt icon',
  ...props
}: PiCryptoCurrencyUsdtStrokeProps): JSX.Element {
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
      <path d="M5 5H12M12 5H19M12 5V11M12 14V19M12 14C16.9706 14 22 12.8807 22 11.5C22 10.1193 16.9706 9 12 9C7.02944 9 2 10.1193 2 11.5C2 12.8807 7.02944 14 12 14Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
