import React from 'react';

/**
 * PiCloudDefaultDuoSolid icon from the duo-solid style in weather category.
 */
interface PiCloudDefaultDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCloudDefaultDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'cloud-default icon',
  ...props
}: PiCloudDefaultDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M12.5 4c3.16 0 5.86 1.953 6.965 4.715A6.5 6.5 0 0 1 16.5 21h-10a5.5 5.5 0 0 1-1.383-10.824A7.5 7.5 0 0 1 7.434 5.97 7.47 7.47 0 0 1 12.5 4" opacity=".28" /> <path d="M16.5 20a5.5 5.5 0 0 0 2.168-10.556A6.5 6.5 0 0 0 6.174 13" />
    </svg>
  );
}
