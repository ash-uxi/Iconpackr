import React from 'react';

/**
 * PiUturnUpDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 */
interface PiUturnUpDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUturnUpDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'uturn-up icon',
  ...props
}: PiUturnUpDuoSolidProps): JSX.Element {
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
      <path d="M16 4v11a5 5 0 0 1-10 0v-3" opacity=".28" /> <path fill={color || "currentColor"} d="M20.01 9.028a1 1 0 0 0 .882-1.586 21.8 21.8 0 0 0-3.857-4.073 1.64 1.64 0 0 0-2.07 0 21.8 21.8 0 0 0-3.857 4.073 1 1 0 0 0 .882 1.586l2.32-.17a23 23 0 0 1 3.38 0z" />
    </svg>
  );
}
