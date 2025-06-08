import React from 'react';

/**
 * PiTableLampOnStroke icon from the stroke style in appliances category.
 */
interface PiTableLampOnStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTableLampOnStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'table-lamp-on icon',
  ...props
}: PiTableLampOnStrokeProps): JSX.Element {
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
      <path d="M12 18V12M9 21H15M6 15L5 17M18 15L19 17M20 12L17.2729 4.32998C16.9894 3.53262 16.2347 3 15.3885 3H8.61155C7.76529 3 7.01062 3.53262 6.72712 4.32998L4 12H20ZM16 21V20C16 18.8954 15.1046 18 14 18H10C8.89543 18 8 18.8954 8 20V21H16Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
