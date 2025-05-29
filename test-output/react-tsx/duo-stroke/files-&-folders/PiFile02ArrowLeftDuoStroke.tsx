import React from 'react';

/**
 * PiFile02ArrowLeftDuoStroke icon from the duo-stroke style in files-&-folders category.
 */
interface PiFile02ArrowLeftDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

export default function PiFile02ArrowLeftDuoStroke({
  size = 24,
  color,
  className,
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
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{color: color || "currentColor"}}
      
      {...props}
    >
      
    </svg>
  );
}
