import React from 'react';

/**
 * PiArrowUpCircleDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
interface PiArrowUpCircleDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowUpCircleDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-up-circle icon',
  ...props
}: PiArrowUpCircleDuoStrokeProps): JSX.Element {
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
      <path d="M12.0001 21.1501C17.0535 21.1501 21.1501 17.0535 21.1501 12.0001C21.1501 6.94669 17.0535 2.8501 12.0001 2.8501C6.94669 2.8501 2.8501 6.94669 2.8501 12.0001C2.8501 17.0535 6.94669 21.1501 12.0001 21.1501Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M8 11.9486C9.03704 10.5241 10.2485 9.24467 11.6038 8.1419C11.72 8.0473 11.86 8 12 8M16 11.9486C14.963 10.5241 13.7515 9.24467 12.3962 8.1419C12.28 8.0473 12.14 8 12 8M12 8L12 16" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
