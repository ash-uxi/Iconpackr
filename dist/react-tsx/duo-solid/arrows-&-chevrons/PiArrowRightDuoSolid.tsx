import React from 'react';

/**
 * PiArrowRightDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 */
interface PiArrowRightDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowRightDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-right icon',
  ...props
}: PiArrowRightDuoSolidProps): JSX.Element {
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
      <path d="M20 12H2" opacity=".28" /> <path fill={color || "currentColor"} d="M21 12c0-.432-.144-.864-.429-1.22a31.2 31.2 0 0 0-5.807-5.584A1 1 0 0 0 13.17 6v12a1 1 0 0 0 1.594.804 31.2 31.2 0 0 0 5.807-5.584c.285-.356.43-.788.43-1.22" />
    </svg>
  );
}
