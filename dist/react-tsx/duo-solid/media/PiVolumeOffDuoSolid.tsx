import React from 'react';

/**
 * PiVolumeOffDuoSolid icon from the duo-solid style in media category.
 */
interface PiVolumeOffDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVolumeOffDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'volume-off icon',
  ...props
}: PiVolumeOffDuoSolidProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <g fill={color || "currentColor"} opacity=".28"> <path d="M18 5.108c0-2.525-2.853-3.993-4.907-2.526l-2.813 2.01a3.9 3.9 0 0 1-1.514.655A5.93 5.93 0 0 0 4 11.06v1.918c0 1.949.949 3.71 2.444 4.798a1 1 0 0 0 1.296-.102l9.967-9.968A1 1 0 0 0 18 7zM18 12.648a1 1 0 0 0-1.707-.707l-6.05 6.05a1 1 0 0 0 .125 1.521l2.725 1.946C15.147 22.925 18 21.457 18 18.933z" /> </g> <path d="M22 2 2 22" />
    </svg>
  );
}
