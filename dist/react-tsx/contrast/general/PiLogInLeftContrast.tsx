import React from 'react';

/**
 * PiLogInLeftContrast icon from the contrast style in general category.
 */
interface PiLogInLeftContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLogInLeftContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'log-in-left icon',
  ...props
}: PiLogInLeftContrastProps): JSX.Element {
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
      <path d="M11 4.528A6 6 0 0 1 21 9v6a6 6 0 0 1-10 4.472M13.45 12H3m10.45 0c0-1-.162-2.006-.261-3a15 15 0 0 1 2.654 2.556.704.704 0 0 1 0 .888A15 15 0 0 1 13.188 15c.1-.994.262-2 .262-3"/>
  <path fill="currentColor" d="M15.843 11.556A15 15 0 0 0 13.188 9c.1.994.262 2 .262 3s-.162 2.006-.261 3a15 15 0 0 0 2.654-2.556.704.704 0 0 0 0-.888" opacity=".28"/>
    </svg>
  );
}
