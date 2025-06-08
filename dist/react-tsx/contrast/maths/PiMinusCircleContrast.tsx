import React from 'react';

/**
 * PiMinusCircleContrast icon from the contrast style in maths category.
 */
interface PiMinusCircleContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMinusCircleContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'minus-circle icon',
  ...props
}: PiMinusCircleContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M21.15 12a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0" opacity=".28"/>
  <path d="M9 12h6m6.15 0a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0"/>
    </svg>
  );
}
