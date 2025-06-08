import React from 'react';

/**
 * PiAcOnSlowDuoSolid icon from the duo-solid style in appliances category.
 */
interface PiAcOnSlowDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAcOnSlowDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'ac-on-slow icon',
  ...props
}: PiAcOnSlowDuoSolidProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M18 8h-2m-4 8v4m5-4v2.8M7 16v2.8" /> <path fill={color || "currentColor"} d="M4 3a3 3 0 0 0-3 3v6a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a3 3 0 0 0-3-3z" opacity=".28" />
    </svg>
  );
}
