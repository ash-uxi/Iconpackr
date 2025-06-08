import React from 'react';

/**
 * PiAlignRightDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 */
interface PiAlignRightDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlignRightDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'align-right icon',
  ...props
}: PiAlignRightDuoSolidProps): JSX.Element {
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
      <path d="M21 5v14" opacity=".28" /> <path fill={color || "currentColor"} d="M5 13a1 1 0 1 1 0-2h7.124a50 50 0 0 0-.152-3.003 1 1 0 0 1 1.59-.886 21.8 21.8 0 0 1 4.069 3.853 1.64 1.64 0 0 1 0 2.072 21.8 21.8 0 0 1-4.069 3.853 1 1 0 0 1-1.59-.886q.122-1.5.152-3.003z" />
    </svg>
  );
}
