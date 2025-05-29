import React from 'react';

/**
 * PiNotificationBellAddStroke icon from the stroke style in alerts category.
 */
interface PiNotificationBellAddStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

export default function PiNotificationBellAddStroke({
  size = 24,
  color,
  className,
  ...props
}: PiNotificationBellAddStrokeProps): JSX.Element {
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
