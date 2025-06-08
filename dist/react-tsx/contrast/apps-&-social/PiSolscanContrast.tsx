import React from 'react';

/**
 * PiSolscanContrast icon from the contrast style in apps-&-social category.
 */
interface PiSolscanContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSolscanContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'solscan icon',
  ...props
}: PiSolscanContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0" opacity=".28"/>
  <path d="M19.892 16.636a9.15 9.15 0 1 0-14.856 1.298 9.15 9.15 0 0 0 10.289 2.593M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/>
    </svg>
  );
}
