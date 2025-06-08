import React from 'react';

/**
 * PiVercelSolid icon from the solid style in apps-&-social category.
 */
interface PiVercelSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVercelSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'vercel icon',
  ...props
}: PiVercelSolidProps): JSX.Element {
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
      <path d="M13.7238 2.95862C12.9505 1.644 11.0494 1.644 10.2761 2.95862L2.02453 16.9863C1.24025 18.3196 2.20156 20.0003 3.7484 20.0003H20.2516C21.7984 20.0003 22.7597 18.3196 21.9754 16.9863L13.7238 2.95862Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
