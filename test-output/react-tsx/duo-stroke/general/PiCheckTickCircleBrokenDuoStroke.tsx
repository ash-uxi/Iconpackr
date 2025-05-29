import React from 'react';

/**
 * PiCheckTickCircleBrokenDuoStroke icon from the duo-stroke style in general category.
 */
interface PiCheckTickCircleBrokenDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

export default function PiCheckTickCircleBrokenDuoStroke({
  size = 24,
  color,
  className,
  ...props
}: PiCheckTickCircleBrokenDuoStrokeProps): JSX.Element {
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
