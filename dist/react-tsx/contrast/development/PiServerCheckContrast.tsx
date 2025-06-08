import React from 'react';

/**
 * PiServerCheckContrast icon from the contrast style in development category.
 */
interface PiServerCheckContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiServerCheckContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'server-check icon',
  ...props
}: PiServerCheckContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M7 12c-.464 0-.697 0-.892.022a3.5 3.5 0 0 0-3.086 3.086C3 15.303 3 15.536 3 16s0 .697.022.892a3.5 3.5 0 0 0 3.086 3.086C6.303 20 6.536 20 7 20h5.931a3 3 0 0 1 4.557-3.549 16.7 16.7 0 0 1 2.82-2.428q.137-.095.28-.17a3.5 3.5 0 0 0-2.696-1.831C17.697 12 17.464 12 17 12c.464 0 .697 0 .892-.022a3.5 3.5 0 0 0 3.086-3.086C21 8.697 21 8.464 21 8s0-.697-.022-.892a3.5 3.5 0 0 0-3.086-3.086C17.697 4 17.464 4 17 4H7c-.464 0-.697 0-.892.022a3.5 3.5 0 0 0-3.086 3.086C3 7.303 3 7.536 3 8s0 .697.022.892a3.5 3.5 0 0 0 3.086 3.086C6.303 12 6.536 12 7 12" opacity=".28"/>
  <path d="M7 12h10M7 12c-.464 0-.697 0-.892.022a3.5 3.5 0 0 0-3.086 3.086C3 15.303 3 15.536 3 16s0 .697.022.892a3.5 3.5 0 0 0 3.086 3.086C6.303 20 6.536 20 7 20h4.871M7 12c-.464 0-.697 0-.892-.022a3.5 3.5 0 0 1-3.086-3.086C3 8.697 3 8.464 3 8s0-.697.022-.892a3.5 3.5 0 0 1 3.086-3.086C6.303 4 6.536 4 7 4h10c.464 0 .697 0 .892.022a3.5 3.5 0 0 1 3.086 3.086C21 7.303 21 7.536 21 8s0 .697-.022.892a3.5 3.5 0 0 1-3.086 3.086C17.697 12 17.464 12 17 12m0 0c.464 0 .697 0 .892.022a3.5 3.5 0 0 1 2.083 1.003M13 8h.01M17 8h.01m-1.3 10.868L17.844 21A13.66 13.66 0 0 1 22 16.5"/>
    </svg>
  );
}
