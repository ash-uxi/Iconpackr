import React from 'react';

/**
 * PiLabFlaskRoundStroke icon from the stroke style in general category.
 */
interface PiLabFlaskRoundStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLabFlaskRoundStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'lab-flask-round icon',
  ...props
}: PiLabFlaskRoundStrokeProps): JSX.Element {
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
      <path d="M10 3H14M10 3H9M10 3V7.26962C7.15554 8.05468 4.98882 10.4733 4.57254 13.4527M14 3H15M14 3V7.26962C17.1712 8.14486 19.5 11.0505 19.5 14.5C19.5 14.6566 19.4952 14.812 19.4857 14.9662M19.4857 14.9662C19.245 18.8912 15.9856 22 12 22C7.85786 22 4.5 18.6421 4.5 14.5C4.5 14.1446 4.52472 13.795 4.57254 13.4527M19.4857 14.9662C14 17.5 12 10 4.57254 13.4527" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M9 16H9.01" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
