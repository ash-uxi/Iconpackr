import React from 'react';

/**
 * PiAcLeafDuoSolid icon from the duo-solid style in appliances category.
 */
interface PiAcLeafDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAcLeafDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'ac-leaf icon',
  ...props
}: PiAcLeafDuoSolidProps): JSX.Element {
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
      <path d="M18 8h-2m-1.198 14 .04-.11a6.13 6.13 0 0 1 2.317-2.963m-.482-2.855c-1.472.85-2.025 2.65-1.383 3.76.64 1.11 2.476 1.532 3.948.682s3.037-3.974 2.716-4.53c-.32-.555-3.809-.762-5.281.088" /> <path fill={color || "currentColor"} d="M4 3a3 3 0 0 0-3 3v6a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a3 3 0 0 0-3-3z" opacity=".28" />
    </svg>
  );
}
