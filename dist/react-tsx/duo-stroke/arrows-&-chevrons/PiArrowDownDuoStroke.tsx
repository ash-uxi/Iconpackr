import React from 'react';

/**
 * PiArrowDownDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
interface PiArrowDownDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowDownDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-down icon',
  ...props
}: PiArrowDownDuoStrokeProps): JSX.Element {
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
      <path d="M12 20V4" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M6 14.1696C7.55556 16.273 9.37278 18.1621 11.4057 19.7904C11.5801 19.9301 11.79 20 12 20C12.21 20 12.4199 19.9301 12.5943 19.7904C14.6272 18.1621 16.4444 16.273 18 14.1696" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
