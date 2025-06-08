import React from 'react';

/**
 * PiCryptoExchangeDuoStroke icon from the duo-stroke style in web3-&-crypto category.
 */
interface PiCryptoExchangeDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCryptoExchangeDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'crypto-exchange icon',
  ...props
}: PiCryptoExchangeDuoStrokeProps): JSX.Element {
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
      <path d="M21 4.5C20.7944 3.63739 20.0694 3 19.2065 3L18 3M15 9.5C15.2056 10.3626 15.9306 11 16.7935 11H18M18 3L16.8519 3C15.8291 3 15 3.89543 15 5C15 6.10457 15.8291 7 16.8519 7L19.1481 7C20.1709 7 21 7.89543 21 9C21 10.1046 20.1709 11 19.1481 11H18M18 3V2M18 11V12M3 17H7M3 17V13H7C8.10457 13 9 13.8954 9 15C9 16.1046 8.10457 17 7 17M3 17V21H7C8.10457 21 9 20.1046 9 19C9 17.8954 8.10457 17 7 17M6 21V22M6 12V13" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M5.07031 8.00012C6.29534 5.8824 8.46326 4.37835 11 4.06201M18.9298 16.0001C17.7048 18.1178 15.5368 19.6219 13.0001 19.9382" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
