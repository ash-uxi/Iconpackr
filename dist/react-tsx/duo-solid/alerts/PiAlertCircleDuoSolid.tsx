import React from 'react';

/**
 * PiAlertCircleDuoSolid icon from the duo-solid style in alerts category.
 */
interface PiAlertCircleDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlertCircleDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'alert-circle icon',
  ...props
}: PiAlertCircleDuoSolidProps): JSX.Element {
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
      <path d="M12 12.624v-4m0 7.375z" /> <path fill={color || "currentColor"} d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2" opacity=".28" />
    </svg>
  );
}
