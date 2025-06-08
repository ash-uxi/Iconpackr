import React from 'react';

/**
 * PiHeadingH4Stroke icon from the stroke style in editing category.
 */
interface PiHeadingH4StrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiHeadingH4Stroke({
  size = 24,
  color,
  className,
  ariaLabel = 'heading-h4 icon',
  ...props
}: PiHeadingH4StrokeProps): JSX.Element {
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
      <path d="M4 12H12M4 18V6M12 18V6M17 10L16.2392 13.8039C16.1155 14.4227 16.5888 15 17.2198 15H21M21 15V12M21 15V18" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
