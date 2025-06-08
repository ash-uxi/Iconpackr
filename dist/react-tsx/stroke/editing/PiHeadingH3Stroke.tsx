import React from 'react';

/**
 * PiHeadingH3Stroke icon from the stroke style in editing category.
 */
interface PiHeadingH3StrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiHeadingH3Stroke({
  size = 24,
  color,
  className,
  ariaLabel = 'heading-h3 icon',
  ...props
}: PiHeadingH3StrokeProps): JSX.Element {
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
      <path d="M4 12H12M4 18V6M12 18V6M18.7324 14H18M18.7324 14C19.837 14 20.7324 13.1046 20.7324 12C20.7324 10.8954 19.837 10 18.7324 10H17.7324C16.9922 10 16.3458 10.4022 16 11M18.7324 14C19.837 14 20.7324 14.8954 20.7324 16C20.7324 17.1046 19.837 18 18.7324 18H17.7324C16.9922 18 16.3458 17.5978 16 17" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
