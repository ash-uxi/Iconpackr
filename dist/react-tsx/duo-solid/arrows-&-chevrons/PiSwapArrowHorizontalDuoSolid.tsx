import React from 'react';

/**
 * PiSwapArrowHorizontalDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 */
interface PiSwapArrowHorizontalDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSwapArrowHorizontalDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'swap-arrow-horizontal icon',
  ...props
}: PiSwapArrowHorizontalDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M17.708 3.196a1 1 0 0 0-1.592.878l.165 2.223a23 23 0 0 1 0 3.406l-.165 2.223a1 1 0 0 0 1.592.878 21.2 21.2 0 0 0 3.933-3.783 1.63 1.63 0 0 0 0-2.042 21.2 21.2 0 0 0-3.933-3.783" /> <path d="M6.656 16H17m.344-8H7" opacity=".28" /> <path fill={color || "currentColor"} d="M7.884 12.074a1 1 0 0 0-1.592-.878 21.2 21.2 0 0 0-3.933 3.783 1.63 1.63 0 0 0 0 2.042 21.2 21.2 0 0 0 3.933 3.783 1 1 0 0 0 1.592-.878l-.165-2.223a23 23 0 0 1 0-3.406z" />
    </svg>
  );
}
