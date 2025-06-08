import React from 'react';

/**
 * PiAlertCircleContrast icon from the contrast style in alerts category.
 */
interface PiAlertCircleContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlertCircleContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'alert-circle icon',
  ...props
}: PiAlertCircleContrastProps): JSX.Element {
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
      <path d="M12 12.624v-4M12 16V16m9-4a9 9 0 1 1-18 0 9 9 0 0 1 18 0"/>
  <path fill="currentColor" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18" opacity=".28"/>
    </svg>
  );
}
