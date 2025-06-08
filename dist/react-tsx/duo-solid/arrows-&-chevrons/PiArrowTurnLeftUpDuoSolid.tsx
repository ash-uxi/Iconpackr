import React from 'react';

/**
 * PiArrowTurnLeftUpDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 */
interface PiArrowTurnLeftUpDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowTurnLeftUpDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-turn-left-up icon',
  ...props
}: PiArrowTurnLeftUpDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M13.83 10.844a1 1 0 0 0 .974-1.58 26.2 26.2 0 0 0-4.684-4.87 1.79 1.79 0 0 0-2.24 0 26.2 26.2 0 0 0-4.684 4.87 1 1 0 0 0 .973 1.58A49 49 0 0 1 6 10.548a23 23 0 0 1 6 0c.443.058.889.134 1.83.296" /> <path d="M9 9.352V13c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C12.8 21 14.2 21 17 21h3" opacity=".28" />
    </svg>
  );
}
