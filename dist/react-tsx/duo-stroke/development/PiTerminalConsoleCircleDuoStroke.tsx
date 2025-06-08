import React from 'react';

/**
 * PiTerminalConsoleCircleDuoStroke icon from the duo-stroke style in development category.
 */
interface PiTerminalConsoleCircleDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTerminalConsoleCircleDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'terminal-console-circle icon',
  ...props
}: PiTerminalConsoleCircleDuoStrokeProps): JSX.Element {
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
      <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M8 13L10 11L8 9M13 13H16" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
