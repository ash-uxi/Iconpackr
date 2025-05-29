import React from 'react';

/**
 * PiMicMicrophoneDuoStroke icon from the duo-stroke style in media category.
 */
interface PiMicMicrophoneDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

export default function PiMicMicrophoneDuoStroke({
  size = 24,
  color,
  className,
  ...props
}: PiMicMicrophoneDuoStrokeProps): JSX.Element {
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
