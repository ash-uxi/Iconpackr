import React from 'react';

/**
 * PiQueueContrast icon from the contrast style in general category.
 */
interface PiQueueContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiQueueContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'queue icon',
  ...props
}: PiQueueContrastProps): JSX.Element {
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
      <path d="M3 15h18M3 20h18M6 10h12a3 3 0 1 0 0-6H6a3 3 0 0 0 0 6"/>
  <path fill="currentColor" d="M3 7a3 3 0 0 1 3-3h12a3 3 0 1 1 0 6H6a3 3 0 0 1-3-3" opacity=".28"/>
    </svg>
  );
}
