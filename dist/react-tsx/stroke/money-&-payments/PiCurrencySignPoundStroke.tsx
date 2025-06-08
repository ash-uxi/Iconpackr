import React from 'react';

/**
 * PiCurrencySignPoundStroke icon from the stroke style in money-&-payments category.
 */
interface PiCurrencySignPoundStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCurrencySignPoundStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'currency-sign-pound icon',
  ...props
}: PiCurrencySignPoundStrokeProps): JSX.Element {
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
      <path d="M16 20H6.24976C5.9866 20 5.90286 19.6207 6.13823 19.4948C7.5685 18.7301 8.51847 17.2045 8.51847 15.4754V12.8889M8.51847 12.8889V8C8.51847 5.72763 10.2909 4 12.3693 4C14.3276 4 16 5.62062 16 7.76471M8.51847 12.8889H6.02463M8.51847 12.8889H16" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
