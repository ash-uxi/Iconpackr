import React from 'react';

/**
 * PiAlarmPlusStroke icon from the stroke style in time category.
 */
interface PiAlarmPlusStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlarmPlusStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'alarm-plus icon',
  ...props
}: PiAlarmPlusStrokeProps): JSX.Element {
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
      <path d="M5 3L2 6M19 3L22 6M12 16V13M12 13V10M12 13H9M12 13H15M20 13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13C4 8.58172 7.58172 5 12 5C16.4183 5 20 8.58172 20 13Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
