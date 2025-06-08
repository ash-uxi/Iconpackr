import React from 'react';

/**
 * PiFaceWinkStroke icon from the stroke style in general category.
 */
interface PiFaceWinkStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFaceWinkStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'face-wink icon',
  ...props
}: PiFaceWinkStrokeProps): JSX.Element {
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
      <path d="M9.00012 10V11M15.1072 11.207L14.4001 10.4999L15.1072 9.79289M8.42932 14.5C9.33678 15.4257 10.6013 16 12 16C13.3987 16 14.6633 15.4257 15.5708 14.5M12.0001 21.1501C6.94669 21.1501 2.8501 17.0535 2.8501 12.0001C2.8501 6.94669 6.94669 2.8501 12.0001 2.8501C17.0535 2.8501 21.1501 6.94669 21.1501 12.0001C21.1501 17.0535 17.0535 21.1501 12.0001 21.1501Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
