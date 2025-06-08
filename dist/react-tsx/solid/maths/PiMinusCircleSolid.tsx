import React from 'react';

/**
 * PiMinusCircleSolid icon from the solid style in maths category.
 */
interface PiMinusCircleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMinusCircleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'minus-circle icon',
  ...props
}: PiMinusCircleSolidProps): JSX.Element {
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
      <path d="M1.8501 12.0001C1.8501 6.39441 6.39441 1.8501 12.0001 1.8501C17.6058 1.8501 22.1501 6.39441 22.1501 12.0001C22.1501 17.6058 17.6058 22.1501 12.0001 22.1501C6.39441 22.1501 1.8501 17.6058 1.8501 12.0001ZM8.8999 11C8.34762 11 7.8999 11.4477 7.8999 12C7.8999 12.5523 8.34762 13 8.8999 13H15.0999C15.6522 13 16.0999 12.5523 16.0999 12C16.0999 11.4477 15.6522 11 15.0999 11H8.8999Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
