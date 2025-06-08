import React from 'react';

/**
 * PiPlaygroundStroke icon from the stroke style in sports category.
 */
interface PiPlaygroundStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPlaygroundStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'playground icon',
  ...props
}: PiPlaygroundStrokeProps): JSX.Element {
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
      <path d="M2 9H4C5.10457 9 6 9.89543 6 11V13C6 14.1046 5.10457 15 4 15H2M22 9H20C18.8954 9 18 9.89543 18 11V13C18 14.1046 18.8954 15 20 15H22M12 15V19M12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9M12 9V5M2 8V16C2 17.6569 3.34315 19 5 19H19C20.6569 19 22 17.6569 22 16V8C22 6.34315 20.6569 5 19 5H5C3.34315 5 2 6.34315 2 8Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
