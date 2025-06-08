import React from 'react';

/**
 * PiListTextWrapDuoSolid icon from the duo-solid style in general category.
 */
interface PiListTextWrapDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiListTextWrapDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'list-text-wrap icon',
  ...props
}: PiListTextWrapDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} fillRule="evenodd" d="M3 12a1 1 0 0 1 1-1h13a4 4 0 0 1 0 8h-2.508l.306 1.836a1 1 0 0 1-1.587.964 16 16 0 0 1-2.83-2.727 1.7 1.7 0 0 1 0-2.146 16 16 0 0 1 2.83-2.727 1 1 0 0 1 1.587.964L14.492 17H17a2 2 0 1 0 0-4H4a1 1 0 0 1-1-1" clipRule="evenodd" /> <path d="M4 18h2.5M4 6h16" opacity=".28" />
    </svg>
  );
}
