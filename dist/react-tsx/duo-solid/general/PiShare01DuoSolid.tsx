import React from 'react';

/**
 * PiShare01DuoSolid icon from the duo-solid style in general category.
 */
interface PiShare01DuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiShare01DuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'share-01 icon',
  ...props
}: PiShare01DuoSolidProps): JSX.Element {
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
      <path d="M15.41 17.49c-2.583-.773-4.925-2.033-6.82-3.98m6.82-7c-2.583.773-4.924 2.032-6.82 3.98" opacity=".28" /> <path fill={color || "currentColor"} d="M18 15a4 4 0 1 0 0 8 4 4 0 0 0 0-8M18 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8M6 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8" />
    </svg>
  );
}
