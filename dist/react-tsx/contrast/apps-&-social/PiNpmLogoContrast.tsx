import React from 'react';

/**
 * PiNpmLogoContrast icon from the contrast style in apps-&-social category.
 */
interface PiNpmLogoContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNpmLogoContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'npm-logo icon',
  ...props
}: PiNpmLogoContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M2 8h20a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H11v2H7v-2H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" opacity=".28"/>
  <path d="M7 8H2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2m3-7h7M7 8v7m7-7h8a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-2m-6-7v7m6 0h-3m3 0v-3m-3 3h-3m3 0v-3m-3 3h-3v2H7v-2m0 0H4m0 0v-3m7-1v1"/>
    </svg>
  );
}
