import React from 'react';

/**
 * PiListCancelStroke icon from the stroke style in general category.
 */
interface PiListCancelStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiListCancelStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'list-cancel icon',
  ...props
}: PiListCancelStrokeProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M4 12H10M4 18H10M4 6H20M14.5 17.4971L17 14.9971M17 14.9971L19.5 12.4971M17 14.9971L14.5 12.4971M17 14.9971L19.5 17.4971" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
