import React from 'react';

/**
 * PiCurrencySignRupeesDuoStroke icon from the duo-stroke style in money-&-payments category.
 */
interface PiCurrencySignRupeesDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCurrencySignRupeesDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'currency-sign-rupees icon',
  ...props
}: PiCurrencySignRupeesDuoStrokeProps): JSX.Element {
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
      <path d="M5 4H11.0208M11.0208 4H19M11.0208 4C13.7741 4 16.0093 6.2259 16.0207 8.97917C16.0323 11.7487 13.7904 14 11.0208 14H5.5L15 21" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M5 9H19" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
