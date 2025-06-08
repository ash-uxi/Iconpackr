import React from 'react';

/**
 * PiMouseDefaultSolid icon from the solid style in devices category.
 */
interface PiMouseDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMouseDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'mouse-default icon',
  ...props
}: PiMouseDefaultSolidProps): JSX.Element {
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
      <path d="M4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V10ZM13 7.95C13 7.39772 12.5523 6.95 12 6.95C11.4477 6.95 11 7.39772 11 7.95V10.05C11 10.6023 11.4477 11.05 12 11.05C12.5523 11.05 13 10.6023 13 10.05V7.95Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
