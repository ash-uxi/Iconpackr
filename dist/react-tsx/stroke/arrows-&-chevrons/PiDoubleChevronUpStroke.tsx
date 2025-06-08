import React from 'react';

/**
 * PiDoubleChevronUpStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiDoubleChevronUpStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDoubleChevronUpStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'double-chevron-up icon',
  ...props
}: PiDoubleChevronUpStrokeProps): JSX.Element {
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
      <path d="M8 11C9.06206 9.53812 10.3071 8.22872 11.7021 7.1058C11.8774 6.96473 12.1226 6.96473 12.2979 7.1058C13.6929 8.22872 14.9379 9.53812 16 11M8 17C9.06206 15.5381 10.3071 14.2287 11.7021 13.1058C11.8774 12.9647 12.1226 12.9647 12.2979 13.1058C13.6929 14.2287 14.9379 15.5381 16 17" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
