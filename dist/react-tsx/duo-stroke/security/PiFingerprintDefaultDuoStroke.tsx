import React from 'react';

/**
 * PiFingerprintDefaultDuoStroke icon from the duo-stroke style in security category.
 */
interface PiFingerprintDefaultDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFingerprintDefaultDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'fingerprint-default icon',
  ...props
}: PiFingerprintDefaultDuoStrokeProps): JSX.Element {
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
      <path d="M12 13V10.5M12 21V17M15 3.58152C14.0736 3.20651 13.0609 3 12 3C7.58172 3 4 6.58172 4 11V17.5499M18.6153 6.5C19.4892 7.78211 20 9.3314 20 11V17.5499" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M9.35418 8C10.0593 7.37764 10.9856 7 12 7C14.2091 7 16 8.79086 16 11V20.2501M8 12V20.2501" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
