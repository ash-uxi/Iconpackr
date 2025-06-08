import React from 'react';

/**
 * PiArrowTurnUpLeftDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 */
interface PiArrowTurnUpLeftDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowTurnUpLeftDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-turn-up-left icon',
  ...props
}: PiArrowTurnUpLeftDuoSolidProps): JSX.Element {
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
      <path d="M8.351 9H12c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C20 12.8 20 14.2 20 17v3" opacity=".28" /> <path fill={color || "currentColor"} d="M9.844 13.83a1 1 0 0 1-1.58.974 26.2 26.2 0 0 1-4.87-4.684 1.79 1.79 0 0 1 0-2.24 26.2 26.2 0 0 1 4.87-4.684 1 1 0 0 1 1.58.973A49 49 0 0 0 9.548 6a23 23 0 0 0 0 6c.058.443.134.889.296 1.83" />
    </svg>
  );
}
