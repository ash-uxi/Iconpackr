import React from 'react';

/**
 * PiArrowLeftContrast icon from the contrast style in arrows-&-chevrons category.
 */
interface PiArrowLeftContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowLeftContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-left icon',
  ...props
}: PiArrowLeftContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M4.21 12.594A30.2 30.2 0 0 0 9.83 18l-.3-6 .3-6a30.2 30.2 0 0 0-5.62 5.406.95.95 0 0 0 0 1.188" opacity=".28"/>
  <path d="m9.53 12 .3 6a30.2 30.2 0 0 1-5.62-5.406.95.95 0 0 1 0-1.188A30.2 30.2 0 0 1 9.83 6zm0 0H20"/>
    </svg>
  );
}
