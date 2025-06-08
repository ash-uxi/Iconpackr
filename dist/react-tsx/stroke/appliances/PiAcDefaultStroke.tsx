import React from 'react';

/**
 * PiAcDefaultStroke icon from the stroke style in appliances category.
 */
interface PiAcDefaultStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAcDefaultStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'ac-default icon',
  ...props
}: PiAcDefaultStrokeProps): JSX.Element {
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
      <path d="M18 12H16M22 16V10C22 8.89543 21.1046 8 20 8H4C2.89543 8 2 8.89543 2 10V16H22Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
