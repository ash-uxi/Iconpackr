import React from 'react';

/**
 * PiFile02ArrowLeftDuoStroke icon from the duo-stroke style in files-&-folders category.
 */
interface PiFile02ArrowLeftDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFile02ArrowLeftDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'file-02-arrow-left icon',
  ...props
}: PiFile02ArrowLeftDuoStrokeProps): JSX.Element {
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
      <path d="M10.8744 12C10.2164 12.4935 9.62215 13.066 9.10493 13.7043C9.03498 13.7906 9 13.8953 9 14M10.8744 16C10.2164 15.5065 9.62215 14.934 9.10493 14.2957C9.03498 14.2094 9 14.1047 9 14M9 14L15 14M20 10C20 5.58172 16.4183 2 12 2H11C12.6569 2 14 3.34315 14 5V5.6C14 5.9716 14 6.1574 14.0246 6.31287C14.1602 7.16865 14.8313 7.83983 15.6871 7.97538C15.8426 8 16.0284 8 16.4 8L17 8C18.6569 8 20 9.34315 20 11V10Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M16 22H8C5.79086 22 4 20.2091 4 18V6C4 3.79086 5.79086 2 8 2H12C16.4183 2 20 5.58172 20 10V18C20 20.2091 18.2091 22 16 22Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
