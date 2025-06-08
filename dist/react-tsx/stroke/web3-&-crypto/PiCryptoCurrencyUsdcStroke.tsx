import React from 'react';

/**
 * PiCryptoCurrencyUsdcStroke icon from the stroke style in web3-&-crypto category.
 */
interface PiCryptoCurrencyUsdcStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCryptoCurrencyUsdcStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'crypto-currency-usdc icon',
  ...props
}: PiCryptoCurrencyUsdcStrokeProps): JSX.Element {
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
      <path d="M8.49963 20.4567C5.1828 19.0824 2.84961 15.8137 2.84961 12C2.84961 8.18624 5.1828 4.91748 8.49963 3.54321M15.4996 3.54321C18.8164 4.91748 21.1496 8.18624 21.1496 12C21.1496 15.8137 18.8164 19.0824 15.4996 20.4567M11.9996 5.99995V7.19995M11.9996 7.19995V12M11.9996 7.19995H10.8885C9.66116 7.19995 8.66624 8.27447 8.66624 9.59995C8.66624 10.9254 9.66116 12 10.8885 12H11.9996M11.9996 7.19995H13.1807C14.2162 7.19995 15.0862 7.96481 15.3329 8.99995M11.9996 12V16.7999M11.9996 12L13.1107 12C14.338 12 15.3329 13.0745 15.3329 14.4C15.3329 15.7254 14.338 16.7999 13.1107 16.7999H11.9996M11.9996 16.7999V18M11.9996 16.7999H10.8185C9.78298 16.7999 8.91293 16.0351 8.66624 15" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
