import React from 'react';

/**
 * PiWindowFullscreenContrast icon from the contrast style in devices category.
 */
interface PiWindowFullscreenContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWindowFullscreenContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'window-fullscreen icon',
  ...props
}: PiWindowFullscreenContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M17 8v8H7V8z"/>
  <path d="M17 8v8H7V8z"/>
  <path fill="currentColor" d="M21 17V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3" opacity=".28"/>
  <path d="M21 17V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3"/>
    </svg>
  );
}
