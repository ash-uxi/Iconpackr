import React from 'react';

/**
 * PiCryptoVerificationStroke icon from the stroke style in web3-&-crypto category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCryptoVerificationStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'crypto-verification icon',
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
      <path d="M8.5 12.6662L10.8412 15.0049C11.9893 12.9973 13.5932 11.3021 15.5 10M15.1081 3.7267L17.7081 5.17114C18.9062 5.83675 19.5053 6.16956 19.9415 6.64291C20.3274 7.06167 20.6194 7.55799 20.7981 8.0987C21 8.70989 21 9.39518 21 10.7658V13.2342C21 14.6048 21 15.29 20.7981 15.9012C20.6194 16.4419 20.3274 16.9383 19.9415 17.357C19.5053 17.8304 18.9062 18.1632 17.7081 18.8288L15.1081 20.2732C13.9737 20.9035 13.4065 21.2186 12.8058 21.3421C12.2742 21.4515 11.7258 21.4515 11.1942 21.3421C10.5935 21.2186 10.0263 20.9035 8.89188 20.2732L6.29189 18.8288C5.09379 18.1632 4.49474 17.8304 4.05853 17.357C3.67263 16.9383 3.38059 16.4419 3.20194 15.9012C3 15.29 3 14.6048 3 13.2342V10.7658C3 9.39518 3 8.70989 3.20194 8.0987C3.38059 7.55799 3.67263 7.06166 4.05853 6.64291C4.49474 6.16956 5.09379 5.83675 6.29189 5.17114L8.89188 3.7267C10.0263 3.09647 10.5935 2.78135 11.1942 2.65781C11.7258 2.54847 12.2742 2.54847 12.8058 2.65781C13.4065 2.78135 13.9737 3.09647 15.1081 3.7267Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
