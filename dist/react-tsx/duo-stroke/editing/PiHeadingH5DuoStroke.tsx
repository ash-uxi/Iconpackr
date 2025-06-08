import React from 'react';

/**
 * PiHeadingH5DuoStroke icon from the duo-stroke style in editing category.
 */
interface PiHeadingH5DuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiHeadingH5DuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'heading-h5 icon',
  ...props
}: PiHeadingH5DuoStrokeProps): JSX.Element {
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
      <path d="M20.5 10H17.5C16.6716 10 16 10.6716 16 11.5V14H19C20.1046 14 21 14.8954 21 16C21 17.1046 20.1046 18 19 18H16" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M4 12H12M4 18V6M12 18V6" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
