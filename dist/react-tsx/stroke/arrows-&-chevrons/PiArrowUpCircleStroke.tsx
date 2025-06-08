import React from 'react';

/**
 * PiArrowUpCircleStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiArrowUpCircleStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowUpCircleStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-up-circle icon',
  ...props
}: PiArrowUpCircleStrokeProps): JSX.Element {
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
      <path d="M8.00006 11.9488C9.03711 10.5243 10.2486 9.24485 11.6039 8.14208C11.7201 8.04748 11.8601 8.00018 12.0001 8.00018M16.0001 11.9488C14.963 10.5243 13.7515 9.24485 12.3963 8.14208C12.28 8.04748 12.14 8.00018 12.0001 8.00018M12.0001 8.00018L12.0001 16.0002M21.1501 12.0001C21.1501 17.0535 17.0535 21.1501 12.0001 21.1501C6.94669 21.1501 2.8501 17.0535 2.8501 12.0001C2.8501 6.94669 6.94669 2.8501 12.0001 2.8501C17.0535 2.8501 21.1501 6.94669 21.1501 12.0001Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
