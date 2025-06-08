import React from 'react';

/**
 * PiMoonStroke icon from the stroke style in weather category.
 */
interface PiMoonStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMoonStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'moon icon',
  ...props
}: PiMoonStrokeProps): JSX.Element {
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
      <path d="M20.9999 11.9659C19.8486 13.7891 17.8157 15.0001 15.5 15.0001C11.9101 15.0001 9 12.09 9 8.50012C9 6.18432 10.2111 4.15137 12.0344 3.00006C12.0229 3.00002 12.0115 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.9886 21 11.9773 20.9999 11.9659Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
