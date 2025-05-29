import React from 'react';

/**
 * PiCommandCmdSquareDuoStroke icon from the duo-stroke style in editing category.
 */
interface PiCommandCmdSquareDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

export default function PiCommandCmdSquareDuoStroke({
  size = 24,
  color,
  className,
  ...props
}: PiCommandCmdSquareDuoStrokeProps): JSX.Element {
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
