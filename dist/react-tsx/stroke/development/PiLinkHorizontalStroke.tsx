import React from 'react';

/**
 * PiLinkHorizontalStroke icon from the stroke style in development category.
 */
interface PiLinkHorizontalStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLinkHorizontalStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'link-horizontal icon',
  ...props
}: PiLinkHorizontalStrokeProps): JSX.Element {
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
      <path d="M15 12H9M15 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H15M9 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H9" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
