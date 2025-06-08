import React from 'react';

/**
 * PiMouseDefaultContrast icon from the contrast style in devices category.
 */
interface PiMouseDefaultContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMouseDefaultContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'mouse-default icon',
  ...props
}: PiMouseDefaultContrastProps): JSX.Element {
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
      <path d="M12 10V8m0 13a7 7 0 0 1-7-7v-4a7 7 0 0 1 14 0v4a7 7 0 0 1-7 7"/>
  <path fill="currentColor" d="M19 14v-4a7 7 0 1 0-14 0v4a7 7 0 1 0 14 0" opacity=".28"/>
    </svg>
  );
}
