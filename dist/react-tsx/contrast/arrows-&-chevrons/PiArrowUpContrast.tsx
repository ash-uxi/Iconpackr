import React from 'react';

/**
 * PiArrowUpContrast icon from the contrast style in arrows-&-chevrons category.
 */
interface PiArrowUpContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowUpContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-up icon',
  ...props
}: PiArrowUpContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M11.406 4.21A30.2 30.2 0 0 0 6 9.83l6-.3 6 .3a30.2 30.2 0 0 0-5.406-5.62.95.95 0 0 0-1.188 0" opacity=".28"/>
  <path d="m12 9.53-6 .3a30.2 30.2 0 0 1 5.406-5.62.95.95 0 0 1 1.188 0A30.2 30.2 0 0 1 18 9.83zm0 0V20"/>
    </svg>
  );
}
