import React from 'react';

/**
 * PiTrezorWalletDuoStroke icon from the duo-stroke style in apps-&-social category.
 */
interface PiTrezorWalletDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTrezorWalletDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'trezor-wallet icon',
  ...props
}: PiTrezorWalletDuoStrokeProps): JSX.Element {
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
      <path d="M6 17.1v-6.6A1.5 1.5 0 0 1 7.5 9h9a1.5 1.5 0 0 1 1.5 1.5v6.6a1.5 1.5 0 0 1-.794 1.324l-4.5 2.402a1.5 1.5 0 0 1-1.412 0l-4.5-2.402A1.5 1.5 0 0 1 6 17.1" opacity=".28" fill="none"/>
  <path  d="M9 7a3 3 0 1 1 6 0v1h1.5q.257 0 .5.05V7A5 5 0 0 0 7 7v1.05Q7.243 8 7.5 8H9z" fill="none"/>
    </svg>
  );
}
