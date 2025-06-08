import React from 'react';

/**
 * PiArrowRightContrast icon from the contrast style in arrows-&-chevrons category.
 */
interface PiArrowRightContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowRightContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-right icon',
  ...props
}: PiArrowRightContrastProps): JSX.Element {
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
      <path d="m15.47 12-.3-6a30.2 30.2 0 0 1 5.62 5.406.95.95 0 0 1 0 1.188A30.2 30.2 0 0 1 15.17 18zm0 0H3"/>
  <path fill="currentColor" d="M20.79 11.406A30.2 30.2 0 0 0 15.17 6l.3 6-.3 6a30.2 30.2 0 0 0 5.62-5.406.95.95 0 0 0 0-1.188" opacity=".28"/>
    </svg>
  );
}
