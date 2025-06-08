import React from 'react';

/**
 * PiResolutionQualityHqDuoSolid icon from the duo-solid style in media category.
 */
interface PiResolutionQualityHqDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiResolutionQualityHqDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'resolution-quality-hq icon',
  ...props
}: PiResolutionQualityHqDuoSolidProps): JSX.Element {
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
      <path d="M6.745 8.544v3.503m0 0h3.504m-3.504 0v3.003m3.504-3.003V8.544m0 3.503v3.003m5.172-.924v1.533m-1.67-5.565a1.752 1.752 0 1 1 3.504 0v2.28a1.752 1.752 0 0 1-3.503 0z" /> <path fill={color || "currentColor"} d="M7 3a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5z" opacity=".28" />
    </svg>
  );
}
