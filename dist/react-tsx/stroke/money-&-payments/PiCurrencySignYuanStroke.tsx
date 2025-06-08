import React from 'react';

/**
 * PiCurrencySignYuanStroke icon from the stroke style in money-&-payments category.
 */
interface PiCurrencySignYuanStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCurrencySignYuanStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'currency-sign-yuan icon',
  ...props
}: PiCurrencySignYuanStrokeProps): JSX.Element {
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
      <path d="M5 3L12 11.1M12 11.1L19 3M12 11.1V12M12 12V16M12 12H6M12 12H18M12 16V21M12 16H6M12 16H18" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
