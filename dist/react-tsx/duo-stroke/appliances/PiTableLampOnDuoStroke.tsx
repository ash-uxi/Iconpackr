import React from 'react';

/**
 * PiTableLampOnDuoStroke icon from the duo-stroke style in appliances category.
 */
interface PiTableLampOnDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTableLampOnDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'table-lamp-on icon',
  ...props
}: PiTableLampOnDuoStrokeProps): JSX.Element {
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
      <path d="M12 18V12M9 21H15M16 21V20C16 18.8954 15.1046 18 14 18H10C8.89543 18 8 18.8954 8 20V21H16Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M6 15L5 17M18 15L19 17M8.61155 3H15.3885C16.2347 3 16.9894 3.53262 17.2729 4.32998L20 12H4L6.72712 4.32998C7.01062 3.53262 7.76529 3 8.61155 3Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
