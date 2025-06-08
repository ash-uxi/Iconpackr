import React from 'react';

/**
 * PiFeatherPenDuoStroke icon from the duo-stroke style in editing category.
 */
interface PiFeatherPenDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFeatherPenDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'feather-pen icon',
  ...props
}: PiFeatherPenDuoStrokeProps): JSX.Element {
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
      <path d="M2.5 21.5C2.5 20.2738 2.68075 18.5349 3.18042 16.6089C4.7164 10.6885 9.26594 3 20.8424 3C20.963 6.0602 19.8207 10.291 15.8483 12.1101C14.6284 12.6688 13.1415 13 11.3424 13" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M3.18042 16.6091C14.3986 18.3289 15.9635 14.7189 15.8483 12.1104" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
