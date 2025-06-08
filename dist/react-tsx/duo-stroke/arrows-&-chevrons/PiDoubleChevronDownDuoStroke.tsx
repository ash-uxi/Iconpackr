import React from 'react';

/**
 * PiDoubleChevronDownDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
interface PiDoubleChevronDownDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDoubleChevronDownDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'double-chevron-down icon',
  ...props
}: PiDoubleChevronDownDuoStrokeProps): JSX.Element {
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
      <path d="M8 13C9.06206 14.4619 10.3071 15.7713 11.7021 16.8942C11.8774 17.0353 12.1226 17.0353 12.2979 16.8942C13.6929 15.7713 14.9379 14.4619 16 13" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M8 7C9.06206 8.46188 10.3071 9.77128 11.7021 10.8942C11.8774 11.0353 12.1226 11.0353 12.2979 10.8942C13.6929 9.77128 14.9379 8.46188 16 7" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
