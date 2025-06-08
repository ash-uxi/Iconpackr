import React from 'react';

/**
 * PiCryptoVerificationDuoStroke icon from the duo-stroke style in web3-&-crypto category.
 */
interface PiCryptoVerificationDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCryptoVerificationDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'crypto-verification icon',
  ...props
}: PiCryptoVerificationDuoStrokeProps): JSX.Element {
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
      <path d="M17.7081 5.17114L15.1081 3.7267C13.9737 3.09647 13.4065 2.78135 12.8058 2.65781C12.2742 2.54847 11.7258 2.54847 11.1942 2.65781C10.5935 2.78135 10.0263 3.09647 8.89188 3.7267L6.29189 5.17114C5.09379 5.83675 4.49474 6.16956 4.05853 6.64291C3.67263 7.06166 3.38059 7.55799 3.20194 8.0987C3 8.70989 3 9.39518 3 10.7658V13.2342C3 14.6048 3 15.29 3.20194 15.9012C3.38059 16.4419 3.67263 16.9383 4.05853 17.357C4.49474 17.8304 5.09379 18.1632 6.29189 18.8288L8.89188 20.2732C10.0263 20.9035 10.5935 21.2186 11.1942 21.3421C11.7258 21.4515 12.2742 21.4515 12.8058 21.3421C13.4065 21.2186 13.9737 20.9035 15.1081 20.2732L17.7081 18.8288C18.9062 18.1632 19.5053 17.8304 19.9415 17.357C20.3274 16.9383 20.6194 16.4419 20.7981 15.9012C21 15.29 21 14.6048 21 13.2342V10.7658C21 9.39518 21 8.70989 20.7981 8.0987C20.6194 7.55799 20.3274 7.06167 19.9415 6.64291C19.5053 6.16956 18.9062 5.83675 17.7081 5.17114Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M8.5 12.6662L10.8412 15.0049C11.9893 12.9973 13.5932 11.3021 15.5 10" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
