import React from 'react';

/**
 * PiThreeDotsMenuHorizontalCircleDuoStroke icon from the duo-stroke style in general category.
 */
interface PiThreeDotsMenuHorizontalCircleDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiThreeDotsMenuHorizontalCircleDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'three-dots-menu-horizontal-circle icon',
  ...props
}: PiThreeDotsMenuHorizontalCircleDuoStrokeProps): JSX.Element {
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
      <path d="M21.1501 11.9996C21.1501 6.9462 17.0535 2.84961 12.0001 2.84961C6.94669 2.84961 2.8501 6.9462 2.8501 11.9996C2.8501 17.053 6.94669 21.1496 12.0001 21.1496C17.0535 21.1496 21.1501 17.053 21.1501 11.9996Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M8 12H8.01M12 12H12.01M16 12H16.01" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
