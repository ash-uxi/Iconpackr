import React from 'react';

/**
 * PiFile02HeartStroke icon from the stroke style in files-&-folders category.
 */
interface PiFile02HeartStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFile02HeartStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'file-02-heart icon',
  ...props
}: PiFile02HeartStrokeProps): JSX.Element {
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
      <path d="M20 11C20 9.34315 18.6569 8 17 8L16.4 8C16.0284 8 15.8426 8 15.6871 7.97538C14.8313 7.83983 14.1602 7.16865 14.0246 6.31287C14 6.1574 14 5.9716 14 5.6V5C14 3.34315 12.6569 2 11 2M20 10V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V6C4 3.79086 5.79086 2 8 2H12C16.4183 2 20 5.58172 20 10ZM12 17.625C11.65 17.625 8.5 15.9237 8.5 13.5418C8.5 12.3509 9.55 11.5002 10.6 11.5002C11.1159 11.5002 11.65 11.6704 12 12.1808C12.35 11.6704 12.875 11.4928 13.4 11.5002C14.45 11.515 15.5 12.3509 15.5 13.5418C15.5 15.9237 12.35 17.625 12 17.625Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
