import React from 'react';

/**
 * PiLaptopStroke icon from the stroke style in devices category.
 */
interface PiLaptopStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLaptopStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'laptop icon',
  ...props
}: PiLaptopStrokeProps): JSX.Element {
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
      <path d="M21 16V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V16M21 16L3 16M21 16C21.5523 16 22 16.4477 22 17C22 18.6569 20.6569 20 19 20L5 20C3.34315 20 2 18.6569 2 17C2 16.4477 2.44772 16 3 16" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
