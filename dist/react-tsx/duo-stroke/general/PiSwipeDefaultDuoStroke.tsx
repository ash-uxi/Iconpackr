import React from 'react';

/**
 * PiSwipeDefaultDuoStroke icon from the duo-stroke style in general category.
 */
interface PiSwipeDefaultDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSwipeDefaultDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'swipe-default icon',
  ...props
}: PiSwipeDefaultDuoStrokeProps): JSX.Element {
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
      <path d="M15 4.37109C17.1942 4.84502 19.226 5.75536 21 7.00672M2 7.00672C2.93328 6.34839 3.93791 5.78445 5 5.32878" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M6.73133 19.2679L2.48825 12.7401C2.23111 12.3445 2.37552 11.8132 2.79754 11.6022C4.0954 10.9532 5.66835 11.2709 6.61268 12.3726L8.00588 13.998V3.99805C8.00588 2.89348 8.90131 1.99805 10.0059 1.99805C11.1105 1.99805 12.0059 2.89348 12.0059 3.99805V9.99805L16.8142 10.7994C20.3397 11.3872 20.488 15.3789 19.4659 18.1047C17.6655 22.9058 9.48746 23.5082 6.73133 19.2679Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
