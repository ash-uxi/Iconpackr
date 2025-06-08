import React from 'react';

/**
 * PiPlusDefaultStroke icon from the stroke style in maths category.
 */
interface PiPlusDefaultStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPlusDefaultStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'plus-default icon',
  ...props
}: PiPlusDefaultStrokeProps): JSX.Element {
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
      <path d="M12 19V12M12 12V5M12 12L5 12M12 12L19 12" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
