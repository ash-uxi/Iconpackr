import React from 'react';

/**
 * PiCoinbaseStroke icon from the stroke style in apps-&-social category.
 */
interface PiCoinbaseStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCoinbaseStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'coinbase icon',
  ...props
}: PiCoinbaseStrokeProps): JSX.Element {
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
      <path d="M8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C13.479 15.75 14.758 14.8938 15.3684 13.65H20.8491C20.0741 17.8325 16.407 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.407 3 20.0741 6.16747 20.8491 10.35H15.3684C14.758 9.10621 13.479 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
