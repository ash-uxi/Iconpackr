import React from 'react';

/**
 * PiCircleDotSolid icon from the solid style in general category.
 */
interface PiCircleDotSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCircleDotSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'circle-dot icon',
  ...props
}: PiCircleDotSolidProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M1.8501 11.9996C1.8501 6.39392 6.39441 1.84961 12.0001 1.84961C17.6058 1.84961 22.1501 6.39392 22.1501 11.9996C22.1501 17.6053 17.6058 22.1496 12.0001 22.1496C6.39441 22.1496 1.8501 17.6053 1.8501 11.9996ZM12 9.9C10.8402 9.9 9.9 10.8402 9.9 12C9.9 13.1598 10.8402 14.1 12 14.1C13.1598 14.1 14.1 13.1598 14.1 12C14.1 10.8402 13.1598 9.9 12 9.9Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
