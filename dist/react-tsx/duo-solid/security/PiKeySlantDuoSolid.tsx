import React from 'react';

/**
 * PiKeySlantDuoSolid icon from the duo-solid style in security category.
 */
interface PiKeySlantDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiKeySlantDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'key-slant icon',
  ...props
}: PiKeySlantDuoSolidProps): JSX.Element {
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
      <path d="M15.766 7.228 18.595 4.4l2.121 2.121m-4.95.707-5.657 5.657m5.657-5.657 1.414 1.415" opacity=".28" /> <path fill={color || "currentColor"} d="M3.745 12.178a5 5 0 1 1 7.07 7.071 5 5 0 0 1-7.07-7.07" />
    </svg>
  );
}
