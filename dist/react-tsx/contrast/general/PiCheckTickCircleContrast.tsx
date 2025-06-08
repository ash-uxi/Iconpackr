import React from 'react';

/**
 * PiCheckTickCircleContrast icon from the contrast style in general category.
 */
interface PiCheckTickCircleContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCheckTickCircleContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'check-tick-circle icon',
  ...props
}: PiCheckTickCircleContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M12 21.15a9.15 9.15 0 1 0 0-18.3 9.15 9.15 0 0 0 0 18.3" opacity=".28"/>
  <path d="m8.5 12.512 2.341 2.339A15 15 0 0 1 15.4 9.915l.101-.069M21.15 12a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0"/>
    </svg>
  );
}
