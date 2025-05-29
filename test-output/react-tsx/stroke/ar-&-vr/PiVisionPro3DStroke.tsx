import React from 'react';

/**
 * PiVisionPro3DStroke icon from the stroke style in ar-&-vr category.
 */
interface PiVisionPro3DStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

export default function PiVisionPro3DStroke({
  size = 24,
  color,
  className,
  ...props
}: PiVisionPro3DStrokeProps): JSX.Element {
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
