import React from 'react';

/**
 * PiWalletconnectStroke icon from the stroke style in apps-&-social category.
 */
interface PiWalletconnectStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWalletconnectStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'walletconnect icon',
  ...props
}: PiWalletconnectStrokeProps): JSX.Element {
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
      <path d="M5.76864 8.84607C7.28028 7.10266 9.51137 6 12 6C14.4886 6 16.7197 7.10266 18.2314 8.84607M2 12.111L7 17.736L12 12.111L17 17.736L22 12.111" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
