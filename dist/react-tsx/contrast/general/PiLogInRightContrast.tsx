import React from 'react';

/**
 * PiLogInRightContrast icon from the contrast style in general category.
 */
interface PiLogInRightContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLogInRightContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'log-in-right icon',
  ...props
}: PiLogInRightContrastProps): JSX.Element {
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
      <path d="M10.55 12H21m-10.45 0c0-1 .162-2.006.261-3a15 15 0 0 0-2.654 2.556.7.7 0 0 0 0 .888A15 15 0 0 0 10.812 15c-.1-.994-.262-2-.262-3M13 4.528A6 6 0 0 0 3 9v6a6 6 0 0 0 10 4.472"/>
  <path fill="currentColor" d="M8.157 11.556A15 15 0 0 1 10.812 9c-.1.994-.262 2-.262 3s.162 2.006.261 3a15 15 0 0 1-2.654-2.556.7.7 0 0 1 0-.888" opacity=".28"/>
    </svg>
  );
}
