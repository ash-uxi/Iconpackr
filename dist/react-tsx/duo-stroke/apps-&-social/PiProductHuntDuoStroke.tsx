import React from 'react';

/**
 * PiProductHuntDuoStroke icon from the duo-stroke style in apps-&-social category.
 */
interface PiProductHuntDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiProductHuntDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'product-hunt icon',
  ...props
}: PiProductHuntDuoStrokeProps): JSX.Element {
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
      <path d="M10 13.625V8H12.8125C14.3658 8 15.625 9.2592 15.625 10.8125C15.625 12.3658 14.3658 13.625 12.8125 13.625H10ZM10 13.625V17" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M2.8501 12.0001C2.8501 17.0535 6.94669 21.1501 12.0001 21.1501C17.0535 21.1501 21.1501 17.0535 21.1501 12.0001C21.1501 6.94669 17.0535 2.8501 12.0001 2.8501C6.94669 2.8501 2.8501 6.94669 2.8501 12.0001Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
