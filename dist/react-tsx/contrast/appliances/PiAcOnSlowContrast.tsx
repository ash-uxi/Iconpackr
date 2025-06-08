import React from 'react';

/**
 * PiAcOnSlowContrast icon from the contrast style in appliances category.
 */
interface PiAcOnSlowContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAcOnSlowContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'ac-on-slow icon',
  ...props
}: PiAcOnSlowContrastProps): JSX.Element {
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
      <path d="M18 8h-2m-4 8v4m5-4v2.8M7 16v2.8M22 12V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6z"/>
  <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v6h20V6a2 2 0 0 0-2-2" opacity=".28"/>
    </svg>
  );
}
