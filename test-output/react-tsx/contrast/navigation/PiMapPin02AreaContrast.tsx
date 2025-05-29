import React from 'react';

/**
 * PiMapPin02AreaContrast icon from the contrast style in navigation category.
 */
interface PiMapPin02AreaContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

export default function PiMapPin02AreaContrast({
  size = 24,
  color,
  className,
  ...props
}: PiMapPin02AreaContrastProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{color: color || "currentColor"}}
      
      {...props}
    >
      
    </svg>
  );
}
