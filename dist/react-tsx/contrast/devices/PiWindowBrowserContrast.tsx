import React from 'react';

/**
 * PiWindowBrowserContrast icon from the contrast style in devices category.
 */
interface PiWindowBrowserContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWindowBrowserContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'window-browser icon',
  ...props
}: PiWindowBrowserContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M16.2 4.47c1.68 0 2.52 0 3.162.328a3 3 0 0 1 1.311 1.31C21 6.752 21 7.592 21 9.272v6.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.31c-.642.328-1.482.328-3.162.328H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.19 3 17.35 3 15.67v-6.4c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 4.47 6.12 4.47 7.8 4.47z" opacity=".28"/>
  <path d="M16.2 4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 6.28 21 7.12 21 8.8v6.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 20 17.88 20 16.2 20H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 17.72 3 16.88 3 15.2V8.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 4 6.12 4 7.8 4zM21 10H3M7 7h.01M10 7h.01M13 7h.01"/>
    </svg>
  );
}
