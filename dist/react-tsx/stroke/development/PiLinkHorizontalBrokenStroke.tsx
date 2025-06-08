import React from 'react';

/**
 * PiLinkHorizontalBrokenStroke icon from the stroke style in development category.
 */
interface PiLinkHorizontalBrokenStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLinkHorizontalBrokenStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'link-horizontal-broken icon',
  ...props
}: PiLinkHorizontalBrokenStrokeProps): JSX.Element {
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
      <path d="M10.1213 4.12132L8 2M14.1213 4.12132L16.2426 2M10.1213 20L8 22.1213M14.1213 20L16.2426 22.1213M8 7H7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17H8M15 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H15" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
