import React from 'react';

/**
 * PiAlertTriangleStroke icon from the stroke style in alerts category.
 */
interface PiAlertTriangleStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlertTriangleStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'alert-triangle icon',
  ...props
}: PiAlertTriangleStrokeProps): JSX.Element {
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
      <path d="M12 13.0001V9.0001M12 16.3751V16.3762M10.6101 3.28373C11.4989 2.90542 12.5011 2.90542 13.3899 3.28373C16.0413 4.41217 22.3045 14.4218 22.1211 17.0972C22.0491 18.1459 21.5294 19.1112 20.6973 19.7421C18.4845 21.4193 5.51548 21.4193 3.30278 19.7421C2.47058 19.1112 1.9509 18.1459 1.87895 17.0972C1.69539 14.4218 7.95863 4.41217 10.6101 3.28373Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
