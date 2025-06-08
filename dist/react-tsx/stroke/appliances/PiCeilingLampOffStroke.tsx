import React from 'react';

/**
 * PiCeilingLampOffStroke icon from the stroke style in appliances category.
 */
interface PiCeilingLampOffStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCeilingLampOffStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'ceiling-lamp-off icon',
  ...props
}: PiCeilingLampOffStrokeProps): JSX.Element {
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
      <path d="M12 7C7.02944 7 3 11.0294 3 16H21C21 11.0294 16.9706 7 12 7ZM12 7V4M15 16C15 17.6569 13.6569 19 12 19C10.3431 19 9 17.6569 9 16L15 16Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
