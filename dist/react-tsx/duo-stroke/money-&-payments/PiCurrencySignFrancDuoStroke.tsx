import React from 'react';

/**
 * PiCurrencySignFrancDuoStroke icon from the duo-stroke style in money-&-payments category.
 */
interface PiCurrencySignFrancDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCurrencySignFrancDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'currency-sign-franc icon',
  ...props
}: PiCurrencySignFrancDuoStrokeProps): JSX.Element {
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
      <path d="M15.5 12H5M5 16H12" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M16.5 4H10.8571C10.0592 4 9.66019 4 9.33944 4.11223C8.76495 4.31326 8.31326 4.76495 8.11223 5.33944C8 5.66019 8 6.05917 8 6.85714V21" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
