import React from 'react';

/**
 * PiPlayCircleStroke icon from the stroke style in media category.
 */
interface PiPlayCircleStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPlayCircleStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'play-circle icon',
  ...props
}: PiPlayCircleStrokeProps): JSX.Element {
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
      <path d="M12.0001 21.1501C17.0535 21.1501 21.1501 17.0535 21.1501 12.0001C21.1501 6.94669 17.0535 2.8501 12.0001 2.8501C6.94669 2.8501 2.8501 6.94669 2.8501 12.0001C2.8501 17.0535 6.94669 21.1501 12.0001 21.1501Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M9.50012 11.896C9.50012 10.4641 9.50012 9.74818 9.79935 9.34849C10.0601 9.00019 10.4593 8.78227 10.8933 8.75127C11.3913 8.7157 11.9935 9.10284 13.1979 9.87713L13.3597 9.98113C14.4049 10.653 14.9275 10.989 15.108 11.4161C15.2657 11.7894 15.2657 12.2105 15.108 12.5838C14.9275 13.011 14.4049 13.3469 13.3597 14.0188L13.1979 14.1228C11.9935 14.8971 11.3913 15.2842 10.8933 15.2487C10.4593 15.2177 10.0601 14.9997 9.79935 14.6514C9.50012 14.2517 9.50012 13.5358 9.50012 12.104V11.896Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
