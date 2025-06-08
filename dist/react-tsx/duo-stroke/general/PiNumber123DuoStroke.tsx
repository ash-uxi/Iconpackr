import React from 'react';

/**
 * PiNumber123DuoStroke icon from the duo-stroke style in general category.
 */
interface PiNumber123DuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNumber123DuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'number-123 icon',
  ...props
}: PiNumber123DuoStrokeProps): JSX.Element {
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
      <path d="M13.6107 15.9998H8.62695V15.179C10.0751 14.1647 11.559 13.0628 12.7458 11.7334C13.5386 10.8454 13.6263 9.51641 12.7719 8.62388C12.078 7.89894 10.8779 7.66135 9.95288 8.02111C9.32826 8.26403 8.97265 8.75071 8.62695 9.28961M16.6378 14.5656C16.9835 15.1045 17.3391 15.5912 17.9637 15.8341C18.8888 16.1939 20.0889 15.9563 20.7828 15.2314C21.6371 14.3388 21.5494 13.0098 20.7567 12.1218L18.1023 11.4998L20.7567 7.99976H16.6378" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M4.99692 16V8C3.96522 8.25264 3.17685 8.96307 2.70898 9.89879" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
