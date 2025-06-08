import React from 'react';

/**
 * PiAlignBottomSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiAlignBottomSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlignBottomSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'align-bottom icon',
  ...props
}: PiAlignBottomSolidProps): JSX.Element {
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
      <path d="M13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4V11.1242C9.99822 11.104 8.99691 11.0534 7.99744 10.9724C7.44696 10.9278 6.96454 11.3379 6.91993 11.8883C6.89965 12.1386 6.97334 12.3748 7.11147 12.5621C8.21981 14.0838 9.51489 15.4514 10.9644 16.6308C11.2639 16.8745 11.6305 17 12 17C12.3695 17 12.7361 16.8745 13.0356 16.6308C14.4851 15.4514 15.7802 14.0838 16.8885 12.5621C17.0267 12.3748 17.1003 12.1386 17.0801 11.8883C17.0355 11.3379 16.553 10.9278 16.0026 10.9724C15.0031 11.0534 14.0018 11.104 13 11.1242V4Z" fill="currentColor" stroke="none"/>
  <path d="M5 19C4.44772 19 4 19.4477 4 20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20C20 19.4477 19.5523 19 19 19H5Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
