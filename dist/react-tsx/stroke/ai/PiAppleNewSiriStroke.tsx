import React from 'react';

/**
 * PiAppleNewSiriStroke icon from the stroke style in ai category.
 */
interface PiAppleNewSiriStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAppleNewSiriStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'apple-new-siri icon',
  ...props
}: PiAppleNewSiriStrokeProps): JSX.Element {
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
      <path d="M11.4023 15.0005C10.1825 15.9402 8.76214 16.7584 7.51422 16.7584C5.02108 16.7584 3 14.7373 3 12.2442C3 9.75106 5.02108 7.72998 7.51422 7.72998C10.4454 7.72998 14.3281 12.2442 14.3281 12.2442C14.3281 12.2442 16.6661 14.9625 18.4312 14.9625C19.9324 14.9625 21.1494 13.7455 21.1494 12.2442C21.1494 10.743 19.9324 9.52599 18.4312 9.52599C18.1199 9.52599 17.7908 9.61053 17.4599 9.74978" stroke="currentColor" strokeWidth="2" fill="none"/>
  <circle cx="11.9996" cy="12.0001" r="9.15" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
