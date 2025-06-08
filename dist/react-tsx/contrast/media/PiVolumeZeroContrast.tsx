import React from 'react';

/**
 * PiVolumeZeroContrast icon from the contrast style in media category.
 */
interface PiVolumeZeroContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVolumeZeroContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'volume-zero icon',
  ...props
}: PiVolumeZeroContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M17 18.932V5.107c0-1.71-1.934-2.706-3.326-1.711L10.86 5.405a4.9 4.9 0 0 1-1.898.822A4.93 4.93 0 0 0 5 11.061v1.918a4.93 4.93 0 0 0 3.963 4.833c.683.137 1.33.417 1.898.823l2.813 2.009c1.392.994 3.326 0 3.326-1.712" opacity=".28"/>
  <path d="M17 18.932V5.107c0-1.71-1.934-2.706-3.326-1.711L10.86 5.405a4.9 4.9 0 0 1-1.898.822A4.93 4.93 0 0 0 5 11.061v1.918a4.93 4.93 0 0 0 3.963 4.833c.683.137 1.33.417 1.898.823l2.813 2.009c1.392.994 3.326 0 3.326-1.712"/>
    </svg>
  );
}
