import React from 'react';

/**
 * PiMinimizeLineArrowDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 */
interface PiMinimizeLineArrowDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMinimizeLineArrowDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'minimize-line-arrow icon',
  ...props
}: PiMinimizeLineArrowDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M13.503 4.947a1 1 0 0 0-1.744.484 21.7 21.7 0 0 0-.225 5.568c.034.38.197.727.455.99a1.62 1.62 0 0 0-.99-.455 21.7 21.7 0 0 0-5.568.224 1 1 0 0 0-.484 1.745l1.66 1.425a23 23 0 0 1 2.465 2.465l1.425 1.66a1 1 0 0 0 1.744-.484c.315-1.851.39-3.723.225-5.568a1.62 1.62 0 0 0-.455-.99c.263.258.61.421.99.455a21.7 21.7 0 0 0 5.568-.225 1 1 0 0 0 .484-1.744l-1.66-1.425a23 23 0 0 1-2.465-2.466z" /> <path d="M15.573 8.427 20 4M8.427 15.573 4 20" opacity=".28" />
    </svg>
  );
}
