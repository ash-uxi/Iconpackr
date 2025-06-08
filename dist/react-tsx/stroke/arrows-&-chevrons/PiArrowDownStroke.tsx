import React from 'react';

/**
 * PiArrowDownStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiArrowDownStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowDownStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-down icon',
  ...props
}: PiArrowDownStrokeProps): JSX.Element {
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
      <path d="M6 14.1696C7.55556 16.273 9.37278 18.1622 11.4057 19.7905C11.5801 19.9302 11.79 20 12 20M18 14.1696C16.4444 16.273 14.6272 18.1622 12.5943 19.7905C12.4199 19.9302 12.21 20 12 20M12 20L12 4" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
