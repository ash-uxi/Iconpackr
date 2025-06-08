import React from 'react';

/**
 * PiFile02SearchStroke icon from the stroke style in files-&-folders category.
 */
interface PiFile02SearchStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFile02SearchStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'file-02-search icon',
  ...props
}: PiFile02SearchStrokeProps): JSX.Element {
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
      <path d="M20 11V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V6C4 3.79086 5.79086 2 8 2H11M20 11V10C20 5.58172 16.4183 2 12 2H11M20 11C20 9.34315 18.6569 8 17 8L16.4 8C16.0284 8 15.8426 8 15.6871 7.97538C14.8313 7.83983 14.1602 7.16865 14.0246 6.31287C14 6.1574 14 5.9716 14 5.6V5C14 3.34315 12.6569 2 11 2M15.5 17.5L14.1214 16.1214M14.1214 16.1214C14.6657 15.5771 15 14.8271 15 14C15 12.3414 13.6586 11 12 11C10.3414 11 9 12.3414 9 14C9 15.6586 10.3414 17 12 17C12.8272 17 13.5771 16.6657 14.1214 16.1214Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
