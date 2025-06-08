import React from 'react';

/**
 * PiStopBigStroke icon from the stroke style in media category.
 */
interface PiStopBigStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiStopBigStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'stop-big icon',
  ...props
}: PiStopBigStrokeProps): JSX.Element {
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
      <path d="M6 9.2C6 8.07989 6 7.51984 6.21799 7.09202C6.40973 6.71569 6.71569 6.40973 7.09202 6.21799C7.51984 6 8.0799 6 9.2 6H14.8C15.9201 6 16.4802 6 16.908 6.21799C17.2843 6.40973 17.5903 6.71569 17.782 7.09202C18 7.51984 18 8.0799 18 9.2V14.8C18 15.9201 18 16.4802 17.782 16.908C17.5903 17.2843 17.2843 17.5903 16.908 17.782C16.4802 18 15.9201 18 14.8 18H9.2C8.07989 18 7.51984 18 7.09202 17.782C6.71569 17.5903 6.40973 17.2843 6.21799 16.908C6 16.4802 6 15.9201 6 14.8V9.2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
