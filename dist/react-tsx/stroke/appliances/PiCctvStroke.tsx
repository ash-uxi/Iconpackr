import React from 'react';

/**
 * PiCctvStroke icon from the stroke style in appliances category.
 */
interface PiCctvStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCctvStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'cctv icon',
  ...props
}: PiCctvStrokeProps): JSX.Element {
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
      <path d="M2 21V15M2.00001 17.9999L7.41676 17.0972C7.77649 17.0372 8.07507 16.7862 8.19589 16.4421L9.85867 11.7066M21.2442 8.71214L19.9501 13.5418M9.85867 11.7066L15.8362 13.3083C16.3697 13.4512 16.9181 13.1346 17.061 12.6011L18.3838 7.66419C18.5268 7.13072 18.2102 6.58239 17.6767 6.43945L6.77234 3.51762C5.7054 3.23174 4.60873 3.8649 4.32285 4.93183L3.51763 7.93693C3.23175 9.00387 3.86491 10.1005 4.93185 10.3864L9.85867 11.7066Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
