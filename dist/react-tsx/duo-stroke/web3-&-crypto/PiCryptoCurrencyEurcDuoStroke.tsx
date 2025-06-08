import React from 'react';

/**
 * PiCryptoCurrencyEurcDuoStroke icon from the duo-stroke style in web3-&-crypto category.
 */
interface PiCryptoCurrencyEurcDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCryptoCurrencyEurcDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'crypto-currency-eurc icon',
  ...props
}: PiCryptoCurrencyEurcDuoStrokeProps): JSX.Element {
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
      <path d="M14.9163 7.78418C14.2077 7.28988 13.3458 7 12.4163 7C10.1357 7 8.30083 8.77253 8.05395 11M14.9163 16.2158C14.2077 16.7101 13.3458 17 12.4163 17C10.4804 17 8.83819 15.7426 8.26176 14M8.26176 14H7M8.26176 14H11M8.26176 14C7.94793 13.0513 7.94516 11.9816 8.05395 11M7 11H8.05395M8.05395 11H12" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M8.49963 20.4565C5.1828 19.0822 2.84961 15.8134 2.84961 11.9997C2.84961 8.186 5.1828 4.91723 8.49963 3.54297M15.4996 3.54297C18.8164 4.91723 21.1496 8.186 21.1496 11.9997C21.1496 15.8134 18.8164 19.0822 15.4996 20.4565" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
