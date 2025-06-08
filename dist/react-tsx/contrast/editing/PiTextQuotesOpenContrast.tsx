import React from 'react';

/**
 * PiTextQuotesOpenContrast icon from the contrast style in editing category.
 */
interface PiTextQuotesOpenContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTextQuotesOpenContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'text-quotes-open icon',
  ...props
}: PiTextQuotesOpenContrastProps): JSX.Element {
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
      <path d="M14 13.998a3 3 0 1 1 6 0 3 3 0 0 1-6 0m0 0A9.4 9.4 0 0 1 18 6.3M4 13.998a3 3 0 1 1 6 0 3 3 0 0 1-6 0m0 0A9.4 9.4 0 0 1 8 6.3"/>
  <path fill="currentColor" fillRule="evenodd" d="M7 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6m10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6" clipRule="evenodd" opacity=".28"/>
    </svg>
  );
}
