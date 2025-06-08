import React from 'react';

/**
 * PiCloudCheckDuoSolid icon from the duo-solid style in development category.
 */
interface PiCloudCheckDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCloudCheckDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'cloud-check icon',
  ...props
}: PiCloudCheckDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M12.5 4a7.5 7.5 0 0 0-7.383 6.176A5.502 5.502 0 0 0 6.5 21h10a6.5 6.5 0 0 0 2.965-12.285A7.5 7.5 0 0 0 12.5 4" opacity=".28" /> <path d="m9 13.597 2.341 2.339A15 15 0 0 1 15.9 11" />
    </svg>
  );
}
