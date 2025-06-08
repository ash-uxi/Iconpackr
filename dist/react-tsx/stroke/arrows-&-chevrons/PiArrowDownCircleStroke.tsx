import React from 'react';

/**
 * PiArrowDownCircleStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiArrowDownCircleStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowDownCircleStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-down-circle icon',
  ...props
}: PiArrowDownCircleStrokeProps): JSX.Element {
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
      <path d="M8.00006 12.0514C9.03711 13.4759 10.2486 14.7554 11.6039 15.8582C11.7201 15.9528 11.8601 16.0001 12.0001 16.0001M16.0001 12.0514C14.963 13.4759 13.7515 14.7554 12.3963 15.8582C12.28 15.9528 12.14 16.0001 12.0001 16.0001M12.0001 16.0001L12.0001 8.00005M21.1501 12.0001C21.1501 17.0535 17.0535 21.1501 12.0001 21.1501C6.94669 21.1501 2.8501 17.0535 2.8501 12.0001C2.8501 6.94669 6.94669 2.8501 12.0001 2.8501C17.0535 2.8501 21.1501 6.94669 21.1501 12.0001Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
