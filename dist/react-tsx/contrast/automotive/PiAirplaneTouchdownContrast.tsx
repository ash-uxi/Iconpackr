import React from 'react';

/**
 * PiAirplaneTouchdownContrast icon from the contrast style in automotive category.
 */
interface PiAirplaneTouchdownContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAirplaneTouchdownContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'airplane-touchdown icon',
  ...props
}: PiAirplaneTouchdownContrastProps): JSX.Element {
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
      <path d="M3 20h18"/>
  <path fill="currentColor" d="m5.468 13.633 13.366 3.582a1 1 0 0 0 1.224-.707 3 3 0 0 0-2.12-3.675l-2.899-.776-4.09-8.318a3 3 0 0 0-1.915-1.574L8.417 2l.827 8.504-2.898-.777-2.18-2.48a1 1 0 0 0-.493-.306L3 6.76l.25 4.154a3 3 0 0 0 2.218 2.718z" opacity=".28"/>
  <path d="m5.468 13.633 13.366 3.582a1 1 0 0 0 1.224-.707 3 3 0 0 0-2.12-3.675l-2.899-.776-4.09-8.318a3 3 0 0 0-1.915-1.574L8.417 2l.827 8.504-2.898-.777-2.18-2.48a1 1 0 0 0-.493-.306L3 6.76l.25 4.154a3 3 0 0 0 2.218 2.718z"/>
    </svg>
  );
}
