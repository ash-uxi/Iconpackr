import React from 'react';

/**
 * PiCryptoCurrencyPolygonDuoStroke icon from the duo-stroke style in web3-&-crypto category.
 */
interface PiCryptoCurrencyPolygonDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCryptoCurrencyPolygonDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'crypto-currency-polygon icon',
  ...props
}: PiCryptoCurrencyPolygonDuoStrokeProps): JSX.Element {
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
      <path d="M12 7.48718V6.66667L7.5 4L3 6.66667V12L7.5 14.6667L16.5 9.33333L21 12V17.3333L16.5 20L12 17.3333V16.4615" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M3 12V6.66667L7.5 4L12 6.66667V7.48718M21 12V17.3333L16.5 20L12 17.3333V16.4615" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
