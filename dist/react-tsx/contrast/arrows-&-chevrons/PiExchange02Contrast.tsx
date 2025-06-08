import React from 'react';

/**
 * PiExchange02Contrast icon from the contrast style in arrows-&-chevrons category.
 */
interface PiExchange02ContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiExchange02Contrast({
  size = 24,
  color,
  className,
  ariaLabel = 'exchange-02 icon',
  ...props
}: PiExchange02ContrastProps): JSX.Element {
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
      <g fill="currentColor" opacity=".28">
    <path d="M12.145 8.604A20.6 20.6 0 0 1 16.031 5l-.165 2.2a24 24 0 0 0 0 3.6l.165 2.2a20.6 20.6 0 0 1-3.886-3.604.62.62 0 0 1 0-.792M7.97 11a20.6 20.6 0 0 1 3.885 3.604.62.62 0 0 1 0 .792A20.6 20.6 0 0 1 7.97 19l.166-2.2a24 24 0 0 0 0-3.6z"/>
  </g>
  <path d="M15.798 9H20m-4.202 0q0-.9.067-1.8l.166-2.2a20.6 20.6 0 0 0-3.886 3.604.62.62 0 0 0 0 .792A20.6 20.6 0 0 0 16.03 13l-.166-2.2q-.067-.9-.067-1.8m-7.596 6H4m4.202 0q0-.9-.067-1.8L7.969 11a20.6 20.6 0 0 1 3.886 3.604.62.62 0 0 1 0 .792A20.6 20.6 0 0 1 7.97 19l.166-2.2q.067-.9.067-1.8"/>
    </svg>
  );
}
