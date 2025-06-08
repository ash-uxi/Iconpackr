import React from 'react';

/**
 * PiWalletconnectDuoStroke icon from the duo-stroke style in apps-&-social category.
 */
interface PiWalletconnectDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWalletconnectDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'walletconnect icon',
  ...props
}: PiWalletconnectDuoStrokeProps): JSX.Element {
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
      <path d="M2 12.1113L7 17.7363L12 12.1113L17 17.7363L22 12.1113" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M5.76855 8.84607C7.28019 7.10266 9.51128 6 11.9999 6C14.4885 6 16.7196 7.10266 18.2313 8.84607" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
