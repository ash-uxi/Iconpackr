import React from 'react';

/**
 * PiCurlyBracesCodePlusDuoStroke icon from the duo-stroke style in development category.
 */
interface PiCurlyBracesCodePlusDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCurlyBracesCodePlusDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'curly-braces-code-plus icon',
  ...props
}: PiCurlyBracesCodePlusDuoStrokeProps): JSX.Element {
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
      <path d="M12 15V12M12 12V9M12 12L9 12M12 12L15 12" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M8 4C6.34315 4 5 5.19391 5 6.66667V9.33333C5 10.8061 3.65685 12 2 12C3.65685 12 5 13.1939 5 14.6667V17.3333C5 18.8061 6.34315 20 8 20M16 4C17.6569 4 19 5.19391 19 6.66667V9.33333C19 10.8061 20.3431 12 22 12C20.3431 12 19 13.1939 19 14.6667V17.3333C19 18.8061 17.6569 20 16 20" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
