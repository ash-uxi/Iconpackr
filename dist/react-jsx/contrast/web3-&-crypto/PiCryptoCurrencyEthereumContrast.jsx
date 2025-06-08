import React from 'react';

/**
 * PiCryptoCurrencyEthereumContrast icon from the contrast style in web3-&-crypto category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCryptoCurrencyEthereumContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'crypto-currency-ethereum icon',
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
      <g fill="currentColor" opacity=".28">
    <path d="M10.09 3.428c.653-.793.98-1.19 1.374-1.334a1.57 1.57 0 0 1 1.072 0c.395.144.721.54 1.374 1.334l3.862 4.692c.792.963 1.189 1.444 1.224 1.903.03.4-.107.796-.381 1.097-.314.344-.93.494-2.16.793l-3.466.842c-.369.09-.553.135-.74.153a2.6 2.6 0 0 1-.498 0c-.187-.018-.371-.063-.74-.152l-3.466-.843c-1.23-.3-1.846-.449-2.16-.793a1.46 1.46 0 0 1-.38-1.097c.035-.459.43-.94 1.223-1.903zM13.842 20.725c-.635.706-.953 1.06-1.33 1.19a1.57 1.57 0 0 1-1.022 0c-.376-.13-.694-.483-1.33-1.19l-3.467-4.192c-.545-.606-.818-.91-.808-1.11.01-.173.111-.33.269-.411.182-.095.58.015 1.377.237l3.356.932c.417.116.625.174.837.197q.283.03.566 0c.212-.023.42-.081.837-.197l3.357-.932c.796-.222 1.195-.332 1.377-.237a.5.5 0 0 1 .268.41c.01.201-.262.505-.808 1.111z"/>
  </g>
  <path d="M10.09 3.428c.653-.793.98-1.19 1.374-1.334a1.57 1.57 0 0 1 1.072 0c.395.144.721.54 1.374 1.334l3.862 4.692c.792.963 1.189 1.444 1.224 1.903.03.4-.107.796-.381 1.097-.314.344-.93.494-2.16.793l-3.466.842c-.369.09-.553.135-.74.153a2.6 2.6 0 0 1-.498 0c-.187-.018-.371-.063-.74-.152l-3.466-.843c-1.23-.3-1.846-.449-2.16-.793a1.46 1.46 0 0 1-.38-1.097c.035-.459.43-.94 1.223-1.903zM13.842 20.725c-.635.706-.953 1.06-1.33 1.19a1.57 1.57 0 0 1-1.022 0c-.376-.13-.694-.483-1.33-1.19l-3.467-4.192c-.545-.606-.818-.91-.808-1.11.01-.173.111-.33.269-.411.182-.095.58.015 1.377.237l3.356.932c.417.116.625.174.837.197q.283.03.566 0c.212-.023.42-.081.837-.197l3.357-.932c.796-.222 1.195-.332 1.377-.237a.5.5 0 0 1 .268.41c.01.201-.262.505-.808 1.111z"/>
    </svg>
  );
}
