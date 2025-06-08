import React from 'react';

/**
 * PiPlaygroundContrast icon from the contrast style in sports category.
 */
interface PiPlaygroundContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPlaygroundContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'playground icon',
  ...props
}: PiPlaygroundContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M2 16V8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3" opacity=".28"/>
  <path d="M2 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2m20-6h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2m-10 0v4m0-4a3 3 0 1 1 0-6m0 6a3 3 0 1 0 0-6m0 0V5M2 8v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3"/>
    </svg>
  );
}
