import React from 'react';

/**
 * PiArrowDownContrast icon from the contrast style in arrows-&-chevrons category.
 */
interface PiArrowDownContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowDownContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-down icon',
  ...props
}: PiArrowDownContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M11.406 19.79A30.2 30.2 0 0 1 6 14.17l6 .3 6-.3a30.2 30.2 0 0 1-5.406 5.62.95.95 0 0 1-1.188 0" opacity=".28"/>
  <path d="m12 14.47-6-.3a30.2 30.2 0 0 0 5.406 5.62.95.95 0 0 0 1.188 0A30.2 30.2 0 0 0 18 14.17zm0 0V4"/>
    </svg>
  );
}
