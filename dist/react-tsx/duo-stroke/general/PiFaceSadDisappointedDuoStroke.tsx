import React from 'react';

/**
 * PiFaceSadDisappointedDuoStroke icon from the duo-stroke style in general category.
 */
interface PiFaceSadDisappointedDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFaceSadDisappointedDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'face-sad-disappointed icon',
  ...props
}: PiFaceSadDisappointedDuoStrokeProps): JSX.Element {
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
      <path d="M2.8501 11.9996C2.8501 6.94621 6.94669 2.84961 12.0001 2.84961C17.0535 2.84961 21.1501 6.94621 21.1501 11.9996C21.1501 17.053 17.0535 21.1496 12.0001 21.1496C6.94669 21.1496 2.8501 17.053 2.8501 11.9996Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M8.38574 10.0049L9.61447 9.14453M14.3853 9.14453L15.614 10.0049M8.4292 16C9.33666 15.0743 10.6012 14.5 11.9999 14.5C13.3986 14.5 14.6632 15.0743 15.5706 16" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
