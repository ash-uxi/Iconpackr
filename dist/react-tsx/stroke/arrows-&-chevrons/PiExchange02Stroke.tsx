import React from 'react';

/**
 * PiExchange02Stroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiExchange02StrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiExchange02Stroke({
  size = 24,
  color,
  className,
  ariaLabel = 'exchange-02 icon',
  ...props
}: PiExchange02StrokeProps): JSX.Element {
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
      <path d="M16.0309 5C14.5767 6.03704 13.2706 7.24852 12.1449 8.60379C12.0483 8.72005 12 8.86002 12 9M16.0309 13C14.5767 11.963 13.2706 10.7515 12.1449 9.39621C12.0483 9.27995 12 9.13998 12 9M12 9L20 9M7.96911 11C9.42331 12.037 10.7294 13.2485 11.8551 14.6038C11.9517 14.72 12 14.86 12 15M7.96911 19C9.42331 17.963 10.7294 16.7515 11.8551 15.3962C11.9517 15.28 12 15.14 12 15M12 15H4" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
