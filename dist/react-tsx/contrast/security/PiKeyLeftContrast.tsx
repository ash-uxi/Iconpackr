import React from 'react';

/**
 * PiKeyLeftContrast icon from the contrast style in security category.
 */
interface PiKeyLeftContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiKeyLeftContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'key-left icon',
  ...props
}: PiKeyLeftContrastProps): JSX.Element {
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
      <path d="M14 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0m0 0H2v3m4-3v2"/>
  <path fill="currentColor" d="M22 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0" opacity=".28"/>
    </svg>
  );
}
