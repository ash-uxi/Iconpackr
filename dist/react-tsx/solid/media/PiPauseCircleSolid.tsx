import React from 'react';

/**
 * PiPauseCircleSolid icon from the solid style in media category.
 */
interface PiPauseCircleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPauseCircleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'pause-circle icon',
  ...props
}: PiPauseCircleSolidProps): JSX.Element {
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
      <path d="M1.8501 12.0001C1.8501 6.39441 6.39441 1.8501 12.0001 1.8501C17.6058 1.8501 22.1501 6.39441 22.1501 12.0001C22.1501 17.6058 17.6058 22.1501 12.0001 22.1501C6.39441 22.1501 1.8501 17.6058 1.8501 12.0001ZM10.4175 8.8999C10.4175 8.34762 9.96977 7.8999 9.41748 7.8999C8.8652 7.8999 8.41748 8.34762 8.41748 8.8999V15.0999C8.41748 15.6522 8.8652 16.0999 9.41748 16.0999C9.96977 16.0999 10.4175 15.6522 10.4175 15.0999V8.8999ZM15.5829 8.8999C15.5829 8.34762 15.1352 7.8999 14.5829 7.8999C14.0306 7.8999 13.5829 8.34762 13.5829 8.8999V15.0999C13.5829 15.6522 14.0306 16.0999 14.5829 16.0999C15.1352 16.0999 15.5829 15.6522 15.5829 15.0999V8.8999Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
